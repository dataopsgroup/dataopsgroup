
/**
 * Navigation debugging utilities
 */

export const setupNavigationDebugging = (): void => {
  if (typeof window === 'undefined') return;
  
  // Enhanced navigation debugging
  const originalPushState = history.pushState;
  const originalReplaceState = history.replaceState;
  
  history.pushState = function(...args) {
    console.log('🧭 Navigation (pushState):', args[2]);
    return originalPushState.apply(this, args);
  };
  
  history.replaceState = function(...args) {
    console.log('🧭 Navigation (replaceState):', args[2]);
    return originalReplaceState.apply(this, args);
  };
  
  window.addEventListener('popstate', (event) => {
    console.log('🧭 Navigation (popstate):', window.location.pathname);
  });
};
