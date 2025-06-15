
/**
 * Large image optimization utilities
 */

export interface OptimizationSettings {
  maxSizeKB: number;
  quality: number;
  maxWidth: number;
  format?: 'webp' | 'jpeg' | 'png';
  preserveAspectRatio?: boolean;
}

export interface OptimizationResult {
  success: boolean;
  optimizedUrl: string;
  compressionRatio: number;
  error?: string;
}

/**
 * Check if an image should be optimized
 */
export const shouldOptimizeImage = (src: string): boolean => {
  // Check for large file indicators
  return src.includes('large') || src.includes('4k') || src.includes('full-size');
};

/**
 * Get optimization settings for context
 */
export const getOptimizationSettings = (context: string): OptimizationSettings => {
  const settings = {
    hero: { maxSizeKB: 500, quality: 0.85, maxWidth: 1200 },
    'blog-cover': { maxSizeKB: 300, quality: 0.8, maxWidth: 800 },
    content: { maxSizeKB: 200, quality: 0.8, maxWidth: 600 },
    thumbnail: { maxSizeKB: 100, quality: 0.75, maxWidth: 300 },
    logo: { maxSizeKB: 50, quality: 0.9, maxWidth: 200 }
  };
  
  return settings[context as keyof typeof settings] || settings.content;
};

/**
 * Optimize a large image
 */
export const optimizeLargeImage = async (src: string, settings: OptimizationSettings): Promise<OptimizationResult> => {
  try {
    // For now, return the original image
    // This would be where actual optimization logic goes
    return {
      success: true,
      optimizedUrl: src,
      compressionRatio: 0
    };
  } catch (error) {
    return {
      success: false,
      optimizedUrl: src,
      compressionRatio: 0,
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
};

/**
 * Check if an image is a known large image
 */
export const isKnownLargeImage = (src: string): boolean => {
  const knownLargeImages = [
    '/lovable-uploads/5f3a8bdf-410e-4727-8fa0-eb20abe91242.png',
    '/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png'
  ];
  
  return knownLargeImages.includes(src);
};

/**
 * Get settings for known large images
 */
export const getLargeImageSettings = (src: string) => {
  const imageSettings = {
    '/lovable-uploads/5f3a8bdf-410e-4727-8fa0-eb20abe91242.png': {
      maxSizeKB: 400,
      context: 'hero' as const
    },
    '/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png': {
      maxSizeKB: 400,
      context: 'hero' as const
    }
  };
  
  return imageSettings[src as keyof typeof imageSettings] || null;
};
