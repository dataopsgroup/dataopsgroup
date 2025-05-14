
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

// Component to handle redirect while preserving or removing query parameters
const BlogRedirect = ({ to }: { to: string }) => {
  const location = useLocation();
  // We redirect to the destination path without preserving query parameters
  return <Navigate to={to} replace />;
};

// Blog-specific redirects
export const blogRedirectRoutes = [
  // HubSpot preview URLs redirects
  {
    path: "/en/blog/why-marketing-leaders-encounter-career-obstacles-the-hidden-data-quality-crisis-1",
    element: <BlogRedirect to="/" />,
  },
  {
    path: "/en/blog/why-marketing-leaders-encounter-career-obstacles-the-hidden-data-quality-crisis-0",
    element: <BlogRedirect to="/" />,
  },
  
  // Blog to Insights redirect
  {
    path: "/blog",
    element: <BlogRedirect to="/insights" />,
  },
  
  // Old blog URLs redirects
  {
    path: "/en/blog/all",
    element: <BlogRedirect to="/insights" />,
  },
  {
    path: "/en/blog/the-forgotten-art-of-campaign-documentation",
    element: <BlogRedirect to="/insights/forgotten-art-campaign-documentation" />,
  },
  {
    path: "/en/blog/saas-healthcare-achieves-remarkable-insights",
    element: <BlogRedirect to="/insights/saas-healthcare-achieves-remarkable-insights" />,
  },
  {
    path: "/en/blog/stop-pretending-all-leads-are-equal",
    element: <BlogRedirect to="/insights/lead-tiers-case-study" />,
  },
  {
    path: "/en/blog/demystifying-utm-parameters",
    element: <BlogRedirect to="/insights/demystifying-utm-parameters" />,
  },
  {
    path: "/en/blog/the-psychology-of-data-governance",
    element: <BlogRedirect to="/insights/psychology-data-governance" />,
  },
  {
    path: "/en/blog/what-does-a-hubspot-consultant-cost",
    element: <BlogRedirect to="/insights/what-does-a-hubspot-consultant-cost" />,
  },
  {
    path: "/en/blog/hiring-and-working-with-a-hubspot-consultant",
    element: <BlogRedirect to="/insights/hiring-and-working-with-a-hubspot-consultant" />,
  },
  {
    path: "/en/blog/marketing-operations-isnt-it",
    element: <BlogRedirect to="/insights/marketing-operations-isnt-it" />,
  },
  {
    path: "/en/blog/lead-scoring-pitfalls-to-avoid",
    element: <BlogRedirect to="/insights/lead-scoring-pitfalls" />,
  }
];
