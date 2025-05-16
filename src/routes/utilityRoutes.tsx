
import React from 'react';
import { Navigate } from 'react-router-dom';
import NotFound from '@/pages/NotFound';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';
import Sitemap from '@/pages/Sitemap';
import Documentation from '@/pages/Documentation';
import HubSpotAssessment from '@/pages/HubSpotAssessment';

export const utilityRoutes = [
  {
    path: '/privacy',
    element: <Privacy />
  },
  {
    path: '/terms',
    element: <Terms />
  },
  {
    path: '/sitemap',
    element: <Sitemap />
  },
  {
    path: '/documentation',
    element: <Documentation />
  },
  {
    path: '/assessment',
    element: <HubSpotAssessment />
  },
  {
    path: '/not-found',
    element: <NotFound />
  },
  {
    path: '*',
    element: <Navigate to="/not-found" replace />
  }
];
