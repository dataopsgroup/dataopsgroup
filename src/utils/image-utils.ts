
/**
 * Enhanced utility functions for image optimization and loading
 * Supports modern formats, responsive images, and performance monitoring
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
 * Enhanced srcset generation with intelligent breakpoint selection
 */
export const generateSrcSet = (src: string, widths: number[] = [640, 768, 1024, 1280, 1536]): string => {
  if (!src || src.startsWith('data:') || src.startsWith('blob:')) {
    return '';
  }
  
  // Enhanced srcset generation for Lovable uploads and other supported sources
  if (src.includes('lovable-uploads') || src.includes('unsplash.com')) {
    return widths
      .map(width => {
        if (src.includes('unsplash.com')) {
          // Unsplash supports dynamic resizing
          const unsplashParams = `?w=${width}&q=85&fm=auto&fit=crop`;
          return `${src}${unsplashParams} ${width}w`;
        } else {
          // For Lovable uploads, use width parameter
          const separator = src.includes('?') ? '&' : '?';
          return `${src}${separator}w=${width}&q=85 ${width}w`;
        }
      })
      .join(', ');
  }
  
  return '';
};

/**
 * Check if the browser supports modern image formats (cached results)
 */
const formatSupport = new Map<string, boolean>();

export const supportsImageFormat = async (format: 'webp' | 'avif'): Promise<boolean> => {
  if (typeof document === 'undefined') return false;
  
  // Return cached result if available
  if (formatSupport.has(format)) {
    return formatSupport.get(format)!;
  }
  
  const testImages = {
    webp: 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=',
    avif: 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A='
  };
  
  const img = document.createElement('img');
  
  return new Promise(resolve => {
    const timeout = setTimeout(() => {
      formatSupport.set(format, false);
      resolve(false);
    }, 500); // 500ms timeout
    
    img.onload = () => {
      clearTimeout(timeout);
      const result = img.width > 0 && img.height > 0;
      formatSupport.set(format, result);
      resolve(result);
    };
    
    img.onerror = () => {
      clearTimeout(timeout);
      formatSupport.set(format, false);
      resolve(false);
    };
    
    img.src = testImages[format];
  });
};

/**
 * Get optimal image format based on browser support (with caching)
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

/**
 * Calculate optimal sizes attribute based on component usage
 */
export const calculateSizes = (
  componentType: 'hero' | 'card' | 'thumbnail' | 'full-width' = 'full-width'
): string => {
  const sizesMaps = {
    hero: '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px',
    card: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px',
    thumbnail: '(max-width: 768px) 25vw, 150px',
    'full-width': '100vw'
  };
  
  return sizesMaps[componentType];
};

/**
 * Preload critical images for better LCP
 */
export const preloadCriticalImage = (src: string, formats: string[] = ['avif', 'webp']) => {
  if (typeof document === 'undefined') return;
  
  // Preload modern formats first
  formats.forEach(format => {
    const modernSrc = src.replace(/\.(jpg|jpeg|png)$/i, `.${format}`);
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = modernSrc;
    link.type = `image/${format}`;
    link.setAttribute('fetchpriority', 'high');
    document.head.appendChild(link);
  });
  
  // Also preload original format as fallback
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  link.setAttribute('fetchpriority', 'high');
  document.head.appendChild(link);
};
