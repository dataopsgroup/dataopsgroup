
/**
 * App initialization utilities - centralized implementation
 */
import router from '../routes';
import { validateCriticalRoutes, reportRouteValidationIssues } from './route-monitoring';
import { runWhenIdle } from '../lib/optimization';
import { trackInitialPageView, setupRouteChangeTracking } from './analytics';
import { setupPerformanceMonitoring } from './performance-monitoring';

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

// Set up all analytics and monitoring in one place
export const setupAnalyticsAndMonitoring = () => {
  validateRoutes();
  trackInitialPageView();
  setupRouteChangeTracking();
  setupPerformanceMonitoring();
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
  
  // Run optimization tasks when the page is fully loaded
  runWhenIdle(optimizePageImages);
};

// Centralized error logging
export const logError = (source: string, error: Error | unknown, additionalData?: Record<string, any>) => {
  console.error(`[${source}] Error:`, error);
  
  // Send to analytics if available
  if (window.gtag && error instanceof Error) {
    window.gtag('event', 'app_error', {
      error_source: source,
      error_message: error.message,
      error_stack: error.stack,
      ...additionalData
    });
  }
};

