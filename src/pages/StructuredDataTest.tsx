
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import SemanticLayout from '@/components/layout/SemanticLayout';
import FAQSchemaValidator from '@/components/admin/structured-data/FAQSchemaValidator';
import RichSnippetsPreview from '@/components/admin/structured-data/RichSnippetsPreview';
import SchemaTestResults from '@/components/admin/structured-data/SchemaTestResults';
import FAQSchemaHealth from '@/components/admin/structured-data/FAQSchemaHealth';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const StructuredDataTest = () => {
  const [validationResults, setValidationResults] = useState(null);
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
                  <FAQSchemaValidator 
                    onValidationComplete={setValidationResults}
                    selectedUrl={selectedUrl}
                    onUrlChange={setSelectedUrl}
                  />
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
                  <RichSnippetsPreview url={selectedUrl} />
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
                  <SchemaTestResults results={validationResults} />
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
                  <FAQSchemaHealth results={validationResults} />
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
