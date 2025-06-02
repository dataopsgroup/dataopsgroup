import React, { useState, useEffect } from 'react';
import SemanticLayout from '@/components/layout/SemanticLayout';
import MetaHead from '@/components/seo/MetaHead';
import '../styles/pillar-content.css';
import useActiveSection from '@/hooks/useActiveSection';
import useScrollToAnchor from '@/hooks/useScrollToAnchor';
import { setupInteractionBasedLoading } from '@/lib/performance/interaction-loading';
import { useNavigate, useLocation } from 'react-router-dom';
import { SectionId } from '@/types/pillar-content';
import TableOfContents from '@/components/pillar-content/TableOfContents';
import ContentSection from '@/components/pillar-content/ContentSection';
import BreadcrumbNavigation from '@/components/seo/BreadcrumbNavigation';
import ArticleHeader from '@/components/pillar-content/ArticleHeader';

const PillarContentPage = () => {
  const sectionIds: SectionId[] = [
    'introduction',
    'understanding-experts',
    'types-expertise',
    'beyond-agency-safety',
    'when-need-expert',
    'evaluating-qualifications',
    'pricing-guide',
    'step-by-step-process',
    'essential-questions',
    'maximizing-partnership',
    'success-stories',
    'common-pitfalls',
    'conclusion'
  ];
  
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<SectionId>('introduction');
  
  // Get active section based on scroll
  const activeId = useActiveSection(sectionIds, 120);
  
  // Handle scroll to anchor when page loads with hash, but disable for manual navigation
  useScrollToAnchor([], true);
  
  // Setup interaction-based loading for performance
  React.useEffect(() => {
    setupInteractionBasedLoading();
  }, []);
  
  // Update active section based on URL hash
  useEffect(() => {
    const hash = location.hash.slice(1);
    if (hash && sectionIds.includes(hash as SectionId)) {
      setActiveSection(hash as SectionId);
      // Scroll to top when changing sections
      window.scrollTo(0, 0);
    } else if (!hash) {
      setActiveSection('introduction');
    }
  }, [location.hash, sectionIds]);
  
  // Handle TOC link clicks
  const handleSectionClick = (sectionId: SectionId) => {
    setActiveSection(sectionId);
    navigate(`/pillar-content#${sectionId}`, { 
      replace: true,
      state: { manualNavigation: true } // Add state to indicate this is a manual navigation
    });
    
    // Scroll to top when changing sections
    window.scrollTo(0, 0);
    
    // For accessibility and screen readers
    document.getElementById(sectionId)?.focus();
  };

  // Define breadcrumb items
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Resources', url: '/resources' },
    { name: 'Guide To Hiring a HubSpot Expert', url: '/pillar-content' }
  ];
  
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://dataopsgroup.com';

  return (
    <SemanticLayout>
      <MetaHead 
        title="How to Hire a HubSpot Expert in 2025: Consultant Guide & Integration Costs" 
        description="Your complete guide to hiring the right HubSpot expert or consultant for your business needs, including implementation costs, evaluation criteria, and key questions to ask."
        keywords="HubSpot experts, HubSpot consultants, HubSpot implementation, HubSpot integration, HubSpot consultant costs" 
        canonicalPath="/pillar-content" 
        ogImage="/lovable-uploads/5f3a8bdf-410e-4727-8fa0-eb20abe91242.png"
        siteName="DataOps Group"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "How to Hire a HubSpot Expert in 2025: Consultant Guide & Integration Costs",
          "author": {
            "@type": "Person",
            "name": "Geoff Tucker"
          },
          "publisher": {
            "@type": "Organization",
            "name": "DataOps Group",
            "logo": {
              "@type": "ImageObject",
              "url": `${baseUrl}/lovable-uploads/5f3a8bdf-410e-4727-8fa0-eb20abe91242.png`
            }
          },
          "datePublished": "2025-05-23",
          "dateModified": "2025-05-23"
        }}
      />
      
      <div className="container mx-auto px-4 py-16">
        {/* Breadcrumbs */}
        <div className="mb-6 ml-[25px]">
          <BreadcrumbNavigation items={breadcrumbItems} />
        </div>

        {/* Article Header with integrated social sharing */}
        <ArticleHeader 
          title="How to Hire a HubSpot Expert in 2025: Consultant Guide and Integration Costs"
        />
        
        <div className="flex flex-col md:flex-row">
          {/* Table of Contents - increased width from 33% to 35% */}
          <div className="w-full md:w-[35%]">
            <TableOfContents 
              sectionIds={sectionIds}
              activeSection={activeSection}
              handleSectionClick={handleSectionClick}
            />
          </div>
          
          {/* Main content - decreased width from 64% to 62% */}
          <div className="w-full md:w-[62%]">
            <ContentSection activeSection={activeSection} />
          </div>
        </div>
      </div>
    </SemanticLayout>
  );
};

export default PillarContentPage;
