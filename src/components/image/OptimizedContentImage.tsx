
import React from 'react';
import { cn } from '@/lib/utils';
import { useEnhancedImageOptimization } from '@/hooks/useEnhancedImageOptimization';

interface OptimizedContentImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  maxSizeKB?: number;
}

/**
 * Optimized content image component specifically for SEO performance
 * Aggressively optimizes images to improve Core Web Vitals
 */
const OptimizedContentImage = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  maxSizeKB = 150,
  ...props
}: OptimizedContentImageProps) => {
  const {
    optimizedSrc,
    isOptimizing,
    compressionRatio,
    error
  } = useEnhancedImageOptimization(src, {
    maxSizeKB,
    context: 'content',
    format: 'webp',
    quality: 0.75 // More aggressive for better SEO
  });

  return (
    <div className="relative">
      <img
        src={optimizedSrc}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          'max-w-full h-auto transition-opacity duration-300',
          isOptimizing && 'opacity-80',
          className
        )}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'low'}
        {...props}
      />
      
      {/* Loading indicator */}
      {isOptimizing && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100/50 rounded">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
        </div>
      )}
      
      {/* Error fallback */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 rounded">
          <span className="text-gray-600 text-sm">Image unavailable</span>
        </div>
      )}
      
      {/* SEO optimization indicator (development only) */}
      {compressionRatio > 20 && process.env.NODE_ENV === 'development' && (
        <div className="absolute top-2 right-2 bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
          SEO optimized: -{compressionRatio.toFixed(0)}%
        </div>
      )}
    </div>
  );
};

export default OptimizedContentImage;
