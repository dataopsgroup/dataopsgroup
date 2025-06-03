
import React, { lazy } from 'react';

const BlogList = lazy(() => import('../pages/BlogList'));
const BlogPostPage = lazy(() => import('../pages/BlogPost'));
const CaseStudiesPage = lazy(() => import('../pages/CaseStudies'));
const CaseStudyDetailPage = lazy(() => import('../pages/CaseStudyDetail'));
const FAQs = lazy(() => import('../pages/FAQs'));
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
  }
];
