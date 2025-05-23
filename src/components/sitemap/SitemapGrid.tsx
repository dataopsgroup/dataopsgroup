
import React from 'react';
import SitemapCard from './SitemapCard';
import SitemapLink from './SitemapLink';
import { FolderOpen, List } from 'lucide-react';

const SitemapGrid: React.FC = () => {
  return (
    <section className="py-16 px-[5%] bg-white">
      <div className="container mx-auto">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Main Pages */}
          <SitemapCard title="Main Pages" icon={FolderOpen}>
            <SitemapLink to="/" label="Home" />
            <SitemapLink to="/services" label="Services" />
            <SitemapLink to="/approach" label="Our Approach" />
            <SitemapLink to="/about" label="About Us" />
            <SitemapLink to="/insights" label="Insights" />
            <SitemapLink to="/contact" label="Contact" />
            <SitemapLink to="/get-started" label="Get Started" />
            <SitemapLink to="/assessment" label="HubSpot Assessment" />
          </SitemapCard>
          
          {/* Services */}
          <SitemapCard title="Services" icon={List}>
            <SitemapLink to="/services/analytics-bi" label="Analytics & BI" />
            <SitemapLink to="/services/dataops-implementation" label="DataOps Implementation" />
            <SitemapLink to="/services/marketing-operations-revops" label="Marketing Operations & RevOps" />
            <SitemapLink to="/services/team-training" label="Team Training" />
            <SitemapLink to="/seo-management" label="SEO Management" />
          </SitemapCard>
          
          {/* Resources */}
          <SitemapCard title="Resources" icon={FolderOpen}>
            <SitemapLink to="/case-studies" label="Case Studies" />
            <SitemapLink to="/whitepapers" label="Whitepapers" />
            <SitemapLink to="/faqs" label="FAQs" />
            <SitemapLink to="/book" label="Book a Call" />
            <SitemapLink to="/how-to-hire-a-hubspot-expert-in-2025" label="HubSpot Expert Guide" />
            <SitemapLink to="/sitemap.xml" label="XML Sitemap" external={true} />
          </SitemapCard>
          
          {/* Legal */}
          <SitemapCard title="Legal" icon={List}>
            <SitemapLink to="/privacy" label="Privacy Policy" />
          </SitemapCard>
          
          {/* Insights & Blog */}
          <SitemapCard title="Insights & Blog" icon={FolderOpen}>
            <SitemapLink to="/insights" label="All Insights" />
            <SitemapLink to="/insights/what-does-a-hubspot-consultant-cost" label="HubSpot Consultant Cost" />
            <SitemapLink to="/insights/navigating-first-90-days-revops" label="First 90 Days in RevOps" />
            <SitemapLink to="/insights/crm-cleanup-plan" label="CRM Cleanup Plan" />
            <SitemapLink to="/insights/marketing-data-management" label="Marketing Data Management" />
            <SitemapLink to="/insights/hidden-cost-of-failed-hubspot-implementations" label="Hidden Costs of Failed HubSpot" />
          </SitemapCard>
          
          {/* Case Studies */}
          <SitemapCard title="Case Studies" icon={List}>
            <SitemapLink to="/insights/upscale-home-improvement-goods-manufacturer" label="Home Improvement Manufacturer" />
            <SitemapLink to="/insights/saas-healthcare-achieves-remarkable-insights" label="SaaS Healthcare Provider" />
            <SitemapLink to="/insights/audio-visual-equipment-wholesaler" label="Audio-Visual Wholesaler" />
            <SitemapLink to="/insights/multi-national-specialty-insurance" label="Specialty Insurance Company" />
          </SitemapCard>
          
          {/* Results & Assessment Pages */}
          <SitemapCard title="Assessment & Tools" icon={List}>
            <SitemapLink to="/assessment" label="HubSpot Assessment Tool" />
            <SitemapLink to="/hubspot-assessment-results" label="Assessment Results" />
          </SitemapCard>
        </div>
      </div>
    </section>
  );
};

export default SitemapGrid;
