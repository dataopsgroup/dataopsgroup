/**
 * Enhanced performance optimization utilities for 90+ PageSpeed score
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

// Remove unused CSS dynamically to improve performance
export const removeUnusedCSS = () => {
  if (typeof document === 'undefined') return;

  // Remove unused framework CSS that may be loaded
  const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
  stylesheets.forEach(link => {
    const href = link.getAttribute('href') || '';
    
    // Remove CSS frameworks we're not actively using
    if (href.includes('bootstrap') || 
        href.includes('foundation') || 
        href.includes('bulma') ||
        href.includes('materialize')) {
      link.remove();
    }
  });
};

// Optimize third-party scripts for better Core Web Vitals
export const optimizeThirdPartyScripts = () => {
  if (typeof document === 'undefined') return;

  // Delay non-critical third-party scripts until user interaction
  const delayThirdParty = () => {
    // Load HubSpot only when needed
    if (!document.querySelector('#hs-script-loader')) {
      const hsScript = document.createElement('script');
      hsScript.src = '//js.hs-scripts.com/21794360.js';
      hsScript.async = true;
      hsScript.defer = true;
      hsScript.setAttribute('fetchpriority', 'low');
      document.body.appendChild(hsScript);
    }
  };

  // Delay until user interaction or after 2 seconds (reduced from 3s)
  let hasInteracted = false;
  const interactionEvents = ['mousedown', 'touchstart', 'keydown', 'scroll'];
  
  const loadDelayedScripts = () => {
    if (!hasInteracted) {
      hasInteracted = true;
      delayThirdParty();
    }
  };

  interactionEvents.forEach(event => {
    window.addEventListener(event, loadDelayedScripts, { once: true, passive: true });
  });

  // Reduced fallback timeout for better UX
  setTimeout(loadDelayedScripts, 2000);
};

// Enhanced critical resource preloading - Updated for background image
export const preloadCriticalResources = () => {
  if (typeof document === 'undefined') return;

  const criticalResources = [
    { 
      href: '/lovable-uploads/98b80390-1e73-4256-a9fe-fc237c118c8b.png', 
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

// Enhanced CLS prevention for background image hero
export const preventLayoutShift = () => {
  if (typeof document === 'undefined') return;

  // Set explicit aspect ratios for images without dimensions
  const images = document.querySelectorAll('img:not([width]):not([height]):not([style*="aspect-ratio"])');
  images.forEach(img => {
    if (img instanceof HTMLImageElement) {
      img.style.aspectRatio = '16/9'; // Default fallback
      img.style.objectFit = 'contain';
    }
  });

  // Reserve space for hero section to prevent layout shift
  const heroSection = document.querySelector('.hero-section');
  if (heroSection instanceof HTMLElement && !heroSection.style.minHeight) {
    heroSection.style.minHeight = '80vh';
  }

  // Reserve space for dynamic content to prevent layout shift
  const dynamicElements = document.querySelectorAll('[data-dynamic="true"]');
  dynamicElements.forEach(element => {
    if (element instanceof HTMLElement && !element.style.minHeight) {
      element.style.minHeight = '200px';
    }
  });
};

// Optimize font loading for better FCP
export const optimizeFontLoading = () => {
  if (typeof document === 'undefined') return;

  // Add font-display: swap to improve font loading performance
  const style = document.createElement('style');
  style.textContent = `
    @font-face {
      font-family: 'Roboto';
      font-display: swap;
    }
    @font-face {
      font-family: 'Rubik';
      font-display: swap;
    }
  `;
  document.head.appendChild(style);
};

// Initialize all performance optimizations
export const initializePerformanceOptimizations = () => {
  // Run immediately for critical optimizations
  optimizeResourcePriorities();
  removeUnusedCSS();
  preloadCriticalResources();
  preventLayoutShift();
  optimizeFontLoading();

  // Run after DOM is ready for script optimizations
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      optimizeThirdPartyScripts();
    });
  } else {
    optimizeThirdPartyScripts();
  }
  
  // Monitor performance and log metrics
  if (window.performance && 'getEntriesByType' in window.performance) {
    setTimeout(() => {
      const navigation = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigation) {
        const fcp = navigation.loadEventEnd - navigation.fetchStart;
        console.log(`Performance: First Contentful Paint: ${Math.round(fcp)}ms`);
        
        // Report to analytics if available
        if (window.gtag && fcp > 0) {
          window.gtag('event', 'page_performance', {
            metric_name: 'FCP',
            metric_value: Math.round(fcp),
            page_path: window.location.pathname
          });
        }
      }
    }, 1000);
  }
};
