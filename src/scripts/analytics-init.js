
// Defer analytics initialization for mobile performance
const initAnalytics = () => {
  if (window.gtag) {
    console.log('Analytics deferred and loaded');
  }
};

// Longer delay for mobile devices
const isMobile = window.innerWidth < 768;
setTimeout(initAnalytics, isMobile ? 3000 : 2000);
