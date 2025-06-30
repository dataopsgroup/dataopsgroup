
/**
 * Enhanced image optimization and quality utilities
 */

import { getOptimizedImageSrc, getOptimizationSettings, type ImageContext } from '../large-image-replacements';

/**
 * Enhanced image quality optimization based on context
 */
export const getOptimalQuality = (
  imageType: 'photo' | 'illustration' | 'icon' | 'logo' = 'photo',
  isRetina: boolean = false
): number => {
  const baseQuality = {
    photo: 85,
    illustration: 90,
    icon: 100,
    logo: 100
  };
  
  // Reduce quality for retina displays to maintain performance
  return isRetina ? Math.min(baseQuality[imageType] - 10, 85) : baseQuality[imageType];
};

/**
 * Get optimized image source with automatic large image handling
 */
export const getImageSrc = (src: string, context: ImageContext = 'content'): string => {
  if (!src) return '';
  
  try {
    // First, check if this is one of the large images that needs optimization
    const optimizedSrc = getOptimizedImageSrc(src, context);
    if (optimizedSrc !== src) {
      return optimizedSrc; // Use pre-optimized version
    }
    
    // Handle absolute URLs
    if (src.startsWith('http://') || src.startsWith('https://')) {
      return src;
    }
    
    // Handle relative URLs
    if (src.startsWith('/')) {
      return src;
    }
    
    // Handle Lovable uploads
    if (src.includes('lovable-uploads')) {
      return src;
    }
    
    // Default to relative path
    return `/${src}`;
  } catch (error) {
    console.warn('Failed to process image source:', error);
    return src;
  }
};

/**
 * Check if an image is from a remote source
 */
export const isRemoteImage = (src: string): boolean => {
  return src.startsWith('http') && !src.includes('lovable-uploads');
};

/**
 * Check if an image is a local asset
 */
export const isLocalAsset = (src: string): boolean => {
  return !src.startsWith('http') && !src.includes('lovable-uploads');
};

/**
 * Get recommended compression settings for any image
 */
export const getCompressionSettings = (src: string, context: ImageContext = 'content') => {
  // Use context-specific settings from the Vercel optimization settings
  const settings = getOptimizationSettings(context);
  
  // Apply context-specific adjustments for compression
  const contextSettings = {
    hero: { qualityMultiplier: 1.0, targetSize: 200 },
    'blog-cover': { qualityMultiplier: 1.0, targetSize: 150 },
    content: { qualityMultiplier: 1.0, targetSize: 100 },
    thumbnail: { qualityMultiplier: 0.9, targetSize: 50 },
    logo: { qualityMultiplier: 1.0, targetSize: 30 }
  };
  
  const contextSetting = contextSettings[context];
  
  return {
    targetSizeKB: contextSetting.targetSize,
    quality: Math.min(settings.quality * contextSetting.qualityMultiplier, 95),
    width: settings.width
  };
};
