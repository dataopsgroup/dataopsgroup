/**
 * Redirect Prevention System
 * 
 * Prevents redirect chains from being deployed and monitors for runtime issues
 */

import { auditAllRedirects, validateUrlRedirect } from './comprehensive-redirect-audit';
import { CANONICAL_URLS } from './seo-config';

interface PreventionResult {
  canDeploy: boolean;
  blockers: string[];
  warnings: string[];
}

/**
 * Build-time validation that fails deployment if redirect issues exist
 */
export const validateForDeployment = (): PreventionResult => {
  console.log('🚀 Running pre-deployment redirect validation...');
  
  const audit = auditAllRedirects();
  const result: PreventionResult = {
    canDeploy: audit.isValid,
    blockers: audit.errors,
    warnings: audit.warnings
  };
  
  if (!result.canDeploy) {
    console.error('🚫 DEPLOYMENT BLOCKED: Redirect issues detected!');
    console.error('These issues MUST be fixed before deployment to prevent Ahrefs errors:');
    result.blockers.forEach(blocker => console.error(`  🚫 ${blocker}`));
    
    throw new Error('Deployment blocked due to redirect chain issues that would cause Ahrefs errors');
  }
  
  if (result.warnings.length > 0) {
    console.warn('⚠️ Deployment warnings (not blocking):');
    result.warnings.forEach(warning => console.warn(`  ⚠️ ${warning}`));
  }
  
  console.log('✅ Pre-deployment validation passed - safe to deploy');
  return result;
};

/**
 * Runtime monitoring for unexpected redirects
 */
export const monitorRuntimeRedirects = () => {
  if (typeof window === 'undefined') return;
  
  // Track navigation events to detect unexpected redirects
  const originalPushState = window.history.pushState;
  const originalReplaceState = window.history.replaceState;
  
  const trackRedirect = (url: string, method: string) => {
    // Check if this URL should redirect according to our config
    const shouldRedirect = !validateUrlRedirect(url);
    
    if (shouldRedirect) {
      console.warn(`🔀 Runtime redirect detected via ${method}: ${url}`);
      
      // Track in analytics if available
      if (window.gtag) {
        window.gtag('event', 'redirect_detected', {
          event_category: 'Navigation',
          event_label: url,
          custom_map: { metric1: method }
        });
      }
    }
  };
  
  // Monitor programmatic navigation
  window.history.pushState = function(...args) {
    const url = args[2] as string;
    if (url) trackRedirect(url, 'pushState');
    return originalPushState.apply(this, args);
  };
  
  window.history.replaceState = function(...args) {
    const url = args[2] as string;
    if (url) trackRedirect(url, 'replaceState');
    return originalReplaceState.apply(this, args);
  };
  
  console.log('🎯 Runtime redirect monitoring enabled');
};

/**
 * Validate specific redirect patterns that commonly cause issues
 */
export const validateCommonPatterns = (): boolean => {
  const problemPatterns = [
    // The specific pattern that caused the original issue
    '/guides/hubspot-expert-guide',
    '/guides/hubspot-expert',
    // Other patterns that commonly cause issues
    '/faqs/services-5',
    '/faqs/hubspot-services',
    '/assessment',
    '/blog'
  ];
  
  let hasIssues = false;
  
  problemPatterns.forEach(pattern => {
    if (!validateUrlRedirect(pattern)) {
      hasIssues = true;
      console.error(`❌ Common problem pattern detected: ${pattern}`);
    }
  });
  
  return !hasIssues;
};

/**
 * Emergency recovery - disable problematic redirects
 */
export const emergencyDisableRedirects = () => {
  console.warn('🚨 EMERGENCY: Disabling client-side redirects to prevent Ahrefs issues');
  
  // Store flag to disable CanonicalRedirect component
  if (typeof window !== 'undefined') {
    window.__DISABLE_CANONICAL_REDIRECTS__ = true;
    sessionStorage.setItem('disable_redirects', 'true');
  }
  
  return true;
};

/**
 * Check if redirects are emergency disabled
 */
export const areRedirectsDisabled = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  return !!(
    window.__DISABLE_CANONICAL_REDIRECTS__ || 
    sessionStorage.getItem('disable_redirects')
  );
};

// Initialize monitoring in browser environment
if (typeof window !== 'undefined') {
  monitorRuntimeRedirects();
}

export default {
  validateForDeployment,
  monitorRuntimeRedirects,
  validateCommonPatterns,
  emergencyDisableRedirects,
  areRedirectsDisabled
};
