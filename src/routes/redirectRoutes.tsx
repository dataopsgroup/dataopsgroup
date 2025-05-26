
import React from 'react';
import { RouteObject } from 'react-router-dom';
import OptimizedRedirect, { AmpRedirectHandler } from '../components/routing/OptimizedRedirect';

// 301 Redirects with optimized components
export const redirectRoutes: RouteObject[] = [
  {
    path: "/leadership",
    element: <OptimizedRedirect to="/about" />,
  },
  {
    path: "/documentation",
    element: <OptimizedRedirect to="/" />,
  },
  {
    path: "/terms-of-service",
    element: <OptimizedRedirect to="/" />,
  },
  {
    path: "/services/alignment",
    element: <OptimizedRedirect to="/services" />,
  },
  {
    path: "/services/lineage-mapping",
    element: <OptimizedRedirect to="/services" />,
  },
  {
    path: "/services/maintenance",
    element: <OptimizedRedirect to="/services" />,
  },
  {
    path: "/services/roi-tracking",
    element: <OptimizedRedirect to="/services" />,
  },
  {
    path: "/services/customer-value",
    element: <OptimizedRedirect to="/services" />,
  },
  {
    path: "/services/dashboards",
    element: <OptimizedRedirect to="/services/analytics-bi" />,
  },
  {
    path: "/services/reporting",
    element: <OptimizedRedirect to="/services/analytics-bi" />,
  },
  {
    path: "/resources/checklist",
    element: <OptimizedRedirect to="/" />,
  },
  {
    path: "/resources/data-guide",
    element: <OptimizedRedirect to="/" />,
  },
  {
    path: "/resources/data-impact",
    element: <OptimizedRedirect to="/insights" />,
  },
  {
    path: "/approach/data-driven",
    element: <OptimizedRedirect to="/approach" />,
  },
  {
    path: "/methodology",
    element: <OptimizedRedirect to="/approach" />,
  },
  {
    path: "/methodology/three-pillars",
    element: <OptimizedRedirect to="/approach" />,
  },
  {
    path: "/data-analysis-question-framework",
    element: <OptimizedRedirect to="/insights" />,
  },
  {
    path: "/implementation",
    element: <OptimizedRedirect to="/services/dataops-implementation" />,
  },
  {
    path: "/maintenance",
    element: <OptimizedRedirect to="/services" />,
  },
  {
    path: "/training",
    element: <OptimizedRedirect to="/services" />,
  },
  {
    path: "/testimonials",
    element: <OptimizedRedirect to="/case-studies" />,
  },
  {
    path: "/guide",
    element: <OptimizedRedirect to="/insights" />,
  },
  {
    path: "/hubspot-case-studies",
    element: <OptimizedRedirect to="/case-studies" />,
  },
  {
    path: "/our-tech-stack",
    element: <OptimizedRedirect to="/" />,
  },
  {
    path: "/data-quality-dimensions-guide",
    element: <OptimizedRedirect to="/insights" />,
  },
  {
    path: "/quality-vs-integrity-guide",
    element: <OptimizedRedirect to="/insights" />,
  },
  {
    path: "/survey-quality-guide",
    element: <OptimizedRedirect to="/insights" />,
  },
  {
    path: "/data-quality-plan-template",
    element: <OptimizedRedirect to="/insights" />,
  },
  {
    path: "/knowledge-base-resources",
    element: <OptimizedRedirect to="/insights" />,
  },
  {
    path: "/data-strategy-assessment",
    element: <OptimizedRedirect to="/assessment" />,
  },
  {
    path: "/roi-calculator",
    element: <OptimizedRedirect to="/assessment" />,
  },
  {
    path: "/data-governance",
    element: <OptimizedRedirect to="/services/dataops-implementation" />,
  },
  {
    path: "/en/blog/:postId",
    Component: AmpRedirectHandler,
  },
  {
    path: "/search",
    element: <OptimizedRedirect to="/insights" />,
  },
  {
    path: "/how-much-is-bad-data-costing-your-business",
    element: <OptimizedRedirect to="/insights/true-cost-of-bad-data" />,
  },
  {
    path: "/marketing-data-management-and-analytics-services-dataops-group",
    element: <OptimizedRedirect to="/services" />,
  },
  {
    path: "/hubspot-training-and-implementation",
    element: <OptimizedRedirect to="/services/team-training" />,
  },
  {
    path: "/hubspot-integration-customization-services",
    element: <OptimizedRedirect to="/services/dataops-implementation" />,
  },
  {
    path: "/book-meeting",
    element: <OptimizedRedirect to="/contact" />,
  }
];
