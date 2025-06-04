
/**
 * JavaScript execution optimization for improved performance scores
 */

// Extend window interface for our custom properties
declare global {
  interface Window {
    __analytics_initialized?: boolean;
    __performanceUtils?: {
      progressiveHydration: (element: Element, callback: () => void) => void;
      scheduleTask: (callback: () => void, priority?: string) => void;
    };
    scheduler?: {
      postTask: (callback: () => void, options?: { priority: string }) => void;
    };
  }
}

/**
 * Defer non-critical JavaScript execution until after page load
 */
export const deferNonCriticalJS = () => {
  if (typeof window === 'undefined') return;
  
  // Use requestIdleCallback for non-critical operations
  const idleCallback = window.requestIdleCallback || ((cb) => setTimeout(cb, 1));
  
  // Defer analytics initialization
  idleCallback(() => {
    initializeAnalytics();
  });
  
  // Defer third-party script loading
  idleCallback(() => {
    loadThirdPartyScripts();
  });
  
  // Defer non-critical component initialization
  idleCallback(() => {
    initializeNonCriticalComponents();
  });
};

/**
 * Initialize analytics after idle time
 */
const initializeAnalytics = () => {
  // Defer GA and other analytics
  if (window.gtag && !window.__analytics_initialized) {
    window.__analytics_initialized = true;
    console.log('Analytics initialized during idle time');
  }
};

/**
 * Load third-party scripts during idle time
 */
const loadThirdPartyScripts = () => {
  const scripts = [
    // Add any third-party scripts that aren't critical
  ];
  
  scripts.forEach(scriptSrc => {
    const script = document.createElement('script');
    script.src = scriptSrc;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  });
};

/**
 * Initialize non-critical components
 */
const initializeNonCriticalComponents = () => {
  // Initialize components that aren't needed for FCP/LCP
  document.querySelectorAll('[data-defer-init]').forEach(element => {
    const componentType = element.getAttribute('data-component');
    if (componentType) {
      // Initialize specific components
      console.log(`Initializing deferred component: ${componentType}`);
    }
  });
};

/**
 * Optimize component rendering with intelligent batching
 */
export const optimizeComponentRendering = () => {
  // Break up long tasks using scheduler.postTask if available
  if ('scheduler' in window && window.scheduler && 'postTask' in window.scheduler) {
    return (callback: () => void, priority: 'user-blocking' | 'user-visible' | 'background' = 'user-visible') => {
      window.scheduler!.postTask(callback, { priority });
    };
  }
  
  // Fallback to setTimeout for task scheduling
  return (callback: () => void) => {
    setTimeout(callback, 0);
  };
};

/**
 * Progressive hydration for heavy components
 */
export const createProgressiveHydration = () => {
  const observedElements = new WeakSet();
  
  if (typeof IntersectionObserver === 'undefined') {
    return (element: Element, callback: () => void) => callback();
  }
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !observedElements.has(entry.target)) {
        observedElements.add(entry.target);
        const callback = (entry.target as any).__hydrationCallback;
        if (callback) {
          // Use requestIdleCallback for non-blocking hydration
          const idleCallback = window.requestIdleCallback || ((cb) => setTimeout(cb, 1));
          idleCallback(callback);
        }
        observer.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '100px',
    threshold: 0.1
  });
  
  return (element: Element, callback: () => void) => {
    (element as any).__hydrationCallback = callback;
    observer.observe(element);
  };
};

/**
 * Optimize event handler registration
 */
export const optimizeEventHandlers = () => {
  // Use passive event listeners where appropriate
  const passiveEvents = ['scroll', 'wheel', 'touchstart', 'touchmove'];
  
  passiveEvents.forEach(eventType => {
    const originalAddEventListener = EventTarget.prototype.addEventListener;
    EventTarget.prototype.addEventListener = function(type, listener, options) {
      if (passiveEvents.includes(type) && typeof options !== 'object') {
        options = { passive: true };
      } else if (typeof options === 'object' && options !== null && !('passive' in options)) {
        options.passive = true;
      }
      return originalAddEventListener.call(this, type, listener, options);
    };
  });
};

/**
 * Initialize all JavaScript optimizations
 */
export const initializeJSOptimizations = () => {
  // Defer non-critical JavaScript
  deferNonCriticalJS();
  
  // Optimize event handlers
  optimizeEventHandlers();
  
  // Set up progressive hydration
  const progressiveHydration = createProgressiveHydration();
  
  // Make utilities available globally for components
  window.__performanceUtils = {
    progressiveHydration,
    scheduleTask: optimizeComponentRendering()
  };
};
