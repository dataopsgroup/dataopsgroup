
/**
 * Configuration for images that should preserve their original layout and sizing
 * These images bypass size constraints to maintain design integrity
 */

export type ImageContext = 'hero' | 'thumbnail' | 'blog-cover' | 'content' | 'logo';

const LAYOUT_PRESERVING_IMAGES = new Set([
  // Hero section images that need to maintain specific layouts
  '/lovable-uploads/5f3a8bdf-410e-4727-8fa0-eb20abe91242.png',
  '/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png',
  // Add other critical layout images here
]);

const LARGE_IMAGES = new Set([
  '/lovable-uploads/5f3a8bdf-410e-4727-8fa0-eb20abe91242.png',
  '/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png',
]);

/**
 * Check if an image should preserve its original layout
 */
export const shouldPreserveLayout = (src: string): boolean => {
  return LAYOUT_PRESERVING_IMAGES.has(src);
};

/**
 * Check if an image is a known large image
 */
export const isLargeImage = (src: string): boolean => {
  return LARGE_IMAGES.has(src);
};

/**
 * Get optimized image source
 */
export const getOptimizedImageSrc = (src: string): string => {
  // For now, return the original source
  // This can be enhanced with actual optimization logic
  return src;
};

/**
 * Get optimization settings for context
 */
export const getOptimizationSettings = (context: ImageContext) => {
  const settings = {
    hero: { maxSizeKB: 500, quality: 0.85, maxWidth: 1200 },
    'blog-cover': { maxSizeKB: 300, quality: 0.8, maxWidth: 800 },
    content: { maxSizeKB: 200, quality: 0.8, maxWidth: 600 },
    thumbnail: { maxSizeKB: 100, quality: 0.75, maxWidth: 300 },
    logo: { maxSizeKB: 50, quality: 0.9, maxWidth: 200 }
  };
  
  return settings[context] || settings.content;
};

/**
 * Add an image to the layout preservation list
 */
export const addLayoutPreservingImage = (src: string): void => {
  LAYOUT_PRESERVING_IMAGES.add(src);
};

/**
 * Remove an image from the layout preservation list
 */
export const removeLayoutPreservingImage = (src: string): void => {
  LAYOUT_PRESERVING_IMAGES.delete(src);
};
