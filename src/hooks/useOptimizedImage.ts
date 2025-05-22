
import { useState, useEffect, useRef, RefObject } from 'react';
import { reportLCPMetric } from '@/utils/image-utils';

interface UseOptimizedImageProps {
  src: string;
  placeholder?: string;
  priority?: boolean;
  isLCP?: boolean;
  blur?: boolean;
  rootMargin?: string;
  threshold?: number;
}

interface UseOptimizedImageReturn {
  imgRef: RefObject<HTMLImageElement>;
  isLoaded: boolean;
  isInView: boolean;
  handleLoad: () => void;
  handleError: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}

/**
 * Enhanced hook for optimized image loading with intersection observer
 * Combines features from both OptimizedImage and ProgressiveImage
 */
export const useOptimizedImage = ({
  src,
  placeholder = '/placeholder.svg',
  priority = false,
  isLCP = false,
  blur = true,
  rootMargin = '200px',
  threshold = 0.01
}: UseOptimizedImageProps): UseOptimizedImageReturn => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority || isLCP);
  
  // Set up intersection observer for non-priority images
  useEffect(() => {
    if (priority || isLCP || !imgRef.current) {
      return;
    }
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin,
        threshold
      }
    );
    
    observer.observe(imgRef.current);
    
    return () => {
      observer.disconnect();
    };
  }, [priority, isLCP, rootMargin, threshold]);
  
  // Preload LCP images
  useEffect(() => {
    if ((priority || isLCP) && typeof document !== 'undefined') {
      const preloadLink = document.querySelector(`link[rel="preload"][href="${src}"]`);
      
      if (!preloadLink) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = src;
        link.as = 'image';
        link.setAttribute('fetchpriority', 'high');
        document.head.appendChild(link);
        
        return () => {
          if (link.parentNode) {
            link.parentNode.removeChild(link);
          }
        };
      }
    }
  }, [src, priority, isLCP]);
  
  // Pre-validate image exists
  useEffect(() => {
    if (typeof Image !== 'undefined' && src && src !== placeholder) {
      const img = new Image();
      img.src = src;
      
      img.onerror = () => {
        console.warn(`Image preload failed: ${src}, will use placeholder`);
        if (imgRef.current && imgRef.current.src !== placeholder) {
          imgRef.current.src = placeholder;
        }
      };
    }
  }, [src, placeholder]);
  
  // Report LCP for important images
  useEffect(() => {
    if (!isLCP || !isLoaded) return;
    reportLCPMetric(src);
  }, [isLCP, isLoaded, src]);
  
  // Clean up any object URLs when component unmounts
  useEffect(() => {
    return () => {
      if (imgRef.current?.src && imgRef.current.src.startsWith('blob:')) {
        URL.revokeObjectURL(imgRef.current.src);
      }
    };
  }, []);
  
  const handleLoad = () => {
    setIsLoaded(true);
    
    // Priority hint for hero images
    if (isLCP && imgRef.current) {
      imgRef.current.setAttribute('fetchpriority', 'high');
    }
    
    // Report LCP if it's a hero image using alternative method from ProgressiveImage
    if (isLCP && window.performance && 'measure' in window.performance) {
      try {
        window.performance.measure('lcp-image-loaded', 'navigationStart');
        if (window.gtag) {
          const lcpTiming = window.performance.getEntriesByName('lcp-image-loaded')[0];
          window.gtag('event', 'web_vitals', {
            metric_name: 'LCP',
            metric_value: lcpTiming.duration,
            metric_delta: 0
          });
        }
      } catch (e) {
        console.error('Error measuring LCP:', e);
      }
    }
  };
  
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error(`Failed to load image: ${src}`);
    
    // Try to load from cache if available
    if ('caches' in window) {
      window.caches.match(src).then(response => {
        if (response) {
          return response.blob();
        }
        // Fall back to placeholder
        if (imgRef.current) {
          imgRef.current.src = placeholder;
        }
      }).catch(() => {
        // Final fallback - use placeholder
        if (imgRef.current) {
          imgRef.current.src = placeholder;
        }
      });
    } else if (imgRef.current) {
      imgRef.current.src = placeholder;
    }
  };
  
  return {
    imgRef,
    isLoaded,
    isInView,
    handleLoad,
    handleError
  };
};
