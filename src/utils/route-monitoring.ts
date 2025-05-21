
/**
 * Route monitoring utility
 * Helps ensure critical routes and page components remain intact
 */

import { RouteObject } from 'react-router-dom';

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
    '/services'
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

export default {
  validateCriticalRoutes,
  reportRouteValidationIssues,
  validateFAQData
};
