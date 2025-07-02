
import React from 'react';
import { cn } from '@/lib/utils';
import { getOptimizedImageSrc, type ImageContext } from '@/utils/large-image-replacements';
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
 * Optimized blog image component with automatic WebP conversion and compression
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
  // Convert context to ImageContext type and get optimized source
  const imageContext: ImageContext = context === 'cover' ? 'blog-cover' : context as ImageContext;
  const optimizedSrc = getOptimizedImageSrc(src, imageContext);
  
  const imageLoading = priority ? 'eager' : 'lazy';
  const imageDecoding = priority ? 'sync' : 'async';
  
  // Check if optimization was applied
  const wasOptimized = optimizedSrc !== src;

  const imageElement = (
    <div className="relative">
      <picture>
        {/* WebP source for modern browsers */}
        {wasOptimized && (
          <source 
            srcSet={optimizedSrc} 
            type="image/webp" 
          />
        )}
        
        {/* Main image element */}
        <img
          src={optimizedSrc}
          alt={alt}
          width={width}
          height={height}
          className={cn(
            className,
            'max-w-full transition-opacity duration-300'
          )}
          loading={imageLoading}
          decoding={imageDecoding}
          fetchPriority={priority ? 'high' : 'low'}
          onError={(e) => {
            // Fallback to original if optimized version fails
            const target = e.target as HTMLImageElement;
            if (target.src !== src && wasOptimized) {
              console.warn(`Optimized image failed for ${src}, falling back to original`);
              target.src = src;
            }
          }}
          {...props}
        />
      </picture>
      
      {/* Development optimization indicator */}
      {wasOptimized && showOptimizationInfo && process.env.NODE_ENV === 'development' && (
        <div className="absolute bottom-2 right-2 bg-green-100 text-green-700 text-xs px-2 py-1 rounded">
          WebP Optimized
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
