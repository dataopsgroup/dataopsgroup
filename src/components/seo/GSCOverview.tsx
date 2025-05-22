
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import GSCSummaryMetrics from './gsc-overview/GSCSummaryMetrics';
import GSCContentTabs from './gsc-overview/GSCContentTabs';
import GSCEmptyState from './gsc-overview/GSCEmptyState';

interface GSCOverviewProps {
  siteUrl?: string;
}

const GSCOverview: React.FC<GSCOverviewProps> = ({ siteUrl = 'dataopsgroup.com' }) => {
  const [dateRange, setDateRange] = useState('30d');
  const [isConnected, setIsConnected] = useState(true);
  const [activeTab, setActiveTab] = useState('performance');

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <CardTitle>Google Search Console</CardTitle>
            <CardDescription>
              {isConnected 
                ? `Search performance data for ${siteUrl}`
                : 'Connect your Google Search Console account to view data'
              }
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Select value={dateRange} onValueChange={setDateRange}>
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Date range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm">
              {isConnected ? 'Refresh' : 'Connect GSC'}
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {isConnected ? (
          <>
            <GSCSummaryMetrics />
            <GSCContentTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          </>
        ) : (
          <GSCEmptyState />
        )}
      </CardContent>
      <CardFooter className="border-t pt-4 text-xs text-gray-500">
        Data is automatically updated daily. Last updated: May 21, 2025
      </CardFooter>
    </Card>
  );
};

export default GSCOverview;
