
/**
 * Enhanced image optimization and quality utilities
 */

import { getOptimizedImageSrc, getOptimizationSettings } from '../large-image-replacements';

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
export const getImageSrc = (src: string, context: 'hero' | 'thumbnail' | 'content' = 'content'): string => {
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
export const getCompressionSettings = (src: string, context: 'hero' | 'thumbnail' | 'content' = 'content') => {
  // Use specific settings for known large images
  const settings = getOptimizationSettings(src);
  
  // Apply context-specific adjustments
  const contextMultipliers = {
    hero: { quality: 1.0, maxWidth: 1.5 },
    content: { quality: 1.0, maxWidth: 1.0 },
    thumbnail: { quality: 0.9, maxWidth: 0.3 }
  };
  
  const multiplier = contextMultipliers[context];
  
  return {
    maxSizeKB: settings.maxSizeKB,
    quality: Math.min(settings.quality * multiplier.quality, 0.95),
    maxWidth: Math.round(settings.maxWidth * multiplier.maxWidth)
  };
};
