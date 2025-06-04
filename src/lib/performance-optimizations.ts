/**
 * Performance optimization utilities for improved asset loading and caching
 * 
 * This is now a facade module that re-exports all performance optimization
 * functions from their respective modules and coordinates initialization
 */

// Import all performance optimization functions with error handling
const loadPerformanceModules = async () => {
  try {
    const modules = await Promise.allSettled([
      import('./performance/resource-hints'),
      import('./performance/asset-loading'),
      import('./performance/caching'),
      import('./performance/prefetching'),
      import('./performance/interaction'),
      import('./performance/js-optimization')
    ]);
    
    return modules.map((result, index) => {
      if (result.status === 'rejected') {
        console.warn(`Failed to load performance module ${index}:`, result.reason);
        return null;
      }
      return result.value;
    });
  } catch (error) {
    console.error('Failed to load performance modules:', error);
    return [];
  }
};

/**
 * Initialize all performance optimizations in the correct order with error handling
 */
export const initializeAllOptimizations = async () => {
  if (typeof window === 'undefined') return;
  
  try {
    const modules = await loadPerformanceModules();
    const [resourceHints, assetLoading, caching, prefetching, interaction, jsOptimization] = modules;
    
    // Phase 1: Critical resource hints (highest priority)
    if (resourceHints) {
      try {
        resourceHints.setupResourceHints?.();
        resourceHints.setupDNSPrefetch?.();
      } catch (error) {
        console.warn('Failed to setup resource hints:', error);
      }
    }
    
    // Phase 2: JavaScript optimizations
    if (jsOptimization) {
      try {
        jsOptimization.initializeJSOptimizations?.();
      } catch (error) {
        console.warn('Failed to initialize JS optimizations:', error);
      }
    }
    
    // Phase 3: Asset loading optimizations
    if (assetLoading) {
      try {
        assetLoading.optimizeAssetLoading?.();
        assetLoading.optimizeResourceOrder?.();
      } catch (error) {
        console.warn('Failed to optimize asset loading:', error);
      }
    }
    
    // Phase 4: Caching setup
    if (caching) {
      try {
        caching.setupClientCaching?.();
      } catch (error) {
        console.warn('Failed to setup caching:', error);
      }
    }
    
    // Phase 5: Interaction-based loading (lowest priority)
    setTimeout(() => {
      if (interaction) {
        try {
          interaction.setupInteractionBasedLoading?.();
        } catch (error) {
          console.warn('Failed to setup interaction-based loading:', error);
        }
      }
    }, 100);
    
    console.log('Performance optimizations initialized successfully');
  } catch (error) {
    console.error('Failed to initialize performance optimizations:', error);
  }
};

// Re-export functions with fallbacks
export const setupResourceHints = () => {
  try {
    import('./performance/resource-hints').then(module => module.setupResourceHints?.());
  } catch (error) {
    console.warn('Failed to setup resource hints:', error);
  }
};

export const setupDNSPrefetch = () => {
  try {
    import('./performance/resource-hints').then(module => module.setupDNSPrefetch?.());
  } catch (error) {
    console.warn('Failed to setup DNS prefetch:', error);
  }
};

export const optimizeAssetLoading = () => {
  try {
    import('./performance/asset-loading').then(module => module.optimizeAssetLoading?.());
  } catch (error) {
    console.warn('Failed to optimize asset loading:', error);
  }
};

export const optimizeResourceOrder = () => {
  try {
    import('./performance/asset-loading').then(module => module.optimizeResourceOrder?.());
  } catch (error) {
    console.warn('Failed to optimize resource order:', error);
  }
};

export const setupClientCaching = () => {
  try {
    import('./performance/caching').then(module => module.setupClientCaching?.());
  } catch (error) {
    console.warn('Failed to setup client caching:', error);
  }
};

export const fetchWithCaching = () => {
  try {
    import('./performance/caching').then(module => module.fetchWithCaching?.());
  } catch (error) {
    console.warn('Failed to setup fetch with caching:', error);
  }
};

export const prefetchCriticalRoutes = () => {
  try {
    import('./performance/prefetching').then(module => module.prefetchCriticalRoutes?.());
  } catch (error) {
    console.warn('Failed to prefetch critical routes:', error);
  }
};

export const prerenderNextLikelyPage = () => {
  try {
    import('./performance/prefetching').then(module => module.prerenderNextLikelyPage?.());
  } catch (error) {
    console.warn('Failed to prerender next likely page:', error);
  }
};

export const setupInteractionBasedLoading = () => {
  try {
    import('./performance/interaction').then(module => module.setupInteractionBasedLoading?.());
  } catch (error) {
    console.warn('Failed to setup interaction based loading:', error);
  }
};

export const initializeJSOptimizations = () => {
  try {
    import('./performance/js-optimization').then(module => module.initializeJSOptimizations?.());
  } catch (error) {
    console.warn('Failed to initialize JS optimizations:', error);
  }
};

export const deferNonCriticalJS = () => {
  try {
    import('./performance/js-optimization').then(module => module.deferNonCriticalJS?.());
  } catch (error) {
    console.warn('Failed to defer non-critical JS:', error);
  }
};

export const optimizeComponentRendering = () => {
  try {
    import('./performance/js-optimization').then(module => module.optimizeComponentRendering?.());
  } catch (error) {
    console.warn('Failed to optimize component rendering:', error);
  }
};
