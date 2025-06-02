import React, { lazy } from 'react';

const Services = lazy(() => import('../pages/Services'));
const AnalyticsBI = lazy(() => import('../pages/AnalyticsBI'));
const DataOpsImplementation = lazy(() => import('../pages/DataOpsImplementation'));
const TeamTraining = lazy(() => import('../pages/TeamTraining'));
const MarketingOperationsRevOps = lazy(() => import('../pages/MarketingOperationsRevOps'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const serviceRoutes = [
  {
    path: "/services",
    element: <Services />,
    errorElement: <NotFound />,
  },
  {
    path: "/services/analytics-bi",
    element: <AnalyticsBI />,
    errorElement: <NotFound />,
  },
  {
    path: "/services/dataops-implementation",
    element: <DataOpsImplementation />,
    errorElement: <NotFound />,
  },
  {
    path: "/services/team-training",
    element: <TeamTraining />,
    errorElement: <NotFound />,
  },
  {
    path: "/services/marketing-operations-revops",
    element: <MarketingOperationsRevOps />,
    errorElement: <NotFound />,
  },
];
