
import React from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { Clock } from 'lucide-react';

interface ProcessingAlertProps {
  isProcessing: boolean;
  activeProcess: string;
}

const ProcessingAlert: React.FC<ProcessingAlertProps> = ({
  isProcessing,
  activeProcess
}) => {
  if (!isProcessing) return null;

  return (
    <Alert className="mb-4">
      <Clock className="h-4 w-4" />
      <AlertDescription>
        {activeProcess}
        <Progress className="mt-2" />
      </AlertDescription>
    </Alert>
  );
};

export default ProcessingAlert;
