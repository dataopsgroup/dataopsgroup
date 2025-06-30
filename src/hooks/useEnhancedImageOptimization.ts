
import { useState, useEffect, useCallback } from 'react';
import { vercelImageOptimizer } from '@/services/imageOptimizationService';

interface OptimizationOptions {
  maxSizeKB?: number;
  quality?: number;
  context?: 'hero' | 'blog-cover' | 'thumbnail' | 'content' | 'logo';
  format?: 'webp' | 'jpeg' | 'png' | 'avif';
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

  const optimizeImage = useCallback(async () => {
    if (!src || src === optimizedSrc) return;

    console.log('🖼️ Starting Vercel image optimization:', src);
    setIsOptimizing(true);
    setError(null);

    try {
      // Check if image needs optimization
      const shouldOptimize = vercelImageOptimizer.shouldOptimize(src);
      setNeedsOptimization(shouldOptimize);
      
      if (!shouldOptimize) {
        console.log('🖼️ Image does not need optimization:', src);
        setOptimizedSrc(src);
        setIsOptimizing(false);
        return;
      }

      // Get context-specific optimization settings
      const settings = vercelImageOptimizer.getOptimizationSettings(options.context || 'content');
      
      // Apply custom quality if provided
      const optimizationSettings = {
        ...settings,
        quality: options.quality ? Math.round(options.quality * 100) : settings.quality,
        format: options.format || settings.format
      };

      console.log('🖼️ Optimizing with Vercel:', optimizationSettings);

      const result = vercelImageOptimizer.optimizeImage(src, optimizationSettings);

      console.log('🖼️ Vercel optimization result:', {
        compressionRatio: result.compressionRatio
      });

      setOptimizedSrc(result.optimizedUrl);
      setCompressionRatio(result.compressionRatio);
    } catch (err) {
      console.error('🖼️ Vercel image optimization failed:', err);
      setError(err instanceof Error ? err.message : 'Optimization failed');
      setOptimizedSrc(src); // Fallback to original
    } finally {
      setIsOptimizing(false);
    }
  }, [src, options.quality, options.context, options.format]);

  useEffect(() => {
    optimizeImage();
  }, [optimizeImage]);

  return {
    optimizedSrc,
    isOptimizing,
    compressionRatio,
    error,
    needsOptimization
  };
};
