
/**
 * Canonical URL Mappings - Central Source of Truth
 * These are the final, indexable URLs that should appear in search results
 */

export const CANONICAL_URLS = {
  // Home and main pages
  home: '/',
  services: '/services',
  about: '/about',
  approach: '/approach',
  contact: '/contact',
  insights: '/insights',
  caseStudies: '/case-studies',
  
  // Main guide URLs - FIXED: Ensure this points to actual final destination
  hubspotExpert: '/guides/hubspot-expert',
  completeHubspotGuide: '/guides/complete-hubspot-guide-for-private-equity',
  
  // Main FAQ page - FIXED: Added missing canonical URL for main FAQ page
  faqs: '/faqs',
  
  // Canonical FAQ URLs - UPDATED: Use shorter, cleaner URLs
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
  
  // Book and PE program
  book: '/book',
  peProgram: '/pe-value-creation-program',
  
  // Legal pages
  terms: '/terms',
  privacy: '/privacy'
} as const;

export default CANONICAL_URLS;
