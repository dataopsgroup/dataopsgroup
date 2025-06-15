
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { CANONICAL_URLS, DUPLICATE_URLS_TO_REDIRECT } from '@/utils/seo-config';

interface CanonicalUrlResult {
  canonicalPath: string;
  fullCanonicalUrl: string;
  shouldRedirect: boolean;
  redirectTarget?: string;
}

/**
 * Hook to automatically determine the correct canonical URL for the current page
 * Handles query parameter stripping, trailing slash normalization, and duplicate URL detection
 */
export const useCanonicalUrl = (): CanonicalUrlResult => {
  const location = useLocation();
  
  return useMemo(() => {
    const baseUrl = 'https://dataopsgroup.com';
    
    // Safety check for location
    if (!location || !location.pathname) {
      console.warn('useCanonicalUrl: location not available, using fallback');
      return {
        canonicalPath: '/',
        fullCanonicalUrl: `${baseUrl}/`,
        shouldRedirect: false
      };
    }
    
    // Get the current pathname and normalize it
    let currentPath = location.pathname;
    
    // Normalize trailing slashes - remove them for consistency
    if (currentPath.endsWith('/') && currentPath !== '/') {
      currentPath = currentPath.slice(0, -1);
    }
    
    try {
      // Check if this path should redirect to a canonical URL
      const redirectTarget = DUPLICATE_URLS_TO_REDIRECT[currentPath as keyof typeof DUPLICATE_URLS_TO_REDIRECT];
      
      if (redirectTarget) {
        // This is a duplicate URL that should redirect
        return {
          canonicalPath: redirectTarget,
          fullCanonicalUrl: `${baseUrl}${redirectTarget}`,
          shouldRedirect: true,
          redirectTarget
        };
      }
      
      // This is already a canonical URL
      const canonicalPath = currentPath || '/';
      
      return {
        canonicalPath,
        fullCanonicalUrl: `${baseUrl}${canonicalPath}`,
        shouldRedirect: false
      };
    } catch (error) {
      console.warn('useCanonicalUrl: Error processing canonical URL:', error);
      // Fallback to current path
      const canonicalPath = currentPath || '/';
      return {
        canonicalPath,
        fullCanonicalUrl: `${baseUrl}${canonicalPath}`,
        shouldRedirect: false
      };
    }
  }, [location.pathname]);
};

export default useCanonicalUrl;
