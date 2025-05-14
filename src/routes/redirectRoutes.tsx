
import React from 'react';
import { Navigate } from 'react-router-dom';

// 301 Redirects
export const redirectRoutes = [
  // Documentation redirect (added to fix canonical issue)
  {
    path: "/documentation",
    element: <Navigate to="/" replace />,
  },
  
  // Old services redirects
  {
    path: "/services/alignment",
    element: <Navigate to="/" replace />,
  },
  {
    path: "/services/lineage-mapping",
    element: <Navigate to="/" replace />,
  },
  {
    path: "/services/maintenance",
    element: <Navigate to="/" replace />,
  },
  {
    path: "/services/roi-tracking",
    element: <Navigate to="/" replace />,
  },
  {
    path: "/services/customer-value",
    element: <Navigate to="/" replace />,
  },
  
  // Old resources redirects
  {
    path: "/resources/checklist",
    element: <Navigate to="/" replace />,
  },
  {
    path: "/resources/data-guide",
    element: <Navigate to="/" replace />,
  },
  
  // Old approach redirects
  {
    path: "/approach/data-driven",
    element: <Navigate to="/" replace />,
  },
  
  // Miscellaneous old URLs
  {
    path: "/data-analysis-question-framework",
    element: <Navigate to="/" replace />,
  },
  {
    path: "/implementation",
    element: <Navigate to="/" replace />,
  }
];
