
/**
 * App initialization utilities
 */
import router from '../routes';
import { validateCriticalRoutes, reportRouteValidationIssues } from './route-monitoring';
import { runWhenIdle } from '../lib/optimization';

// Pre-launch validation to ensure critical routes exist
export const validateRoutes = () => {
  try {
    // Check if router has routes property
    if (router && 'routes' in router) {
      const missingRoutes = validateCriticalRoutes(router.routes);
      if (missingRoutes.length > 0) {
        reportRouteValidationIssues(missingRoutes);
      }
    }
  } catch (e) {
    console.error('Route validation failed:', e);
  }
};

// Optimize images after load
export const optimizePageImages = () => {
  // Optimize images after the initial render is complete
  document.querySelectorAll('img').forEach(img => {
    if (!img.loading) img.loading = 'lazy';
    if (!img.decoding) img.decoding = 'async';
  });
};

// Initialize the application with all required setup tasks
export const initializeApp = () => {
  if (typeof window === 'undefined') return;
  
  const executeWhenIdle = (callback: () => void) => {
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(callback, { timeout: 2000 });
    } else {
      // Fallback for browsers that don't support requestIdleCallback
      setTimeout(callback, 200);
    }
  };
  
  // Run very low priority operations when the page is fully loaded
  runWhenIdle(optimizePageImages);
};
