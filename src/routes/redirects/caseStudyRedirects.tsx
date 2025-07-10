/**
 * Case Study Redirects - SEO CRITICAL
 * 
 * Redirects legacy case study URLs to canonical case studies page
 * Prevents 404 errors and maintains SEO value
 */

import { Navigate } from 'react-router-dom';
import { CANONICAL_URLS } from '@/utils/seo-config';

export const caseStudyRedirects = [
  // Specific case study redirects
  {
    path: '/case-study-upscale-home-improvement-manufacturer-boost-by-hubspot',
    element: <Navigate to={CANONICAL_URLS.caseStudies} replace />
  },
  {
    path: '/case-study-private-equity-portfolio-company-data-transformation',
    element: <Navigate to={CANONICAL_URLS.caseStudies} replace />
  },
  {
    path: '/case-study-manufacturing-company-hubspot-migration',
    element: <Navigate to={CANONICAL_URLS.caseStudies} replace />
  },
  
  // Legacy case study URL patterns
  {
    path: '/case-studies/upscale-home-improvement',
    element: <Navigate to={CANONICAL_URLS.caseStudies} replace />
  },
  {
    path: '/case-studies/private-equity-transformation',
    element: <Navigate to={CANONICAL_URLS.caseStudies} replace />
  }
];

export default caseStudyRedirects;