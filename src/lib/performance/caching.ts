
/**
 * Client-side caching optimization module
 */

// Configure client-side cache headers through service worker
export const setupClientCaching = () => {
  // App version for cache busting
  const appVersion = '1.0.6'; // Should match the version in service worker
  
  // Register service worker if browser supports it
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          // Check for updates every hour
          setInterval(() => {
            registration.update();
          }, 60 * 60 * 1000);
          
          // Handle waiting service worker
          if (registration.waiting) {
            notifyUserOfUpdate(registration);
          }
          
          // Listen for new service workers
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  notifyUserOfUpdate(registration);
                }
              });
            }
          });
        })
        .catch(error => {
          console.error('ServiceWorker registration failed:', error);
        });
    });
    
    // Handle service worker updates
    let refreshing = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (refreshing) return;
      refreshing = true;
      window.location.reload();
    });
    
    // Listen for messages from the service worker
    navigator.serviceWorker.addEventListener('message', (event) => {
      if (event.data && event.data.type === 'CACHE_UPDATED') {
        // Notify user that new content is available
        console.log('New content is available. Please refresh the page.');
      }
    });
  }

  // Apply versioning to dynamic resources
  window.APP_VERSION = appVersion;
};

// Notify user of available service worker update
const notifyUserOfUpdate = (registration: ServiceWorkerRegistration) => {
  // Create a toast notification to inform the user of an update
  console.log('New version available! Ready to update.');
  
  // You can use your UI library to show a toast notification here
  if (typeof window !== 'undefined' && window.confirm('New version available! Would you like to update now?')) {
    // Send message to service worker to skip waiting
    registration.waiting?.postMessage({ type: 'SKIP_WAITING' });
  }
};

// Clear service worker caches
export const clearCaches = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then((registration) => {
      registration.active?.postMessage({ type: 'CLEAR_CACHE' });
    });
  }
};

// Enhanced fetch function with prioritization
export const fetchWithCaching = (url: string, options: RequestInit = {}) => {
  // Determine appropriate caching strategy based on URL pattern
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
  
  // Add headers to request
  const headers = new Headers(options.headers || {});
  headers.append('X-Requested-With', 'XMLHttpRequest');
  
  // Create final options with cache headers
  const fetchOptions: RequestInit = {
    ...options,
    headers,
    credentials: 'same-origin'
  };
  
  return fetch(url, fetchOptions);
};

// Preload critical assets by extension type
export const preloadCriticalAssetsByType = (assetType: 'font' | 'image' | 'script' | 'style') => {
  if (typeof document === 'undefined') return;
  
  const preloadUrls: string[] = [];
  
  // Add appropriate URLs based on asset type
  switch (assetType) {
    case 'font':
      preloadUrls.push(
        '/fonts/inter-subset/inter-latin-400-normal.woff2',
        '/fonts/inter-subset/inter-latin-600-normal.woff2'
      );
      break;
    case 'image':
      preloadUrls.push(
        '/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png' // Logo
      );
      break;
    case 'script':
      // Critical scripts would go here
      break;
    case 'style':
      // Critical styles would go here
      break;
  }
  
  // Create preload links for these assets
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
