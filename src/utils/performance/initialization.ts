
/**
 * Performance optimization initialization - Updated with mobile-first approach
 */

import { 
  optimizeResourcePriorities, 
  preloadCriticalResources 
} from './resource-optimization';
import { removeUnusedCSS } from './css-optimization';
import { optimizeThirdPartyScripts } from './script-optimization';
import { preventLayoutShift } from './layout-optimization';
import { optimizeFontLoading } from './font-optimization';
import { monitorPerformance } from './monitoring';
import { initMobileOptimizations, isMobileDevice } from './mobile-optimization';

// Initialize all performance optimizations with mobile-first approach
export const initializePerformanceOptimizations = () => {
  // Run immediately for critical optimizations
  optimizeResourcePriorities();
  removeUnusedCSS();
  preloadCriticalResources();
  preventLayoutShift();
  optimizeFontLoading();

  // Initialize mobile-specific optimizations
  if (isMobileDevice()) {
    initMobileOptimizations();
  }

  // Run after DOM is ready for script optimizations
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      optimizeThirdPartyScripts();
    });
  } else {
    optimizeThirdPartyScripts();
  }
  
  // Monitor performance and log metrics
  monitorPerformance();
};
