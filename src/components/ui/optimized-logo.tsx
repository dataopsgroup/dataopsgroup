
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { mobileLogoOptimizer, generateMobileLogoSrcSet, supportsWebP } from '@/utils/mobile-logo-optimization';

interface OptimizedLogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

/**
 * Optimized logo component with WebP conversion for mobile optimization
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
  const [webPSupported, setWebPSupported] = useState<boolean | null>(null);
  const [screenWidth, setScreenWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 1024);
  
  // Check WebP support on mount
  useEffect(() => {
    supportsWebP().then(setWebPSupported);
    
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const shouldOptimizeForMobile = mobileLogoOptimizer.shouldOptimize(src);
  
  // Get the appropriate source based on WebP support and screen size
  const getOptimalSrc = () => {
    if (!shouldOptimizeForMobile || webPSupported === null) {
      return src; // Fallback to original while checking support
    }
    
    if (webPSupported) {
      return mobileLogoOptimizer.getOptimizedSrc(src, screenWidth);
    }
    
    // WebP not supported, use PNG with optimization parameters
    if (screenWidth <= 480) {
      return `${src}?w=120&h=48&q=85`;
    }
    if (screenWidth <= 768) {
      return `${src}?w=160&h=64&q=90`;
    }
    return src;
  };

  // Generate srcset based on WebP support
  const getSrcSet = () => {
    if (!shouldOptimizeForMobile || webPSupported === null) {
      return '';
    }
    
    if (webPSupported) {
      return generateMobileLogoSrcSet(src);
    }
    
    // Fallback PNG srcset
    return [
      `${src}?w=120&h=48&q=85 480w`,
      `${src}?w=160&h=64&q=90 768w`,
      `${src}?w=200&h=80&q=95 1024w`
    ].join(', ');
  };

  const sizes = shouldOptimizeForMobile ? mobileLogoOptimizer.getMobileSizes() : '';

  // Enhanced error handler with fallback styling
  const handleLogoError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.warn('Logo failed to load, trying fallback');
    const target = e.target as HTMLImageElement;
    
    // If WebP failed, try PNG fallback
    if (shouldOptimizeForMobile && webPSupported && target.src.includes('.webp')) {
      target.src = mobileLogoOptimizer.getOptimizedSrc(src.replace('.webp', '.png'), screenWidth);
      return;
    }
    
    // Ultimate fallback styling
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
      src={getOptimalSrc()}
      srcSet={getSrcSet()}
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
