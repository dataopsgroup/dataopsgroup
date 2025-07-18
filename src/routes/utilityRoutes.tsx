
import React, { lazy, Suspense } from 'react';

const GetStartedPage = lazy(() => import('../pages/GetStartedPage'));
const ThankYouPage = lazy(() => import('../pages/ThankYouPage'));
const ContactThankYouPage = lazy(() => import('../pages/ContactThankYouPage'));
const Sitemap = lazy(() => import('../pages/Sitemap'));
const HubSpotAssessmentResultsPage = lazy(() => import('../pages/HubSpotAssessmentResultsPage'));
const Privacy = lazy(() => import('../pages/Privacy'));
const Terms = lazy(() => import('../pages/Terms'));
const NotFound = lazy(() => import('../pages/NotFound'));
const ServiceNotFound = lazy(() => import('../pages/ServiceNotFound'));
const StructuredDataTest = lazy(() => import('../pages/StructuredDataTest'));
// WebVitalsDashboard removed for performance
const BadDataCostCalculatorPage = lazy(() => import('../pages/BadDataCostCalculatorPage'));
const RevOpsROICalculatorPage = lazy(() => import('../pages/RevOpsROICalculatorPage'));
const HubSpotROICalculatorPage = lazy(() => import('../pages/HubSpotROICalculatorPage'));
// SchemaValidationPage removed for performance

// Loading component for Suspense fallback
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-dataops-600"></div>
  </div>
);

// Enhanced wrapper component that provides Suspense boundary
const SuspenseWrapper = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<LoadingFallback />}>
    {children}
  </Suspense>
);

export const utilityRoutes = [
  {
    path: "/get-started",
    element: <SuspenseWrapper><GetStartedPage /></SuspenseWrapper>,
    errorElement: <SuspenseWrapper><NotFound /></SuspenseWrapper>,
  },
  {
    path: "/thank-you",
    element: <SuspenseWrapper><ThankYouPage /></SuspenseWrapper>,
    errorElement: <SuspenseWrapper><NotFound /></SuspenseWrapper>,
  },
  {
    path: "/contact/thank-you",
    element: <SuspenseWrapper><ContactThankYouPage /></SuspenseWrapper>,
    errorElement: <SuspenseWrapper><NotFound /></SuspenseWrapper>,
  },
  {
    path: "/sitemap",
    element: <SuspenseWrapper><Sitemap /></SuspenseWrapper>,
    errorElement: <SuspenseWrapper><NotFound /></SuspenseWrapper>,
  },
  {
    path: "/hubspot-assessment-results",
    element: <SuspenseWrapper><HubSpotAssessmentResultsPage /></SuspenseWrapper>,
    errorElement: <SuspenseWrapper><NotFound /></SuspenseWrapper>,
  },
  {
    path: "/privacy",
    element: <SuspenseWrapper><Privacy /></SuspenseWrapper>,
    errorElement: <SuspenseWrapper><NotFound /></SuspenseWrapper>,
  },
  {
    path: "/terms",
    element: <SuspenseWrapper><Terms /></SuspenseWrapper>,
    errorElement: <SuspenseWrapper><NotFound /></SuspenseWrapper>,
  },
  {
    path: "/bad-data-cost-calculator",
    element: <SuspenseWrapper><BadDataCostCalculatorPage /></SuspenseWrapper>,
    errorElement: <SuspenseWrapper><NotFound /></SuspenseWrapper>,
  },
  {
    path: "/revops-roi-calculator",
    element: <SuspenseWrapper><RevOpsROICalculatorPage /></SuspenseWrapper>,
    errorElement: <SuspenseWrapper><NotFound /></SuspenseWrapper>,
  },
  {
    path: "/hubspot-roi-calculator",
    element: <SuspenseWrapper><HubSpotROICalculatorPage /></SuspenseWrapper>,
    errorElement: <SuspenseWrapper><NotFound /></SuspenseWrapper>,
  },
  {
    path: "/admin/structured-data",
    element: <SuspenseWrapper><StructuredDataTest /></SuspenseWrapper>,
    errorElement: <SuspenseWrapper><NotFound /></SuspenseWrapper>,
  },
  // Admin routes removed for performance
  {
    path: "/services/404",
    element: <SuspenseWrapper><ServiceNotFound /></SuspenseWrapper>,
  },
  {
    path: "/404",
    element: <SuspenseWrapper><NotFound /></SuspenseWrapper>,
  },
  {
    path: "*",
    element: <SuspenseWrapper><NotFound /></SuspenseWrapper>,
  },
];
