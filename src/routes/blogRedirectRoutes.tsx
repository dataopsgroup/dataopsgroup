
import React from 'react';
import { Navigate } from 'react-router-dom';

// Blog-specific redirects
export const blogRedirectRoutes = [
  // HubSpot preview URLs redirects
  {
    path: "/en/blog/why-marketing-leaders-encounter-career-obstacles-the-hidden-data-quality-crisis-1",
    element: <Navigate to="/" replace />,
  },
  {
    path: "/en/blog/why-marketing-leaders-encounter-career-obstacles-the-hidden-data-quality-crisis-0",
    element: <Navigate to="/" replace />,
  },
  
  // Blog to Insights redirect
  {
    path: "/blog",
    element: <Navigate to="/insights" replace />,
  },
  
  // Old blog URLs redirects
  {
    path: "/en/blog/all",
    element: <Navigate to="/insights" replace />,
  },
  {
    path: "/en/blog/the-forgotten-art-of-campaign-documentation",
    element: <Navigate to="/insights/forgotten-art-campaign-documentation" replace />,
  },
  {
    path: "/en/blog/saas-healthcare-achieves-remarkable-insights",
    element: <Navigate to="/insights/saas-healthcare-achieves-remarkable-insights" replace />,
  },
  {
    path: "/en/blog/stop-pretending-all-leads-are-equal",
    element: <Navigate to="/insights/lead-tiers-case-study" replace />,
  },
  {
    path: "/en/blog/demystifying-utm-parameters",
    element: <Navigate to="/insights/demystifying-utm-parameters" replace />,
  },
  {
    path: "/en/blog/the-psychology-of-data-governance",
    element: <Navigate to="/insights/psychology-data-governance" replace />,
  },
  {
    path: "/en/blog/what-does-a-hubspot-consultant-cost",
    element: <Navigate to="/insights/what-does-a-hubspot-consultant-cost" replace />,
  },
  {
    path: "/en/blog/hiring-and-working-with-a-hubspot-consultant",
    element: <Navigate to="/insights/hiring-and-working-with-a-hubspot-consultant" replace />,
  },
  {
    path: "/en/blog/marketing-operations-isnt-it",
    element: <Navigate to="/insights/marketing-operations-isnt-it" replace />,
  },
  {
    path: "/en/blog/lead-scoring-pitfalls-to-avoid",
    element: <Navigate to="/insights/lead-scoring-pitfalls" replace />,
  }
];
