
/**
 * Utility functions for caching operations with proper type safety
 */

/**
 * Type guard to check if we can safely reload the page
 */
export const canReload = (): boolean => {
  return typeof window !== 'undefined' && 
         typeof window.location !== 'undefined' && 
         typeof window.location.reload === 'function';
};

/**
 * Safely reload the page with error handling
 */
export const safeReload = (): void => {
  try {
    if (canReload()) {
      window.location.reload();
    }
  } catch (error) {
    console.warn('Failed to reload page:', error);
  }
};

/**
 * Check if service workers are supported
 */
export const isServiceWorkerSupported = (): boolean => {
  return typeof window !== 'undefined' && 
         'serviceWorker' in navigator;
};

/**
 * Check if caches API is supported
 */
export const isCacheApiSupported = (): boolean => {
  return typeof window !== 'undefined' && 
         'caches' in window;
};

/**
 * Universal app versioning
 */
export const getAppVersion = (): string => {
  return '1.0.11'; // Incremented for refactor
};

/**
 * Clear navigation cache and force reload with proper error handling
 */
export const clearCacheAndReload = async (): Promise<void> => {
  try {
    if (isCacheApiSupported()) {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames
          .filter(cacheName => 
            cacheName.includes('app-shell') || 
            cacheName.includes('performance')
          )
          .map(cacheName => caches.delete(cacheName))
      );
    }
  } catch (error) {
    console.warn('Failed to clear caches:', error);
  } finally {
    safeReload();
  }
};
