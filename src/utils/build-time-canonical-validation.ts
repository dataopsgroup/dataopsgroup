
/**
 * Build-time validation for canonical URL integrity
 * This prevents canonical redirect issues from being deployed
 */

import { CANONICAL_URLS, DUPLICATE_URLS_TO_REDIRECT } from './seo-config';
import { validateCanonicalUrlIntegrity, logSEOValidation } from './seo-validation';

/**
 * Validates canonical URL configuration at build time
 * Throws errors that will fail the build if issues are found
 */
export const validateCanonicalConfigAtBuildTime = () => {
  console.log('🔍 Running build-time canonical URL validation...');
  
  const validation = validateCanonicalUrlIntegrity();
  
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
  
  // Run full SEO validation for comprehensive logging
  logSEOValidation();
};

/**
 * Specific validation for the problematic /guides/hubspot-expert URL
 */
export const validateHubSpotExpertGuideConfig = () => {
  const hubspotExpertCanonical = CANONICAL_URLS.hubspotExpert; // Should be '/guides/hubspot-expert'
  const duplicateUrls = Object.keys(DUPLICATE_URLS_TO_REDIRECT);
  
  console.log(`🎯 Validating HubSpot Expert Guide configuration...`);
  console.log(`📍 Canonical URL: ${hubspotExpertCanonical}`);
  
  // Check if canonical URL is in redirect list
  if (duplicateUrls.includes(hubspotExpertCanonical)) {
    throw new Error(`FATAL: ${hubspotExpertCanonical} is both canonical AND in redirect list - this causes the Ahrefs 200→307→200 error!`);
  }
  
  // Check redirect targets point to canonical URL
  const redirectsToHubSpotExpert = Object.entries(DUPLICATE_URLS_TO_REDIRECT)
    .filter(([, target]) => target === hubspotExpertCanonical);
  
  console.log(`📋 Found ${redirectsToHubSpotExpert.length} URLs redirecting to ${hubspotExpertCanonical}:`);
  redirectsToHubSpotExpert.forEach(([source]) => {
    console.log(`  🔀 ${source} → ${hubspotExpertCanonical}`);
  });
  
  console.log('✅ HubSpot Expert Guide configuration is valid');
};

// Run validation immediately when imported in development
if (process.env.NODE_ENV === 'development') {
  try {
    validateCanonicalConfigAtBuildTime();
    validateHubSpotExpertGuideConfig();
  } catch (error) {
    console.error('🚨 Canonical URL validation failed:', error);
  }
}

export default {
  validateCanonicalConfigAtBuildTime,
  validateHubSpotExpertGuideConfig
};
