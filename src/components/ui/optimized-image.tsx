
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { calculateOptimalSizes, reportLCPMetric } from '@/utils/image-utils';
import { useAutoOptimizedImage } from '@/hooks/useAutoOptimizedImage';
import { cn } from '@/lib/utils';

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
  autoOptimize?: boolean;
  maxSizeKB?: number;
}

/**
 * Enhanced optimized image component with automatic compression and format conversion
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
  quality = 85,
  enableModernFormats,
  sizes,
  responsiveBreakpoints,
  decoding,
  threshold,
  blur,
  componentType = 'full-width',
  autoOptimize = true,
  maxSizeKB = 100,
  ...props
}: OptimizedImageProps) => {
  // Use automatic optimization for large images
  const {
    optimizedSrc,
    isOptimizing,
    compressionRatio
  } = useAutoOptimizedImage({
    src,
    maxSizeKB,
    quality: quality / 100, // Convert percentage to decimal
    maxWidth: componentType === 'hero' ? 1920 : componentType === 'thumbnail' ? 400 : 1280,
    format: 'webp'
  });

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

  const finalSrc = autoOptimize ? optimizedSrc : src;

  const imageElement = (
    <div className="relative">
      <img
        src={finalSrc}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          className || '',
          'max-w-full transition-opacity duration-300',
          isOptimizing && 'opacity-80'
        )}
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
      
      {/* Show optimization indicator for significant compression */}
      {compressionRatio > 30 && process.env.NODE_ENV === 'development' && (
        <div className="absolute top-2 right-2 bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
          -{compressionRatio.toFixed(0)}%
        </div>
      )}
    </div>
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
