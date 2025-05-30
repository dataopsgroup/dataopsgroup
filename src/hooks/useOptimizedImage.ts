
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
 * Enhanced hook for optimized image loading with balanced performance
 * Uses consistent threshold and loading strategy across all devices
 */
export const useOptimizedImage = ({
  src,
  placeholder = '/placeholder.svg',
  priority = false,
  isLCP = false,
  blur = true,
  rootMargin = '150px',
  threshold = 0.15 // Universal threshold for all devices
}: UseOptimizedImageProps): UseOptimizedImageReturn => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  // For priority/LCP images, start with isInView = true to prevent conflicts
  const [isInView, setIsInView] = useState(priority || isLCP);
  
  // Enhanced intersection observer with universal configuration
  useEffect(() => {
    if (priority || isLCP || !imgRef.current || typeof window === 'undefined') {
      return;
    }
    
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
            
            // Performance mark for monitoring
            performance.mark(`image-visible-${src.split('/').pop()}`);
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
  }, [priority, isLCP, rootMargin, threshold, src]);
  
  // Enhanced preloading for critical images with format optimization
  useEffect(() => {
    if ((priority || isLCP) && typeof document !== 'undefined') {
      try {
        preloadCriticalImage(src);
      } catch (error) {
        console.warn('Failed to preload critical image:', error);
      }
    }
  }, [src, priority, isLCP]);
  
  // Enhanced LCP reporting with detailed metrics
  useEffect(() => {
    if (!isLCP || !isLoaded) return;
    
    try {
      reportLCPMetric(src);
      
      if (imgRef.current) {
        imgRef.current.setAttribute('data-lcp-candidate', 'true');
        imgRef.current.setAttribute('data-loaded-at', Date.now().toString());
        
        // Report to Core Web Vitals
        if (window.gtag) {
          window.gtag('event', 'lcp_candidate_loaded', {
            'event_category': 'Performance',
            'event_label': src.substring(0, 50),
            'value': Date.now()
          });
        }
      }
    } catch (error) {
      console.warn('LCP reporting failed:', error);
    }
  }, [isLCP, isLoaded, src]);
  
  const handleLoad = () => {
    setIsLoaded(true);
    
    // Performance mark for load completion
    performance.mark(`image-loaded-${src.split('/').pop()}`);
  };
  
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.warn(`Failed to load image: ${src}`);
    
    // Enhanced error reporting with context
    if (typeof window !== 'undefined' && window.gtag) {
      try {
        window.gtag('event', 'image_load_error', {
          'event_category': 'Performance',
          'event_label': src.substring(0, 100),
          'value': 1,
          'custom_parameters': {
            'error_type': 'load_failure',
            'image_format': src.split('.').pop() || 'unknown',
            'is_critical': priority || isLCP
          }
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
