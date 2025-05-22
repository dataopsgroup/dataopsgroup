
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { WebVitalMetric } from '@/utils/performance/types';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, ReferenceLine } from 'recharts';

interface BlockingTimeAnalysisProps {
  metrics: WebVitalMetric[];
}

export const BlockingTimeAnalysis: React.FC<BlockingTimeAnalysisProps> = ({ metrics }) => {
  // Filter FID and INP metrics which relate to blocking time
  const interactionMetrics = metrics.filter(metric => 
    metric.name === 'FID' || metric.name === 'INP'
  ).sort((a, b) => {
    // Sort by timestamp if available, otherwise by ID
    if (a.timestamp && b.timestamp) {
      return a.timestamp - b.timestamp;
    }
    return a.id.localeCompare(b.id);
  });
  
  // Prepare chart data
  const chartData = interactionMetrics.map(metric => ({
    id: metric.id.substring(0, 8), // Truncate ID for display
    value: Math.round(metric.value),
    name: metric.name,
    timestamp: metric.timestamp || 0,
    rating: metric.rating
  }));
  
  // Calculate average values
  const fidMetrics = metrics.filter(metric => metric.name === 'FID');
  const inpMetrics = metrics.filter(metric => metric.name === 'INP');
  
  const avgFID = fidMetrics.length > 0
    ? Math.round(fidMetrics.reduce((sum, metric) => sum + metric.value, 0) / fidMetrics.length)
    : 0;
  
  const avgINP = inpMetrics.length > 0
    ? Math.round(inpMetrics.reduce((sum, metric) => sum + metric.value, 0) / inpMetrics.length)
    : 0;
  
  // Get color based on metric value
  const getMetricColor = (name: string, value: number): string => {
    if (name === 'FID') {
      if (value < 100) return '#22c55e'; // Good - green
      if (value < 300) return '#f59e0b'; // Needs improvement - amber
      return '#ef4444'; // Poor - red
    } else { // INP
      if (value < 200) return '#22c55e'; // Good - green
      if (value < 500) return '#f59e0b'; // Needs improvement - amber
      return '#ef4444'; // Poor - red
    }
  };
  
  // Determine if we have concerning metrics
  const hasPoorMetrics = interactionMetrics.some(metric => metric.rating === 'poor');
  const hasNeedsImprovementMetrics = interactionMetrics.some(metric => metric.rating === 'needs-improvement');
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-md font-medium">
          Interaction & Blocking Time Analysis
          <div className="flex space-x-2 mt-1">
            {fidMetrics.length > 0 && (
              <Badge 
                variant="outline" 
                className="text-xs"
                style={{ 
                  backgroundColor: getMetricColor('FID', avgFID) + '10',
                  borderColor: getMetricColor('FID', avgFID),
                  color: getMetricColor('FID', avgFID)
                }}
              >
                FID: {avgFID}ms
              </Badge>
            )}
            {inpMetrics.length > 0 && (
              <Badge 
                variant="outline"
                className="text-xs"
                style={{ 
                  backgroundColor: getMetricColor('INP', avgINP) + '10',
                  borderColor: getMetricColor('INP', avgINP),
                  color: getMetricColor('INP', avgINP)
                }}
              >
                INP: {avgINP}ms
              </Badge>
            )}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {chartData.length > 0 ? (
          <>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <XAxis dataKey="id" />
                  <YAxis />
                  <Tooltip 
                    formatter={(value, name) => [`${value}ms`, name === 'value' ? 'Duration' : name]} 
                    labelFormatter={(label) => `Measurement ${label}`}
                  />
                  <ReferenceLine y={100} stroke="#22c55e" strokeDasharray="3 3" label="FID Good" />
                  <ReferenceLine y={300} stroke="#f59e0b" strokeDasharray="3 3" label="FID Poor" />
                  <Line
                    type="monotone"
                    dataKey="value"
                    name="Duration"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    dot={(props) => {
                      const metric = chartData[props.index];
                      const fill = getMetricColor(metric.name, metric.value);
                      return (
                        <circle
                          cx={props.cx}
                          cy={props.cy}
                          r={4}
                          fill={fill}
                          stroke="white"
                          strokeWidth={1}
                        />
                      );
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium text-sm">JavaScript Optimization Tips:</h4>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                {hasPoorMetrics && (
                  <>
                    <li className="text-red-500 font-medium">• Critical: Break up long-running JavaScript tasks</li>
                    <li className="text-red-500">• Move heavy processing to Web Workers</li>
                  </>
                )}
                {hasNeedsImprovementMetrics && (
                  <li className="text-amber-500">• Consider code splitting and lazy loading components</li>
                )}
                <li>• Defer non-critical third-party scripts</li>
                <li>• Remove or optimize event listeners on frequently updated elements</li>
                <li>• Debounce input handlers and scroll listeners</li>
              </ul>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-[200px]">
            <p className="text-muted-foreground">No interaction metrics available</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
