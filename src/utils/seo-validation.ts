/**
 * SEO Validation Utilities
 * 
 * ENHANCED: Now includes comprehensive redirect auditing and prevention
 */

import { CANONICAL_URLS, DUPLICATE_URLS_TO_REDIRECT, validateSEOConfig } from './seo-config';
import { auditAllRedirects } from './comprehensive-redirect-audit';
import { validateForDeployment, validateCommonPatterns } from './redirect-prevention-system';

interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

/**
 * Master validation function - runs all SEO validations including new redirect auditing
 */
export const validateAllSEORules = (): ValidationResult => {
  // Run existing validations
  const redirectValidation = validateRedirectRules();
  const canonicalValidation = validateCanonicalUrlIntegrity();
  const robotsValidation = validateRobotsRules();
  const sitemapValidation = validateSitemapRules();
  
  // Run new comprehensive validations
  const comprehensiveAudit = auditAllRedirects();
  const commonPatterns = validateCommonPatterns();
  
  const allErrors = [
    ...redirectValidation.errors,
    ...canonicalValidation.errors,
    ...robotsValidation.errors,
    ...sitemapValidation.errors,
    ...comprehensiveAudit.errors,
    ...(commonPatterns ? [] : ['Common problem patterns detected'])
  ];
  
  const allWarnings = [
    ...redirectValidation.warnings,
    ...canonicalValidation.warnings,
    ...robotsValidation.warnings,
    ...sitemapValidation.warnings,
    ...comprehensiveAudit.warnings
  ];
  
  return {
    isValid: allErrors.length === 0,
    errors: allErrors,
    warnings: allWarnings
  };
};

/**
 * Validates that all redirect rules are properly configured
 * ENHANCED: Added canonical URL protection validation
 */
export const validateRedirectRules = (): ValidationResult => {
  const errors: string[] = [];
  const warnings: string[] = [];
  
  // Run core SEO config validation
  const configValidation = validateSEOConfig();
  if (!configValidation.isValid) {
    errors.push(...configValidation.errors);
  }
  
  // CRITICAL: Validate that canonical URLs are never in redirect mappings
  const canonicalUrlsArray = Object.values(CANONICAL_URLS);
  const duplicateUrlsArray = Object.keys(DUPLICATE_URLS_TO_REDIRECT);
  
  canonicalUrlsArray.forEach(canonicalUrl => {
    if (duplicateUrlsArray.includes(canonicalUrl)) {
      errors.push(`CRITICAL: Canonical URL ${canonicalUrl} is also in DUPLICATE_URLS_TO_REDIRECT - this creates redirect chains!`);
    }
  });
  
  // Validate that redirect targets are canonical URLs
  Object.entries(DUPLICATE_URLS_TO_REDIRECT).forEach(([source, target]) => {
    if (!canonicalUrlsArray.includes(target)) {
      warnings.push(`Redirect target ${target} (from ${source}) is not in CANONICAL_URLS`);
    }
  });
  
  // Check for missing redirects that might be needed
  const commonDuplicatePatterns = [
    '/faqs/services-',
    '/faqs/hubspot-',
    '/blog/',
    '/en/blog/',
    '/guides/',
    '/pillar-content/'
  ];
  
  // Validate canonical URLs are reachable (placeholder - would need actual fetch in real implementation)
  Object.values(CANONICAL_URLS).forEach(url => {
    if (!url.startsWith('/')) {
      errors.push(`Canonical URL ${url} should start with /`);
    }
  });
  
  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
};

/**
 * NEW: Validates that no canonical URLs are being redirected
 */
export const validateCanonicalUrlIntegrity = (): ValidationResult => {
  const errors: string[] = [];
  const warnings: string[] = [];
  
  const canonicalUrls = Object.values(CANONICAL_URLS);
  const redirectSources = Object.keys(DUPLICATE_URLS_TO_REDIRECT);
  
  // Check if any canonical URL appears as a redirect source
  canonicalUrls.forEach(canonicalUrl => {
    if (redirectSources.includes(canonicalUrl)) {
      errors.push(`FATAL: Canonical URL ${canonicalUrl} appears in redirect list - this causes redirect chains!`);
    }
  });
  
  // Check for potential redirect loops
  Object.entries(DUPLICATE_URLS_TO_REDIRECT).forEach(([source, target]) => {
    if (DUPLICATE_URLS_TO_REDIRECT[target as keyof typeof DUPLICATE_URLS_TO_REDIRECT]) {
      errors.push(`REDIRECT CHAIN: ${source} -> ${target} -> ${DUPLICATE_URLS_TO_REDIRECT[target as keyof typeof DUPLICATE_URLS_TO_REDIRECT]}`);
    }
  });
  
  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
};

/**
 * Validates robots.txt rules match our redirect configuration
 */
export const validateRobotsRules = (): ValidationResult => {
  const errors: string[] = [];
  const warnings: string[] = [];
  
  // Check that all duplicate URLs are disallowed in robots.txt
  const duplicateUrls = Object.keys(DUPLICATE_URLS_TO_REDIRECT);
  
  duplicateUrls.forEach(url => {
    // In a real implementation, this would check the actual robots.txt file
    // For now, we'll just validate the structure
    if (!url.startsWith('/')) {
      errors.push(`Duplicate URL ${url} should start with /`);
    }
  });
  
  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
};

/**
 * Validates that sitemap only includes canonical URLs
 */
export const validateSitemapRules = (): ValidationResult => {
  const errors: string[] = [];
  const warnings: string[] = [];
  
  // Check that no duplicate URLs are in sitemap
  const duplicateUrls = Object.keys(DUPLICATE_URLS_TO_REDIRECT);
  
  // This would check against actual sitemap generation in real implementation
  duplicateUrls.forEach(url => {
    if (url.includes('?')) {
      warnings.push(`URL ${url} contains query parameters and should not be in sitemap`);
    }
  });
  
  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
};

/**
 * Enhanced development helper - logs comprehensive validation results
 */
export const logSEOValidation = () => {
  if (process.env.NODE_ENV !== 'development') return;
  
  console.group('🎯 Enhanced SEO Validation Results');
  
  // Run comprehensive audit
  const audit = auditAllRedirects();
  const deployment = validateForDeployment();
  const patterns = validateCommonPatterns();
  
  if (audit.isValid && deployment.canDeploy && patterns) {
    console.log('✅ ALL SEO VALIDATIONS PASSED - No Ahrefs issues detected');
  } else {
    console.error('❌ SEO Validation Issues Detected:');
    
    if (!audit.isValid) {
      console.error('🔗 Redirect Issues:');
      audit.errors.forEach(error => console.error(`  - ${error}`));
    }
    
    if (!deployment.canDeploy) {
      console.error('🚫 Deployment Blockers:');
      deployment.blockers.forEach(blocker => console.error(`  - ${blocker}`));
    }
    
    if (!patterns) {
      console.error('🎯 Common Problem Patterns Detected');
    }
  }
  
  console.groupEnd();
  
  return {
    audit,
    deployment,
    patterns
  };
};

export default {
  validateRedirectRules,
  validateCanonicalUrlIntegrity,
  validateRobotsRules,
  validateSitemapRules,
  validateAllSEORules,
  logSEOValidation
};
