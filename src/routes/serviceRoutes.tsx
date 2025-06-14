
import React, { lazy, Suspense } from 'react';
import RouteErrorBoundary from '@/components/RouteErrorBoundary';
import { Skeleton } from '@/components/ui/skeleton';

const Services = lazy(() => import('../pages/Services'));
const AnalyticsBI = lazy(() => import('../pages/AnalyticsBI'));
const DataOpsImplementation = lazy(() => import('./services/DataOpsImplementation'));
const TeamTraining = lazy(() => import('../pages/TeamTraining'));
const MarketingOperationsRevOps = lazy(() => import('../pages/MarketingOperationsRevOps'));

// Loading component for service pages
const ServicePageSkeleton = () => (
  <div className="min-h-screen bg-gray-50">
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-6">
          <Skeleton className="h-12 w-3/4" />
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-2/3" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="h-48 w-full" />
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-4 w-2/3" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Wrapper component with consistent error handling
const ServicePageWrapper = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<ServicePageSkeleton />}>
    {children}
  </Suspense>
);

export const serviceRoutes = [
  {
    path: "/services",
    element: (
      <ServicePageWrapper>
        <Services />
      </ServicePageWrapper>
    ),
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/services/analytics-bi",
    element: (
      <ServicePageWrapper>
        <AnalyticsBI />
      </ServicePageWrapper>
    ),
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/services/dataops-implementation",
    element: (
      <ServicePageWrapper>
        <DataOpsImplementation />
      </ServicePageWrapper>
    ),
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/services/team-training",
    element: (
      <ServicePageWrapper>
        <TeamTraining />
      </ServicePageWrapper>
    ),
    errorElement: <RouteErrorBoundary />,
  },
  {
    path: "/services/marketing-operations-revops",
    element: (
      <ServicePageWrapper>
        <MarketingOperationsRevOps />
      </ServicePageWrapper>
    ),
    errorElement: <RouteErrorBoundary />,
  },
];
