
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
}

/**
 * Core image element component with optimization features
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
    priority,
    isLCP
  });
  
  // Enhanced loading strategy based on image importance
  const loadingStrategy = priority || isLCP ? 'eager' : (loadingProp || 'lazy');
  const decodingStrategy = priority || isLCP ? 'sync' : (decodingProp || 'async');
  
  return (
    <>
      <img
        ref={imgRef}
        src={isInView ? imageSrc : '/placeholder.svg'} // Only load when in view
        alt={alt}
        width={width}
        height={height}
        className={cn(
          'max-w-full',
          objectFit && `object-${objectFit}`,
          !isLoaded && 'opacity-0',
          isLoaded && 'opacity-100 transition-opacity duration-300',
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
