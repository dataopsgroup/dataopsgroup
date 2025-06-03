
import { useState, useEffect, useRef, RefObject } from 'react';

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
 */
export const useOptimizedImage = ({
  src,
  placeholder = '/placeholder.svg',
  priority = false,
  isLCP = false,
  blur = true,
  rootMargin = '150px',
  threshold = 0.15
}: UseOptimizedImageProps): UseOptimizedImageReturn => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [isInView, setIsInView] = useState(typeof window === 'undefined' ? (priority || isLCP) : (priority || isLCP));
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Enhanced intersection observer with universal configuration
  useEffect(() => {
    if (typeof window === 'undefined' || priority || isLCP || !imgRef.current) {
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
            
            if (typeof performance !== 'undefined' && performance.mark) {
               performance.mark(`image-visible-${src.split('/').pop()}`);
            }
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
  
  const handleLoad = () => {
    setIsLoaded(true);
    
    if (typeof performance !== 'undefined' && performance.mark) {
      performance.mark(`image-loaded-${src.split('/').pop()}`);
    }
  };
  
  const handleError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.warn(`Failed to load image: ${src}`);
    
    if (typeof window !== 'undefined' && (window as any).gtag) {
      try {
        (window as any).gtag('event', 'image_load_error', {
          'event_category': 'Performance',
          'event_label': src.substring(0, 100),
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
