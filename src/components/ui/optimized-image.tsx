
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  aspectRatio?: number;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  sizes?: string;
  quality?: number;
  isLCP?: boolean; // Flag to identify Largest Contentful Paint images
}

/**
 * Enhanced OptimizedImage with Core Web Vitals optimizations:
 * - Properly sets width/height to avoid layout shifts (CLS)
 * - Prioritizes LCP images
 * - Uses Intersection Observer for below-the-fold images
 * - Sets appropriate loading and decoding attributes
 */
const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  aspectRatio,
  objectFit = 'cover',
  loading,
  decoding,
  sizes = '100vw',
  quality = 85,
  isLCP = false,
  ...props
}: OptimizedImageProps) => {
  // Reference to the image element
  const imgRef = useRef<HTMLImageElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority || isLCP);
  
  // Check if the image is a remote URL that could benefit from optimization
  const isRemoteImage = src.startsWith('http') && !src.includes('lovable-uploads');
  
  // Check if this is a local asset that should be versioned for cache control
  const isLocalAsset = !src.startsWith('http') && !src.includes('lovable-uploads');
  
  // Add cache busting for local assets if needed
  const imageSrc = isLocalAsset && typeof window !== 'undefined' && window.APP_VERSION ? 
    `${src}?v=${window.APP_VERSION}` : src;
  
  // Determine image dimensions for layout stability
  const imgWidth = width || undefined;
  const imgHeight = height || undefined;
  
  // Determine loading strategy
  const loadingStrategy = priority || isLCP ? 'eager' : (loading || 'lazy');
  const decodingStrategy = priority || isLCP ? 'sync' : (decoding || 'async');
  
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
        rootMargin: '200px', // Load images 200px before they come into view
        threshold: 0.01
      }
    );
    
    observer.observe(imgRef.current);
    
    return () => {
      observer.disconnect();
    };
  }, [priority, isLCP]);
  
  // Report LCP for important images
  useEffect(() => {
    if (!isLCP || !isLoaded) return;
    
    if (window.performance && 'mark' in window.performance) {
      try {
        window.performance.mark('lcp-image-loaded');
        
        if ('getEntriesByName' in window.performance && 'measure' in window.performance) {
          window.performance.measure('lcp-image-duration', 'navigationStart', 'lcp-image-loaded');
          
          const lcpMetric = window.performance.getEntriesByName('lcp-image-duration')[0];
          
          if (lcpMetric && window.gtag) {
            window.gtag('event', 'web_vitals', {
              metric_name: 'LCP',
              metric_value: Math.round(lcpMetric.duration),
              metric_delta: 0,
              metric_id: `img-${src.split('/').pop()}`
            });
          }
        }
      } catch (err) {
        console.error('Error reporting LCP:', err);
      }
    }
  }, [isLCP, isLoaded, src]);
  
  const handleLoad = () => {
    setIsLoaded(true);
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
  
  // Construct the image element with optimization attributes
  const imageElement = (
    <>
      <img
        ref={imgRef}
        src={isInView ? imageSrc : '/placeholder.svg'} // Only load when in view
        alt={alt}
        width={imgWidth}
        height={imgHeight}
        className={cn(
          'max-w-full',
          objectFit && `object-${objectFit}`,
          !isLoaded && 'opacity-0',
          isLoaded && 'opacity-100 transition-opacity duration-300',
          className
        )}
        loading={loadingStrategy}
        decoding={decodingStrategy}
        sizes={sizes}
        onLoad={handleLoad}
        onError={handleError}
        fetchPriority={isLCP || priority ? 'high' : 'auto'}
        {...props}
      />
      <noscript>
        <img
          src={imageSrc}
          alt={alt}
          width={imgWidth}
          height={imgHeight}
          className={className}
        />
      </noscript>
    </>
  );
  
  // If an aspect ratio is specified, wrap the image in an AspectRatio component
  if (aspectRatio) {
    return (
      <AspectRatio ratio={aspectRatio} className={cn('overflow-hidden', className)}>
        {imageElement}
      </AspectRatio>
    );
  }

  return imageElement;
};

export default OptimizedImage;
