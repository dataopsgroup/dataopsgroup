
import React from 'react';
import { CaseStudyData } from '@/types/caseStudy';
import MetaHead from '@/components/seo/MetaHead';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

interface CaseStudyDetailSEOProps {
  caseData: CaseStudyData;
  caseStudyId: string;
}

const CaseStudyDetailSEO = ({ caseData, caseStudyId }: CaseStudyDetailSEOProps) => {
  const canonicalPath = `/case-studies/${caseStudyId}`;
  
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: caseData.title, url: `/case-studies/${caseStudyId}` },
  ];

  const metaDescription = `See how DataOps Group transformed ${caseData.title} in ${caseData.industry}. ${caseData.metrics.primary.value} ${caseData.metrics.primary.label} achieved through strategic HubSpot implementation.`;

  const keywords = [
    'case study',
    'hubspot implementation',
    'marketing operations',
    'revenue growth',
    caseData.industry.toLowerCase(),
    'dataops success story'
  ].join(', ');

  return (
    <>
      <MetaHead
        title={`${caseData.title} Case Study | DataOps Group`}
        description={metaDescription}
        keywords={keywords}
        canonicalPath={canonicalPath}
        ogType="article"
        ogTitle={`${caseData.title} Case Study | DataOps Group`}
        ogDescription={metaDescription}
        ogImage="/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png"
        siteName="DataOps Group"
      />
      
      <BreadcrumbSchema items={breadcrumbs} />
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": `${caseData.title} Case Study`,
          "description": metaDescription,
          "author": {
            "@type": "Organization",
            "name": "DataOps Group"
          },
          "publisher": {
            "@type": "Organization",
            "name": "DataOps Group",
            "logo": {
              "@type": "ImageObject",
              "url": "https://dataopsgroup.com/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png"
            }
          },
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://dataopsgroup.com${canonicalPath}`
          }
        })}
      </script>
    </>
  );
};

export default CaseStudyDetailSEO;
