
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
 * Simplified logo component without optimization complexity that causes flickering
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
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn(
        'max-w-full object-contain',
        className
      )}
      style={{
        aspectRatio: width && height ? `${width}/${height}` : 'auto',
        maxHeight: '80px',
        objectFit: 'contain'
      }}
      loading={priority ? 'eager' : 'lazy'}
      decoding={priority ? 'sync' : 'async'}
      fetchPriority={priority ? 'high' : 'low'}
      {...props}
    />
  );
};

export default OptimizedLogo;
