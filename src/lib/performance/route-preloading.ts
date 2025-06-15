
/**
 * Route preloading utilities with intelligent prefetching
 */

export const preloadedRoutes = new Set<string>();
let preloadObserver: IntersectionObserver | null = null;

export const setupInteractionPreloading = (): void => {
  if (typeof window === 'undefined') return;
  
  // Universal hover-based preloading
  document.addEventListener('mouseover', (event) => {
    const link = (event.target as Element).closest('a[href^="/"]') as HTMLAnchorElement;
    if (link && !preloadedRoutes.has(link.href)) {
      preloadRoute(link.href);
    }
  });
  
  // Universal touch-based preloading for mobile
  document.addEventListener('touchstart', (event) => {
    const link = (event.target as Element).closest('a[href^="/"]') as HTMLAnchorElement;
    if (link && !preloadedRoutes.has(link.href)) {
      preloadRoute(link.href);
    }
  }, { passive: true });
};

export const setupCriticalResourcePrefetching = (): void => {
  if (typeof window === 'undefined') return;
  
  // Universal viewport-based preloading
  preloadObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const link = entry.target as HTMLAnchorElement;
          if (link.href && !preloadedRoutes.has(link.href)) {
            preloadRoute(link.href);
          }
        }
      });
    },
    { rootMargin: '100px' }
  );
  
  // Observe all internal links
  document.querySelectorAll('a[href^="/"]').forEach(link => {
    preloadObserver?.observe(link);
  });
};

const preloadRoute = (href: string): void => {
  if (preloadedRoutes.has(href)) return;
  
  preloadedRoutes.add(href);
  
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  document.head.appendChild(link);
  
  console.log('🔗 Preloaded route:', href);
};

export const cleanupRoutePreloading = (): void => {
  if (preloadObserver) {
    preloadObserver.disconnect();
    preloadObserver = null;
  }
  preloadedRoutes.clear();
};
