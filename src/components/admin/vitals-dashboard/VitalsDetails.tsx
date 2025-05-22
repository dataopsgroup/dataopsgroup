
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { WebVitalMetric } from '@/utils/performance/types';

interface VitalsDetailsProps {
  metrics: WebVitalMetric[];
}

export const VitalsDetails: React.FC<VitalsDetailsProps> = ({ metrics }) => {
  const [selectedMetric, setSelectedMetric] = useState<string>('LCP');
  
  // Transform data for charts
  const chartData = metrics
    .filter(metric => metric.name === selectedMetric)
    .map(metric => ({
      timestamp: new Date(metric.timestamp || Date.now()).toLocaleTimeString(),
      value: Math.round(metric.value * 100) / 100,
      rating: metric.rating,
      path: metric.path || '/',
      device: metric.deviceCategory || 'unknown',
      connection: metric.connection || 'unknown'
    }));
    
  return (
    <div className="mb-6">
      <div className="flex flex-wrap items-center gap-4 mb-4">
        <h3 className="text-lg font-medium">Select Metric:</h3>
        <div className="flex space-x-2">
          {['LCP', 'FID', 'CLS', 'INP', 'FCP', 'TTFB'].map(metric => (
            <button
              key={metric}
              className={`px-3 py-1 rounded ${
                selectedMetric === metric 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
              onClick={() => setSelectedMetric(metric)}
            >
              {metric}
            </button>
          ))}
        </div>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>{selectedMetric} Trend Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart 
              data={chartData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="timestamp" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="value"
                name={`${selectedMetric} (${selectedMetric === 'CLS' ? '' : 'ms'})`}
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};
