
/**
 * Advanced performance optimization utilities for final PageSpeed improvements
 */

// Enhanced code-splitting for non-critical JavaScript
export const implementAdvancedCodeSplitting = () => {
  if (typeof window === 'undefined') return;

  // Use intersection observer for below-the-fold content loading
  const setupLazyFeatures = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target;
            
            // Load chatbot only when footer comes into view
            if (element.classList.contains('footer') || element.classList.contains('chatbot-trigger')) {
              loadChatbotWhenNeeded();
              observer.unobserve(element);
            }
            
            // Load analytics tracking for below-fold interactions
            if (element.classList.contains('services') || element.classList.contains('approach')) {
              loadDetailedAnalytics();
              observer.unobserve(element);
            }
          }
        });
      },
      { 
        rootMargin: '100px',
        threshold: 0.1 
      }
    );

    // Observe elements that trigger lazy loading
    document.querySelectorAll('.footer, .services, .approach, .chatbot-trigger').forEach(el => {
      observer.observe(el);
    });
  };

  // Load chatbot scripts only when needed
  const loadChatbotWhenNeeded = () => {
    if (!document.querySelector('#chatbot-script')) {
      const script = document.createElement('script');
      script.id = 'chatbot-script';
      script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
      script.async = true;
      script.setAttribute('fetchpriority', 'low');
      document.body.appendChild(script);
    }
  };

  // Load detailed analytics for user interactions
  const loadDetailedAnalytics = () => {
    if (!window._hsq) {
      window._hsq = window._hsq || [];
    }
    
    // Track detailed user engagement
    window._hsq.push(['trackEvent', {
      id: 'content_engagement',
      properties: {
        section: 'below_fold_content'
      }
    }]);
  };

  // Initialize lazy loading after DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setupLazyFeatures);
  } else {
    setupLazyFeatures();
  }
};

// Tree-shake unused library functions
export const optimizeLibraryUsage = () => {
  // Remove unused polyfills
  if ('IntersectionObserver' in window && 'requestIdleCallback' in window) {
    // Modern browser - no polyfills needed
    const polyfillScripts = document.querySelectorAll('script[src*="polyfill"]');
    polyfillScripts.forEach(script => {
      if (script.parentNode) {
        script.remove();
      }
    });
  }
};

// Implement aggressive resource prioritization
export const prioritizeResources = () => {
  if (typeof document === 'undefined') return;

  // Mark all non-critical third-party resources as low priority
  document.querySelectorAll('script[src], link[href]').forEach(element => {
    const url = element.getAttribute('src') || element.getAttribute('href') || '';
    
    // Third-party analytics and tracking - lowest priority
    if (url.includes('gtag') || 
        url.includes('analytics') || 
        url.includes('facebook') || 
        url.includes('twitter') ||
        url.includes('botpress')) {
      element.setAttribute('fetchpriority', 'low');
    }
    
    // First-party critical resources - highest priority
    if (url.includes('/src/') || url.includes('/lovable-uploads/')) {
      if (!element.hasAttribute('fetchpriority')) {
        element.setAttribute('fetchpriority', 'high');
      }
    }
  });
};

// Initialize all advanced optimizations
export const initAdvancedOptimizations = () => {
  // Run immediately for critical optimizations
  prioritizeResources();
  
  // Run when idle for non-critical optimizations
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(() => {
      implementAdvancedCodeSplitting();
      optimizeLibraryUsage();
    }, { timeout: 2000 });
  } else {
    setTimeout(() => {
      implementAdvancedCodeSplitting();
      optimizeLibraryUsage();
    }, 1000);
  }
};
