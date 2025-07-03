/**
 * Emergency Client-Side Redirect Disabler
 * 
 * This module immediately disables all client-side redirects to prevent
 * Google Search Console "Page with redirect" errors
 */

// Emergency disable redirects immediately
if (typeof window !== 'undefined') {
  window.__DISABLE_CANONICAL_REDIRECTS__ = true;
  sessionStorage.setItem('disable_redirects', 'true');
  console.log('🚨 EMERGENCY: Client-side redirects disabled for GSC compliance');
}

export const isClientRedirectsDisabled = () => {
  if (typeof window === 'undefined') return true; // Disable on server-side
  
  return !!(
    window.__DISABLE_CANONICAL_REDIRECTS__ || 
    sessionStorage.getItem('disable_redirects')
  );
};

export default {
  isClientRedirectsDisabled
};