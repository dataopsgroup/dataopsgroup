
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
  
  // Old resources redirects
  {
    path: "/resources/checklist",
    element: <Navigate to="/" replace />,
  },
  {
    path: "/resources/data-guide",
    element: <Navigate to="/" replace />,
  },
  {
    path: "/resources/data-impact",
    element: <Navigate to="/insights" replace />,
  },
  
  // Old approach redirects
  {
    path: "/approach/data-driven",
    element: <Navigate to="/approach" replace />,
  },
  {
    path: "/methodology",
    element: <Navigate to="/approach" replace />,
  },
  {
    path: "/methodology/three-pillars",
    element: <Navigate to="/approach" replace />,
  },
  
  // Miscellaneous old URLs
  {
    path: "/data-analysis-question-framework",
    element: <Navigate to="/insights" replace />,
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
    path: "/testimonials",
    element: <Navigate to="/case-studies" replace />,
  },
  {
    path: "/guide",
    element: <Navigate to="/insights" replace />,
  },
  
  // NEW: Additional redirects for legacy URLs
  {
    path: "/hubspot-case-studies",
    element: <Navigate to="/case-studies" replace />,
  },
  {
    path: "/our-tech-stack",
    element: <Navigate to="/" replace />,
  },
  
  // NEW: Resource guides redirects
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
  
  // NEW: Tool and assessment redirects
  {
    path: "/data-strategy-assessment",
    element: <Navigate to="/assessment" replace />,
  },
  {
    path: "/roi-calculator",
    element: <Navigate to="/assessment" replace />,
  },
  {
    path: "/data-governance",
    element: <Navigate to="/services/dataops-implementation" replace />,
  },
  
  // NEW: Handle AMP URLs - redirect to canonical version
  {
    path: "/en/blog/:postId",
    element: <Navigate to={(routeProps) => `/insights/${routeProps.params.postId?.split('?')[0]}`} replace />,
  },
  
  // NEW: Search page redirect
  {
    path: "/search",
    element: <Navigate to="/insights" replace />,
  }
];
