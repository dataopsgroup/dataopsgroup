
/**
 * Lightweight mobile interaction handling for optimal performance
 */

export const setupMobileInteractions = () => {
  if (typeof window === 'undefined') return;

  // Touch-friendly interactions
  setupTouchOptimizations();
  
  // Mobile-specific performance monitoring
  setupMobilePerformanceTracking();
  
  // Simplified mobile analytics
  setupMobileAnalytics();
};

const setupTouchOptimizations = () => {
  // Ensure all interactive elements meet minimum touch target size (44px)
  const interactiveElements = document.querySelectorAll('button, a, input, [role="button"]');
  
  interactiveElements.forEach(element => {
    const rect = element.getBoundingClientRect();
    if (rect.width < 44 || rect.height < 44) {
      (element as HTMLElement).style.minWidth = '44px';
      (element as HTMLElement).style.minHeight = '44px';
      (element as HTMLElement).style.display = 'inline-flex';
      (element as HTMLElement).style.alignItems = 'center';
      (element as HTMLElement).style.justifyContent = 'center';
    }
  });

  // Optimize touch responsiveness
  document.body.style.touchAction = 'manipulation';
};

const setupMobilePerformanceTracking = () => {
  // Lightweight performance monitoring for mobile
  if ('performance' in window && 'mark' in window.performance) {
    window.performance.mark('mobile-optimization-start');
    
    // Track mobile-specific metrics
    setTimeout(() => {
      if ('measure' in window.performance) {
        window.performance.measure('mobile-load-time', 'navigationStart', 'mobile-optimization-start');
        
        const mobileMetric = window.performance.getEntriesByName('mobile-load-time')[0];
        if (mobileMetric && window.gtag) {
          window.gtag('event', 'mobile_performance', {
            'metric_name': 'mobile_load_time',
            'metric_value': Math.round(mobileMetric.duration),
            'device_type': 'mobile'
          });
        }
      }
    }, 1000);
  }
};

const setupMobileAnalytics = () => {
  // Simplified analytics for mobile to reduce bandwidth
  if (window._hsq) {
    window._hsq.push(['trackEvent', {
      id: 'mobile_user_session',
      properties: {
        device_type: 'mobile',
        screen_width: window.innerWidth,
        connection_type: (navigator as any).connection?.effectiveType || 'unknown'
      }
    }]);
  }
};
