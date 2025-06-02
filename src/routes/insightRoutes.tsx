import React, { lazy } from 'react';

const BlogList = lazy(() => import('../pages/BlogList'));
const BlogPost = lazy(() => import('../pages/BlogPost'));
const CaseStudiesPage = lazy(() => import('../pages/CaseStudies'));
const FAQs = lazy(() => import('../pages/FAQs'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const insightRoutes = [
  {
    path: "/insights",
    element: <BlogList />,
    errorElement: <NotFound />,
  },
  {
    path: "/insights/:postId",
    element: <BlogPost />,
    errorElement: <NotFound />,
  },
  {
    path: "/case-studies",
    element: <CaseStudiesPage />,
    errorElement: <NotFound />,
  },
  {
    path: "/faqs",
    element: <FAQs />,
    errorElement: <NotFound />,
  }
];
