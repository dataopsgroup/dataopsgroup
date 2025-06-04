
/**
 * Enhanced resource hints and preloading for optimal performance
 */

/**
 * Setup critical resource hints and preloading
 */
export const setupResourceHints = () => {
  if (typeof document === 'undefined') return;
  
  // Add preconnect hints for critical domains
  const criticalDomains = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://www.googletagmanager.com',
    'https://www.google-analytics.com'
  ];
  
  criticalDomains.forEach(domain => {
    if (!document.querySelector(`link[href="${domain}"]`)) {
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    }
  });
  
  // Preload critical fonts with proper font-display
  preloadCriticalFonts();
  
  // Setup intelligent prefetching
  setupIntelligentPrefetching();
  
  // Preload critical route assets
  preloadCriticalRouteAssets();
};

/**
 * Preload critical fonts with enhanced loading strategy
 */
const preloadCriticalFonts = () => {
  const criticalFonts = [
    {
      href: 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff2',
      type: 'font/woff2',
      weight: '400'
    },
    {
      href: 'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
      type: 'font/woff2',
      weight: '400'
    }
  ];
  
  criticalFonts.forEach(font => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.href = font.href;
    link.type = font.type;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};

/**
 * Setup intelligent prefetching based on user behavior
 */
const setupIntelligentPrefetching = () => {
  let prefetchTimeout: number;
  
  // Prefetch on hover with delay
  document.addEventListener('mouseover', (e) => {
    const link = (e.target as Element).closest('a[href]') as HTMLAnchorElement;
    if (link && link.href && link.hostname === location.hostname) {
      clearTimeout(prefetchTimeout);
      prefetchTimeout = setTimeout(() => {
        prefetchRoute(link.href);
      }, 100);
    }
  });
  
  // Cancel prefetch if mouse leaves quickly
  document.addEventListener('mouseout', (e) => {
    const link = (e.target as Element).closest('a[href]');
    if (link) {
      clearTimeout(prefetchTimeout);
    }
  });
  
  // Prefetch on touch for mobile
  document.addEventListener('touchstart', (e) => {
    const link = (e.target as Element).closest('a[href]') as HTMLAnchorElement;
    if (link && link.href && link.hostname === location.hostname) {
      prefetchRoute(link.href);
    }
  }, { passive: true });
};

/**
 * Prefetch route assets
 */
const prefetchRoute = (href: string) => {
  if (document.querySelector(`link[href="${href}"][rel="prefetch"]`)) {
    return; // Already prefetched
  }
  
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  document.head.appendChild(link);
};

/**
 * Preload critical route assets
 */
const preloadCriticalRouteAssets = () => {
  // Preload hero images based on current route
  const currentPath = window.location.pathname;
  
  if (currentPath === '/') {
    // Preload hero image for homepage
    preloadImage('/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png', 'high');
  } else if (currentPath.startsWith('/insights')) {
    // Preload common blog assets
    preloadImage('/lovable-uploads/ef47b612-1fd8-4f88-9d56-a3f9e8de8378.png', 'high');
  }
};

/**
 * Preload image with specific priority
 */
const preloadImage = (src: string, priority: 'high' | 'low' = 'low') => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  link.setAttribute('fetchpriority', priority);
  document.head.appendChild(link);
};

/**
 * Setup DNS prefetch for external domains
 */
export const setupDNSPrefetch = () => {
  const externalDomains = [
    'https://images.unsplash.com',
    'https://www.googletagmanager.com'
  ];
  
  externalDomains.forEach(domain => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = domain;
    document.head.appendChild(link);
  });
};
