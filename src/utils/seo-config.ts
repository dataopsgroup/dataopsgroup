
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

// Import modular configurations
export { CANONICAL_URLS } from './seo/canonical-urls';
export { DUPLICATE_URLS_TO_REDIRECT, BROKEN_EXTERNAL_LINKS } from './seo/duplicate-url-mappings';
export { ROBOTS_DISALLOW_PATTERNS, ROBOTS_EXPLICIT_ALLOWS } from './seo/robots-config';
export { validateSEOConfig } from './seo/validation';

// Re-export for backward compatibility
export default {
  CANONICAL_URLS: require('./seo/canonical-urls').CANONICAL_URLS,
  DUPLICATE_URLS_TO_REDIRECT: require('./seo/duplicate-url-mappings').DUPLICATE_URLS_TO_REDIRECT,
  ROBOTS_DISALLOW_PATTERNS: require('./seo/robots-config').ROBOTS_DISALLOW_PATTERNS,
  ROBOTS_EXPLICIT_ALLOWS: require('./seo/robots-config').ROBOTS_EXPLICIT_ALLOWS,
  validateSEOConfig: require('./seo/validation').validateSEOConfig
};
