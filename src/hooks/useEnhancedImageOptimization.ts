
import { useState, useEffect, useCallback } from 'react';
import { ImageOptimizationService } from '@/services/imageOptimizationService';

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

    console.log('🖼️ Starting image optimization:', src);
    setIsOptimizing(true);
    setError(null);

    try {
      const service = ImageOptimizationService.getInstance();
      
      // Check if image needs optimization
      const shouldOptimize = await service.shouldOptimize(src, options.maxSizeKB || 200);
      setNeedsOptimization(shouldOptimize);
      
      if (!shouldOptimize) {
        console.log('🖼️ Image does not need optimization:', src);
        setOptimizedSrc(src);
        setIsOptimizing(false);
        return;
      }

      // Handle cache-busting for images with version parameters
      const hasVersionParam = src.includes('?v=');
      const cacheBustingSrc = hasVersionParam ? src : `${src}?t=${Date.now()}`;
      
      console.log('🖼️ Optimizing with cache-busting:', cacheBustingSrc);

      const result = await service.optimizeImage(cacheBustingSrc, {
        maxWidth: options.context === 'hero' ? 1200 : 800,
        maxHeight: options.context === 'hero' ? 800 : 600,
        quality: options.quality || 0.85,
        format: options.format || 'webp'
      });

      console.log('🖼️ Optimization result:', {
        originalSize: result.originalSize,
        optimizedSize: result.optimizedSize,
        compressionRatio: result.compressionRatio
      });

      setOptimizedSrc(result.optimizedUrl);
      setCompressionRatio(result.compressionRatio);
    } catch (err) {
      console.error('🖼️ Image optimization failed:', err);
      setError(err instanceof Error ? err.message : 'Optimization failed');
      setOptimizedSrc(src); // Fallback to original
    } finally {
      setIsOptimizing(false);
    }
  }, [src, options.maxSizeKB, options.quality, options.context, options.format]);

  useEffect(() => {
    optimizeImage();
  }, [optimizeImage]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (optimizedSrc && optimizedSrc.startsWith('blob:')) {
        URL.revokeObjectURL(optimizedSrc);
      }
    };
  }, [optimizedSrc]);

  return {
    optimizedSrc,
    isOptimizing,
    compressionRatio,
    error,
    needsOptimization
  };
};
