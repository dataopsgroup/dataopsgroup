
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

import SemanticLayout from '@/components/layout/SemanticLayout';
import MetaHead from '@/components/seo/MetaHead';
import ServiceSchemaMarkup from '@/components/services/ServiceSchemaMarkup';
import BreadcrumbNavigation from '@/components/seo/BreadcrumbNavigation';
import RelatedServices from '@/components/services/RelatedServices';
import FAQPageSchema from '@/components/seo/FAQPageSchema';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import AutoOptimizedImage from '@/components/ui/auto-optimized-image';
import AnalyticsBIDashboardGrid from '@/components/services/analytics-bi/AnalyticsBIDashboardGrid';
import AnalyticsBIChallenges from '@/components/services/analytics-bi/AnalyticsBIChallenges';
import AnalyticsBICTA from '@/components/services/analytics-bi/AnalyticsBICTA';

// Page-specific components defined locally
const AnalyticsBIPageHeader = () => (
  <header className="mb-12 text-center">
    <h1 className="text-4xl md:text-5xl font-bold text-brand-navy leading-tight">
      Analytics & Business Intelligence Services
    </h1>
    <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
      Unlock the full potential of your data. We turn complex data into clear, actionable insights that drive strategic decisions and growth.
    </p>
  </header>
);

const AnalyticsBIOverview = () => (
  <section className="mb-16">
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold text-brand-navy mb-6">From Data Chaos to Clarity</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-gray-700 leading-relaxed mb-4">
            In today's market, data is your most valuable asset. But raw data is just noise. Our Analytics & BI services are designed to transform your scattered information into a strategic powerhouse. We help you move from reactive reporting to proactive, predictive insights.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We build custom dashboards, implement robust reporting systems, and develop data models that reveal trends, opportunities, and risks. Whether you're a PE firm evaluating portfolio performance or a company striving for operational excellence, we provide the clarity needed for confident decision-making.
          </p>
        </div>
        <div>
          <AutoOptimizedImage
            src="https://images.unsplash.com/photo-1521737852577-684b70584f41?w=800&q=80"
            alt="Team collaborating around a table with charts and data visualizations"
            className="rounded-lg shadow-md"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

const approachSteps = [
  { title: 'Discovery & Audit', description: 'We start by understanding your goals and auditing your existing data sources, systems, and reporting processes.' },
  { title: 'Strategy & Roadmap', description: 'We develop a tailored analytics strategy and a clear implementation roadmap aligned with your business objectives.' },
  { title: 'Implementation & Integration', description: 'Our experts build and integrate your analytics solution, from data warehousing to dashboard development.' },
  { title: 'Training & Adoption', description: 'We empower your team with the training and support needed to drive adoption and make data-driven decisions.' },
];

const AnalyticsBIApproach = () => (
  <section className="py-16">
    <div className="text-center max-w-3xl mx-auto mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">Our Proven Approach</h2>
      <p className="mt-4 text-lg text-gray-700">A structured process to ensure successful outcomes and maximum ROI from your analytics investment.</p>
    </div>
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {approachSteps.map((step, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-brand-saffron">
          <h3 className="text-xl font-semibold text-brand-navy mb-3">{`Step ${index + 1}: ${step.title}`}</h3>
          <p className="text-gray-600">{step.description}</p>
        </div>
      ))}
    </div>
  </section>
);

const faqItems = [
    { question: "What kind of BI tools do you work with?", answer: "We are tool-agnostic and work with a wide range of leading BI platforms, including Tableau, Power BI, Looker, and HubSpot's reporting tools. We recommend the best solution based on your specific needs, existing tech stack, and budget." },
    { question: "How long does it take to implement an analytics solution?", answer: "The timeline varies depending on the complexity of your data sources and the scope of the project. A typical implementation can range from 4 to 12 weeks. We begin with a quick-win phase to deliver value as early as possible." },
    { question: "How do you ensure data accuracy in your reports?", answer: "Data accuracy is our top priority. Our process includes comprehensive data validation, cleansing, and establishing a 'single source of truth'. We implement automated data quality checks and governance protocols to ensure your insights are based on reliable data." },
    { question: "Can you help us with predictive analytics?", answer: "Yes. Beyond historical reporting, we specialize in predictive and prescriptive analytics. We can help you build models for forecasting, customer churn prediction, lead scoring, and identifying new growth opportunities." }
];

const AnalyticsBIFAQ = () => (
    <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
            <FAQPageSchema items={faqItems} url="/services/analytics-bi" title="Frequently Asked Questions - Analytics & BI Services" description="Find answers to common questions about our business intelligence and data analytics consulting services." />
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-brand-navy">Frequently Asked Questions</h2>
            </div>
            <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                        <AccordionContent className="text-gray-700">{item.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    </section>
);


const AnalyticsBI = () => {
  const serviceTitle = "Analytics & BI Services | DataOps Group";
  const serviceDescription = "Transform your data into actionable insights with our analytics and business intelligence services.";

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Analytics & BI', url: '/services/analytics-bi', current: true },
  ];

  return (
    <SemanticLayout>
      <MetaHead
        title="Actionable Analytics & BI Solutions - Drive Growth | DataOps Group"
        description="Transform data into actionable insights with our expert Analytics & BI services. We build custom dashboards and reporting solutions to drive strategic decisions."
        keywords="analytics services, business intelligence, data visualization, custom dashboards, reporting solutions, data analytics consulting"
        canonicalPath="/services/analytics-bi"
        ogTitle="Actionable Analytics & BI Solutions - Drive Growth | DataOps Group"
        ogDescription="Expert analytics and BI services to transform your data into actionable insights. Custom dashboards, reporting, and data visualization."
      />
      <ServiceSchemaMarkup
        serviceTitle="Analytics & BI Services"
        serviceDescription={serviceDescription}
        serviceId="analytics-bi"
        isHubSpotTraining={false}
      />

      <div className="pt-24 pb-16 no-image-hover-effect">
        <div className="container mx-auto px-4">
          <BreadcrumbNavigation items={breadcrumbItems} />
          <div className="max-w-4xl mx-auto">
            <AnalyticsBIPageHeader />
            <AnalyticsBIOverview />
          </div>
        </div>
        
        <AnalyticsBIDashboardGrid />
        
        <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
                <AnalyticsBIApproach />
                <AnalyticsBIChallenges />
            </div>
        </div>
        
        <AnalyticsBIFAQ />

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto mt-16">
            <AnalyticsBICTA />
          </div>
        </div>
      </div>
      
      <div className="bg-white">
        <RelatedServices 
          currentService="analytics-bi"
          title="Explore Our Other Services"
          description="Discover how our comprehensive service offerings can support your business transformation"
        />
      </div>
    </SemanticLayout>
  );
};

export default AnalyticsBI;
