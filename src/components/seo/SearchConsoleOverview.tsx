
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Mock data for demonstration purposes
// This would be replaced with actual data from the Search Console API
const mockPerformanceData = [
  { date: '2025-04-22', clicks: 45, impressions: 834, position: 12.3, ctr: 5.4 },
  { date: '2025-04-23', clicks: 52, impressions: 912, position: 11.8, ctr: 5.7 },
  { date: '2025-04-24', clicks: 48, impressions: 878, position: 12.1, ctr: 5.5 },
  { date: '2025-04-25', clicks: 61, impressions: 964, position: 10.5, ctr: 6.3 },
  { date: '2025-04-26', clicks: 55, impressions: 925, position: 10.8, ctr: 5.9 },
  { date: '2025-04-27', clicks: 58, impressions: 947, position: 10.3, ctr: 6.1 },
  { date: '2025-04-28', clicks: 65, impressions: 1023, position: 9.8, ctr: 6.4 },
  { date: '2025-05-01', clicks: 72, impressions: 1103, position: 9.5, ctr: 6.5 },
  { date: '2025-05-02', clicks: 68, impressions: 1078, position: 9.7, ctr: 6.3 },
  { date: '2025-05-03', clicks: 75, impressions: 1156, position: 9.2, ctr: 6.5 },
  { date: '2025-05-04', clicks: 79, impressions: 1198, position: 8.9, ctr: 6.6 },
  { date: '2025-05-05', clicks: 82, impressions: 1254, position: 8.5, ctr: 6.5 },
  { date: '2025-05-06', clicks: 85, impressions: 1287, position: 8.2, ctr: 6.6 },
  { date: '2025-05-07', clicks: 89, impressions: 1345, position: 7.9, ctr: 6.6 },
  { date: '2025-05-08', clicks: 92, impressions: 1387, position: 7.6, ctr: 6.6 },
  { date: '2025-05-09', clicks: 95, impressions: 1425, position: 7.4, ctr: 6.7 },
  { date: '2025-05-10', clicks: 99, impressions: 1467, position: 7.2, ctr: 6.7 },
  { date: '2025-05-11', clicks: 103, impressions: 1512, position: 7.0, ctr: 6.8 },
  { date: '2025-05-12', clicks: 108, impressions: 1565, position: 6.8, ctr: 6.9 },
  { date: '2025-05-13', clicks: 112, impressions: 1598, position: 6.6, ctr: 7.0 },
  { date: '2025-05-14', clicks: 118, impressions: 1645, position: 6.4, ctr: 7.2 },
  { date: '2025-05-15', clicks: 125, impressions: 1712, position: 6.2, ctr: 7.3 },
  { date: '2025-05-16', clicks: 128, impressions: 1745, position: 6.0, ctr: 7.3 },
  { date: '2025-05-17', clicks: 132, impressions: 1789, position: 5.9, ctr: 7.4 },
  { date: '2025-05-18', clicks: 138, impressions: 1845, position: 5.7, ctr: 7.5 },
  { date: '2025-05-19', clicks: 145, impressions: 1912, position: 5.5, ctr: 7.6 },
  { date: '2025-05-20', clicks: 152, impressions: 1987, position: 5.3, ctr: 7.7 },
  { date: '2025-05-21', clicks: 160, impressions: 2045, position: 5.1, ctr: 7.8 },
];

const mockTopQueries = [
  { query: 'hubspot consultant', clicks: 42, impressions: 312, position: 3.2, ctr: 13.5 },
  { query: 'dataops implementation', clicks: 38, impressions: 287, position: 4.1, ctr: 13.2 },
  { query: 'hubspot analytics', clicks: 35, impressions: 278, position: 4.5, ctr: 12.6 },
  { query: 'marketing operations consultant', clicks: 29, impressions: 243, position: 5.2, ctr: 11.9 },
  { query: 'hubspot data quality', clicks: 26, impressions: 225, position: 5.8, ctr: 11.6 },
  { query: 'revops consultant', clicks: 24, impressions: 216, position: 6.1, ctr: 11.1 },
  { query: 'hubspot implementation issues', clicks: 22, impressions: 198, position: 6.5, ctr: 11.1 },
  { query: 'marketing data analysis', clicks: 19, impressions: 178, position: 7.2, ctr: 10.7 },
];

