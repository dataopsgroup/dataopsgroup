
import React, { lazy, Suspense } from 'react';

const Index = lazy(() => import('../pages/Index'));
const AboutPage = lazy(() => import('../pages/AboutPage'));
const ApproachPage = lazy(() => import('../pages/ApproachPage'));
const Contact = lazy(() => import('../pages/Contact'));
const BookLandingPage = lazy(() => import('../pages/BookLandingPage'));
const HubSpotAssessment = lazy(() => import('../pages/HubSpotAssessment'));
const HubSpotAssessmentResultsPage = lazy(() => import('../pages/HubSpotAssessmentResultsPage'));
const CaseStudies = lazy(() => import('../pages/CaseStudies'));
const PEValueCreationPage = lazy(() => import('../pages/PEValueCreationPage'));
const NotFound = lazy(() => import('../pages/NotFound'));

// Loading component for Suspense fallback
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="loading-spinner"></div>
  </div>
);

// Wrapper component that provides Suspense boundary
const SuspenseWrapper = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<LoadingFallback />}>
    {children}
  </Suspense>
);

export const mainRoutes = [
  {
    path: "/",
    element: <SuspenseWrapper><Index /></SuspenseWrapper>,
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
    element: <SuspenseWrapper><Contact /></SuspenseWrapper>,
    errorElement: <SuspenseWrapper><NotFound /></SuspenseWrapper>,
  },
  // Consolidated to single book page
  {
    path: "/book",
    element: <SuspenseWrapper><BookLandingPage /></SuspenseWrapper>,
    errorElement: <SuspenseWrapper><NotFound /></SuspenseWrapper>,
  },
  // Assessment with updated URL
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
