
// Service Worker Event Handlers with Bot Detection

// Install event - cache core assets by category
self.addEventListener('install', event => {
  event.waitUntil(Promise.all([
    caches.open(STATIC_CONTENT.name)
      .then(cache => cache.addAll(STATIC_CONTENT.resources)),
    caches.open(FONT_FILES.name)
      .then(cache => cache.addAll(FONT_FILES.resources)),
    caches.open(APP_SHELL.name)
      .then(cache => cache.addAll(APP_SHELL.resources)),
    caches.open(OFFLINE_FALLBACKS.name)
      .then(cache => cache.addAll(OFFLINE_FALLBACKS.resources))
  ]));
  
  // Force activation without waiting for tabs to close
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          // Delete any cache that doesn't match our current versions
          if (!cacheName.includes('-v3')) {
            return caches.delete(cacheName);
          }
        }).filter(Boolean)
      );
    }).then(() => self.clients.claim()) // Take control of clients immediately
  );
});

// Primary fetch event with bot detection
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }
  
  // Skip third-party requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }
  
  // Skip analytics requests
  if (event.request.url.includes('googletagmanager.com') || 
      event.request.url.includes('hs-scripts.com') ||
      event.request.url.includes('google-analytics.com')) {
    return;
  }
  
  // CRITICAL: Handle search engine bots differently
  if (isSearchEngineBot(event.request)) {
    event.respondWith(handleBotRequest(event.request));
    return;
  }
  
  // Regular user requests - apply normal caching strategies
  const cacheConfig = getCacheConfigForRequest(event.request);
  
  // Select caching strategy based on the type of resource
  if (shouldSkipCache(event.request)) {
    // Never cache these resources
    event.respondWith(networkOnlyStrategy(event.request));
  } 
  else if (shouldUseNetworkFirst(event.request)) {
    // For HTML pages and dynamic API endpoints: Network-first strategy
    event.respondWith(networkFirstStrategy(event.request));
  }
  else if (cacheConfig === FONT_FILES || cacheConfig === STATIC_CONTENT) {
    // For fonts and static content: Cache-first strategy
    event.respondWith(cacheFirstStrategy(event.request, cacheConfig));
  }
  else {
    // For other assets: Stale-while-revalidate strategy
    event.respondWith(staleWhileRevalidateStrategy(event.request, cacheConfig));
  }
});

// Handle offline fallbacks - second fetch listener for fallback
self.addEventListener('fetch', event => {
  // Only run this for HTML navigation when the first handler didn't respond
  if (event.request.mode !== 'navigate') return;
  
  // Skip if this is a bot request (already handled above)
  if (isSearchEngineBot(event.request)) return;
  
  event.respondWith(
    fetch(event.request)
      .catch(() => {
        return caches.match('/offline.html') || caches.match('/index.html');
      })
  );
});

// Listen for messages from clients
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            return caches.delete(cacheName);
          })
        );
      })
    );
  }
});

