
/**
 * Performance optimization utilities for improved asset loading and caching
 * Enhanced with device-aware optimizations for mobile vs desktop
 */

/**
 * Initialize all performance optimizations in the correct order with error handling
 */
export const initializeAllOptimizations = async () => {
  if (typeof window === 'undefined') return;
  
  try {
    // Detect device type for targeted optimizations
    const deviceType = window.innerWidth < 768 ? 'mobile' : window.innerWidth < 1024 ? 'tablet' : 'desktop';
    console.log(`🎯 Initializing ${deviceType} optimizations`);
    
    // Phase 1: Critical resource hints (highest priority)
    try {
      const { setupResourceHints, setupDNSPrefetch } = await import('./performance/resource-hints');
      setupResourceHints();
      setupDNSPrefetch();
    } catch (error) {
      console.warn('Failed to setup resource hints:', error);
    }
    
    // Phase 2: Device-specific JavaScript optimizations
    try {
      const { initializeJSOptimizations } = await import('./performance/js-optimization');
      initializeJSOptimizations();
    } catch (error) {
      console.warn('Failed to initialize JS optimizations:', error);
    }
    
    // Phase 3: Asset loading optimizations (device-aware)
    try {
      const { optimizeAssetLoading, optimizeResourceOrder } = await import('./performance/asset-loading');
      optimizeAssetLoading();
      optimizeResourceOrder();
    } catch (error) {
      console.warn('Failed to optimize asset loading:', error);
    }
    
    // Phase 4: Caching setup (lighter for mobile)
    try {
      const { setupClientCaching } = await import('./performance/caching');
      setupClientCaching();
    } catch (error) {
      console.warn('Failed to setup caching:', error);
    }
    
    // Phase 5: Interaction-based loading (device-specific timing)
    const interactionDelay = deviceType === 'mobile' ? 200 : 100;
    setTimeout(() => {
      import('./performance/interaction').then(({ setupInteractionBasedLoading }) => {
        try {
          setupInteractionBasedLoading();
        } catch (error) {
          console.warn('Failed to setup interaction-based loading:', error);
        }
      }).catch(error => {
        console.warn('Failed to load interaction module:', error);
      });
    }, interactionDelay);
    
    console.log(`✅ ${deviceType} performance optimizations initialized successfully`);
  } catch (error) {
    console.error('Failed to initialize performance optimizations:', error);
  }
};

// Re-export functions with direct imports and device awareness
export const setupResourceHints = async () => {
  try {
    const { setupResourceHints: setup } = await import('./performance/resource-hints');
    setup();
  } catch (error) {
    console.warn('Failed to setup resource hints:', error);
  }
};

export const setupDNSPrefetch = async () => {
  try {
    const { setupDNSPrefetch: setup } = await import('./performance/resource-hints');
    setup();
  } catch (error) {
    console.warn('Failed to setup DNS prefetch:', error);
  }
};

export const optimizeAssetLoading = async () => {
  try {
    const { optimizeAssetLoading: optimize } = await import('./performance/asset-loading');
    optimize();
  } catch (error) {
    console.warn('Failed to optimize asset loading:', error);
  }
};

export const optimizeResourceOrder = async () => {
  try {
    const { optimizeResourceOrder: optimize } = await import('./performance/asset-loading');
    optimize();
  } catch (error) {
    console.warn('Failed to optimize resource order:', error);
  }
};

export const setupClientCaching = async () => {
  try {
    const { setupClientCaching: setup } = await import('./performance/caching');
    setup();
  } catch (error) {
    console.warn('Failed to setup client caching:', error);
  }
};

export const fetchWithCaching = async (url: string, options?: RequestInit) => {
  try {
    const { fetchWithCaching: fetch } = await import('./performance/caching');
    return fetch(url, options || {});
  } catch (error) {
    console.warn('Failed to setup fetch with caching:', error);
    return fetch(url, options);
  }
};

export const prefetchCriticalRoutes = async (routes: string[]) => {
  try {
    const { prefetchCriticalRoutes: prefetch } = await import('./performance/prefetching');
    prefetch(routes);
  } catch (error) {
    console.warn('Failed to prefetch critical routes:', error);
  }
};

export const prerenderNextLikelyPage = async () => {
  try {
    const { prerenderNextLikelyPage: prerender } = await import('./performance/prefetching');
    prerender();
  } catch (error) {
    console.warn('Failed to prerender next likely page:', error);
  }
};

export const setupInteractionBasedLoading = async () => {
  try {
    const { setupInteractionBasedLoading: setup } = await import('./performance/interaction');
    setup();
  } catch (error) {
    console.warn('Failed to setup interaction based loading:', error);
  }
};

export const initializeJSOptimizations = async () => {
  try {
    const { initializeJSOptimizations: init } = await import('./performance/js-optimization');
    init();
  } catch (error) {
    console.warn('Failed to initialize JS optimizations:', error);
  }
};

export const deferNonCriticalJS = async () => {
  try {
    const { deferNonCriticalJS: defer } = await import('./performance/js-optimization');
    defer();
  } catch (error) {
    console.warn('Failed to defer non-critical JS:', error);
  }
};

export const optimizeComponentRendering = async () => {
  try {
    const { optimizeComponentRendering: optimize } = await import('./performance/js-optimization');
    return optimize();
  } catch (error) {
    console.warn('Failed to optimize component rendering:', error);
    return (callback: () => void) => setTimeout(callback, 0);
  }
};
