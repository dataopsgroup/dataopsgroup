
import React from 'react';
import { Navigate } from 'react-router-dom';

export const servicesRedirects = [
  // Services redirects for marketing operations variations
  {
    path: "/services/marketing-operations",
    element: <Navigate to="/services/marketing-operations-revops" replace />,
  },
  
  // Old services redirects
  {
    path: "/services/alignment",
    element: <Navigate to="/services" replace />,
  },
  {
    path: "/services/lineage-mapping",
    element: <Navigate to="/services" replace />,
  },
  {
    path: "/services/maintenance",
    element: <Navigate to="/services" replace />,
  },
  {
    path: "/services/roi-tracking",
    element: <Navigate to="/services" replace />,
  },
  {
    path: "/services/customer-value",
    element: <Navigate to="/services" replace />,
  },
  {
    path: "/services/dashboards",
    element: <Navigate to="/services/analytics-bi" replace />,
  },
  {
    path: "/services/reporting",
    element: <Navigate to="/services/analytics-bi" replace />,
  },
  {
    path: "/data-governance",
    element: <Navigate to="/services/dataops-implementation" replace />,
  },
  {
    path: "/implementation",
    element: <Navigate to="/services/dataops-implementation" replace />,
  },
  {
    path: "/maintenance",
    element: <Navigate to="/services" replace />,
  },
  {
    path: "/training",
    element: <Navigate to="/services" replace />,
  },
  {
    path: "/hubspot-training-and-implementation",
    element: <Navigate to="/services/team-training" replace />,
  },
  {
    path: "/hubspot-integration-customization-services",
    element: <Navigate to="/services/dataops-implementation" replace />,
  },
  {
    path: "/marketing-data-management-and-analytics-services-dataops-group",
    element: <Navigate to="/services" replace />,
  }
];
