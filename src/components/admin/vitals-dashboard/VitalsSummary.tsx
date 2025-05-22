
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import { WebVitalMetric } from '@/utils/performance/types';

interface VitalsSummaryProps {
  averageScores: Record<string, number>;
  metrics: WebVitalMetric[];
}

export const VitalsSummary: React.FC<VitalsSummaryProps> = ({ averageScores, metrics }) => {
  // Create data for summary chart
  const summaryData = Object.entries(averageScores).map(([name, value]) => ({
    name,
    value: Math.round(value * 100) / 100,
    limit: name === 'CLS' ? 0.1 : 
          name === 'FID' || name === 'INP' ? 100 : 
          name === 'TTFB' ? 800 : 2500 // Apply corresponding limits
  }));
  
  // Distribution of good/needs-improvement/poor ratings
  const getRatingDistribution = () => {
    const distribution = { good: 0, 'needs-improvement': 0, poor: 0 };
    
    metrics.forEach(metric => {
      distribution[metric.rating]++;
    });
    
    return [
      { name: 'Good', value: distribution.good, color: '#4ade80' },
      { name: 'Needs Improvement', value: distribution['needs-improvement'], color: '#facc15' },
      { name: 'Poor', value: distribution.poor, color: '#ef4444' }
    ];
  };
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
      <Card>
        <CardHeader>
          <CardTitle>Performance Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart 
              data={summaryData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip 
                formatter={(value, name) => [`${value}${name === 'CLS' ? '' : 'ms'}`, name]}
              />
              <Legend />
              <Bar 
                dataKey="value" 
                name="Current Value" 
                fill="#8884d8"
                label={{ position: 'top' }}
              />
              <Bar 
                dataKey="limit" 
                name="Good Threshold" 
                fill="#82ca9d"
                label={{ position: 'top' }}
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Rating Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={getRatingDistribution()}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {getRatingDistribution().map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value} measurements`, 'Count']} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};
