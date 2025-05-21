
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Efficient class name merging utility
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Cached version of mobile device detection
let isMobileResult: boolean | null = null;
export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false
  
  if (isMobileResult === null) {
    isMobileResult = window.innerWidth < 768 || 
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  }
  
  return isMobileResult
}

// Memoized tap size enforcement
const processedElements = new WeakSet();
export function ensureMinTapSize(element: HTMLElement | null, size = 44): void {
  if (!element || processedElements.has(element)) return
  
  const rect = element.getBoundingClientRect()
  if (rect.width < size) {
    element.style.minWidth = `${size}px`
  }
  if (rect.height < size) {
    element.style.minHeight = `${size}px`
  }
  
  processedElements.add(element)
}

// Image optimization with caching
const optimizedImageCache = new Map<string, string>();
export function getOptimizedImageUrl(
  src: string, 
  options?: { 
    width?: number, 
    height?: number,
    quality?: number,
    format?: 'webp' | 'avif' | 'jpg' | 'png' 
  }
): string {
  if (!src) return ''
  
  // Return cached result if available
  const cacheKey = `${src}-${JSON.stringify(options || {})}`;
  if (optimizedImageCache.has(cacheKey)) {
    return optimizedImageCache.get(cacheKey)!;
  }
  
  // If it's already using an optimized service, return as is
  if (src.includes('imagecdn') || src.includes('imagekit') || src.includes('cloudinary')) {
    optimizedImageCache.set(cacheKey, src);
    return src;
  }
  
  const { width, height, quality = 85, format } = options || {};
  
  // For local images, append parameters
  if (src.startsWith('/')) {
    let optimizedUrl = src;
    const params = new URLSearchParams();
    
    if (width) params.append('w', width.toString());
    if (height) params.append('h', height.toString());
    if (quality) params.append('q', quality.toString());
    if (format) params.append('fmt', format);
    
    const paramsString = params.toString();
    if (paramsString) {
      optimizedUrl += `?${paramsString}`;
    }
    
    optimizedImageCache.set(cacheKey, optimizedUrl);
    return optimizedUrl;
  }
  
  optimizedImageCache.set(cacheKey, src);
  return src;
}

// Cached format support detection
let webpSupport: Promise<boolean> | null = null;
export function supportsWebP(): Promise<boolean> {
  if (webpSupport) return webpSupport;
  
  webpSupport = new Promise<boolean>((resolve) => {
    if (!self.createImageBitmap) {
      resolve(false);
      return;
    }
    
    const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
    fetch(webpData)
      .then(r => r.blob())
      .then(createImageBitmap)
      .then(() => resolve(true))
      .catch(() => resolve(false));
  });
  
  return webpSupport;
}

// Cached AVIF support detection
let avifSupport: Promise<boolean> | null = null;
export function supportsAVIF(): Promise<boolean> {
  if (avifSupport) return avifSupport;
  
  avifSupport = new Promise<boolean>((resolve) => {
    if (!self.createImageBitmap) {
      resolve(false);
      return;
    }
    
    try {
      const avifData = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=';
      fetch(avifData)
        .then(r => r.blob())
        .then(createImageBitmap)
        .then(() => resolve(true))
        .catch(() => resolve(false));
    } catch (e) {
      resolve(false);
    }
  });
  
  return avifSupport;
}

// Memoized blur placeholder generation
const blurPlaceholderCache = new Map<string, string>();
export function generateBlurPlaceholder(width: number, height: number, color = '#f3f4f6'): string {
  const cacheKey = `${width}-${height}-${color}`;
  if (blurPlaceholderCache.has(cacheKey)) {
    return blurPlaceholderCache.get(cacheKey)!;
  }
  
  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="${color}"/></svg>`;
  const result = `data:image/svg+xml;base64,${btoa(svg.trim())}`;
  
  blurPlaceholderCache.set(cacheKey, result);
  return result;
}

// Optimized image dimension calculation
export function calculateImageDimensions(
  containerWidth: number,
  originalWidth: number, 
  originalHeight: number
): { width: number; height: number } {
  const aspectRatio = originalWidth / originalHeight;
  const calculatedWidth = Math.min(containerWidth, originalWidth);
  const calculatedHeight = Math.round(calculatedWidth / aspectRatio);
  
  return { width: calculatedWidth, height: calculatedHeight };
}
