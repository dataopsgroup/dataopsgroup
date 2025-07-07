import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { validateComponentNoindex, isAllowedNoindexPage, isRequiredIndexablePage } from '@/utils/noindex-audit';

/**
 * Development-only component to validate noindex usage
 * Warns when content pages have noindex or system pages lack noindex
 */
const NoindexValidator: React.FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    // Only run in development
    if (process.env.NODE_ENV !== 'development') return;
    
    // Give time for meta tags to be added to the document
    const timer = setTimeout(() => {
      const robotsMeta = document.querySelector('meta[name="robots"]');
      const hasNoindex = robotsMeta?.getAttribute('content')?.includes('noindex') || false;
      
      const validation = validateComponentNoindex(location.pathname, hasNoindex);
      
      if (!validation.isValid) {
        console.error(`🚨 NOINDEX ERROR: ${validation.recommendation}`);
        
        // Provide specific guidance
        if (isRequiredIndexablePage(location.pathname) && hasNoindex) {
          console.error('💡 FIX: Remove noindex prop from MetaHead component or set it to false');
          console.error('💡 This is a content page that needs to be discovered by search engines');
        } else if (isAllowedNoindexPage(location.pathname) && !hasNoindex) {
          console.warn('💡 RECOMMENDATION: Add noindex={true} to MetaHead component');
          console.warn('💡 This is a system page that should not be indexed');
        }
      } else {
        console.log(`✅ NOINDEX OK: ${validation.recommendation}`);
      }
      
      // Additional context for developers
      console.log(`📄 Page: ${location.pathname}`);
      console.log(`🔍 Has noindex: ${hasNoindex}`);
      console.log(`📋 Category: ${
        isRequiredIndexablePage(location.pathname) ? 'Content Page (should be indexed)' :
        isAllowedNoindexPage(location.pathname) ? 'System Page (can be noindex)' :
        'Uncategorized Page'
      }`);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [location.pathname]);
  
  // This component doesn't render anything visible
  return null;
};

export default NoindexValidator;