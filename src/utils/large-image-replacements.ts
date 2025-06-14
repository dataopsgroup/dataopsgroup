
/**
 * Large image replacement mappings for performance optimization
 * Maps large images to optimized versions to improve Core Web Vitals
 */

export type ImageContext = 'hero' | 'blog-cover' | 'thumbnail' | 'content' | 'logo';

interface LargeImageMapping {
  original: string;
  optimized: string;
  context: ImageContext;
  maxSizeKB: number;
  description: string;
}

// Known large images that need optimization
const LARGE_IMAGE_MAPPINGS: LargeImageMapping[] = [
  {
    original: '/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png',
    optimized: '/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf-optimized.webp',
    context: 'hero',
    maxSizeKB: 400,
    description: 'Hero background image - main performance impact'
  },
  {
    original: '/lovable-uploads/5f3a8bdf-410e-4727-8fa0-eb20abe91242.png',
    optimized: '/lovable-uploads/5f3a8bdf-410e-4727-8fa0-eb20abe91242-optimized.webp',
    context: 'logo',
    maxSizeKB: 50,
    description: 'Logo/favicon - frequently loaded'
  },
  {
    original: '/lovable-uploads/a0bf64ae-3742-4f0e-bf4f-c82371a5bef6.png',
    optimized: '/lovable-uploads/a0bf64ae-3742-4f0e-bf4f-c82371a5bef6-optimized.webp',
    context: 'content',
    maxSizeKB: 150,
    description: 'Content image requiring SEO optimization'
  },
  {
    original: '/lovable-uploads/72e7f6ab-b186-48c5-990f-fa0d94659fc6.png',
    optimized: '/lovable-uploads/72e7f6ab-b186-48c5-990f-fa0d94659fc6-optimized.webp',
    context: 'content',
    maxSizeKB: 150,
    description: 'Content image requiring SEO optimization'
  }
];

// Images that should preserve their exact layout and styling
const LAYOUT_PRESERVING_IMAGES = [
  '/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png' // Hero background
];

/**
 * Check if an image is known to be large and needs optimization
 */
export const isLargeImage = (src: string): boolean => {
  return LARGE_IMAGE_MAPPINGS.some(mapping => 
    src.includes(mapping.original.replace('/lovable-uploads/', ''))
  );
};

/**
 * Check if an image is a known large image based on exact filename match
 */
export const isKnownLargeImage = (src: string): boolean => {
  return LARGE_IMAGE_MAPPINGS.some(mapping => 
    src === mapping.original || src.includes(mapping.original.split('/').pop() || '')
  );
};

/**
 * Get optimized image source for known large images
 */
export const getOptimizedImageSrc = (src: string): string => {
  const mapping = LARGE_IMAGE_MAPPINGS.find(mapping => 
    src.includes(mapping.original.replace('/lovable-uploads/', ''))
  );
  
  return mapping ? mapping.optimized : src;
};

/**
 * Get optimization settings for a specific large image
 */
export const getLargeImageSettings = (src: string) => {
  const mapping = LARGE_IMAGE_MAPPINGS.find(mapping => 
    src.includes(mapping.original.replace('/lovable-uploads/', ''))
  );
  
  return mapping ? {
    maxSizeKB: mapping.maxSizeKB,
    context: mapping.context,
    description: mapping.description
  } : null;
};

/**
 * Get optimization settings based on context
 */
export const getOptimizationSettings = (src: string) => {
  const settings = getLargeImageSettings(src);
  if (settings) {
    return {
      maxSizeKB: settings.maxSizeKB,
      quality: settings.context === 'logo' ? 0.95 : 0.75,
      maxWidth: settings.context === 'hero' ? 1920 : settings.context === 'logo' ? 400 : 1200
    };
  }
  
  // Default settings for unknown images
  return {
    maxSizeKB: 200,
    quality: 0.8,
    maxWidth: 1200
  };
};

/**
 * Check if an image should preserve its layout (like hero backgrounds)
 */
export const shouldPreserveLayout = (src: string): boolean => {
  return LAYOUT_PRESERVING_IMAGES.some(preservedImage => 
    src.includes(preservedImage.replace('/lovable-uploads/', ''))
  );
};

/**
 * Get all large image mappings for optimization
 */
export const getAllLargeImageMappings = (): LargeImageMapping[] => {
  return LARGE_IMAGE_MAPPINGS;
};

export default {
  isLargeImage,
  isKnownLargeImage,
  getOptimizedImageSrc,
  getLargeImageSettings,
  getOptimizationSettings,
  shouldPreserveLayout,
  getAllLargeImageMappings
};
