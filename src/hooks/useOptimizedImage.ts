
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
 * Simplified and stabilized hook for optimized image loading
 * Focuses on reliability over complex optimizations
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
  
  // Simplified intersection observer with better error handling
  useEffect(() => {
    if (priority || isLCP || !imgRef.current || typeof window === 'undefined') {
      return;
    }
    
    // Check if IntersectionObserver is available
    if (!('IntersectionObserver' in window)) {
      setIsInView(true);
      return;
    }
    
    let observer: IntersectionObserver;
    
    try {
      observer = new IntersectionObserver(
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
    } catch (error) {
      console.warn('IntersectionObserver failed, showing image immediately:', error);
      setIsInView(true);
    }
    
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [priority, isLCP, rootMargin, threshold]);
  
  // Simplified preloading for critical images
  useEffect(() => {
    if ((priority || isLCP) && typeof document !== 'undefined') {
      try {
        preloadCriticalImage(src);
      } catch (error) {
        console.warn('Failed to preload critical image:', error);
      }
    }
  }, [src, priority, isLCP]);
  
  // Simple LCP reporting without complex measurements
  useEffect(() => {
    if (!isLCP || !isLoaded) return;
    
    try {
      reportLCPMetric(src);
      
      if (imgRef.current) {
        imgRef.current.setAttribute('data-lcp-candidate', 'true');
      }
    } catch (error) {
      console.warn('LCP reporting failed:', error);
    }
  }, [isLCP, isLoaded, src]);
  
  const handleLoad = () => {
    setIsLoaded(true);
    
    // Simple priority hints for important images
    if (isLCP && imgRef.current) {
      try {
        imgRef.current.setAttribute('data-loaded-at', Date.now().toString());
      } catch (error) {
        console.warn('Failed to set load timestamp:', error);
      }
    }
  };
  
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.warn(`Failed to load image: ${src}`);
    
    // Simple fallback strategy
    if (imgRef.current && imgRef.current.src !== placeholder) {
      imgRef.current.src = placeholder;
    }
    
    // Optional error reporting
    if (typeof window !== 'undefined' && window.gtag) {
      try {
        window.gtag('event', 'image_load_error', {
          'event_category': 'Performance',
          'event_label': src,
          'value': 1
        });
      } catch (error) {
        // Silently fail if analytics reporting fails
      }
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
