
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import ArticleHeader from './pillar-content/ArticleHeader';
import TableOfContents from './pillar-content/TableOfContents';
import ContentSection from './pillar-content/ContentSection';
import { SectionId } from '@/types/pillar-content';

interface PillarContentProps {
  title: string;
  description?: string;
}

const PillarContent: React.FC<PillarContentProps> = ({ 
  title, 
  description
}) => {
  const [activeSection, setActiveSection] = useState<SectionId>('introduction');

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": title,
            "description": description,
            "author": {
              "@type": "Person",
              "name": "Geoff Tucker"
            },
            "publisher": {
              "@type": "Organization",
              "name": "DataOps Group"
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://www.dataopsgroup.com/how-to-hire-a-hubspot-expert-in-2025"
            }
          })}
        </script>
      </Helmet>

      <div className="container mx-auto px-4 py-8">
        <ArticleHeader title={title} />
        
        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          {/* Table of Contents - Left Sidebar */}
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              <TableOfContents 
                activeSection={activeSection}
                onSectionChange={setActiveSection}
              />
            </div>
          </div>
          
          {/* Main Content */}
          <div className="lg:w-2/3">
            <ContentSection activeSection={activeSection} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PillarContent;
