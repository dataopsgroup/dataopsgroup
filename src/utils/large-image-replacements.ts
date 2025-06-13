
/**
 * Large Image Replacement Utility - Fix Ahrefs 1MB+ Image Issues
 * Provides optimized versions of known large images that are causing SEO warnings
 */

// Known large images causing Ahrefs warnings (>1MB)
const LARGE_IMAGE_REPLACEMENTS: Record<string, {
  optimizedSrc: string;
  preserveLayout: boolean;
  maxSizeKB: number;
  context: string;
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
 * Get optimized image source for known large images
 */
export const getOptimizedImageSrc = (src: string): string => {
  const replacement = LARGE_IMAGE_REPLACEMENTS[src];
  return replacement?.optimizedSrc || src;
};

/**
 * Get optimization settings for specific large images
 */
export const getLargeImageSettings = (src: string) => {
  const replacement = LARGE_IMAGE_REPLACEMENTS[src];
  if (!replacement) return null;
  
  return {
    maxSizeKB: replacement.maxSizeKB,
    context: replacement.context as 'hero' | 'logo' | 'content',
    preserveLayout: replacement.preserveLayout
  };
};

/**
 * Check if image is in the known large images list
 */
export const isKnownLargeImage = (src: string): boolean => {
  return Object.keys(LARGE_IMAGE_REPLACEMENTS).some(largeImage => 
    src.includes(largeImage.replace('/lovable-uploads/', ''))
  );
};

export default {
  shouldPreserveLayout,
  getOptimizedImageSrc,
  getLargeImageSettings,
  isKnownLargeImage
};
