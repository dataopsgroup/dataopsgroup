
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
 * Implements Core Web Vitals best practices and preserves aspect ratios
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

  // Calculate the proper aspect ratio from the original image
  const aspectRatio = naturalDimensions 
    ? `${naturalDimensions.width}/${naturalDimensions.height}`
    : `${width}/${height}`;

  // Simple image loading with fallback
  useEffect(() => {
    // Reset states when src changes
    setIsLoaded(false);
    setHasError(false);
    setImageSrc(src);
    setNaturalDimensions(null);

    // Test if the image exists and get natural dimensions
    const img = new Image();
    img.onload = () => {
      setNaturalDimensions({ width: img.naturalWidth, height: img.naturalHeight });
      setIsLoaded(true);
    };
    img.onerror = () => {
      console.warn(`Image failed to load: ${src}`);
      setHasError(true);
      // Try fallback to original format if it was a WebP
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
  };

  const handleError = () => {
    console.error(`Failed to load image: ${imageSrc}`);
    setHasError(true);
    
    // Try fallback if we haven't already
    if (!hasError && imageSrc.includes('.webp')) {
      const fallbackSrc = imageSrc.replace('.webp', '.jpg');
      setImageSrc(fallbackSrc);
    }
  };

  // Show placeholder while loading or if error occurred
  if (!isLoaded || hasError) {
    return (
      <div 
        className={cn('bg-gray-200 flex items-center justify-center', className)}
        style={{ width: '100%', aspectRatio }}
        aria-label={hasError ? 'Image failed to load' : 'Loading image...'}
      >
        {hasError ? (
          <span className="text-gray-500 text-sm">Image unavailable</span>
        ) : (
          <div className="animate-pulse bg-gray-300 w-full h-full" />
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
      className={cn(
        'transition-opacity duration-300 w-full h-auto',
        isLoaded ? 'opacity-100' : 'opacity-0',
        className
      )}
      onLoad={handleLoad}
      onError={handleError}
      style={{ aspectRatio }}
    />
  );
};

export default OptimizedWebPImage;
