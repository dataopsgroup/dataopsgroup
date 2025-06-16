
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
 * Optimized logo component with strict size limits for fast loading and graceful fallbacks
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

  // Enhanced error handler with fallback styling
  const handleLogoError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (typeof console !== 'undefined') {
      console.warn('Logo failed to load, using fallback styling');
    }
    e.currentTarget.alt = 'DataOps Group';
    e.currentTarget.style.background = '#1e4f9c';
    e.currentTarget.style.color = 'white';
    e.currentTarget.style.display = 'flex';
    e.currentTarget.style.alignItems = 'center';
    e.currentTarget.style.justifyContent = 'center';
    e.currentTarget.style.fontSize = '14px';
    e.currentTarget.style.fontWeight = 'bold';
  };

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
          'object-contain', // Prevent compression and maintain aspect ratio
          isOptimizing && 'opacity-70'
        )}
        style={{
          aspectRatio: width && height ? `${width}/${height}` : 'auto',
          maxHeight: '80px', // Prevent excessive height on mobile/tablet
          objectFit: 'contain' // Ensure logo maintains proportions
        }}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'low'}
        onError={handleLogoError}
        {...props}
      />
      
      {/* Minimal loading indicator for logos */}
      {isOptimizing && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
        </div>
      )}
      
      {/* Error fallback - styled text instead of error message */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-dataops-600 text-white text-sm font-bold rounded">
          DataOps Group
        </div>
      )}
    </div>
  );
};

export default OptimizedLogo;
