
import React from 'react';
import { Navigate } from 'react-router-dom';

// Service page redirects to prevent 404s and consolidate similar URLs
export const servicesRedirects = [
  // HubSpot implementation service redirects
  {
    path: "/services/hubspot-implementation",
    element: <Navigate to="/services/marketing-operations-revops" replace />,
  },
  {
    path: "/hubspot-implementation",
    element: <Navigate to="/services/marketing-operations-revops" replace />,
  },
  {
    path: "/services/hubspot-consulting", 
    element: <Navigate to="/services/marketing-operations-revops" replace />,
  },
  
  // Legacy service URLs
  {
    path: "/services/data-operations",
    element: <Navigate to="/services/dataops-implementation" replace />,
  },
  {
    path: "/data-operations",
    element: <Navigate to="/services/dataops-implementation" replace />,
  },
  
  // Training service redirects
  {
    path: "/training",
    element: <Navigate to="/services/team-training" replace />,
  },
  {
    path: "/hubspot-training",
    element: <Navigate to="/services/team-training" replace />,
  },
  
  // Analytics service redirects
  {
    path: "/analytics",
    element: <Navigate to="/services/analytics-bi" replace />,
  },
  {
    path: "/business-intelligence",
    element: <Navigate to="/services/analytics-bi" replace />,
  },
];
