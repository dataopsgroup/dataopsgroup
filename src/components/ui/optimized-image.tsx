
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { calculateOptimalSizes, reportLCPMetric } from '@/utils/image-utils';

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
  isLCP?: boolean;
  placeholder?: string;
  quality?: number;
  enableModernFormats?: boolean;
  sizes?: string;
  responsiveBreakpoints?: number[];
  decoding?: 'sync' | 'async' | 'auto';
  threshold?: number;
  blur?: boolean;
  componentType?: 'hero' | 'card' | 'thumbnail' | 'full-width' | 'sidebar';
}

/**
 * Optimized image component with comprehensive prop support and LCP optimization
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
  isLCP,
  placeholder,
  quality,
  enableModernFormats,
  sizes,
  responsiveBreakpoints,
  decoding,
  threshold,
  blur,
  componentType = 'full-width',
  ...props
}: OptimizedImageProps) => {
  // Determine loading strategy with enhanced LCP detection
  const isAboveFold = priority || isLCP || componentType === 'hero';
  const imageLoading = loading || (isAboveFold ? 'eager' : 'lazy');
  const imageDecoding = decoding || (isAboveFold ? 'sync' : 'async');
  const fetchPriority = isAboveFold ? 'high' : 'low';

  // Calculate intelligent sizes if not provided
  const imageSizes = sizes || calculateOptimalSizes(componentType);

  // Enhanced error handler
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.warn(`Failed to load image: ${src}`);
    // Report to analytics if available
    if (window.gtag) {
      window.gtag('event', 'image_load_error', {
        event_category: 'Performance',
        event_label: src.substring(0, 100),
        value: 1
      });
    }
  };

  // Enhanced load handler with LCP reporting
  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (isAboveFold || isLCP) {
      reportLCPMetric(src);
    }
    
    if (props.onLoad) {
      props.onLoad(e);
    }
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
      fetchPriority={fetchPriority as any}
      sizes={imageSizes}
      onError={handleImageError}
      onLoad={handleImageLoad}
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
