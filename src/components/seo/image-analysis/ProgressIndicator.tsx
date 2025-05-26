
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface ProgressIndicatorProps {
  progress: number;
  analyzing: boolean;
  fixing: boolean;
}

const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({ 
  progress, 
  analyzing, 
  fixing 
}) => {
  if (!analyzing && !fixing) return null;
  
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>{analyzing ? 'Analyzing images...' : 'Fixing image issues...'}</span>
            <span>{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressIndicator;
