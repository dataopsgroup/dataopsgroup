
/**
 * Robots.txt Configuration - Controls search engine crawling and indexing
 */

import { CANONICAL_URLS } from './canonical-urls';

// ROBOTS.TXT DISALLOW PATTERNS - URLs that should never be indexed
export const ROBOTS_DISALLOW_PATTERNS = [
  // Home page variations
  '/index',
  '/index.html',
  '/home',
  
  // Duplicate content paths
  '/guides/hubspot-expert-guide',
  '/pillar-content/hubspot-expert',
  
  // Duplicate FAQ variants
  '/faqs/services-5',
  '/faqs/hubspot-services',
  '/faqs/hubspot-experts',
  '/faqs/our-approach',
  '/faqs/hubspot-modules',
  '/faq',
  
  // Assessment duplicates
  '/assessment',
  '/hubspot-assessment',
  '/hubspot-assessment-results',
  
  // Blog duplicates
  '/blog',
  '/whitepapers',
  '/articles',
  '/posts',
  
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
  CANONICAL_URLS.home,
  CANONICAL_URLS.services,
  CANONICAL_URLS.about,
  CANONICAL_URLS.approach,
  CANONICAL_URLS.contact,
  CANONICAL_URLS.insights,
  CANONICAL_URLS.caseStudies,
  CANONICAL_URLS.hubspotExpert,
  CANONICAL_URLS.faqs, // FIXED: Added main FAQ page to explicit allows
  CANONICAL_URLS.faqServices,
  CANONICAL_URLS.faqExperts,
  CANONICAL_URLS.faqDataQuality,
  CANONICAL_URLS.faqApproach,
  CANONICAL_URLS.faqModules,
  CANONICAL_URLS.assessment,
  CANONICAL_URLS.assessmentResults,
  CANONICAL_URLS.badDataCalculator,
  CANONICAL_URLS.revopsCalculator,
  CANONICAL_URLS.book,
  CANONICAL_URLS.peProgram
] as const;

export default {
  ROBOTS_DISALLOW_PATTERNS,
  ROBOTS_EXPLICIT_ALLOWS
};
