// Service Worker for client-side caching strategy with enhanced caching policies
const CACHE_NAME = 'dataops-cache-v3';
const APP_VERSION = '1.0.4'; // Increment this when making significant changes

// Cache categories for different caching strategies
const STATIC_CONTENT = {
  name: 'static-content-v2',
  maxAge: 31536000, // 1 year in seconds
  resources: [
    '/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png', // Logo
    '/lovable-uploads/5f3a8bdf-410e-4727-8fa0-eb20abe91242.png', // Favicon
    // Other static images and font files
  ]
};

const APP_SHELL = {
  name: 'app-shell-v2',
  maxAge: 2592000, // 30 days in seconds
  resources: [
    '/',
    '/index.html',
    '/assets/js/main.js',
    '/assets/css/index.css',
  ]
};

const API_RESPONSES = {
  name: 'api-responses-v2',
  maxAge: 3600, // 1 hour in seconds
  resources: [
    '/api/content.json'
  ]
};

const OFFLINE_FALLBACKS = {
  name: 'offline-fallbacks-v2',
  maxAge: 7776000, // 90 days in seconds
  resources: [
    '/offline.html',
    '/placeholder.svg',
  ]
};

// Helper function to set cache headers in the response
const addCacheHeaders = (response, cacheConfig) => {
  if (!response || !response.headers) return response;
  
  // Clone the response to modify headers
  const newHeaders = new Headers(response.headers);
  const newResponse = new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders
  });
  
  // Set appropriate Cache-Control header based on resource type
  newHeaders.set('Cache-Control', `public, max-age=${cacheConfig.maxAge}${cacheConfig.maxAge > 2592000 ? ', immutable' : ''}`);
  
  // Add ETag based on APP_VERSION and URL
  const url = response.url || '';
  const resourceId = url.split('/').pop() || '';
  newHeaders.set('ETag', `"${APP_VERSION}-${resourceId}"`);
  
  // Set Last-Modified if not present
  if (!newHeaders.has('Last-Modified')) {
    newHeaders.set('Last-Modified', new Date().toUTCString());
  }
  
  return newResponse;
};

// Determine which cache configuration applies to a request
const getCacheConfigForRequest = (request) => {
  const url = new URL(request.url);
  const path = url.pathname;
  
  // Match static content (images, fonts, etc.)
  if (path.match(/\.(png|jpg|jpeg|gif|svg|webp|woff|woff2|ttf|eot)$/)) {
    return STATIC_CONTENT;
  }
  
  // Match app shell files
  if (path === '/' || path === '/index.html' || path.match(/\.(js|css)$/)) {
    return APP_SHELL;
  }
  
  // Match API responses
  if (path.match(/\/api\//) || path.endsWith('.json')) {
    return API_RESPONSES;
  }
  
  // Default to app shell configuration
  return APP_SHELL;
};

// Install event - cache core assets by category
self.addEventListener('install', event => {
  event.waitUntil(Promise.all([
    caches.open(STATIC_CONTENT.name)
      .then(cache => cache.addAll(STATIC_CONTENT.resources)),
    caches.open(APP_SHELL.name)
      .then(cache => cache.addAll(APP_SHELL.resources)),
    caches.open(OFFLINE_FALLBACKS.name)
      .then(cache => cache.addAll(OFFLINE_FALLBACKS.resources))
  ]));
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          // Delete any cache that doesn't match our current versions
          if (!cacheName.includes('-v2')) {
            return caches.delete(cacheName);
          }
        }).filter(Boolean)
      );
    }).then(() => self.clients.claim()) // Take control of clients immediately
  );
});

// Fetch event with different strategies based on request type
self.addEventListener('fetch', event => {
  // Skip non-GET requests and third-party requests
  if (event.request.method !== 'GET' || 
      !event.request.url.startsWith(self.location.origin)) {
    return;
  }
  
  // Skip analytics requests
  if (event.request.url.includes('googletagmanager.com') || 
      event.request.url.includes('hs-scripts.com')) {
    return;
  }
  
  // Get the appropriate cache configuration for this request
  const cacheConfig = getCacheConfigForRequest(event.request);
  
  // Check if request is for an HTML page (navigation request)
  const isNavigationRequest = event.request.mode === 'navigate';
  
  if (isNavigationRequest) {
    // For HTML pages: Network-first strategy with offline fallback
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Cache a copy with appropriate headers
          const cacheName = APP_SHELL.name;
          const clonedResponse = response.clone();
          caches.open(cacheName).then(cache => {
            cache.put(event.request, addCacheHeaders(clonedResponse, APP_SHELL));
          });
          return response;
        })
        .catch(() => {
          // If offline, try to return cached version
          return caches.match(event.request)
            .then(cachedResponse => {
              return cachedResponse || caches.match('/offline.html');
            });
        })
    );
  } else {
    // For other assets: Stale-while-revalidate strategy
    event.respondWith(
      caches.open(cacheConfig.name).then(cache => {
        return cache.match(event.request).then(cachedResponse => {
          // Start network fetch
          const fetchPromise = fetch(event.request)
            .then(networkResponse => {
              if (networkResponse.ok) {
                // Apply cache headers and store in cache
                cache.put(
                  event.request, 
                  addCacheHeaders(networkResponse.clone(), cacheConfig)
                );
              }
              return networkResponse;
            })
            .catch(error => {
              console.error('Fetch failed:', error);
              // For image requests, return placeholder if available
              if (event.request.url.match(/\.(jpg|jpeg|png|gif|svg|webp)$/)) {
                return caches.match('/placeholder.svg');
              }
              throw error;
            });
          
          // Return cached response or wait for network
          return cachedResponse || fetchPromise;
        });
      })
    );
  }
});

// Handle offline fallbacks
self.addEventListener('fetch', event => {
  // Only run this for HTML navigation when the first handler didn't respond
  if (event.request.mode !== 'navigate') return;
  
  event.respondWith(
    fetch(event.request)
      .catch(() => {
        return caches.match('/offline.html') || caches.match('/index.html');
      })
  );
});
