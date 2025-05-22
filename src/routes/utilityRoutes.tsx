
import React from 'react';
import { RouteObject } from 'react-router-dom';
import Sitemap from '@/pages/Sitemap';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';
import NotFound from '@/pages/NotFound';
import StructuredDataTest from '@/pages/StructuredDataTest';
import SEODashboard from '@/pages/SEODashboard';
import Documentation from '@/pages/Documentation';

export const utilityRoutes: RouteObject[] = [
  {
    path: '/sitemap',
    element: <Sitemap />
  },
  {
    path: '/privacy',
    element: <Privacy />
  },
  {
    path: '/terms',
    element: <Terms />
  },
  {
    path: '/structured-data-test',
    element: <StructuredDataTest />
  },
  {
    path: '/seo-dashboard',
    element: <SEODashboard />
  },
  {
    path: '/documentation',
    element: <Documentation />
  },
  {
    path: '*',
    element: <NotFound />
  }
];

export default utilityRoutes;
