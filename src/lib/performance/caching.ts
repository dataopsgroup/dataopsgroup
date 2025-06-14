
/**
 * Universal client-side caching optimization module
 * Refactored with proper TypeScript support and modular architecture
 */

import { setupNavigationDebugging } from './navigation-debug';
import { setupServiceWorker, setupServiceWorkerMessages } from './service-worker-manager';
import { getAppVersion, isCacheApiSupported, isServiceWorkerSupported } from './caching-utils';

/**
 * Sets up client-side caching using service workers with enhanced navigation handling.
 */
export const setupClientCaching = (): void => {
  // Check if we're in a browser environment
  if (typeof window === 'undefined') {
    return;
  }
  
  try {
    // Setup navigation debugging
    setupNavigationDebugging();
    
    // Setup service worker if supported
    if (isServiceWorkerSupported()) {
      setupServiceWorker();
      setupServiceWorkerMessages();
    }

    // Set universal versioning
    (window as any).APP_VERSION = getAppVersion();
  } catch (error) {
    console.error('Failed to setup client caching:', error);
  }
};

/**
 * Clears all caches via the service worker with enhanced navigation clearing.
 */
export const clearCaches = async (): Promise<void> => {
  try {
    if (isServiceWorkerSupported()) {
      const registration = await navigator.serviceWorker.ready;
      registration.active?.postMessage({ type: 'CLEAR_CACHE' });
    }
    
    // Also clear browser caches directly
    if (isCacheApiSupported()) {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map(cacheName => caches.delete(cacheName))
      );
    }
  } catch (error) {
    console.error('Failed to clear caches:', error);
  }
};

/**
 * Fetches a resource with a consistent caching strategy based on URL pattern.
 */
export const fetchWithCaching = (url: string, options: RequestInit = {}): Promise<Response> => {
  // Universal caching strategy based on URL pattern
  const isStatic = /\.(png|jpg|jpeg|gif|svg|webp|woff|woff2|ttf|eot)$/.test(url);
  const isApi = url.includes('/api/') || url.endsWith('.json');
  const isDynamic = url.includes('/dynamic/') || url.includes('user-specific');
  
  let cacheControl = '';
  if (isStatic) {
    cacheControl = 'public, max-age=1209600'; // 14 days for static
  } else if (isApi && !isDynamic) {
    cacheControl = 'private, max-age=3600'; // 1 hour for API
  } else if (isDynamic) {
    cacheControl = 'no-store'; // No cache for dynamic content
  } else {
    cacheControl = 'public, max-age=86400'; // 1 day default
  }
  
  // Universal headers
  const headers = new Headers(options.headers || {});
  headers.append('X-Requested-With', 'XMLHttpRequest');
  
  // Universal fetch options
  const fetchOptions: RequestInit = {
    ...options,
    headers,
    credentials: 'same-origin'
  };
  
  return fetch(url, fetchOptions);
};

/**
 * Preloads critical assets of a given type (font, image, script, style).
 */
export const preloadCriticalAssetsByType = (assetType: 'font' | 'image' | 'script' | 'style'): void => {
  if (typeof document === 'undefined') return;
  
  try {
    const preloadUrls: string[] = [];
    
    // Universal asset URLs
    switch (assetType) {
      case 'font':
        // Google Fonts are preloaded in index.html, no additional preloading needed
        break;
      case 'image':
        preloadUrls.push(
          '/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png' // Logo
        );
        break;
      case 'script':
        // Universal critical scripts
        break;
      case 'style':
        // Universal critical styles
        break;
    }
    
    // Universal preload link creation
    preloadUrls.forEach(url => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = url;
      link.as = assetType;
      
      if (assetType === 'font') {
        link.setAttribute('crossorigin', 'anonymous');
        link.setAttribute('type', 'font/woff2');
      }
      
      document.head.appendChild(link);
    });
  } catch (error) {
    console.error('Failed to preload critical assets:', error);
  }
};
