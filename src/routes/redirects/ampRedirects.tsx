
import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

// For the AMP redirect, we need a component that can access route params
const AmpRedirectHandler = () => {
  const { postId } = useParams();
  // Clean up any query parameters from the postId 
  const cleanPostId = postId ? postId.split('?')[0] : '';
  return <Navigate to={`/insights/${cleanPostId}`} replace />;
};

// Handle hsLang parameter redirects
const HsLangRedirectHandler = () => {
  const { '*': path } = useParams();
  // Remove hsLang parameter and redirect to clean URL
  const cleanPath = path ? path.split('?')[0] : '';
  return <Navigate to={`/${cleanPath}`} replace />;
};

export const ampRedirects = [
  // AMP URLs
  {
    path: "/en/blog/:postId",
    element: <AmpRedirectHandler />,
  },
  
  // hsLang parameter redirects
  {
    path: "/*",
    element: <HsLangRedirectHandler />,
  }
];
