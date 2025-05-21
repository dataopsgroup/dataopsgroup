
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  aspectRatio?: number;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  sizes?: string;
  quality?: number;
  blurDataURL?: string;
  useBlurhash?: boolean;
}

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  aspectRatio,
  objectFit = 'cover',
  loading,
  decoding,
  sizes = '(min-width: 1024px) 50vw, 100vw',
  quality = 85,
  blurDataURL,
  useBlurhash = false,
  ...props
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [supportsWebp, setSupportsWebp] = useState(false);
  const [supportsAvif, setSupportsAvif] = useState(false);
  
  // Check for WebP and AVIF support
  useEffect(() => {
    // Check WebP support
    const checkWebpSupport = async () => {
      const supported = await testWebP();
      setSupportsWebp(supported);
    };
    
    // Check AVIF support
    const checkAvifSupport = async () => {
      try {
        if (window.createImageBitmap) {
          const response = await fetch('data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=');
          if (response.ok) {
            const blob = await response.blob();
            const bitmap = await createImageBitmap(blob);
            setSupportsAvif(true);
            bitmap.close();
          }
        }
      } catch (e) {
        setSupportsAvif(false);
        console.log('AVIF not supported');
      }
    };
    
    checkWebpSupport();
    checkAvifSupport();
  }, []);
  
  // Test for WebP support
  const testWebP = () => {
    return new Promise<boolean>(resolve => {
      const webP = new Image();
      webP.onload = () => resolve(true);
      webP.onerror = () => resolve(false);
      webP.src = 'data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==';
    });
  };
  
  // Check if the image is a remote URL that could benefit from optimization
  const isRemoteImage = src.startsWith('http') && !src.includes('lovable-uploads');
  
  // Determine loading strategy
  const loadingStrategy = priority ? 'eager' : (loading || 'lazy');
  const decodingStrategy = priority ? 'sync' : (decoding || 'async');
  
  // Generate image URLs for srcset based on different resolutions
  const generateSrcSet = () => {
    if (!width || !height || !isRemoteImage) return undefined;
    
    // For local images (in public folder)
    if (src.startsWith('/')) {
      // Generate srcset with different widths
      return `${src} ${width}w, ${src} ${Math.round(width * 1.5)}w, ${src} ${width * 2}w`;
    }
    
    return undefined;
  };
  
  // Generate WebP srcset if supported
  const generateWebPSrcSet = () => {
    if (!supportsWebp || !width || !height || !isRemoteImage) return undefined;
    
    if (src.startsWith('/')) {
      // Replace extension with .webp for local images
      const webpSrc = src.replace(/\.(jpe?g|png)$/i, '.webp');
      return `${webpSrc} ${width}w, ${webpSrc} ${Math.round(width * 1.5)}w, ${webpSrc} ${width * 2}w`;
    }
    
    return undefined;
  };
  
  // Generate AVIF srcset if supported
  const generateAvifSrcSet = () => {
    if (!supportsAvif || !width || !height || !isRemoteImage) return undefined;
    
    if (src.startsWith('/')) {
      // Replace extension with .avif for local images
      const avifSrc = src.replace(/\.(jpe?g|png)$/i, '.avif');
      return `${avifSrc} ${width}w, ${avifSrc} ${Math.round(width * 1.5)}w, ${avifSrc} ${width * 2}w`;
    }
    
    return undefined;
  };
  
  const srcSet = generateSrcSet();
  const webpSrcSet = generateWebPSrcSet();
  const avifSrcSet = generateAvifSrcSet();
  
  // Handle image load error
  const onError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    console.error(`Failed to load image: ${target.src}`);
  };
  
  // Handle image load success
  const onLoad = () => {
    setIsLoaded(true);
  };
  
  // Create a placeholder blur effect
  const placeholderStyle = !isLoaded && blurDataURL ? {
    filter: 'blur(20px)',
    backgroundSize: 'cover',
    backgroundImage: `url(${blurDataURL})`,
    backgroundPosition: 'center center',
  } : {};
  
  // Determine if image should be preloaded
  useEffect(() => {
    if (priority && src) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      link.type = 'image/jpeg'; // Adjust based on actual image type
      document.head.appendChild(link);
      
      return () => {
        document.head.removeChild(link);
      };
    }
  }, [priority, src]);
  
  // Build the image element with appropriate attributes
  const imageElement = (
    <picture>
      {supportsAvif && avifSrcSet && (
        <source
          type="image/avif"
          srcSet={avifSrcSet}
          sizes={sizes}
        />
      )}
      {supportsWebp && webpSrcSet && (
        <source
          type="image/webp"
          srcSet={webpSrcSet}
          sizes={sizes}
        />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          'max-w-full transition-opacity duration-300',
          objectFit && `object-${objectFit}`,
          !isLoaded && 'opacity-0',
          isLoaded && 'opacity-100',
          className
        )}
        style={placeholderStyle}
        loading={loadingStrategy}
        decoding={decodingStrategy}
        sizes={sizes}
        srcSet={srcSet}
        onError={onError}
        onLoad={onLoad}
        {...props}
      />
      {/* Add a noscript fallback for users with JavaScript disabled */}
      <noscript>
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          className={className}
        />
      </noscript>
    </picture>
  );
  
  // If an aspect ratio is specified, wrap the image in an AspectRatio component
  if (aspectRatio) {
    return (
      <AspectRatio ratio={aspectRatio} className={cn('overflow-hidden', className)}>
        {imageElement}
      </AspectRatio>
    );
  }

  return imageElement;
};

export default OptimizedImage;
