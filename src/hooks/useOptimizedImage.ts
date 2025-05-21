
import { useState, useEffect, useRef, RefObject } from 'react';
import { reportLCPMetric } from '@/utils/image-utils';

interface UseOptimizedImageProps {
  src: string;
  priority?: boolean;
  isLCP?: boolean;
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
 * Custom hook for optimized image loading with intersection observer
 */
export const useOptimizedImage = ({
  src,
  priority = false,
  isLCP = false,
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
  
  // Report LCP for important images
  useEffect(() => {
    if (!isLCP || !isLoaded) return;
    reportLCPMetric(src);
  }, [isLCP, isLoaded, src]);
  
  const handleLoad = () => {
    setIsLoaded(true);
    
    // Priority hint for hero images
    if (isLCP && imgRef.current) {
      imgRef.current.setAttribute('fetchpriority', 'high');
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
          imgRef.current.src = '/placeholder.svg';
        }
      });
    } else if (imgRef.current) {
      imgRef.current.src = '/placeholder.svg';
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
