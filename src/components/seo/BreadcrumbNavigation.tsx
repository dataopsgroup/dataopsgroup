
import React from 'react';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";
import BreadcrumbSchema from './BreadcrumbSchema';
import { HomeIcon, ChevronRightIcon } from 'lucide-react';

interface BreadcrumbNavigationProps {
  items: {
    name: string;
    url: string;
    current?: boolean;
  }[];
  className?: string;
}

/**
 * BreadcrumbNavigation component that combines UI breadcrumbs with structured data
 * This enhances SEO and user navigation simultaneously
 */
const BreadcrumbNavigation = ({ items, className = '' }: BreadcrumbNavigationProps) => {
  console.log('BreadcrumbNavigation rendering with items:', items);
  
  try {
    // Ensure Home is always the first item if not explicitly provided
    const breadcrumbItems = items[0]?.name !== 'Home' 
      ? [{ name: 'Home', url: '/' }, ...items]
      : items;

    console.log('Processed breadcrumb items:', breadcrumbItems);

    return (
      <>
        {/* Add schema markup for search engines */}
        <BreadcrumbSchema items={breadcrumbItems} />
        
        {/* Visual breadcrumb for users */}
        <Breadcrumb className={`mb-4 ${className}`}>
          <BreadcrumbList>
            {breadcrumbItems.map((item, index) => {
              const isLast = index === breadcrumbItems.length - 1;
              
              return (
                <div key={index} className="flex items-center">
                  <BreadcrumbItem>
                    {isLast ? (
                      <BreadcrumbPage>{item.name}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink href={item.url}>
                        {index === 0 ? (
                          <span className="flex items-center">
                            <HomeIcon className="h-3.5 w-3.5 mr-1" />
                            <span className="sr-only sm:not-sr-only">{item.name}</span>
                          </span>
                        ) : (
                          item.name
                        )}
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                  
                  {!isLast && <BreadcrumbSeparator><ChevronRightIcon className="h-3.5 w-3.5" /></BreadcrumbSeparator>}
                </div>
              );
            })}
          </BreadcrumbList>
        </Breadcrumb>
      </>
    );
  } catch (error) {
    console.error('BreadcrumbNavigation error:', error);
    return <div className="mb-4">Navigation error</div>;
  }
};

export default BreadcrumbNavigation;
