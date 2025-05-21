
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';

interface ProgressiveImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  aspectRatio?: number;
  placeholder?: string;
  threshold?: number;
  blur?: boolean;
}

/**
 * Progressive image component that optimizes Core Web Vitals
 * - Reduces CLS by maintaining aspect ratio
 * - Improves LCP by properly setting size attributes
 * - Uses IntersectionObserver for efficient loading
 */
const ProgressiveImage = ({
  src,
  alt,
  width,
  height,
  className,
  aspectRatio,
  placeholder = '/placeholder.svg',
  threshold = 0.1,
  blur = true,
  ...props
}: ProgressiveImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Set up intersection observer to load image only when in viewport
  useEffect(() => {
    if (!imgRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observerRef.current?.disconnect();
        }
      },
      { threshold, rootMargin: '200px' } // Start loading 200px before coming into view
    );

    observerRef.current.observe(imgRef.current);

    return () => {
      observerRef.current?.disconnect();
    };
  }, [threshold]);

  // Clear memory when component unmounts
  useEffect(() => {
    return () => {
      if (imgRef.current?.src) {
        URL.revokeObjectURL(imgRef.current.src);
      }
    };
  }, []);

  // Handle image load event
  const handleLoad = () => {
    setIsLoaded(true);
    
    // Report LCP if it's a hero image
    if (props['data-lcp'] === 'true' && window.performance && 'measure' in window.performance) {
      try {
        window.performance.measure('lcp-image-loaded', 'navigationStart');
        if (window.gtag) {
          const lcpTiming = window.performance.getEntriesByName('lcp-image-loaded')[0];
          window.gtag('event', 'web_vitals', {
            metric_name: 'LCP',
            metric_value: lcpTiming.duration,
            metric_delta: 0
          });
        }
      } catch (e) {
        console.error('Error measuring LCP:', e);
      }
    }
  };

  const imageElement = (
    <>
      {/* Always render placeholder initially to prevent CLS */}
      <img 
        ref={imgRef}
        src={inView ? src : placeholder}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          className,
          'max-w-full',
          blur && !isLoaded && 'blur-sm scale-105',
          'transition-all duration-300'
        )}
        onLoad={handleLoad}
        loading={props['data-lcp'] === 'true' ? 'eager' : 'lazy'} 
        decoding={props['data-lcp'] === 'true' ? 'sync' : 'async'}
        {...props}
      />
      <noscript>
        <img 
          src={src} 
          alt={alt} 
          width={width} 
          height={height} 
          className={className}
        />
      </noscript>
    </>
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

export default ProgressiveImage;
