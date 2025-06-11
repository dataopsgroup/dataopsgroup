
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

// 301 Redirects - organized by category
export const redirectRoutes = [
  ...assessmentRedirects,
  ...servicesRedirects,
  ...contentRedirects,
  ...guidesRedirects,
  ...miscRedirects,
  ...ampRedirects
];
