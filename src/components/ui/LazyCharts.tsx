
import React, { Suspense } from 'react';

// Lazy load only the specific chart components that are actually used
const LazyBarChart = React.lazy(() => 
  import('recharts').then(module => ({ default: module.BarChart }))
);

const LazyLineChart = React.lazy(() => 
  import('recharts').then(module => ({ default: module.LineChart }))
);

const LazyPieChart = React.lazy(() => 
  import('recharts').then(module => ({ default: module.PieChart }))
);

const LazyResponsiveContainer = React.lazy(() => 
  import('recharts').then(module => ({ default: module.ResponsiveContainer }))
);

// Export individual lazy components to reduce bundle size
export const LazyChartComponents = {
  BarChart: LazyBarChart,
  LineChart: LazyLineChart,
  PieChart: LazyPieChart,
  ResponsiveContainer: LazyResponsiveContainer
};

interface LazyChartsProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

const LazyCharts: React.FC<LazyChartsProps> = ({ 
  children, 
  fallback = <div className="loading-placeholder h-64 rounded-lg animate-pulse bg-gray-100" /> 
}) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
};

export default LazyCharts;
