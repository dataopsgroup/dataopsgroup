
import React from 'react';
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
  // Add missing props that were being used
  isLCP?: boolean;
  placeholder?: string;
  quality?: number;
  enableModernFormats?: boolean;
  sizes?: string;
  responsiveBreakpoints?: number[];
  decoding?: 'sync' | 'async' | 'auto';
  threshold?: number;
  blur?: boolean;
}

/**
 * Simplified optimized image component
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
  // Handle the missing props (use them where possible, ignore where not needed)
  isLCP,
  placeholder,
  quality,
  enableModernFormats,
  sizes,
  responsiveBreakpoints,
  decoding,
  threshold,
  blur,
  ...props
}: OptimizedImageProps) => {
  // Determine loading strategy
  const imageLoading = loading || (priority || isLCP ? 'eager' : 'lazy');
  const imageDecoding = decoding || (priority || isLCP ? 'sync' : 'async');

  // Simple error handler
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.warn(`Failed to load image: ${src}`);
    // Don't hide the image, just log the error
  };

  const imageElement = (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`${className || ''} max-w-full`}
      style={{ 
        objectFit,
        aspectRatio: aspectRatio ? `${aspectRatio}` : undefined
      }}
      loading={imageLoading}
      decoding={imageDecoding}
      sizes={sizes}
      onError={handleImageError}
      {...props}
    />
  );

  if (aspectRatio) {
    return (
      <AspectRatio 
        ratio={aspectRatio} 
        className={`overflow-hidden ${className || ''}`}
      >
        {imageElement}
      </AspectRatio>
    );
  }

  return imageElement;
};

export default OptimizedImage;
