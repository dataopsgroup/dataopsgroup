
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle, Play, Download } from 'lucide-react';
import { SchemaFixResult } from '@/services/schemaAutoFixService';

interface AutoFixTabProps {
  onAutoFix: () => void;
  fixResult: SchemaFixResult | null;
  isProcessing: boolean;
  issuesCount: number;
}

const AutoFixTab: React.FC<AutoFixTabProps> = ({
  onAutoFix,
  fixResult,
  isProcessing,
  issuesCount
}) => {
  const downloadSchema = () => {
    if (!fixResult?.generatedSchema) return;
    
    const blob = new Blob([fixResult.generatedSchema], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `schema-fix.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Automatic Schema Generation</h3>
          <p className="text-sm text-gray-600">
            Generate and implement schema fixes for {issuesCount} identified issues
          </p>
        </div>
        <Button 
          onClick={onAutoFix}
          disabled={isProcessing}
          className="flex items-center gap-2"
        >
          <Play className="h-4 w-4" />
          Generate Fixes
        </Button>
      </div>

      {fixResult && (
        <div className="space-y-4">
          <Alert>
            <CheckCircle className="h-4 w-4" />
            <AlertDescription>
              Schema auto-fix completed successfully! Estimated implementation time: {fixResult.estimatedTime}
            </AlertDescription>
          </Alert>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Generated Schema</CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="text-xs bg-gray-50 p-3 rounded overflow-x-auto max-h-32">
                  {fixResult.generatedSchema.substring(0, 200)}...
                </pre>
                <div className="flex gap-2 mt-2">
                  <Button size="sm" variant="outline" onClick={downloadSchema}>
                    <Download className="h-3 w-3 mr-1" />
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm">Implementation Steps</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="text-xs space-y-1">
                  {fixResult.implementationInstructions.map((step, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-blue-600 font-medium">{index + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default AutoFixTab;
