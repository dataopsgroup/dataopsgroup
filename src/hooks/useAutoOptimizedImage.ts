
import { useState, useEffect, useRef } from 'react';
import { ImageOptimizationService } from '@/services/imageOptimizationService';

interface UseAutoOptimizedImageProps {
  src: string;
  maxSizeKB?: number;
  quality?: number;
  maxWidth?: number;
  format?: 'webp' | 'jpeg' | 'png' | 'avif';
}

interface UseAutoOptimizedImageReturn {
  optimizedSrc: string;
  isOptimizing: boolean;
  originalSize: number;
  optimizedSize: number;
  compressionRatio: number;
  error: string | null;
}

export const useAutoOptimizedImage = ({
  src,
  maxSizeKB = 100,
  quality = 0.85,
  maxWidth = 1280,
  format = 'webp'
}: UseAutoOptimizedImageProps): UseAutoOptimizedImageReturn => {
  const [optimizedSrc, setOptimizedSrc] = useState(src);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [originalSize, setOriginalSize] = useState(0);
  const [optimizedSize, setOptimizedSize] = useState(0);
  const [compressionRatio, setCompressionRatio] = useState(0);
  const [error, setError] = useState<string | null>(null);
  
  const optimizationService = useRef(ImageOptimizationService.getInstance());
  const previousOptimizedUrl = useRef<string | null>(null);

  useEffect(() => {
    if (!src) return;

    const optimizeIfNeeded = async () => {
      try {
        setIsOptimizing(true);
        setError(null);

        // Check if optimization is needed
        const shouldOptimize = await optimizationService.current.shouldOptimize(src, maxSizeKB);
        
        if (!shouldOptimize) {
          setOptimizedSrc(src);
          setIsOptimizing(false);
          return;
        }

        // Perform optimization
        const result = await optimizationService.current.optimizeImage(src, {
          quality,
          maxWidth,
          format
        });

        // Clean up previous optimized URL
        if (previousOptimizedUrl.current && previousOptimizedUrl.current !== src) {
          optimizationService.current.cleanup(previousOptimizedUrl.current);
        }

        setOptimizedSrc(result.optimizedUrl);
        setOriginalSize(result.originalSize);
        setOptimizedSize(result.optimizedSize);
        setCompressionRatio(result.compressionRatio);
        previousOptimizedUrl.current = result.optimizedUrl;

        console.log(`Image optimized: ${result.compressionRatio.toFixed(1)}% reduction`);
      } catch (err) {
        console.error('Image optimization failed:', err);
        setError(err instanceof Error ? err.message : 'Optimization failed');
        setOptimizedSrc(src); // Fallback to original
      } finally {
        setIsOptimizing(false);
      }
    };

    optimizeIfNeeded();

    // Cleanup on unmount
    return () => {
      if (previousOptimizedUrl.current && previousOptimizedUrl.current !== src) {
        optimizationService.current.cleanup(previousOptimizedUrl.current);
      }
    };
  }, [src, maxSizeKB, quality, maxWidth, format]);

  return {
    optimizedSrc,
    isOptimizing,
    originalSize,
    optimizedSize,
    compressionRatio,
    error
  };
};
