
import React from 'react';
import { Progress } from '@/components/ui/progress';

const KeywordLoading: React.FC = () => {
  return (
    <div className="space-y-2 py-4">
      <div className="flex justify-between text-sm">
        <span>Refreshing keyword data...</span>
        <span>65%</span>
      </div>
      <Progress value={65} />
    </div>
  );
};

export default KeywordLoading;
