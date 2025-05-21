
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
  // Use Intersection Observer for better performance
  const imageObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          // Apply optimization when image comes into view
          if (!img.loading) img.loading = 'lazy';
          if (!img.decoding) img.decoding = 'async';
          
          // Stop observing this image
          imageObserver.unobserve(img);
        }
      });
    },
    { rootMargin: '200px' } // Start loading when image is 200px from viewport
  );
  
  // Observe all images except those with priority attributes
  document.querySelectorAll('img:not([fetchpriority="high"])').forEach(img => {
    imageObserver.observe(img);
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

// Pre-render critical route content
export const preloadCriticalRoutes = () => {
  // This is a client-side alternative to SSR pre-rendering
  // It loads critical routes in the background after the initial page is rendered
  const criticalRoutes = ['/contact', '/insights', '/services', '/approach'];
  
  if ('IntersectionObserver' in window) {
    // Only preload routes when user is likely to navigate to them
    // i.e., when they hover over navigation items
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('mouseenter', () => {
        const href = link.getAttribute('href');
        if (href && criticalRoutes.includes(href) && !document.querySelector(`link[rel="prefetch"][href="${href}"]`)) {
          const prefetch = document.createElement('link');
          prefetch.rel = 'prefetch';
          prefetch.href = href;
          document.head.appendChild(prefetch);
        }
      });
    });
  }
};
