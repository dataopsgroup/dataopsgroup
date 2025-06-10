
/**
 * Main interaction-based loading module that coordinates all sub-modules
 */

import { setupLazyLoadingObserver, setupScrollOptimizations, cleanupLazyLoading } from './lazy-loading';
import { setupInteractionPreloading, setupCriticalResourcePrefetching, cleanupRoutePreloading, preloadedRoutes } from './route-preloading';

let isSetup = false;

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
 * Enhanced cleanup function
 */
export const cleanupInteractionLoading = () => {
  cleanupLazyLoading();
  cleanupRoutePreloading();
  isSetup = false;
};

/**
 * Get current interaction loading status
 */
export const getInteractionLoadingStatus = () => {
  return {
    isSetup,
    preloadedRoutesCount: preloadedRoutes.size,
    observerActive: true // Simplified since we split the observer logic
  };
};
