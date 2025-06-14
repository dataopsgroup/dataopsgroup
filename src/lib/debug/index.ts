
/**
 * Debug utilities initialization
 */

import { navigationTracker, logNavigationState } from './navigation-tracker';
import { clearAllCaches } from './cache-manager';
import { logRouteHealth } from './route-health-checker';

/**
 * Initialize all debugging utilities
 */
export const initializeDebugTools = () => {
  if (typeof window === 'undefined') return;
  
  console.log('🔧 Initializing debug tools...');
  
  // Set up global debug functions
  (window as any).debugNavigation = {
    logState: logNavigationState,
    clearCaches: clearAllCaches,
    checkRoutes: logRouteHealth,
    getEvents: () => navigationTracker.getEvents(),
    getFailedNavigations: () => navigationTracker.getFailedNavigations()
  };
  
  // Log initial state
  setTimeout(() => {
    logNavigationState();
    logRouteHealth();
  }, 1000);
  
  console.log('✅ Debug tools initialized. Use window.debugNavigation for manual debugging.');
};

// Export all debug utilities
export * from './navigation-tracker';
export * from './cache-manager';
export * from './route-health-checker';
