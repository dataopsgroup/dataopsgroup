
/**
 * Mobile-specific performance optimizations - Simplified for compatibility
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

// Simplified device-specific loading
export const loadDeviceSpecificFeatures = () => {
  if (typeof window === 'undefined') return;

  try {
    if (isMobileDevice()) {
      loadMobileEssentials();
    } else if (isTabletDevice()) {
      loadTabletFeatures();
    } else {
      loadDesktopFeatures();
    }
  } catch (error) {
    console.error('Device-specific feature loading failed:', error);
  }
};

// Simplified mobile features
const loadMobileEssentials = () => {
  try {
    // Basic mobile analytics
    if (window.gtag) {
      window.gtag('config', 'AW-16996265146', {
        'send_page_view': false,
        'cookie_flags': 'samesite=none;secure',
        'anonymize_ip': true
      });
    }
    
    // Mark completion
    if (window.performance?.mark) {
      window.performance.mark('mobile-optimization-complete');
    }
    
  } catch (error) {
    console.error('Mobile essentials loading failed:', error);
  }
};

// Tablet features
const loadTabletFeatures = () => {
  try {
    setTimeout(() => {
      if (window.gtag) {
        window.gtag('config', 'AW-16996265146', {
          'send_page_view': false,
          'cookie_flags': 'samesite=none;secure'
        });
      }
    }, 1500);
  } catch (error) {
    console.error('Tablet features loading failed:', error);
  }
};

// Desktop features
const loadDesktopFeatures = () => {
  try {
    // Desktop analytics
    setTimeout(() => {
      if (window.gtag) {
        window.gtag('config', 'AW-16996265146', {
          'send_page_view': false,
          'cookie_flags': 'samesite=none;secure'
        });
      }
    }, 1000);
    
    // Chatbot for desktop only
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        loadChatbotForDesktop();
      }, { timeout: 3000 });
    }
    
  } catch (error) {
    console.error('Desktop features loading failed:', error);
  }
};

// Desktop chatbot loading
const loadChatbotForDesktop = () => {
  try {
    if (!document.querySelector('#chatbot-script')) {
      const script = document.createElement('script');
      script.id = 'chatbot-script';
      script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
      script.async = true;
      script.setAttribute('fetchpriority', 'low');
      document.body.appendChild(script);
    }
  } catch (error) {
    console.error('Chatbot loading failed:', error);
  }
};

// Initialize mobile optimizations
export const initMobileOptimizations = () => {
  try {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', loadDeviceSpecificFeatures);
    } else {
      loadDeviceSpecificFeatures();
    }
  } catch (error) {
    console.error('Mobile optimization initialization failed:', error);
  }
};
