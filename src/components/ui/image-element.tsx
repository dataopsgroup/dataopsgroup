
import React from 'react';
import { cn } from '@/lib/utils';
import { useOptimizedImage } from '@/hooks/useOptimizedImage';
import { getImageSrc } from '@/utils/image-utils';

interface ImageElementProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  priority?: boolean;
  isLCP?: boolean;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  placeholder?: string;
  blur?: boolean;
  threshold?: number;
}

/**
 * Enhanced image element component with optimization features from both
 * OptimizedImage and ProgressiveImage
 */
const ImageElement: React.FC<ImageElementProps> = ({
  src,
  alt,
  width,
  height,
  className,
  objectFit = 'cover',
  priority = false,
  isLCP = false,
  loading: loadingProp,
  decoding: decodingProp,
  placeholder = '/placeholder.svg',
  blur = true,
  threshold = 0.1,
  ...props
}) => {
  const imageSrc = getImageSrc(src);
  
  const {
    imgRef,
    isLoaded,
    isInView,
    handleLoad,
    handleError
  } = useOptimizedImage({
    src: imageSrc,
    placeholder,
    priority,
    isLCP,
    blur,
    threshold
  });
  
  // Enhanced loading strategy based on image importance
  const loadingStrategy = priority || isLCP ? 'eager' : (loadingProp || 'lazy');
  const decodingStrategy = priority || isLCP ? 'sync' : (decodingProp || 'async');
  
  return (
    <>
      <img
        ref={imgRef}
        src={isInView ? imageSrc : placeholder}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          'max-w-full',
          objectFit && `object-${objectFit}`,
          blur && !isLoaded && 'blur-sm scale-105',
          isLoaded && 'opacity-100 transition-opacity duration-300',
          !isLoaded && 'opacity-0',
          'transition-all duration-300',
          className
        )}
        loading={loadingStrategy}
        decoding={decodingStrategy}
        onLoad={handleLoad}
        onError={handleError}
        fetchPriority={isLCP || priority ? 'high' : 'auto'}
        {...props}
      />
      <noscript>
        <img
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
          className={className}
        />
      </noscript>
    </>
  );
};

export default ImageElement;
