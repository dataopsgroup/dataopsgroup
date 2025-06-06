import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { getCanonicalFromAmpUrl } from '../utils/redirect-utils';

// For the AMP redirect, we need a component that can access route params
const AmpRedirectHandler = () => {
  const { postId } = useParams();
  // Clean up any query parameters from the postId 
  const cleanPostId = postId ? postId.split('?')[0] : '';
  return <Navigate to={`/insights/${cleanPostId}`} replace />;
};

// 301 Redirects
export const redirectRoutes = [
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
  
  // New redirects for cleaned URLs
  {
    path: "/book-page",
    element: <Navigate to="/book" replace />,
  },
  // Fix the HubSpot expert guide redirect - redirect to the new structure
  {
    path: "/how-to-hire-a-hubspot-expert-in-2025",
    element: <Navigate to="/guides/hubspot-expert" replace />,
  },
  
  // FAQ URL cleanups
  {
    path: "/faqs/hubspot-services",
    element: <Navigate to="/faqs/services" replace />,
  },
  {
    path: "/faqs/hubspot-experts",
    element: <Navigate to="/faqs/experts" replace />,
  },
  {
    path: "/faqs/our-approach",
    element: <Navigate to="/faqs/approach" replace />,
  },
  {
    path: "/faqs/hubspot-modules",
    element: <Navigate to="/faqs/modules" replace />,
  },
  
  // Documentation redirect
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
  
  // Additional redirects for legacy URLs
  {
    path: "/hubspot-case-studies",
    element: <Navigate to="/case-studies" replace />,
  },
  {
    path: "/our-tech-stack",
    element: <Navigate to="/" replace />,
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
  
  // Tool and assessment redirects
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
  
  // AMP URLs
  {
    path: "/en/blog/:postId",
    element: <AmpRedirectHandler />,
  },
  
  // Search page redirect
  {
    path: "/search",
    element: <Navigate to="/insights" replace />,
  },
  
  // Additional URLs with hsLang parameter
  {
    path: "/how-much-is-bad-data-costing-your-business",
    element: <Navigate to="/insights/true-cost-of-bad-data" replace />,
  },
  {
    path: "/marketing-data-management-and-analytics-services-dataops-group",
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
    path: "/book-meeting",
    element: <Navigate to="/contact" replace />,
  }
];
