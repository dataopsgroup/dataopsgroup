
/**
 * Enhanced mobile optimization for 90+ PSI score
 */

import { optimizeMobileScripts, purgeUnusedCSS, initUltraMobileOptimizations } from '../mobile-performance-optimizer';
import { initMobileCSSOptimizations } from '../critical-css-mobile';

// Mobile device detection
export const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Ultra-aggressive mobile initialization
export const initMobileOptimizations = () => {
  if (!isMobileDevice()) return;
  
  try {
    // Phase 1: Critical CSS optimization
    initMobileCSSOptimizations();
    
    // Phase 2: Script optimization
    initUltraMobileOptimizations();
    
    // Phase 3: Remove unused resources
    purgeUnusedCSS();
    
    // Phase 4: Disable all tracking initially
    disableTrackingOnMobile();
    
    // Phase 5: Optimize images for mobile
    optimizeMobileImages();
    
  } catch (error) {
    console.error('Mobile optimization failed:', error);
  }
};

// Disable all tracking on mobile initially
const disableTrackingOnMobile = () => {
  // Clear analytics
  if (window.gtag) {
    window.gtag = () => {};
  }
  
  // Clear HubSpot
  if (window._hsq) {
    window._hsq = [];
  }
  
  // Remove analytics scripts
  document.querySelectorAll('script[src*="googletagmanager"], script[src*="analytics"]').forEach(script => {
    script.remove();
  });
};

// Optimize images specifically for mobile
const optimizeMobileImages = () => {
  // Add loading=lazy to all images except hero
  document.querySelectorAll('img:not([data-hero])').forEach(img => {
    if (img instanceof HTMLImageElement) {
      img.loading = 'lazy';
      img.decoding = 'async';
    }
  });
  
  // Ensure hero image has proper attributes
  const heroImg = document.querySelector('img[data-hero]') as HTMLImageElement;
  if (heroImg) {
    heroImg.loading = 'eager';
    heroImg.decoding = 'sync';
    heroImg.fetchPriority = 'high';
  }
};

// Load only essential features after significant delay
export const loadMobileEssentials = () => {
  setTimeout(() => {
    // Re-enable minimal analytics after 10 seconds
    if (window.gtag) {
      window.gtag('config', 'AW-16996265146', {
        'send_page_view': false,
        'cookie_flags': 'samesite=none;secure',
        'anonymize_ip': true,
        'client_storage': 'none'
      });
    }
  }, 10000);
};
