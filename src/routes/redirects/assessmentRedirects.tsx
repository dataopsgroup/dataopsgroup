
import React from 'react';
import { Navigate } from 'react-router-dom';

export const assessmentRedirects = [
  // Assessment URL redirects
  {
    path: "/assessment",
    element: <Navigate to="/data-operations-assessment" replace />,
  },
  {
    path: "/assessment/results",
    element: <Navigate to="/data-operations-assessment/results" replace />,
  },
  {
    path: "/hubspot-assessment",
    element: <Navigate to="/data-operations-assessment" replace />,
  },
  {
    path: "/hubspot-assessment-results",
    element: <Navigate to="/data-operations-assessment/results" replace />,
  },
  {
    path: "/data-strategy-assessment",
    element: <Navigate to="/assessment" replace />,
  },
  {
    path: "/roi-calculator",
    element: <Navigate to="/assessment" replace />,
  }
];
