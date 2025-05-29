
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
 * Simplified OptimizedImage with better error handling and server-side compatibility
 * Focuses on Core Web Vitals while maintaining stability
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

  // Determine loading strategy with safer defaults
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

  // Simplified modern format support
  const getModernFormatSrc = (format: 'webp' | 'avif') => {
    if (!enableModernFormats || !src.includes('lovable-uploads')) return '';
    try {
      return src.replace(/\.(jpg|jpeg|png)$/i, `.${format}`);
    } catch {
      return '';
    }
  };

  // Create the base image element with proper error boundaries
  const createImageElement = (imgSrc: string, imgSrcSet?: string) => (
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
      // Fixed: Use lowercase 'fetchpriority' for React compatibility
      {...(isLCP && { fetchpriority: 'high' })}
      onLoad={handleLoad}
      onError={handleError}
      {...props}
    />
  );

  // Main image element with graceful fallbacks
  const imageElement = (
    <>
      {/* Preload for LCP images with error handling */}
      {isLCP && shouldLoad && typeof document !== 'undefined' && (
        <link rel="preload" as="image" href={src} fetchPriority="high" />
      )}

      {enableModernFormats && shouldLoad ? (
        <picture>
          {/* Modern format sources with error boundaries */}
          <source
            type="image/avif"
            srcSet={getModernFormatSrc('avif') || undefined}
            sizes={sizes}
          />
          <source
            type="image/webp"
            srcSet={getModernFormatSrc('webp') || undefined}
            sizes={sizes}
          />
          {/* Always include fallback */}
          {createImageElement(src)}
        </picture>
      ) : (
        createImageElement(src)
      )}

      {/* Server-side rendering fallback */}
      <noscript>
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          style={{ objectFit }}
        />
      </noscript>
    </>
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
