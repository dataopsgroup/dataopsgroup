
import React, { useEffect } from 'react';
import { validateSEOConfig } from '@/utils/seo-config';

/**
 * Development-only component to validate canonical/OG URL consistency
 * Helps catch mismatches that cause Ahrefs warnings
 */
const CanonicalOGValidator: React.FC = () => {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;
    
    // Validate SEO configuration
    const validation = validateSEOConfig();
    if (!validation.isValid) {
      console.error('🚨 SEO Configuration Errors:', validation.errors);
    }
    
    // Check current page's canonical and OG URLs
    const canonicalElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    const ogUrlElement = document.querySelector('meta[property="og:url"]') as HTMLMetaElement;
    
    if (canonicalElement && ogUrlElement) {
      const canonicalUrl = canonicalElement.href;
      const ogUrl = ogUrlElement.content;
      
      if (canonicalUrl !== ogUrl) {
        console.error('🚨 CANONICAL/OG URL MISMATCH DETECTED:', {
          canonical: canonicalUrl,
          ogUrl: ogUrl,
          page: window.location.pathname
        });
      } else {
        console.log('✅ Canonical and OG URLs match:', canonicalUrl);
      }
    }
  }, []);
  
  return null; // This component doesn't render anything
};

export default CanonicalOGValidator;
