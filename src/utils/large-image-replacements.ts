
/**
 * Utilities for handling large image replacements and layout preservation
 */

export type ImageContext = 'hero' | 'blog-cover' | 'thumbnail' | 'content' | 'logo';

const LAYOUT_PRESERVING_IMAGES = [
  'hero-',
  'banner-',
  'header-',
  'main-'
];

const LARGE_IMAGES = [
  'hero-banner',
  'large-background',
  'high-res'
];

export const shouldPreserveLayout = (src: string): boolean => {
  return LAYOUT_PRESERVING_IMAGES.some(prefix => 
    src.toLowerCase().includes(prefix)
  );
};

export const isLargeImage = (src: string): boolean => {
  return LARGE_IMAGES.some(keyword => 
    src.toLowerCase().includes(keyword)
  );
};

export const getOptimizedImageSrc = (src: string, context: ImageContext = 'content'): string => {
  if (!src) return src;
  
  // For Unsplash images
  if (src.includes('unsplash.com')) {
    const url = new URL(src);
    const contextSettings = getOptimizationSettings(src, context);
    url.searchParams.set('w', contextSettings.maxWidth.toString());
    url.searchParams.set('q', Math.round(contextSettings.quality * 100).toString());
    url.searchParams.set('fm', 'webp');
    return url.toString();
  }
  
  // For Lovable uploads
  if (src.includes('lovable-uploads')) {
    const separator = src.includes('?') ? '&' : '?';
    const contextSettings = getOptimizationSettings(src, context);
    const params = [];
    params.push(`w=${contextSettings.maxWidth}`);
    params.push(`q=${Math.round(contextSettings.quality * 100)}`);
    params.push('fm=webp');
    return `${src}${separator}${params.join('&')}`;
  }
  
  return src;
};

export const getOptimizationSettings = (src: string, context: ImageContext = 'content') => {
  const baseSettings = {
    hero: { maxWidth: 1920, quality: 0.85, maxSizeKB: 500 },
    'blog-cover': { maxWidth: 1200, quality: 0.80, maxSizeKB: 300 },
    thumbnail: { maxWidth: 400, quality: 0.75, maxSizeKB: 100 },
    content: { maxWidth: 800, quality: 0.80, maxSizeKB: 200 },
    logo: { maxWidth: 200, quality: 1.0, maxSizeKB: 50 }
  };
  
  return baseSettings[context] || baseSettings.content;
};
