
/**
 * Enhanced performance initialization - Mobile-first with zero-regression approach
 */

import { optimizeResourcePriorities, preloadCriticalResources } from './resource-optimization';
import { removeUnusedCSS } from './css-optimization';
import { optimizeThirdPartyScripts, removeModernBrowserPolyfills } from './script-optimization';
import { preventLayoutShift } from './layout-optimization';
import { optimizeFontLoading } from './font-optimization';
import { monitorPerformance } from './monitoring';
import { injectCriticalCSS, preloadCriticalFonts, loadNonCriticalCSS } from '../critical-css-enhanced';

// Performance markers for monitoring
const markPerformanceEvent = (eventName: string) => {
  if (window.performance && 'mark' in window.performance) {
    try {
      window.performance.mark(eventName);
    } catch (e) {
      console.debug('Performance marking failed:', eventName);
    }
  }
};

// Enhanced initialization with error recovery
export const initializePerformanceOptimizations = () => {
  markPerformanceEvent('perf-init-start');
  
  try {
    // Immediate critical optimizations
    injectCriticalCSS();
    preloadCriticalFonts();
    
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    
    if (isMobile) {
      initializeMobileOptimizations();
    } else {
      initializeDesktopOptimizations();
    }
    
    markPerformanceEvent('perf-init-complete');
  } catch (error) {
    console.error('Performance optimization initialization failed:', error);
    // Continue with fallback initialization
    initializeFallbackOptimizations();
  }
};

// Ultra-aggressive mobile optimization
const initializeMobileOptimizations = () => {
  markPerformanceEvent('mobile-opt-start');
  
  try {
    // Phase 1: Immediate critical path
    optimizeResourcePriorities();
    removeModernBrowserPolyfills();
    preventLayoutShift();
    
    // Phase 2: Deferred optimizations (after user interaction)
    let hasInteracted = false;
    const mobileInteractionEvents = ['touchstart', 'scroll', 'click'];
    
    const loadMobileDeferred = () => {
      if (hasInteracted) return;
      hasInteracted = true;
      
      setTimeout(() => {
        try {
          removeUnusedCSS();
          optimizeFontLoading();
          loadNonCriticalCSS();
        } catch (error) {
          console.warn('Mobile deferred optimization failed:', error);
        }
      }, 100);
      
      // Phase 3: Third-party scripts (heavily delayed)
      setTimeout(() => {
        try {
          optimizeThirdPartyScripts();
        } catch (error) {
          console.warn('Mobile script optimization failed:', error);
        }
      }, 2000);
      
      // Phase 4: Monitoring (lowest priority)
      setTimeout(() => {
        try {
          monitorPerformance();
        } catch (error) {
          console.warn('Mobile monitoring failed:', error);
        }
      }, 5000);
    };
    
    // Attach to multiple interaction events
    mobileInteractionEvents.forEach(event => {
      document.addEventListener(event, loadMobileDeferred, { 
        once: true, 
        passive: true 
      });
    });
    
    // Extended fallback for mobile (10 seconds)
    setTimeout(loadMobileDeferred, 10000);
    
    markPerformanceEvent('mobile-opt-complete');
  } catch (error) {
    console.error('Mobile optimization failed:', error);
  }
};

// Desktop optimization (less aggressive)
const initializeDesktopOptimizations = () => {
  markPerformanceEvent('desktop-opt-start');
  
  try {
    // Immediate optimizations
    optimizeResourcePriorities();
    preloadCriticalResources();
    removeUnusedCSS();
    preventLayoutShift();
    optimizeFontLoading();
    loadNonCriticalCSS();

    // Deferred optimizations
    const loadDesktopDeferred = () => {
      setTimeout(() => {
        try {
          optimizeThirdPartyScripts();
        } catch (error) {
          console.warn('Desktop script optimization failed:', error);
        }
      }, 500);
      
      setTimeout(() => {
        try {
          monitorPerformance();
        } catch (error) {
          console.warn('Desktop monitoring failed:', error);
        }
      }, 1000);
    };

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', loadDesktopDeferred, { once: true });
    } else {
      loadDesktopDeferred();
    }
    
    markPerformanceEvent('desktop-opt-complete');
  } catch (error) {
    console.error('Desktop optimization failed:', error);
  }
};

// Fallback initialization if main optimization fails
const initializeFallbackOptimizations = () => {
  try {
    // Only the most basic optimizations
    if (typeof document !== 'undefined') {
      preventLayoutShift();
      
      setTimeout(() => {
        monitorPerformance();
      }, 3000);
    }
  } catch (error) {
    console.error('Fallback optimization failed:', error);
  }
};
