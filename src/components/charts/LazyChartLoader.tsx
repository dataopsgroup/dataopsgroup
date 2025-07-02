
import React, { Suspense } from 'react';

// Lazy load individual chart components to reduce initial bundle size
const ResponsiveContainer = React.lazy(() => 
  import('recharts').then(module => ({ default: module.ResponsiveContainer }))
);

const LineChart = React.lazy(() => 
  import('recharts').then(module => ({ default: module.LineChart }))
);

const BarChart = React.lazy(() => 
  import('recharts').then(module => ({ default: module.BarChart }))
);

const PieChart = React.lazy(() => 
  import('recharts').then(module => ({ default: module.PieChart }))
);

const XAxis = React.lazy(() => 
  import('recharts').then(module => ({ default: module.XAxis }))
);

const YAxis = React.lazy(() => 
  import('recharts').then(module => ({ default: module.YAxis }))
);

const CartesianGrid = React.lazy(() => 
  import('recharts').then(module => ({ default: module.CartesianGrid }))
);

const Tooltip = React.lazy(() => 
  import('recharts').then(module => ({ default: module.Tooltip }))
);

const Legend = React.lazy(() => 
  import('recharts').then(module => ({ default: module.Legend }))
);

const Line = React.lazy(() => 
  import('recharts').then(module => ({ default: module.Line }))
);

const Bar = React.lazy(() => 
  import('recharts').then(module => ({ default: module.Bar }))
);

const Pie = React.lazy(() => 
  import('recharts').then(module => ({ default: module.Pie }))
);

const Cell = React.lazy(() => 
  import('recharts').then(module => ({ default: module.Cell }))
);

const ReferenceLine = React.lazy(() => 
  import('recharts').then(module => ({ default: module.ReferenceLine }))
);

// Loading fallback component
const ChartLoadingFallback: React.FC = () => (
  <div className="loading-placeholder h-64 rounded-lg animate-pulse bg-gray-100 flex items-center justify-center">
    <div className="text-gray-500">Loading chart...</div>
  </div>
);

// Wrapper component for lazy-loaded charts
interface LazyChartWrapperProps {
  children: React.ReactNode;
  height?: string;
}

const LazyChartWrapper: React.FC<LazyChartWrapperProps> = ({ 
  children, 
  height = 'h-64' 
}) => {
  return (
    <Suspense fallback={<div className={`loading-placeholder ${height} rounded-lg animate-pulse bg-gray-100`} />}>
      {children}
    </Suspense>
  );
};

// Export all components for use
export {
  ResponsiveContainer,
  LineChart,
  BarChart,
  PieChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  Bar,
  Pie,
  Cell,
  ReferenceLine,
  LazyChartWrapper,
  ChartLoadingFallback
};
