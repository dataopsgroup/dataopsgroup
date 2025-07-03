
import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { CANONICAL_URLS, DUPLICATE_URLS_TO_REDIRECT } from '@/utils/seo-config';
import { buildAbsoluteUrl, buildCanonicalUrl } from '@/utils/url-builder';

interface CanonicalUrlResult {
  canonicalPath: string;
  fullCanonicalUrl: string;
  shouldRedirect: boolean;
  redirectTarget?: string;
}

/**
 * Hook to automatically determine the correct canonical URL for the current page
 * Handles query parameter stripping, trailing slash normalization, and duplicate URL detection
 * FIXED: Prevents canonical URLs from redirecting to themselves and uses centralized URL builder
 */
export const useCanonicalUrl = (): CanonicalUrlResult => {
  const location = useLocation();
  
  return useMemo(() => {
    // Safety check for location
    if (!location || !location.pathname) {
      console.warn('useCanonicalUrl: location not available, using fallback');
      return {
        canonicalPath: '/',
        fullCanonicalUrl: buildCanonicalUrl('/'),
        shouldRedirect: false
      };
    }
    
    // Get the current pathname and normalize it
    let currentPath = location.pathname;
    
    // Strip query parameters for canonical URL detection
    if (location.search) {
      // The buildCanonicalUrl function will handle parameter stripping
      console.log('🔍 Query parameters detected:', location.search);
    }
    
    // Normalize trailing slashes - remove them for consistency
    if (currentPath.endsWith('/') && currentPath !== '/') {
      currentPath = currentPath.slice(0, -1);
    }
    
    // Add debugging for the current page
    console.log('🔍 useCanonicalUrl Debug:', {
      originalPath: location.pathname,
      normalizedPath: currentPath,
      search: location.search,
      hash: location.hash
    });
    
    try {
      // CRITICAL FIX: Check if current path is already a canonical URL
      const isCanonicalUrl = Object.values(CANONICAL_URLS).includes(currentPath as any);
      
      if (isCanonicalUrl) {
        // This is already a canonical URL - DO NOT REDIRECT
        console.log(`✅ useCanonicalUrl: ${currentPath} is canonical, no redirect needed`);
        return {
          canonicalPath: currentPath,
          fullCanonicalUrl: buildCanonicalUrl(currentPath),
          shouldRedirect: false
        };
      }
      
      // Check if this path should redirect to a canonical URL
      const redirectTarget = DUPLICATE_URLS_TO_REDIRECT[currentPath as keyof typeof DUPLICATE_URLS_TO_REDIRECT];
      
      if (redirectTarget) {
        // This is a duplicate URL that should redirect
        console.log(`🔀 useCanonicalUrl: ${currentPath} should redirect to ${redirectTarget}`);
        return {
          canonicalPath: redirectTarget,
          fullCanonicalUrl: buildCanonicalUrl(redirectTarget),
          shouldRedirect: true,
          redirectTarget
        };
      }
      
      // This is a regular URL (not duplicate, not canonical)
      const canonicalPath = currentPath || '/';
      console.log(`📄 useCanonicalUrl: ${currentPath} is regular URL, using as canonical`);
      
      return {
        canonicalPath,
        fullCanonicalUrl: buildCanonicalUrl(canonicalPath),
        shouldRedirect: false
      };
    } catch (error) {
      console.warn('useCanonicalUrl: Error processing canonical URL:', error);
      // Fallback to current path
      const canonicalPath = currentPath || '/';
      return {
        canonicalPath,
        fullCanonicalUrl: buildCanonicalUrl(canonicalPath),
        shouldRedirect: false
      };
    }
  }, [location.pathname, location.search, location.hash]);
};

export default useCanonicalUrl;
