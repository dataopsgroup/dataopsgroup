
import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
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
  // Future: expand to handle multiple pieces based on slug
  
  // Known content mappings
  const validContentSlugs = ['hubspot-expert-guide', 'hubspot-expert'];
  
  // Redirect hubspot-expert to hubspot-expert-guide for consistency
  if (slug === 'hubspot-expert') {
    return <Navigate to="/guides/hubspot-expert" replace />;
  }
  
  // If slug is not valid, redirect to 404 instead of showing noindex page
  if (!validContentSlugs.includes(slug || '')) {
    return <Navigate to="/404" replace />;
  }

  return (
    <SemanticLayout>
      <MetaHead
        title={pillarContentData.title}
        description={pillarContentData.description}
        canonicalPath="/guides/hubspot-expert"
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
            "@id": "https://dataopsgroup.com/guides/hubspot-expert"
          },
          "articleSection": "HubSpot Implementation",
          "wordCount": 8500,
          "timeRequired": "PT45M"
        }}
      />
      
      <BreadcrumbSchema items={[
        { name: 'Home', url: '/' },
        { name: 'Guides', url: '/guides' },
        { name: 'HubSpot Expert Guide', url: '/guides/hubspot-expert' }
      ]} />
      
      <PillarContent 
        title={pillarContentData.title}
        description={pillarContentData.description}
      />
    </SemanticLayout>
  );
};

export default PillarContentPage;
