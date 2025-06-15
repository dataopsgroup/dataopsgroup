
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCanonicalUrl } from '@/hooks/useCanonicalUrl';

/**
 * Component that automatically redirects duplicate URLs to their canonical versions
 * Should be placed in the main layout or route components
 */
const CanonicalRedirect: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isReady, setIsReady] = useState(false);
  const { shouldRedirect, redirectTarget } = useCanonicalUrl();
  
  // Wait for router to be fully initialized
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    // Only perform redirects after router is ready and we have a valid redirect target
    if (!isReady || !shouldRedirect || !redirectTarget) {
      return;
    }
    
    // Prevent redirect loops
    if (location.pathname === redirectTarget) {
      console.log('🔄 Preventing redirect loop:', location.pathname, '->', redirectTarget);
      return;
    }
    
    try {
      console.log(`🔀 Redirecting to canonical URL: ${redirectTarget}`);
      navigate(redirectTarget, { replace: true });
    } catch (error) {
      console.warn('Failed to redirect to canonical URL:', error);
    }
  }, [isReady, shouldRedirect, redirectTarget, navigate, location.pathname]);
  
  return null; // This component doesn't render anything
};

export default CanonicalRedirect;
