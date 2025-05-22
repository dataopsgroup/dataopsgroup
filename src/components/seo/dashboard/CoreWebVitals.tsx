
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const CoreWebVitals: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Core Web Vitals</CardTitle>
        <CardDescription>Performance metrics that affect search rankings</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">LCP (Largest Contentful Paint)</span>
              <span className="text-sm text-green-600">1.8s</span>
            </div>
            <Progress value={60} className="h-2 bg-gray-100" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">FID (First Input Delay)</span>
              <span className="text-sm text-green-600">12ms</span>
            </div>
            <Progress value={90} className="h-2 bg-gray-100" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">CLS (Cumulative Layout Shift)</span>
              <span className="text-sm text-green-600">0.08</span>
            </div>
            <Progress value={85} className="h-2 bg-gray-100" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium">Mobile-Friendly Score</span>
              <span className="text-sm text-green-600">96/100</span>
            </div>
            <Progress value={96} className="h-2 bg-gray-100" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CoreWebVitals;
