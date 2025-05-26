
/**
 * Resource optimization utilities for critical resource management
 */

// Critical resource optimization
export const optimizeResourcePriorities = () => {
  if (typeof document === 'undefined') return;

  // Mark critical LCP images with high priority
  const lcpImages = document.querySelectorAll('img[data-lcp="true"], .hero-section');
  lcpImages.forEach(img => {
    if (img instanceof HTMLImageElement) {
      img.setAttribute('fetchpriority', 'high');
      img.loading = 'eager';
      img.decoding = 'sync';
    }
  });

  // Defer non-critical scripts for better performance
  const scripts = document.querySelectorAll('script[src]:not([async]):not([defer])');
  scripts.forEach(script => {
    const src = script.getAttribute('src') || '';
    
    // Mark analytics and tracking scripts as low priority
    if (src.includes('analytics') || 
        src.includes('gtag') || 
        src.includes('hs-script') || 
        src.includes('facebook') ||
        src.includes('twitter')) {
      script.setAttribute('defer', 'true');
      script.setAttribute('fetchpriority', 'low');
    }
  });
};

// Enhanced critical resource preloading - Updated for consultant background image
export const preloadCriticalResources = () => {
  if (typeof document === 'undefined') return;

  const criticalResources = [
    { 
      href: '/lovable-uploads/afb1ced2-4687-47d3-b600-945954edb0fc.png', 
      as: 'image',
      fetchpriority: 'high'
    },
    { 
      href: '/fonts/inter-subset/inter-latin-400-normal.woff2', 
      as: 'font',
      type: 'font/woff2',
      crossorigin: 'anonymous',
      fetchpriority: 'high'
    }
  ];

  criticalResources.forEach(resource => {
    if (!document.querySelector(`link[href="${resource.href}"]`)) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      
      if (resource.fetchpriority) {
        link.setAttribute('fetchpriority', resource.fetchpriority);
      }
      if (resource.type) {
        link.type = resource.type;
      }
      if (resource.crossorigin) {
        link.crossOrigin = resource.crossorigin;
      }
      
      document.head.appendChild(link);
    }
  });
};
