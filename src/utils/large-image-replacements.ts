
/**
 * Mapping and optimization for large images identified by Ahrefs
 */

// Shared context type for consistent usage across the application
export type ImageContext = 'hero' | 'content' | 'background' | 'thumbnail' | 'blog-cover' | 'logo';

interface LargeImageMapping {
  original: string;
  optimizedVersions: {
    webp: string;
    jpeg: string;
    thumbnail: string;
  };
  context: ImageContext;
  targetSizeKB: number;
}

// Map of the large images that need optimization
export const LARGE_IMAGE_REPLACEMENTS: Record<string, LargeImageMapping> = {
  // Original large images from previous audit
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
  },
  // Newly identified large images that need optimization
  '/lovable-uploads/fad4c033-af6a-4840-9e6a-85a5f451e089.png': {
    original: '/lovable-uploads/fad4c033-af6a-4840-9e6a-85a5f451e089.png',
    optimizedVersions: {
      webp: '/lovable-uploads/fad4c033-af6a-4840-9e6a-85a5f451e089.webp',
      jpeg: '/lovable-uploads/fad4c033-af6a-4840-9e6a-85a5f451e089.jpg',
      thumbnail: '/lovable-uploads/fad4c033-af6a-4840-9e6a-85a5f451e089-thumb.webp'
    },
    context: 'blog-cover',
    targetSizeKB: 200
  },
  '/lovable-uploads/434400a1-30b5-4562-ae95-9a7ef18306ee.png': {
    original: '/lovable-uploads/434400a1-30b5-4562-ae95-9a7ef18306ee.png',
    optimizedVersions: {
      webp: '/lovable-uploads/434400a1-30b5-4562-ae95-9a7ef18306ee.webp',
      jpeg: '/lovable-uploads/434400a1-30b5-4562-ae95-9a7ef18306ee.jpg',
      thumbnail: '/lovable-uploads/434400a1-30b5-4562-ae95-9a7ef18306ee-thumb.webp'
    },
    context: 'content',
    targetSizeKB: 200
  },
  '/lovable-uploads/65e362f2-ce0e-48c8-8aed-c567255b52ba.png': {
    original: '/lovable-uploads/65e362f2-ce0e-48c8-8aed-c567255b52ba.png',
    optimizedVersions: {
      webp: '/lovable-uploads/65e362f2-ce0e-48c8-8aed-c567255b52ba.webp',
      jpeg: '/lovable-uploads/65e362f2-ce0e-48c8-8aed-c567255b52ba.jpg',
      thumbnail: '/lovable-uploads/65e362f2-ce0e-48c8-8aed-c567255b52ba-thumb.webp'
    },
    context: 'content',
    targetSizeKB: 200
  }
};

/**
 * Get optimized version of a large image
 */
export const getOptimizedImageSrc = (
  originalSrc: string,
  context: ImageContext = 'content'
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
    case 'background':
      return mapping.optimizedVersions.webp;
    case 'blog-cover':
      return mapping.optimizedVersions.webp;
    case 'logo':
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
