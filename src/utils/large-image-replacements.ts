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
  },
  // New logos from CaseStudiesLogos.tsx
  {
    original: '/lovable-uploads/b7abeb4e-bdb9-4d8f-9c53-bc21d411f2f4.png',
    optimized: '/lovable-uploads/b7abeb4e-bdb9-4d8f-9c53-bc21d411f2f4-optimized.webp',
    context: 'logo',
    maxSizeKB: 30,
    description: 'Wistia client logo'
  },
  {
    original: '/lovable-uploads/916cc6b6-d252-4e1b-9f0b-f0ec0adc4b65.png',
    optimized: '/lovable-uploads/916cc6b6-d252-4e1b-9f0b-f0ec0adc4b65-optimized.webp',
    context: 'logo',
    maxSizeKB: 30,
    description: 'Sunburst client logo'
  },
  {
    original: '/lovable-uploads/fc79525b-e982-48ab-b01c-74d9e772a7c3.png',
    optimized: '/lovable-uploads/fc79525b-e982-48ab-b01c-74d9e772a7c3-optimized.webp',
    context: 'logo',
    maxSizeKB: 30,
    description: 'Dedupely client logo'
  },
  {
    original: '/lovable-uploads/460f4957-eaf6-4f01-b6b1-650d5d14b791.png',
    optimized: '/lovable-uploads/460f4957-eaf6-4f01-b6b1-650d5d14b791-optimized.webp',
    context: 'logo',
    maxSizeKB: 30,
    description: 'HubSpot Solutions Partner logo'
  },
  {
    original: '/lovable-uploads/46ab3133-f50e-42d9-9943-bbb72ac99ac9.png',
    optimized: '/lovable-uploads/46ab3133-f50e-42d9-9943-bbb72ac99ac9-optimized.webp',
    context: 'logo',
    maxSizeKB: 30,
    description: 'HubSpot Sales Software Certified logo'
  },
  {
    original: '/lovable-uploads/7271e9bf-ca3a-442a-8557-fcb724fdbe9f.png',
    optimized: '/lovable-uploads/7271e9bf-ca3a-442a-8557-fcb724fdbe9f-optimized.webp',
    context: 'logo',
    maxSizeKB: 30,
    description: 'HubSpot Academy logo'
  },
  // New blog covers from RelatedPosts.tsx
  {
    original: '/lovable-uploads/501d08c7-58a5-430c-8110-a93ff790b027.png',
    optimized: '/lovable-uploads/501d08c7-58a5-430c-8110-a93ff790b027-optimized.webp',
    context: 'blog-cover',
    maxSizeKB: 150,
    description: 'Blog cover for ICP myth post'
  },
  {
    original: '/lovable-uploads/ff953630-432d-46db-998e-cc20409e46d1.png',
    optimized: '/lovable-uploads/ff953630-432d-46db-998e-cc20409e46d1-optimized.webp',
    context: 'blog-cover',
    maxSizeKB: 150,
    description: 'Blog cover for customer churn post'
  },
  {
    original: '/lovable-uploads/5128a660-4319-43f7-8be9-8dae9c2576e1.png',
    optimized: '/lovable-uploads/5128a660-4319-43f7-8be9-8dae9c2576e1-optimized.webp',
    context: 'blog-cover',
    maxSizeKB: 150,
    description: 'Blog cover for CRM cleanup post'
  },
  {
    original: '/lovable-uploads/2ea19d63-b482-4702-ace9-64b05202fd26.png',
    optimized: '/lovable-uploads/2ea19d63-b482-4702-ace9-64b05202fd26-optimized.webp',
    context: 'blog-cover',
    maxSizeKB: 150,
    description: 'Blog cover for CAC post'
  },
  {
    original: '/lovable-uploads/252fb89b-1bcd-41b0-83eb-ce0f35b6784b.png',
    optimized: '/lovable-uploads/252fb89b-1bcd-41b0-83eb-ce0f35b6784b-optimized.webp',
    context: 'blog-cover',
    maxSizeKB: 150,
    description: 'Blog cover for data enrichment post'
  },
  {
    original: '/lovable-uploads/51575736-affb-4097-ab47-c87b40af3b1b.png',
    optimized: '/lovable-uploads/51575736-affb-4097-ab47-c87b40af3b1b-optimized.webp',
    context: 'blog-cover',
    maxSizeKB: 150,
    description: 'Blog cover for marketing operations post'
  },
    {
    original: '/lovable-uploads/dc1dbbad-be41-4dbb-8dd8-381cc59a869c.png',
    optimized: '/lovable-uploads/dc1dbbad-be41-4dbb-8dd8-381cc59a869c-optimized.webp',
    context: 'blog-cover',
    maxSizeKB: 150,
    description: 'Blog cover for hidden cost of failed hubspot implementations'
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
