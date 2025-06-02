
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
 * Removes HubSpot language parameter from URL
 * @param url URL potentially containing hsLang parameter
 * @returns Clean URL without the language parameter
 */
export const removeHsLangParameter = (url: string): string => {
  if (url.includes('?hsLang=')) {
    return url.split('?')[0];
  }
  
  if (url.includes('&hsLang=')) {
    return url.replace(/&hsLang=[^&]+/, '');
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

/**
 * Creates a proper 301 redirect response
 * @param destination The destination URL
 * @returns Response object with proper redirect headers
 */
export const createSEOFriendlyRedirect = (destination: string): Response => {
  return new Response(null, {
    status: 301,
    headers: {
      'Location': destination,
      'Cache-Control': 'public, max-age=31536000', // Cache for 1 year
      'X-Robots-Tag': 'noindex'
    }
  });
};

/**
 * Checks if request is from a search engine bot
 * Client-side version of bot detection
 * @param userAgent The user agent string
 * @returns True if request is from a bot
 */
export const isSearchEngineBot = (userAgent: string): boolean => {
  const botPatterns = [
    /googlebot/i,
    /bingbot/i,
    /slurp/i,
    /duckduckbot/i,
    /baiduspider/i,
    /yandexbot/i,
    /facebookexternalhit/i,
    /twitterbot/i,
    /linkedinbot/i,
    /applebot/i,
    /ia_archiver/i
  ];
  
  return botPatterns.some(pattern => pattern.test(userAgent));
};

export default {
  handleHubSpotCTARedirect,
  getCanonicalFromAmpUrl,
  removeHsLangParameter,
  validateUrlIndexability,
  createSEOFriendlyRedirect,
  isSearchEngineBot
};

