
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

// Enhanced loading component for Suspense fallback with error recovery
const LoadingFallback = () => {
  console.log('⏳ Loading component via Suspense...');
  return <Loading />;
};

// Enhanced wrapper component that provides Suspense boundary with error recovery
const SuspenseWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense 
      fallback={<LoadingFallback />}
    >
      {children}
    </Suspense>
  );
};

// Enhanced error boundary component for route-level errors
const RouteErrorBoundary = () => {
  console.error('🚨 Route error boundary triggered');
  return <SuspenseWrapper><NotFound /></SuspenseWrapper>;
};

export const mainRoutes = [
  {
    path: "/",
    element: <Index />,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/about",
    element: <SuspenseWrapper><AboutPage /></SuspenseWrapper>,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/approach", 
    element: <SuspenseWrapper><ApproachPage /></SuspenseWrapper>,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/contact",
    element: <SuspenseWrapper><ContactPage /></SuspenseWrapper>,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/book",
    element: <SuspenseWrapper><BookLandingPage /></SuspenseWrapper>,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/data-operations-assessment",
    element: <SuspenseWrapper><HubSpotAssessment /></SuspenseWrapper>,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/data-operations-assessment/results",
    element: <SuspenseWrapper><HubSpotAssessmentResultsPage /></SuspenseWrapper>,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/case-studies",
    element: <SuspenseWrapper><CaseStudies /></SuspenseWrapper>,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/pe-value-creation-program",
    element: <SuspenseWrapper><PEValueCreationPage /></SuspenseWrapper>,
    errorElement: <RouteErrorBoundary />,
  },
];
