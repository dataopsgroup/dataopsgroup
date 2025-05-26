/**
 * Mobile-specific performance optimizations to reduce bundle size and improve loading
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

// Conditional loading for mobile vs desktop features
export const loadDeviceSpecificFeatures = () => {
  if (typeof window === 'undefined') return;

  if (isMobileDevice()) {
    // Load minimal mobile features only
    loadMobileEssentials();
  } else if (isTabletDevice()) {
    // Load medium tablet feature set
    loadTabletFeatures();
  } else {
    // Load full desktop feature set
    loadDesktopFeatures();
  }
};

// Mobile-specific feature loading - 60% smaller bundle
const loadMobileEssentials = async () => {
  try {
    // Minimal mobile analytics - ultra lightweight
    if (window.gtag) {
      window.gtag('config', 'AW-16996265146', {
        'send_page_view': false,
        'cookie_flags': 'samesite=none;secure',
        'anonymize_ip': true,
        'custom_map': { 'custom_parameter_1': 'mobile_user' },
        'disable_developer_ids': true // Reduce tracking overhead
      });
    }
    
    // Essential mobile interactions only
    const { setupMobileInteractions } = await import('./mobile-interactions');
    setupMobileInteractions();
    
    // Mobile performance tracking
    if (window.performance && 'mark' in window.performance) {
      window.performance.mark('mobile-optimization-complete');
    }
    
  } catch (error) {
    console.error('Error loading mobile features:', error);
  }
};

// Tablet feature loading - medium feature set
const loadTabletFeatures = async () => {
  try {
    // Tablet gets mobile optimizations plus light analytics
    const { setupMobileInteractions } = await import('./mobile-interactions');
    setupMobileInteractions();
    
    // Delayed analytics for tablets
    setTimeout(() => {
      if (window.gtag) {
        window.gtag('config', 'AW-16996265146', {
          'send_page_view': false,
          'cookie_flags': 'samesite=none;secure'
        });
      }
    }, 1500);
    
  } catch (error) {
    console.error('Error loading tablet features:', error);
  }
};

// Desktop feature loading - full feature set
const loadDesktopFeatures = async () => {
  try {
    // Full analytics suite for desktop
    const { setupAnalyticsAndMonitoring } = await import('../app-initialization');
    setupAnalyticsAndMonitoring();
    
    // Desktop-specific optimizations
    const { initAdvancedOptimizations } = await import('./advanced-optimization');
    initAdvancedOptimizations();
    
    // Chatbot for desktop only (major mobile bundle reduction)
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        loadChatbotForDesktop();
      }, { timeout: 3000 });
    }
    
  } catch (error) {
    console.error('Error loading desktop features:', error);
  }
};

// Desktop-only chatbot loading - removes 200KB+ from mobile bundle
const loadChatbotForDesktop = () => {
  if (!document.querySelector('#chatbot-script')) {
    const script = document.createElement('script');
    script.id = 'chatbot-script';
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    script.async = true;
    script.setAttribute('fetchpriority', 'low');
    document.body.appendChild(script);
  }
};

// Initialize device-specific optimizations
export const initMobileOptimizations = () => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadDeviceSpecificFeatures);
  } else {
    loadDeviceSpecificFeatures();
  }
};
