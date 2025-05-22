
// Service Worker Caching Strategies

// Network-first strategy for HTML pages with offline fallback
const networkFirstStrategy = async (request) => {
  try {
    // Try network first
    const response = await fetch(request);
    
    // Cache a copy with appropriate headers
    const cacheName = APP_SHELL.name;
    const clonedResponse = response.clone();
    const cache = await caches.open(cacheName);
    cache.put(request, addCacheHeaders(clonedResponse, APP_SHELL));
    
    return response;
  } catch (error) {
    // If offline, try to return cached version
    const cachedResponse = await caches.match(request);
    if (cachedResponse) return cachedResponse;
    
    // Return offline page as last resort
    return caches.match('/offline.html');
  }
};

// Stale-while-revalidate strategy for non-HTML resources
const staleWhileRevalidateStrategy = async (request, cacheConfig) => {
  const cache = await caches.open(cacheConfig.name);
  
  // Try cache first
  const cachedResponse = await cache.match(request);
  
  // Start network fetch regardless of cache hit/miss
  const fetchPromise = fetch(request)
    .then(networkResponse => {
      if (networkResponse.ok) {
        // Apply cache headers and store in cache
        cache.put(
          request, 
          addCacheHeaders(networkResponse.clone(), cacheConfig)
        );
      }
      return networkResponse;
    })
    .catch(error => {
      console.error('Fetch failed:', error);
      // For image requests, return placeholder if available
      if (request.url.match(/\.(jpg|jpeg|png|gif|svg|webp)$/)) {
        return caches.match('/placeholder.svg');
      }
      throw error;
    });
    
  // Return cached response or wait for network
  return cachedResponse || fetchPromise;
};
