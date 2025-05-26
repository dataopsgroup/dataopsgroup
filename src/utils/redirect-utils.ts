
/**
 * URL redirect utilities for HubSpot and other redirects
 */

// Handle HubSpot CTA redirects
export const handleHubSpotCTARedirect = (searchParams: string): string => {
  try {
    const params = new URLSearchParams(searchParams);
    const destination = params.get('destination') || params.get('url');
    
    if (destination) {
      // Decode the destination URL
      return decodeURIComponent(destination);
    }
    
    // Default redirect if no destination found
    return '/contact';
  } catch (error) {
    console.error('Error handling HubSpot redirect:', error);
    return '/contact';
  }
};

// Remove hsLang parameter from URL
export const removeHsLangParameter = (url: string): string => {
  try {
    const urlObj = new URL(url);
    urlObj.searchParams.delete('hsLang');
    return urlObj.toString();
  } catch (error) {
    console.error('Error removing hsLang parameter:', error);
    return url;
  }
};
