
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

// Context-specific size limits (in KB) - increased for hero
const CONTEXT_LIMITS: Record<ImageContext, number> = {
  hero: 500, // Increased from 500 to allow for higher quality
  'blog-cover': 200,
  thumbnail: 100,
  logo: 50,
  content: 300,
  background: 400
};

// Context-specific dimensions - enhanced quality for hero
const CONTEXT_DIMENSIONS: Record<ImageContext, ContextDimensions> = {
  hero: { maxWidth: 1920, quality: 0.90 }, // Increased quality from 0.85 to 0.90
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

        // First check if this is a known large image with pre-defined optimizations
        if (isLargeImage(src)) {
          const preOptimizedSrc = getOptimizedImageSrc(src, options.context || 'content');
          if (preOptimizedSrc !== src) {
            setOptimizedSrc(preOptimizedSrc);
            setNeedsOptimization(true);
            setCompressionRatio(30); // Assume good compression for pre-optimized images
            console.log(`Using pre-optimized version for known large image: ${src}`);
            return;
          }
        }

        const service = ImageOptimizationService.getInstance();
        
        // Determine size limit based on context with proper fallback
        const contextLimit = options.context ? CONTEXT_LIMITS[options.context] : options.maxSizeKB;
        const contextDimensions = options.context ? CONTEXT_DIMENSIONS[options.context] : null;

        // Check if image needs optimization
        const shouldOptimize = await service.shouldOptimize(src, contextLimit);
        setNeedsOptimization(shouldOptimize);

        if (shouldOptimize) {
          const result = await service.optimizeImage(src, {
            maxWidth: options.maxWidth || contextDimensions?.maxWidth || 1200,
            quality: options.quality || contextDimensions?.quality || 0.85,
            format: options.format || 'webp'
          });

          setOptimizedSrc(result.optimizedUrl);
          setOriginalSize(result.originalSize);
          setOptimizedSize(result.optimizedSize);
          setCompressionRatio(result.compressionRatio);

          // Log optimization results for monitoring
          if (result.compressionRatio > 10) {
            console.log(`Image optimized: ${src} reduced by ${result.compressionRatio.toFixed(1)}%`);
          }
        } else {
          // Image is already small enough
          setOptimizedSrc(src);
          setOriginalSize(0);
          setOptimizedSize(0);
          setCompressionRatio(0);
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
