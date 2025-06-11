
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SemanticLayout from '@/components/layout/SemanticLayout';
import SchemaAuditDashboard from '@/components/admin/seo/SchemaAuditDashboard';

const SchemaAuditPage = () => {
  return (
    <SemanticLayout>
      <Helmet>
        <title>Schema Markup Audit - Admin | DataOps Group</title>
        <meta name="description" content="Comprehensive schema markup audit and optimization dashboard" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-7xl">
          <SchemaAuditDashboard />
        </div>
      </div>
    </SemanticLayout>
  );
};

export default SchemaAuditPage;
