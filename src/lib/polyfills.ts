
/**
 * Polyfill utilities for better browser compatibility
 * This provides modern browser features to older browsers
 */

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

// Polyfill for Element.prototype.matches
if (!Element.prototype.matches) {
  Element.prototype.matches = 
    Element.prototype.matchesSelector || 
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector || 
    Element.prototype.oMatchesSelector || 
    Element.prototype.webkitMatchesSelector ||
    function(s) {
      const matches = (this.document || this.ownerDocument).querySelectorAll(s);
      let i = matches.length;
      while (--i >= 0 && matches.item(i) !== this) {}
      return i > -1;
    };
}

// Polyfill for Element.prototype.closest
if (!Element.prototype.closest) {
  Element.prototype.closest = function(s) {
    let el = this;
    
    do {
      if (el.matches(s)) return el;
      el = el.parentElement || el.parentNode as Element;
    } while (el !== null && el.nodeType === 1);
    
    return null;
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
  
  // Fix the Element interface to avoid duplicate declarations
  interface Element {
    // Using optional modifiers for all vendor prefixed methods to ensure consistent declarations
    matchesSelector?: (selector: string) => boolean;
    mozMatchesSelector?: (selector: string) => boolean;
    msMatchesSelector?: (selector: string) => boolean;
    oMatchesSelector?: (selector: string) => boolean;
    webkitMatchesSelector?: (selector: string) => boolean;
  }
}

export {};
