
/**
 * Performance optimization initialization - Main entry point
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

// Initialize all performance optimizations
export const initializePerformanceOptimizations = () => {
  // Run immediately for critical optimizations
  optimizeResourcePriorities();
  removeUnusedCSS();
  preloadCriticalResources();
  preventLayoutShift();
  optimizeFontLoading();

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