const mockTopPages = [
  { page: '/insights/hidden-cost-of-failed-hubspot-implementations', clicks: 58, impressions: 425, position: 3.1, ctr: 13.6 },
  { page: '/services/analytics-bi', clicks: 45, impressions: 378, position: 3.5, ctr: 11.9 },
  { page: '/insights/marketing-data-management', clicks: 36, impressions: 312, position: 4.2, ctr: 11.5 },
  { page: '/services/dataops-implementation', clicks: 32, impressions: 287, position: 4.7, ctr: 11.1 },
  { page: '/services/marketing-operations-revops', clicks: 29, impressions: 256, position: 5.1, ctr: 11.3 },
  { page: '/insights/true-cost-of-bad-data', clicks: 26, impressions: 234, position: 5.4, ctr: 11.1 },
  { page: '/assessment', clicks: 24, impressions: 214, position: 5.9, ctr: 11.2 },
  { page: '/insights/data-truth-gap', clicks: 21, impressions: 198, position: 6.3, ctr: 10.6 },
];

const SearchConsoleOverview: React.FC = () => {
  const [timeRange, setTimeRange] = useState('28d');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <p className="text-gray-600">
          View your website's performance in Google Search Console. 
          <span className="text-green-600 ml-2 font-medium">Status: Verified</span>
        </p>
        <div className="flex items-center space-x-4">
          <Select defaultValue="28d" onValueChange={(value) => setTimeRange(value)}>
            <SelectTrigger className="w-32">
              <SelectValue placeholder="Time Range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="28d">Last 28 days</SelectItem>
              <SelectItem value="3m">Last 3 months</SelectItem>
              <SelectItem value="6m">Last 6 months</SelectItem>
            </SelectContent>
          </Select>
          <Button>Refresh Data</Button>
          <Button variant="outline">Submit Sitemap</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Performance Overview</CardTitle>
            <CardDescription>Clicks, impressions, and average position</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={mockPerformanceData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Line yAxisId="left" type="monotone" dataKey="clicks" stroke="#8884d8" activeDot={{ r: 8 }} />
                  <Line yAxisId="left" type="monotone" dataKey="impressions" stroke="#82ca9d" activeDot={{ r: 8 }} />
                  <Line yAxisId="right" type="monotone" dataKey="position" stroke="#ff7300" activeDot={{ r: 8 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Click-Through Rate</CardTitle>
            <CardDescription>Performance over time</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={mockPerformanceData}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="ctr" fill="#8884d8" name="CTR (%)" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Top Queries</CardTitle>
            <CardDescription>Search terms bringing visitors to your site</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2">Query</th>
                    <th className="text-right py-3 px-2">Clicks</th>
                    <th className="text-right py-3 px-2">Impr.</th>
                    <th className="text-right py-3 px-2">CTR</th>
                    <th className="text-right py-3 px-2">Position</th>
                  </tr>
                </thead>
                <tbody>
                  {mockTopQueries.map((query, i) => (
                    <tr key={i} className="border-b hover:bg-gray-50">
                      <td className="py-2 px-2">{query.query}</td>
                      <td className="text-right py-2 px-2">{query.clicks}</td>
                      <td className="text-right py-2 px-2">{query.impressions}</td>
                      <td className="text-right py-2 px-2">{query.ctr}%</td>
                      <td className="text-right py-2 px-2">{query.position}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Pages</CardTitle>
            <CardDescription>Your best performing content</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2">Page</th>
                    <th className="text-right py-3 px-2">Clicks</th>
                    <th className="text-right py-3 px-2">Impr.</th>
                    <th className="text-right py-3 px-2">CTR</th>
                    <th className="text-right py-3 px-2">Position</th>
                  </tr>
                </thead>
                <tbody>
                  {mockTopPages.map((page, i) => (
                    <tr key={i} className="border-b hover:bg-gray-50">
                      <td className="py-2 px-2 truncate max-w-[200px]">{page.page}</td>
                      <td className="text-right py-2 px-2">{page.clicks}</td>
                      <td className="text-right py-2 px-2">{page.impressions}</td>
                      <td className="text-right py-2 px-2">{page.ctr}%</td>
                      <td className="text-right py-2 px-2">{page.position}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SearchConsoleOverview;
