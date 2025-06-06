
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToAnchor = (dependencyArray: any[] = [], disableOnManualNavigation = false) => {
  const location = useLocation();
  
  useEffect(() => {
    // Skip automatic scrolling if it's a manual navigation and disableOnManualNavigation is true
    if (disableOnManualNavigation && location.state?.manualNavigation) {
      return;
    }
    
    // Check if there's a hash in the URL
    if (location.hash) {
      // Remove the # from the hash
      const element = document.getElementById(location.hash.slice(1));
      
      // If the element exists, scroll to it
      if (element) {
        // Give a small delay to ensure the page is fully rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location, disableOnManualNavigation, ...dependencyArray]); // Add disableOnManualNavigation as dependency
};

export default useScrollToAnchor;
