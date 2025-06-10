
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SemanticLayout from '@/components/layout/SemanticLayout';
import PillarContent from '@/components/PillarContent';
import MetaHead from '@/components/seo/MetaHead';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { setupInteractionBasedLoading } from '@/lib/performance/interaction';
import pillarContentData from '@/data/pillar-content/hubspot-expert-guide.json';

const PillarContentPage = () => {
  const { slug } = useParams();
  
  useEffect(() => {
    setupInteractionBasedLoading();
  }, []);

  // For now, we only have one pillar content piece
  // In the future, this could be expanded to handle multiple pieces
  if (slug !== 'hubspot-expert-guide') {
    return (
      <SemanticLayout>
        <MetaHead
          title="Content Not Found - DataOps Group"
          description="The requested content could not be found. Browse our available guides and resources."
          canonicalPath={`/guides/${slug}`}
          noindex={true}
          structuredData={{
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Content Not Found",
            "description": "The requested pillar content could not be found",
            "url": `https://dataopsgroup.com/guides/${slug}`,
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://dataopsgroup.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Guides",
                  "item": "https://dataopsgroup.com/guides"
                }
              ]
            }
          }}
        />
        <BreadcrumbSchema items={[
          { name: 'Home', url: '/' },
          { name: 'Guides', url: '/guides' },
          { name: 'Content Not Found', url: `/guides/${slug}` }
        ]} />
        
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Content Not Found</h1>
          <p className="text-gray-600">The requested content could not be found.</p>
        </div>
      </SemanticLayout>
    );
  }

  return (
    <SemanticLayout>
      <MetaHead
        title={pillarContentData.title}
        description={pillarContentData.description}
        canonicalPath="/guides/hubspot-expert-guide"
        author="Geoff Tucker"
        publishDate="2024-12-01T00:00:00Z"
        ogType="article"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": pillarContentData.title,
          "description": pillarContentData.description,
          "author": {
            "@type": "Person",
            "name": "Geoff Tucker",
            "url": "https://dataopsgroup.com/about"
          },
          "publisher": {
            "@type": "Organization",
            "name": "DataOps Group",
            "url": "https://dataopsgroup.com"
          },
          "datePublished": "2024-12-01T00:00:00Z",
          "dateModified": "2024-12-01T00:00:00Z",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://dataopsgroup.com/guides/hubspot-expert-guide"
          },
          "articleSection": "HubSpot Implementation",
          "wordCount": 8500,
          "timeRequired": "PT45M"
        }}
      />
      
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Guides', url: '/guides' },
        { name: 'HubSpot Expert Guide', url: '/guides/hubspot-expert-guide' }
      ]} />
      
      <PillarContent 
        title={pillarContentData.title}
        description={pillarContentData.description}
      />
    </SemanticLayout>
  );
};

export default PillarContentPage;
