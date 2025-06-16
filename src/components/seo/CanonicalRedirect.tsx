
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useCanonicalUrl } from '@/hooks/useCanonicalUrl';
import { CANONICAL_URLS } from '@/utils/seo-config';

/**
 * Component that automatically redirects duplicate URLs to their canonical versions
 * FIXED: Added strict validation to prevent canonical URLs from redirecting
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
    
    // CRITICAL FIX: Prevent canonical URLs from redirecting to themselves
    const currentPath = location.pathname.endsWith('/') && location.pathname !== '/' 
      ? location.pathname.slice(0, -1) 
      : location.pathname;
    
    const isCurrentCanonical = Object.values(CANONICAL_URLS).includes(currentPath as any);
    
    if (isCurrentCanonical) {
      console.log(`🛑 CanonicalRedirect: Preventing redirect of canonical URL ${currentPath}`);
      return;
    }
    
    // Prevent redirect loops
    if (currentPath === redirectTarget) {
      console.log('🔄 CanonicalRedirect: Preventing redirect loop:', currentPath, '->', redirectTarget);
      return;
    }
    
    // Additional safety: Don't redirect if target is the same as current (accounting for trailing slashes)
    const normalizedTarget = redirectTarget.endsWith('/') && redirectTarget !== '/' 
      ? redirectTarget.slice(0, -1) 
      : redirectTarget;
    
    if (currentPath === normalizedTarget) {
      console.log('🔄 CanonicalRedirect: Preventing unnecessary redirect (same normalized paths):', currentPath);
      return;
    }
    
    try {
      console.log(`🔀 CanonicalRedirect: Redirecting ${currentPath} to canonical URL: ${redirectTarget}`);
      navigate(redirectTarget, { replace: true });
    } catch (error) {
      console.warn('CanonicalRedirect: Failed to redirect to canonical URL:', error);
    }
  }, [isReady, shouldRedirect, redirectTarget, navigate, location.pathname]);
  
  return null; // This component doesn't render anything
};

export default CanonicalRedirect;
