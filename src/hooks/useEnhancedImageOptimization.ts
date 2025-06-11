
import { useState, useEffect } from 'react';

interface OptimizationOptions {
  maxSizeKB?: number;
  quality?: number;
  maxWidth?: number;
  context?: 'hero' | 'blog-cover' | 'thumbnail' | 'content' | 'logo';
  format?: 'webp' | 'avif' | 'auto';
}

interface OptimizationResult {
  optimizedSrc: string;
  isOptimizing: boolean;
  compressionRatio: number;
  error: string | null;
  needsOptimization: boolean;
}

export const useEnhancedImageOptimization = (
  src: string,
  options: OptimizationOptions = {}
): OptimizationResult => {
  const [optimizedSrc, setOptimizedSrc] = useState(src);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [compressionRatio, setCompressionRatio] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [needsOptimization, setNeedsOptimization] = useState(false);

  const {
    maxSizeKB = 300,
    quality = 0.85,
    maxWidth = 1920,
    context = 'content',
    format = 'auto'
  } = options;

  useEffect(() => {
    if (!src || src.startsWith('data:') || src.startsWith('blob:')) {
      return;
    }

    const optimizeImage = async () => {
      setIsOptimizing(true);
      setError(null);

      try {
        // For external images or already optimized URLs, return as-is
        if (src.includes('unsplash.com') || src.includes('lovable-uploads')) {
          let optimizedUrl = src;
          
          // Add optimization parameters for Unsplash
          if (src.includes('unsplash.com')) {
            const url = new URL(src);
            url.searchParams.set('w', maxWidth.toString());
            url.searchParams.set('q', Math.round(quality * 100).toString());
            url.searchParams.set('fm', format === 'auto' ? 'webp' : format);
            url.searchParams.set('fit', 'crop');
            optimizedUrl = url.toString();
          }
          
          setOptimizedSrc(optimizedUrl);
          setCompressionRatio(15); // Estimated compression for external services
        } else {
          // For local images, use as-is but mark for potential optimization
          setOptimizedSrc(src);
          setNeedsOptimization(true);
        }
      } catch (err) {
        setError('Optimization failed');
        setOptimizedSrc(src);
      } finally {
        setIsOptimizing(false);
      }
    };

    optimizeImage();
  }, [src, maxSizeKB, quality, maxWidth, context, format]);

  return {
    optimizedSrc,
    isOptimizing,
    compressionRatio,
    error,
    needsOptimization
  };
};
