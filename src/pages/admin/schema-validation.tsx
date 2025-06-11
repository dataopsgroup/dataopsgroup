
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SemanticLayout from '@/components/layout/SemanticLayout';
import FAQSchemaValidator from '@/components/admin/schema-validation/FAQSchemaValidator';
import GoogleRichResultsCheck from '@/components/admin/schema-validation/GoogleRichResultsCheck';

const SchemaValidationPage = () => {
  return (
    <SemanticLayout>
      <Helmet>
        <title>Schema Validation Dashboard - Admin | DataOps Group</title>
        <meta name="description" content="Validate FAQ schema markup and check Google Rich Results eligibility" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Schema Validation Dashboard</h1>
            <p className="text-gray-600">
              Test and validate FAQ schema markup across all category pages.
            </p>
          </div>
          
          <div className="grid gap-8">
            <FAQSchemaValidator />
            <GoogleRichResultsCheck />
          </div>
        </div>
      </div>
    </SemanticLayout>
  );
};

export default SchemaValidationPage;
