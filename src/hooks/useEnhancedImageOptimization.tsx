
import { useState, useEffect } from 'react';
import { getOptimizationSettings, shouldOptimizeImage, optimizeLargeImage } from '@/utils/large-image-optimizer';
import { getImageSrc } from '@/utils/image/optimization';

interface OptimizationOptions {
  maxSizeKB?: number;
  quality?: number;
  context?: 'hero' | 'logo' | 'content' | 'thumbnail' | 'blog-cover';
  format?: 'webp' | 'jpeg' | 'png';
}

interface OptimizationResult {
  optimizedSrc: string;
  isOptimizing: boolean;
  compressionRatio: number;
  error: boolean;
  needsOptimization: boolean;
}

export const useEnhancedImageOptimization = (
  src: string,
  options: OptimizationOptions = {}
): OptimizationResult => {
  const [optimizedSrc, setOptimizedSrc] = useState(src);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [compressionRatio, setCompressionRatio] = useState(0);
  const [error, setError] = useState(false);
  const [needsOptimization, setNeedsOptimization] = useState(false);

  useEffect(() => {
    const optimizeImage = async () => {
      try {
        // Reset state
        setError(false);
        setCompressionRatio(0);
        
        // Get processed image source
        const processedSrc = getImageSrc(src, options.context || 'content');
        
        // Check if this is a known large image that needs aggressive optimization
        const isLargeImage = shouldOptimizeImage(processedSrc);
        setNeedsOptimization(isLargeImage);
        
        if (isLargeImage) {
          setIsOptimizing(true);
          
          // Get context-specific settings or use provided options
          const contextSettings = options.context ? 
            getOptimizationSettings(options.context) : 
            {
              maxSizeKB: options.maxSizeKB || 300,
              quality: options.quality || 0.85,
              maxWidth: 1280,
              format: options.format || 'webp',
              preserveAspectRatio: true
            };
          
          // Apply custom overrides
          const finalSettings = {
            ...contextSettings,
            ...(options.maxSizeKB && { maxSizeKB: options.maxSizeKB }),
            ...(options.quality && { quality: options.quality }),
            ...(options.format && { format: options.format })
          };
          
          const result = await optimizeLargeImage(processedSrc, finalSettings);
          
          if (result.success && result.compressionRatio > 10) {
            setOptimizedSrc(result.optimizedUrl);
            setCompressionRatio(result.compressionRatio);
          } else {
            setOptimizedSrc(processedSrc);
          }
        } else {
          setOptimizedSrc(processedSrc);
        }
      } catch (err) {
        console.warn('Image optimization failed:', err);
        setError(true);
        setOptimizedSrc(src);
      } finally {
        setIsOptimizing(false);
      }
    };

    if (src) {
      optimizeImage();
    }
  }, [src, options.maxSizeKB, options.quality, options.context, options.format]);

  return {
    optimizedSrc,
    isOptimizing,
    compressionRatio,
    error,
    needsOptimization
  };
};
