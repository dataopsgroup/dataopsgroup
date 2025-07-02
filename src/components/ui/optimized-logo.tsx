
import React from 'react';
import { cn } from '@/lib/utils';

interface OptimizedLogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

/**
 * Simplified optimized logo component without flickering
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
  // Simple error handler
  const handleLogoError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.warn('Logo failed to load');
    const target = e.target as HTMLImageElement;
    target.alt = 'DataOps Group';
  };

  return (
    <img
      src={src}
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
