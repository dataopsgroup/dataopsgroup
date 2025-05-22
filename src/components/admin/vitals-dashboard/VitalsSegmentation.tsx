
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import { WebVitalMetric } from '@/utils/performance/types';
import { DeviceDistribution } from './charts/DeviceDistribution';
import { ConnectionDistribution } from './charts/ConnectionDistribution';

interface VitalsSegmentationProps {
  metrics: WebVitalMetric[];
  uniqueDevices: string[];
  uniqueConnections: string[];
  uniquePaths: string[];
}

export const VitalsSegmentation: React.FC<VitalsSegmentationProps> = ({ 
  metrics, 
  uniqueDevices, 
  uniqueConnections, 
  uniquePaths 
}) => {
  const [selectedMetric, setSelectedMetric] = useState<string>('LCP');
  const [filterType, setFilterType] = useState<string>('none');
  const [filterValue, setFilterValue] = useState<string>('all');
  const [uniqueValues, setUniqueValues] = useState<string[]>([]);
  
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
    timestamp: new Date(metric.timestamp || Date.now()).toLocaleTimeString(),
    value: Math.round(metric.value * 100) / 100,
    rating: metric.rating,
    path: metric.path || '/',
    device: metric.deviceCategory || 'unknown',
    connection: metric.connection || 'unknown'
  }));
  
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <DeviceDistribution metrics={filteredMetrics} />
        <ConnectionDistribution metrics={filteredMetrics} />
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
    </div>
  );
};
