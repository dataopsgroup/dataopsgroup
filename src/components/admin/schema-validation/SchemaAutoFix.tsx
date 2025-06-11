
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Wrench } from 'lucide-react';
import { useSchemaAutoFix, SchemaFixResult, PerformanceImpactMetrics } from '@/services/schemaAutoFixService';
import { SchemaIssue } from '@/services/schemaAuditService';
import ProcessingAlert from './auto-fix/ProcessingAlert';
import AutoFixTab from './auto-fix/AutoFixTab';
import PerformanceTab from './auto-fix/PerformanceTab';
import IntegrationTab from './auto-fix/IntegrationTab';

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
          <ProcessingAlert 
            isProcessing={isProcessing}
            activeProcess={activeProcess}
          />

          <Tabs defaultValue="auto-fix" className="space-y-4">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="auto-fix">Auto-Fix Schema</TabsTrigger>
              <TabsTrigger value="performance">Performance Impact</TabsTrigger>
              <TabsTrigger value="integration">Google Testing</TabsTrigger>
            </TabsList>

            <TabsContent value="auto-fix" className="space-y-4">
              <AutoFixTab
                onAutoFix={handleAutoFix}
                fixResult={fixResult}
                isProcessing={isProcessing}
                issuesCount={issues.length}
              />
            </TabsContent>

            <TabsContent value="performance" className="space-y-4">
              <PerformanceTab
                onPerformanceTracking={handlePerformanceTracking}
                performanceMetrics={performanceMetrics}
                isProcessing={isProcessing}
              />
            </TabsContent>

            <TabsContent value="integration" className="space-y-4">
              <IntegrationTab
                onGoogleIntegrationTest={handleGoogleIntegrationTest}
                integrationResult={integrationResult}
                isProcessing={isProcessing}
                hasFixResult={!!fixResult}
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default SchemaAutoFix;
