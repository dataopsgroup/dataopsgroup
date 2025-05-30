
/**
 * Enhanced utility functions for balanced image optimization across all devices
 * Implements intelligent responsive images and consistent modern format support
 */

/**
 * Enhanced srcset generation with intelligent quality and format selection
 */
export const generateSrcSet = (src: string, widths: number[] = [480, 640, 768, 1024, 1280, 1536, 1920], quality: number = 85): string => {
  if (!src || src.startsWith('data:') || src.startsWith('blob:')) {
    return '';
  }
  
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
  
  return '';
};

/**
 * Enhanced modern format support detection with caching
 */
const formatSupportCache = new Map<string, boolean>();

export const supportsImageFormat = async (format: 'webp' | 'avif'): Promise<boolean> => {
  if (typeof document === 'undefined') return false;
  
  // Return cached result for better performance
  if (formatSupportCache.has(format)) {
    return formatSupportCache.get(format)!;
  }
  
  const testImages = {
    webp: 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=',
    avif: 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A='
  };
  
  return new Promise(resolve => {
    const img = document.createElement('img');
    const timeout = setTimeout(() => {
      formatSupportCache.set(format, false);
      resolve(false);
    }, 1000);
    
    img.onload = () => {
      clearTimeout(timeout);
      const result = img.width > 0 && img.height > 0;
      formatSupportCache.set(format, result);
      resolve(result);
    };
    
    img.onerror = () => {
      clearTimeout(timeout);
      formatSupportCache.set(format, false);
      resolve(false);
    };
    
    img.src = testImages[format];
  });
};

/**
 * Enhanced optimal image format detection with progressive enhancement
 */
export const getOptimalFormat = async (): Promise<'avif' | 'webp' | 'jpg'> => {
  try {
    // Progressive format detection for best compression
    if (await supportsImageFormat('avif')) return 'avif';
    if (await supportsImageFormat('webp')) return 'webp';
  } catch (e) {
    console.error('Error checking image format support:', e);
  }
  return 'jpg';
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

/**
 * Enhanced LCP reporting with detailed metrics
 */
export const reportLCPMetric = (src: string): void => {
  if (!window.performance || !('mark' in window.performance)) return;
  
  try {
    const markName = `lcp-image-loaded-${Date.now()}`;
    window.performance.mark(markName);
    
    if ('getEntriesByName' in window.performance && 'measure' in window.performance) {
      const measureName = `lcp-image-duration-${Date.now()}`;
      window.performance.measure(measureName, 'navigationStart', markName);
      
      const lcpMetric = window.performance.getEntriesByName(measureName)[0];
      
      if (lcpMetric && window.gtag) {
        window.gtag('event', 'web_vitals', {
          metric_name: 'LCP',
          metric_value: Math.round(lcpMetric.duration),
          metric_delta: 0,
          metric_id: `img-${src.split('/').pop()}`,
          image_src: src.substring(0, 100) // Truncate for analytics
        });
      }
    }
  } catch (err) {
    console.error('Error reporting LCP:', err);
  }
};

/**
 * Enhanced critical image preloading with format optimization
 */
export const preloadCriticalImage = async (src: string, formats: string[] = ['avif', 'webp']) => {
  if (typeof document === 'undefined') return;
  
  try {
    // Get optimal format based on browser support
    const optimalFormat = await getOptimalFormat();
    
    // Preload in optimal format first
    if (formats.includes(optimalFormat) && optimalFormat !== 'jpg') {
      const modernSrc = src.replace(/\.(jpg|jpeg|png)$/i, `.${optimalFormat}`);
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = modernSrc;
      link.type = `image/${optimalFormat}`;
      link.setAttribute('fetchpriority', 'high');
      document.head.appendChild(link);
    }
    
    // Also preload original format as fallback
    const fallbackLink = document.createElement('link');
    fallbackLink.rel = 'preload';
    fallbackLink.as = 'image';
    fallbackLink.href = src;
    fallbackLink.setAttribute('fetchpriority', optimalFormat === 'jpg' ? 'high' : 'low');
    document.head.appendChild(fallbackLink);
    
  } catch (error) {
    console.warn('Failed to preload critical image:', error);
    
    // Fallback to basic preloading
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    link.setAttribute('fetchpriority', 'high');
    document.head.appendChild(link);
  }
};

/**
 * Enhanced image quality optimization based on context
 */
export const getOptimalQuality = (
  imageType: 'photo' | 'illustration' | 'icon' | 'logo' = 'photo',
  isRetina: boolean = false
): number => {
  const qualityMap = {
    photo: isRetina ? 75 : 85,
    illustration: isRetina ? 80 : 90,
    icon: 95,
    logo: 95
  };
  
  return qualityMap[imageType];
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

/**
 * Get versioned image source for cache control
 */
export const getImageSrc = (src: string): string => {
  if (isLocalAsset(src) && typeof window !== 'undefined' && window.APP_VERSION) {
    return `${src}?v=${window.APP_VERSION}`;
  }
  return src;
};
