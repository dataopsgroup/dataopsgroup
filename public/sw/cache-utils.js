
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
  
  // Get cache duration - this might be customized per resource
  let maxAge = cacheConfig.maxAge;
  const url = response.url || '';
  
  // Check for custom timing for specific API endpoints
  if (cacheConfig.customTiming) {
    for (const endpoint in cacheConfig.customTiming) {
      if (url.endsWith(endpoint)) {
        maxAge = cacheConfig.customTiming[endpoint];
        break;
      }
    }
  }
  
  // Check for extension-specific cache times for images
  if (cacheConfig.byExtension) {
    for (const ext in cacheConfig.byExtension) {
      if (url.endsWith(ext)) {
        maxAge = cacheConfig.byExtension[ext];
        break;
      }
    }
  }
  
  // Set appropriate Cache-Control header based on resource type
  let cacheControl = `public, max-age=${maxAge}`;
  
  // Add immutable for static content that won't change
  if (maxAge > 2592000 || cacheConfig.immutable) {
    cacheControl += ', immutable';
  }
  
  // For short-living caches, add validation directives
  if (maxAge < 86400) {
    cacheControl += ', must-revalidate';
  }
  
  newHeaders.set('Cache-Control', cacheControl);
  
  // Add ETag based on APP_VERSION and URL
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
  
  // Check if this should be not cached
  for (const pattern of NO_CACHE_PATTERNS) {
    if (pattern.test(path)) {
      return { name: 'no-cache', maxAge: 0 };
    }
  }
  
  // Match font files
  if (path.match(/\.(woff|woff2|ttf|eot)$/)) {
    return FONT_FILES;
  }
  
  // Match image files
  if (path.match(/\.(png|jpg|jpeg|gif|svg|webp)$/)) {
    return IMAGE_ASSETS;
  }
  
  // Match JavaScript and CSS files
  if (path.match(/\.(js|css)$/)) {
    return JS_CSS_ASSETS;
  }
  
  // Match app shell files
  if (path === '/' || path === '/index.html') {
    return APP_SHELL;
  }
  
  // Match API responses
  if (path.match(/\/api\//) || path.endsWith('.json')) {
    return API_RESPONSES;
  }
  
  // Default to app shell configuration
  return APP_SHELL;
};

// Check if a request should use network-first strategy
const shouldUseNetworkFirst = (request) => {
  const url = new URL(request.url);
  const path = url.pathname;
  
  // HTML documents should use network-first
  if (request.mode === 'navigate' || path.endsWith('.html')) {
    return true;
  }
  
  // API endpoints for dynamic data should use network-first
  if (path.match(/\/api\/dynamic/) || path.includes('/user-specific/')) {
    return true;
  }
  
  return false;
};

// Check if a resource should skip caching altogether
const shouldSkipCache = (request) => {
  const url = new URL(request.url);
  const path = url.pathname;
  
  // Skip caching for analytics, user-specific or dynamic content
  for (const pattern of NO_CACHE_PATTERNS) {
    if (pattern.test(path)) {
      return true;
    }
  }
  
  // Skip caching for any query parameters that indicate dynamic content
  if (url.search.includes('nocache=') || url.search.includes('dynamic=')) {
    return true;
  }
  
  return false;
};
