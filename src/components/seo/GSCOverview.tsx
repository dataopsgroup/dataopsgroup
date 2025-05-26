
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import GSCSummaryMetrics from './gsc-overview/GSCSummaryMetrics';
import GSCContentTabs from './gsc-overview/GSCContentTabs';
import GSCEmptyState from './gsc-overview/GSCEmptyState';
import useGSCData from '@/hooks/useGSCData';
import { Loader2 } from 'lucide-react';

interface GSCOverviewProps {
  siteUrl?: string;
}

const GSCOverview: React.FC<GSCOverviewProps> = ({ siteUrl = 'dataopsgroup.com' }) => {
  const [dateRange, setDateRange] = useState('30d');
  const [activeTab, setActiveTab] = useState('performance');
  
  // Calculate date range for the API call
  const getDateRange = () => {
    const endDate = new Date();
    let startDate = new Date();
    
    switch (dateRange) {
      case '7d':
        startDate.setDate(endDate.getDate() - 7);
        break;
      case '30d':
        startDate.setDate(endDate.getDate() - 30);
        break;
      case '90d':
        startDate.setDate(endDate.getDate() - 90);
        break;
      default:
        startDate.setDate(endDate.getDate() - 30);
    }
    
    return {
      startDate: startDate.toISOString().split('T')[0],
      endDate: endDate.toISOString().split('T')[0]
    };
  };
  
  const { data, isLoading, refetch, authenticate } = useGSCData(
    siteUrl, 
    getDateRange()
  );
  
  const isConnected = data?.isAuthenticated || false;
  
  const handleConnect = async () => {
    await authenticate();
  };
  
  const handleRefresh = () => {
    refetch();
  };

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
            <Select value={dateRange} onValueChange={setDateRange} disabled={!isConnected}>
              <SelectTrigger className="w-[130px]">
                <SelectValue placeholder="Date range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7d">Last 7 days</SelectItem>
                <SelectItem value="30d">Last 30 days</SelectItem>
                <SelectItem value="90d">Last 90 days</SelectItem>
              </SelectContent>
            </Select>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={isConnected ? handleRefresh : handleConnect}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Loading...
                </>
              ) : (
                isConnected ? 'Refresh' : 'Connect GSC'
              )}
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {isConnected ? (
          isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : (
            <>
              <GSCSummaryMetrics data={data} />
              <GSCContentTabs activeTab={activeTab} setActiveTab={setActiveTab} data={data} />
            </>
          )
        ) : (
          <GSCEmptyState onConnect={handleConnect} isConnecting={isLoading} />
        )}
      </CardContent>
      <CardFooter className="border-t pt-4 text-xs text-gray-500">
        {isConnected ? (
          `Data is automatically updated daily. Last updated: ${new Date().toLocaleDateString('en-US', { 
            month: 'long', 
            day: 'numeric', 
            year: 'numeric' 
          })}`
        ) : (
          'Connect to Google Search Console to view your search performance data'
        )}
      </CardFooter>
    </Card>
  );
};

export default GSCOverview;
