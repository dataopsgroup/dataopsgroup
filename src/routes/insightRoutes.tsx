
import React, { lazy } from 'react';

const BlogList = lazy(() => import('../pages/BlogList'));
const BlogPostPage = lazy(() => import('../pages/BlogPost'));
const CaseStudiesPage = lazy(() => import('../pages/CaseStudies'));
const CaseStudyDetailPage = lazy(() => import('../pages/CaseStudyDetail'));
const FAQs = lazy(() => import('../pages/FAQs'));
const FAQHubSpotServices = lazy(() => import('../pages/FAQHubSpotServices'));
const FAQHubSpotExperts = lazy(() => import('../pages/FAQHubSpotExperts'));
const FAQDataQuality = lazy(() => import('../pages/FAQDataQuality'));
const FAQOurApproach = lazy(() => import('../pages/FAQOurApproach'));
const FAQHubSpotModules = lazy(() => import('../pages/FAQHubSpotModules'));
const RouteErrorBoundary = lazy(() => import('../components/RouteErrorBoundary'));

export const insightRoutes = [
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
  {
    path: "/case-studies",
    element: <CaseStudiesPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/case-studies/:caseStudyId",
    element: <CaseStudyDetailPage />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/faqs",
    element: <FAQs />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/faqs/hubspot-services",
    element: <FAQHubSpotServices />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/faqs/hubspot-experts",
    element: <FAQHubSpotExperts />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/faqs/data-quality",
    element: <FAQDataQuality />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/faqs/our-approach",
    element: <FAQOurApproach />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/faqs/hubspot-modules",
    element: <FAQHubSpotModules />,
    errorElement: <RouteErrorBoundary />,
  }
];
