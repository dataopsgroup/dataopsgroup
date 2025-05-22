
/**
 * Resource hints optimization module for improved asset loading
 */

// Enhanced resource hints for critical resources
export const setupResourceHints = () => {
  if (typeof document === 'undefined') return;
  
  // Add preconnect for important domains with DNS prefetch fallbacks
  const criticalDomains = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://js.hs-scripts.com',
    'https://www.googletagmanager.com',
    'https://cdn.botpress.cloud',
    'https://files.bpcontent.cloud'
  ];
  
  criticalDomains.forEach(domain => {
    // Only add if not already present
    if (!document.querySelector(`link[rel="preconnect"][href="${domain}"]`)) {
      const preconnect = document.createElement('link');
      preconnect.rel = 'preconnect';
      preconnect.href = domain;
      preconnect.crossOrigin = 'anonymous';
      document.head.appendChild(preconnect);
      
      // Add DNS prefetch as fallback for browsers that don't support preconnect
      const dnsPrefetch = document.createElement('link');
      dnsPrefetch.rel = 'dns-prefetch';
      dnsPrefetch.href = domain;
      document.head.appendChild(dnsPrefetch);
    }
  });
  
  // Dynamically prefetch likely next navigations based on links in view
  const prefetchVisibleLinks = () => {
    const visibleLinks = document.querySelectorAll('a[href^="/"]:not([data-prefetched])');
    
    // Use IntersectionObserver to only prefetch links that are visible
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const link = entry.target as HTMLAnchorElement;
            const href = link.getAttribute('href');
            
            if (href && !href.includes('#') && !document.querySelector(`link[rel="prefetch"][href="${href}"]`)) {
              const prefetchLink = document.createElement('link');
              prefetchLink.rel = 'prefetch';
              prefetchLink.href = href;
              prefetchLink.as = 'document';
              document.head.appendChild(prefetchLink);
              link.dataset.prefetched = 'true';
              
              // Stop observing this link
              observer.unobserve(link);
            }
          }
        });
      }, { rootMargin: '200px' });
      
      visibleLinks.forEach(link => {
        observer.observe(link);
      });
    }
  };
  
  // Run once on load and then on idle
  if ('requestIdleCallback' in window) {
    window.addEventListener('load', () => {
      window.requestIdleCallback(() => prefetchVisibleLinks());
    });
  } else {
    window.addEventListener('load', () => {
      setTimeout(prefetchVisibleLinks, 1000);
    });
  }
};
