/**
 * Resource optimization utilities for critical resource management
 * Enhanced for mobile PSI requirements
 */

// Critical resource optimization with mobile-first approach
export const optimizeResourcePriorities = () => {
  if (typeof document === 'undefined') return;

  const isMobile = window.innerWidth < 768;

  // Mark critical LCP images with high priority
  const lcpImages = document.querySelectorAll('img[data-lcp="true"], .hero-section img');
  lcpImages.forEach(img => {
    if (img instanceof HTMLImageElement) {
      img.setAttribute('fetchpriority', 'high');
      img.loading = 'eager';
      img.decoding = 'sync';
    }
  });

  // Mobile-specific script optimization
  const scripts = document.querySelectorAll('script[src]:not([async]):not([defer])');
  scripts.forEach(script => {
    const src = script.getAttribute('src') || '';
    
    if (isMobile) {
      // Much more aggressive deferral for mobile
      if (src.includes('analytics') || 
          src.includes('gtag') || 
          src.includes('hs-script') || 
          src.includes('gpteng.co') ||
          src.includes('facebook') ||
          src.includes('twitter') ||
          src.includes('botpress')) {
        
        // Remove the script entirely on mobile - will be loaded later if needed
        script.remove();
        return;
      }
    } else {
      // Desktop behavior unchanged
      if (src.includes('analytics') || 
          src.includes('gtag') || 
          src.includes('hs-script') || 
          src.includes('facebook') ||
          src.includes('twitter') ||
          src.includes('botpress')) {
        script.setAttribute('defer', 'true');
        script.setAttribute('fetchpriority', 'low');
      }
    }
  });
};

// Enhanced critical resource preloading - mobile-first approach
export const preloadCriticalResources = () => {
  if (typeof document === 'undefined') return;

  const isMobile = window.innerWidth < 768;
  const isDesktop = window.innerWidth >= 1024;
  
  // Mobile-first critical resources - minimal set
  const criticalResources = [];
  
  // Only preload essential Inter font for mobile
  if (isMobile) {
    criticalResources.push({
      href: '/fonts/inter-subset/inter-latin-400-normal.woff2', 
      as: 'font',
      type: 'font/woff2',
      crossorigin: 'anonymous',
      fetchpriority: 'high'
    });
    
    // Preload Inter 600 for headings on mobile
    criticalResources.push({
      href: '/fonts/inter-subset/inter-latin-600-normal.woff2', 
      as: 'font',
      type: 'font/woff2',
      crossorigin: 'anonymous',
      fetchpriority: 'high'
    });
  } else {
    // Desktop gets more resources including hero image
    criticalResources.push(
      { 
        href: '/fonts/inter-subset/inter-latin-400-normal.woff2', 
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous',
        fetchpriority: 'high'
      }
    );
    
    if (isDesktop) {
      criticalResources.unshift({
        href: '/lovable-uploads/dda96630-3254-4551-8fe9-33127763c436.png', 
        as: 'image',
        type: 'image/png',
        crossorigin: 'anonymous',
        fetchpriority: 'high'
      });
    }
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
  
  // Remove non-critical preloads on mobile
  if (isMobile) {
    document.querySelectorAll('link[rel="preload"]').forEach(link => {
      const href = link.getAttribute('href') || '';
      
      // Remove hero image preload on mobile
      if (href.includes('dda96630-3254-4551-8fe9-33127763c436.png') ||
          href.includes('rubik') || 
          href.includes('roboto')) {
        link.remove();
      }
    });
  }
};
