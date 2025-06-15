
import React from 'react';
import { getImageSrc } from '@/utils/image/optimization';

interface OptimizedContentImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  maxSizeKB?: number;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
}

const OptimizedContentImage = ({
  src,
  alt,
  className = '',
  maxSizeKB = 200,
  priority = false,
  loading,
  ...props
}: OptimizedContentImageProps) => {
  // Use simple image source processing
  const imageSrc = getImageSrc(src, 'content');
  const imageLoading = loading || (priority ? 'eager' : 'lazy');

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      loading={imageLoading}
      decoding={priority ? 'sync' : 'async'}
      {...props}
      onError={(e) => {
        console.warn(`Failed to load image: ${src}`);
        if (props.onError) props.onError(e);
      }}
    />
  );
};

export default OptimizedContentImage;
