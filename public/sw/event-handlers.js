
// Service Worker Event Handlers

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
    event.respondWith(networkFirstStrategy(event.request));
  } else {
    // For other assets: Stale-while-revalidate strategy
    event.respondWith(staleWhileRevalidateStrategy(event.request, cacheConfig));
  }
});

// Handle offline fallbacks - second fetch listener for fallback
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
