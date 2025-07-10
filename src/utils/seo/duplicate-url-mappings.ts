
/**
 * Duplicate URL Mappings - URLs that should redirect to canonical versions
 * These URLs should NEVER be indexed and must redirect with 301 status
 */

import { CANONICAL_URLS } from './canonical-urls';

export const DUPLICATE_URLS_TO_REDIRECT = {
  // Home page variations
  '/index': CANONICAL_URLS.home,
  '/index.html': CANONICAL_URLS.home,
  '/home': CANONICAL_URLS.home,
  
  // HubSpot Expert Guide duplicates - FIXED: Remove circular reference and ensure proper targeting
  '/guides/hubspot-expert-guide': CANONICAL_URLS.hubspotExpert,
  '/how-to-hire-a-hubspot-expert-in-2025': CANONICAL_URLS.hubspotExpert,
  '/pillar-content/hubspot-expert': CANONICAL_URLS.hubspotExpert,
  
  // Complete HubSpot Guide duplicates
  '/complete-hubspot-guide': CANONICAL_URLS.completeHubspotGuide,
  '/hubspot-guide-pe': CANONICAL_URLS.completeHubspotGuide,
  '/pe-hubspot-guide': CANONICAL_URLS.completeHubspotGuide,
  '/guides/complete-hubspot-guide': CANONICAL_URLS.completeHubspotGuide,
  
  // FAQ duplicates - ALL variants redirect to canonical (UPDATED with new canonical URLs)
  '/faqs/services-5': CANONICAL_URLS.faqServices,
  '/faqs/hubspot-services': CANONICAL_URLS.faqServices,
  '/faqs/hubspot-experts': CANONICAL_URLS.faqExperts,
  '/faqs/our-approach': CANONICAL_URLS.faqApproach,
  '/faqs/hubspot-modules': CANONICAL_URLS.faqModules,
  '/faq': CANONICAL_URLS.faqs, // Default FAQ redirect to main FAQ page
  
  // Assessment redirects - FIXED: Add singular form that was causing Ahrefs issues
  '/assessment': CANONICAL_URLS.assessment,
  '/assessment/results': CANONICAL_URLS.assessmentResults,
  '/hubspot-assessment': CANONICAL_URLS.assessment,
  '/hubspot-assessment-results': CANONICAL_URLS.assessmentResults,
  '/data-operation-assessment': CANONICAL_URLS.assessment, // ADDED: Singular form redirect
  
  // Blog/Insights redirects
  '/blog': CANONICAL_URLS.insights,
  '/whitepapers': CANONICAL_URLS.insights,
  '/articles': CANONICAL_URLS.insights,
  '/posts': CANONICAL_URLS.insights,
  
  // Book redirects
  '/book-page': CANONICAL_URLS.book,
  '/landing-page': CANONICAL_URLS.book,
  
  // Case study redirects
  '/testimonials': CANONICAL_URLS.caseStudies,
  '/hubspot-case-studies': CANONICAL_URLS.caseStudies,
  '/success-stories': CANONICAL_URLS.caseStudies,
  
  // Service redirects
  '/service': CANONICAL_URLS.services,
  '/our-services': CANONICAL_URLS.services,
  
  // Contact redirects
  '/contact-us': CANONICAL_URLS.contact,
  '/get-in-touch': CANONICAL_URLS.contact,
  
  // About redirects
  '/about-us': CANONICAL_URLS.about,
  '/team': CANONICAL_URLS.about,
  
  // Legal page duplicates
  '/terms-of-service': CANONICAL_URLS.terms,
  '/tos': CANONICAL_URLS.terms,
  '/privacy-policy': CANONICAL_URLS.privacy,
  '/pp': CANONICAL_URLS.privacy,
  
  // Calculator duplicates
  '/calculator': CANONICAL_URLS.badDataCalculator,
  '/bad-data-calculator': CANONICAL_URLS.badDataCalculator,
  '/roi-calculator': CANONICAL_URLS.revopsCalculator,
  '/revops-calculator': CANONICAL_URLS.revopsCalculator
} as const;

// BROKEN EXTERNAL LINKS TO REPLACE
export const BROKEN_EXTERNAL_LINKS = {
  'https://blog.hubspot.com/marketing/stop-pretending-all-leads-are-equal': 'https://blog.hubspot.com/marketing/lead-scoring-best-practices',
  'https://blog.hubspot.com/marketing/lead-scoring-statistics': 'https://blog.hubspot.com/marketing/lead-scoring-best-practices'
} as const;

export default DUPLICATE_URLS_TO_REDIRECT;
