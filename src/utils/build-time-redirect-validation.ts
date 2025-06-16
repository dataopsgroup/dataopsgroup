
/**
 * Enhanced Build-Time Redirect Validation
 * 
 * Comprehensive validation that runs during build to prevent deployment
 * of redirect issues that would cause Ahrefs errors
 */

import { validateForDeployment } from './redirect-prevention-system';
import { auditAllRedirects } from './comprehensive-redirect-audit';
import { CANONICAL_URLS, DUPLICATE_URLS_TO_REDIRECT } from './seo-config';

/**
 * Main build validation that must pass for deployment
 */
export const runBuildTimeRedirectValidation = () => {
  console.log('🔍 Running comprehensive build-time redirect validation...');
  
  try {
    // 1. Run the comprehensive audit
    const audit = auditAllRedirects();
    
    // 2. Check deployment readiness
    const deployment = validateForDeployment();
    
    // 3. Validate specific problem patterns
    validateProblematicPatterns();
    
    // 4. Cross-check with sitemap configuration
    validateSitemapConsistency();
    
    // 5. Final validation summary
    if (audit.isValid && deployment.canDeploy) {
      console.log('✅ BUILD VALIDATION PASSED - Safe to deploy without Ahrefs issues');
      return true;
    } else {
      console.error('🚫 BUILD VALIDATION FAILED - Deployment blocked to prevent Ahrefs issues');
      return false;
    }
    
  } catch (error) {
    console.error('🚨 Build validation failed with error:', error);
    throw error;
  }
};

/**
 * Validate specific patterns that have historically caused issues
 */
const validateProblematicPatterns = () => {
  console.log('🎯 Validating historically problematic patterns...');
  
  const problematicUrls = [
    '/guides/hubspot-expert-guide', // The original issue
    '/guides/hubspot-expert',       // Canonical version
    '/faqs/services-5',             // FAQ duplicates
    '/faqs/hubspot-services',
    '/faqs/hubspot-experts',
    '/assessment',                  // Assessment redirects
    '/blog'                         // Blog redirects
  ];
  
  const canonicalUrls = Object.values(CANONICAL_URLS);
  const redirectSources = Object.keys(DUPLICATE_URLS_TO_REDIRECT);
  
  problematicUrls.forEach(url => {
    const isCanonical = canonicalUrls.includes(url as any);
    const isRedirectSource = redirectSources.includes(url);
    
    if (isCanonical && isRedirectSource) {
      throw new Error(`CRITICAL: ${url} is both canonical AND redirect source - this creates Ahrefs issues!`);
    }
    
    console.log(`✅ ${url}: ${isCanonical ? 'canonical' : isRedirectSource ? 'redirects' : 'not configured'}`);
  });
};

/**
 * Ensure sitemap only contains canonical URLs that don't redirect
 */
const validateSitemapConsistency = () => {
  console.log('🗺️ Validating sitemap consistency...');
  
  const canonicalUrls = Object.values(CANONICAL_URLS);
  const redirectSources = Object.keys(DUPLICATE_URLS_TO_REDIRECT);
  
  // Check that no canonical URLs are also redirect sources
  const conflicts = canonicalUrls.filter(url => redirectSources.includes(url));
  
  if (conflicts.length > 0) {
    throw new Error(`SITEMAP CONFLICTS: These canonical URLs also redirect: ${conflicts.join(', ')}`);
  }
  
  console.log(`✅ All ${canonicalUrls.length} canonical URLs are redirect-free`);
};

/**
 * Generate comprehensive validation report
 */
export const generateValidationReport = () => {
  const audit = auditAllRedirects();
  
  const report = {
    timestamp: new Date().toISOString(),
    status: audit.isValid ? 'PASS' : 'FAIL',
    summary: {
      totalCanonicalUrls: Object.keys(CANONICAL_URLS).length,
      totalRedirectRules: Object.keys(DUPLICATE_URLS_TO_REDIRECT).length,
      errors: audit.errors.length,
      warnings: audit.warnings.length,
      redirectChains: audit.redirectChains.length
    },
    details: audit
  };
  
  console.log('📊 Validation Report Generated:', JSON.stringify(report, null, 2));
  return report;
};

// Auto-run in Node.js build environment
if (typeof window === 'undefined' && process.env.NODE_ENV !== 'test') {
  try {
    runBuildTimeRedirectValidation();
  } catch (error) {
    console.error('🚨 BUILD FAILED: Redirect validation error:', error);
    process.exit(1);
  }
}

export default {
  runBuildTimeRedirectValidation,
  generateValidationReport,
  validateProblematicPatterns,
  validateSitemapConsistency
};
