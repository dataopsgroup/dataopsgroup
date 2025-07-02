
import React, { Suspense } from 'react';

// Lazy load chart components to reduce initial bundle
const LazyRechartsComponent = React.lazy(() => import('recharts').then(module => ({
  default: module.ResponsiveContainer
})));

interface LazyChartsProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const LazyCharts: React.FC<LazyChartsProps> = ({ 
  children, 
  fallback = <div className="loading-placeholder h-64 rounded-lg" /> 
}) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
};

export default LazyCharts;
