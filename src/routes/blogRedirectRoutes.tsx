
import React from 'react';
import { RouteObject } from 'react-router-dom';
import OptimizedRedirect from '../components/routing/OptimizedRedirect';

export const blogRedirectRoutes: RouteObject[] = [
  {
    path: "/en/blog/why-marketing-leaders-encounter-career-obstacles-the-hidden-data-quality-crisis-1",
    element: <OptimizedRedirect to="/" />,
  },
  {
    path: "/en/blog/why-marketing-leaders-encounter-career-obstacles-the-hidden-data-quality-crisis-0",
    element: <OptimizedRedirect to="/" />,
  },
  {
    path: "/blog",
    element: <OptimizedRedirect to="/insights" />,
  },
  {
    path: "/en/blog/all",
    element: <OptimizedRedirect to="/insights" />,
  },
  {
    path: "/en/blog/the-forgotten-art-of-campaign-documentation",
    element: <OptimizedRedirect to="/insights/forgotten-art-campaign-documentation" />,
  },
  {
    path: "/en/blog/saas-healthcare-achieves-remarkable-insights",
    element: <OptimizedRedirect to="/insights/saas-healthcare-achieves-remarkable-insights" />,
  },
  {
    path: "/en/blog/stop-pretending-all-leads-are-equal",
    element: <OptimizedRedirect to="/insights/lead-tiers-case-study" />,
  },
  {
    path: "/en/blog/demystifying-utm-parameters",
    element: <OptimizedRedirect to="/insights/demystifying-utm-parameters" />,
  },
  {
    path: "/en/blog/the-psychology-of-data-governance",
    element: <OptimizedRedirect to="/insights/psychology-data-governance" />,
  },
  {
    path: "/en/blog/what-does-a-hubspot-consultant-cost",
    element: <OptimizedRedirect to="/insights/what-does-a-hubspot-consultant-cost" />,
  },
  {
    path: "/en/blog/hiring-and-working-with-a-hubspot-consultant",
    element: <OptimizedRedirect to="/insights/hiring-and-working-with-a-hubspot-consultant" />,
  },
  {
    path: "/en/blog/marketing-operations-isnt-it",
    element: <OptimizedRedirect to="/insights/marketing-operations-isnt-it" />,
  },
  {
    path: "/en/blog/lead-scoring-pitfalls-to-avoid",
    element: <OptimizedRedirect to="/insights/lead-scoring-pitfalls" />,
  },
  {
    path: "/en/blog",
    element: <OptimizedRedirect to="/insights" />,
  },
  {
    path: "/en/blog/tag/case-studies",
    element: <OptimizedRedirect to="/case-studies" />,
  }
];
