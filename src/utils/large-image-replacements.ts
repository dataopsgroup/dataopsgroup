
/**
 * Mapping and optimization for large images identified by Ahrefs
 */

// Shared context type for consistent usage across the application
export type ImageContext = 'hero' | 'content' | 'background' | 'thumbnail' | 'blog-cover' | 'logo';

interface LargeImageMapping {
  original: string;
  context: ImageContext;
  targetSizeKB: number;
  enableAutoOptimization: boolean; // Use automatic optimization instead of pre-defined files
}

// Map of the large images that need optimization
export const LARGE_IMAGE_REPLACEMENTS: Record<string, LargeImageMapping> = {
  // Hero background image - use automatic optimization
  '/lovable-uploads/df195f9f-0886-488a-bdb0-c0db162335a7.png': {
    original: '/lovable-uploads/df195f9f-0886-488a-bdb0-c0db162335a7.png',
    context: 'hero',
    targetSizeKB: 300,
    enableAutoOptimization: true
  },
  // Logo image - use automatic optimization with logo context
  '/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png': {
    original: '/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png',
    context: 'logo',
    targetSizeKB: 50,
    enableAutoOptimization: true
  },
  // Blog cover images - use automatic optimization
  '/lovable-uploads/fad4c033-af6a-4840-9e6a-85a5f451e089.png': {
    original: '/lovable-uploads/fad4c033-af6a-4840-9e6a-85a5f451e089.png',
    context: 'blog-cover',
    targetSizeKB: 200,
    enableAutoOptimization: true
  },
  '/lovable-uploads/434400a1-30b5-4562-ae95-9a7ef18306ee.png': {
    original: '/lovable-uploads/434400a1-30b5-4562-ae95-9a7ef18306ee.png',
    context: 'content',
    targetSizeKB: 200,
    enableAutoOptimization: true
  },
  '/lovable-uploads/65e362f2-ce0e-48c8-8aed-c567255b52ba.png': {
    original: '/lovable-uploads/65e362f2-ce0e-48c8-8aed-c567255b52ba.png',
    context: 'content',
    targetSizeKB: 200,
    enableAutoOptimization: true
  }
};

/**
 * Get optimized version of a large image - now returns original for auto-optimization
 */
export const getOptimizedImageSrc = (
  originalSrc: string,
  context: ImageContext = 'content'
): string => {
  const mapping = LARGE_IMAGE_REPLACEMENTS[originalSrc];
  
  if (!mapping) {
    return originalSrc; // Return original if no mapping exists
  }
  
  // For auto-optimization, return the original src - the optimization components will handle it
  if (mapping.enableAutoOptimization) {
    return originalSrc;
  }
  
  return originalSrc;
};

/**
 * Check if an image is one of the large images that needs optimization
 */
export const isLargeImage = (src: string): boolean => {
  return src in LARGE_IMAGE_REPLACEMENTS;
};

/**
 * Check if an image should use automatic optimization
 */
export const shouldAutoOptimize = (src: string): boolean => {
  const mapping = LARGE_IMAGE_REPLACEMENTS[src];
  return mapping?.enableAutoOptimization || false;
};

/**
 * Get recommended optimization settings for large images
 */
export const getOptimizationSettings = (src: string) => {
  const mapping = LARGE_IMAGE_REPLACEMENTS[src];
  
  if (!mapping) {
    return {
      maxSizeKB: 100,
      quality: 0.85,
      maxWidth: 1280
    };
  }
  
  return {
    maxSizeKB: mapping.targetSizeKB,
    quality: mapping.context === 'hero' ? 0.9 : mapping.context === 'logo' ? 0.95 : 0.85,
    maxWidth: mapping.context === 'hero' ? 1920 : mapping.context === 'logo' ? 400 : mapping.context === 'thumbnail' ? 400 : 1280
  };
};
