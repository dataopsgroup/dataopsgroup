
import React from 'react';
import { RouteObject, Navigate } from 'react-router-dom';

// Import pages - these are component references, not instantiated components
import NotFound from '@/pages/NotFound';
import Privacy from '@/pages/Privacy';
import Sitemap from '@/pages/Sitemap';
import FAQs from '@/pages/FAQs';
import PillarContentPage from '@/pages/PillarContentPage';
import HubSpotExpertGuidePage from '@/pages/HubSpotExpertGuidePage';

// Define utility routes - use component references, not JSX
export const utilityRoutes: RouteObject[] = [
  {
    path: "/not-found",
    Component: NotFound
  },
  {
    path: "/404",
    Component: NotFound
  },
  {
    path: "*",
    Component: NotFound
  },
  {
    path: "/privacy",
    Component: Privacy
  },
  {
    path: "/terms",
    element: <Navigate to="/" replace />
  },
  {
    path: "/sitemap",
    Component: Sitemap
  },
  {
    path: "/faqs",
    Component: FAQs
  },
  {
    path: "/docs",
    element: <Navigate to="/insights" replace />
  },
  {
    path: "/documentation",
    element: <Navigate to="/insights" replace />
  },
  {
    path: "/whitepapers",
    element: <Navigate to="/insights" replace />
  },
  {
    path: "/pillar-content",
    Component: PillarContentPage
  },
  {
    path: "/how-to-hire-a-hubspot-expert-in-2025",
    Component: HubSpotExpertGuidePage
  }
];
