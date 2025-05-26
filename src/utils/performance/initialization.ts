
/**
 * Performance optimization initialization - Simplified for better compatibility
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

// Simplified initialization with better error handling
export const initializePerformanceOptimizations = () => {
  try {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    
    if (isMobile) {
      initializeMobileOptimizations();
    } else {
      initializeDesktopOptimizations();
    }
  } catch (error) {
    console.error('Performance optimization initialization failed:', error);
  }
};

// Mobile initialization
const initializeMobileOptimizations = () => {
  try {
    // Phase 1: Critical optimizations
    optimizeResourcePriorities();
    removeModernBrowserPolyfills();
    removeUnusedCSS();
    
    // Phase 2: Layout and fonts
    preventLayoutShift();
    optimizeFontLoading();
    
    // Phase 3: Deferred optimizations
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        try {
          optimizeThirdPartyScripts();
        } catch (error) {
          console.warn('Script optimization failed:', error);
        }
      });
    } else {
      setTimeout(() => {
        try {
          optimizeThirdPartyScripts();
        } catch (error) {
          console.warn('Script optimization failed:', error);
        }
      }, 100);
    }
    
    // Phase 4: Monitoring
    setTimeout(() => {
      try {
        monitorPerformance();
      } catch (error) {
        console.warn('Performance monitoring failed:', error);
      }
    }, 3000);
    
  } catch (error) {
    console.error('Mobile optimization failed:', error);
  }
};

// Desktop initialization
const initializeDesktopOptimizations = () => {
  try {
    // Immediate optimizations
    optimizeResourcePriorities();
    removeUnusedCSS();
    preloadCriticalResources();
    preventLayoutShift();
    optimizeFontLoading();

    // Deferred optimizations
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        try {
          optimizeThirdPartyScripts();
        } catch (error) {
          console.warn('Script optimization failed:', error);
        }
      });
    } else {
      setTimeout(() => {
        try {
          optimizeThirdPartyScripts();
        } catch (error) {
          console.warn('Script optimization failed:', error);
        }
      }, 100);
    }
    
    // Monitoring
    setTimeout(() => {
      try {
        monitorPerformance();
      } catch (error) {
        console.warn('Performance monitoring failed:', error);
      }
    }, 1000);
    
  } catch (error) {
    console.error('Desktop optimization failed:', error);
  }
};
