
import React, { useState, useEffect } from 'react';
import { WebVitalMetric } from '@/utils/performance/types';
import { VitalsSummary } from '../vitals-dashboard/VitalsSummary';
import { VitalsDetails } from '../vitals-dashboard/VitalsDetails';
import { VitalsSegmentation } from '../vitals-dashboard/VitalsSegmentation';
import { VitalsRawData } from '../vitals-dashboard/VitalsRawData';
import { DeviceDistribution } from './charts/DeviceDistribution';
import { LCPElementAnalysis } from './charts/LCPElementAnalysis';
import { BlockingTimeAnalysis } from './charts/BlockingTimeAnalysis';

const WebVitalsDashboard = () => {
  const [metrics, setMetrics] = useState<WebVitalMetric[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [timeRange, setTimeRange] = useState('7d'); // Default to 7 days
  const [filteredMetrics, setFilteredMetrics] = useState<WebVitalMetric[]>([]);

  // Fetch metrics data
  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        setLoading(true);
        // In a real app, this would be an API call
        // For demo purposes, we'll use mock data
        const response = await fetch('/api/web-vitals?timeRange=' + timeRange);
        const data = await response.json();
        setMetrics(data);
        setFilteredMetrics(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load metrics data');
        setLoading(false);
        console.error('Error fetching metrics:', err);
      }
    };

    fetchMetrics();
  }, [timeRange]);

  // Filter metrics based on user selection
  const filterByMetricType = (metricType: string | null) => {
    if (!metricType) {
      setFilteredMetrics(metrics);
    } else {
      setFilteredMetrics(metrics.filter(metric => metric.name === metricType));
    }
  };

  // Handle time range change
  const handleTimeRangeChange = (range: string) => {
    setTimeRange(range);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error!</strong>
        <span className="block sm:inline"> {error}</span>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h1 className="text-2xl font-bold">Web Vitals Dashboard</h1>
          <div className="flex space-x-4">
            {/* Keep existing controls */}
          </div>
        </div>
        
        {/* New Performance Insights Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Performance Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <LCPElementAnalysis metrics={filteredMetrics} />
            <BlockingTimeAnalysis metrics={filteredMetrics} />
          </div>
        </div>
        
        {/* Original Dashboard Content */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Summary</h2>
          <VitalsSummary metrics={filteredMetrics} />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <DeviceDistribution metrics={filteredMetrics} />
          <VitalsSegmentation metrics={filteredMetrics} />
        </div>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Details</h2>
          <VitalsDetails metrics={filteredMetrics} />
        </div>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Raw Data</h2>
          <VitalsRawData metrics={filteredMetrics} />
        </div>
      </div>
    </div>
  );
};

export default WebVitalsDashboard;
