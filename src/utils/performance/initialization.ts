/**
 * Performance optimization initialization - Updated with mobile-first approach
 * Enhanced for PSI mobile requirements
 */

import { 
  optimizeResourcePriorities, 
  preloadCriticalResources 
} from './resource-optimization';
import { removeUnusedCSS } from './css-optimization';
import { optimizeThirdPartyScripts, removeModernBrowserPolyfills } from './script-optimization';
import { preventLayoutShift } from './layout-optimization';
import { optimizeFontLoading } from './font-optimization';
import { monitorPerformance } from './monitoring';
import { initMobileOptimizations, isMobileDevice, optimizeMobileFonts } from './mobile-optimization';
import { initMobileCSSOptimizations } from './mobile-css-optimization';

// Initialize all performance optimizations with aggressive mobile-first approach
export const initializePerformanceOptimizations = () => {
  // Detect device type early
  const isMobile = isMobileDevice();
  
  if (isMobile) {
    // Mobile-specific initialization order for optimal LCP
    initializeMobileOptimizations();
  } else {
    // Desktop/tablet initialization
    initializeDesktopOptimizations();
  }
};

// Mobile-specific initialization for PSI optimization
const initializeMobileOptimizations = () => {
  // Phase 1: Critical resource optimization (immediate)
  optimizeResourcePriorities();
  optimizeMobileFonts();
  
  // Phase 2: Remove unnecessary code (immediate)
  removeModernBrowserPolyfills();
  removeUnusedCSS();
  
  // Phase 3: CSS optimization (immediate)
  initMobileCSSOptimizations();
  
  // Phase 4: Layout optimization (immediate)
  preventLayoutShift();
  
  // Phase 5: Font optimization (immediate)
  optimizeFontLoading();
  
  // Phase 6: Script optimization (deferred)
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      optimizeThirdPartyScripts();
    });
  } else {
    optimizeThirdPartyScripts();
  }
  
  // Phase 7: Mobile-specific optimizations (deferred)
  initMobileOptimizations();
  
  // Phase 8: Performance monitoring (low priority)
  setTimeout(() => {
    monitorPerformance();
  }, 3000);
  
  // Mark mobile optimization complete
  if (window.performance?.mark) {
    window.performance.mark('mobile-perf-optimization-complete');
  }
};

// Desktop initialization (unchanged)
const initializeDesktopOptimizations = () => {
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
