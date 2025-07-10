/**
 * Google Search Console Sitemap Validation Utilities
 * Prevents GSC validation failures by ensuring sitemap consistency
 */

import { CANONICAL_URLS } from './seo/canonical-urls';
import { mainRoutes, serviceRoutes, faqRoutes } from './sitemap-utils';

interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  missingUrls: string[];
  extraUrls: string[];
}

/**
 * Validates that all canonical URLs are included in sitemap generation
 */
export function validateSitemapCompleteness(): ValidationResult {
  const result: ValidationResult = {
    isValid: true,
    errors: [],
    warnings: [],
    missingUrls: [],
    extraUrls: []
  };

  // Get all canonical URLs that should be in sitemap
  const canonicalUrlValues = Object.values(CANONICAL_URLS);
  const sitemapUrls = [
    ...mainRoutes.map(r => r.url),
    ...serviceRoutes.map(r => r.url),
    ...faqRoutes.map(r => r.url)
  ];

  // Check for missing canonical URLs in sitemap
  canonicalUrlValues.forEach((canonicalUrl: string) => {
    if (!sitemapUrls.includes(canonicalUrl)) {
      result.missingUrls.push(canonicalUrl);
      result.errors.push(`MISSING CANONICAL URL IN SITEMAP: ${canonicalUrl}`);
      result.isValid = false;
    }
  });

  // Check for URLs in sitemap that aren't canonical
  sitemapUrls.forEach(sitemapUrl => {
    if (!canonicalUrlValues.includes(sitemapUrl as any) && 
        !isExemptFromCanonicalCheck(sitemapUrl)) {
      result.extraUrls.push(sitemapUrl);
      result.warnings.push(`SITEMAP URL NOT IN CANONICAL LIST: ${sitemapUrl}`);
    }
  });

  return result;
}

/**
 * URLs that are exempt from canonical URL validation
 */
function isExemptFromCanonicalCheck(url: string): boolean {
  const exemptPatterns = [
    '/', // Homepage
    '/services', // Main services page
    '/about',
    '/approach', 
    '/testimonials',
    '/sitemap',
    '/privacy',
    '/terms'
  ];
  
  return exemptPatterns.includes(url);
}

/**
 * Validates sitemap consistency and prevents GSC issues
 */
export function validateGSCCompliance(): ValidationResult {
  const result: ValidationResult = {
    isValid: true,
    errors: [],
    warnings: [],
    missingUrls: [],
    extraUrls: []
  };

  // Run sitemap completeness check
  const sitemapValidation = validateSitemapCompleteness();
  
  // Merge results
  result.errors.push(...sitemapValidation.errors);
  result.warnings.push(...sitemapValidation.warnings);
  result.missingUrls.push(...sitemapValidation.missingUrls);
  result.extraUrls.push(...sitemapValidation.extraUrls);
  result.isValid = sitemapValidation.isValid;

  // Additional GSC-specific validations
  validateRequiredPages(result);
  validatePriorityStructure(result);

  return result;
}

/**
 * Validates that critical pages are included with proper priorities
 */
function validateRequiredPages(result: ValidationResult): void {
  const criticalPages = [
    { url: '/', minPriority: 1.0 },
    { url: '/services', minPriority: 0.9 },
    { url: '/data-operations-assessment', minPriority: 0.9 },
    { url: '/guides/hubspot-expert', minPriority: 0.8 },
    { url: '/guides/complete-hubspot-guide-for-private-equity', minPriority: 0.8 }
  ];

  criticalPages.forEach(page => {
    const sitemapEntry = mainRoutes.find(r => r.url === page.url);
    if (!sitemapEntry) {
      result.errors.push(`CRITICAL PAGE MISSING FROM SITEMAP: ${page.url}`);
      result.isValid = false;
    } else if (parseFloat(sitemapEntry.priority) < page.minPriority) {
      result.warnings.push(`LOW PRIORITY FOR CRITICAL PAGE: ${page.url} (${sitemapEntry.priority})`);
    }
  });
}

/**
 * Validates sitemap priority structure makes sense
 */
function validatePriorityStructure(result: ValidationResult): void {
  const allRoutes = [...mainRoutes, ...serviceRoutes, ...faqRoutes];
  
  // Homepage should have highest priority
  const homepage = allRoutes.find(r => r.url === '/');
  if (!homepage || parseFloat(homepage.priority) !== 1.0) {
    result.errors.push('HOMEPAGE MUST HAVE PRIORITY 1.0');
    result.isValid = false;
  }

  // No page should have priority > 1.0
  allRoutes.forEach(route => {
    if (parseFloat(route.priority) > 1.0) {
      result.errors.push(`INVALID PRIORITY > 1.0: ${route.url} (${route.priority})`);
      result.isValid = false;
    }
  });
}

/**
 * Generates a comprehensive GSC validation report
 */
export function generateGSCValidationReport(): ValidationResult & { timestamp: string; summary: string } {
  const validation = validateGSCCompliance();
  
  return {
    ...validation,
    timestamp: new Date().toISOString(),
    summary: validation.isValid 
      ? '✅ All GSC validation checks passed'
      : `❌ ${validation.errors.length} errors, ${validation.warnings.length} warnings`
  };
}

/**
 * Build-time validation to prevent deployment with GSC issues
 */
export function runBuildTimeGSCValidation(): boolean {
  console.log('🔍 Running Google Search Console validation...');
  
  const report = generateGSCValidationReport();
  
  if (!report.isValid) {
    console.error('🚨 GSC VALIDATION FAILED:');
    report.errors.forEach(error => console.error(`  ❌ ${error}`));
    report.warnings.forEach(warning => console.warn(`  ⚠️  ${warning}`));
    
    console.error('\n💡 TO FIX:');
    console.error('1. Add missing URLs to sitemap-utils.ts');
    console.error('2. Update canonical-urls.ts if needed');
    console.error('3. Regenerate sitemaps');
    
    return false;
  }
  
  console.log('✅ GSC validation passed');
  if (report.warnings.length > 0) {
    console.warn('⚠️  Warnings found:');
    report.warnings.forEach(warning => console.warn(`  ${warning}`));
  }
  
  return true;
}

// Auto-run validation in build environment
if (process.env.NODE_ENV === 'production' || process.env.BUILD_TIME_VALIDATION === 'true') {
  if (!runBuildTimeGSCValidation()) {
    console.error('🚨 Build failed due to GSC validation errors');
    process.exit(1);
  }
}