
/**
 * Asset loading optimization module for improved resource loading
 */

// Enhanced asset loading with priority hints
export const optimizeAssetLoading = () => {
  if (typeof document === 'undefined') return;

  // Set fetchpriority for images based on viewport position
  document.querySelectorAll('img').forEach(img => {
    const rect = img.getBoundingClientRect();
    
    // Critical above-the-fold images
    if (rect.top < window.innerHeight) {
      if (!img.hasAttribute('fetchpriority')) {
        img.fetchPriority = 'high';
      }
      
      // Add loading=eager for visible images
      if (!img.hasAttribute('loading')) {
        img.loading = 'eager';
      }
    } else {
      // Below-fold images
      if (!img.hasAttribute('fetchpriority')) {
        img.fetchPriority = 'low';
      }
      
      // Add loading=lazy for below-fold images
      if (!img.hasAttribute('loading')) {
        img.loading = 'lazy';
      }
    }
    
    // Ensure all images have decoding attribute
    if (!img.hasAttribute('decoding')) {
      img.decoding = rect.top < window.innerHeight ? 'sync' : 'async';
    }
  });

  // Prioritize script loading
  document.querySelectorAll('script').forEach(script => {
    const src = script.getAttribute('src') || '';
    
    // Mark analytics and tracking scripts as low priority
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
    
    // First-party scripts should be higher priority than third-party
    if (src && !src.includes('//') && !src.includes('://')) {
      script.setAttribute('fetchpriority', 'high');
    }
  });

  // Add version cache busting to dynamic resources
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

// Optimize resource order - simplified to avoid duplicate variable declarations
export const optimizeResourceOrder = () => {
  if (typeof document === 'undefined') return;
  
  // Skip if already optimized to prevent duplicate execution
  if ((window as any).__RESOURCE_ORDER_OPTIMIZED__) {
    return;
  }
  
  // Mark as optimized
  (window as any).__RESOURCE_ORDER_OPTIMIZED__ = true;
  
  // Simple resource prioritization without complex reordering
  document.querySelectorAll('script').forEach(script => {
    const src = script.getAttribute('src') || '';
    
    // Set appropriate loading priorities
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
