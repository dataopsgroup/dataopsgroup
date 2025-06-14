
// Enhanced Navigation Handler for Service Worker
// Prevents caching of failed navigation responses and handles route updates

const handleNavigationRequest = async (request) => {
  const url = new URL(request.url);
  
  // Never cache navigation requests that might fail
  console.log('SW: Handling navigation request for:', url.pathname);
  
  try {
    // Always try network first for navigation
    const response = await fetch(request);
    
    // Only cache successful navigation responses
    if (response.ok && response.status === 200) {
      console.log('SW: Successful navigation response, caching:', url.pathname);
      const cache = await caches.open(APP_SHELL.name);
      cache.put(request, response.clone());
    } else {
      console.log('SW: Failed navigation response, not caching:', response.status, url.pathname);
    }
    
    return response;
  } catch (error) {
    console.log('SW: Network failed for navigation, trying cache:', url.pathname);
    
    // Try to return cached version
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      console.log('SW: Found cached response for:', url.pathname);
      return cachedResponse;
    }
    
    // Last resort: return index.html to let React Router handle it
    console.log('SW: No cache found, returning index.html for:', url.pathname);
    const indexResponse = await caches.match('/') || await caches.match('/index.html');
    if (indexResponse) {
      return indexResponse;
    }
    
    // If all else fails, return a basic 404 response
    return new Response('Page not found', { 
      status: 404, 
      statusText: 'Not Found',
      headers: { 'Content-Type': 'text/html' }
    });
  }
};

// Enhanced cache clearing for route updates
const clearNavigationCache = async () => {
  const cache = await caches.open(APP_SHELL.name);
  const requests = await cache.keys();
  
  // Clear only navigation requests (HTML pages)
  const navigationRequests = requests.filter(request => 
    request.mode === 'navigate' || 
    request.url.endsWith('.html') ||
    !request.url.includes('.')
  );
  
  console.log('SW: Clearing navigation cache for', navigationRequests.length, 'requests');
  
  await Promise.all(
    navigationRequests.map(request => cache.delete(request))
  );
};
