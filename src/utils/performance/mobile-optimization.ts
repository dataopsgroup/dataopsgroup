
/**
 * Simplified mobile optimization utilities
 */

// Mobile device detection
export const isMobileDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

// Tablet device detection
export const isTabletDevice = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth >= 768 && window.innerWidth < 1024;
};

// Simple mobile optimizations
export const initMobileOptimizations = () => {
  try {
    if (typeof window === 'undefined') return;
    
    const isMobile = isMobileDevice();
    
    if (isMobile) {
      // Basic mobile analytics
      setTimeout(() => {
        if (window.gtag) {
          window.gtag('config', 'AW-16996265146', {
            'send_page_view': false,
            'cookie_flags': 'samesite=none;secure',
            'anonymize_ip': true
          });
        }
      }, 3000);
    }
    
  } catch (error) {
    console.error('Mobile optimization failed:', error);
  }
};
