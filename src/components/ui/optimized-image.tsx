
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
 * Enhanced OptimizedImage with modern format support and Core Web Vitals optimizations
 * - Supports WebP/AVIF with fallbacks using <picture> element
 * - Generates responsive srcsets for different screen sizes
 * - Optimizes LCP images with preload hints
 * - Uses intersection observer for efficient lazy loading
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

  // Determine loading strategy
  const shouldLoad = priority || isLCP || isInView;
  const imageLoading = loading || (priority || isLCP ? 'eager' : 'lazy');
  const imageDecoding = decoding || (priority || isLCP ? 'sync' : 'async');

  // Generate responsive srcsets
  const srcSet = shouldLoad ? generateSrcSet(src, responsiveBreakpoints) : '';

  // Generate WebP and AVIF sources for modern browsers
  const getModernFormatSrc = (format: 'webp' | 'avif') => {
    if (!src.includes('lovable-uploads')) return '';
    return `${src.replace(/\.(jpg|jpeg|png)$/i, `.${format}`)}`;
  };

  // Generate srcset for modern formats
  const getModernFormatSrcSet = (format: 'webp' | 'avif') => {
    if (!srcSet) return '';
    return srcSet.replace(/\.(jpg|jpeg|png)/gi, `.${format}`);
  };

  const imageElement = (
    <>
      {/* Add preload for LCP images */}
      {isLCP && shouldLoad && (
        <>
          <link rel="preload" as="image" href={src} fetchPriority="high" />
          {enableModernFormats && (
            <>
              <link rel="preload" as="image" href={getModernFormatSrc('webp')} type="image/webp" fetchPriority="high" />
              <link rel="preload" as="image" href={getModernFormatSrc('avif')} type="image/avif" fetchPriority="high" />
            </>
          )}
        </>
      )}

      {enableModernFormats && shouldLoad ? (
        <picture>
          {/* AVIF format for best compression */}
          <source
            type="image/avif"
            srcSet={getModernFormatSrcSet('avif')}
            sizes={sizes}
          />
          
          {/* WebP format for wider support */}
          <source
            type="image/webp"
            srcSet={getModernFormatSrcSet('webp')}
            sizes={sizes}
          />
          
          {/* Fallback to original format */}
          <img
            ref={imgRef}
            src={shouldLoad ? src : placeholder}
            alt={alt}
            width={width}
            height={height}
            className={`${className || ''} max-w-full transition-all duration-300 ${
              blur && !isLoaded && shouldLoad ? 'blur-sm scale-105' : ''
            }`}
            style={{ objectFit }}
            srcSet={srcSet}
            sizes={sizes}
            loading={imageLoading}
            decoding={imageDecoding}
            fetchPriority={isLCP ? 'high' : 'auto'}
            onLoad={handleLoad}
            onError={handleError}
            {...props}
          />
        </picture>
      ) : (
        <img
          ref={imgRef}
          src={shouldLoad ? src : placeholder}
          alt={alt}
          width={width}
          height={height}
          className={`${className || ''} max-w-full transition-all duration-300 ${
            blur && !isLoaded && shouldLoad ? 'blur-sm scale-105' : ''
          }`}
          style={{ objectFit }}
          srcSet={srcSet}
          sizes={sizes}
          loading={imageLoading}
          decoding={imageDecoding}
          fetchPriority={isLCP ? 'high' : 'auto'}
          onLoad={handleLoad}
          onError={handleError}
          {...props}
        />
      )}

      {/* Noscript fallback */}
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
