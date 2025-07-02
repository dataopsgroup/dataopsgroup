
import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  LazyChartWrapper
} from '@/components/charts/LazyChartLoader';

interface GSCPerformanceChartProps {
  activeTab: string;
  data: any[];
}

const GSCPerformanceChart: React.FC<GSCPerformanceChartProps> = ({ activeTab, data }) => {
  // Format tooltip display values
  const formatTooltip = (value: number, name: string) => {
    if (name === 'position') {
      return [`${value.toFixed(1)}`, 'Avg. Position'];
    }
    if (name === 'ctr') {
      return [`${(value).toFixed(1)}%`, 'CTR'];
    }
    return [value, name.charAt(0).toUpperCase() + name.slice(1)];
  };

  return (
    <div className="h-[400px] w-full">
      {data.length > 0 ? (
        <LazyChartWrapper height="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="date" 
                tickFormatter={(date) => new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} 
              />
              <YAxis yAxisId="left" />
              <YAxis yAxisId="right" orientation="right" />
              <Tooltip 
                formatter={formatTooltip}
                labelFormatter={(date) => new Date(date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} 
              />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="clicks" stroke="#1e40af" activeDot={{ r: 8 }} strokeWidth={2} />
              <Line yAxisId="left" type="monotone" dataKey="impressions" stroke="#7e22ce" strokeWidth={2} />
              {activeTab === 'performance' && (
                <>
                  <Line yAxisId="right" type="monotone" dataKey="position" stroke="#22c55e" strokeWidth={2} />
                  <Line yAxisId="right" type="monotone" dataKey="ctr" stroke="#f97316" strokeWidth={2} />
                </>
              )}
            </LineChart>
          </ResponsiveContainer>
        </LazyChartWrapper>
      ) : (
        <div className="h-full flex items-center justify-center">
          <p className="text-gray-500">No performance data available</p>
        </div>
      )}
    </div>
  );
};

export default GSCPerformanceChart;
