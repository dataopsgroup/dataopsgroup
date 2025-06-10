
import React from 'react';
import { cn } from '@/lib/utils';
import { useEnhancedImageOptimization } from '@/hooks/useEnhancedImageOptimization';

interface HeroImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  priority?: boolean;
}

/**
 * Optimized hero image component with strict size limits for critical loading path
 */
const HeroImage = ({
  src,
  alt,
  width,
  height,
  className,
  objectFit = 'cover',
  priority = true, // Hero images are typically above the fold
  ...props
}: HeroImageProps) => {
  const {
    optimizedSrc,
    isOptimizing,
    compressionRatio,
    error
  } = useEnhancedImageOptimization(src, {
    maxSizeKB: 500, // Strict limit for hero images
    context: 'hero',
    format: 'webp'
  });

  return (
    <div className="relative">
      <img
        src={optimizedSrc}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          className,
          'max-w-full transition-opacity duration-300',
          isOptimizing && 'opacity-80'
        )}
        style={{ objectFit }}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'low'}
        {...props}
      />
      
      {/* Loading indicator */}
      {isOptimizing && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100/50">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
        </div>
      )}
      
      {/* Error state */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 text-gray-600">
          Image unavailable
        </div>
      )}
      
      {/* Performance indicator for development */}
      {compressionRatio > 20 && process.env.NODE_ENV === 'development' && (
        <div className="absolute top-2 right-2 bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
          Hero optimized: -{compressionRatio.toFixed(0)}%
        </div>
      )}
    </div>
  );
};

export default HeroImage;
