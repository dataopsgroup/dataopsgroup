/**
 * Redirect Chain Validator - Prevents Ahrefs SEO issues
 * 
 * This utility helps identify and prevent redirect chains in internal links
 * that cause Ahrefs "Page has links to redirect" warnings
 */

import { CANONICAL_URLS } from './seo-config';

// Known redirect mappings that internal links should avoid
const REDIRECT_MAPPINGS = {
  // Services redirects
  '/services/hubspot-implementation': '/services/marketing-operations-revops',
  '/services/hubspot-consulting': '/services/marketing-operations-revops',
  '/services/data-operations': '/services/dataops-implementation',
  '/training': '/services/team-training',
  '/hubspot-training': '/services/team-training',
  '/analytics': '/services/analytics-bi',
  '/business-intelligence': '/services/analytics-bi',
  
  // Guide redirects
  '/guides/hubspot-expert-guide': '/guides/hubspot-expert',
  '/how-to-hire-a-hubspot-expert-in-2025': '/guides/hubspot-expert',
  
  // FAQ redirects
  '/faqs/hubspot-services': '/faqs/services',
  '/faqs/hubspot-experts': '/faqs/experts',
  '/faqs/our-approach': '/faqs/approach',
  '/faqs/hubspot-modules': '/faqs/modules',
  
  // Assessment redirects
  '/data-operation-assessment': '/data-operations-assessment',
  
  // Legacy URLs
  '/whitepapers': '/insights',
  '/documentation': '/',
  '/search': '/insights',
};

interface RedirectChainIssue {
  originalUrl: string;
  redirectsTo: string;
  finalDestination: string;
  chainLength: number;
  recommendation: string;
}

/**
 * Validate a URL to check if it redirects and suggest the final destination
 */
export const validateInternalUrl = (url: string): RedirectChainIssue | null => {
  if (!url.startsWith('/')) {
    return null; // External URLs not our concern
  }

  // Check if this URL redirects
  const redirectTarget = REDIRECT_MAPPINGS[url as keyof typeof REDIRECT_MAPPINGS];
  
  if (redirectTarget) {
    // Check if the redirect target also redirects (chain detection)
    const secondRedirect = REDIRECT_MAPPINGS[redirectTarget as keyof typeof REDIRECT_MAPPINGS];
    
    return {
      originalUrl: url,
      redirectsTo: redirectTarget,
      finalDestination: secondRedirect || redirectTarget,
      chainLength: secondRedirect ? 2 : 1,
      recommendation: `Update link to point directly to: ${secondRedirect || redirectTarget}`
    };
  }

  return null;
};

/**
 * Audit an array of URLs for redirect chain issues
 */
export const auditUrlsForRedirectChains = (urls: string[]): RedirectChainIssue[] => {
  const issues: RedirectChainIssue[] = [];
  
  urls.forEach(url => {
    const issue = validateInternalUrl(url);
    if (issue) {
      issues.push(issue);
    }
  });
  
  return issues;
};

/**
 * Get the correct final destination for a URL
 */
export const getFinalDestination = (url: string): string => {
  const issue = validateInternalUrl(url);
  return issue ? issue.finalDestination : url;
};

/**
 * Common problematic URLs that should be checked regularly
 */
export const COMMONLY_MISLINKED_URLS = [
  '/services/hubspot-implementation',
  '/services/hubspot-consulting', 
  '/guides/hubspot-expert-guide',
  '/data-operation-assessment',
  '/faqs/hubspot-services',
  '/faqs/hubspot-experts',
  '/training',
  '/analytics',
];

/**
 * Generate a report of all potential redirect chain issues
 */
export const generateRedirectChainReport = (): {
  totalIssues: number;
  issues: RedirectChainIssue[];
  recommendations: string[];
} => {
  const issues = auditUrlsForRedirectChains(COMMONLY_MISLINKED_URLS);
  
  const recommendations = [
    'Update all internal links to point directly to final destinations',
    'Use the CANONICAL_URLS object for consistent linking',
    'Run this audit before deploying content changes',
    'Add redirect validation to your build process'
  ];
  
  return {
    totalIssues: issues.length,
    issues,
    recommendations
  };
};

// Development logging
if (process.env.NODE_ENV === 'development') {
  const report = generateRedirectChainReport();
  if (report.totalIssues > 0) {
    console.warn('🔗 Redirect Chain Issues Detected:');
    console.table(report.issues);
  }
}