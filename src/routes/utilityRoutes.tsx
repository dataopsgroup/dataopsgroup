
import React from 'react';
import { RouteObject, Navigate } from 'react-router-dom';

// Import pages
import NotFound from '@/pages/NotFound';
import Privacy from '@/pages/Privacy';
import Sitemap from '@/pages/Sitemap';
import FAQs from '@/pages/FAQs';
import Documentation from '@/pages/Documentation';
import SEODashboard from '@/pages/SEODashboard';
import PillarContentPage from '@/pages/PillarContentPage';
import HubSpotExpertGuidePage from '@/pages/HubSpotExpertGuidePage';

// Define utility routes
export const utilityRoutes: RouteObject[] = [
  {
    path: "/not-found",
    element: <NotFound />
  },
  {
    path: "/404",
    element: <NotFound />
  },
  {
    path: "*",
    element: <NotFound />
  },
  {
    path: "/privacy",
    element: <Privacy />
  },
  {
    path: "/terms",
    element: <Navigate to="/" replace />
  },
  {
    path: "/sitemap",
    element: <Sitemap />
  },
  {
    path: "/faqs",
    element: <FAQs />
  },
  {
    path: "/docs",
    element: <Documentation />
  },
  {
    path: "/seo-dashboard",
    element: <SEODashboard />
  },
  {
    path: "/pillar-content",
    element: <PillarContentPage />
  },
  {
    path: "/how-to-hire-a-hubspot-expert-in-2025",
    element: <HubSpotExpertGuidePage />
  }
];
