
import React from 'react';
import { cn } from '@/lib/utils';
import { useEnhancedImageOptimization } from '@/hooks/useEnhancedImageOptimization';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface BlogImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  aspectRatio?: number;
  priority?: boolean;
  context?: 'cover' | 'thumbnail' | 'content';
  showOptimizationInfo?: boolean;
}

/**
 * Optimized blog image component with automatic size limits and compression
 */
const BlogImage = ({
  src,
  alt,
  width,
  height,
  className,
  aspectRatio,
  priority = false,
  context = 'content',
  showOptimizationInfo = false,
  ...props
}: BlogImageProps) => {
  const {
    optimizedSrc,
    isOptimizing,
    compressionRatio,
    error,
    needsOptimization
  } = useEnhancedImageOptimization(src, {
    maxSizeKB: context === 'cover' ? 200 : context === 'thumbnail' ? 100 : 300,
    context: context === 'cover' ? 'blog-cover' : context,
    format: 'webp'
  });

  const imageLoading = priority ? 'eager' : 'lazy';
  const imageDecoding = priority ? 'sync' : 'async';

  const imageElement = (
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
        loading={imageLoading}
        decoding={imageDecoding}
        fetchPriority={priority ? 'high' : 'low'}
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
          Failed to optimize
        </div>
      )}
      
      {/* Size warning for large images */}
      {needsOptimization && compressionRatio < 10 && process.env.NODE_ENV === 'development' && (
        <div className="absolute top-2 left-2 bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded">
          Large image detected
        </div>
      )}
      
      {/* Optimization success indicator */}
      {showOptimizationInfo && compressionRatio > 10 && (
        <div className="absolute bottom-2 right-2 bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
          -{compressionRatio.toFixed(0)}%
        </div>
      )}
    </div>
  );

  if (aspectRatio) {
    return (
      <AspectRatio ratio={aspectRatio} className="overflow-hidden">
        {imageElement}
      </AspectRatio>
    );
  }

  return imageElement;
};

export default BlogImage;
