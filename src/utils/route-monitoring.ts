/**
 * Route monitoring utility
 * Helps ensure critical routes and page components remain intact
 */

import { RouteObject } from 'react-router-dom';
import { applyCriticalCSS, loadFonts } from '@/lib/critical-css';
import { reportBudgetViolations } from '@/utils/performance-budget';
import { runLinkValidation } from '@/utils/link-validator';

/**
 * Validates that critical routes exist in the router configuration
 */
export const validateCriticalRoutes = (routes: RouteObject[]): string[] => {
  // Define critical routes that must exist for SEO and basic functionality
  const criticalRoutes = [
    '/',
    '/faqs',
    '/insights',
    '/contact',
    '/case-studies',
    '/about',
    '/services',
    '/book' // Added missing book route
  ];

  // Flatten nested routes to check all paths
  const flattenRoutes = (routesList: RouteObject[]): string[] => {
    return routesList.reduce<string[]>((acc, route) => {
      if (route.path) acc.push(route.path);
      if (route.children) {
        acc.push(...flattenRoutes(route.children));
      }
      return acc;
    }, []);
  };

  const allRoutePaths = flattenRoutes(routes);
  
  // Find which critical routes are missing
  return criticalRoutes.filter(criticalRoute => 
    !allRoutePaths.some(path => 
      // Exact match or parameterized match (e.g., /insights/:id would match /insights)
      path === criticalRoute || 
      (path.includes(':') && criticalRoute.startsWith(path.split(':')[0]))
    )
  );
};

/**
 * Reports route validation issues
 * Can be extended to send to monitoring service
 */
export const reportRouteValidationIssues = (missingRoutes: string[]): void => {
  if (missingRoutes.length > 0) {
    console.error('CRITICAL ROUTE ALERT: The following routes are missing:', missingRoutes);
    
    // In production, this could send to a monitoring service
    if (process.env.NODE_ENV === 'production') {
      try {
        // Log to analytics or error tracking service
        if (window.gtag) {
          window.gtag('event', 'critical_route_missing', {
            event_category: 'error',
            event_label: missingRoutes.join(',')
          });
        }
      } catch (e) {
        console.error('Failed to report route validation issues:', e);
      }
    }
  }
};

/**
 * Check for data integrity in FAQ components
 */
export const validateFAQData = (faqCategories: any[]): boolean => {
  if (!Array.isArray(faqCategories)) {
    console.error('FAQ categories is not an array');
    return false;
  }
  
  let isValid = true;
  
  faqCategories.forEach((category, index) => {
    if (!category.id) {
      console.error(`FAQ category at index ${index} is missing an id`);
      isValid = false;
    }
    
    if (!category.title) {
      console.error(`FAQ category ${category.id || index} is missing a title`);
      isValid = false;
    }
    
    if (!Array.isArray(category.items)) {
      console.error(`FAQ category ${category.id || index} items is not an array`);
      isValid = false;
    } else {
      category.items.forEach((item: any, itemIndex: number) => {
        if (!item.question) {
          console.error(`FAQ item at index ${itemIndex} in category ${category.id} is missing a question`);
          isValid = false;
        }
        
        if (!item.answer) {
          console.error(`FAQ item "${item.question || itemIndex}" in category ${category.id} is missing an answer`);
          isValid = false;
        }
      });
    }
  });
  
  return isValid;
};

/**
 * Extract route from URL for metrics
 */
export function getRouteFromUrl(url: string): string {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.pathname;
  } catch (e) {
    // If URL parsing fails, just return the input string
    // This could happen if only a path is provided
    return url;
  }
}

/**
 * Enhanced route change monitoring with performance tracking and link validation
 */
export const monitorRouteChanges = () => {
  if (typeof window === 'undefined') return;
  
  // Run link validation on initialization
  runLinkValidation();
  
  // Store current route for comparison
  let currentRoute = window.location.pathname;
  
  // Apply critical CSS for initial route
  applyCriticalCSS(currentRoute);
  
  // Load custom fonts
  loadFonts();
  
  // Check for page visibility API support
  if ('hidden' in document) {
    // Track if the page was loaded in a background tab
    const wasHiddenOnLoad = document.hidden;
    
    if (wasHiddenOnLoad) {
      document.addEventListener('visibilitychange', () => {
        // When page becomes visible after being loaded in background
        if (!document.hidden) {
          // Force a performance measurement when the user actually sees the page
          if (window.performance && 'mark' in window.performance) {
            window.performance.mark('page-visible-after-background-load');
            
            // Clear the event listener since we only need this once
            document.removeEventListener('visibilitychange', () => {});
          }
        }
      });
    }
  }
  
  // History API based monitoring
  const originalPushState = history.pushState;
  const originalReplaceState = history.replaceState;
  
  // Enhanced navigation timing
  const measureNavigation = (from: string, to: string) => {
    if (window.performance && 'mark' in window.performance) {
      // Mark navigation start
      window.performance.mark('route-change-start');
      
      // Get current time
      const startTime = performance.now();
      
      // Listen for the 'load' event on the window once
      const handleLoaded = () => {
        const loadTime = performance.now() - startTime;
        
        // Mark navigation end
        window.performance.mark('route-change-end');
        
        // Measure full navigation time
        window.performance.measure('route-change-duration', 'route-change-start', 'route-change-end');
        
        // Apply critical CSS
        applyCriticalCSS(to);
        
        // Check performance budget after route loaded
        setTimeout(() => {
          const budgetReport = reportBudgetViolations();
          if (!budgetReport.withinBudget) {
            console.warn('Performance budget exceeded:', budgetReport);
          }
        }, 1000);
        
        // Report to analytics if available
        if (window.gtag) {
          window.gtag('event', 'route_change', {
            from_route: from,
            to_route: to,
            load_time: Math.round(loadTime)
          });
        }
        
        // Remove the event listener
        window.removeEventListener('load', handleLoaded);
      };
      
      window.addEventListener('load', handleLoaded);
    }
  };
  
  // Override history methods
  history.pushState = function() {
    const from = currentRoute;
    originalPushState.apply(this, arguments as any);
    
    // Get new route after state change
    const to = window.location.pathname;
    currentRoute = to;
    
    // Track page performance
    measureNavigation(from, to);
  };
  
  history.replaceState = function() {
    const from = currentRoute;
    originalReplaceState.apply(this, arguments as any);
    
    // Get new route after state change
    const to = window.location.pathname;
    currentRoute = to;
    
    // Track page performance
    measureNavigation(from, to);
  };
  
  // Also listen for popstate events (browser back/forward)
  window.addEventListener('popstate', () => {
    const from = currentRoute;
    const to = window.location.pathname;
    currentRoute = to;
    
    // Track page performance
    measureNavigation(from, to);
  });
  
  return () => {
    // Clean up by restoring original methods
    history.pushState = originalPushState;
    history.replaceState = originalReplaceState;
    window.removeEventListener('popstate', () => {});
  };
};

export default {
  validateCriticalRoutes,
  reportRouteValidationIssues,
  validateFAQData,
  getRouteFromUrl,
  monitorRouteChanges
};
