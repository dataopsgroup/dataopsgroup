
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
  sizes?: string;
  quality?: number;
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
  sizes = '100vw',
  quality = 85,
  ...props
}: OptimizedImageProps) => {
  // Check if the image is a remote URL that could benefit from optimization
  const isRemoteImage = src.startsWith('http') && !src.includes('lovable-uploads');
  
  // Determine image dimensions for layout stability
  const imgWidth = width || undefined;
  const imgHeight = height || undefined;
  
  // Determine loading strategy
  const loadingStrategy = priority ? 'eager' : (loading || 'lazy');
  const decodingStrategy = priority ? 'sync' : (decoding || 'async');
  
  // Prepare srcSet for responsive images if dimensions are available
  let srcSet = undefined;
  let webpSrcSet = undefined;
  
  if (isRemoteImage && width && height) {
    // This would be where you'd generate different size versions
    // For now we'll just use a placeholder approach
    srcSet = `${src} ${width}w`;
  }
  
  const onError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    console.error(`Failed to load image: ${target.src}`);
    // Optionally set a fallback image
    // target.src = '/placeholder.svg';
  };
  
  // Construct the image element with optimization attributes
  const imageElement = (
    <>
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
        sizes={sizes}
        srcSet={srcSet}
        onError={onError}
        {...props}
      />
      {/* Add a noscript fallback for users with JavaScript disabled */}
      <noscript>
        <img
          src={src}
          alt={alt}
          width={imgWidth}
          height={imgHeight}
          loading="lazy"
          className={className}
        />
      </noscript>
    </>
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
