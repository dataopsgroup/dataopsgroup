
// Polyfill for requestIdleCallback
if (typeof window !== 'undefined' && !window.requestIdleCallback) {
  window.requestIdleCallback = function(cb, options) {
    const start = Date.now();
    return setTimeout(function() {
      cb({
        didTimeout: false,
        timeRemaining: function() {
          return Math.max(0, 50 - (Date.now() - start));
        }
      });
    }, options?.timeout || 1) as unknown as number;
  };
}

// Polyfill for window.cancelIdleCallback
if (typeof window !== 'undefined' && !window.cancelIdleCallback) {
  window.cancelIdleCallback = function(id) {
    clearTimeout(id);
  };
}

// Define the global interfaces for TypeScript
declare global {
  interface Window {
    requestIdleCallback: (
      callback: IdleRequestCallback,
      options?: IdleRequestOptions
    ) => number;
    cancelIdleCallback: (handle: number) => void;
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
    _hsq?: any[];
  }
}

export {};
