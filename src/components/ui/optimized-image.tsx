
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
  isLCP?: boolean; // Flag to identify Largest Contentful Paint images
}

/**
 * Enhanced OptimizedImage with Core Web Vitals optimizations:
 * - Properly sets width/height to avoid layout shifts (CLS)
 * - Prioritizes LCP images
 * - Uses Intersection Observer for below-the-fold images
 * - Sets appropriate loading and decoding attributes
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
  ...props
}: OptimizedImageProps) => {
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
      loading={loading}
      decoding={decoding}
      sizes={sizes}
      {...props}
    />
  );
  
  // If an aspect ratio is specified, wrap the image in an AspectRatio component
  if (aspectRatio) {
    return (
      <AspectRatio ratio={aspectRatio} className={`overflow-hidden ${className}`}>
        {imageElement}
      </AspectRatio>
    );
  }

  return imageElement;
};

export default OptimizedImage;
