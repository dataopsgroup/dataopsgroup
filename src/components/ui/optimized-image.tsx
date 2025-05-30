
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useOptimizedImage } from '@/hooks/useOptimizedImage';
import { generateSrcSet, supportsImageFormat } from '@/utils/image-utils';

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
  isLCP?: boolean;
  placeholder?: string;
  blur?: boolean;
  threshold?: number;
  enableModernFormats?: boolean;
  responsiveBreakpoints?: number[];
}

/**
 * Enhanced optimized image component with balanced optimizations for all devices
 * Implements consistent responsive images, modern formats, and aspect ratio preservation
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
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px',
  quality = 85,
  isLCP = false,
  placeholder = '/placeholder.svg',
  blur = true,
  threshold = 0.15,
  enableModernFormats = true,
  responsiveBreakpoints = [480, 640, 768, 1024, 1280, 1536, 1920],
  ...props
}: OptimizedImageProps) => {
  const {
    imgRef,
    isLoaded,
    isInView,
    handleLoad,
    handleError
  } = useOptimizedImage({
    src,
    placeholder,
    priority,
    isLCP,
    blur,
    threshold
  });

  // Universal loading strategy - consistent threshold for all devices
  const shouldLoad = priority || isLCP || isInView;
  const imageLoading = loading || (priority || isLCP ? 'eager' : 'lazy');
  const imageDecoding = decoding || (priority || isLCP ? 'sync' : 'async');

  // Enhanced responsive srcsets with intelligent breakpoint selection
  let srcSet = '';
  try {
    if (shouldLoad) {
      // Filter breakpoints based on image dimensions for optimal performance
      const optimalBreakpoints = responsiveBreakpoints.filter(bp => 
        !width || bp <= width * 1.5
      );
      srcSet = generateSrcSet(src, optimalBreakpoints, quality);
    }
  } catch (error) {
    console.warn('Failed to generate srcSet:', error);
    srcSet = '';
  }

  // Enhanced error handling with progressive fallbacks
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.warn(`Failed to load image: ${src}`);
    
    const img = e.currentTarget;
    
    // Try fallback to original format if modern format failed
    if (img.src.includes('.webp') || img.src.includes('.avif')) {
      const originalSrc = src.replace(/\.(webp|avif)$/i, match => 
        match.includes('webp') ? '.jpg' : '.jpg'
      );
      img.src = originalSrc;
      return;
    }
    
    // Final fallback to placeholder
    if (img.src !== placeholder) {
      img.src = placeholder;
    }
    
    handleError(e);
  };

  // Enhanced modern format support with better fallback chain
  const createPictureElement = () => {
    if (!enableModernFormats || !shouldLoad) {
      return createImageElement(src);
    }

    const baseUrl = src.split('?')[0];
    const params = src.includes('?') ? src.split('?')[1] : '';
    const paramString = params ? `?${params}` : '';

    return (
      <picture>
        {/* AVIF source for maximum compression */}
        <source
          type="image/avif"
          srcSet={generateSrcSet(baseUrl.replace(/\.(jpg|jpeg|png)$/i, '.avif') + paramString, responsiveBreakpoints, quality)}
          sizes={sizes}
        />
        {/* WebP source for broad support */}
        <source
          type="image/webp"
          srcSet={generateSrcSet(baseUrl.replace(/\.(jpg|jpeg|png)$/i, '.webp') + paramString, responsiveBreakpoints, quality)}
          sizes={sizes}
        />
        {/* Original format fallback */}
        {createImageElement(src)}
      </picture>
    );
  };

  // Enhanced image element with better performance attributes
  const createImageElement = (imgSrc: string) => {
    const fetchPriorityProp = isLCP ? { fetchPriority: 'high' as const } : 
                              priority ? { fetchPriority: 'high' as const } : 
                              { fetchPriority: 'auto' as const };
    
    return (
      <img
        ref={imgRef}
        src={shouldLoad ? imgSrc : placeholder}
        alt={alt}
        width={width}
        height={height}
        className={`${className || ''} max-w-full transition-all duration-300 ${
          blur && !isLoaded && shouldLoad ? 'blur-sm scale-105' : ''
        }`}
        style={{ 
          objectFit,
          aspectRatio: aspectRatio ? `${aspectRatio}` : undefined
        }}
        srcSet={srcSet}
        sizes={sizes}
        loading={imageLoading}
        decoding={imageDecoding}
        onLoad={handleLoad}
        onError={handleImageError}
        {...fetchPriorityProp}
        {...props}
      />
    );
  };

  const imageElement = createPictureElement();

  // Enhanced aspect ratio handling with layout shift prevention
  if (aspectRatio) {
    return (
      <AspectRatio 
        ratio={aspectRatio} 
        className={`overflow-hidden ${className || ''}`}
        style={{
          backgroundColor: !isLoaded ? '#f3f4f6' : 'transparent'
        }}
      >
        {imageElement}
      </AspectRatio>
    );
  }

  return imageElement;
};

export default OptimizedImage;
