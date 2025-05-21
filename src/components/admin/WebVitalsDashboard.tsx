
import React, { useState, useEffect } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer, BarChart, Bar
} from 'recharts';

interface WebVitalMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  timestamp: number;
  path: string;
}

const WebVitalsDashboard = () => {
  const [metrics, setMetrics] = useState<WebVitalMetric[]>([]);
  const [selectedMetric, setSelectedMetric] = useState<string>('LCP');
  
  useEffect(() => {
    try {
      // Load metrics from localStorage
      const storedMetrics = localStorage.getItem('webVitalsMetrics');
      if (storedMetrics) {
        setMetrics(JSON.parse(storedMetrics));
      }
      
      // Set up listener for new metrics
      const handleStorageChange = () => {
        const updatedMetrics = localStorage.getItem('webVitalsMetrics');
        if (updatedMetrics) {
          setMetrics(JSON.parse(updatedMetrics));
        }
      };
      
      window.addEventListener('storage', handleStorageChange);
      
      return () => {
        window.removeEventListener('storage', handleStorageChange);
      };
    } catch (e) {
      console.error('Error loading web vitals metrics:', e);
    }
  }, []);
  
  // Filter metrics by selected type
  const filteredMetrics = metrics.filter(metric => metric.name === selectedMetric);
  
  // Transform data for charts
  const chartData = filteredMetrics.map(metric => ({
    timestamp: new Date(metric.timestamp).toLocaleTimeString(),
    value: Math.round(metric.value * 100) / 100,
    rating: metric.rating,
    path: metric.path
  }));
  
  // Calculate average scores
  const averageScores: Record<string, number> = {};
  
  ['LCP', 'FID', 'CLS', 'INP', 'FCP', 'TTFB'].forEach(name => {
    const metricsOfType = metrics.filter(m => m.name === name);
    if (metricsOfType.length > 0) {
      averageScores[name] = metricsOfType.reduce((sum, m) => sum + m.value, 0) / metricsOfType.length;
    } else {
      averageScores[name] = 0;
    }
  });
  
  // Create data for summary chart
  const summaryData = Object.entries(averageScores).map(([name, value]) => ({
    name,
    value: Math.round(value * 100) / 100,
    limit: name === 'CLS' ? 0.1 : 
           name === 'FID' || name === 'INP' ? 100 : 
           name === 'TTFB' ? 800 : 2500 // Apply corresponding limits
  }));
  
  // Get color for metric based on value
  const getMetricColor = (name: string, value: number): string => {
    if (name === 'CLS') {
      return value <= 0.1 ? '#4ade80' : value <= 0.25 ? '#facc15' : '#ef4444';
    } else if (name === 'FID' || name === 'INP') {
      return value <= 100 ? '#4ade80' : value <= 300 ? '#facc15' : '#ef4444';
    } else if (name === 'TTFB') {
      return value <= 800 ? '#4ade80' : value <= 1800 ? '#facc15' : '#ef4444';
    } else {
      return value <= 2500 ? '#4ade80' : value <= 4000 ? '#facc15' : '#ef4444';
    }
  };
  
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Core Web Vitals Dashboard</h2>
      
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Performance Summary</h3>
        <div className="mb-4">
          <ResponsiveContainer width="100%" height={200}>
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
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Metric Details</h3>
        <div className="flex space-x-2 mb-4">
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
        
        <div>
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
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium mb-2">Recent Measurements</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Metric
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Value
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rating
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Page
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {metrics.slice(-10).reverse().map((metric, idx) => (
                <tr key={idx}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(metric.timestamp).toLocaleTimeString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {metric.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {Math.round(metric.value * 100) / 100}{metric.name === 'CLS' ? '' : 'ms'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                      ${metric.rating === 'good' ? 'bg-green-100 text-green-800' : 
                        metric.rating === 'needs-improvement' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'}`}>
                      {metric.rating}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {metric.path}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default WebVitalsDashboard;
