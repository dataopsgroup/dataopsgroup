
import React from 'react';
import HubSpotAssessment from '@/pages/HubSpotAssessment';
import HubSpotAssessmentResultsPage from '@/pages/HubSpotAssessmentResultsPage';
import GetStartedPage from '@/pages/GetStartedPage';
import ThankYouPage from '@/pages/ThankYouPage';
import ContactThankYouPage from '@/pages/ContactThankYouPage';
import SEODashboard from '@/pages/SEODashboard';
import Sitemap from '@/pages/Sitemap';
import NotFound from '@/pages/NotFound';

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
