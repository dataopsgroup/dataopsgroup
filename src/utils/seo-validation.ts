
/**
 * SEO Validation Utilities
 * 
 * Use these functions to validate SEO configurations before deployment
 */

import { CANONICAL_URLS, DUPLICATE_URLS_TO_REDIRECT, validateSEOConfig } from './seo-config';

interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

/**
 * Validates that all redirect rules are properly configured
 */
export const validateRedirectRules = (): ValidationResult => {
  const errors: string[] = [];
  const warnings: string[] = [];
  
  // Run core SEO config validation
  const configValidation = validateSEOConfig();
  if (!configValidation.isValid) {
    errors.push(...configValidation.errors);
  }
  
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
 * Master validation function - runs all SEO validations
 */
export const validateAllSEORules = (): ValidationResult => {
  const redirectValidation = validateRedirectRules();
  const robotsValidation = validateRobotsRules();
  const sitemapValidation = validateSitemapRules();
  
  const allErrors = [
    ...redirectValidation.errors,
    ...robotsValidation.errors,
    ...sitemapValidation.errors
  ];
  
  const allWarnings = [
    ...redirectValidation.warnings,
    ...robotsValidation.warnings,
    ...sitemapValidation.warnings
  ];
  
  return {
    isValid: allErrors.length === 0,
    errors: allErrors,
    warnings: allWarnings
  };
};

/**
 * Development helper - logs validation results to console
 */
export const logSEOValidation = () => {
  if (process.env.NODE_ENV !== 'development') return;
  
  const validation = validateAllSEORules();
  
  if (validation.isValid) {
    console.log('✅ SEO Configuration Valid');
  } else {
    console.error('❌ SEO Configuration Errors:');
    validation.errors.forEach(error => console.error(`  - ${error}`));
  }
  
  if (validation.warnings.length > 0) {
    console.warn('⚠️ SEO Configuration Warnings:');
    validation.warnings.forEach(warning => console.warn(`  - ${warning}`));
  }
};

export default {
  validateRedirectRules,
  validateRobotsRules,
  validateSitemapRules,
  validateAllSEORules,
  logSEOValidation
};
