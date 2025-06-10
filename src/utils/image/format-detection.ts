
/**
 * Image format detection and optimization utilities
 */

const formatSupportCache = new Map<string, boolean>();

/**
 * Enhanced modern format support detection with caching
 */
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
 * Safe image format detection
 */
export const getImageFormat = (src: string): string => {
  if (!src) return '';
  
  try {
    const extension = src.split('.').pop()?.toLowerCase() || '';
    return extension === 'jpg' ? 'jpeg' : extension;
  } catch (error) {
    console.warn('Failed to detect image format:', error);
    return '';
  }
};
