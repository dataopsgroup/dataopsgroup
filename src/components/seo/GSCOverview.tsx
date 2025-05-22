
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

// Define mock data for Search Console metrics
const mockSearchData = [
  { date: '2025-04-22', clicks: 45, impressions: 1207, ctr: 3.7, position: 18.4 },
  { date: '2025-04-23', clicks: 49, impressions: 1315, ctr: 3.7, position: 18.2 },
  { date: '2025-04-24', clicks: 53, impressions: 1412, ctr: 3.8, position: 17.5 },
  { date: '2025-04-25', clicks: 42, impressions: 1198, ctr: 3.5, position: 17.8 },
  { date: '2025-04-26', clicks: 38, impressions: 1054, ctr: 3.6, position: 18.1 },
  { date: '2025-04-27', clicks: 32, impressions: 987, ctr: 3.2, position: 18.3 },
  { date: '2025-04-28', clicks: 51, impressions: 1387, ctr: 3.7, position: 17.2 },
  { date: '2025-04-29', clicks: 55, impressions: 1534, ctr: 3.6, position: 16.9 },
  { date: '2025-04-30', clicks: 62, impressions: 1675, ctr: 3.7, position: 16.4 },
  { date: '2025-05-01', clicks: 69, impressions: 1823, ctr: 3.8, position: 15.7 },
  { date: '2025-05-02', clicks: 72, impressions: 1956, ctr: 3.7, position: 15.2 },
  { date: '2025-05-03', clicks: 65, impressions: 1847, ctr: 3.5, position: 15.6 },
  { date: '2025-05-04', clicks: 58, impressions: 1765, ctr: 3.3, position: 16.1 },
  { date: '2025-05-05', clicks: 73, impressions: 2054, ctr: 3.6, position: 14.9 },
  { date: '2025-05-06', clicks: 87, impressions: 2245, ctr: 3.9, position: 14.2 },
  { date: '2025-05-07', clicks: 95, impressions: 2487, ctr: 3.8, position: 13.8 },
  { date: '2025-05-08', clicks: 104, impressions: 2673, ctr: 3.9, position: 13.2 },
  { date: '2025-05-09', clicks: 112, impressions: 2891, ctr: 3.9, position: 12.7 },
  { date: '2025-05-10', clicks: 125, impressions: 3154, ctr: 4.0, position: 12.1 },
  { date: '2025-05-11', clicks: 131, impressions: 3278, ctr: 4.0, position: 11.8 },
  { date: '2025-05-12', clicks: 142, impressions: 3462, ctr: 4.1, position: 11.4 },
  { date: '2025-05-13', clicks: 155, impressions: 3687, ctr: 4.2, position: 10.9 },
  { date: '2025-05-14', clicks: 163, impressions: 3843, ctr: 4.2, position: 10.5 },
  { date: '2025-05-15', clicks: 178, impressions: 4125, ctr: 4.3, position: 10.1 },
  { date: '2025-05-16', clicks: 196, impressions: 4387, ctr: 4.5, position: 9.7 },
  { date: '2025-05-17', clicks: 215, impressions: 4623, ctr: 4.7, position: 9.3 },
  { date: '2025-05-18', clicks: 198, impressions: 4512, ctr: 4.4, position: 9.5 },
  { date: '2025-05-19', clicks: 224, impressions: 4873, ctr: 4.6, position: 9.1 },
  { date: '2025-05-20', clicks: 242, impressions: 5156, ctr: 4.7, position: 8.7 },
  { date: '2025-05-21', clicks: 267, impressions: 5485, ctr: 4.9, position: 8.3 }
];

// Top performing pages data
const topPages = [
  { page: '/insights/hidden-cost-of-failed-hubspot-implementations', clicks: 112, impressions: 1842, ctr: 6.1, position: 8.3 },
  { page: '/insights/marketing-data-management', clicks: 87, impressions: 1547, ctr: 5.6, position: 9.4 },
  { page: '/services/marketing-operations-revops', clicks: 65, impressions: 1243, ctr: 5.2, position: 10.7 },
  { page: '/services', clicks: 58, impressions: 1164, ctr: 5.0, position: 11.2 },
  { page: '/insights/customer-segmentation-mistake', clicks: 45, impressions: 987, ctr: 4.6, position: 12.8 }
];

// Top queries data
const topQueries = [
  { query: 'hubspot implementation services', clicks: 87, impressions: 1247, ctr: 7.0, position: 5.2 },
  { query: 'hubspot consultant', clicks: 65, impressions: 1105, ctr: 5.9, position: 6.8 },
  { query: 'marketing operations specialist', clicks: 48, impressions: 876, ctr: 5.5, position: 8.4 },
  { query: 'hubspot data quality', clicks: 42, impressions: 745, ctr: 5.6, position: 7.9 },
  { query: 'revops consultant', clicks: 38, impressions: 682, ctr: 5.6, position: 8.2 }
];

interface GSCOverviewProps {
  siteUrl?: string;
}

