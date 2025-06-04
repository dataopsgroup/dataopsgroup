
/**
 * Image optimization and quality utilities
 */

/**
 * Enhanced image quality optimization based on context
 */
export const getOptimalQuality = (
  imageType: 'photo' | 'illustration' | 'icon' | 'logo' = 'photo',
  isRetina: boolean = false
): number => {
  const baseQuality = {
    photo: 85,
    illustration: 90,
    icon: 100,
    logo: 100
  };
  
  // Reduce quality for retina displays to maintain performance
  return isRetina ? Math.min(baseQuality[imageType] - 10, 85) : baseQuality[imageType];
};

/**
 * Get versioned image source for cache control
 */
export const getImageSrc = (src: string): string => {
  if (!src) return '';
  
  try {
    // Handle absolute URLs
    if (src.startsWith('http://') || src.startsWith('https://')) {
      return src;
    }
    
    // Handle relative URLs
    if (src.startsWith('/')) {
      return src;
    }
    
    // Handle Lovable uploads
    if (src.includes('lovable-uploads')) {
      return src;
    }
    
    // Default to relative path
    return `/${src}`;
  } catch (error) {
    console.warn('Failed to process image source:', error);
    return src;
  }
};

/**
 * Check if an image is from a remote source
 */
export const isRemoteImage = (src: string): boolean => {
  return src.startsWith('http') && !src.includes('lovable-uploads');
};

/**
 * Check if an image is a local asset
 */
export const isLocalAsset = (src: string): boolean => {
  return !src.startsWith('http') && !src.includes('lovable-uploads');
};
