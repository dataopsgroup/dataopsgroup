
/**
 * Enhanced interaction-based loading with balanced optimizations for all devices
 * Implements consistent lazy loading thresholds and intelligent preloading
 */

interface InteractionLoadingConfig {
  lazyThreshold: number;
  preloadDelay: number;
  interactionTypes: string[];
  enablePrefetch: boolean;
}

// Universal configuration for all devices
const UNIVERSAL_CONFIG: InteractionLoadingConfig = {
  lazyThreshold: 0.15, // Consistent 15% threshold for all devices
  preloadDelay: 50, // Universal 50ms delay for smooth interactions
  interactionTypes: ['mouseenter', 'touchstart', 'focus'], // Support both mouse and touch
  enablePrefetch: true
};

let isSetup = false;
let interactionObserver: IntersectionObserver | null = null;
let preloadedRoutes = new Set<string>();

/**
 * Enhanced setup with universal interaction handling
 */
export const setupInteractionBasedLoading = () => {
  if (typeof window === 'undefined' || isSetup) return;
  
  isSetup = true;
  
  // Universal intersection observer for lazy loading
  setupLazyLoadingObserver();
  
  // Universal interaction preloading
  setupInteractionPreloading();
  
  // Universal critical resource prefetching
  setupCriticalResourcePrefetching();
  
  // Enhanced scroll-based optimizations
  setupScrollOptimizations();
};

/**
 * Enhanced lazy loading observer with consistent threshold
 */
const setupLazyLoadingObserver = () => {
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
 * Enhanced interaction preloading with universal event handling
 */
const setupInteractionPreloading = () => {
  // Universal link preloading on interaction
  document.addEventListener('mouseenter', handleLinkPreload, { passive: true, capture: true });
  document.addEventListener('touchstart', handleLinkPreload, { passive: true, capture: true });
  document.addEventListener('focus', handleLinkPreload, { passive: true, capture: true });
  
  // Universal route preloading
  document.addEventListener('mouseover', handleRoutePreload, { passive: true });
  document.addEventListener('touchstart', handleRoutePreload, { passive: true });
};

/**
 * Enhanced link preloading with intelligent route detection
 */
const handleLinkPreload = (event: Event) => {
  const target = event.target as HTMLElement;
  const link = target.closest('a[href]') as HTMLAnchorElement;
  
  if (!link || !link.href) return;
  
  // Universal preloading delay
  setTimeout(() => {
    if (document.contains(link)) {
      preloadRoute(link.href);
    }
  }, UNIVERSAL_CONFIG.preloadDelay);
};

/**
 * Enhanced route preloading with caching
 */
const handleRoutePreload = (event: Event) => {
  const target = event.target as HTMLElement;
  const link = target.closest('a[href]') as HTMLAnchorElement;
  
  if (!link || !link.href || preloadedRoutes.has(link.href)) return;
  
  // Check if it's an internal route
  if (link.hostname === window.location.hostname) {
    preloadRoute(link.href);
  }
};

/**
 * Enhanced critical resource prefetching
 */
const setupCriticalResourcePrefetching = () => {
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

/**
 * Enhanced scroll-based optimizations
 */
const setupScrollOptimizations = () => {
  let scrollTimeout: number;
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
    scrollTimeout = window.setTimeout(() => {
      // Prefetch next likely content after scroll stops
      prefetchNextLikelyContent();
    }, 150);
  };
  
  window.addEventListener('scroll', handleScroll, { passive: true });
};

/**
 * Enhanced lazy element loading
 */
const loadLazyElement = (element: HTMLElement) => {
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
 * Enhanced route preloading with error handling
 */
const preloadRoute = (href: string) => {
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

/**
 * Enhanced cleanup function
 */
export const cleanupInteractionLoading = () => {
  if (interactionObserver) {
    interactionObserver.disconnect();
    interactionObserver = null;
  }
  
  preloadedRoutes.clear();
  isSetup = false;
};

/**
 * Get current interaction loading status
 */
export const getInteractionLoadingStatus = () => {
  return {
    isSetup,
    preloadedRoutesCount: preloadedRoutes.size,
    observerActive: !!interactionObserver
  };
};
