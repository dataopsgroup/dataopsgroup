
import React, { lazy } from 'react';

const BlogList = lazy(() => import('../pages/BlogList'));
const BlogPostPage = lazy(() => import('../pages/BlogPost'));
const CaseStudyDetailPage = lazy(() => import('../pages/CaseStudyDetail'));
const FAQs = lazy(() => import('../pages/FAQs'));
const FAQServicesPage = lazy(() => import('../pages/FAQServicesPage'));
const FAQHubSpotExperts = lazy(() => import('../pages/FAQHubSpotExperts'));
const FAQDataQuality = lazy(() => import('../pages/FAQDataQuality'));
const FAQOurApproach = lazy(() => import('../pages/FAQOurApproach'));
const FAQHubSpotModules = lazy(() => import('../pages/FAQHubSpotModules'));
const StructuredDataTest = lazy(() => import('../pages/StructuredDataTest'));
const RouteErrorBoundary = lazy(() => import('../components/RouteErrorBoundary'));

export const insightRoutes = [
  // Blog and insights
  {
    path: "/insights",
    element: <BlogList />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/insights/:postId",
    element: <BlogPostPage />,
    errorElement: <RouteErrorBoundary />,
  },
  
  // Case studies
  {
    path: "/case-studies/:caseStudyId",
    element: <CaseStudyDetailPage />,
    errorElement: <RouteErrorBoundary />,
  },
  
  // FAQ sections - organized under /faqs
  {
    path: "/faqs",
    element: <FAQs />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/faqs/services",
    element: <FAQServicesPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/faqs/experts",
    element: <FAQHubSpotExperts />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/faqs/data-quality",
    element: <FAQDataQuality />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/faqs/approach",
    element: <FAQOurApproach />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/faqs/modules",
    element: <FAQHubSpotModules />,
    errorElement: <RouteErrorBoundary />,
  },
  
  // Testing and admin
  {
    path: "/structured-data-test",
    element: <StructuredDataTest />,
    errorElement: <RouteErrorBoundary />,
  }
];
