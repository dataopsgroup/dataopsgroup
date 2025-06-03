
/**
 * Link validation utility for DataOps Group website
 * Helps identify and prevent broken internal links
 */

export interface LinkValidationResult {
  url: string;
  isValid: boolean;
  component: string;
  issue?: string;
}

/**
 * Define all valid internal routes for the application
 */
const VALID_ROUTES = [
  // Main routes
  '/',
  '/contact',
  '/about',
  '/approach', 
  '/book',
  '/how-to-hire-a-hubspot-expert-in-2025',
  
  // Service routes
  '/services',
  '/services/marketing-operations-revops',
  '/services/analytics-bi',
  '/services/dataops-implementation',
  '/services/team-training',
  
  // Insight routes
  '/insights',
  '/case-studies',
  '/faqs',
  
  // Utility routes
  '/assessment',
  '/get-started',
  '/thank-you',
  '/contact/thank-you',
  '/sitemap',
  '/pillar-content',
  '/hubspot-assessment-results',
  '/404',
  '/privacy',
  '/terms',
  
  // Dynamic routes (patterns)
  '/insights/:postId',
  '/case-studies/:caseStudyId'
];

/**
 * Extract links from navigation data and components
 */
export const extractNavigationLinks = (): string[] => {
  const links: string[] = [];
  
  // Main navigation links from navigationData.ts
  const mainNavLinks = [
    '/services/analytics-bi',
    '/services/dataops-implementation', 
    '/services/team-training',
    '/services/marketing-operations-revops',
    '/insights',
    '/case-studies',
    '/how-to-hire-a-hubspot-expert-in-2025',
    '/assessment',
    '/about',
    '/approach',
    '/contact',
    '/book'
  ];
  
  links.push(...mainNavLinks);
  return links;
};

/**
 * Check if a route pattern matches a dynamic route
 */
const matchesDynamicRoute = (url: string): boolean => {
  const dynamicPatterns = [
    '/insights/',
    '/case-studies/'
  ];
  
  return dynamicPatterns.some(pattern => url.startsWith(pattern));
};

/**
 * Validate a single internal link
 */
export const validateInternalLink = (url: string, component: string): LinkValidationResult => {
  // Remove query parameters and hash for validation
  const cleanUrl = url.split('?')[0].split('#')[0];
  
  // Check exact matches first
  if (VALID_ROUTES.includes(cleanUrl)) {
    return {
      url,
      isValid: true,
      component
    };
  }
  
  // Check dynamic route patterns
  if (matchesDynamicRoute(cleanUrl)) {
    return {
      url,
      isValid: true,
      component
    };
  }
  
  // Check if it's an external link (should be allowed)
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('mailto:') || url.startsWith('tel:')) {
    return {
      url,
      isValid: true,
      component
    };
  }
  
  return {
    url,
    isValid: false,
    component,
    issue: 'Route not found in valid routes list'
  };
};

/**
 * Validate all navigation links
 */
export const validateAllNavigationLinks = (): LinkValidationResult[] => {
  const results: LinkValidationResult[] = [];
  const navigationLinks = extractNavigationLinks();
  
  navigationLinks.forEach(link => {
    results.push(validateInternalLink(link, 'Navigation'));
  });
  
  return results;
};

/**
 * Get broken links from validation results
 */
export const getBrokenLinks = (results: LinkValidationResult[]): LinkValidationResult[] => {
  return results.filter(result => !result.isValid);
};

/**
 * Log validation results to console (development only)
 */
export const logValidationResults = (results: LinkValidationResult[]): void => {
  if (process.env.NODE_ENV !== 'development') return;
  
  const brokenLinks = getBrokenLinks(results);
  
  if (brokenLinks.length === 0) {
    console.log('✅ All navigation links are valid');
  } else {
    console.warn('❌ Broken links detected:');
    brokenLinks.forEach(link => {
      console.warn(`  - ${link.url} (in ${link.component}): ${link.issue}`);
    });
  }
};

/**
 * Run complete link validation
 */
export const runLinkValidation = (): void => {
  const results = validateAllNavigationLinks();
  logValidationResults(results);
  return results;
};

export default {
  validateInternalLink,
  validateAllNavigationLinks,
  getBrokenLinks,
  logValidationResults,
  runLinkValidation
};
