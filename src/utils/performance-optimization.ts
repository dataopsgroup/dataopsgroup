
/**
 * Performance optimization utilities for PageSpeed improvements
 */

// Optimize resource loading priorities
export const optimizeResourcePriorities = () => {
  if (typeof document === 'undefined') return;

  // Mark critical images with high priority
  const criticalImages = document.querySelectorAll('img[data-critical="true"]');
  criticalImages.forEach(img => {
    if (img instanceof HTMLImageElement) {
      img.setAttribute('fetchpriority', 'high');
      img.loading = 'eager';
      img.decoding = 'sync';
    }
  });

  // Defer non-critical scripts
  const scripts = document.querySelectorAll('script[src]');
  scripts.forEach(script => {
    const src = script.getAttribute('src') || '';
    
    // Mark analytics and tracking scripts as low priority
    if (src.includes('analytics') || src.includes('gtag') || src.includes('facebook')) {
      script.setAttribute('defer', 'true');
      script.setAttribute('fetchpriority', 'low');
    }
  });
};

// Remove unused CSS dynamically
export const removeUnusedCSS = () => {
  if (typeof document === 'undefined') return;

  // Remove unused framework CSS
  const stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
  stylesheets.forEach(link => {
    const href = link.getAttribute('href') || '';
    
    // Remove CSS frameworks we're not using
    if (href.includes('bootstrap') || href.includes('foundation')) {
      link.remove();
    }
  });
};

// Optimize third-party scripts
export const optimizeThirdPartyScripts = () => {
  if (typeof document === 'undefined') return;

  // Delay non-critical third-party scripts
  const delayThirdParty = () => {
    // HubSpot
    if (!document.querySelector('#hs-script-loader')) {
      const hsScript = document.createElement('script');
      hsScript.src = '//js.hs-scripts.com/21794360.js';
      hsScript.async = true;
      hsScript.defer = true;
      document.body.appendChild(hsScript);
    }
  };

  // Delay until user interaction or after 3 seconds
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

  // Fallback: load after 3 seconds regardless
  setTimeout(loadDelayedScripts, 3000);
};

// Preload critical resources
export const preloadCriticalResources = () => {
  if (typeof document === 'undefined') return;

  const criticalResources = [
    { href: '/lovable-uploads/98b80390-1e73-4256-a9fe-fc237c118c8b.png', as: 'image' },
    { href: '/lovable-uploads/61e82165-c0b9-4fde-98f6-f68f483b1017.png', as: 'image' },
    { href: '/src/styles/hero.css', as: 'style' }
  ];

  criticalResources.forEach(resource => {
    if (!document.querySelector(`link[href="${resource.href}"]`)) {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      if (resource.as === 'image') {
        link.setAttribute('fetchpriority', 'high');
      }
      document.head.appendChild(link);
    }
  });
};

// Reduce Cumulative Layout Shift
export const preventLayoutShift = () => {
  if (typeof document === 'undefined') return;

  // Set aspect ratios for images without dimensions
  const images = document.querySelectorAll('img:not([width]):not([height])');
  images.forEach(img => {
    if (img instanceof HTMLImageElement) {
      img.style.aspectRatio = '16/9'; // Default aspect ratio
      img.style.objectFit = 'cover';
    }
  });

  // Reserve space for dynamic content
  const dynamicElements = document.querySelectorAll('[data-dynamic="true"]');
  dynamicElements.forEach(element => {
    if (element instanceof HTMLElement) {
      element.style.minHeight = '200px'; // Prevent layout shift
    }
  });
};

// Initialize all optimizations
export const initializePerformanceOptimizations = () => {
  // Run immediately
  optimizeResourcePriorities();
  removeUnusedCSS();
  preloadCriticalResources();
  preventLayoutShift();

  // Run after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      optimizeThirdPartyScripts();
    });
  } else {
    optimizeThirdPartyScripts();
  }
};
