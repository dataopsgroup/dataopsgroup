
import React, { lazy } from 'react';

const HubSpotExpertGuidePage = lazy(() => import('@/pages/HubSpotExpertGuidePage'));
const PillarContentPage = lazy(() => import('@/pages/PillarContentPage'));

export const contentRoutes = [
  // Pillar content routes
  {
    path: "/guides/hubspot-expert",
    element: <HubSpotExpertGuidePage />,
  },
  {
    path: "/guides/:slug",
    element: <PillarContentPage />,
  },
];
