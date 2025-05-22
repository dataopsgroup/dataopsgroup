
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface GSCSummaryMetricsProps {
  data: any;
}

const GSCSummaryMetrics: React.FC<GSCSummaryMetricsProps> = ({ data }) => {
  const {
    totalImpressions,
    totalClicks,
    averageCTR,
    averagePosition,
    impressionsChange,
    clicksChange,
    positionChange
  } = data || { 
    totalImpressions: 0, totalClicks: 0, averageCTR: 0, 
    averagePosition: 0, impressionsChange: '0', clicksChange: '0', positionChange: '0' 
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <Card>
        <CardContent className="p-4">
          <p className="text-sm text-muted-foreground mb-1">Impressions</p>
          <div className="flex items-end justify-between">
            <h3 className="text-2xl font-bold">{totalImpressions.toLocaleString()}</h3>
            <span className={`text-xs ${Number(impressionsChange) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {Number(impressionsChange) >= 0 ? '+' : ''}{impressionsChange}%
            </span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">
          <p className="text-sm text-muted-foreground mb-1">Clicks</p>
          <div className="flex items-end justify-between">
            <h3 className="text-2xl font-bold">{totalClicks.toLocaleString()}</h3>
            <span className={`text-xs ${Number(clicksChange) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {Number(clicksChange) >= 0 ? '+' : ''}{clicksChange}%
            </span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">
          <p className="text-sm text-muted-foreground mb-1">Avg. CTR</p>
          <div className="flex items-end justify-between">
            <h3 className="text-2xl font-bold">{averageCTR}%</h3>
            <span className="text-xs text-muted-foreground">Industry avg: 3.6%</span>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">
          <p className="text-sm text-muted-foreground mb-1">Avg. Position</p>
          <div className="flex items-end justify-between">
            <h3 className="text-2xl font-bold">{averagePosition}</h3>
            <span className={`text-xs ${Number(positionChange) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {Number(positionChange) >= 0 ? '+' : ''}{positionChange}%
            </span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GSCSummaryMetrics;
