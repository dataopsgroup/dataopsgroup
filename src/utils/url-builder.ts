
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

export default {
  buildAbsoluteUrl,
  buildCanonicalUrl,
  buildOGUrl,
  validateUrlConsistency,
  extractDomain,
  isCanonicalDomain,
  CANONICAL_DOMAIN
};
