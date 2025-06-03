
import React, { useState, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import SemanticLayout from '@/components/layout/SemanticLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle } from 'lucide-react';
import { ValidationResult } from '@/types/structured-data';
import { ErrorBoundary } from 'react-error-boundary';

// Lazy load components for better performance
const FAQSchemaValidator = React.lazy(() => import('@/components/admin/structured-data/FAQSchemaValidator'));
const RichSnippetsPreview = React.lazy(() => import('@/components/admin/structured-data/RichSnippetsPreview'));
const SchemaTestResults = React.lazy(() => import('@/components/admin/structured-data/SchemaTestResults'));
const FAQSchemaHealth = React.lazy(() => import('@/components/admin/structured-data/FAQSchemaHealth'));

/**
 * Error Fallback Component for error boundaries
 */
const ErrorFallback: React.FC<{ error: Error }> = ({ error }) => (
  <Card className="border-red-200 bg-red-50">
    <CardContent className="p-6">
      <div className="flex items-center gap-2 text-red-700 mb-2">
        <AlertCircle className="h-5 w-5" />
        <span className="font-medium">Something went wrong</span>
      </div>
      <p className="text-red-600 text-sm">{error.message}</p>
    </CardContent>
  </Card>
);

/**
 * Loading Skeleton Component
 */
const LoadingSkeleton: React.FC = () => (
  <div className="space-y-4">
    <div className="h-8 bg-gray-200 rounded animate-pulse"></div>
    <div className="h-32 bg-gray-200 rounded animate-pulse"></div>
  </div>
);

/**
 * Professional Structured Data Testing Dashboard
 * Provides comprehensive FAQ schema validation and optimization tools
 */
const StructuredDataTest: React.FC = () => {
  const [validationResults, setValidationResults] = useState<ValidationResult | null>(null);
  const [selectedUrl, setSelectedUrl] = useState('/faqs');

  return (
    <SemanticLayout>
      <Helmet>
        <title>Structured Data Testing - DataOps Group Admin</title>
        <meta name="description" content="Test and validate FAQ schema markup for rich snippets optimization" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              FAQ Rich Snippets Testing Dashboard
            </h1>
            <p className="text-gray-600">
              Validate and optimize FAQ schema markup for better search visibility
            </p>
          </div>

          <Tabs defaultValue="validator" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="validator">Schema Validator</TabsTrigger>
              <TabsTrigger value="preview">Rich Snippets Preview</TabsTrigger>
              <TabsTrigger value="results">Test Results</TabsTrigger>
              <TabsTrigger value="health">Schema Health</TabsTrigger>
            </TabsList>

            <TabsContent value="validator" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>FAQ Schema Validation</CardTitle>
                  <CardDescription>
                    Test your FAQ pages for proper schema markup and rich snippets eligibility
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ErrorBoundary FallbackComponent={ErrorFallback}>
                    <Suspense fallback={<LoadingSkeleton />}>
                      <FAQSchemaValidator 
                        onValidationComplete={setValidationResults}
                        selectedUrl={selectedUrl}
                        onUrlChange={setSelectedUrl}
                      />
                    </Suspense>
                  </ErrorBoundary>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="preview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Rich Snippets Preview</CardTitle>
                  <CardDescription>
                    See how your FAQ pages will appear in Google search results
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ErrorBoundary FallbackComponent={ErrorFallback}>
                    <Suspense fallback={<LoadingSkeleton />}>
                      <RichSnippetsPreview url={selectedUrl} />
                    </Suspense>
                  </ErrorBoundary>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="results" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Detailed Test Results</CardTitle>
                  <CardDescription>
                    Comprehensive validation results and recommendations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ErrorBoundary FallbackComponent={ErrorFallback}>
                    <Suspense fallback={<LoadingSkeleton />}>
                      <SchemaTestResults results={validationResults} />
                    </Suspense>
                  </ErrorBoundary>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="health" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Schema Health Overview</CardTitle>
                  <CardDescription>
                    Overall health score and optimization recommendations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ErrorBoundary FallbackComponent={ErrorFallback}>
                    <Suspense fallback={<LoadingSkeleton />}>
                      <FAQSchemaHealth results={validationResults} />
                    </Suspense>
                  </ErrorBoundary>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </SemanticLayout>
  );
};

export default StructuredDataTest;
