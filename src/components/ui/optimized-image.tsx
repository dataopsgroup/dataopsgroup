
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useOptimizedImage } from '@/hooks/useOptimizedImage';
import { generateSrcSet } from '@/utils/image-utils';

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
 * Optimized image component with universal performance optimizations
 * Uses consistent loading strategies across all devices
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
  placeholder = '/placeholder.svg',
  blur = true,
  threshold = 0.1,
  enableModernFormats = true,
  responsiveBreakpoints = [640, 768, 1024, 1280, 1536],
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

  // Universal loading strategy - no device-specific logic
  const shouldLoad = priority || isLCP || isInView;
  const imageLoading = loading || (priority || isLCP ? 'eager' : 'lazy');
  const imageDecoding = decoding || (priority || isLCP ? 'sync' : 'async');

  // Generate responsive srcsets with consistent quality across all devices
  let srcSet = '';
  try {
    srcSet = shouldLoad ? generateSrcSet(src, responsiveBreakpoints) : '';
  } catch (error) {
    console.warn('Failed to generate srcSet:', error);
    srcSet = '';
  }

  // Consistent error handling for all devices
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.warn(`Failed to load image: ${src}`);
    
    if (imgRef.current && imgRef.current.src !== src) {
      imgRef.current.src = src;
    }
    
    handleError(e);
  };

  // Universal modern format support - consistent across all devices
  const shouldUseModernFormats = enableModernFormats && 
    (src.includes('unsplash.com') || src.includes('images.unsplash.com'));

  // Create the base image element with universal optimizations
  const createImageElement = (imgSrc: string, imgSrcSet?: string) => {
    const fetchPriorityProp = isLCP ? { fetchPriority: 'high' as const } : {};
    
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
        style={{ objectFit }}
        srcSet={imgSrcSet || srcSet}
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

  // Universal modern format handling
  const imageElement = shouldUseModernFormats ? (
    <picture>
      <source
        type="image/avif"
        srcSet={src.replace(/\.(jpg|jpeg|png)$/i, '.avif')}
        sizes={sizes}
      />
      <source
        type="image/webp"
        srcSet={src.replace(/\.(jpg|jpeg|png)$/i, '.webp')}
        sizes={sizes}
      />
      {createImageElement(src)}
    </picture>
  ) : (
    createImageElement(src)
  );

  if (aspectRatio) {
    return (
      <AspectRatio ratio={aspectRatio} className={`overflow-hidden ${className || ''}`}>
        {imageElement}
      </AspectRatio>
    );
  }

  return imageElement;
};

export default OptimizedImage;
