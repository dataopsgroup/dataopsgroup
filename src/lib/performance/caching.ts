
/**
 * Client-side caching optimization module
 */

// Configure client-side cache headers through service worker
export const setupClientCaching = () => {
  // App version for cache busting
  const appVersion = '1.0.5'; // Should match the version in service worker
  
  // Register service worker if browser supports it
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          // Check for updates every hour
          setInterval(() => {
            registration.update();
          }, 60 * 60 * 1000);
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
  }

  // Apply versioning to dynamic resources
  window.APP_VERSION = appVersion;
};

// Enhanced fetch function with prioritization
export const fetchWithCaching = (url: string, options: RequestInit = {}) => {
  // Determine appropriate caching strategy based on URL pattern
  const isStatic = /\.(png|jpg|jpeg|gif|svg|webp|woff|woff2|ttf|eot)$/.test(url);
  const isApi = url.includes('/api/') || url.endsWith('.json');
  
  let cacheControl = '';
  if (isStatic) {
    cacheControl = 'public, max-age=31536000, immutable'; // 1 year for static
  } else if (isApi) {
    cacheControl = 'private, max-age=3600'; // 1 hour for API
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
