
import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { WebVitalMetric } from '@/utils/performance/types';
import { VitalsSummary } from './VitalsSummary';
import { VitalsDetails } from './VitalsDetails';
import { VitalsSegmentation } from './VitalsSegmentation';
import { VitalsRawData } from './VitalsRawData';

const WebVitalsDashboard = () => {
  const [metrics, setMetrics] = useState<WebVitalMetric[]>([]);
  const [uniqueDevices, setUniqueDevices] = useState<string[]>([]);
  const [uniqueConnections, setUniqueConnections] = useState<string[]>([]);
  const [uniquePaths, setUniquePaths] = useState<string[]>([]);
  
  useEffect(() => {
    try {
      // Load metrics from localStorage
      const storedMetrics = localStorage.getItem('webVitalsMetrics');
      if (storedMetrics) {
        const parsedMetrics = JSON.parse(storedMetrics) as WebVitalMetric[];
        setMetrics(parsedMetrics);
        
        // Extract unique values for filters with proper type casting
        const devices = Array.from(new Set(parsedMetrics
          .map(m => m.deviceCategory)
          .filter(Boolean) as string[]));
          
        const connections = Array.from(new Set(parsedMetrics
          .map(m => m.connection)
          .filter(Boolean) as string[]));
          
        const paths = Array.from(new Set(parsedMetrics
          .map(m => m.path) as string[]));
        
        setUniqueDevices(devices);
        setUniqueConnections(connections);
        setUniquePaths(paths);
      }
      
      // Set up listener for new metrics
      const handleStorageChange = () => {
        const updatedMetrics = localStorage.getItem('webVitalsMetrics');
        if (updatedMetrics) {
          const parsedMetrics = JSON.parse(updatedMetrics) as WebVitalMetric[];
          setMetrics(parsedMetrics);
          
          // Update unique values for filters with proper type casting
          const devices = Array.from(new Set(parsedMetrics
            .map(m => m.deviceCategory)
            .filter(Boolean) as string[]));
            
          const connections = Array.from(new Set(parsedMetrics
            .map(m => m.connection)
            .filter(Boolean) as string[]));
            
          const paths = Array.from(new Set(parsedMetrics
            .map(m => m.path) as string[]));
          
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
          <VitalsSummary 
            averageScores={averageScores} 
            metrics={metrics} 
          />
        </TabsContent>
        
        <TabsContent value="details">
          <VitalsDetails metrics={metrics} />
        </TabsContent>
        
        <TabsContent value="segments">
          <VitalsSegmentation 
            metrics={metrics}
            uniqueDevices={uniqueDevices}
            uniqueConnections={uniqueConnections}
            uniquePaths={uniquePaths}
          />
        </TabsContent>
        
        <TabsContent value="raw">
          <VitalsRawData metrics={metrics} />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default WebVitalsDashboard;
