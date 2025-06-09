
/**
 * Mapping and optimization for large images identified by Ahrefs
 */

interface LargeImageMapping {
  original: string;
  optimizedVersions: {
    webp: string;
    jpeg: string;
    thumbnail: string;
  };
  context: 'hero' | 'content' | 'background' | 'thumbnail';
  targetSizeKB: number;
}

// Map of the 8 large images that need optimization
export const LARGE_IMAGE_REPLACEMENTS: Record<string, LargeImageMapping> = {
  // These are the specific large images from Ahrefs report
  '/lovable-uploads/df195f9f-0886-488a-bdb0-c0db162335a7.png': {
    original: '/lovable-uploads/df195f9f-0886-488a-bdb0-c0db162335a7.png',
    optimizedVersions: {
      webp: '/lovable-uploads/df195f9f-0886-488a-bdb0-c0db162335a7.webp',
      jpeg: '/lovable-uploads/df195f9f-0886-488a-bdb0-c0db162335a7.jpg',
      thumbnail: '/lovable-uploads/df195f9f-0886-488a-bdb0-c0db162335a7-thumb.webp'
    },
    context: 'hero',
    targetSizeKB: 150
  },
  '/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png': {
    original: '/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png',
    optimizedVersions: {
      webp: '/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.webp',
      jpeg: '/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.jpg',
      thumbnail: '/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf-thumb.webp'
    },
    context: 'hero',
    targetSizeKB: 150
  }
  // Add more mappings as needed for the other 6 large images
};

/**
 * Get optimized version of a large image
 */
export const getOptimizedImageSrc = (
  originalSrc: string,
  context: 'hero' | 'thumbnail' | 'content' | 'background' = 'content'
): string => {
  const mapping = LARGE_IMAGE_REPLACEMENTS[originalSrc];
  
  if (!mapping) {
    return originalSrc; // Return original if no mapping exists
  }
  
  // Choose appropriate version based on context
  switch (context) {
    case 'thumbnail':
      return mapping.optimizedVersions.thumbnail;
    case 'hero':
      return mapping.optimizedVersions.webp;
    case 'background':
      return mapping.optimizedVersions.webp;
    case 'content':
    default:
      return mapping.optimizedVersions.jpeg;
  }
};

/**
 * Check if an image is one of the large images that needs optimization
 */
export const isLargeImage = (src: string): boolean => {
  return src in LARGE_IMAGE_REPLACEMENTS;
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
    quality: mapping.context === 'hero' ? 0.9 : 0.85,
    maxWidth: mapping.context === 'hero' ? 1920 : mapping.context === 'thumbnail' ? 400 : 1280
  };
};
