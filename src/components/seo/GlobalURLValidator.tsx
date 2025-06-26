
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { validateCurrentPageUrls } from '@/utils/og-canonical-validator';
import { buildCanonicalUrl, buildOGUrl } from '@/utils/url-builder';

/**
 * Global URL Validator - automatically checks for canonical/OG mismatches on every page
 * This component runs validation checks and alerts developers to SEO issues
 */
const GlobalURLValidator: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') return;

    // Wait for the page to fully render before checking
    const timer = setTimeout(() => {
      const currentPath = location.pathname;
      
      // Validate the current page's URLs
      const validation = validateCurrentPageUrls();
      
      if (!validation.isValid) {
        console.group('🚨 GLOBAL URL VALIDATOR - ISSUES DETECTED');
        console.error(`Page: ${currentPath}`);
        console.error('Errors:', validation.errors);
        
        if (validation.warnings.length > 0) {
          console.warn('Warnings:', validation.warnings);
        }
        
        // Show what the URLs should be
        const expectedCanonical = buildCanonicalUrl(currentPath);
        const expectedOG = buildOGUrl(currentPath);
        
        console.log('Expected URLs:', {
          canonical: expectedCanonical,
          og: expectedOG,
          match: expectedCanonical === expectedOG
        });
        
        console.log('Actual URLs:', {
          canonical: validation.canonicalUrl,
          og: validation.ogUrl
        });
        
        console.groupEnd();
        
        // Track in analytics if available
        if (window.gtag) {
          window.gtag('event', 'seo_url_mismatch', {
            event_category: 'SEO',
            event_label: currentPath,
            custom_map: { 
              canonical: validation.canonicalUrl,
              og: validation.ogUrl
            }
          });
        }
      } else {
        console.log(`✅ URL Validator: ${currentPath} - All URLs match correctly`);
      }
    }, 500); // Wait 500ms for all components to render

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null; // This component doesn't render anything
};

export default GlobalURLValidator;
