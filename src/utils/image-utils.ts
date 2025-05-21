
/**
 * Utility functions for image optimization and loading
 * Combined from both OptimizedImage and ProgressiveImage implementations
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

/**
 * Generate srcset strings for responsive images
 */
export const generateSrcSet = (src: string, widths: number[] = [640, 768, 1024, 1280, 1536]): string => {
  if (!src || src.startsWith('data:') || src.startsWith('blob:')) {
    return '';
  }
  
  // Only generate srcset for images that support it
  if (src.includes('lovable-uploads')) {
    // For demonstration - in real implementation this would generate proper srcset
    return widths
      .map(width => `${src}?w=${width} ${width}w`)
      .join(', ');
  }
  
  return '';
};

/**
 * Check if the browser supports modern image formats
 */
export const supportsImageFormat = async (format: 'webp' | 'avif'): Promise<boolean> => {
  if (typeof document === 'undefined') return false;
  
  if (format === 'webp') {
    const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
    const img = document.createElement('img');
    
    return new Promise(resolve => {
      img.onload = () => {
        const result = img.width > 0 && img.height > 0;
        resolve(result);
      };
      img.onerror = () => {
        resolve(false);
      };
      img.src = webpData;
    });
  }
  
  if (format === 'avif') {
    const avifData = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=';
    const img = document.createElement('img');
    
    return new Promise(resolve => {
      img.onload = () => {
        const result = img.width > 0 && img.height > 0;
        resolve(result);
      };
      img.onerror = () => {
        resolve(false);
      };
      img.src = avifData;
    });
  }
  
  return false;
};

/**
 * Get optimal image format based on browser support
 */
export const getOptimalFormat = async (): Promise<'avif' | 'webp' | 'jpg'> => {
  try {
    if (await supportsImageFormat('avif')) return 'avif';
    if (await supportsImageFormat('webp')) return 'webp';
  } catch (e) {
    console.error('Error checking image format support:', e);
  }
  return 'jpg';
};
