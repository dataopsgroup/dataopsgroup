import React, { lazy, Suspense } from 'react';
import Index from '../pages/Index';
import Loading from '../components/Loading';

// Keep Index as direct import, lazy load others
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ApproachPage = lazy(() => import('../pages/ApproachPage'));
const ContactPage = lazy(() => import('../pages/Contact'));
const BookLandingPage = lazy(() => import('../pages/BookLandingPage'));
const HubSpotAssessment = lazy(() => import('../pages/HubSpotAssessment'));
const HubSpotAssessmentResultsPage = lazy(() => import('../pages/HubSpotAssessmentResultsPage'));
const CaseStudies = lazy(() => import('../pages/CaseStudies'));
const PEValueCreationPage = lazy(() => import('../pages/PEValueCreationPage'));
const NotFound = lazy(() => import('../pages/NotFound'));

// Simple loading component for Suspense fallback
const LoadingFallback = () => <Loading />;

// Simple wrapper component that provides Suspense boundary
const SuspenseWrapper = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<LoadingFallback />}>
    {children}
  </Suspense>
);

export const mainRoutes = [
  {
    path: "/",
    element: <Index />,
    errorElement: <SuspenseWrapper><NotFound /></SuspenseWrapper>,
  },
  {
    path: "/about",
    element: <SuspenseWrapper><AboutPage /></SuspenseWrapper>,
    errorElement: <SuspenseWrapper><NotFound /></SuspenseWrapper>,
  },
  {
    path: "/approach", 
    element: <SuspenseWrapper><ApproachPage /></SuspenseWrapper>,
    errorElement: <SuspenseWrapper><NotFound /></SuspenseWrapper>,
  },
  {
    path: "/contact",
    element: <SuspenseWrapper><ContactPage /></SuspenseWrapper>,
    errorElement: <SuspenseWrapper><NotFound /></SuspenseWrapper>,
  },
  {
    path: "/book",
    element: <SuspenseWrapper><BookLandingPage /></SuspenseWrapper>,
    errorElement: <SuspenseWrapper><NotFound /></SuspenseWrapper>,
  },
  {
    path: "/data-operations-assessment",
    element: <SuspenseWrapper><HubSpotAssessment /></SuspenseWrapper>,
    errorElement: <SuspenseWrapper><NotFound /></SuspenseWrapper>,
  },
  {
    path: "/data-operations-assessment/results",
    element: <SuspenseWrapper><HubSpotAssessmentResultsPage /></SuspenseWrapper>,
    errorElement: <SuspenseWrapper><NotFound /></SuspenseWrapper>,
  },
  {
    path: "/case-studies",
    element: <SuspenseWrapper><CaseStudies /></SuspenseWrapper>,
    errorElement: <SuspenseWrapper><NotFound /></SuspenseWrapper>,
  },
  {
    path: "/pe-value-creation-program",
    element: <SuspenseWrapper><PEValueCreationPage /></SuspenseWrapper>,
    errorElement: <SuspenseWrapper><NotFound /></SuspenseWrapper>,
  },
];
