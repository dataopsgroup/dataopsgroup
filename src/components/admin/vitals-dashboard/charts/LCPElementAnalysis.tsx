
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { WebVitalMetric } from '@/utils/performance/types';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';

interface LCPElementAnalysisProps {
  metrics: WebVitalMetric[];
}

export const LCPElementAnalysis: React.FC<LCPElementAnalysisProps> = ({ metrics }) => {
  // Filter only LCP metrics
  const lcpMetrics = metrics.filter(metric => metric.name === 'LCP');
  
  // Extract LCP element types from entries
  const lcpElementCounts: Record<string, number> = {};
  let totalElements = 0;
  
  lcpMetrics.forEach(metric => {
    const entries = metric.entries;
    if (entries && entries.length > 0) {
      // The LCP entry typically contains information about the element
      const entry = entries[0];
      // Try to determine element type from entry data
      let elementType = 'unknown';
      
      if ('element' in entry && entry.element) {
        const element = entry.element as unknown as HTMLElement;
        elementType = element.tagName?.toLowerCase() || 'unknown';
      } else if ('url' in entry) {
        elementType = 'image';
      }
      
      lcpElementCounts[elementType] = (lcpElementCounts[elementType] || 0) + 1;
      totalElements++;
    }
  });
  
  // Convert to chart data
  const chartData = Object.entries(lcpElementCounts).map(([type, count]) => ({
    type,
    count,
    percentage: Math.round((count / totalElements) * 100)
  }));
  
  // Get average LCP time
  const avgLCP = lcpMetrics.length > 0 
    ? Math.round(lcpMetrics.reduce((sum, metric) => sum + metric.value, 0) / lcpMetrics.length) 
    : 0;
  
  // Color based on LCP performance
  const getLCPColor = (value: number): string => {
    if (value < 1000) return '#22c55e'; // Good - green
    if (value < 2500) return '#f59e0b'; // Needs improvement - amber
    return '#ef4444'; // Poor - red
  };
  
  const lcpColor = getLCPColor(avgLCP);
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-md font-medium">
          LCP Element Analysis
          <Badge 
            variant="outline" 
            className="ml-2"
            style={{ backgroundColor: lcpColor + '10', borderColor: lcpColor, color: lcpColor }}
          >
            {avgLCP}ms
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {chartData.length > 0 ? (
          <>
            <div className="mb-4 space-y-2">
              <p className="text-sm text-muted-foreground">
                Most common LCP elements on your site:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {chartData.map(item => (
                  <div key={item.type} className="flex items-center justify-between p-2 bg-muted/30 rounded">
                    <span className="font-medium capitalize">{item.type}</span>
                    <Badge variant="secondary">{item.percentage}%</Badge>
                  </div>
                ))}
              </div>
            </div>
            <div className="h-[200px] mt-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <XAxis dataKey="type" />
                  <YAxis />
                  <Tooltip 
                    formatter={(value, name, props) => [`${value} elements (${props.payload.percentage}%)`, 'Count']} 
                  />
                  <Bar dataKey="count" name="Count">
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={getLCPColor(avgLCP)} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4">
              <h4 className="font-medium text-sm">Optimization Tips:</h4>
              <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                {chartData.some(item => item.type === 'image') && (
                  <li>• Optimize images using WebP/AVIF formats and proper dimensions</li>
                )}
                {chartData.some(item => item.type === 'h1' || item.type === 'h2' || item.type === 'p') && (
                  <li>• Ensure text elements load quickly by optimizing web fonts</li>
                )}
                <li>• Use preload for critical LCP elements</li>
                <li>• Move LCP elements earlier in the HTML</li>
                <li>• Inline critical CSS affecting LCP elements</li>
              </ul>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-[200px]">
            <p className="text-muted-foreground">No LCP data available</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
