
import React from 'react';
import BreadcrumbNavigation from './seo/BreadcrumbNavigation';
import {
  Sidebar,
  SidebarContent,
  SidebarProvider,
  SidebarInset,
  SidebarHeader
} from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';

interface PillarContentProps {
  title: string;
  description?: string;
  content: React.ReactNode;
  tableOfContents: React.ReactNode;
}

const PillarContent: React.FC<PillarContentProps> = ({ 
  title, 
  description, 
  content,
  tableOfContents
}) => {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex w-full">
        {/* Fixed Sidebar with Table of Contents */}
        <Sidebar className="w-full md:w-1/4 lg:w-1/4 max-w-xs border-r">
          <div className="p-6">
            <img 
              src="/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png" 
              alt="DataOps Group" 
              className="h-12 mb-6" 
            />
            {tableOfContents}
          </div>
        </Sidebar>
        
        {/* Main Content Area */}
        <SidebarInset className="w-full md:w-3/4 lg:w-3/4">
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
            
            <main className="prose prose-lg max-w-none pillar-content">
              {content}
            </main>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default PillarContent;
