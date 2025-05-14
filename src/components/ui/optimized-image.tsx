
import React from 'react';
import { cn } from '@/lib/utils';
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
  decoding?: 'async' | 'sync' | 'auto';
}

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
  ...props
}: OptimizedImageProps) => {
  // Check if the image is a remote URL that could support WebP format
  const isRemoteImage = src.startsWith('http') && !src.includes('lovable-uploads');
  
  // Determine image dimensions for layout stability
  const imgWidth = width || 'auto';
  const imgHeight = height || 'auto';
  
  // Determine loading strategy
  const loadingStrategy = loading || (priority ? 'eager' : 'lazy');
  const decodingStrategy = decoding || (priority ? 'sync' : 'async');
  
  // Construct the image element with optimization attributes
  const imageElement = (
    <img
      src={src}
      alt={alt}
      width={imgWidth}
      height={imgHeight}
      className={cn(
        'max-w-full',
        objectFit && `object-${objectFit}`,
        aspectRatio ? 'h-full w-full' : '',
        className
      )}
      loading={loadingStrategy}
      decoding={decodingStrategy}
      fetchPriority={priority ? 'high' : 'auto'}
      {...props}
    />
  );
  
  // If an aspect ratio is specified, wrap the image in an AspectRatio component
  if (aspectRatio) {
    return (
      <AspectRatio ratio={aspectRatio} className={cn('overflow-hidden', className)}>
        {imageElement}
      </AspectRatio>
    );
  }

  return imageElement;
};

export default OptimizedImage;
