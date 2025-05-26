
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedWebPImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
}

/**
 * High-performance WebP image component with JPEG fallback
 * Optimized for Core Web Vitals and 90+ PageSpeed score
 */
const OptimizedWebPImage = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes = '100vw',
  quality = 85
}: OptimizedWebPImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [imageSrc, setImageSrc] = useState(src);
  const [naturalDimensions, setNaturalDimensions] = useState<{width: number, height: number} | null>(null);

  // Calculate proper aspect ratio to prevent CLS
  const aspectRatio = naturalDimensions 
    ? `${naturalDimensions.width}/${naturalDimensions.height}`
    : `${width}/${height}`;

  // Preload critical images for better LCP
  useEffect(() => {
    if (priority && typeof document !== 'undefined') {
      const preloadLink = document.querySelector(`link[rel="preload"][href="${src}"]`);
      if (!preloadLink) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = src;
        link.as = 'image';
        link.setAttribute('fetchpriority', 'high');
        document.head.appendChild(link);
      }
    }
  }, [src, priority]);

  // Enhanced image loading with natural dimensions
  useEffect(() => {
    setIsLoaded(false);
    setHasError(false);
    setImageSrc(src);
    setNaturalDimensions(null);

    const img = new Image();
    img.onload = () => {
      setNaturalDimensions({ width: img.naturalWidth, height: img.naturalHeight });
      setIsLoaded(true);
    };
    img.onerror = () => {
      console.warn(`Image failed to load: ${src}`);
      setHasError(true);
      // Try JPEG fallback for WebP images
      if (src.includes('.webp')) {
        const fallbackSrc = src.replace('.webp', '.jpg');
        setImageSrc(fallbackSrc);
      }
    };
    img.src = src;
  }, [src]);

  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
    
    // Mark LCP candidate for performance monitoring
    if (priority && window.performance && 'mark' in window.performance) {
      window.performance.mark('lcp-image-loaded');
    }
  };

  const handleError = () => {
    console.error(`Failed to load image: ${imageSrc}`);
    setHasError(true);
    
    // Enhanced fallback logic
    if (!hasError && imageSrc.includes('.webp')) {
      const fallbackSrc = imageSrc.replace('.webp', '.jpg');
      setImageSrc(fallbackSrc);
    } else if (!hasError && !imageSrc.includes('placeholder')) {
      // Final fallback to placeholder
      setImageSrc('/placeholder.svg');
    }
  };

  // Optimized placeholder with proper dimensions for CLS prevention
  if (!isLoaded || hasError) {
    return (
      <div 
        className={cn('bg-gray-200 flex items-center justify-center', className)}
        style={{ 
          width: '100%', 
          aspectRatio,
          minHeight: priority ? `${height}px` : 'auto'
        }}
        aria-label={hasError ? 'Image failed to load' : 'Loading image...'}
      >
        {hasError ? (
          <span className="text-gray-500 text-sm">Image unavailable</span>
        ) : (
          <div className="animate-pulse bg-gray-300 w-full h-full rounded" />
        )}
      </div>
    );
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      width={naturalDimensions?.width || width}
      height={naturalDimensions?.height || height}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'low'}
      className={cn(
        'transition-opacity duration-300 w-full h-auto',
        isLoaded ? 'opacity-100' : 'opacity-0',
        className
      )}
      onLoad={handleLoad}
      onError={handleError}
      style={{ aspectRatio }}
      sizes={sizes}
      data-lcp={priority ? 'true' : 'false'}
    />
  );
};

export default OptimizedWebPImage;
