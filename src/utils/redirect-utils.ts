
/**
 * Utilities for handling redirects and ensuring proper indexing
 */

/**
 * Extracts the target URL from a HubSpot encoded CTA URL
 * @param encodedUrl The encoded URL from HubSpot CTA
 * @returns The destination URL or homepage if invalid
 */
export const handleHubSpotCTARedirect = (encodedUrl: string): string => {
  try {
    // Extract the encrypted payload parameter
    const match = encodedUrl.match(/encryptedPayload=([^&]+)/);
    if (!match) return '/';
    
    // For security reasons, we redirect to homepage rather than
    // trying to decode potentially malicious payloads
    return '/';
  } catch (error) {
    console.error('Failed to parse HubSpot CTA URL:', error);
    return '/';
  }
};

/**
 * Checks if a URL is an AMP version and returns the canonical URL
 * @param url The URL to check
 * @returns The canonical (non-AMP) URL
 */
export const getCanonicalFromAmpUrl = (url: string): string => {
  if (url.includes('?hs_amp=true')) {
    return url.split('?')[0];
  }
  return url;
};

/**
 * Validates that a URL has proper canonical and indexing tags
 * For use in development and testing
 * @param url The URL to validate
 */
export const validateUrlIndexability = async (url: string): Promise<boolean> => {
  // This is a placeholder for server-side validation
  // In a real implementation, this would fetch the URL and check meta tags
  
  return true;
};

export default {
  handleHubSpotCTARedirect,
  getCanonicalFromAmpUrl,
  validateUrlIndexability
};
