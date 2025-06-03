
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, AlertTriangle, Download, ExternalLink } from 'lucide-react';

interface SchemaTestResultsProps {
  results: any;
}

const SchemaTestResults: React.FC<SchemaTestResultsProps> = ({ results }) => {
  if (!results) {
    return (
      <div className="text-center text-gray-500 py-8">
        Run a validation test to see detailed results here.
      </div>
    );
  }

  const exportResults = () => {
    const dataStr = JSON.stringify(results, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `faq-schema-test-${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  if (results.isBulk) {
    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">Bulk Validation Results</h3>
          <Button variant="outline" onClick={exportResults} className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export Results
          </Button>
        </div>
        
        {results.results.map((result: any, index: number) => (
          <Card key={index}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">{results.urls[index]}</CardTitle>
                <Badge variant={result.isValid ? "default" : "destructive"}>
                  {result.isValid ? "Valid" : "Issues"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-lg font-bold">{result.faqCount || 0}</div>
                  <div className="text-sm text-gray-600">FAQs</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-red-600">{result.errors?.length || 0}</div>
                  <div className="text-sm text-gray-600">Errors</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-yellow-600">{result.warnings?.length || 0}</div>
                  <div className="text-sm text-gray-600">Warnings</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Detailed Validation Results</h3>
        <div className="flex gap-2">
          <Button variant="outline" onClick={exportResults} className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
          <Button variant="outline" className="flex items-center gap-2">
            <ExternalLink className="h-4 w-4" />
            View in Google Test
          </Button>
        </div>
      </div>

      {/* Schema Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            Schema Overview
            {results.isValid ? (
              <Badge variant="default" className="bg-green-100 text-green-800">
                <CheckCircle className="h-3 w-3 mr-1" />
                Valid
              </Badge>
            ) : (
              <Badge variant="destructive">
                <XCircle className="h-3 w-3 mr-1" />
                Needs Attention
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{results.faqCount || 0}</div>
              <div className="text-sm text-gray-600">FAQ Items Found</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">{results.validItems || 0}</div>
              <div className="text-sm text-gray-600">Valid Items</div>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-lg">
              <div className="text-2xl font-bold text-red-600">{results.errors?.length || 0}</div>
              <div className="text-sm text-gray-600">Errors</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">{results.warnings?.length || 0}</div>
              <div className="text-sm text-gray-600">Warnings</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Errors */}
      {results.errors && results.errors.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-700">
              <XCircle className="h-5 w-5" />
              Errors ({results.errors.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {results.errors.map((error: any, index: number) => (
                <div key={index} className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <div className="font-medium text-red-800">{error.message}</div>
                  {error.details && (
                    <div className="text-sm text-red-600 mt-1">{error.details}</div>
                  )}
                  {error.fix && (
                    <div className="text-sm text-red-700 mt-2 font-medium">
                      Fix: {error.fix}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Warnings */}
      {results.warnings && results.warnings.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-yellow-700">
              <AlertTriangle className="h-5 w-5" />
              Warnings ({results.warnings.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {results.warnings.map((warning: any, index: number) => (
                <div key={index} className="p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="font-medium text-yellow-800">{warning.message}</div>
                  {warning.recommendation && (
                    <div className="text-sm text-yellow-700 mt-2">
                      Recommendation: {warning.recommendation}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle>Optimization Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
              <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <div className="font-medium text-blue-800">Answer Length Optimization</div>
                <div className="text-sm text-blue-700">
                  Keep answers between 40-300 characters for optimal rich snippets display
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
              <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <div className="font-medium text-blue-800">Question Format</div>
                <div className="text-sm text-blue-700">
                  Use clear, natural language questions that match user search queries
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
              <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <div className="font-medium text-blue-800">Schema Completeness</div>
                <div className="text-sm text-blue-700">
                  Ensure all required properties are present and properly formatted
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SchemaTestResults;
