
import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface MobileOptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  mobileQuality?: number;
  webpFallback?: boolean;
}

/**
 * Mobile-optimized image component focused on Core Web Vitals
 * - Uses WebP with JPEG fallback
 * - Implements proper lazy loading
 * - Optimizes for mobile viewport sizes
 * - Prevents layout shifts with aspect ratio containers
 */
const MobileOptimizedImage = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  mobileQuality = 75,
  webpFallback = true,
  ...props
}: MobileOptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Mobile-specific image source optimization
  const getOptimizedSrc = (originalSrc: string): string => {
    if (!originalSrc) return '';
    
    // For mobile, prioritize smaller, optimized images
    if (originalSrc.includes('lovable-uploads')) {
      const isMobile = window.innerWidth <= 768;
      const quality = isMobile ? mobileQuality : 85;
      const format = webpFallback ? 'webp' : 'auto';
      
      return `${originalSrc}?w=${isMobile ? 400 : 800}&q=${quality}&f=${format}`;
    }
    
    return originalSrc;
  };

  const handleLoad = () => {
    setIsLoaded(true);
    // Report LCP for priority images
    if (priority && window.performance && 'mark' in window.performance) {
      window.performance.mark('mobile-lcp-image-loaded');
    }
  };

  const handleError = () => {
    setHasError(true);
    // Fallback to original image if WebP fails
    if (webpFallback && imgRef.current) {
      imgRef.current.src = src;
    }
  };

  useEffect(() => {
    // Preload critical images for mobile
    if (priority && src) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = getOptimizedSrc(src);
      link.setAttribute('fetchpriority', 'high');
      document.head.appendChild(link);
    }
  }, [src, priority]);

  return (
    <div className={cn('relative overflow-hidden', className)}>
      {/* Aspect ratio container to prevent CLS */}
      <div 
        className="relative"
        style={{
          aspectRatio: width && height ? `${width}/${height}` : undefined,
          backgroundColor: !isLoaded ? '#f3f4f6' : 'transparent'
        }}
      >
        <img
          ref={imgRef}
          src={getOptimizedSrc(src)}
          alt={alt}
          width={width}
          height={height}
          className={cn(
            'absolute inset-0 w-full h-full object-cover transition-opacity duration-300',
            isLoaded ? 'opacity-100' : 'opacity-0'
          )}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          fetchPriority={priority ? 'high' : 'low'}
          onLoad={handleLoad}
          onError={handleError}
          {...props}
        />
        
        {/* Loading placeholder */}
        {!isLoaded && !hasError && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 bg-gray-300 rounded"></div>
          </div>
        )}
        
        {/* Error fallback */}
        {hasError && (
          <div className="absolute inset-0 bg-gray-100 flex items-center justify-center text-gray-500 text-sm">
            Image unavailable
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileOptimizedImage;
