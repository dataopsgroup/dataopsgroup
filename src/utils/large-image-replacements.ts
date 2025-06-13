
/**
 * Large Image Replacement Utility - Fix Ahrefs 1MB+ Image Issues
 * Provides optimized versions of known large images that are causing SEO warnings
 */

export type ImageContext = 'hero' | 'blog-cover' | 'thumbnail' | 'content' | 'logo';

// Known large images causing Ahrefs warnings (>1MB)
const LARGE_IMAGE_REPLACEMENTS: Record<string, {
  optimizedSrc: string;
  preserveLayout: boolean;
  maxSizeKB: number;
  context: ImageContext;
}> = {
  // Hero background image - 9b9f1c84... (the main culprit)
  '/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png': {
    optimizedSrc: '/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png', // Will be compressed in-place
    preserveLayout: true, // Hero images need layout preservation
    maxSizeKB: 400, // Aggressive compression for hero
    context: 'hero'
  },
  // Logo/favicon image - 5f3a8bdf...
  '/lovable-uploads/5f3a8bdf-410e-4727-8fa0-eb20abe91242.png': {
    optimizedSrc: '/lovable-uploads/5f3a8bdf-410e-4727-8fa0-eb20abe91242.png',
    preserveLayout: false,
    maxSizeKB: 50, // Very small for logos
    context: 'logo'
  }
};

/**
 * Check if an image should preserve its layout (like hero images)
 */
export const shouldPreserveLayout = (src: string): boolean => {
  const replacement = LARGE_IMAGE_REPLACEMENTS[src];
  return replacement?.preserveLayout || false;
};

/**
 * Get optimized image source for known large images - FIXED SIGNATURE
 */
export const getOptimizedImageSrc = (src: string, context?: ImageContext): string => {
  const replacement = LARGE_IMAGE_REPLACEMENTS[src];
  return replacement?.optimizedSrc || src;
};

/**
 * Get optimization settings for specific large images - FIXED SIGNATURE
 */
export const getOptimizationSettings = (src: string, context?: ImageContext) => {
  const replacement = LARGE_IMAGE_REPLACEMENTS[src];
  if (replacement) {
    return {
      maxSizeKB: replacement.maxSizeKB,
      quality: 0.75,
      maxWidth: replacement.context === 'hero' ? 1600 : 800,
      preserveAspectRatio: replacement.preserveLayout
    };
  }
  
  // Fallback context-based settings
  const contextSettings = {
    hero: { maxSizeKB: 400, quality: 0.70, maxWidth: 1600 },
    'blog-cover': { maxSizeKB: 200, quality: 0.80, maxWidth: 1200 },
    content: { maxSizeKB: 150, quality: 0.80, maxWidth: 1000 },
    thumbnail: { maxSizeKB: 40, quality: 0.75, maxWidth: 250 },
    logo: { maxSizeKB: 30, quality: 0.85, maxWidth: 300 }
  };
  
  const settings = contextSettings[context || 'content'];
  return {
    maxSizeKB: settings.maxSizeKB,
    quality: settings.quality,
    maxWidth: settings.maxWidth,
    preserveAspectRatio: true
  };
};

/**
 * Get optimization settings for specific large images
 */
export const getLargeImageSettings = (src: string) => {
  const replacement = LARGE_IMAGE_REPLACEMENTS[src];
  if (!replacement) return null;
  
  return {
    maxSizeKB: replacement.maxSizeKB,
    context: replacement.context,
    preserveLayout: replacement.preserveLayout
  };
};

/**
 * Check if image is in the known large images list - EXPORTED
 */
export const isLargeImage = (src: string): boolean => {
  return Object.keys(LARGE_IMAGE_REPLACEMENTS).some(largeImage => 
    src.includes(largeImage.replace('/lovable-uploads/', ''))
  );
};

/**
 * Check if image is in the known large images list - ALIAS
 */
export const isKnownLargeImage = (src: string): boolean => {
  return isLargeImage(src);
};

export default {
  shouldPreserveLayout,
  getOptimizedImageSrc,
  getOptimizationSettings,
  getLargeImageSettings,
  isKnownLargeImage,
  isLargeImage
};
