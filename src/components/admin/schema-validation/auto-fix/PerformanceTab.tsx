
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp } from 'lucide-react';
import { PerformanceImpactMetrics } from '@/services/performanceMetricsService';

interface PerformanceTabProps {
  onPerformanceTracking: () => void;
  performanceMetrics: PerformanceImpactMetrics | null;
  isProcessing: boolean;
}

const PerformanceTab: React.FC<PerformanceTabProps> = ({
  onPerformanceTracking,
  performanceMetrics,
  isProcessing
}) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Performance Impact Analysis</h3>
          <p className="text-sm text-gray-600">
            Track schema implementation impact on search performance
          </p>
        </div>
        <Button 
          onClick={onPerformanceTracking}
          disabled={isProcessing}
          className="flex items-center gap-2"
        >
          <TrendingUp className="h-4 w-4" />
          Analyze Impact
        </Button>
      </div>

      {performanceMetrics && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="pt-4">
              <div className="text-2xl font-bold text-green-600">
                +{performanceMetrics.improvement.searchVisibilityGain}%
              </div>
              <div className="text-sm text-gray-600">Search Visibility</div>
              <div className="text-xs text-gray-500">
                {performanceMetrics.beforeImplementation.searchVisibility}% → {performanceMetrics.afterImplementation.searchVisibility}%
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4">
              <div className="text-2xl font-bold text-blue-600">
                +{performanceMetrics.improvement.ctrImprovement}%
              </div>
              <div className="text-sm text-gray-600">Click-Through Rate</div>
              <div className="text-xs text-gray-500">
                {performanceMetrics.beforeImplementation.clickThroughRate}% → {performanceMetrics.afterImplementation.clickThroughRate}%
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4">
              <div className="text-2xl font-bold text-purple-600">
                +{performanceMetrics.improvement.richSnippetsGain}
              </div>
              <div className="text-sm text-gray-600">Rich Snippets</div>
              <div className="text-xs text-gray-500">
                {performanceMetrics.beforeImplementation.richSnippetsCount} → {performanceMetrics.afterImplementation.richSnippetsCount}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-4">
              <div className="text-2xl font-bold text-orange-600">
                {performanceMetrics.projectedROI}%
              </div>
              <div className="text-sm text-gray-600">Projected ROI</div>
              <div className="text-xs text-gray-500">
                12-month projection
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default PerformanceTab;
