
import React from 'react';
import { Navigate } from 'react-router-dom';

export const guidesRedirects = [
  // Fix the HubSpot expert guide redirect - redirect to the new structure
  {
    path: "/how-to-hire-a-hubspot-expert-in-2025",
    element: <Navigate to="/guides/hubspot-expert" replace />,
  },
  
  // Resource guides redirects
  {
    path: "/data-quality-dimensions-guide",
    element: <Navigate to="/insights" replace />,
  },
  {
    path: "/quality-vs-integrity-guide",
    element: <Navigate to="/insights" replace />,
  },
  {
    path: "/survey-quality-guide",
    element: <Navigate to="/insights" replace />,
  },
  {
    path: "/data-quality-plan-template",
    element: <Navigate to="/insights" replace />,
  },
  {
    path: "/knowledge-base-resources",
    element: <Navigate to="/insights" replace />,
  },
  
  // Miscellaneous old URLs
  {
    path: "/data-analysis-question-framework",
    element: <Navigate to="/insights" replace />,
  },
  {
    path: "/guide",
    element: <Navigate to="/insights" replace />,
  },
  
  // Additional URLs with hsLang parameter
  {
    path: "/how-much-is-bad-data-costing-your-business",
    element: <Navigate to="/insights/true-cost-of-bad-data" replace />,
  }
];
