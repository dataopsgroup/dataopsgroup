
import React from 'react';
import { Navigate } from 'react-router-dom';
import { DUPLICATE_URLS_TO_REDIRECT, CANONICAL_URLS } from '@/utils/seo-config';

/**
 * CRITICAL SEO FILE - DO NOT MODIFY WITHOUT SEO REVIEW
 * 
 * All redirect mappings are imported from seo-config.ts
 * This prevents accidental overwrites of SEO-critical redirects
 */

export const guidesRedirects = [
  // HubSpot Expert Guide canonical chain - CRITICAL for SEO
  {
    path: "/guides/hubspot-expert-guide",
    element: <Navigate to={CANONICAL_URLS.hubspotExpert} replace />,
  },
  {
    path: "/how-to-hire-a-hubspot-expert-in-2025",
    element: <Navigate to={CANONICAL_URLS.hubspotExpert} replace />,
  },
  
  // Resource guides redirects
  {
    path: "/data-quality-dimensions-guide",
    element: <Navigate to={CANONICAL_URLS.insights} replace />,
  },
  {
    path: "/quality-vs-integrity-guide",
    element: <Navigate to={CANONICAL_URLS.insights} replace />,
  },
  {
    path: "/survey-quality-guide",
    element: <Navigate to={CANONICAL_URLS.insights} replace />,
  },
  {
    path: "/data-quality-plan-template",
    element: <Navigate to={CANONICAL_URLS.insights} replace />,
  },
  {
    path: "/knowledge-base-resources",
    element: <Navigate to={CANONICAL_URLS.insights} replace />,
  },
  
  // Miscellaneous old URLs
  {
    path: "/data-analysis-question-framework",
    element: <Navigate to={CANONICAL_URLS.insights} replace />,
  },
  {
    path: "/guide",
    element: <Navigate to={CANONICAL_URLS.insights} replace />,
  },
  
  // Additional URLs with hsLang parameter
  {
    path: "/how-much-is-bad-data-costing-your-business",
    element: <Navigate to="/insights/true-cost-of-bad-data" replace />,
  }
];
