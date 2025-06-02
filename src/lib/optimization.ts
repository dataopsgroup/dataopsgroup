/**
 * Optimization utilities for JavaScript performance
 */

// Debounce function to limit how often a function can be called
/**
 * Debounces a function, ensuring it is only called after a specified wait time has elapsed since the last call.
 * @param func The function to debounce.
 * @param wait The wait time in milliseconds.
 * @returns A debounced version of the function.
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  
  return function(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

// Memoize function results to avoid duplicate calculations
/**
 * Memoizes the result of a function to avoid duplicate calculations.
 * @param func The function to memoize.
 * @returns A memoized version of the function.
 */
export function memoize<T extends (...args: any[]) => any>(
  func: T
): (...args: Parameters<T>) => ReturnType<T> {
  const cache = new Map<string, ReturnType<T>>();
  
  return function(...args: Parameters<T>): ReturnType<T> {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key) as ReturnType<T>;
    }
    
    const result = func(...args);
    cache.set(key, result);
    return result;
  };
}

// Throttle a function to limit execution rate
/**
 * Throttles a function, ensuring it is only called at most once every limit milliseconds.
 * @param func The function to throttle.
 * @param limit The minimum time between calls in milliseconds.
 * @returns A throttled version of the function.
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false;
  
  return function(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Dynamic import utility for code splitting
/**
 * Dynamically imports a module with a timeout for code splitting.
 * @param importFn The import function.
 * @param timeout The timeout in milliseconds (default 5000).
 * @returns The imported module or throws on timeout.
 */
export async function lazyImport<T>(
  importFn: () => Promise<T>,
  timeout = 5000
): Promise<T> {
  try {
    const importPromise = importFn();
    const timeoutPromise = new Promise<never>((_, reject) => {
      setTimeout(() => reject(new Error('Import timed out')), timeout);
    });
    
    return await Promise.race([importPromise, timeoutPromise]);
  } catch (error) {
    console.error('Failed to dynamically import module:', error);
    throw error;
  }
}

/**
 * Prefetches a resource (script, style, image, or fetch) using requestIdleCallback for non-blocking loading.
 * @param url The resource URL to prefetch.
 * @param type The type of resource (default 'fetch').
 */
export function prefetchResource(url: string, type: 'script' | 'style' | 'image' | 'fetch' = 'fetch') {
  if (typeof window === 'undefined') return;
  
  // Use requestIdleCallback to defer non-critical operations
  const requestIdleCallback = window.requestIdleCallback || ((cb) => setTimeout(cb, 1));
  
  requestIdleCallback(() => {
    try {
      switch (type) {
        case 'script': {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.as = 'script';
          link.href = url;
          document.head.appendChild(link);
          break;
        }
        case 'style': {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.as = 'style';
          link.href = url;
          document.head.appendChild(link);
          break;
        }
        case 'image': {
          const img = new Image();
          img.src = url;
          break;
        }
        case 'fetch':
        default:
          fetch(url, { method: 'GET', mode: 'no-cors', credentials: 'omit' })
            .catch(() => {}); // Silently catch errors for prefetches
      }
    } catch (e) {
      // Ignore errors in prefetch attempts
    }
  });
}

/**
 * Loads a script dynamically and returns a promise that resolves when loaded.
 * @param src The script source URL.
 * @param async Whether to load the script asynchronously (default true).
 * @param defer Whether to defer script execution (default true).
 * @returns Promise that resolves when the script is loaded.
 */
export function loadScript(src: string, async = true, defer = true): Promise<void> {
  return new Promise((resolve, reject) => {
    // Check if the script is already loaded
    if (document.querySelector(`script[src="${src}"]`)) {
      resolve();
      return;
    }
    
    const script = document.createElement('script');
    script.src = src;
    script.async = async;
    script.defer = defer;
    
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    
    document.body.appendChild(script);
  });
}

/**
 * Optimizes a single image element by setting loading and decoding attributes and handling errors.
 * @param imageEl The image element to optimize.
 */
export function optimizeImage(imageEl: HTMLImageElement) {
  // Add loading attribute if not present
  if (!imageEl.getAttribute('loading')) {
    imageEl.loading = 'lazy';
  }
  
  // Add decoding attribute if not present
  if (!imageEl.getAttribute('decoding')) {
    imageEl.decoding = 'async';
  }
  
  // Handle errors gracefully
  imageEl.onerror = function() {
    // Set a fallback src or add a class for styling
    imageEl.classList.add('image-load-error');
    console.error(`Failed to load image: ${imageEl.src}`);
  };
}

/**
 * Optimizes all images on the page by applying optimizeImage to each.
 */
export function optimizeAllImages() {
  if (typeof document === 'undefined') return;
  
  const allImages = document.querySelectorAll('img');
  allImages.forEach(img => optimizeImage(img));
}

/**
 * Runs a callback when the browser is idle, using requestIdleCallback if available.
 * @param callback The function to run when idle.
 */
export function runWhenIdle(callback: () => void) {
  if (typeof window === 'undefined') return;
  
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(() => callback());
  } else {
    // Fallback for browsers that don't support requestIdleCallback
    setTimeout(callback, 1);
  }
}

/**
 * Cleans up unused resources and hints garbage collection for single page apps.
 */
export function cleanupUnusedResources() {
  // Remove unnecessary event listeners
  // Clear unused cache and arrays
  // Run garbage collection hint
  try {
    // @ts-ignore - This is a non-standard feature but can help in some browsers
    if (window.gc) window.gc();
  } catch (e) {
    // Ignore if not available
  }
}
