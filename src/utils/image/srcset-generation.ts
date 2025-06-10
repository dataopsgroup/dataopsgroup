
/**
 * Enhanced srcset generation utilities for responsive images
 */

/**
 * Enhanced srcset generation with intelligent quality and format selection
 */
export const generateSrcSet = (src: string, widths: number[] = [480, 640, 768, 1024, 1280, 1536, 1920], quality: number = 85): string => {
  if (!src || src.startsWith('data:') || src.startsWith('blob:')) {
    return '';
  }
  
  try {
    // Enhanced srcset for different image sources
    if (src.includes('lovable-uploads') || src.includes('unsplash.com') || src.includes('images.unsplash.com')) {
      return widths
        .map(width => {
          if (src.includes('unsplash.com') || src.includes('images.unsplash.com')) {
            // Optimized Unsplash parameters for balanced performance
            const params = new URLSearchParams({
              w: width.toString(),
              q: quality.toString(),
              fm: 'auto',
              fit: 'crop',
              auto: 'format'
            });
            const baseUrl = src.split('?')[0];
            return `${baseUrl}?${params.toString()} ${width}w`;
          } else {
            // Enhanced Lovable uploads with quality optimization
            const separator = src.includes('?') ? '&' : '?';
            return `${src}${separator}w=${width}&q=${quality}&fm=auto ${width}w`;
          }
        })
        .join(', ');
    }
    
    // Handle local images safely
    if (src.startsWith('/')) {
      return widths
        .map(width => `${src}?w=${width}&q=${quality} ${width}w`)
        .join(', ');
    }
    
    return '';
  } catch (error) {
    console.warn('Failed to generate srcSet:', error);
    return '';
  }
};

/**
 * Enhanced intelligent sizes calculation based on component context
 */
export const calculateOptimalSizes = (
  componentType: 'hero' | 'card' | 'thumbnail' | 'full-width' | 'sidebar' = 'full-width',
  customBreakpoints?: { [key: string]: string }
): string => {
  const defaultSizesMaps = {
    hero: '(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px',
    card: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px',
    thumbnail: '(max-width: 640px) 30vw, (max-width: 1024px) 20vw, 150px',
    sidebar: '(max-width: 1024px) 100vw, 300px',
    'full-width': '100vw'
  };
  
  // Allow custom breakpoints to override defaults
  if (customBreakpoints && customBreakpoints[componentType]) {
    return customBreakpoints[componentType];
  }
  
  return defaultSizesMaps[componentType];
};
