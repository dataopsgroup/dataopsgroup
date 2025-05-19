
import React from 'react';
import { Navigate } from 'react-router-dom';
import Leadership from '../pages/Leadership';
import Privacy from '../pages/Privacy';
import Sitemap from '../pages/Sitemap';
import GetStartedPage from '../pages/GetStartedPage';
import ThankYouPage from '../pages/ThankYouPage';
import NotFound from '../pages/NotFound';
import ContactThankYouPage from '../pages/ContactThankYouPage';
import HubSpotAssessmentResultsPage from '../pages/HubSpotAssessmentResultsPage';
import HubSpotAssessment from '../pages/HubSpotAssessment';

export const utilityRoutes = [
  {
    path: "/leadership",
    element: <Leadership />,
    errorElement: <NotFound />,
  },
  {
    path: "/privacy",
    element: <Privacy />,
    errorElement: <NotFound />,
  },
  {
    path: "/sitemap",
    element: <Sitemap />,
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
    path: "/contact-thank-you",
    element: <ContactThankYouPage />,
    errorElement: <NotFound />,
  },
  {
    path: "/hubspot-assessment-results",
    element: <HubSpotAssessmentResultsPage />,
    errorElement: <NotFound />,
  },
  {
    path: "/assessment",
    element: <HubSpotAssessment />,
    errorElement: <NotFound />,
  },
  {
    path: "*",
    element: <NotFound />,
  }
];
