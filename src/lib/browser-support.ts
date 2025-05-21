
/**
 * Utility for detecting browser capabilities and optimizing accordingly
 */

// Cache support checks to avoid repeated computation
const supportCache: Record<string, boolean> = {};

/**
 * Check if the browser supports a specific feature
 */
export const supports = (feature: string): boolean => {
  // Return cached result if available
  if (supportCache[feature] !== undefined) {
    return supportCache[feature];
  }
  
  // Server-side rendering check
  if (typeof window === 'undefined') {
    return false;
  }
  
  let isSupported = false;
  
  switch (feature) {
    case 'webp':
      // WebP support detection
      try {
        isSupported = document.createElement('canvas')
          .toDataURL('image/webp')
          .indexOf('data:image/webp') === 0;
      } catch (e) {
        isSupported = false;
      }
      break;
      
    case 'avif':
      // AVIF support can't be reliably detected synchronously
      isSupported = false; // Default to false, async check will update later
      detectAvifSupport().then(supported => {
        supportCache['avif'] = supported;
      });
      break;
      
    case 'webgl':
      // WebGL support detection
      try {
        const canvas = document.createElement('canvas');
        isSupported = !!(
          window.WebGLRenderingContext && 
          (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
        );
      } catch (e) {
        isSupported = false;
      }
      break;
      
    case 'webgl2':
      // WebGL 2 support detection
      try {
        const canvas = document.createElement('canvas');
        isSupported = !!(window.WebGL2RenderingContext && canvas.getContext('webgl2'));
      } catch (e) {
        isSupported = false;
      }
      break;
      
    case 'lazyload':
      // Native lazy loading support
      isSupported = 'loading' in HTMLImageElement.prototype;
      break;
      
    case 'intersectionObserver':
      // Intersection Observer API support
      isSupported = 'IntersectionObserver' in window;
      break;
      
    case 'es6':
      // ES6 support detection (approximate)
      try {
        // Test for basic ES6 features
        new Function('() => {}')();
        isSupported = true;
      } catch (e) {
        isSupported = false;
      }
      break;
      
    case 'css-grid':
      // CSS Grid support detection
      isSupported = window.CSS && CSS.supports && CSS.supports('display', 'grid');
      break;
      
    default:
      isSupported = false;
  }
  
  // Cache the result
  supportCache[feature] = isSupported;
  return isSupported;
};

// Asynchronously detect AVIF support
async function detectAvifSupport(): Promise<boolean> {
  if (typeof window === 'undefined' || !window.createImageBitmap) {
    return false;
  }
  
  const avifData = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=';
  
  try {
    const response = await fetch(avifData);
    const blob = await response.blob();
    await createImageBitmap(blob);
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Get the optimal image format for the current browser
 */
export const getOptimalImageFormat = (): 'avif' | 'webp' | 'jpg' => {
  if (supports('avif')) return 'avif';
  if (supports('webp')) return 'webp';
  return 'jpg';
};

/**
 * Optimize image loading based on browser capabilities
 */
export const getImageLoadingStrategy = (isImportant: boolean): 'eager' | 'lazy' => {
  if (isImportant) return 'eager';
  return supports('lazyload') ? 'lazy' : 'eager';
};

/**
 * Get a browser capability score (0-100) for analytics
 */
export const getBrowserCapabilityScore = (): number => {
  let score = 0;
  const features = ['webp', 'lazyload', 'intersectionObserver', 'es6', 'css-grid'];
  
  for (const feature of features) {
    if (supports(feature)) {
      score += 20; // Each feature is worth 20 points
    }
  }
  
  return score;
};

/**
 * Check if this is a modern browser capable of all optimizations
 */
export const isModernBrowser = (): boolean => {
  return getBrowserCapabilityScore() >= 80; // At least 4 of 5 features
};

/**
 * Get device capability for optimizing resource loading
 */
export const getDeviceCapability = (): 'high' | 'medium' | 'low' => {
  // Check for low-end device indicators
  const isLowEnd = 
    navigator.hardwareConcurrency <= 2 || 
    (navigator as any).deviceMemory <= 2;
  
  if (isLowEnd) return 'low';
  
  // Check for high-end device
  const isHighEnd = 
    navigator.hardwareConcurrency >= 6 || 
    (navigator as any).deviceMemory >= 8;
  
  if (isHighEnd) return 'high';
  
  // Default to medium
  return 'medium';
};
