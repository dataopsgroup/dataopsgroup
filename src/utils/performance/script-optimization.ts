
/**
 * Script optimization utilities for third-party script management
 */

// Optimize third-party scripts for better Core Web Vitals
export const optimizeThirdPartyScripts = () => {
  if (typeof document === 'undefined') return;

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

  // Delay until user interaction or after 2 seconds (reduced from 3s)
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

  // Reduced fallback timeout for better UX
  setTimeout(loadDelayedScripts, 2000);
};