const GSCOverview: React.FC<GSCOverviewProps> = ({ siteUrl = 'dataopsgroup.com' }) => {
  const [dateRange, setDateRange] = useState('30d');
  const [isConnected, setIsConnected] = useState(true);
  const [activeTab, setActiveTab] = useState('performance');

  // Calculate total metrics
  const totalImpressions = mockSearchData.reduce((sum, day) => sum + day.impressions, 0);
  const totalClicks = mockSearchData.reduce((sum, day) => sum + day.clicks, 0);
  const averageCTR = (totalClicks / totalImpressions * 100).toFixed(1);
  const averagePosition = (mockSearchData.reduce((sum, day) => sum + day.position, 0) / mockSearchData.length).toFixed(1);

  // Calculate change percentages (comparing first half to second half of data)
  const midPoint = Math.floor(mockSearchData.length / 2);
  const firstHalfImpressions = mockSearchData.slice(0, midPoint).reduce((sum, day) => sum + day.impressions, 0);
  const secondHalfImpressions = mockSearchData.slice(midPoint).reduce((sum, day) => sum + day.impressions, 0);
  const impressionsChange = ((secondHalfImpressions - firstHalfImpressions) / firstHalfImpressions * 100).toFixed(1);
  
  const firstHalfClicks = mockSearchData.slice(0, midPoint).reduce((sum, day) => sum + day.clicks, 0);
  const secondHalfClicks = mockSearchData.slice(midPoint).reduce((sum, day) => sum + day.clicks, 0);
  const clicksChange = ((secondHalfClicks - firstHalfClicks) / firstHalfClicks * 100).toFixed(1);

  const firstHalfAvgPos = mockSearchData.slice(0, midPoint).reduce((sum, day) => sum + day.position, 0) / midPoint;
  const secondHalfAvgPos = mockSearchData.slice(midPoint).reduce((sum, day) => sum + day.position, 0) / (mockSearchData.length - midPoint);
  // For position, lower is better so we invert the change calculation
  const positionChange = ((firstHalfAvgPos - secondHalfAvgPos) / firstHalfAvgPos * 100).toFixed(1);

  // Custom formatter for the chart tooltip
  const formatTooltip = (value: number, name: string) => {
    if (name === 'position') {
      return [`${value.toFixed(1)}`, 'Avg. Position'];
    }
    if (name === 'ctr') {
      return [`${(value).toFixed(1)}%`, 'CTR'];
    }
    return [value, name.charAt(0).toUpperCase() + name.slice(1)];
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

            <Tabs defaultValue="performance" className="w-full" onValueChange={setActiveTab}>
              <TabsList className="mb-4 w-full sm:w-auto">
                <TabsTrigger value="performance">Performance Over Time</TabsTrigger>
                <TabsTrigger value="pages">Top Pages</TabsTrigger>
                <TabsTrigger value="queries">Top Queries</TabsTrigger>
              </TabsList>
              
              <TabsContent value="performance" className="mt-0">
                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={mockSearchData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" tickFormatter={(date) => new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip formatter={formatTooltip} labelFormatter={(date) => new Date(date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} />
                      <Legend />
                      <Line yAxisId="left" type="monotone" dataKey="clicks" stroke="#1e40af" activeDot={{ r: 8 }} strokeWidth={2} />
                      <Line yAxisId="left" type="monotone" dataKey="impressions" stroke="#7e22ce" strokeWidth={2} />
                      {activeTab === 'performance' && (
                        <>
                          <Line yAxisId="right" type="monotone" dataKey="position" stroke="#22c55e" strokeWidth={2} />
                          <Line yAxisId="right" type="monotone" dataKey="ctr" stroke="#f97316" strokeWidth={2} />
                        </>
                      )}
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </TabsContent>
              
              <TabsContent value="pages" className="mt-0">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[600px] border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="py-3 px-4 text-left font-medium">Page</th>
                        <th className="py-3 px-4 text-right font-medium">Clicks</th>
                        <th className="py-3 px-4 text-right font-medium">Impressions</th>
                        <th className="py-3 px-4 text-right font-medium">CTR</th>
                        <th className="py-3 px-4 text-right font-medium">Position</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topPages.map((page, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-3 px-4 text-left font-medium max-w-[200px] truncate">{page.page}</td>
                          <td className="py-3 px-4 text-right">{page.clicks}</td>
                          <td className="py-3 px-4 text-right">{page.impressions}</td>
                          <td className="py-3 px-4 text-right">{page.ctr}%</td>
                          <td className="py-3 px-4 text-right">{page.position}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              
              <TabsContent value="queries" className="mt-0">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[600px] border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="py-3 px-4 text-left font-medium">Query</th>
                        <th className="py-3 px-4 text-right font-medium">Clicks</th>
                        <th className="py-3 px-4 text-right font-medium">Impressions</th>
                        <th className="py-3 px-4 text-right font-medium">CTR</th>
                        <th className="py-3 px-4 text-right font-medium">Position</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topQueries.map((query, index) => (
                        <tr key={index} className="border-b">
                          <td className="py-3 px-4 text-left font-medium">{query.query}</td>
                          <td className="py-3 px-4 text-right">{query.clicks}</td>
                          <td className="py-3 px-4 text-right">{query.impressions}</td>
                          <td className="py-3 px-4 text-right">{query.ctr}%</td>
                          <td className="py-3 px-4 text-right">{query.position}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </TabsContent>
            </Tabs>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-12">
            <p className="text-muted-foreground mb-4 text-center">Connect to Google Search Console to view search performance data</p>
            <Button>Connect GSC Account</Button>
          </div>
        )}
      </CardContent>
      <CardFooter className="border-t pt-4 text-xs text-gray-500">
        Data is automatically updated daily. Last updated: May 21, 2025
      </CardFooter>
    </Card>
  );
};

export default GSCOverview;
