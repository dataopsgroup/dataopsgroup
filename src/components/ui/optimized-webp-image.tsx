
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
 * Implements Core Web Vitals best practices
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
  const [supportsWebP, setSupportsWebP] = useState<boolean | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // Check WebP support
  useEffect(() => {
    const checkWebPSupport = () => {
      const webP = new Image();
      webP.onload = webP.onerror = () => {
        setSupportsWebP(webP.height === 2);
      };
      webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    };
    
    checkWebPSupport();
  }, []);

  // Generate WebP and fallback sources
  const getImageSrc = (format: 'webp' | 'jpg') => {
    const extension = format === 'webp' ? '.webp' : '.jpg';
    const baseSrc = src.replace(/\.(jpg|jpeg|png)$/i, '');
    return `${baseSrc}${extension}`;
  };

  // Generate srcset for responsive images
  const generateSrcSet = (format: 'webp' | 'jpg') => {
    const widths = [480, 768, 1024, 1280, 1536];
    return widths
      .map(w => `${getImageSrc(format)}?w=${w}&q=${quality} ${w}w`)
      .join(', ');
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  if (supportsWebP === null) {
    // Return placeholder while checking WebP support
    return (
      <div 
        className={cn('bg-gray-200 animate-pulse', className)}
        style={{ width, height, aspectRatio: `${width}/${height}` }}
        aria-label="Loading image..."
      />
    );
  }

  return (
    <picture>
      {/* WebP source for modern browsers */}
      {supportsWebP && (
        <source
          srcSet={generateSrcSet('webp')}
          sizes={sizes}
          type="image/webp"
        />
      )}
      
      {/* JPEG fallback */}
      <img
        src={getImageSrc('jpg')}
        srcSet={generateSrcSet('jpg')}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        className={cn(
          'transition-opacity duration-300',
          isLoaded ? 'opacity-100' : 'opacity-0',
          className
        )}
        onLoad={handleLoad}
        style={{ aspectRatio: `${width}/${height}` }}
      />
    </picture>
  );
};

export default OptimizedWebPImage;
