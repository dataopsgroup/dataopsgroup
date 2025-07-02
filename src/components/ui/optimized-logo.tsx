
import React from 'react';
import { cn } from '@/lib/utils';
import { mobileLogoOptimizer, generateMobileLogoSrcSet } from '@/utils/mobile-logo-optimization';

interface OptimizedLogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

/**
 * Optimized logo component with mobile-specific optimization for DataOps Group logo
 */
const OptimizedLogo = ({
  src,
  alt,
  width = 200,
  height = 80,
  className,
  priority = false,
  ...props
}: OptimizedLogoProps) => {
  const shouldOptimizeForMobile = mobileLogoOptimizer.shouldOptimize(src);
  
  // Generate mobile-optimized srcset if this is the target logo
  const srcSet = shouldOptimizeForMobile ? generateMobileLogoSrcSet(src) : '';
  const sizes = shouldOptimizeForMobile ? mobileLogoOptimizer.getMobileSizes() : '';

  // Enhanced error handler with fallback styling
  const handleLogoError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.warn('Logo failed to load, using fallback styling');
    const target = e.target as HTMLImageElement;
    target.alt = 'DataOps Group';
    target.style.background = '#1e4f9c';
    target.style.color = 'white';
    target.style.display = 'flex';
    target.style.alignItems = 'center';
    target.style.justifyContent = 'center';
    target.style.fontSize = '14px';
    target.style.fontWeight = 'bold';
    target.textContent = alt || 'DataOps Group';
  };

  return (
    <img
      src={src}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      className={cn(
        className,
        'max-w-full transition-opacity duration-300 object-contain'
      )}
      style={{
        aspectRatio: width && height ? `${width}/${height}` : 'auto',
        maxHeight: '80px',
        objectFit: 'contain'
      }}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'low'}
      onError={handleLogoError}
      {...props}
    />
  );
};

export default OptimizedLogo;
