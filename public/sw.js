
// Service Worker for client-side caching strategy
const CACHE_NAME = 'dataops-cache-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/assets/js/main.js',
  '/assets/css/index.css',
  '/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png', // Logo
  '/lovable-uploads/5f3a8bdf-410e-4727-8fa0-eb20abe91242.png', // Favicon
];

// Install event - cache core assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Fetch event - stale-while-revalidate strategy
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
  
  event.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return cache.match(event.request).then(cachedResponse => {
        const fetchPromise = fetch(event.request)
          .then(networkResponse => {
            // Cache successful responses
            if (networkResponse.ok) {
              // Clone the response since it can only be consumed once
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          })
          .catch(() => {
            // Return fallbacks for common resources
            if (event.request.url.match(/\.(jpg|jpeg|png|gif|svg)$/)) {
              return caches.match('/placeholder.svg');
            }
          });
          
        // Return cached response or wait for network
        return cachedResponse || fetchPromise;
      });
    })
  );
});
