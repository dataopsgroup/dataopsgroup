
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    try {
      console.log('🔝 ScrollToTop: navigated to', pathname);
      window.scrollTo(0, 0);
    } catch (error) {
      console.warn('ScrollToTop failed:', error);
      // Fallback: try alternative scroll method
      try {
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      } catch (fallbackError) {
        console.warn('ScrollToTop fallback also failed:', fallbackError);
      }
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
