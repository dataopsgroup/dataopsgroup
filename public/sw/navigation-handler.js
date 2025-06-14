
// Enhanced Navigation Handler for Service Worker
// Prevents caching of failed navigation responses and handles route updates

const handleNavigationRequest = async (request) => {
  const url = new URL(request.url);
  
  console.log('SW: Handling navigation request for:', url.pathname);
  
  try {
    // Always try network first for navigation to get fresh content
    const response = await fetch(request, {
      cache: 'no-cache' // Force fresh request
    });
    
    // Only cache successful navigation responses
    if (response.ok && response.status === 200) {
      console.log('SW: Successful navigation response for:', url.pathname);
      
      // Don't cache the response to prevent stale content issues
      // The main app will handle caching appropriately
      return response;
    } else {
      console.warn('SW: Failed navigation response:', response.status, url.pathname);
      
      // For failed responses, don't cache and let the error bubble up
      return response;
    }
  } catch (error) {
    console.error('SW: Network failed for navigation:', url.pathname, error);
    
    // Don't try to serve cached content for failed navigations
    // This prevents serving stale 404 pages
    throw error;
  }
};

// Enhanced cache clearing for route updates
const clearNavigationCache = async () => {
  try {
    const cacheNames = await caches.keys();
    
    // Clear all caches that might contain navigation responses
    const navigationCaches = cacheNames.filter(name => 
      name.includes('app-shell') || 
      name.includes('navigation') ||
      name.includes('performance')
    );
    
    console.log('SW: Clearing navigation caches:', navigationCaches);
    
    await Promise.all(
      navigationCaches.map(cacheName => caches.delete(cacheName))
    );
    
    console.log('SW: Navigation cache cleared successfully');
  } catch (error) {
    console.error('SW: Failed to clear navigation cache:', error);
  }
};

// Force clear all navigation caches on service worker activation
const forceCleanNavigationCache = async () => {
  console.log('SW: Force cleaning navigation cache');
  
  try {
    await clearNavigationCache();
    
    // Also clear any potential stale responses
    const cache = await caches.open('temp-clear-cache');
    await cache.delete('/');
    await caches.delete('temp-clear-cache');
    
    console.log('SW: Force clean completed');
  } catch (error) {
    console.error('SW: Force clean failed:', error);
  }
};
