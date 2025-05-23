
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
        {/* Fixed Sidebar with Table of Contents - adjusted to be exactly 1/3 width */}
        <Sidebar className="w-full md:w-1/3 lg:w-1/3 max-w-xs border-r">
          <div className="p-6 pt-0"> {/* Removed top padding to fix alignment */}
            {/* Removed the logo from here as it's already in the main navigation */}
            <div className="sidebar-content-wrapper">
              {tableOfContents}
            </div>
          </div>
        </Sidebar>
        
        {/* Main Content Area - adjusted to be exactly 2/3 width with 20px left padding */}
        <SidebarInset className="w-full md:w-2/3 lg:w-2/3 pl-5">
          <div className="container mx-auto py-0 pl-0 pr-5%"> {/* Removed py-8 to fix alignment */}
            <BreadcrumbNavigation 
              items={[
                { name: 'Home', url: '/' },
                { name: 'Pillar Content', url: '/pillar-content', current: true }
              ]}
            />
            
            <header className="mb-8 text-left ml-20"> {/* Removed pt-8, letting the breadcrumb handle spacing */}
              <h1 className="text-4xl font-bold mb-4 text-dataops-900">{title}</h1>
              {description && (
                <p className="text-xl text-gray-600">{description}</p>
              )}
            </header>
            
            {/* Content area with proper spacing */}
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
