
import React, { lazy } from 'react';

const BlogList = lazy(() => import('../pages/BlogList'));
const BlogPostPage = lazy(() => import('../pages/BlogPost'));
const CaseStudyDetailPage = lazy(() => import('../pages/CaseStudyDetail'));
const FAQs = lazy(() => import('../pages/FAQs'));
const FAQServicesPage = lazy(() => import('../pages/FAQServicesPage'));
const FAQHubSpotExperts = lazy(() => import('../pages/FAQHubSpotExperts'));
const FAQDataQuality = lazy(() => import('../pages/FAQDataQuality'));
const FAQOurApproach = lazy(() => import('../pages/FAQOurApproach'));
const FAQHubSpotModules = lazy(() => import('../pages/FAQHubSpotModules'));
const StructuredDataTest = lazy(() => import('../pages/StructuredDataTest'));
const RouteErrorBoundary = lazy(() => import('../components/RouteErrorBoundary'));

// Suspense wrapper for lazy loaded components
const SuspenseWrapper = ({ children }: { children: React.ReactNode }) => (
  <React.Suspense fallback={<div className="flex justify-center items-center h-64"><div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-dataops-600"></div></div>}>
    {children}
  </React.Suspense>
);

export const insightRoutes = [
  // Blog and insights
  {
    path: "/insights",
    element: <SuspenseWrapper><BlogList /></SuspenseWrapper>,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/insights/:postId",
    element: <SuspenseWrapper><BlogPostPage /></SuspenseWrapper>,
    errorElement: <RouteErrorBoundary />,
  },
  
  // Case studies
  {
    path: "/case-studies/:caseStudyId",
    element: <SuspenseWrapper><CaseStudyDetailPage /></SuspenseWrapper>,
    errorElement: <RouteErrorBoundary />,
  },
  
  // FAQ sections - organized under /faqs
  {
    path: "/faqs",
    element: <SuspenseWrapper><FAQs /></SuspenseWrapper>,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/faqs/services",
    element: <SuspenseWrapper><FAQServicesPage /></SuspenseWrapper>,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/faqs/experts",
    element: <SuspenseWrapper><FAQHubSpotExperts /></SuspenseWrapper>,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/faqs/data-quality",
    element: <SuspenseWrapper><FAQDataQuality /></SuspenseWrapper>,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/faqs/approach",
    element: <SuspenseWrapper><FAQOurApproach /></SuspenseWrapper>,
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/faqs/modules",
    element: <SuspenseWrapper><FAQHubSpotModules /></SuspenseWrapper>,
    errorElement: <RouteErrorBoundary />,
  },
  
  // Testing and admin
  {
    path: "/structured-data-test",
    element: <SuspenseWrapper><StructuredDataTest /></SuspenseWrapper>,
    errorElement: <RouteErrorBoundary />,
  }
];
