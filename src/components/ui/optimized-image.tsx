
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { calculateOptimalSizes, reportLCPMetric } from '@/utils/image-utils';
import { useEnhancedImageOptimization } from '@/hooks/useEnhancedImageOptimization';
import { shouldPreserveLayout } from '@/utils/large-image-replacements';
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
  maxSizeKB,
  ...props
}: OptimizedImageProps) => {
  // Check if this image should preserve layout (like hero images)
  const preserveLayout = shouldPreserveLayout(src);
  
  // Enhanced optimization with context-aware settings
  const {
    optimizedSrc,
    isOptimizing,
    compressionRatio,
    error,
    needsOptimization
  } = useEnhancedImageOptimization(src, {
    maxSizeKB: maxSizeKB || (componentType === 'hero' ? 450 : componentType === 'thumbnail' ? 100 : 300),
    quality: (quality / 100) * (componentType === 'hero' ? 0.85 : 1), // Slightly more aggressive for hero
    context: componentType === 'hero' ? 'hero' : 
             componentType === 'thumbnail' ? 'thumbnail' : 
             componentType === 'card' ? 'blog-cover' : 'content',
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

  // For hero images with layout preservation, completely bypass size constraints
  const isHeroImage = componentType === 'hero';
  
  const imageElement = (
    <div className={cn("relative", isHeroImage && "optimized-image")}>
      <img
        src={finalSrc}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          // Hero images get minimal classes to avoid conflicts when preserving layout
          isHeroImage && preserveLayout ? undefined : 'max-w-full',
          'transition-opacity duration-300',
          isOptimizing && 'opacity-80',
          className
        )}
        style={{ 
          // Don't apply any styles for layout-preserving hero images
          ...(isHeroImage && preserveLayout ? {} : {
            objectFit,
            aspectRatio: aspectRatio ? `${aspectRatio}` : undefined
          })
        }}
        loading={imageLoading}
        decoding={imageDecoding}
        fetchPriority={fetchPriority as any}
        sizes={imageSizes}
        onError={handleImageError}
        onLoad={handleImageLoad}
        {...props}
      />
      
      {/* Loading indicator */}
      {isOptimizing && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100/50">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
        </div>
      )}
      
      {/* Error state */}
      {error && (
        <div className="absolute top-2 right-2 bg-red-100 text-red-700 text-xs px-2 py-1 rounded">
          Optimization failed
        </div>
      )}
      
      {/* Show optimization indicator for significant compression */}
      {compressionRatio > 30 && process.env.NODE_ENV === 'development' && (
        <div className="absolute bottom-2 right-2 bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
          -{compressionRatio.toFixed(0)}% (File size only)
        </div>
      )}
    </div>
  );

  // Don't wrap layout-preserving hero images in AspectRatio
  if (aspectRatio && !(isHeroImage && preserveLayout)) {
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
