
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
        src.includes('twitter') ||
        src.includes('botpress')) {
      script.setAttribute('defer', 'true');
      script.setAttribute('fetchpriority', 'low');
    }
  });
};

// Enhanced critical resource preloading - mobile-first approach
export const preloadCriticalResources = () => {
  if (typeof document === 'undefined') return;

  // Only preload hero image on desktop devices
  const isDesktop = window.innerWidth >= 1024;
  
  const criticalResources = [
    { 
      href: '/fonts/inter-subset/inter-latin-400-normal.woff2', 
      as: 'font',
      type: 'font/woff2',
      crossorigin: 'anonymous',
      fetchpriority: 'high'
    }
  ];

  // Add hero image only for desktop
  if (isDesktop) {
    criticalResources.unshift({
      href: '/lovable-uploads/dda96630-3254-4551-8fe9-33127763c436.png', 
      as: 'image',
      type: 'image/png',
      crossorigin: 'anonymous',
      fetchpriority: 'high'
    });
  }

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
