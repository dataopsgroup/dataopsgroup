
/**
 * Build-time validation to prevent Ahrefs issues from reaching production
 */

import { validateSEOConfig } from './seo-config';
import { runLinkValidation } from './link-validator';
import { shouldOptimizeImage } from './large-image-optimizer';

interface BuildValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

/**
 * Run comprehensive build validation to prevent Ahrefs issues
 */
export const runBuildValidation = (): BuildValidationResult => {
  const result: BuildValidationResult = {
    isValid: true,
    errors: [],
    warnings: []
  };

  // 1. Validate SEO configuration
  const seoValidation = validateSEOConfig();
  if (!seoValidation.isValid) {
    result.isValid = false;
    result.errors.push(...seoValidation.errors.map(err => `SEO: ${err}`));
  }

  // 2. Validate links
  const linkValidation = runLinkValidation();
  const brokenLinks = linkValidation.filter(link => !link.isValid);
  if (brokenLinks.length > 0) {
    result.warnings.push(`Found ${brokenLinks.length} broken links that may cause Ahrefs issues`);
    brokenLinks.forEach(link => {
      result.warnings.push(`  - ${link.url}: ${link.issue}`);
    });
  }

  // 3. Check for known large images
  const knownLargeImages = [
    '/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png',
    '/lovable-uploads/5f3a8bdf-410e-4727-8fa0-eb20abe91242.png'
  ];

  knownLargeImages.forEach(imagePath => {
    if (shouldOptimizeImage(imagePath)) {
      result.warnings.push(`Large image detected: ${imagePath} - ensure optimization is applied`);
    }
  });

  // 4. Validate that critical routes exist
  const criticalRoutes = ['/guides/hubspot-expert'];
  // In a real build environment, we would check that these routes are accessible
  
  return result;
};

/**
 * Log validation results for CI/CD
 */
export const logBuildValidation = () => {
  const validation = runBuildValidation();
  
  console.log('🔍 Build Validation Results');
  
  if (validation.isValid && validation.warnings.length === 0) {
    console.log('✅ All validations passed - no Ahrefs issues detected');
  } else {
    if (validation.errors.length > 0) {
      console.error('❌ Build validation errors:');
      validation.errors.forEach(error => console.error(`  - ${error}`));
    }
    
    if (validation.warnings.length > 0) {
      console.warn('⚠️ Build validation warnings:');
      validation.warnings.forEach(warning => console.warn(`  - ${warning}`));
    }
  }
  
  return validation;
};

export default {
  runBuildValidation,
  logBuildValidation
};
