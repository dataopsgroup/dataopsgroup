
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TermsRedirect = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    // Redirect to homepage
    navigate('/', { replace: true });
  }, [navigate]);
  
  return null;
};

export default TermsRedirect;
