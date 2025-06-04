
/**
 * Performance optimization utilities for improved asset loading and caching
 * 
 * This is now a facade module that re-exports all performance optimization
 * functions from their respective modules and coordinates initialization
 */

// Re-export all performance optimization functions
export { setupResourceHints, setupDNSPrefetch } from './performance/resource-hints';
export { 
  optimizeAssetLoading, 
  optimizeResourceOrder
} from './performance/asset-loading';
export { 
  setupClientCaching, 
  fetchWithCaching 
} from './performance/caching';
export { 
  prefetchCriticalRoutes, 
  prerenderNextLikelyPage 
} from './performance/prefetching';
export { 
  setupInteractionBasedLoading 
} from './performance/interaction-loading';
export { 
  initializeJSOptimizations,
  deferNonCriticalJS,
  optimizeComponentRendering
} from './performance/js-optimization';

/**
 * Initialize all performance optimizations in the correct order
 */
export const initializeAllOptimizations = () => {
  if (typeof window === 'undefined') return;
  
  // Phase 1: Critical resource hints (highest priority)
  setupResourceHints();
  setupDNSPrefetch();
  
  // Phase 2: JavaScript optimizations
  initializeJSOptimizations();
  
  // Phase 3: Asset loading optimizations
  optimizeAssetLoading();
  optimizeResourceOrder();
  
  // Phase 4: Caching setup
  setupClientCaching();
  
  // Phase 5: Interaction-based loading (lowest priority)
  setTimeout(() => {
    setupInteractionBasedLoading();
  }, 100);
  
  console.log('Performance optimizations initialized');
};
