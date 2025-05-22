
import React, { useState } from 'react';
import { useOptimizedImage } from '@/hooks/useOptimizedImage';

interface ImageElementProps {
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
  sizes?: string;
  placeholder?: string;
  blur?: boolean;
  threshold?: number;
}

const ImageElement: React.FC<ImageElementProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  objectFit = 'cover',
  priority = false,
  isLCP = false,
  loading,
  decoding = 'async',
  sizes = '100vw',
  placeholder = '/placeholder.svg',
  blur = true,
  threshold = 0.1,
  ...props
}) => {
  const [fallbackSrc, setFallbackSrc] = useState<string | null>(null);
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

  // Determine loading strategy based on priority
  // If priority is true, loading should be eager regardless of what was passed
  const loadingStrategy = priority ? 'eager' : (loading || 'lazy');
  
  // If no explicit width/height is provided, use defaults to prevent layout shifts
  const imgWidth = width || 800;
  const imgHeight = height || 600;
  
  // Set object-fit style based on the prop
  const objectFitStyle = objectFit ? { objectFit } : {};
  
  // Use appropriate blur class if blur is enabled and image is not loaded yet
  const blurClass = blur && !isLoaded ? 'blur-sm transition-all duration-500' : '';

  // Base styles that should always be applied
  const baseStyles = `${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`;
  
  // Combine all classes
  const combinedClassName = `${baseStyles} ${blurClass} ${className}`.trim();
  
  // Image tag with all needed attributes for optimization
  return (
    <>
      {/* Placeholder image shown while main image loads */}
      {blur && !isLoaded && (
        <img 
          src={placeholder} 
          alt=""
          className={`absolute inset-0 w-full h-full blur-sm ${className}`}
          style={objectFitStyle}
          aria-hidden="true"
        />
      )}
      
      {/* Main image - only load when in view or priority */}
      <img
        ref={imgRef}
        src={isInView || priority ? (fallbackSrc || src) : placeholder}
        alt={alt}
        width={imgWidth}
        height={imgHeight}
        onLoad={handleLoad}
        onError={(e) => {
          console.error(`Failed to load image: ${src}`);
          handleError(e);
          setFallbackSrc(placeholder);
        }}
        className={combinedClassName}
        style={objectFitStyle}
        loading={loadingStrategy}
        decoding={decoding}
        sizes={sizes}
        {...props}
      />
    </>
  );
};

export default ImageElement;
