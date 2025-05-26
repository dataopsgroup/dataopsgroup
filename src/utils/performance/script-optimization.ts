/**
 * Script optimization utilities for third-party script management
 * Enhanced for mobile PSI requirements
 */

// Optimize third-party scripts for better Core Web Vitals - mobile-first
export const optimizeThirdPartyScripts = () => {
  if (typeof document === 'undefined') return;
  
  const isMobile = window.innerWidth < 768;
  
  // Mobile-specific script optimization
  if (isMobile) {
    optimizeMobileScripts();
  } else {
    optimizeDesktopScripts();
  }
};

// Ultra-aggressive mobile script optimization
const optimizeMobileScripts = () => {
  // Remove or defer ALL non-critical scripts on mobile
  const scriptsToDefer = [
    'googletagmanager.com',
    'js.hs-scripts.com',
    'hscollectedforms.net',
    'cdn.gpteng.co',
    'botpress.cloud',
    'facebook.net',
    'twitter.com',
    'linkedin.com'
  ];
  
  // Remove existing scripts that match deferred list
  document.querySelectorAll('script[src]').forEach(script => {
    const src = script.getAttribute('src') || '';
    
    if (scriptsToDefer.some(domain => src.includes(domain))) {
      // Remove the script entirely on mobile initially
      script.remove();
    }
  });
  
  // Defer loading until user interaction with longer delay
  let hasInteracted = false;
  const delayedScripts: Array<{src: string, async?: boolean, defer?: boolean}> = [];
  
  const loadDelayedMobileScripts = () => {
    if (hasInteracted) return;
    hasInteracted = true;
    
    // Only load essential scripts after interaction
    const essentialMobileScripts = [
      {
        src: '//js.hs-scripts.com/21794360.js',
        async: true,
        defer: true
      }
    ];
    
    // Load scripts one by one with delays to avoid blocking
    essentialMobileScripts.forEach((scriptConfig, index) => {
      setTimeout(() => {
        if (!document.querySelector(`script[src="${scriptConfig.src}"]`)) {
          const script = document.createElement('script');
          script.src = scriptConfig.src;
          script.async = scriptConfig.async || true;
          script.defer = scriptConfig.defer || true;
          script.setAttribute('fetchpriority', 'low');
          document.body.appendChild(script);
        }
      }, index * 1000); // 1 second delay between scripts
    });
  };

  // Much more aggressive interaction detection for mobile
  const mobileInteractionEvents = ['touchstart', 'touchmove', 'scroll'];
  
  mobileInteractionEvents.forEach(event => {
    document.addEventListener(event, loadDelayedMobileScripts, { 
      once: true, 
      passive: true 
    });
  });

  // Extended fallback timeout for mobile - prioritize initial load
  setTimeout(loadDelayedMobileScripts, 8000);
};

// Desktop script optimization (unchanged from current)
const optimizeDesktopScripts = () => {
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

  // Delay until user interaction or after 2 seconds
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

  setTimeout(loadDelayedScripts, 2000);
};

// Remove legacy JavaScript for modern mobile browsers
export const removeModernBrowserPolyfills = () => {
  const isMobile = window.innerWidth < 768;
  if (!isMobile) return;
  
  // Remove polyfills not needed for modern mobile browsers
  const polyfillSelectors = [
    'script[src*="polyfill"]',
    'script[src*="babel-polyfill"]',
    'script[src*="core-js"]'
  ];
  
  polyfillSelectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(script => {
      script.remove();
    });
  });
  
  // Mark that modern features are available
  if (!window.APP_MODERN_FEATURES) {
    window.APP_MODERN_FEATURES = {
      supportsES2020: true,
      supportsAsyncAwait: true,
      supportsModules: true,
      polyfillsRemoved: true
    };
  }
};
