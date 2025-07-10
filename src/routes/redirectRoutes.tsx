
/**
 * REDIRECT ROUTES - KNOWLEDGE ARTICLE REMINDERS:
 * 
 * 🎯 SEO CRITICAL: All mappings imported from seo-config.ts
 * 🎯 CANONICAL PROTECTION: Prevents duplicate content indexing
 * 🎯 REDIRECT CHAINS: Must point to final destination, not other redirects
 * 🚫 NEVER modify without checking impact on search rankings
 * 
 * See Knowledge Article: "SEO Validation Requirements"
 */

import { assessmentRedirects } from './redirects/assessmentRedirects';
import { servicesRedirects } from './redirects/servicesRedirects';
import { contentRedirects } from './redirects/contentRedirects';
import { guidesRedirects } from './redirects/guidesRedirects';
import { miscRedirects } from './redirects/miscRedirects';
import { ampRedirects } from './redirects/ampRedirects';
import { legalRedirects } from './redirects/legalRedirects';

// 301 Redirects - organized by category
// CRITICAL: Ensure guidesRedirects is included to fix Ahrefs canonical issues
export const redirectRoutes = [
  ...guidesRedirects, // MOVED TO TOP for priority - fixes /guides/hubspot-expert-guide redirects
  ...assessmentRedirects,
  ...servicesRedirects,
  ...contentRedirects,
  ...legalRedirects,
  ...miscRedirects,
  ...ampRedirects
];

// Log redirect routes in development to verify they're loaded
if (process.env.NODE_ENV === 'development') {
  console.log('🔀 Redirect routes loaded:', redirectRoutes.length, 'redirects');
  console.log('📍 Guide redirects:', guidesRedirects.length, 'redirects');
  console.log('⚖️ Legal redirects:', legalRedirects.length, 'redirects');
}
