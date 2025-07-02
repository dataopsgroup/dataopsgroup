
import React from 'react';
import { cn } from '@/lib/utils';

interface MobileOptimizedLogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

/**
 * Mobile-optimized logo component that serves different sizes for mobile vs desktop
 * Uses smaller dimensions on mobile to reduce file size while maintaining quality on desktop
 */
const MobileOptimizedLogo = ({
  src,
  alt,
  width = 200,
  height = 80,
  className,
  priority = false,
  ...props
}: MobileOptimizedLogoProps) => {
  // Create mobile-optimized version with smaller dimensions
  const mobileWidth = Math.round(width * 0.6); // 60% of desktop size
  const mobileHeight = Math.round(height * 0.6);
  
  // Generate srcset for different screen sizes
  const srcSet = `
    ${src}?w=${mobileWidth}&h=${mobileHeight}&q=85 480w,
    ${src}?w=${Math.round(width * 0.8)}&h=${Math.round(height * 0.8)}&q=90 768w,
    ${src}?w=${width}&h=${height}&q=95 1024w
  `;
  
  // Sizes attribute optimized for logo usage
  const sizes = "(max-width: 480px) 120px, (max-width: 768px) 160px, 200px";

  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.warn('Logo failed to load, using fallback');
    const target = e.target as HTMLImageElement;
    target.style.background = '#1e4f9c';
    target.style.color = 'white';
    target.style.display = 'flex';
    target.style.alignItems = 'center';
    target.style.justifyContent = 'center';
    target.style.fontSize = '14px';
    target.style.fontWeight = 'bold';
    target.textContent = 'DataOps Group';
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
        aspectRatio: `${width}/${height}`,
        maxHeight: '80px',
        objectFit: 'contain'
      }}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'low'}
      onError={handleError}
      {...props}
    />
  );
};

export default MobileOptimizedLogo;
