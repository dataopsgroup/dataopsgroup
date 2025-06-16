
/**
 * OpenGraph and Canonical URL Validation System
 * 
 * Prevents deployment of pages with mismatched canonical and OG URLs
 */

import { buildAbsoluteUrl, validateUrlConsistency, isCanonicalDomain } from './url-builder';

interface URLValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
  canonicalUrl?: string;
  ogUrl?: string;
}

/**
 * Validate current page's canonical and OG URLs
 */
export const validateCurrentPageUrls = (): URLValidationResult => {
  const result: URLValidationResult = {
    isValid: true,
    errors: [],
    warnings: []
  };

  // Only run in browser environment
  if (typeof window === 'undefined') {
    return result;
  }

  // Get canonical URL
  const canonicalElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  const ogUrlElement = document.querySelector('meta[property="og:url"]') as HTMLMetaElement;

  if (!canonicalElement) {
    result.errors.push('Missing canonical URL');
    result.isValid = false;
  }

  if (!ogUrlElement) {
    result.errors.push('Missing OpenGraph URL');
    result.isValid = false;
  }

  if (canonicalElement && ogUrlElement) {
    const canonicalUrl = canonicalElement.href;
    const ogUrl = ogUrlElement.content;

    result.canonicalUrl = canonicalUrl;
    result.ogUrl = ogUrl;

    // Check if URLs match exactly
    if (!validateUrlConsistency(canonicalUrl, ogUrl)) {
      result.errors.push(`Canonical URL (${canonicalUrl}) does not match OG URL (${ogUrl})`);
      result.isValid = false;
    }

    // Check if both use canonical domain
    if (!isCanonicalDomain(canonicalUrl)) {
      result.errors.push(`Canonical URL uses incorrect domain: ${canonicalUrl}`);
      result.isValid = false;
    }

    if (!isCanonicalDomain(ogUrl)) {
      result.errors.push(`OG URL uses incorrect domain: ${ogUrl}`);
      result.isValid = false;
    }

    // Check for protocol consistency
    if (!canonicalUrl.startsWith('https://')) {
      result.warnings.push('Canonical URL should use HTTPS');
    }

    if (!ogUrl.startsWith('https://')) {
      result.warnings.push('OG URL should use HTTPS');
    }
  }

  return result;
};

/**
 * Runtime monitoring for URL mismatches
 */
export const monitorUrlConsistency = () => {
  if (typeof window === 'undefined') return;

  // Check URLs after page load
  window.addEventListener('load', () => {
    const validation = validateCurrentPageUrls();
    
    if (!validation.isValid) {
      console.error('🚨 URL MISMATCH DETECTED:', validation.errors);
      
      // Track in analytics if available
      if (window.gtag) {
        window.gtag('event', 'url_mismatch', {
          event_category: 'SEO',
          event_label: window.location.pathname,
          custom_map: { 
            canonical: validation.canonicalUrl,
            og: validation.ogUrl
          }
        });
      }
    }
  });
};

/**
 * Build-time validation helper
 */
export const validateUrlPair = (canonicalPath: string, ogPath: string): URLValidationResult => {
  const canonicalUrl = buildAbsoluteUrl(canonicalPath);
  const ogUrl = buildAbsoluteUrl(ogPath);

  const result: URLValidationResult = {
    isValid: true,
    errors: [],
    warnings: [],
    canonicalUrl,
    ogUrl
  };

  if (!validateUrlConsistency(canonicalUrl, ogUrl)) {
    result.errors.push(`URL mismatch: canonical=${canonicalUrl}, og=${ogUrl}`);
    result.isValid = false;
  }

  return result;
};

// Initialize monitoring in browser
if (typeof window !== 'undefined') {
  monitorUrlConsistency();
}

export default {
  validateCurrentPageUrls,
  monitorUrlConsistency,
  validateUrlPair
};
