/**
 * Configuration for images that should preserve their original layout and sizing
 * Enhanced with Vercel optimization for large images
 */

import { vercelImageOptimizer } from '@/services/imageOptimizationService';

export type ImageContext = 'hero' | 'thumbnail' | 'blog-cover' | 'content' | 'logo';

const LAYOUT_PRESERVING_IMAGES = new Set([
  // Hero section images that need to maintain specific layouts
  '/lovable-uploads/5f3a8bdf-410e-4727-8fa0-eb20abe91242.png',
  '/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png',
]);

// Updated to use WebP versions for optimized images
const LARGE_IMAGES = new Set([
  // Converted to WebP - blog cover images
  '/lovable-uploads/252fb89b-1bcd-41b0-83eb-ce0f35b6784b.webp',
  '/lovable-uploads/69c5133c-e0a9-434d-9801-3496863a09d1.webp', 
  '/lovable-uploads/66cb018a-41fa-4046-a81f-5c632b199583.webp',
  // Original hero images (kept as PNG for layout preservation)
  '/lovable-uploads/5f3a8bdf-410e-4727-8fa0-eb20abe91242.png',
  '/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png',
  // Other optimized images
  '/lovable-uploads/032775c3-24cb-46f6-af01-decc4e9fb38e.png',
  '/lovable-uploads/07c7808f-3f42-4878-9945-9a0ef4b7e0e4.png',
  '/lovable-uploads/0b2e6693-839e-467e-8bea-d2458aa3e21f.png',
  '/lovable-uploads/0f49143a-7600-4926-8433-8f23c88cefa4.png',
  '/lovable-uploads/124706e5-20d8-43a1-92a0-d4d65389187b.png',
  '/lovable-uploads/1253bf24-1a66-4b00-8820-9eef25ca0db1.png',
  '/lovable-uploads/12e641ec-9075-4921-80ad-5c42ee2a35de.png',
  '/lovable-uploads/1e7d023c-3afe-475d-9c49-0d57ecb025d9.png',
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
  return LARGE_IMAGES.has(src) || vercelImageOptimizer.shouldOptimize(src);
};

/**
 * Get optimized image source using Vercel optimization
 */
export const getOptimizedImageSrc = (src: string, context: ImageContext = 'content'): string => {
  if (!src || !isLargeImage(src)) {
    return src;
  }

  try {
    const settings = vercelImageOptimizer.getOptimizationSettings(context);
    const result = vercelImageOptimizer.optimizeImage(src, settings);
    
    console.log(`🖼️ Optimized ${src} with Vercel (estimated ${result.compressionRatio}% reduction)`);
    return result.optimizedUrl;
  } catch (error) {
    console.warn('Failed to optimize image with Vercel:', error);
    return src; // Fallback to original
  }
};

/**
 * Get optimization settings for context
 */
export const getOptimizationSettings = (context: ImageContext) => {
  return vercelImageOptimizer.getOptimizationSettings(context);
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

/**
 * Add an image to the large images list for optimization
 */
export const addLargeImage = (src: string): void => {
  LARGE_IMAGES.add(src);
};

/**
 * Generate responsive image variants using Vercel optimization
 */
export const getResponsiveImageVariants = (src: string): { [key: string]: string } => {
  if (!isLargeImage(src)) {
    return { '1x': src };
  }

  return vercelImageOptimizer.generateResponsiveVariants(src);
};
