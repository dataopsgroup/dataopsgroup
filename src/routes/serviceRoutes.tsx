
import React from 'react';
import Services from '../pages/Services';
import AnalyticsBI from '../pages/AnalyticsBI';
import DataOpsImplementation from '../pages/DataOpsImplementation';
import TeamTraining from '../pages/TeamTraining';
import MarketingOperationsRevOps from '../pages/MarketingOperationsRevOps';
import SEOManagement from '../pages/SEOManagement';
import NotFound from '../pages/NotFound';

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
  {
    path: "/seo-management",
    element: <SEOManagement />,
    errorElement: <NotFound />,
  }
];
