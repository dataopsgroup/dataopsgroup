
/**
 * Ahrefs Issue Prevention Utilities
 * Validates and prevents SEO issues before they reach production
 */

import { validateSEOConfig } from './seo-config';
import { runLinkValidation } from './link-validator';

interface AhrefsValidationResult {
  canonicalIssues: string[];
  brokenLinks: Array<{ url: string; issue: string; replacement?: string }>;
  largeImages: Array<{ path: string; estimatedSize: string }>;
  isValid: boolean;
}

/**
 * Run comprehensive Ahrefs validation
 */
export const validateAhrefsIssues = (): AhrefsValidationResult => {
  const result: AhrefsValidationResult = {
    canonicalIssues: [],
    brokenLinks: [],
    largeImages: [],
    isValid: true
  };
  
  // 1. Validate canonical URL configuration
  const seoValidation = validateSEOConfig();
  if (!seoValidation.isValid) {
    result.canonicalIssues = seoValidation.errors;
    result.isValid = false;
  }
  
  // 2. Validate links
  const linkValidation = runLinkValidation();
  const brokenLinks = linkValidation.filter(link => !link.isValid);
  if (brokenLinks.length > 0) {
    result.brokenLinks = brokenLinks.map(link => ({
      url: link.url,
      issue: link.issue || 'Unknown issue',
      replacement: link.replacement
    }));
    result.isValid = false;
  }
  
  // 3. Check for potentially large images
  const potentiallyLargeImages = [
    '/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png',
    '/lovable-uploads/5f3a8bdf-410e-4727-8fa0-eb20abe91242.png'
  ];
  
  result.largeImages = potentiallyLargeImages.map(path => ({
    path,
    estimatedSize: 'Large (optimization recommended)'
  }));
  
  return result;
};

/**
 * Log validation results for development
 */
export const logAhrefsValidation = () => {
  if (process.env.NODE_ENV !== 'development') return;
  
  const validation = validateAhrefsIssues();
  
  console.log('🔍 Ahrefs Issue Prevention Check');
  
  if (validation.isValid) {
    console.log('✅ No potential Ahrefs issues detected');
  } else {
    console.warn('⚠️ Potential Ahrefs issues found:');
    
    if (validation.canonicalIssues.length > 0) {
      console.warn('  📍 Canonical URL Issues:');
      validation.canonicalIssues.forEach(issue => console.warn(`    - ${issue}`));
    }
    
    if (validation.brokenLinks.length > 0) {
      console.warn('  🔗 Broken Links:');
      validation.brokenLinks.forEach(link => {
        console.warn(`    - ${link.url}: ${link.issue}`);
        if (link.replacement) {
          console.warn(`      → Suggested: ${link.replacement}`);
        }
      });
    }
    
    if (validation.largeImages.length > 0) {
      console.warn('  📷 Large Images:');
      validation.largeImages.forEach(img => console.warn(`    - ${img.path}: ${img.estimatedSize}`));
    }
  }
  
  return validation;
};

/**
 * Generate action items to fix Ahrefs issues
 */
export const generateFixActionItems = (validation: AhrefsValidationResult): string[] => {
  const actions: string[] = [];
  
  if (validation.canonicalIssues.length > 0) {
    actions.push('🔧 Fix canonical URL redirect chains in seo-config.ts');
  }
  
  if (validation.brokenLinks.length > 0) {
    actions.push('🔧 Replace broken external links with working alternatives');
  }
  
  if (validation.largeImages.length > 0) {
    actions.push('🔧 Optimize large images to reduce file sizes below 500KB');
  }
  
  return actions;
};

export default {
  validateAhrefsIssues,
  logAhrefsValidation,
  generateFixActionItems
};
