
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const CrawlStats: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Crawl Stats</CardTitle>
        <CardDescription>How Google is crawling your site</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="font-medium">Pages Crawled (Daily)</span>
            <span>47</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Crawl Budget Used</span>
            <span>68%</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Response Time</span>
            <span>0.27s</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Last Crawl</span>
            <span>May 21, 2025</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium">Errors Detected</span>
            <span>None</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CrawlStats;
