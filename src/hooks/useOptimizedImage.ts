
import { useState, useEffect, useRef, RefObject } from 'react';
import { reportLCPMetric, preloadCriticalImage } from '@/utils/image-utils';

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
 * Enhanced hook for optimized image loading with modern format support
 * Combines intersection observer, format detection, and performance monitoring
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
  
  // Enhanced preloading for LCP images with modern formats
  useEffect(() => {
    if ((priority || isLCP) && typeof document !== 'undefined') {
      preloadCriticalImage(src);
    }
  }, [src, priority, isLCP]);
  
  // Pre-validate image exists with better error handling
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
  
  // Enhanced LCP reporting
  useEffect(() => {
    if (!isLCP || !isLoaded) return;
    
    // Report LCP metrics
    reportLCPMetric(src);
    
    // Mark the image as LCP candidate for Core Web Vitals monitoring
    if (imgRef.current) {
      imgRef.current.setAttribute('data-lcp-candidate', 'true');
    }
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
    
    // Enhanced priority hints for hero images
    if (isLCP && imgRef.current) {
      imgRef.current.setAttribute('fetchpriority', 'high');
      imgRef.current.setAttribute('data-loaded-at', Date.now().toString());
    }
    
    // Enhanced LCP measurement for better monitoring
    if (isLCP && window.performance && 'measure' in window.performance) {
      try {
        const navigationStart = window.performance.timing?.navigationStart || 0;
        const loadTime = Date.now() - navigationStart;
        
        if (window.gtag) {
          window.gtag('event', 'lcp_image_loaded', {
            'event_category': 'Performance',
            'event_label': `LCP Image: ${src.split('/').pop()}`,
            'value': loadTime,
            'custom_map': {
              'metric_1': 'lcp_time'
            }
          });
        }
      } catch (e) {
        console.error('Error measuring LCP:', e);
      }
    }
  };
  
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.error(`Failed to load image: ${src}`);
    
    // Enhanced fallback strategy
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
    
    // Report image loading errors for monitoring
    if (window.gtag) {
      window.gtag('event', 'image_load_error', {
        'event_category': 'Performance',
        'event_label': src,
        'value': 1
      });
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
