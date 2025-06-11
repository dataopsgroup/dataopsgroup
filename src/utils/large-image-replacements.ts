
/**
 * Utilities for handling large image replacements and layout preservation
 */

const LAYOUT_PRESERVING_IMAGES = [
  'hero-',
  'banner-',
  'header-',
  'main-'
];

export const shouldPreserveLayout = (src: string): boolean => {
  return LAYOUT_PRESERVING_IMAGES.some(prefix => 
    src.toLowerCase().includes(prefix)
  );
};

export const getOptimizedImageSrc = (src: string, width?: number, quality?: number): string => {
  if (!src) return src;
  
  // For Unsplash images
  if (src.includes('unsplash.com')) {
    const url = new URL(src);
    if (width) url.searchParams.set('w', width.toString());
    if (quality) url.searchParams.set('q', quality.toString());
    url.searchParams.set('fm', 'webp');
    return url.toString();
  }
  
  // For Lovable uploads
  if (src.includes('lovable-uploads')) {
    const separator = src.includes('?') ? '&' : '?';
    const params = [];
    if (width) params.push(`w=${width}`);
    if (quality) params.push(`q=${quality}`);
    params.push('fm=webp');
    return `${src}${separator}${params.join('&')}`;
  }
  
  return src;
};
