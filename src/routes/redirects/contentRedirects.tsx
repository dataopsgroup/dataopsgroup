
import React from 'react';
import { Navigate } from 'react-router-dom';
import { CANONICAL_URLS } from '@/utils/seo-config';

/**
 * CRITICAL SEO FILE - DO NOT MODIFY WITHOUT SEO REVIEW
 * 
 * All redirect mappings are imported from seo-config.ts
 * This prevents accidental overwrites of SEO-critical redirects
 */

export const contentRedirects = [
  // Whitepapers redirect
  {
    path: "/whitepapers",
    element: <Navigate to={CANONICAL_URLS.insights} replace />,
  },
  
  // Book page redirects
  {
    path: "/book-page",
    element: <Navigate to={CANONICAL_URLS.book} replace />,
  },
  
  // CRITICAL FAQ URL CANONICAL PROTECTION
  // These redirects prevent duplicate content issues
  {
    path: "/faqs/services-5",
    element: <Navigate to={CANONICAL_URLS.faqServices} replace />,
  },
  {
    path: "/faqs/hubspot-services",
    element: <Navigate to={CANONICAL_URLS.faqServices} replace />,
  },
  {
    path: "/faqs/hubspot-experts",
    element: <Navigate to={CANONICAL_URLS.faqExperts} replace />,
  },
  {
    path: "/faqs/our-approach",
    element: <Navigate to={CANONICAL_URLS.faqApproach} replace />,
  },
  {
    path: "/faqs/hubspot-modules",
    element: <Navigate to={CANONICAL_URLS.faqModules} replace />,
  },
  
  // Documentation redirect
  {
    path: "/documentation",
    element: <Navigate to="/" replace />,
  },
  
  // Old resources redirects
  {
    path: "/resources/checklist",
    element: <Navigate to="/" replace />,
  },
  {
    path: "/resources/data-guide",
    element: <Navigate to="/" replace />,
  },
  {
    path: "/resources/data-impact",
    element: <Navigate to={CANONICAL_URLS.insights} replace />,
  },
  
  // Old approach redirects
  {
    path: "/approach/data-driven",
    element: <Navigate to="/approach" replace />,
  },
  {
    path: "/methodology",
    element: <Navigate to="/approach" replace />,
  },
  {
    path: "/methodology/three-pillars",
    element: <Navigate to="/approach" replace />,
  },
  
  // Search page redirect
  {
    path: "/search",
    element: <Navigate to={CANONICAL_URLS.insights} replace />,
  }
];
