import React, { lazy } from 'react';

const HubSpotAssessment = lazy(() => import('@/pages/HubSpotAssessment'));
const HubSpotAssessmentResultsPage = lazy(() => import('@/pages/HubSpotAssessmentResultsPage'));
const GetStartedPage = lazy(() => import('@/pages/GetStartedPage'));
const ThankYouPage = lazy(() => import('@/pages/ThankYouPage'));
const ContactThankYouPage = lazy(() => import('@/pages/ContactThankYouPage'));
const SEODashboard = lazy(() => import('@/pages/SEODashboard'));
const Sitemap = lazy(() => import('@/pages/Sitemap'));
const NotFound = lazy(() => import('@/pages/NotFound'));

export const utilityRoutes = [
  {
    path: "/assessment",
    element: <HubSpotAssessment />,
    errorElement: <NotFound />,
  },
  {
    path: "/assessment/results",
    element: <HubSpotAssessmentResultsPage />,
    errorElement: <NotFound />,
  },
  {
    path: "/get-started",
    element: <GetStartedPage />,
    errorElement: <NotFound />,
  },
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
  {
    path: "/admin/seo",
    element: <SEODashboard />,
    errorElement: <NotFound />,
  },
  {
    path: "/sitemap",
    element: <Sitemap />,
    errorElement: <NotFound />,
  },
];
