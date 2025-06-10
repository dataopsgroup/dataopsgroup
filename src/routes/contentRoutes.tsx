
import React, { lazy } from 'react';

const HubSpotExpertGuidePage = lazy(() => import('@/pages/HubSpotExpertGuidePage'));
const HubSpotPEPage = lazy(() => import('@/pages/HubSpotPEPage'));
const PillarContentPage = lazy(() => import('@/pages/PillarContentPage'));

export const contentRoutes = [
  // Pillar content routes
  {
    path: "/guides/hubspot-expert",
    element: <HubSpotExpertGuidePage />,
  },
  {
    path: "/guides/hubspot-private-equity",
    element: <HubSpotPEPage />,
  },
  {
    path: "/guides/:slug",
    element: <PillarContentPage />,
  },
];
