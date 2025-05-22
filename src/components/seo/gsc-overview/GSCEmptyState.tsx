
import React from 'react';
import { Button } from '@/components/ui/button';

const GSCEmptyState: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <p className="text-muted-foreground mb-4 text-center">Connect to Google Search Console to view search performance data</p>
      <Button>Connect GSC Account</Button>
    </div>
  );
};

export default GSCEmptyState;
