
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
}

/**
 * Simplified optimized image component for debugging
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
  ...props
}: OptimizedImageProps) => {
  // Simplified image loading
  const imageLoading = loading || (priority ? 'eager' : 'lazy');

  // Simple error handler
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.warn(`Failed to load image: ${src}`);
    e.currentTarget.style.display = 'none';
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
