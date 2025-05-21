
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface MetaValidatorProps {
  validateNoindex?: boolean;
  validateCanonical?: boolean;
  validateTitle?: boolean;
  validateDescription?: boolean;
}

/**
 * Development-only component to validate that important meta tags are present
 * This helps catch SEO issues during development
 */
const MetaValidator: React.FC<MetaValidatorProps> = ({
  validateNoindex = true,
  validateCanonical = true,
  validateTitle = true,
  validateDescription = true
}) => {
  const location = useLocation();
  
  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== 'development') return;
    
    // Give time for meta tags to be added to the document
    const timer = setTimeout(() => {
      const allMeta = document.querySelectorAll('meta');
      
      // Check for noindex and warn if found
      if (validateNoindex) {
        const noindexMeta = Array.from(allMeta).find(
          meta => meta.getAttribute('name') === 'robots' && 
                 meta.getAttribute('content')?.includes('noindex')
        );
        
        if (noindexMeta) {
          console.warn(
            `❌ SEO WARNING: Page ${location.pathname} has a noindex meta tag, which will prevent it from being indexed by search engines.`
          );
        }
      }
      
      // Check for canonical link
      if (validateCanonical) {
        const canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
          console.warn(
            `❌ SEO WARNING: Page ${location.pathname} is missing a canonical link tag.`
          );
        }
      }
      
      // Check for title
      if (validateTitle) {
        const title = document.querySelector('title');
        if (!title || !title.textContent) {
          console.warn(
            `❌ SEO WARNING: Page ${location.pathname} is missing a title.`
          );
        }
      }
      
      // Check for meta description
      if (validateDescription) {
        const description = Array.from(allMeta).find(
          meta => meta.getAttribute('name') === 'description'
        );
        
        if (!description) {
          console.warn(
            `❌ SEO WARNING: Page ${location.pathname} is missing a meta description.`
          );
        }
      }
    }, 500);
    
    return () => clearTimeout(timer);
  }, [location.pathname, validateNoindex, validateCanonical, validateTitle, validateDescription]);
  
  // This component doesn't render anything visible
  return null;
};

export default MetaValidator;
