
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
    // TypeScript needs explicit type assertions for vendor-specific properties
    (Element.prototype as any).matchesSelector || 
    (Element.prototype as any).mozMatchesSelector ||
    (Element.prototype as any).msMatchesSelector || 
    (Element.prototype as any).oMatchesSelector || 
    (Element.prototype as any).webkitMatchesSelector ||
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

// Export an empty object to make this a proper module
export {};
