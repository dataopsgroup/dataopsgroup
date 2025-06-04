
/**
 * Lazy loading implementation for intersection-based content loading
 */

import { UNIVERSAL_CONFIG } from './config';

let interactionObserver: IntersectionObserver | null = null;

/**
 * Enhanced lazy loading observer with consistent threshold
 */
export const setupLazyLoadingObserver = () => {
  if (!('IntersectionObserver' in window)) return;
  
  try {
    interactionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            
            // Universal lazy loading trigger
            if (element.hasAttribute('data-lazy')) {
              loadLazyElement(element);
              interactionObserver?.unobserve(element);
            }
          }
        });
      },
      {
        rootMargin: '150px', // Universal margin for all devices
        threshold: UNIVERSAL_CONFIG.lazyThreshold
      }
    );
    
    // Observe all lazy elements universally
    document.querySelectorAll('[data-lazy]').forEach(element => {
      interactionObserver?.observe(element);
    });
    
  } catch (error) {
    console.error('Failed to setup lazy loading observer:', error);
  }
};

/**
 * Enhanced lazy element loading
 */
export const loadLazyElement = (element: HTMLElement) => {
  try {
    const src = element.getAttribute('data-src');
    const srcset = element.getAttribute('data-srcset');
    
    if (element.tagName === 'IMG') {
      const img = element as HTMLImageElement;
      if (srcset) img.srcset = srcset;
      if (src) img.src = src;
    } else if (element.tagName === 'SOURCE') {
      const source = element as HTMLSourceElement;
      if (srcset) source.srcset = srcset;
      if (src) source.src = src;
    }
    
    element.setAttribute('data-loaded', 'true');
    element.removeAttribute('data-lazy');
    
  } catch (error) {
    console.error('Failed to load lazy element:', error);
  }
};

/**
 * Enhanced scroll-based optimizations
 */
export const setupScrollOptimizations = () => {
  let scrollTimeout: ReturnType<typeof setTimeout>;
  let isScrolling = false;
  
  const handleScroll = () => {
    if (!isScrolling) {
      isScrolling = true;
      
      // Universal scroll optimizations
      requestAnimationFrame(() => {
        // Lazy load visible elements
        document.querySelectorAll('[data-lazy]:not([data-loaded])').forEach(element => {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight + 300) { // Universal threshold
            loadLazyElement(element as HTMLElement);
          }
        });
        
        isScrolling = false;
      });
    }
    
    // Universal scroll end detection
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      // Prefetch next likely content after scroll stops
      prefetchNextLikelyContent();
    }, 150);
  };
  
  window.addEventListener('scroll', handleScroll, { passive: true });
};

/**
 * Enhanced next content prefetching
 */
const prefetchNextLikelyContent = () => {
  // Universal logic for predicting next content
  const currentPath = window.location.pathname;
  const nextRoutes: string[] = [];
  
  if (currentPath === '/') {
    nextRoutes.push('/services', '/insights', '/contact');
  } else if (currentPath.startsWith('/services')) {
    nextRoutes.push('/contact', '/insights');
  } else if (currentPath.startsWith('/insights')) {
    nextRoutes.push('/services', '/contact');
  }
  
  nextRoutes.forEach(route => {
    if (!preloadedRoutes.has(route)) {
      setTimeout(() => preloadRoute(window.location.origin + route), 100);
    }
  });
};

// Import from route-preloading module
import { preloadedRoutes, preloadRoute } from './route-preloading';

/**
 * Enhanced cleanup function for lazy loading
 */
export const cleanupLazyLoading = () => {
  if (interactionObserver) {
    interactionObserver.disconnect();
    interactionObserver = null;
  }
};
