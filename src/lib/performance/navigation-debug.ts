
/**
 * Navigation debugging utilities
 */

/**
 * Setup navigation debugging for development
 */
export const setupNavigationDebugging = (): void => {
  if (typeof window === 'undefined') return;

  try {
    // Store original methods
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;
    
    // Override pushState
    window.history.pushState = function(...args) {
      console.log('Navigation: pushState to', args[2]);
      return originalPushState.apply(this, args);
    };
    
    // Override replaceState
    window.history.replaceState = function(...args) {
      console.log('Navigation: replaceState to', args[2]);
      return originalReplaceState.apply(this, args);
    };
    
    // Listen for popstate events
    window.addEventListener('popstate', () => {
      console.log('Navigation: popstate to', window.location.pathname);
    });
  } catch (error) {
    console.warn('Failed to setup navigation debugging:', error);
  }
};
