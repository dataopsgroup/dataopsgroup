
// Enhanced device-specific performance monitoring
(function() {
  const width = window.innerWidth;
  const deviceType = width < 768 ? 'mobile' : width < 1024 ? 'tablet' : 'desktop';
  document.body.classList.add('device-' + deviceType);
  
  // Connection detection
  if ('connection' in navigator) {
    const connection = navigator.connection;
    const effectiveType = connection.effectiveType;
    if (effectiveType === '4g' || effectiveType === '5g') {
      document.body.classList.add('connection-fast');
    } else if (effectiveType === '2g' || effectiveType === '3g') {
      document.body.classList.add('connection-slow');
    } else {
      document.body.classList.add('connection-unknown');
    }
  }
  
  // Mobile-specific optimizations
  if (deviceType === 'mobile') {
    // Prioritize critical resources
    const criticalResources = document.querySelectorAll('link[rel="preload"]');
    criticalResources.forEach(link => {
      if (link.getAttribute('media') === '(max-width: 767px)') {
        link.setAttribute('fetchpriority', 'high');
      }
    });
  }
  
  console.log('📱 Enhanced device detection:', deviceType, 'width:', width);
})();
