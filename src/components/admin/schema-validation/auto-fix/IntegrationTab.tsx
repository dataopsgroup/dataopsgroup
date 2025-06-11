
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  CheckCircle, 
  XCircle, 
  ExternalLink,
  AlertTriangle
} from 'lucide-react';

interface IntegrationTabProps {
  onGoogleIntegrationTest: () => void;
  integrationResult: any;
  isProcessing: boolean;
  hasFixResult: boolean;
}

const IntegrationTab: React.FC<IntegrationTabProps> = ({
  onGoogleIntegrationTest,
  integrationResult,
  isProcessing,
  hasFixResult
}) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Google Rich Results Testing</h3>
          <p className="text-sm text-gray-600">
            Validate schema with Google's Rich Results Test API
          </p>
        </div>
        <Button 
          onClick={onGoogleIntegrationTest}
          disabled={isProcessing || !hasFixResult}
          className="flex items-center gap-2"
        >
          <ExternalLink className="h-4 w-4" />
          Test with Google
        </Button>
      </div>

      {integrationResult && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardContent className="pt-4">
                <div className="flex items-center gap-2 mb-2">
                  {integrationResult.isValid ? (
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  ) : (
                    <XCircle className="h-4 w-4 text-red-600" />
                  )}
                  <span className="font-medium">Schema Validation</span>
                </div>
                <Badge variant={integrationResult.isValid ? "default" : "destructive"}>
                  {integrationResult.isValid ? "Valid" : "Invalid"}
                </Badge>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-4">
                <div className="flex items-center gap-2 mb-2">
                  {integrationResult.richResultsEligible ? (
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  ) : (
                    <AlertTriangle className="h-4 w-4 text-yellow-600" />
                  )}
                  <span className="font-medium">Rich Results Eligible</span>
                </div>
                <Badge variant={integrationResult.richResultsEligible ? "default" : "secondary"}>
                  {integrationResult.richResultsEligible ? "Eligible" : "Not Eligible"}
                </Badge>
              </CardContent>
            </Card>
          </div>

          {integrationResult.issues.length > 0 && (
            <Alert variant="destructive">
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <div className="font-medium mb-1">Issues found:</div>
                <ul className="text-sm space-y-1">
                  {integrationResult.issues.map((issue: string, index: number) => (
                    <li key={index}>• {issue}</li>
                  ))}
                </ul>
              </AlertDescription>
            </Alert>
          )}

          {integrationResult.warnings.length > 0 && (
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <div className="font-medium mb-1">Warnings:</div>
                <ul className="text-sm space-y-1">
                  {integrationResult.warnings.map((warning: string, index: number) => (
                    <li key={index}>• {warning}</li>
                  ))}
                </ul>
              </AlertDescription>
            </Alert>
          )}

          {integrationResult.previewUrl && (
            <div className="flex items-center gap-2">
              <Button 
                size="sm" 
                variant="outline"
                onClick={() => window.open(integrationResult.previewUrl, '_blank')}
              >
                <ExternalLink className="h-3 w-3 mr-1" />
                View in Google Rich Results Test
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default IntegrationTab;
