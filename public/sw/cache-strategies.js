
// Service Worker Caching Strategies

// Network-first strategy for HTML pages with offline fallback
const networkFirstStrategy = async (request) => {
  try {
    // Try network first
    const response = await fetch(request);
    
    // Only cache successful responses
    if (response.ok && !shouldSkipCache(request)) {
      const cacheConfig = getCacheConfigForRequest(request);
      const cacheName = cacheConfig.name;
      const clonedResponse = response.clone();
      const cache = await caches.open(cacheName);
      cache.put(request, addCacheHeaders(clonedResponse, cacheConfig));
    }
    
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
  // Skip caching for certain resources
  if (shouldSkipCache(request)) {
    return fetch(request);
  }
  
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

// Cache-first strategy for static assets that rarely change
const cacheFirstStrategy = async (request, cacheConfig) => {
  const cache = await caches.open(cacheConfig.name);
  
  // Try the cache first
  const cachedResponse = await cache.match(request);
  if (cachedResponse) {
    // Refresh cache in the background for next time
    fetch(request)
      .then(networkResponse => {
        if (networkResponse.ok) {
          cache.put(request, addCacheHeaders(networkResponse.clone(), cacheConfig));
        }
      })
      .catch(() => {/* Ignore background fetch errors */});
      
    return cachedResponse;
  }
  
  // If not in cache, get from network and cache
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      // Store in cache with appropriate headers
      cache.put(request, addCacheHeaders(networkResponse.clone(), cacheConfig));
    }
    return networkResponse;
  } catch (error) {
    // For images, return placeholder as fallback
    if (request.url.match(/\.(jpg|jpeg|png|gif|svg|webp)$/)) {
      return caches.match('/placeholder.svg');
    }
    throw error;
  }
};

// Network-only strategy for content that should never be cached
const networkOnlyStrategy = async (request) => {
  return fetch(request);
};
