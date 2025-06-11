import React from 'react';
import { Helmet } from 'react-helmet-async';
import SemanticLayout from '@/components/layout/SemanticLayout';
import FAQSchemaValidator from '@/components/admin/schema-validation/FAQSchemaValidator';
import GoogleRichResultsCheck from '@/components/admin/schema-validation/GoogleRichResultsCheck';
import SchemaAuditDashboard from '@/components/admin/seo/SchemaAuditDashboard';
import SchemaImplementationGuide from '@/components/admin/schema-validation/SchemaImplementationGuide';
import SchemaAutoFix from '@/components/admin/schema-validation/SchemaAutoFix';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const SchemaValidationPage = () => {
  return (
    <SemanticLayout>
      <Helmet>
        <title>Schema Validation & Audit Dashboard - Admin | DataOps Group</title>
        <meta name="description" content="Comprehensive schema validation, audit, and optimization dashboard for all page types" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Schema Management Dashboard</h1>
            <p className="text-gray-600">
              Comprehensive schema validation, audit, and optimization tools for all page types.
            </p>
          </div>
          
          <Tabs defaultValue="faq-validation" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="faq-validation">FAQ Validation</TabsTrigger>
              <TabsTrigger value="rich-results">Rich Results</TabsTrigger>
              <TabsTrigger value="schema-audit">Schema Audit</TabsTrigger>
              <TabsTrigger value="auto-fix">Auto-Fix & Tracking</TabsTrigger>
              <TabsTrigger value="implementation">Implementation</TabsTrigger>
            </TabsList>
            
            <TabsContent value="faq-validation" className="space-y-6">
              <FAQSchemaValidator />
            </TabsContent>
            
            <TabsContent value="rich-results" className="space-y-6">
              <GoogleRichResultsCheck />
            </TabsContent>
            
            <TabsContent value="schema-audit" className="space-y-6">
              <SchemaAuditDashboard />
            </TabsContent>
            
            <TabsContent value="auto-fix" className="space-y-6">
              <SchemaAutoFix 
                issues={[
                  {
                    type: 'missing',
                    schema: 'WebApplication',
                    description: 'Calculator tools should implement WebApplication schema',
                    fix: 'Add WebApplication schema with applicationCategory, operatingSystem, and provider properties',
                    impact: 'high'
                  }
                ]}
                pageUrl="/bad-data-cost-calculator"
              />
            </TabsContent>
            
            <TabsContent value="implementation" className="space-y-6">
              <SchemaImplementationGuide />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </SemanticLayout>
  );
};

export default SchemaValidationPage;
