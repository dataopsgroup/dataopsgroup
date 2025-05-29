
/**
 * Performance optimization utilities for improved asset loading and caching
 * 
 * This is now a facade module that re-exports all performance optimization
 * functions from their respective modules
 */

// Re-export all performance optimization functions
export { setupResourceHints } from './performance/resource-hints';
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
