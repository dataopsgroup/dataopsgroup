import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { WebVitalMetric } from '@/utils/performance/types';

interface DeviceDistributionProps {
  metrics: WebVitalMetric[];
}

const DeviceDistribution: React.FC<DeviceDistributionProps> = ({ metrics }) => {
  // Device category distribution
  const getDeviceDistribution = () => {
    const distribution: Record<string, number> = {};
    
    metrics.forEach(metric => {
      const device = metric.deviceCategory || 'unknown';
      distribution[device] = (distribution[device] || 0) + 1;
    });
    
    return Object.entries(distribution).map(([name, value]) => ({
      name, 
      value,
      color: name === 'desktop' ? '#3b82f6' : 
             name === 'mobile' ? '#ec4899' :
             name === 'tablet' ? '#8b5cf6' : '#9ca3af'
    }));
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Device Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={getDeviceDistribution()}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            >
              {getDeviceDistribution().map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => [`${value} measurements`, 'Count']} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default DeviceDistribution;
