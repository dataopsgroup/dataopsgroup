
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import ImageElement from '@/components/ui/image-element';

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
}

/**
 * Performance-optimized OptimizedImage component
 * - Properly sets width/height to prevent layout shifts (CLS)
 * - Prioritizes LCP images with eager loading
 * - Uses lazy loading for below-the-fold images
 * - Implements proper resource hints
 * - Optimized for Core Web Vitals
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
  decoding = 'async',
  sizes = '100vw',
  quality = 85,
  isLCP = false,
  placeholder = '/placeholder.svg',
  blur = true,
  threshold = 0.1,
  ...props
}: OptimizedImageProps) => {
  // Determine optimal loading strategy for performance
  const loadingStrategy = priority || isLCP ? 'eager' : (loading || 'lazy');
  const decodingStrategy = priority || isLCP ? 'sync' : decoding;
  
  const imageElement = (
    <ImageElement
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      objectFit={objectFit}
      priority={priority}
      isLCP={isLCP}
      loading={loadingStrategy}
      decoding={decodingStrategy}
      placeholder={placeholder}
      blur={blur && !priority} // Disable blur for priority images to improve LCP
      threshold={threshold}
      sizes={sizes}
      {...props}
    />
  );
  
  // If an aspect ratio is specified, wrap the image in an AspectRatio component
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
