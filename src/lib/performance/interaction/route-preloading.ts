
/**
 * Route preloading functionality for enhanced navigation performance
 */

import { UNIVERSAL_CONFIG } from './config';

export let preloadedRoutes = new Set<string>();

/**
 * Enhanced interaction preloading with universal event handling
 */
export const setupInteractionPreloading = () => {
  // Universal link preloading on interaction
  document.addEventListener('mouseenter', handleLinkPreload, { passive: true, capture: true });
  document.addEventListener('touchstart', handleLinkPreload, { passive: true, capture: true });
  document.addEventListener('focus', handleLinkPreload, { passive: true, capture: true });
  
  // Universal route preloading
  document.addEventListener('mouseover', handleRoutePreload, { passive: true });
  document.addEventListener('touchstart', handleRoutePreload, { passive: true });
};

/**
 * Enhanced link preloading with intelligent route detection and proper type checking
 */
const handleLinkPreload = (event: Event) => {
  // Add proper type checking to prevent "closest is not a function" error
  const target = event.target;
  if (!target || typeof target !== 'object' || !('closest' in target)) return;
  
  const htmlTarget = target as HTMLElement;
  const link = htmlTarget.closest('a[href]') as HTMLAnchorElement;
  
  if (!link || !link.href) return;
  
  // Universal preloading delay
  setTimeout(() => {
    if (document.contains(link)) {
      preloadRoute(link.href);
    }
  }, UNIVERSAL_CONFIG.preloadDelay);
};

/**
 * Enhanced route preloading with caching and proper type checking
 */
const handleRoutePreload = (event: Event) => {
  // Add proper type checking to prevent runtime errors
  const target = event.target;
  if (!target || typeof target !== 'object' || !('closest' in target)) return;
  
  const htmlTarget = target as HTMLElement;
  const link = htmlTarget.closest('a[href]') as HTMLAnchorElement;
  
  if (!link || !link.href || preloadedRoutes.has(link.href)) return;
  
  // Check if it's an internal route
  if (link.hostname === window.location.hostname) {
    preloadRoute(link.href);
  }
};

/**
 * Enhanced route preloading with error handling
 */
export const preloadRoute = (href: string) => {
  if (preloadedRoutes.has(href)) return;
  
  try {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = href;
    link.setAttribute('fetchpriority', 'low');
    
    link.onload = () => {
      preloadedRoutes.add(href);
    };
    
    link.onerror = () => {
      console.warn(`Failed to prefetch route: ${href}`);
    };
    
    document.head.appendChild(link);
    
  } catch (error) {
    console.error('Failed to preload route:', error);
  }
};

/**
 * Enhanced critical resource prefetching
 */
export const setupCriticalResourcePrefetching = () => {
  if (!UNIVERSAL_CONFIG.enablePrefetch) return;
  
  // Universal critical routes for all devices
  const criticalRoutes = ['/contact', '/services', '/insights'];
  
  // Prefetch after initial load
  setTimeout(() => {
    criticalRoutes.forEach(route => {
      if (!preloadedRoutes.has(route)) {
        preloadRoute(window.location.origin + route);
      }
    });
  }, 2000); // Universal 2s delay
};

export const cleanupRoutePreloading = () => {
  preloadedRoutes.clear();
};
