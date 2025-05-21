
/**
 * Performance optimization utilities for improved asset loading and caching
 */

// Resource hints for critical resources
export const setupResourceHints = () => {
  if (typeof document === 'undefined') return;
  
  // Add preconnect for important domains
  const criticalDomains = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://js.hs-scripts.com',
    'https://www.googletagmanager.com',
    'https://cdn.botpress.cloud',
    'https://files.bpcontent.cloud'
  ];
  
  criticalDomains.forEach(domain => {
    // Only add if not already present
    if (!document.querySelector(`link[rel="preconnect"][href="${domain}"]`)) {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    }
  });
};

// Enhanced asset loading with priority hints
export const optimizeAssetLoading = () => {
  if (typeof document === 'undefined') return;

  // Set fetchpriority for critical images above the fold
  document.querySelectorAll('img').forEach(img => {
    // Check if image is likely above the fold (simplified heuristic)
    const rect = img.getBoundingClientRect();
    if (rect.top < window.innerHeight && !img.hasAttribute('fetchpriority')) {
      img.fetchPriority = 'high';
    }
  });
  
  // Implement lazy loading for below-fold images if not already set
  document.querySelectorAll('img').forEach(img => {
    if (!img.loading) img.loading = 'lazy';
    if (!img.decoding) img.decoding = 'async';
  });

  // Add version cache busting to dynamic resources
  document.querySelectorAll('link[href*=".css"], script[src*=".js"]').forEach(element => {
    const url = element.getAttribute('href') || element.getAttribute('src') || '';
    if (url && !url.includes('?v=') && !url.includes('lovable-uploads')) {
      const newUrl = url.includes('?') ? `${url}&v=${window.APP_VERSION || '1.0.0'}` : `${url}?v=${window.APP_VERSION || '1.0.0'}`;
      if (element.tagName === 'LINK') {
        element.setAttribute('href', newUrl);
      } else {
        element.setAttribute('src', newUrl);
      }
    }
  });
};

// Configure client-side cache headers through service worker
export const setupClientCaching = () => {
  // App version for cache busting
  const appVersion = '1.0.1'; // Should match the version in service worker
  
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

// Prefetch future navigation routes with proper cache headers
export const prefetchCriticalRoutes = (routes: string[]) => {
  if (typeof document === 'undefined') return;
  
  // Add slight delay to not compete with initial page resources
  setTimeout(() => {
    routes.forEach(route => {
      // Only prefetch if not already in cache
      caches.match(route).then(cachedResponse => {
        if (!cachedResponse) {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = route;
          link.as = route.endsWith('.js') ? 'script' : 
                    route.endsWith('.css') ? 'style' : 
                    'document';
          document.head.appendChild(link);
        }
      }).catch(() => {
        // If caches API fails, prefetch anyway
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = route;
        document.head.appendChild(link);
      });
    });
  }, 2000);
};

// Add Cache-Control headers to fetch requests
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
