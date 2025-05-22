
import React from 'react';
import BreadcrumbNavigation from './seo/BreadcrumbNavigation';

interface PillarContentProps {
  title: string;
  description?: string;
  content: React.ReactNode;
}

const PillarContent: React.FC<PillarContentProps> = ({ 
  title, 
  description, 
  content 
}) => {
  return (
    <div className="container mx-auto px-5% py-8">
      <BreadcrumbNavigation 
        items={[
          { name: 'Home', url: '/' },
          { name: 'Pillar Content', url: '/pillar-content', current: true }
        ]}
      />
      
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4 text-dataops-900">{title}</h1>
        {description && (
          <p className="text-xl text-gray-600">{description}</p>
        )}
      </header>
      
      <main className="prose prose-lg max-w-none">
        {content}
      </main>
    </div>
  );
};

export default PillarContent;
