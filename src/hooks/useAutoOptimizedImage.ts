
import { useState, useEffect } from 'react';

interface OptimizationOptions {
  maxSizeKB: number;
  quality: number;
  maxWidth: number;
  format: 'webp' | 'jpeg' | 'png' | 'avif';
}

interface OptimizationResult {
  optimizedSrc: string;
  isOptimizing: boolean;
  originalSize: number;
  optimizedSize: number;
  compressionRatio: number;
  error: string | null;
}

export const useAutoOptimizedImage = (
  options: { src: string } & OptimizationOptions
): OptimizationResult => {
  const [optimizedSrc, setOptimizedSrc] = useState(options.src);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [originalSize, setOriginalSize] = useState(0);
  const [optimizedSize, setOptimizedSize] = useState(0);
  const [compressionRatio, setCompressionRatio] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!options.src || options.src.startsWith('data:') || options.src.startsWith('blob:')) {
      return;
    }

    const optimizeImage = async () => {
      setIsOptimizing(true);
      setError(null);

      try {
        // For external services, apply URL parameters
        if (options.src.includes('unsplash.com')) {
          const url = new URL(options.src);
          url.searchParams.set('w', options.maxWidth.toString());
          url.searchParams.set('q', Math.round(options.quality * 100).toString());
          url.searchParams.set('fm', options.format);
          setOptimizedSrc(url.toString());
          setCompressionRatio(20); // Estimated
        } else {
          setOptimizedSrc(options.src);
        }
      } catch (err) {
        setError('Optimization failed');
        setOptimizedSrc(options.src);
      } finally {
        setIsOptimizing(false);
      }
    };

    optimizeImage();
  }, [options.src, options.maxSizeKB, options.quality, options.maxWidth, options.format]);

  return {
    optimizedSrc,
    isOptimizing,
    originalSize,
    optimizedSize,
    compressionRatio,
    error
  };
};
