
import React from 'react';
import { cn } from '@/lib/utils';
import { useEnhancedImageOptimization } from '@/hooks/useEnhancedImageOptimization';

interface OptimizedLogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

/**
 * Optimized logo component with strict size limits for fast loading
 */
const OptimizedLogo = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  ...props
}: OptimizedLogoProps) => {
  const {
    optimizedSrc,
    isOptimizing,
    error
  } = useEnhancedImageOptimization(src, {
    maxSizeKB: 50, // Very strict limit for logos
    context: 'logo',
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
          isOptimizing && 'opacity-70'
        )}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'low'}
        {...props}
      />
      
      {/* Minimal loading indicator for logos */}
      {isOptimizing && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
        </div>
      )}
      
      {/* Error fallback */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 text-gray-500 text-xs">
          Logo
        </div>
      )}
    </div>
  );
};

export default OptimizedLogo;
