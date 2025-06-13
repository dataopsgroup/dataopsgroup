
/**
 * CRITICAL SEO CONFIGURATION - KNOWLEDGE ARTICLE REMINDERS:
 * 
 * 🚫 DO NOT MODIFY WITHOUT SEO REVIEW
 * 🎯 ALL CANONICAL URLs = FINAL INDEXABLE DESTINATIONS
 * 🎯 DUPLICATE URLS = NEVER INDEXED, ALWAYS REDIRECT
 * 🔍 ROBOTS DISALLOW = DUPLICATE CONTENT PATHS
 * ✅ VALIDATE: No circular redirects, canonical URLs don't redirect
 * 
 * PROTECTION STRATEGY:
 * - All redirect files import from this central configuration
 * - Changes must be made here first, then imported elsewhere
 * - Prevents accidental overwrites of SEO-critical redirects
 * 
 * See Knowledge Article: "Canonical URL Mappings & Redirect Chain Prevention"
 */

// CANONICAL URL MAPPINGS - These are the final, indexable URLs
export const CANONICAL_URLS = {
  // Main guide URLs
  hubspotExpert: '/guides/hubspot-expert',
  
  // Canonical FAQ URLs - NEVER change these paths
  faqServices: '/faqs/services',
  faqExperts: '/faqs/experts',
  faqDataQuality: '/faqs/data-quality',
  faqApproach: '/faqs/approach',
  faqModules: '/faqs/modules',
  
  // Assessment URLs
  assessment: '/data-operations-assessment',
  assessmentResults: '/data-operations-assessment/results',
  
  // Calculator URLs
  badDataCalculator: '/bad-data-cost-calculator',
  revopsCalculator: '/revops-roi-calculator',
  
  // Main content URLs
  insights: '/insights',
  caseStudies: '/case-studies',
  services: '/services',
  contact: '/contact',
  book: '/book'
} as const;

// DUPLICATE URLS TO REDIRECT - These should NEVER be indexed
export const DUPLICATE_URLS_TO_REDIRECT = {
  // HubSpot Expert Guide duplicates - FIXED: Remove circular reference
  '/guides/hubspot-expert-guide': CANONICAL_URLS.hubspotExpert,
  '/how-to-hire-a-hubspot-expert-in-2025': CANONICAL_URLS.hubspotExpert,
  '/pillar-content/hubspot-expert': CANONICAL_URLS.hubspotExpert,
  
  // FAQ duplicates - ALL variants redirect to canonical
  '/faqs/services-5': CANONICAL_URLS.faqServices,
  '/faqs/hubspot-services': CANONICAL_URLS.faqServices,
  '/faqs/hubspot-experts': CANONICAL_URLS.faqExperts,
  '/faqs/our-approach': CANONICAL_URLS.faqApproach,
  '/faqs/hubspot-modules': CANONICAL_URLS.faqModules,
  
  // Assessment redirects
  '/assessment': CANONICAL_URLS.assessment,
  '/assessment/results': CANONICAL_URLS.assessmentResults,
  '/hubspot-assessment': CANONICAL_URLS.assessment,
  '/hubspot-assessment-results': CANONICAL_URLS.assessmentResults,
  
  // Blog redirects
  '/blog': CANONICAL_URLS.insights,
  '/whitepapers': CANONICAL_URLS.insights,
  
  // Book redirects
  '/book-page': CANONICAL_URLS.book,
  
  // Case study redirects
  '/testimonials': CANONICAL_URLS.caseStudies,
  '/hubspot-case-studies': CANONICAL_URLS.caseStudies
} as const;

// BROKEN EXTERNAL LINKS TO REPLACE
export const BROKEN_EXTERNAL_LINKS = {
  'https://blog.hubspot.com/marketing/stop-pretending-all-leads-are-equal': 'https://blog.hubspot.com/marketing/lead-scoring-best-practices'
} as const;

// ROBOTS.TXT DISALLOW PATTERNS - URLs that should never be indexed
export const ROBOTS_DISALLOW_PATTERNS = [
  // Duplicate content paths
  '/guides/hubspot-expert-guide',
  '/pillar-content/hubspot-expert',
  
  // Duplicate FAQ variants
  '/faqs/services-5',
  '/faqs/hubspot-services',
  '/faqs/hubspot-experts',
  '/faqs/our-approach',
  '/faqs/hubspot-modules',
  
  // Pattern-based blocks
  '/faqs/*-5',
  '/faqs/hubspot-*',
  
  // Query parameter patterns
  '/*?utm_source=',
  '/*?utm_medium=',
  '/*?utm_campaign=',
  '/*?fbclid=',
  '/*?gclid=',
  '/*&utm_source=',
  '/*&utm_medium=',
  '/*&utm_campaign=',
  '/*&fbclid=',
  '/*&gclid='
] as const;

// ROBOTS.TXT EXPLICIT ALLOWS - Canonical URLs that should be indexed
export const ROBOTS_EXPLICIT_ALLOWS = [
  CANONICAL_URLS.faqServices,
  CANONICAL_URLS.faqExperts,
  CANONICAL_URLS.faqDataQuality,
  CANONICAL_URLS.faqApproach,
  CANONICAL_URLS.faqModules
] as const;

/**
 * Enhanced validation function to ensure URL mappings are correct
 */
export const validateSEOConfig = () => {
  const errors: string[] = [];
  
  // Check for circular redirects
  Object.entries(DUPLICATE_URLS_TO_REDIRECT).forEach(([source, target]) => {
    if (DUPLICATE_URLS_TO_REDIRECT[target as keyof typeof DUPLICATE_URLS_TO_REDIRECT]) {
      errors.push(`Circular redirect detected: ${source} -> ${target}`);
    }
  });
  
  // Check that canonical URLs don't redirect
  Object.values(CANONICAL_URLS).forEach(url => {
    if (DUPLICATE_URLS_TO_REDIRECT[url as keyof typeof DUPLICATE_URLS_TO_REDIRECT]) {
      errors.push(`Canonical URL ${url} should not redirect`);
    }
  });
  
  // Validate that all canonical URLs start with /
  Object.entries(CANONICAL_URLS).forEach(([key, url]) => {
    if (!url.startsWith('/')) {
      errors.push(`Canonical URL ${key} should start with /: ${url}`);
    }
  });
  
  return {
    isValid: errors.length === 0,
    errors
  };
};

export default {
  CANONICAL_URLS,
  DUPLICATE_URLS_TO_REDIRECT,
  BROKEN_EXTERNAL_LINKS,
  ROBOTS_DISALLOW_PATTERNS,
  ROBOTS_EXPLICIT_ALLOWS,
  validateSEOConfig
};
