
import React, { useState, useEffect } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell
} from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

interface WebVitalMetric {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  timestamp: number;
  path: string;
  deviceCategory?: string;
  connection?: string;
  sessionId?: string;
}

const WebVitalsDashboard = () => {
  const [metrics, setMetrics] = useState<WebVitalMetric[]>([]);
  const [selectedMetric, setSelectedMetric] = useState<string>('LCP');
  const [filterType, setFilterType] = useState<string>('none');
  const [filterValue, setFilterValue] = useState<string>('all');
  const [uniqueValues, setUniqueValues] = useState<string[]>([]);
  const [uniqueDevices, setUniqueDevices] = useState<string[]>([]);
  const [uniqueConnections, setUniqueConnections] = useState<string[]>([]);
  const [uniquePaths, setUniquePaths] = useState<string[]>([]);
  
  useEffect(() => {
    try {
      // Load metrics from localStorage
      const storedMetrics = localStorage.getItem('webVitalsMetrics');
      if (storedMetrics) {
        const parsedMetrics = JSON.parse(storedMetrics);
        setMetrics(parsedMetrics);
        
        // Extract unique values for filters
        const devices = [...new Set(parsedMetrics.map((m: WebVitalMetric) => m.deviceCategory).filter(Boolean))];
        const connections = [...new Set(parsedMetrics.map((m: WebVitalMetric) => m.connection).filter(Boolean))];
        const paths = [...new Set(parsedMetrics.map((m: WebVitalMetric) => m.path))];
        
        setUniqueDevices(devices);
        setUniqueConnections(connections);
        setUniquePaths(paths);
      }
      
      // Set up listener for new metrics
      const handleStorageChange = () => {
        const updatedMetrics = localStorage.getItem('webVitalsMetrics');
        if (updatedMetrics) {
          const parsedMetrics = JSON.parse(updatedMetrics);
          setMetrics(parsedMetrics);
          
          // Update unique values for filters
          const devices = [...new Set(parsedMetrics.map((m: WebVitalMetric) => m.deviceCategory).filter(Boolean))];
          const connections = [...new Set(parsedMetrics.map((m: WebVitalMetric) => m.connection).filter(Boolean))];
          const paths = [...new Set(parsedMetrics.map((m: WebVitalMetric) => m.path))];
          
          setUniqueDevices(devices);
          setUniqueConnections(connections);
          setUniquePaths(paths);
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
  
  // Update unique values when filter type changes
  useEffect(() => {
    if (filterType === 'device') {
      setUniqueValues(uniqueDevices);
    } else if (filterType === 'connection') {
      setUniqueValues(uniqueConnections);
    } else if (filterType === 'path') {
      setUniqueValues(uniquePaths);
    } else {
      setUniqueValues([]);
    }
    
    setFilterValue('all');
  }, [filterType, uniqueDevices, uniqueConnections, uniquePaths]);
  
  // Apply filters to metrics
  const filteredMetrics = metrics.filter(metric => {
    // First filter by metric type
    if (metric.name !== selectedMetric) return false;
    
    // Then apply the selected filter
    if (filterType === 'none' || filterValue === 'all') return true;
    
    if (filterType === 'device') {
      return metric.deviceCategory === filterValue;
    } else if (filterType === 'connection') {
      return metric.connection === filterValue;
    } else if (filterType === 'path') {
      return metric.path === filterValue;
    }
    
    return true;
  });
  
  // Transform data for charts
  const chartData = filteredMetrics.map(metric => ({
    timestamp: new Date(metric.timestamp).toLocaleTimeString(),
    value: Math.round(metric.value * 100) / 100,
    rating: metric.rating,
    path: metric.path,
    device: metric.deviceCategory || 'unknown',
    connection: metric.connection || 'unknown'
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
  
  // Distribution of good/needs-improvement/poor ratings
  const getRatingDistribution = () => {
    const distribution = { good: 0, 'needs-improvement': 0, poor: 0 };
    
    filteredMetrics.forEach(metric => {
      distribution[metric.rating]++;
    });
    
    return [
      { name: 'Good', value: distribution.good, color: '#4ade80' },
      { name: 'Needs Improvement', value: distribution['needs-improvement'], color: '#facc15' },
      { name: 'Poor', value: distribution.poor, color: '#ef4444' }
    ];
  };
  
  // Device category distribution
  const getDeviceDistribution = () => {
    const distribution: Record<string, number> = {};
    
    filteredMetrics.forEach(metric => {
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
  
  // Connection type distribution
  const getConnectionDistribution = () => {
    const distribution: Record<string, number> = {};
    
    filteredMetrics.forEach(metric => {
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
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Core Web Vitals Dashboard</h2>
      
      <Tabs defaultValue="summary" className="mb-6">
        <TabsList className="mb-4">
          <TabsTrigger value="summary">Summary</TabsTrigger>
          <TabsTrigger value="details">Metric Details</TabsTrigger>
          <TabsTrigger value="segments">Segmentation</TabsTrigger>
          <TabsTrigger value="raw">Raw Data</TabsTrigger>
        </TabsList>
        
        <TabsContent value="summary">
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
        </TabsContent>
        
        <TabsContent value="details">
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
        </TabsContent>
        
        <TabsContent value="segments">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
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
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Filtered Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <span>Filter by:</span>
                  <Select value={filterType} onValueChange={setFilterType}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Select filter" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">No Filter</SelectItem>
                      <SelectItem value="device">Device Type</SelectItem>
                      <SelectItem value="connection">Connection Type</SelectItem>
                      <SelectItem value="path">Page Path</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                {filterType !== 'none' && (
                  <div className="flex items-center gap-2">
                    <span>Value:</span>
                    <Select value={filterValue} onValueChange={setFilterValue}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Select value" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All</SelectItem>
                        {uniqueValues.map(value => (
                          <SelectItem key={value} value={value}>{value}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-500 mb-1">Active filters:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-blue-50">
                    Metric: {selectedMetric}
                  </Badge>
                  
                  {filterType !== 'none' && (
                    <Badge variant="outline" className="bg-blue-50">
                      {filterType}: {filterValue}
                    </Badge>
                  )}
                </div>
              </div>
              
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
        </TabsContent>
        
        <TabsContent value="raw">
          <Card>
            <CardHeader>
              <CardTitle>Recent Measurements</CardTitle>
            </CardHeader>
            <CardContent>
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
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Device
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Connection
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {metrics.slice(-15).reverse().map((metric, idx) => (
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
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {metric.deviceCategory || 'unknown'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {metric.connection || 'unknown'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WebVitalsDashboard;
