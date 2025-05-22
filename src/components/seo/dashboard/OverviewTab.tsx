
import React from 'react';
import GSCOverview from '@/components/seo/GSCOverview';
import CoreWebVitals from './CoreWebVitals';
import CrawlStats from './CrawlStats';
import PageSpeedInsights from './PageSpeedInsights';

const OverviewTab: React.FC = () => {
  return (
    <div className="space-y-8">
      <GSCOverview />
      <PageSpeedInsights />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CoreWebVitals />
        <CrawlStats />
      </div>
    </div>
  );
};

export default OverviewTab;
