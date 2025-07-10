/**
 * Service Page Redirects - SEO CRITICAL
 * 
 * Redirects legacy service URLs to canonical service pages
 * Prevents 404 errors and maintains SEO value
 */

import { Navigate } from 'react-router-dom';
import { CANONICAL_URLS } from '@/utils/seo-config';

export const serviceRedirects = [
  // HubSpot Integration and Customization Services
  {
    path: '/hubspot-integration-customization-services',
    element: <Navigate to={CANONICAL_URLS.services} replace />
  },
  {
    path: '/hubspot-integration-services',
    element: <Navigate to={CANONICAL_URLS.services} replace />
  },
  {
    path: '/hubspot-customization-services',
    element: <Navigate to={CANONICAL_URLS.services} replace />
  },
  
  // Legacy service URL patterns
  {
    path: '/services/hubspot-integration',
    element: <Navigate to={CANONICAL_URLS.services} replace />
  },
  {
    path: '/services/hubspot-customization',
    element: <Navigate to={CANONICAL_URLS.services} replace />
  }
];

export default serviceRedirects;