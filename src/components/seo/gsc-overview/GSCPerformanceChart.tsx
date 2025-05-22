
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { mockSearchData } from './mockData';
import { formatTooltip } from './useGSCMetrics';

interface GSCPerformanceChartProps {
  activeTab: string;
}

const GSCPerformanceChart: React.FC<GSCPerformanceChartProps> = ({ activeTab }) => {
  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={mockSearchData}
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
    </div>
  );
};

export default GSCPerformanceChart;
