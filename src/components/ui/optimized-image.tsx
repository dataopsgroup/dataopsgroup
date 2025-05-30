
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
 * Optimized image component with better error handling and React attribute compatibility
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

  // For priority/LCP images, always load immediately
  const shouldLoad = priority || isLCP || isInView;
  const imageLoading = loading || (priority || isLCP ? 'eager' : 'lazy');
  const imageDecoding = decoding || (priority || isLCP ? 'sync' : 'async');

  // Generate responsive srcsets with error handling
  let srcSet = '';
  try {
    srcSet = shouldLoad ? generateSrcSet(src, responsiveBreakpoints) : '';
  } catch (error) {
    console.warn('Failed to generate srcSet:', error);
    srcSet = '';
  }

  // Enhanced error handling - fallback to original image for hero backgrounds
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.warn(`Failed to load image: ${src}`);
    
    // If this is a background/hero image, try to fallback to original instead of placeholder
    if (imgRef.current && imgRef.current.src !== src) {
      imgRef.current.src = src;
    }
    
    handleError(e);
  };

  // Only attempt modern formats for supported sources
  const shouldUseModernFormats = enableModernFormats && 
    (src.includes('unsplash.com') || src.includes('images.unsplash.com'));

  // Create the base image element
  const createImageElement = (imgSrc: string, imgSrcSet?: string) => {
    // Build fetchPriority prop correctly for React
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

  // Main image element with conditional modern format support
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

  // Aspect ratio wrapper if needed
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
