/**
 * Universal asset loading optimization module
 * Consistent performance optimizations across all devices
 */

/**
 * Optimizes asset loading for images, scripts, and stylesheets.
 * - Sets fetchPriority and loading attributes for images based on viewport position.
 * - Prioritizes analytics and first-party scripts.
 * - Adds cache-busting query params to dynamic resources.
 */
export const optimizeAssetLoading = () => {
  if (typeof document === 'undefined') return;

  // Universal image optimization - consistent across all devices
  document.querySelectorAll('img').forEach(img => {
    const rect = img.getBoundingClientRect();
    
    // Critical above-the-fold images - universal criteria
    if (rect.top < window.innerHeight) {
      if (!img.hasAttribute('fetchpriority')) {
        img.fetchPriority = 'high';
      }
      
      if (!img.hasAttribute('loading')) {
        img.loading = 'eager';
      }
    } else {
      // Below-fold images - universal lazy loading
      if (!img.hasAttribute('fetchpriority')) {
        img.fetchPriority = 'low';
      }
      
      if (!img.hasAttribute('loading')) {
        img.loading = 'lazy';
      }
    }
    
    // Universal decoding strategy
    if (!img.hasAttribute('decoding')) {
      img.decoding = rect.top < window.innerHeight ? 'sync' : 'async';
    }
  });

  // Universal script loading prioritization
  document.querySelectorAll('script').forEach(script => {
    const src = script.getAttribute('src') || '';
    
    // Universal low priority for analytics and tracking scripts
    if (src.includes('analytics') || 
        src.includes('gtag') || 
        src.includes('gtm') || 
        src.includes('hs-script') || 
        src.includes('facebook')) {
      script.setAttribute('fetchpriority', 'low');
      if (!script.hasAttribute('async')) {
        script.async = true;
      }
    }
    
    // Universal high priority for first-party scripts
    if (src && !src.includes('//') && !src.includes('://')) {
      script.setAttribute('fetchpriority', 'high');
    }
  });

  // Universal cache busting for dynamic resources
  document.querySelectorAll('link[href*=".css"], script[src*=".js"]').forEach(element => {
    const url = element.getAttribute('href') || element.getAttribute('src') || '';
    if (url && !url.includes('?v=') && !url.includes('lovable-uploads')) {
      const newUrl = url.includes('?') ? `${url}&v=${window.APP_VERSION || '1.0.0'}` : `${url}?v=${window.APP_VERSION || '1.0.0'}`;
      if (element.tagName === 'LINK') {
        element.setAttribute('href', newUrl);
      } else {
        element.setAttribute('src', newUrl);
      }
    }
  });
};

/**
 * Optimizes the order and priority of resource loading for scripts.
 * Ensures analytics and tracking scripts are deprioritized.
 */
export const optimizeResourceOrder = () => {
  if (typeof document === 'undefined') return;
  
  // Skip if already optimized to prevent duplicate execution
  if ((window as any).__RESOURCE_ORDER_OPTIMIZED__) {
    return;
  }
  
  // Mark as optimized
  (window as any).__RESOURCE_ORDER_OPTIMIZED__ = true;
  
  // Universal resource prioritization - consistent across all devices
  document.querySelectorAll('script').forEach(script => {
    const src = script.getAttribute('src') || '';
    
    // Universal priority settings
    if (src.includes('analytics') || 
        src.includes('gtag') || 
        src.includes('gtm') || 
        src.includes('hs-script') || 
        src.includes('facebook')) {
      script.setAttribute('fetchpriority', 'low');
      if (!script.hasAttribute('async')) {
        script.async = true;
      }
    }
  });
};
