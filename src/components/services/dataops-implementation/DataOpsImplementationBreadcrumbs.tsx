
import React from 'react';
import BreadcrumbNavigation from '@/components/seo/BreadcrumbNavigation';

const DataOpsImplementationBreadcrumbs = () => {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'DataOps Implementation', url: '/services/dataops-implementation', current: true }
  ];

  return (
    <div className="container mx-auto px-4 pt-6">
      <div className="max-w-6xl mx-auto">
        <BreadcrumbNavigation 
          items={breadcrumbItems}
          className="mb-4"
        />
      </div>
    </div>
  );
};

export default DataOpsImplementationBreadcrumbs;
