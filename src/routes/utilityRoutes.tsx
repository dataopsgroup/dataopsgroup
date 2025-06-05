
import React, { lazy } from 'react';

const GetStartedPage = lazy(() => import('../pages/GetStartedPage'));
const ThankYouPage = lazy(() => import('../pages/ThankYouPage'));
const ContactThankYouPage = lazy(() => import('../pages/ContactThankYouPage'));
const Sitemap = lazy(() => import('../pages/Sitemap'));
const HubSpotAssessmentResultsPage = lazy(() => import('../pages/HubSpotAssessmentResultsPage'));
const Privacy = lazy(() => import('../pages/Privacy'));
const Terms = lazy(() => import('../pages/Terms'));
const NotFound = lazy(() => import('../pages/NotFound'));
const StructuredDataTest = lazy(() => import('../pages/StructuredDataTest'));
const WebVitalsDashboard = lazy(() => import('../components/admin/WebVitalsDashboard'));

export const utilityRoutes = [
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
    path: "/sitemap",
    element: <Sitemap />,
    errorElement: <NotFound />,
  },
  {
    path: "/hubspot-assessment-results",
    element: <HubSpotAssessmentResultsPage />,
    errorElement: <NotFound />,
  },
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
  {
    path: "/admin/structured-data",
    element: <StructuredDataTest />,
    errorElement: <NotFound />,
  },
  {
    path: "/admin/vitals",
    element: <WebVitalsDashboard />,
    errorElement: <NotFound />,
  },
  {
    path: "/404",
    element: <NotFound />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
