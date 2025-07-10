
/**
 * Build-time validation for canonical URL integrity
 * This prevents canonical redirect issues from being deployed
 */

import { CANONICAL_URLS, DUPLICATE_URLS_TO_REDIRECT } from './seo-config';
import { validateSEOConfig } from './seo/validation';

/**
 * Validates canonical URL configuration at build time
 * Throws errors that will fail the build if issues are found
 */
export const validateCanonicalConfigAtBuildTime = () => {
  console.log('🔍 Running build-time canonical URL validation...');
  
  const validation = validateSEOConfig();
  
  if (!validation.isValid) {
    console.error('🚨 BUILD FAILED: Canonical URL configuration errors detected!');
    console.error('These issues MUST be fixed before deployment to prevent Ahrefs redirect chain errors:');
    
    validation.errors.forEach(error => {
      console.error(`❌ ${error}`);
    });
    
    throw new Error('Canonical URL validation failed - cannot deploy with redirect chain issues');
  }
  
  // Log warnings but don't fail build
  if (validation.warnings.length > 0) {
    console.warn('⚠️ Canonical URL warnings (not blocking deployment):');
    validation.warnings.forEach(warning => {
      console.warn(`⚠️ ${warning}`);
    });
  }
  
  console.log('✅ Canonical URL validation passed');
  console.log('🔍 SEO validation completed successfully');
};

/**
 * Specific validation for guide URLs that were causing issues
 */
export const validateGuideUrlsConfig = () => {
  const duplicateUrls = Object.keys(DUPLICATE_URLS_TO_REDIRECT);
  
  console.log(`🎯 Validating Guide URLs configuration...`);
  
  // Validate HubSpot Expert Guide
  const hubspotExpertCanonical = CANONICAL_URLS.hubspotExpert;
  console.log(`📍 HubSpot Expert Canonical: ${hubspotExpertCanonical}`);
  
  if (duplicateUrls.includes(hubspotExpertCanonical)) {
    throw new Error(`FATAL: ${hubspotExpertCanonical} is both canonical AND in redirect list!`);
  }
  
  // Validate Complete HubSpot Guide
  const completeGuideCanonical = CANONICAL_URLS.completeHubspotGuide;
  console.log(`📍 Complete Guide Canonical: ${completeGuideCanonical}`);
  
  if (duplicateUrls.includes(completeGuideCanonical)) {
    throw new Error(`FATAL: ${completeGuideCanonical} is both canonical AND in redirect list!`);
  }
  
  // Check redirects for both guides
  const guideRedirects = Object.entries(DUPLICATE_URLS_TO_REDIRECT)
    .filter(([, target]) => target === hubspotExpertCanonical || target === completeGuideCanonical);
  
  console.log(`📋 Found ${guideRedirects.length} URLs redirecting to guide pages:`);
  guideRedirects.forEach(([source, target]) => {
    console.log(`  🔀 ${source} → ${target}`);
  });
  
  console.log('✅ Guide URLs configuration is valid');
};

// Run validation immediately when imported in development
if (process.env.NODE_ENV === 'development') {
  try {
    validateCanonicalConfigAtBuildTime();
    validateGuideUrlsConfig();
  } catch (error) {
    console.error('🚨 Canonical URL validation failed:', error);
  }
}

export default {
  validateCanonicalConfigAtBuildTime,
  validateGuideUrlsConfig
};
