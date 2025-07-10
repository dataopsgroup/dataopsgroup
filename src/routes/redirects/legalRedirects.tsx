import React from 'react';
import { Navigate } from 'react-router-dom';
import { CANONICAL_URLS } from '@/utils/seo-config';

/**
 * Legal page redirects
 */

export const legalRedirects = [
  // Terms page redirects
  {
    path: "/terms-of-service",
    element: <Navigate to={CANONICAL_URLS.terms} replace />,
  },
  {
    path: "/tos",
    element: <Navigate to={CANONICAL_URLS.terms} replace />,
  },
  
  // Privacy policy redirects  
  {
    path: "/privacy-policy",
    element: <Navigate to={CANONICAL_URLS.privacy} replace />,
  },
  {
    path: "/pp",
    element: <Navigate to={CANONICAL_URLS.privacy} replace />,
  }
];