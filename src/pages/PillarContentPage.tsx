
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
  
  // Handle scroll to anchor when page loads with hash
  useScrollToAnchor();
  
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
    navigate(`/pillar-content#${sectionId}`, { replace: true });
    // Scroll to top when changing sections
    window.scrollTo(0, 0);
    
    // For accessibility and screen readers
    document.getElementById(sectionId)?.focus();
  };
  
  return (
    <SemanticLayout>
      <MetaHead 
        title="How to Hire a HubSpot Expert in 2025: Consultant Guide & Integration Costs" 
        description="Your complete guide to hiring the right HubSpot expert or consultant for your business needs, including implementation costs, evaluation criteria, and key questions to ask."
        keywords="HubSpot experts, HubSpot consultants, HubSpot implementation, HubSpot integration, HubSpot consultant costs" 
        canonicalPath="/pillar-content" 
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
              "url": "https://dataopsgroup.com/lovable-uploads/5f3a8bdf-410e-4727-8fa0-eb20abe91242.png"
            }
          },
          "datePublished": "2025-05-23",
          "dateModified": "2025-05-23"
        }}
      />
      
      <div className="container mx-auto px-4 py-16">
        {/* Title heading above both TOC and content */}
        <div className="mb-6 ml-[25px]">
          <h1 className="text-3xl font-bold">How to Hire a HubSpot Expert in 2025: Consultant Guide and Integration Costs</h1>
        </div>
        
        <div className="flex flex-col md:flex-row">
          {/* Table of Contents */}
          <div className="w-full md:w-[33%]">
            <TableOfContents 
              sectionIds={sectionIds}
              activeSection={activeSection}
              handleSectionClick={handleSectionClick}
            />
          </div>
          
          {/* Main content */}
          <ContentSection activeSection={activeSection} />
        </div>
      </div>
    </SemanticLayout>
  );
};

export default PillarContentPage;
