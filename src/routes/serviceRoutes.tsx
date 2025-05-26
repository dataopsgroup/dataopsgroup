
import React from 'react';
import { RouteObject } from 'react-router-dom';
import Services from '../pages/Services';
import AnalyticsBI from '../pages/AnalyticsBI';
import DataOpsImplementation from '../pages/DataOpsImplementation';
import TeamTraining from '../pages/TeamTraining';
import MarketingOperationsRevOps from '../pages/MarketingOperationsRevOps';
import SEOManagement from '../pages/SEOManagement';
import NotFound from '../pages/NotFound';

export const serviceRoutes: RouteObject[] = [
  {
    path: "/services",
    Component: Services,
    errorElement: React.createElement(NotFound),
  },
  {
    path: "/services/analytics-bi",
    Component: AnalyticsBI,
    errorElement: React.createElement(NotFound),
  },
  {
    path: "/services/dataops-implementation",
    Component: DataOpsImplementation,
    errorElement: React.createElement(NotFound),
  },
  {
    path: "/services/team-training",
    Component: TeamTraining,
    errorElement: React.createElement(NotFound),
  },
  {
    path: "/services/marketing-operations-revops",
    Component: MarketingOperationsRevOps,
    errorElement: React.createElement(NotFound),
  },
  {
    path: "/seo-management",
    Component: SEOManagement,
    errorElement: React.createElement(NotFound),
  }
];
