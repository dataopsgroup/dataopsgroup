/**
 * Typo Redirects - SEO CRITICAL
 * 
 * Redirects common typos and misspellings to correct URLs
 * Prevents 404 errors from internal link typos
 */

import { Navigate } from 'react-router-dom';
import { CANONICAL_URLS } from '@/utils/seo-config';

export const typoRedirects = [
  // Leadership typo redirects
  {
    path: '/leaderschip',
    element: <Navigate to="/about" replace />
  },
  {
    path: '/leaderschip/*',
    element: <Navigate to="/about" replace />
  },
  
  // Other common typos
  {
    path: '/servies',
    element: <Navigate to={CANONICAL_URLS.services} replace />
  },
  {
    path: '/servies/*',
    element: <Navigate to={CANONICAL_URLS.services} replace />
  },
  {
    path: '/insigths',
    element: <Navigate to={CANONICAL_URLS.insights} replace />
  },
  {
    path: '/insigths/*',
    element: <Navigate to={CANONICAL_URLS.insights} replace />
  }
];

export default typoRedirects;
