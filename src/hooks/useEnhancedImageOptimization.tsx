
import { useState, useEffect } from 'react';
import { getOptimizedImageSrc, type ImageContext } from '../utils/large-image-replacements';

interface OptimizationOptions {
  maxSizeKB: number;
  quality: number;
  context: ImageContext;
  format?: 'webp' | 'jpeg' | 'png';
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
  options: OptimizationOptions
): OptimizationResult => {
  const [result, setResult] = useState<OptimizationResult>({
    optimizedSrc: src,
    isOptimizing: false,
    compressionRatio: 0,
    error: null,
    needsOptimization: false
  });

  useEffect(() => {
    if (!src) return;

    try {
      // Use the existing optimization system
      const optimizedSrc = getOptimizedImageSrc(src);
      
      setResult({
        optimizedSrc,
        isOptimizing: false,
        compressionRatio: optimizedSrc !== src ? 20 : 0, // Estimate
        error: null,
        needsOptimization: optimizedSrc !== src
      });
    } catch (error) {
      console.warn('Image optimization failed:', error);
      setResult({
        optimizedSrc: src, // Fallback to original
        isOptimizing: false,
        compressionRatio: 0,
        error: error instanceof Error ? error.message : 'Unknown error',
        needsOptimization: false
      });
    }
  }, [src, options]);

  return result;
};
