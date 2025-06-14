/**
 * Universal client-side caching optimization module
 * Enhanced with better Service Worker update handling
 */

/**
 * Sets up client-side caching using service workers and versioning.
 * Now includes better handling for Service Worker updates to prevent navigation issues.
 */
export const setupClientCaching = () => {
  // Universal app version for cache busting
  const appVersion = '1.0.9';
  
  // Universal service worker registration with enhanced update handling
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('ServiceWorker registered successfully');
          
          // Universal update check interval
          setInterval(() => {
            registration.update();
          }, 60 * 60 * 1000);
          
          // Enhanced waiting service worker handling
          if (registration.waiting) {
            handleServiceWorkerUpdate(registration);
          }
          
          // Enhanced new service worker listening
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  handleServiceWorkerUpdate(registration);
                }
              });
            }
          });
        })
        .catch(error => {
          console.error('ServiceWorker registration failed:', error);
        });
    });
    
    // Enhanced service worker update handling
    let refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (refreshing) return;
      refreshing = true;
      console.log('ServiceWorker controller changed, reloading page');
      window.location.reload();
    });
    
    // Enhanced message listening with better update handling
    navigator.serviceWorker.addEventListener('message', (event) => {
      if (event.data && event.data.type === 'CACHE_UPDATED') {
        console.log('New content is available. Please refresh the page.');
      }
      
      if (event.data && event.data.type === 'SW_UPDATED') {
        console.log('ServiceWorker updated to version:', event.data.version);
        // Force a page reload to get the fresh content
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }
    });
  }

  // Universal versioning
  window.APP_VERSION = appVersion;
};

/**
 * Enhanced handler for service worker updates
 */
const handleServiceWorkerUpdate = (registration: ServiceWorkerRegistration) => {
  console.log('New ServiceWorker version available');
  
  // Skip waiting immediately for faster updates
  if (registration.waiting) {
    registration.waiting.postMessage({ type: 'SKIP_WAITING' });
  }
  
  // Show user notification (optional)
  if (typeof window !== 'undefined') {
    console.log('ServiceWorker update will be applied automatically');
  }
};

/**
 * Clears all caches via the service worker.
 */
export const clearCaches = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.active?.postMessage({ type: 'CLEAR_CACHE' });
    });
  }
};

/**
 * Fetches a resource with a consistent caching strategy based on URL pattern.
 * @param url The resource URL.
 * @param options Fetch options.
 */
export const fetchWithCaching = (url: string, options: RequestInit = {}) => {
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
 * @param assetType The type of asset to preload.
 */
export const preloadCriticalAssetsByType = (assetType: 'font' | 'image' | 'script' | 'style') => {
  if (typeof document === 'undefined') return;
  
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
};
