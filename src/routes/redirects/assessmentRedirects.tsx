
import React from 'react';
import { Navigate } from 'react-router-dom';
import { CANONICAL_URLS } from '@/utils/seo-config';

/**
 * CRITICAL SEO FILE - DO NOT MODIFY WITHOUT SEO REVIEW
 * 
 * All redirect mappings are imported from seo-config.ts
 * This prevents accidental overwrites of SEO-critical redirects
 */

export const assessmentRedirects = [
  // CANONICAL ASSESSMENT URL PROTECTION
  {
    path: "/assessment",
    element: <Navigate to={CANONICAL_URLS.assessment} replace />,
  },
  {
    path: "/assessment/results",
    element: <Navigate to={CANONICAL_URLS.assessmentResults} replace />,
  },
  {
    path: "/hubspot-assessment",
    element: <Navigate to={CANONICAL_URLS.assessment} replace />,
  },
  {
    path: "/hubspot-assessment-results",
    element: <Navigate to={CANONICAL_URLS.assessmentResults} replace />,
  },
  {
    path: "/data-strategy-assessment",
    element: <Navigate to={CANONICAL_URLS.assessment} replace />,
  },
  {
    path: "/roi-calculator",
    element: <Navigate to={CANONICAL_URLS.assessment} replace />,
  }
];
