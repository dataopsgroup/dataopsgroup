
/**
 * Content prefetching optimization module
 */

// Enhanced prefetch for critical routes with prioritization
export const prefetchCriticalRoutes = (routes: string[]) => {
  if (typeof document === 'undefined') return;
  
  // Add slight delay to not compete with initial page resources
  setTimeout(() => {
    // Prioritize routes based on likelihood of navigation
    // We'll use a simple heuristic: routes in the main nav are higher priority
    const mainNavLinks = Array.from(document.querySelectorAll('nav a')).map(a => a.getAttribute('href'));
    
    // Sort routes by priority (nav links first)
    const prioritizedRoutes = [...routes].sort((a, b) => {
      const aIsInNav = mainNavLinks.includes(a);
      const bIsInNav = mainNavLinks.includes(b);
      
      if (aIsInNav && !bIsInNav) return -1;
      if (!aIsInNav && bIsInNav) return 1;
      return 0;
    });
    
    // Process routes in batches to avoid resource contention
    const processBatch = (routesBatch: string[], index = 0) => {
      if (index >= routesBatch.length) return;
      
      const route = routesBatch[index];
      
      // Check if already in cache
      caches.match(route).then(cachedResponse => {
        if (!cachedResponse && !document.querySelector(`link[rel="prefetch"][href="${route}"]`)) {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = route;
          link.as = route.endsWith('.js') ? 'script' : 
                    route.endsWith('.css') ? 'style' : 
                    'document';
                    
          // High priority for main nav items
          if (mainNavLinks.includes(route)) {
            link.setAttribute('fetchpriority', 'high');
          }
          
          document.head.appendChild(link);
        }
        
        // Process next route with a small delay between each
        if ('requestIdleCallback' in window) {
          window.requestIdleCallback(() => processBatch(routesBatch, index + 1));
        } else {
          setTimeout(() => processBatch(routesBatch, index + 1), 100);
        }
      }).catch(() => {
        // If caches API fails, prefetch anyway
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = route;
        document.head.appendChild(link);
        
        // Continue processing
        if ('requestIdleCallback' in window) {
          window.requestIdleCallback(() => processBatch(routesBatch, index + 1));
        } else {
          setTimeout(() => processBatch(routesBatch, index + 1), 100);
        }
      });
    };
    
    // Start processing routes
    processBatch(prioritizedRoutes);
  }, 2000);
};

// Prerender likely next page based on user behavior
export const prerenderNextLikelyPage = () => {
  if (typeof document === 'undefined' || !('requestIdleCallback' in window)) return;
  
  window.requestIdleCallback(() => {
    // Simple heuristic: prerender the page that has the most links to it
    const links = document.querySelectorAll('a[href^="/"]');
    const linkCounts: Record<string, number> = {};
    
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href && !href.includes('#') && href !== window.location.pathname) {
        linkCounts[href] = (linkCounts[href] || 0) + 1;
      }
    });
    
    // Find the most linked page
    let maxCount = 0;
    let mostLikelyPage = '';
    
    Object.entries(linkCounts).forEach(([page, count]) => {
      if (count > maxCount) {
        maxCount = count;
        mostLikelyPage = page;
      }
    });
    
    // Only prerender if there's a clear winner and it's not already prerendered
    if (mostLikelyPage && maxCount > 2 && !document.querySelector(`link[rel="prerender"][href="${mostLikelyPage}"]`)) {
      const prerender = document.createElement('link');
      prerender.rel = 'prerender';
      prerender.href = mostLikelyPage;
      document.head.appendChild(prerender);
      
      console.log(`Prerendering likely next page: ${mostLikelyPage}`);
    }
  }, { timeout: 5000 });
};
