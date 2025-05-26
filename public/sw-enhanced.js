// Enhanced Service Worker for aggressive caching and Core Web Vitals optimization
const CACHE_NAME = 'dataops-v1.7.2';
const STATIC_CACHE = 'static-v1.7.2';
const DYNAMIC_CACHE = 'dynamic-v1.7.2';
const IMAGE_CACHE = 'images-v1.7.2';

// Cache strategies for different resource types
const CACHE_STRATEGIES = {
  // Critical resources: cache first with network fallback
  CRITICAL: [
    '/',
    '/index.html',
    '/src/main.tsx',
    '/src/App.tsx',
    '/src/index.css'
  ],
  
  // Static assets: cache first with long expiry
  STATIC: [
    '/fonts/',
    '/icons/',
    '/images/',
    '/lovable-uploads/'
  ],
  
  // API responses: network first with cache fallback
  API: [
    '/api/',
    'https://js.hs-scripts.com/',
    'https://www.googletagmanager.com/'
  ],
  
  // Images: cache first with size limits
  IMAGES: [
    '.jpg', '.jpeg', '.png', '.gif', '.webp', '.avif', '.svg'
  ]
};

// Install event: cache critical resources
self.addEventListener('install', (event) => {
  console.log('Enhanced Service Worker installing...');
  
  event.waitUntil(
    Promise.all([
      // Cache critical resources
      caches.open(STATIC_CACHE).then((cache) => {
        return cache.addAll(CACHE_STRATEGIES.CRITICAL);
      }),
      
      // Preload critical fonts
      caches.open(STATIC_CACHE).then((cache) => {
        return cache.addAll([
          'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2',
          'https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGKYAZ9hiJ-Ek-_EeA.woff2'
        ]);
      })
    ]).then(() => {
      console.log('Critical resources cached');
      return self.skipWaiting();
    })
  );
});

// Activate event: clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Enhanced Service Worker activating...');
  
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (![CACHE_NAME, STATIC_CACHE, DYNAMIC_CACHE, IMAGE_CACHE].includes(cacheName)) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      console.log('Service Worker activated');
      return self.clients.claim();
    })
  );
});

// Fetch event: implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests and external APIs we don't want to cache
  if (request.method !== 'GET' || 
      url.hostname.includes('analytics') ||
      url.hostname.includes('doubleclick')) {
    return;
  }
  
  event.respondWith(handleFetch(request));
});

// Handle fetch with appropriate caching strategy
async function handleFetch(request) {
  const url = new URL(request.url);
  const pathname = url.pathname;
  
  try {
    // Images: Cache first with size limits
    if (CACHE_STRATEGIES.IMAGES.some(ext => pathname.includes(ext))) {
      return await cacheFirstWithSizeLimit(request, IMAGE_CACHE, 50 * 1024 * 1024); // 50MB limit
    }
    
    // Static assets: Cache first with long expiry
    if (CACHE_STRATEGIES.STATIC.some(path => pathname.includes(path))) {
      return await cacheFirst(request, STATIC_CACHE);
    }
    
    // API requests: Network first with cache fallback
    if (CACHE_STRATEGIES.API.some(api => url.hostname.includes(api))) {
      return await networkFirstWithCache(request, DYNAMIC_CACHE);
    }
    
    // Critical pages: Stale while revalidate
    if (CACHE_STRATEGIES.CRITICAL.includes(pathname) || pathname === '/') {
      return await staleWhileRevalidate(request, STATIC_CACHE);
    }
    
    // Default: Network first
    return await networkFirstWithCache(request, DYNAMIC_CACHE);
    
  } catch (error) {
    console.error('Fetch failed:', error);
    
    // Return offline fallback if available
    if (pathname === '/' || pathname.includes('.html')) {
      const cache = await caches.open(STATIC_CACHE);
      return await cache.match('/') || new Response('Offline', { status: 503 });
    }
    
    return new Response('Network error', { status: 503 });
  }
}

// Cache first strategy
async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  
  if (cached) {
    return cached;
  }
  
  const response = await fetch(request);
  if (response.ok) {
    cache.put(request, response.clone());
  }
  
  return response;
}

// Network first with cache fallback
async function networkFirstWithCache(request, cacheName) {
  const cache = await caches.open(cacheName);
  
  try {
    const response = await fetch(request);
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  } catch (error) {
    const cached = await cache.match(request);
    if (cached) {
      return cached;
    }
    throw error;
  }
}

// Stale while revalidate strategy
async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  
  // Always fetch in background to update cache
  const fetchPromise = fetch(request).then((response) => {
    if (response.ok) {
      cache.put(request, response.clone());
    }
    return response;
  });
  
  // Return cached version immediately if available
  if (cached) {
    return cached;
  }
  
  // Otherwise wait for network
  return await fetchPromise;
}

// Cache first with size limit for images
async function cacheFirstWithSizeLimit(request, cacheName, sizeLimit) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  
  if (cached) {
    return cached;
  }
  
  const response = await fetch(request);
  if (response.ok) {
    // Check cache size and clean if necessary
    const cacheSize = await getCacheSize(cacheName);
    if (cacheSize > sizeLimit) {
      await cleanOldestCacheEntries(cacheName, 10); // Remove 10 oldest entries
    }
    
    cache.put(request, response.clone());
  }
  
  return response;
}

// Utility functions for cache management
async function getCacheSize(cacheName) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  let totalSize = 0;
  
  for (const key of keys) {
    const response = await cache.match(key);
    if (response) {
      const blob = await response.blob();
      totalSize += blob.size;
    }
  }
  
  return totalSize;
}

async function cleanOldestCacheEntries(cacheName, count) {
  const cache = await caches.open(cacheName);
  const keys = await cache.keys();
  
  // Sort by request time (if available) or just take first entries
  const keysToDelete = keys.slice(0, count);
  
  for (const key of keysToDelete) {
    await cache.delete(key);
  }
  
  console.log(`Cleaned ${count} entries from ${cacheName}`);
}

// Background sync for analytics
self.addEventListener('sync', (event) => {
  if (event.tag === 'analytics-sync') {
    event.waitUntil(syncAnalytics());
  }
});

async function syncAnalytics() {
  // Sync any pending analytics data when back online
  console.log('Syncing analytics data...');
}

// Performance monitoring
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'PERFORMANCE_REPORT') {
    console.log('Performance data received:', event.data.payload);
  }
});
