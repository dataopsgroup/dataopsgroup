
/**
 * SEO Configuration Validation - Ensures URL mappings are correct
 */

import { CANONICAL_URLS } from './canonical-urls';
import { DUPLICATE_URLS_TO_REDIRECT } from './duplicate-url-mappings';

interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

/**
 * Enhanced validation function to ensure URL mappings are correct
 */
export const validateSEOConfig = (): ValidationResult => {
  const errors: string[] = [];
  const warnings: string[] = [];
  
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
  
  // Check for redirect chains in canonical URLs
  Object.entries(CANONICAL_URLS).forEach(([key, url]) => {
    if (Object.keys(DUPLICATE_URLS_TO_REDIRECT).includes(url)) {
      errors.push(`Canonical URL ${key} (${url}) is also in redirect list - this creates a redirect chain`);
    }
  });
  
  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
};

export default validateSEOConfig;
