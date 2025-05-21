
/**
 * Performance optimization utilities for improved asset loading and caching
 */

// Resource hints for critical resources
export const setupResourceHints = () => {
  if (typeof document === 'undefined') return;
  
  // Add preconnect for important domains
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
      const link = document.createElement('link');
      link.rel = 'preconnect';
      link.href = domain;
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    }
  });
};

// Enhanced asset loading with priority hints
export const optimizeAssetLoading = () => {
  if (typeof document === 'undefined') return;

  // Set fetchpriority for critical images above the fold
  document.querySelectorAll('img').forEach(img => {
    // Check if image is likely above the fold (simplified heuristic)
    const rect = img.getBoundingClientRect();
    if (rect.top < window.innerHeight && !img.hasAttribute('fetchpriority')) {
      img.fetchPriority = 'high';
    }
  });
  
  // Implement lazy loading for below-fold images if not already set
  document.querySelectorAll('img').forEach(img => {
    if (!img.loading) img.loading = 'lazy';
    if (!img.decoding) img.decoding = 'async';
  });
};

// Configure client-side cache headers through service worker
export const setupClientCaching = () => {
  // Register service worker if browser supports it
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch(error => {
        console.error('ServiceWorker registration failed:', error);
      });
    });
  }
};

// Prefetch future navigation routes
export const prefetchCriticalRoutes = (routes: string[]) => {
  if (typeof document === 'undefined') return;
  
  // Add slight delay to not compete with initial page resources
  setTimeout(() => {
    routes.forEach(route => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = route;
      document.head.appendChild(link);
    });
  }, 2000);
};
