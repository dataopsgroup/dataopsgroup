
import React from 'react';
import { cn } from '@/lib/utils';
import { useAutoOptimizedImage } from '@/hooks/useAutoOptimizedImage';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface AutoOptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  aspectRatio?: number;
  maxSizeKB?: number;
  quality?: number;
  maxWidth?: number;
  format?: 'webp' | 'jpeg' | 'png' | 'avif';
  priority?: boolean;
  loading?: 'lazy' | 'eager';
  showOptimizationInfo?: boolean;
}

/**
 * Auto-optimizing image component that reduces file sizes automatically
 */
const AutoOptimizedImage = ({
  src,
  alt,
  width,
  height,
  className,
  aspectRatio,
  maxSizeKB = 100,
  quality = 0.85,
  maxWidth = 1280,
  format = 'webp',
  priority = false,
  loading,
  showOptimizationInfo = false,
  ...props
}: AutoOptimizedImageProps) => {
  const {
    optimizedSrc,
    isOptimizing,
    originalSize,
    optimizedSize,
    compressionRatio,
    error
  } = useAutoOptimizedImage({
    src,
    maxSizeKB,
    quality,
    maxWidth,
    format
  });

  const imageLoading = loading || (priority ? 'eager' : 'lazy');
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
          isOptimizing && 'opacity-70'
        )}
        loading={imageLoading}
        decoding={imageDecoding}
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
        <div className="absolute top-2 right-2 bg-red-100 text-red-700 text-xs px-2 py-1 rounded">
          Optimization failed
        </div>
      )}
      
      {/* Optimization info (development only) */}
      {showOptimizationInfo && compressionRatio > 0 && (
        <div className="absolute bottom-2 left-2 bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
          {compressionRatio.toFixed(1)}% smaller
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

export default AutoOptimizedImage;
