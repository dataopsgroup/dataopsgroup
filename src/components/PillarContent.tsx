
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
        <Sidebar className="w-full md:w-1/3 lg:w-1/4 max-w-xs">
          <SidebarHeader className="border-b p-4">
            <h3 className="text-xl font-bold">Table of Contents</h3>
          </SidebarHeader>
          <SidebarContent>
            <div className="p-4">
              {tableOfContents}
            </div>
          </SidebarContent>
        </Sidebar>
        
        {/* Main Content Area */}
        <SidebarInset className="w-full md:w-2/3 lg:w-3/4">
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
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default PillarContent;
