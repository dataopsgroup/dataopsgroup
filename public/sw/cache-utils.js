
// Cache Utility Functions

// Helper function to set cache headers in the response
const addCacheHeaders = (response, cacheConfig) => {
  if (!response || !response.headers) return response;
  
  // Clone the response to modify headers
  const newHeaders = new Headers(response.headers);
  const newResponse = new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: newHeaders
  });
  
  // Set appropriate Cache-Control header based on resource type
  newHeaders.set('Cache-Control', `public, max-age=${cacheConfig.maxAge}${cacheConfig.maxAge > 2592000 ? ', immutable' : ''}`);
  
  // Add ETag based on APP_VERSION and URL
  const url = response.url || '';
  const resourceId = url.split('/').pop() || '';
  newHeaders.set('ETag', `"${APP_VERSION}-${resourceId}"`);
  
  // Set Last-Modified if not present
  if (!newHeaders.has('Last-Modified')) {
    newHeaders.set('Last-Modified', new Date().toUTCString());
  }
  
  return newResponse;
};

// Determine which cache configuration applies to a request
const getCacheConfigForRequest = (request) => {
  const url = new URL(request.url);
  const path = url.pathname;
  
  // Match static content (images, fonts, etc.)
  if (path.match(/\.(png|jpg|jpeg|gif|svg|webp|woff|woff2|ttf|eot)$/)) {
    return STATIC_CONTENT;
  }
  
  // Match app shell files
  if (path === '/' || path === '/index.html' || path.match(/\.(js|css)$/)) {
    return APP_SHELL;
  }
  
  // Match API responses
  if (path.match(/\/api\//) || path.endsWith('.json')) {
    return API_RESPONSES;
  }
  
  // Default to app shell configuration
  return APP_SHELL;
};
