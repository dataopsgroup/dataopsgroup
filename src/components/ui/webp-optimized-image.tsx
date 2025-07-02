
import React from 'react';
import { cn } from '@/lib/utils';
import { getOptimizedImageSrc, type ImageContext } from '@/utils/large-image-replacements';

interface WebPOptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  context?: ImageContext;
  quality?: number;
}

/**
 * WebP-optimized image component with automatic PNG to WebP conversion
 * and fallback support for browsers that don't support WebP
 */
const WebPOptimizedImage = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  context = 'content',
  quality = 75,
  ...props
}: WebPOptimizedImageProps) => {
  // Get the optimized source (PNG to WebP conversion happens here)
  const optimizedSrc = getOptimizedImageSrc(src, context);
  
  const imageLoading = priority ? 'eager' : 'lazy';
  const imageDecoding = priority ? 'sync' : 'async';

  return (
    <picture>
      {/* WebP source for modern browsers */}
      <source 
        srcSet={optimizedSrc} 
        type="image/webp" 
      />
      
      {/* Fallback to original for older browsers */}
      <img
        src={optimizedSrc}
        alt={alt}
        width={width}
        height={height}
        className={cn('max-w-full transition-opacity duration-300', className)}
        loading={imageLoading}
        decoding={imageDecoding}
        fetchPriority={priority ? 'high' : 'low'}
        onError={(e) => {
          // Fallback to original PNG if WebP fails
          const target = e.target as HTMLImageElement;
          if (target.src !== src) {
            console.warn(`WebP conversion failed for ${src}, falling back to original`);
            target.src = src;
          }
        }}
        {...props}
      />
    </picture>
  );
};

export default WebPOptimizedImage;
