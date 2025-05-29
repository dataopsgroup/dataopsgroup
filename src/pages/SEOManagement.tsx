
import React from 'react';
import { Helmet } from 'react-helmet-async';
import SemanticLayout from '@/components/layout/SemanticLayout';
import SEODashboard from './SEODashboard';

const SEOManagement = () => {
  return (
    <>
      <Helmet>
        <title>SEO Management Tools & Services | DataOps Group</title>
        <meta name="description" content="Professional SEO management tools and services for HubSpot websites. Improve rankings, traffic, and content visibility." />
      </Helmet>
      
      <SemanticLayout>
        <SEODashboard />
      </SemanticLayout>
    </>
  );
};

export default SEOManagement;
