
import React from 'react';
import BreadcrumbNavigation from '@/components/seo/BreadcrumbNavigation';

interface DashboardHeaderProps {
  title: string;
  description: string;
  breadcrumbItems: Array<{ name: string; url: string; current?: boolean }>;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ title, description, breadcrumbItems }) => {
  return (
    <div className="mb-8">
      <BreadcrumbNavigation items={breadcrumbItems} />
      <h1 className="text-3xl font-bold mt-6">{title}</h1>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default DashboardHeader;
