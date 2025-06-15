
import { useState, useEffect, useRef } from 'react';

interface OptimizationOptions {
  maxSizeKB?: number;
  quality?: number;
  context?: 'hero' | 'thumbnail' | 'blog-cover' | 'content' | 'logo';
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
  options: OptimizationOptions = {}
): OptimizationResult => {
  const [optimizedSrc, setOptimizedSrc] = useState(src);
  const [isOptimizing, setIsOptimizing] = useState(false);
  const [compressionRatio, setCompressionRatio] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [needsOptimization, setNeedsOptimization] = useState(false);
  const optimizationAttempted = useRef(false);

  const {
    maxSizeKB = 300,
    quality = 0.85,
    context = 'content',
    format = 'webp'
  } = options;

  useEffect(() => {
    // Skip optimization for external URLs or SVGs
    if (!src || src.startsWith('http') || src.endsWith('.svg') || optimizationAttempted.current) {
      return;
    }

    optimizationAttempted.current = true;
    optimizeImage();
  }, [src, maxSizeKB, quality, context, format]);

  const optimizeImage = async () => {
    try {
      setIsOptimizing(true);
      setError(null);

      // Create image element to check current size
      const img = new Image();
      img.crossOrigin = 'anonymous';
      
      img.onload = async () => {
        try {
          // Create canvas for optimization
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          
          if (!ctx) {
            throw new Error('Could not get canvas context');
          }

          // Calculate optimal dimensions based on context
          let targetWidth = img.naturalWidth;
          let targetHeight = img.naturalHeight;

          const contextLimits = {
            hero: { maxWidth: 1200, maxHeight: 800 },
            thumbnail: { maxWidth: 300, maxHeight: 200 },
            'blog-cover': { maxWidth: 600, maxHeight: 400 },
            content: { maxWidth: 800, maxHeight: 600 },
            logo: { maxWidth: 200, maxHeight: 100 }
          };

          const limits = contextLimits[context];
          
          if (targetWidth > limits.maxWidth || targetHeight > limits.maxHeight) {
            const aspectRatio = targetWidth / targetHeight;
            if (targetWidth > limits.maxWidth) {
              targetWidth = limits.maxWidth;
              targetHeight = targetWidth / aspectRatio;
            }
            if (targetHeight > limits.maxHeight) {
              targetHeight = limits.maxHeight;
              targetWidth = targetHeight * aspectRatio;
            }
          }

          canvas.width = targetWidth;
          canvas.height = targetHeight;

          // Draw and compress
          ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
          
          // Convert to optimized format
          const mimeType = format === 'webp' ? 'image/webp' : 
                          format === 'jpeg' ? 'image/jpeg' : 'image/png';
          
          const optimizedDataUrl = canvas.toDataURL(mimeType, quality);
          
          // Calculate compression ratio (rough estimate)
          const originalSize = src.length * 0.75; // Base64 estimation
          const optimizedSize = optimizedDataUrl.length * 0.75;
          const ratio = ((originalSize - optimizedSize) / originalSize) * 100;
          
          setOptimizedSrc(optimizedDataUrl);
          setCompressionRatio(Math.max(0, ratio));
          setNeedsOptimization(ratio > 10);
          
        } catch (err) {
          console.warn('Image optimization failed:', err);
          setError('Optimization failed');
          setOptimizedSrc(src);
        } finally {
          setIsOptimizing(false);
        }
      };

      img.onerror = () => {
        setError('Failed to load image');
        setOptimizedSrc(src);
        setIsOptimizing(false);
      };

      img.src = src;
      
    } catch (err) {
      console.warn('Image optimization error:', err);
      setError('Optimization error');
      setOptimizedSrc(src);
      setIsOptimizing(false);
    }
  };

  return {
    optimizedSrc,
    isOptimizing,
    compressionRatio,
    error,
    needsOptimization
  };
};
