
/**
 * Utility functions for image optimization and loading
 */

/**
 * Check if an image is from a remote source that could benefit from optimization
 */
export const isRemoteImage = (src: string): boolean => {
  return src.startsWith('http') && !src.includes('lovable-uploads');
};

/**
 * Check if an image is a local asset that should be versioned for cache control
 */
export const isLocalAsset = (src: string): boolean => {
  return !src.startsWith('http') && !src.includes('lovable-uploads');
};

/**
 * Get the appropriate image source with cache busting for local assets if needed
 */
export const getImageSrc = (src: string): string => {
  if (isLocalAsset(src) && typeof window !== 'undefined' && window.APP_VERSION) {
    return `${src}?v=${window.APP_VERSION}`;
  }
  return src;
};

/**
 * Report LCP metrics for important images
 */
export const reportLCPMetric = (src: string): void => {
  if (!window.performance || !('mark' in window.performance)) return;
  
  try {
    window.performance.mark('lcp-image-loaded');
    
    if ('getEntriesByName' in window.performance && 'measure' in window.performance) {
      window.performance.measure('lcp-image-duration', 'navigationStart', 'lcp-image-loaded');
      
      const lcpMetric = window.performance.getEntriesByName('lcp-image-duration')[0];
      
      if (lcpMetric && window.gtag) {
        window.gtag('event', 'web_vitals', {
          metric_name: 'LCP',
          metric_value: Math.round(lcpMetric.duration),
          metric_delta: 0,
          metric_id: `img-${src.split('/').pop()}`
        });
      }
    }
  } catch (err) {
    console.error('Error reporting LCP:', err);
  }
};

