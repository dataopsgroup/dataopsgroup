
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface ImageElementProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  priority?: boolean;
  isLCP?: boolean;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  placeholder?: string;
  blur?: boolean;
  threshold?: number;
}

/**
 * Enhanced image element component with performance optimizations for Core Web Vitals
 * - Reduces CLS by maintaining aspect ratio and dimensions
 * - Improves LCP by properly setting loading priority and fetch attributes
 * - Uses Intersection Observer for efficiency and WebP/AVIF when supported
 * - Includes native browser lazy loading with JS fallback
 * - Reports performance metrics for LCP elements
 */
const ImageElement: React.FC<ImageElementProps> = ({
  src,
  alt,
  width,
  height,
  className,
  objectFit = 'cover',
  priority = false,
  isLCP = false,
  loading: loadingProp,
  decoding: decodingProp,
  placeholder = '/placeholder.svg',
  blur = true,
  threshold = 0.1,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority || isLCP);
  const [imgSrc, setImgSrc] = useState(priority || isLCP ? src : placeholder);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [supportsModernFormat, setSupportsModernFormat] = useState(false);
  
  // Check for WebP/AVIF support
  useEffect(() => {
    const checkImageSupport = async () => {
      // Check for WebP support first, then AVIF
      const webpSupported = await testWebP();
      if (webpSupported) {
        setSupportsModernFormat(true);
        return;
      }
      
      // If WebP not supported, try AVIF
      const avifSupported = await testAVIF();
      if (avifSupported) {
        setSupportsModernFormat(true);
      }
    };
    
    checkImageSupport();
  }, []);
  
  // Test for WebP support
  const testWebP = () => {
    return new Promise<boolean>(resolve => {
      const webP = new Image();
      webP.onload = () => resolve(true);
      webP.onerror = () => resolve(false);
      webP.src = 'data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==';
    });
  };
  
  // Test for AVIF support
  const testAVIF = () => {
    return new Promise<boolean>(resolve => {
      const avif = new Image();
      avif.onload = () => resolve(true);
      avif.onerror = () => resolve(false);
      avif.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=';
    });
  };
  
  // Set up intersection observer to load image only when in viewport
  useEffect(() => {
    if (!imgRef.current || priority || isLCP) return;
    
    observerRef.current = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          setImgSrc(src);
          observerRef.current?.disconnect();
        }
      },
      { threshold, rootMargin: '200px' }
    );
    
    observerRef.current.observe(imgRef.current);
    
    return () => {
      observerRef.current?.disconnect();
    };
  }, [src, priority, isLCP, threshold]);
  
  // Preload LCP images and apply additional optimizations
  useEffect(() => {
    if ((priority || isLCP) && typeof document !== 'undefined') {
      // Don't add duplicate preloads
      if (!document.querySelector(`link[rel="preload"][href="${src}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = src;
        link.as = 'image';
        link.fetchPriority = 'high';
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
    if (isLCP && isLoaded && typeof window !== 'undefined' && 'performance' in window) {
      try {
        // Mark when the LCP image is loaded
        window.performance.mark(`lcp-image-${src.split('/').pop()}-loaded`);
        
        // Measure time from navigation start
        window.performance.measure(
          `lcp-image-loaded-time`,
          'navigationStart',
          `lcp-image-${src.split('/').pop()}-loaded`
        );
        
        // Report to analytics if available
        if (window.gtag) {
          const lcpTiming = window.performance.getEntriesByName('lcp-image-loaded-time')[0];
          window.gtag('event', 'web_vitals', {
            metric_name: 'LCP',
            metric_value: Math.round(lcpTiming.duration),
            metric_delta: 0,
            metric_id: `img-${src.split('/').pop()}`
          });
        }
      } catch (e) {
        console.error('Error measuring LCP:', e);
      }
    }
  }, [isLCP, isLoaded, src]);
  
  // Handle image load completion
  const handleLoad = () => {
    setIsLoaded(true);
  };
  
  // Handle image load errors
  const handleError = () => {
    console.error(`Failed to load image: ${src}`);
    
    // Fall back to placeholder if loading fails
    if (imgRef.current) {
      imgRef.current.src = placeholder;
    }
  };
  
  // Enhanced loading strategy based on image importance
  const loadingStrategy = priority || isLCP ? 'eager' : (loadingProp || 'lazy');
  const decodingStrategy = priority || isLCP ? 'sync' : (decodingProp || 'async');
  
  // Try to get the best image format if applicable
  const getOptimizedImageUrl = (url: string): string => {
    // Only apply to lovable-uploads images or those without extension query params
    if (!url.includes('lovable-uploads') && (url.includes('.jpg') || url.includes('.png') || url.includes('.jpeg'))) {
      return url;
    }
    
    // For supported formats or uploads without extension
    if (supportsModernFormat) {
      // Add WebP format for supported browsers
      if (url.includes('?')) {
        return `${url}&format=webp`;
      } else {
        return `${url}?format=webp`;
      }
    }
    
    return url;
  };
  
  return (
    <>
      <img
        ref={imgRef}
        src={getOptimizedImageUrl(imgSrc)}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          'max-w-full',
          objectFit && `object-${objectFit}`,
          blur && !isLoaded && 'blur-sm scale-105',
          isLoaded ? 'opacity-100' : 'opacity-0',
          'transition-all duration-300',
          className
        )}
        loading={loadingStrategy}
        decoding={decodingStrategy}
        onLoad={handleLoad}
        onError={handleError}
        fetchPriority={isLCP || priority ? 'high' : 'auto'}
        {...props}
      />
      <noscript>
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
        />
      </noscript>
    </>
  );
};

export default ImageElement;
