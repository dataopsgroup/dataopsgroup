
import { useState, useEffect } from 'react';
import { vercelImageOptimizer } from '@/services/imageOptimizationService';
import { type ImageContext } from '../utils/large-image-replacements';

interface OptimizationOptions {
  maxSizeKB: number;
  quality: number;
  context: ImageContext;
  format?: 'webp' | 'jpeg' | 'png' | 'avif' | 'auto';
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

    // Check if image needs optimization
    const needsOptimization = vercelImageOptimizer.shouldOptimize(src);
    
    if (!needsOptimization) {
      setResult({
        optimizedSrc: src,
        isOptimizing: false,
        compressionRatio: 0,
        error: null,
        needsOptimization: false
      });
      return;
    }

    setResult(prev => ({ ...prev, isOptimizing: true, needsOptimization: true }));

    try {
      // Get context-specific optimization settings
      const settings = vercelImageOptimizer.getOptimizationSettings(options.context);
      
      // Apply custom quality if provided
      const optimizationSettings = {
        ...settings,
        quality: Math.round(options.quality * 100), // Convert to percentage
        format: options.format || settings.format
      };

      // Optimize using Vercel service
      const optimizationResult = vercelImageOptimizer.optimizeImage(src, optimizationSettings);
      
      setResult({
        optimizedSrc: optimizationResult.optimizedUrl,
        isOptimizing: false,
        compressionRatio: optimizationResult.compressionRatio,
        error: null,
        needsOptimization: true
      });

      // Log optimization success
      console.log(`🖼️ Vercel optimization applied to ${src}: ${optimizationResult.compressionRatio}% reduction`);
      
    } catch (error) {
      console.warn('Vercel image optimization failed:', error);
      setResult({
        optimizedSrc: src, // Fallback to original
        isOptimizing: false,
        compressionRatio: 0,
        error: error instanceof Error ? error.message : 'Optimization failed',
        needsOptimization: true
      });
    }
  }, [src, options.context, options.quality, options.format]);

  return result;
};
