
import React from 'react';
import { cn } from '@/lib/utils';
import { vercelImageOptimizer } from '@/services/imageOptimizationService';
import { type ImageContext } from '@/utils/large-image-replacements';

interface VercelOptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  context?: ImageContext;
  quality?: number;
  format?: 'webp' | 'avif' | 'auto';
}

/**
 * Vercel-optimized image component with automatic compression and WebP format conversion
 */
const VercelOptimizedImage = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  context = 'content',
  quality = 80,
  format = 'webp', // Default to WebP for all images
  ...props
}: VercelOptimizedImageProps) => {
  // Check if image needs optimization
  const needsOptimization = vercelImageOptimizer.shouldOptimize(src);
  
  let finalSrc = src;
  let compressionInfo = '';

  if (needsOptimization) {
    const optimizationResult = vercelImageOptimizer.optimizeImage(src, {
      width,
      height,
      quality,
      format
    });
    
    finalSrc = optimizationResult.optimizedUrl;
    compressionInfo = `WebP optimized: -${optimizationResult.compressionRatio}%`;
  }

  const imageLoading = priority ? 'eager' : 'lazy';
  const imageDecoding = priority ? 'sync' : 'async';

  return (
    <div className="relative">
      <img
        src={finalSrc}
        alt={alt}
        width={width}
        height={height}
        className={cn('max-w-full', className)}
        loading={imageLoading}
        decoding={imageDecoding}
        fetchPriority={priority ? 'high' : 'low'}
        {...props}
      />
      
      {/* Development optimization indicator */}
      {needsOptimization && compressionInfo && process.env.NODE_ENV === 'development' && (
        <div className="absolute bottom-2 right-2 bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
          {compressionInfo}
        </div>
      )}
    </div>
  );
};

export default VercelOptimizedImage;
