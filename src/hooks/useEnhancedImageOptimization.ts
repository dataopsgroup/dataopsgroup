
import { useState, useEffect } from 'react';
import { ImageOptimizationService } from '@/services/imageOptimizationService';
import { getOptimizedImageSrc, isLargeImage, type ImageContext } from '@/utils/large-image-replacements';

interface EnhancedOptimizationOptions {
  maxSizeKB: number;
  quality?: number;
  maxWidth?: number;
  format?: 'webp' | 'jpeg' | 'png' | 'avif';
  context?: ImageContext;
}

interface EnhancedOptimizationResult {
  optimizedSrc: string;
  isOptimizing: boolean;
  originalSize: number;
  optimizedSize: number;
  compressionRatio: number;
  error: string | null;
  needsOptimization: boolean;
}

interface ContextDimensions {
  maxWidth: number;
  quality: number;
}

// Context-specific size limits (in KB) - fallbacks only
const CONTEXT_LIMITS: Record<ImageContext, number> = {
  hero: 500,
  'blog-cover': 200,
  thumbnail: 100,
  logo: 50,
  content: 300,
  background: 400
};

// Context-specific dimensions - fallbacks only
const CONTEXT_DIMENSIONS: Record<ImageContext, ContextDimensions> = {
  hero: { maxWidth: 1920, quality: 0.90 },
  'blog-cover': { maxWidth: 800, quality: 0.85 },
  thumbnail: { maxWidth: 400, quality: 0.8 },
  logo: { maxWidth: 300, quality: 0.9 },
  content: { maxWidth: 1200, quality: 0.85 },
  background: { maxWidth: 1920, quality: 0.8 }
};

export const useEnhancedImageOptimization = (
  src: string,
  options: EnhancedOptimizationOptions
): EnhancedOptimizationResult => {
  const [optimizedSrc, setOptimizedSrc] = useState(src);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [originalSize, setOriginalSize] = useState(0);
  const [optimizedSize, setOptimizedSize] = useState(0);
  const [compressionRatio, setCompressionRatio] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [needsOptimization, setNeedsOptimization] = useState(false);

  useEffect(() => {
    if (!src) return;

    const optimizeImage = async () => {
      try {
        setIsOptimizing(true);
        setError(null);

        // Check if this is a known large image that should use pre-optimized versions
        if (isLargeImage(src)) {
          const preOptimizedSrc = getOptimizedImageSrc(src, options.context || 'content');
          if (preOptimizedSrc !== src) {
            setOptimizedSrc(preOptimizedSrc);
            setNeedsOptimization(true);
            setCompressionRatio(30);
            console.log(`Using pre-optimized version for known large image: ${src}`);
            return;
          }
        }

        const service = ImageOptimizationService.getInstance();
        
        // PRIORITY: Component props take precedence over context defaults
        const contextDimensions = options.context ? CONTEXT_DIMENSIONS[options.context] : null;
        const contextLimit = options.context ? CONTEXT_LIMITS[options.context] : 100;
        
        // Use component props first, then context fallbacks
        const finalMaxSizeKB = options.maxSizeKB; // Always use component prop
        const finalQuality = options.quality || contextDimensions?.quality || 0.85;
        const finalMaxWidth = options.maxWidth || contextDimensions?.maxWidth || 1200;

        console.log(`Hero optimization settings - Size: ${finalMaxSizeKB}KB, Quality: ${finalQuality}, Width: ${finalMaxWidth}px`);

        // Check if image needs optimization
        const shouldOptimize = await service.shouldOptimize(src, finalMaxSizeKB);
        setNeedsOptimization(shouldOptimize);

        if (shouldOptimize) {
          // Add cache busting for development
          const cacheKey = `${src}-${finalMaxSizeKB}-${finalQuality}-${finalMaxWidth}`;
          
          const result = await service.optimizeImage(src, {
            maxWidth: finalMaxWidth,
            quality: finalQuality,
            format: options.format || 'webp'
          });

          setOptimizedSrc(result.optimizedUrl);
          setOriginalSize(result.originalSize);
          setOptimizedSize(result.optimizedSize);
          setCompressionRatio(result.compressionRatio);

          // Enhanced logging for hero images
          if (options.context === 'hero') {
            console.log(`HERO IMAGE OPTIMIZED: ${src}`);
            console.log(`Original: ${(result.originalSize / 1024).toFixed(1)}KB`);
            console.log(`Optimized: ${(result.optimizedSize / 1024).toFixed(1)}KB`);
            console.log(`Compression: ${result.compressionRatio.toFixed(1)}%`);
            console.log(`Quality used: ${finalQuality}`);
          }
        } else {
          // Image is already small enough
          setOptimizedSrc(src);
          setOriginalSize(0);
          setOptimizedSize(0);
          setCompressionRatio(0);
          console.log(`Image ${src} already optimized, size under ${finalMaxSizeKB}KB limit`);
        }
      } catch (err) {
        console.error('Image optimization failed:', err);
        setError('Optimization failed');
        setOptimizedSrc(src); // Fallback to original
      } finally {
        setIsOptimizing(false);
      }
    };

    optimizeImage();
  }, [src, options.maxSizeKB, options.quality, options.maxWidth, options.format, options.context]);

  return {
    optimizedSrc,
    isOptimizing,
    originalSize,
    optimizedSize,
    compressionRatio,
    error,
    needsOptimization
  };
};
