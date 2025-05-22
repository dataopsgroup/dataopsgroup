
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { WebVitalMetric } from '@/utils/performance/types';

interface ConnectionDistributionProps {
  metrics: WebVitalMetric[];
}

export const ConnectionDistribution: React.FC<ConnectionDistributionProps> = ({ metrics }) => {
  // Connection type distribution
  const getConnectionDistribution = () => {
    const distribution: Record<string, number> = {};
    
    metrics.forEach(metric => {
      const connection = metric.connection || 'unknown';
      distribution[connection] = (distribution[connection] || 0) + 1;
    });
    
    const colors = ['#3b82f6', '#ec4899', '#8b5cf6', '#10b981', '#f59e0b', '#6366f1', '#9ca3af'];
    
    return Object.entries(distribution).map(([name, value], index) => ({
      name, 
      value,
      color: colors[index % colors.length]
    }));
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Connection Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={getConnectionDistribution()}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            >
              {getConnectionDistribution().map((entry, index) => (
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
