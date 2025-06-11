
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import { 
  Wrench, 
  TrendingUp, 
  CheckCircle, 
  XCircle, 
  Clock, 
  ExternalLink,
  Download,
  Play,
  AlertTriangle
} from 'lucide-react';
import { useSchemaAutoFix, SchemaFixResult, PerformanceImpactMetrics } from '@/services/schemaAutoFixService';
import { SchemaIssue } from '@/services/schemaAuditService';

interface SchemaAutoFixProps {
  issues: SchemaIssue[];
  pageUrl: string;
}

const SchemaAutoFix: React.FC<SchemaAutoFixProps> = ({ issues, pageUrl }) => {
  const [fixResult, setFixResult] = useState<SchemaFixResult | null>(null);
  const [performanceMetrics, setPerformanceMetrics] = useState<PerformanceImpactMetrics | null>(null);
  const [integrationResult, setIntegrationResult] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeProcess, setActiveProcess] = useState<string>('');

  const { 
    autoFixSchemaIssues, 
    trackPerformanceImpact, 
    testWithGoogleRichResults 
  } = useSchemaAutoFix();

  const handleAutoFix = async () => {
    setIsProcessing(true);
    setActiveProcess('Generating schema fixes...');
    
    try {
      const result = await autoFixSchemaIssues(issues, pageUrl);
      setFixResult(result);
    } catch (error) {
      console.error('Auto-fix failed:', error);
    } finally {
      setIsProcessing(false);
      setActiveProcess('');
    }
  };

  const handlePerformanceTracking = async () => {
    setIsProcessing(true);
    setActiveProcess('Analyzing performance impact...');
    
    try {
      const metrics = await trackPerformanceImpact(pageUrl);
      setPerformanceMetrics(metrics);
    } catch (error) {
      console.error('Performance tracking failed:', error);
    } finally {
      setIsProcessing(false);
      setActiveProcess('');
    }
  };

  const handleGoogleIntegrationTest = async () => {
    if (!fixResult?.generatedSchema) return;
    
    setIsProcessing(true);
    setActiveProcess('Testing with Google Rich Results...');
    
    try {
      const result = await testWithGoogleRichResults(fixResult.generatedSchema, pageUrl);
      setIntegrationResult(result);
    } catch (error) {
      console.error('Google integration test failed:', error);
    } finally {
      setIsProcessing(false);
      setActiveProcess('');
    }
  };

  const downloadSchema = () => {
    if (!fixResult?.generatedSchema) return;
    
    const blob = new Blob([fixResult.generatedSchema], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${pageUrl.split('/').pop()}-schema.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Wrench className="h-5 w-5" />
            Schema Auto-Fix & Performance Tracking
          </CardTitle>
        </CardHeader>
        <CardContent>
          {isProcessing && (
            <Alert className="mb-4">
              <Clock className="h-4 w-4" />
              <AlertDescription>
                {activeProcess}
                <Progress className="mt-2" />
              </AlertDescription>
            </Alert>
          )}

          <Tabs defaultValue="auto-fix" className="space-y-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="auto-fix">Auto-Fix Schema</TabsTrigger>
              <TabsTrigger value="performance">Performance Impact</TabsTrigger>
              <TabsTrigger value="integration">Google Testing</TabsTrigger>
            </TabsList>

            <TabsContent value="auto-fix" className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Automatic Schema Generation</h3>
                  <p className="text-sm text-gray-600">
                    Generate and implement schema fixes for {issues.length} identified issues
                  </p>
                </div>
                <Button 
                  onClick={handleAutoFix}
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
            </TabsContent>

            <TabsContent value="performance" className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Performance Impact Analysis</h3>
                  <p className="text-sm text-gray-600">
                    Track schema implementation impact on search performance
                  </p>
                </div>
                <Button 
                  onClick={handlePerformanceTracking}
                  disabled={isProcessing}
                  className="flex items-center gap-2"
                >
                  <TrendingUp className="h-4 w-4" />
                  Analyze Impact
                </Button>
              </div>

              {performanceMetrics && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Card>
                    <CardContent className="pt-4">
                      <div className="text-2xl font-bold text-green-600">
                        +{performanceMetrics.improvement.searchVisibilityGain}%
                      </div>
                      <div className="text-sm text-gray-600">Search Visibility</div>
                      <div className="text-xs text-gray-500">
                        {performanceMetrics.beforeImplementation.searchVisibility}% → {performanceMetrics.afterImplementation.searchVisibility}%
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-4">
                      <div className="text-2xl font-bold text-blue-600">
                        +{performanceMetrics.improvement.ctrImprovement}%
                      </div>
                      <div className="text-sm text-gray-600">Click-Through Rate</div>
                      <div className="text-xs text-gray-500">
                        {performanceMetrics.beforeImplementation.clickThroughRate}% → {performanceMetrics.afterImplementation.clickThroughRate}%
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-4">
                      <div className="text-2xl font-bold text-purple-600">
                        +{performanceMetrics.improvement.richSnippetsGain}
                      </div>
                      <div className="text-sm text-gray-600">Rich Snippets</div>
                      <div className="text-xs text-gray-500">
                        {performanceMetrics.beforeImplementation.richSnippetsCount} → {performanceMetrics.afterImplementation.richSnippetsCount}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="pt-4">
                      <div className="text-2xl font-bold text-orange-600">
                        {performanceMetrics.projectedROI}%
                      </div>
                      <div className="text-sm text-gray-600">Projected ROI</div>
                      <div className="text-xs text-gray-500">
                        12-month projection
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </TabsContent>

            <TabsContent value="integration" className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold">Google Rich Results Testing</h3>
                  <p className="text-sm text-gray-600">
                    Validate schema with Google's Rich Results Test API
                  </p>
                </div>
                <Button 
                  onClick={handleGoogleIntegrationTest}
                  disabled={isProcessing || !fixResult}
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
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default SchemaAutoFix;
