
/**
 * Link validation utility for DataOps Group website
 * Helps identify and prevent broken internal links
 */

import { BROKEN_EXTERNAL_LINKS } from './seo-config';

export interface LinkValidationResult {
  url: string;
  isValid: boolean;
  component: string;
  issue?: string;
  isExternal?: boolean;
  status?: number;
  replacement?: string;
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
  '/guides/hubspot-expert',
  
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
  '/faqs/services',
  '/faqs/experts',
  '/faqs/data-quality',
  '/faqs/approach',
  '/faqs/modules',
  
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
  
  // Admin routes
  '/admin/structured-data',
  '/admin/vitals',
  
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
    '/guides/hubspot-expert',
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
 * Check if external link is known to be broken and get replacement
 */
export const getBrokenLinkReplacement = (url: string): string | null => {
  return BROKEN_EXTERNAL_LINKS[url as keyof typeof BROKEN_EXTERNAL_LINKS] || null;
};

/**
 * Check if external link is known to be broken
 */
export const isBrokenExternalLink = (url: string): boolean => {
  return Object.keys(BROKEN_EXTERNAL_LINKS).includes(url);
};

/**
 * Validate external link (check against known broken links)
 */
const validateExternalLink = (url: string): { isValid: boolean; replacement?: string } => {
  // Check against known broken links first
  if (isBrokenExternalLink(url)) {
    const replacement = getBrokenLinkReplacement(url);
    return {
      isValid: false,
      replacement: replacement || undefined
    };
  }
  
  // For now, assume other external links are valid
  return { isValid: true };
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
  
  // Check if it's an external link
  if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('mailto:') || url.startsWith('tel:')) {
    const validation = validateExternalLink(url);
    return {
      url,
      isValid: validation.isValid,
      component,
      isExternal: true,
      issue: validation.isValid ? undefined : 'Known broken external link',
      replacement: validation.replacement
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
 * Get pages with insufficient outbound links
 */
export const getPagesWithNoOutboundLinks = (): string[] => {
  return [
    '/faqs/services',
    '/api/content.json',
    'content.json'
  ];
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
      if (link.replacement) {
        console.warn(`    → Suggested replacement: ${link.replacement}`);
      }
    });
  }
  
  // Log pages with no outbound links
  const noOutboundPages = getPagesWithNoOutboundLinks();
  if (noOutboundPages.length > 0) {
    console.warn('⚠️ Pages with no outbound links:');
    noOutboundPages.forEach(page => {
      console.warn(`  - ${page}`);
    });
  }
};

/**
 * Run complete link validation
 * Returns validation results for further processing
 */
export const runLinkValidation = (): LinkValidationResult[] => {
  const results = validateAllNavigationLinks();
  logValidationResults(results);
  return results;
};

export default {
  validateInternalLink,
  validateAllNavigationLinks,
  getBrokenLinks,
  logValidationResults,
  runLinkValidation,
  isBrokenExternalLink,
  getBrokenLinkReplacement,
  getPagesWithNoOutboundLinks
};
