
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCanonicalUrl } from '@/hooks/useCanonicalUrl';

/**
 * Component that automatically redirects duplicate URLs to their canonical versions
 * Should be placed in the main layout or route components
 */
const CanonicalRedirect: React.FC = () => {
  const navigate = useNavigate();
  const { shouldRedirect, redirectTarget } = useCanonicalUrl();
  
  useEffect(() => {
    if (shouldRedirect && redirectTarget) {
      console.log(`🔀 Redirecting to canonical URL: ${redirectTarget}`);
      navigate(redirectTarget, { replace: true });
    }
  }, [shouldRedirect, redirectTarget, navigate]);
  
  return null; // This component doesn't render anything
};

export default CanonicalRedirect;
