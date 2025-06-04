
import React, { lazy } from 'react';

const Index = lazy(() => import('../pages/Index'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ApproachPage = lazy(() => import('../pages/ApproachPage'));
const Contact = lazy(() => import('../pages/Contact'));
const BookLandingPage = lazy(() => import('../pages/BookLandingPage'));
const BookPage = lazy(() => import('../pages/BookPage'));
const HubSpotAssessment = lazy(() => import('../pages/HubSpotAssessment'));
const HubSpotAssessmentResultsPage = lazy(() => import('../pages/HubSpotAssessmentResultsPage'));
const CaseStudies = lazy(() => import('../pages/CaseStudies'));
const HubSpotExpertGuidePage = lazy(() => import('../pages/HubSpotExpertGuidePage'));
const PEValueCreationPage = lazy(() => import('../pages/PEValueCreationPage'));
const NotFound = lazy(() => import('../pages/NotFound'));

export const mainRoutes = [
  {
    path: "/",
    element: <Index />,
    errorElement: <NotFound />,
  },
  {
    path: "/about",
    element: <AboutPage />,
    errorElement: <NotFound />,
  },
  {
    path: "/approach", 
    element: <ApproachPage />,
    errorElement: <NotFound />,
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <NotFound />,
  },
  {
    path: "/book",
    element: <BookLandingPage />,
    errorElement: <NotFound />,
  },
  {
    path: "/book-page",
    element: <BookPage />,
    errorElement: <NotFound />,
  },
  {
    path: "/assessment",
    element: <HubSpotAssessment />,
    errorElement: <NotFound />,
  },
  {
    path: "/hubspot-assessment-results",
    element: <HubSpotAssessmentResultsPage />,
    errorElement: <NotFound />,
  },
  {
    path: "/case-studies",
    element: <CaseStudies />,
    errorElement: <NotFound />,
  },
  {
    path: "/how-to-hire-a-hubspot-expert-in-2025",
    element: <HubSpotExpertGuidePage />,
    errorElement: <NotFound />,
  },
  {
    path: "/pe-value-creation-program",
    element: <PEValueCreationPage />,
    errorElement: <NotFound />,
  },
];
