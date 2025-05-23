
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
    <div className="pt-16"> {/* New parent container with padding from navbar */}
      <SidebarProvider defaultOpen={true}>
        <div className="flex w-full"> {/* Removed pt-16 as it's now on the parent */}
          {/* Fixed Sidebar with Table of Contents - exactly 1/3 width */}
          <Sidebar className="w-full md:w-1/3 lg:w-1/3 max-w-xs border-r">
            <div className="px-[15px] pt-0"> {/* No top padding/margin needed */}
              {/* Removed the logo as it's already in the main navigation */}
              <div id="table-of-contents-container" className="sidebar-content-wrapper pt-0">
                {tableOfContents}
              </div>
            </div>
          </Sidebar>
          
          {/* Main Content Area - exactly 2/3 width with left padding */}
          <SidebarInset className="w-full md:w-2/3 lg:w-2/3 pl-5">
            <div className="container mx-auto py-0 pl-0 pr-5%"> {/* Maintained spacing */}
              <BreadcrumbNavigation 
                items={[
                  { name: 'Home', url: '/' },
                  { name: 'Pillar Content', url: '/pillar-content', current: true }
                ]}
                className="mt-0" /* No top margin needed */
              />
              
              <header className="mb-8 text-left ml-20"> {/* Keeping consistent spacing */}
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
    </div>
  );
};

export default PillarContent;
