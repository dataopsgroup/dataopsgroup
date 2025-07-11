
// Enhanced Service Worker with Better Navigation Handling
// This fixes the "Page Not Found" issue after deployments

importScripts('./sw/config.js');
importScripts('./sw/bot-detection.js');
importScripts('./sw/cache-strategies.js');
importScripts('./sw/cache-utils.js');
importScripts('./sw/navigation-handler.js');
importScripts('./sw/event-handlers.js');

// Enhanced performance optimizations with dynamic versioning
const PERFORMANCE_CACHE = `dataops-performance-${CACHE_VERSION}`;
const CRITICAL_RESOURCES = [
  '/',
  '/manifest.json'
];

// Install event - cache critical resources and clean up old caches
self.addEventListener('install', (event) => {
  console.log('Service Worker installing with cache version:', CACHE_VERSION);
  
  event.waitUntil(
    Promise.all([
      // Cache critical resources
      caches.open(PERFORMANCE_CACHE)
        .then(cache => cache.addAll(CRITICAL_RESOURCES)),
      // Clean up old caches during install
      cleanupOldCaches()
    ]).then(() => {
      console.log('Service Worker installation complete, skipping waiting');
      return self.skipWaiting();
    })
  );
});

// Activate event - take control immediately and clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker activating with cache version:', CACHE_VERSION);
  
  event.waitUntil(
    Promise.all([
      // Clean up any remaining old caches
      cleanupOldCaches(),
      // Clear navigation cache to prevent stale routes
      clearNavigationCache(),
      // Take control of all clients immediately
      self.clients.claim()
    ]).then(() => {
      console.log('Service Worker activation complete');
      // Notify all clients to reload for the new version
      return self.clients.matchAll().then(clients => {
        clients.forEach(client => {
          client.postMessage({
            type: 'SW_UPDATED',
            version: CACHE_VERSION
          });
        });
      });
    })
  );
});

// Enhanced fetch strategy with better navigation handling
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-HTTP requests
  if (!url.protocol.startsWith('http')) return;
  
  // Skip problematic third-party scripts
  const problematicHosts = [
    'cdn.gpteng.co',
    'gptengineer.com'
  ];
  
  if (problematicHosts.some(host => url.hostname.includes(host))) {
    event.respondWith(new Response('', { status: 204 }));
    return;
  }

  // Handle navigation requests with enhanced handler
  if (request.mode === 'navigate') {
    event.respondWith(handleNavigationRequest(request));
    return;
  }
  
  // Handle other requests with existing strategies
  if (url.pathname.endsWith('.woff2') || url.pathname.endsWith('.woff')) {
    // Cache fonts for 1 year
    event.respondWith(
      caches.match(request).then(response => {
        if (response) return response;
        return fetch(request).then(fetchResponse => {
          const responseClone = fetchResponse.clone();
          caches.open(PERFORMANCE_CACHE).then(cache => {
            cache.put(request, responseClone);
          });
          return fetchResponse;
        }).catch(() => {
          return new Response('', { status: 204 });
        });
      })
    );
  } else if (url.pathname.includes('lovable-uploads') || url.pathname.match(/\.(png|jpg|jpeg|gif|svg|webp)$/)) {
    // Cache images with stale-while-revalidate
    event.respondWith(
      caches.match(request).then(response => {
        const fetchPromise = fetch(request).then(fetchResponse => {
          const responseClone = fetchResponse.clone();
          caches.open(PERFORMANCE_CACHE).then(cache => {
            cache.put(request, responseClone);
          });
          return fetchResponse;
        }).catch(() => {
          return new Response('', { status: 204 });
        });
        
        return response || fetchPromise;
      })
    );
  }
});

// Enhanced message handling
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      Promise.all([
        caches.keys().then((cacheNames) => {
          return Promise.all(
            cacheNames.map((cacheName) => {
              return caches.delete(cacheName);
            })
          );
        }),
        clearNavigationCache()
      ])
    );
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({
      version: CACHE_VERSION
    });
  }
  
  if (event.data && event.data.type === 'PERFORMANCE_METRICS') {
    console.log('Performance metrics received:', event.data.metrics);
  }
});
