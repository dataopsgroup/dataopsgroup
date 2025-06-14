
import React, { lazy } from 'react';
import RouteErrorBoundary from '@/components/RouteErrorBoundary';

const Services = lazy(() => import('../pages/Services'));
const AnalyticsBI = lazy(() => import('../pages/AnalyticsBI'));
const DataOpsImplementation = lazy(() => import('../pages/DataOpsImplementation'));
const TeamTraining = lazy(() => import('../pages/TeamTraining'));
const MarketingOperationsRevOps = lazy(() => import('../pages/MarketingOperationsRevOps'));

export const serviceRoutes = [
  {
    path: "/services",
    element: <Services />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/services/analytics-bi",
    element: <AnalyticsBI />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/services/dataops-implementation",
    element: <DataOpsImplementation />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/services/team-training",
    element: <TeamTraining />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/services/marketing-operations-revops",
    element: <MarketingOperationsRevOps />,
    errorElement: <RouteErrorBoundary />,
  },
];
