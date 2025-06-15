
import React, { lazy } from 'react';

const HubSpotExpertGuidePage = lazy(() => import('@/pages/HubSpotExpertGuidePage'));
const HubSpotPEPage = lazy(() => import('@/pages/HubSpotPEPage'));
const PillarContentPage = lazy(() => import('@/pages/PillarContentPage'));
const RouteErrorBoundary = lazy(() => import('../components/RouteErrorBoundary'));

// Suspense wrapper for lazy loaded components
const SuspenseWrapper = ({ children }: { children: React.ReactNode }) => (
  <React.Suspense fallback={<div className="flex justify-center items-center h-64"><div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-dataops-600"></div></div>}>
    {children}
  </React.Suspense>
);

export const contentRoutes = [
  // Pillar content routes
  {
    path: "/guides/hubspot-expert",
    element: <SuspenseWrapper><HubSpotExpertGuidePage /></SuspenseWrapper>,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/guides/hubspot-private-equity",
    element: <SuspenseWrapper><HubSpotPEPage /></SuspenseWrapper>,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/guides/:slug",
    element: <SuspenseWrapper><PillarContentPage /></SuspenseWrapper>,
    errorElement: <RouteErrorBoundary />,
  },
];
