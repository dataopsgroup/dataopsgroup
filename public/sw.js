
// Enhanced Service Worker with Performance-Optimized Caching Strategies
// This is a facade that imports functionality from modular files

importScripts('./sw/config.js');
importScripts('./sw/bot-detection.js');
importScripts('./sw/cache-strategies.js');
importScripts('./sw/cache-utils.js');
importScripts('./sw/event-handlers.js');

// Enhanced performance optimizations
const PERFORMANCE_CACHE = 'dataops-performance-v1';
const CRITICAL_RESOURCES = [
  '/',
  '/manifest.json',
  '/offline.html'
];

// Preload critical resources during install
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(PERFORMANCE_CACHE)
      .then(cache => cache.addAll(CRITICAL_RESOURCES))
      .then(() => self.skipWaiting())
  );
});

// Enhanced fetch strategy with performance optimizations
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-HTTP requests
  if (!url.protocol.startsWith('http')) return;
  
  // Enhanced caching strategy based on resource type
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
        });
        
        return response || fetchPromise;
      })
    );
  }
});

// Performance monitoring
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'PERFORMANCE_METRICS') {
    // Store performance metrics for analysis
    console.log('Performance metrics received:', event.data.metrics);
  }
});
