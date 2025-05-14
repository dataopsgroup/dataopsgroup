
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NotFound from './NotFound';

const TermsRedirect = () => {
  // Try to get navigate function, but it might be null outside router context
  let navigate;
  
  try {
    navigate = useNavigate();
  } catch (error) {
    // If we can't get navigate function, we'll handle it in the component
  }
  
  useEffect(() => {
    if (navigate) {
      // Redirect to homepage if we have router context
      navigate('/', { replace: true });
    } else if (typeof window !== 'undefined') {
      // Manual redirect if no router context
      window.location.href = '/';
    }
  }, [navigate]);
  
  // If we don't have router context, render 404 page
  if (!navigate) {
    return <NotFound />;
  }
  
  // During redirect, return nothing
  return null;
};

export default TermsRedirect;
