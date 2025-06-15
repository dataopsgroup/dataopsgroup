import { useState, useEffect } from 'react';
import { getOptimizationSettings, shouldOptimizeImage, optimizeLargeImage } from '@/utils/large-image-optimizer';
import { isKnownLargeImage, getLargeImageSettings } from '@/utils/large-image-replacements';

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
        const processedSrc = src;
        
        // Check if this is a known large image causing Ahrefs issues
        const isLargeImage = shouldOptimizeImage(processedSrc) || isKnownLargeImage(processedSrc);

        setNeedsOptimization(isLargeImage);
        
        if (isLargeImage) {
          setIsOptimizing(true);
          
          // Get settings for known large images first, then fall back to context settings
          const largeImageSettings = getLargeImageSettings(processedSrc);
          
          let finalSettings;
          if (largeImageSettings) {
            // Use specific settings for known problematic images
            finalSettings = {
              maxSizeKB: largeImageSettings.maxSizeKB,
              quality: 0.65, // More aggressive for Ahrefs fixes
              maxWidth: largeImageSettings.context === 'hero' ? 1600 : 800, // Smaller for better compression
              format: 'webp' as const,
              preserveAspectRatio: true
            };
          } else {
            // Get context-specific settings or use provided options
            const contextSettings = options.context ? 
              getOptimizationSettings(options.context) : 
              {
                maxSizeKB: options.maxSizeKB || 200, // More aggressive default
                quality: options.quality || 0.75, // Lower quality default
                maxWidth: 1000, // Smaller default
                format: options.format || 'webp',
                preserveAspectRatio: true
              };
            
            // Apply custom overrides with more aggressive defaults
            finalSettings = {
              ...contextSettings,
              maxSizeKB: Math.min(contextSettings.maxSizeKB, options.maxSizeKB || contextSettings.maxSizeKB),
              quality: Math.min(contextSettings.quality, options.quality || contextSettings.quality),
              ...(options.format && { format: options.format })
            };
          }
          
          const result = await optimizeLargeImage(processedSrc, finalSettings);
          
          // Accept optimization if we get any meaningful compression
          if (result.success && result.compressionRatio > 5) {
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
