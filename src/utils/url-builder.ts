
/**
 * Centralized URL Builder for Consistent Domain Usage
 * 
 * CRITICAL: All URLs must use this utility to prevent canonical/OG mismatches
 * Standardizes on dataopsgroup.com (without www) for all URLs
 */

// STANDARDIZED DOMAIN - All URLs must use this
const CANONICAL_DOMAIN = 'https://dataopsgroup.com';

/**
 * Build absolute URL with consistent domain
 */
export const buildAbsoluteUrl = (path: string): string => {
  // Development warning for incorrect usage
  if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
    if (path.includes('window.location.origin') || path.includes('.lovableproject.com')) {
      console.warn('🚨 URL BUILDER WARNING: Detected non-standard domain usage. Use buildAbsoluteUrl() instead of window.location.origin');
    }
  }
  
  // Ensure path starts with /
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Remove any existing domain if accidentally included
  const cleanPath = normalizedPath.replace(/^https?:\/\/[^\/]+/, '');
  
  return `${CANONICAL_DOMAIN}${cleanPath}`;
};

/**
 * Build canonical URL (same as absolute for consistency)
 */
export const buildCanonicalUrl = (path: string): string => {
  return buildAbsoluteUrl(path);
};

/**
 * Build OpenGraph URL (must match canonical exactly)
 */
export const buildOGUrl = (path: string): string => {
  return buildAbsoluteUrl(path);
};

/**
 * Validate that canonical and OG URLs match
 */
export const validateUrlConsistency = (canonicalUrl: string, ogUrl: string): boolean => {
  const normalizedCanonical = canonicalUrl.replace(/\/$/, '');
  const normalizedOG = ogUrl.replace(/\/$/, '');
  
  return normalizedCanonical === normalizedOG;
};

/**
 * Extract domain from URL for validation
 */
export const extractDomain = (url: string): string => {
  try {
    return new URL(url).origin;
  } catch {
    return '';
  }
};

/**
 * Check if URL uses the correct canonical domain
 */
export const isCanonicalDomain = (url: string): boolean => {
  const domain = extractDomain(url);
  return domain === CANONICAL_DOMAIN;
};

/**
 * Development helper to warn about window.location.origin usage
 * Should be called in component useEffect to catch incorrect patterns
 */
export const validatePageUrls = (currentPath: string) => {
  if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
    // Check for canonical/OG mismatches
    setTimeout(() => {
      const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      const ogUrl = document.querySelector('meta[property="og:url"]') as HTMLMetaElement;
      
      if (canonical && ogUrl) {
        if (!validateUrlConsistency(canonical.href, ogUrl.content)) {
          console.error('🚨 CANONICAL/OG MISMATCH DETECTED:', {
            canonical: canonical.href,
            og: ogUrl.content,
            page: currentPath
          });
        }
        
        if (!isCanonicalDomain(canonical.href)) {
          console.error('🚨 INCORRECT CANONICAL DOMAIN:', canonical.href);
        }
        
        if (!isCanonicalDomain(ogUrl.content)) {
          console.error('🚨 INCORRECT OG DOMAIN:', ogUrl.content);
        }
      }
    }, 100);
  }
};

export default {
  buildAbsoluteUrl,
  buildCanonicalUrl,
  buildOGUrl,
  validateUrlConsistency,
  extractDomain,
  isCanonicalDomain,
  validatePageUrls,
  CANONICAL_DOMAIN
};
