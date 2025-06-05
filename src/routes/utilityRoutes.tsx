
import React, { lazy } from 'react';

const GetStartedPage = lazy(() => import('@/pages/GetStartedPage'));
const ThankYouPage = lazy(() => import('@/pages/ThankYouPage'));
const ContactThankYouPage = lazy(() => import('@/pages/ContactThankYouPage'));
const Sitemap = lazy(() => import('@/pages/Sitemap'));
const Privacy = lazy(() => import('@/pages/Privacy'));
const Terms = lazy(() => import('@/pages/Terms'));
const NotFound = lazy(() => import('@/pages/NotFound'));

export const utilityRoutes = [
  // Tools and utilities
  {
    path: "/get-started",
    element: <GetStartedPage />,
    errorElement: <NotFound />,
  },
  {
    path: "/sitemap",
    element: <Sitemap />,
    errorElement: <NotFound />,
  },
  
  // Thank you pages
  {
    path: "/thank-you",
    element: <ThankYouPage />,
    errorElement: <NotFound />,
  },
  {
    path: "/contact/thank-you",
    element: <ContactThankYouPage />,
    errorElement: <NotFound />,
  },
  
  // Legal pages
  {
    path: "/privacy",
    element: <Privacy />,
    errorElement: <NotFound />,
  },
  {
    path: "/terms",
    element: <Terms />,
    errorElement: <NotFound />,
  },
];
