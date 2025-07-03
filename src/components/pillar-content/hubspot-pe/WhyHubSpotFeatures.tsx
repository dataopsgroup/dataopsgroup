
import React from 'react';

const WhyHubSpotFeatures = () => {
  const features = [
    {
      title: "Unified Data Foundation",
      description: "Consolidate fragmented portfolio data into a single source of truth. Eliminate Excel chaos and manual reporting across all portfolio companies.",
      benefit: "✓ 73% faster EBITDA reporting"
    },
    {
      title: "PE-Grade Analytics", 
      description: "Built-in dashboards that automatically track KPIs investors care about. Real-time visibility into revenue, pipeline, and operational metrics.",
      benefit: "✓ Native investor reporting"
    },
    {
      title: "Rapid Standardization",
      description: "Deploy identical processes across all portfolio companies in weeks, not months. Template-driven approach ensures consistency.",
      benefit: "✓ 100-day implementation"
    },
    {
      title: "Enterprise Security",
      description: "Bank-grade security with SOC 2 compliance. Role-based access controls protect sensitive portfolio data across teams.",
      benefit: "✓ Investment-grade security"
    },
    {
      title: "Scalable Operations",
      description: "Platform grows with portfolio expansion. Add new companies without rebuilding systems or retraining teams.",
      benefit: "✓ Unlimited scalability"
    },
    {
      title: "Predictable ROI",
      description: "Transparent pricing model with measurable returns. Typical clients see $18-22 return for every dollar invested in the first year.",
      benefit: "✓ $18-22 ROI guarantee"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dataops-900">
            Why Private Equity Firms Choose HubSpot
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Unlike generic CRMs built for single companies, HubSpot's architecture naturally supports 
            the multi-entity, standardized approach that private equity operations demand.
          </p>
          
          {/* Enhanced Context for Search Engines */}
          <div className="mt-8 p-6 bg-gray-50 rounded-lg max-w-4xl mx-auto text-left">
            <h3 className="text-xl font-semibold text-dataops-900 mb-4">
              The Private Equity Technology Challenge
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Traditional enterprise CRM systems like Salesforce, Microsoft Dynamics, and Oracle create significant barriers for private equity firms. 
              These platforms require separate licenses for each portfolio company, extensive customization for basic functionality, and complex 
              integration projects that can take 6-18 months per implementation. The result is fragmented data, inconsistent reporting, and 
              operational inefficiencies that directly impact portfolio value creation.
            </p>
            <p className="text-gray-700 leading-relaxed">
              HubSpot addresses these challenges through its unique multi-entity architecture, template-based deployment methodology, and 
              native business intelligence capabilities. Portfolio companies can be onboarded in weeks rather than months, data remains consolidated 
              while maintaining appropriate separation, and investor reporting becomes automated rather than manual. This fundamental architectural 
              difference explains why leading PE firms consistently choose HubSpot over traditional enterprise alternatives.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow flex flex-col h-full">
              <h3 className="text-xl font-semibold text-dataops-900 mb-4">{feature.title}</h3>
              <p className="text-gray-700 mb-6 flex-grow">{feature.description}</p>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500 text-white text-sm font-medium w-fit">
                {feature.benefit}
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="bg-dataops-50 border border-dataops-100 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold text-dataops-900 mb-4">
              Ready to See HubSpot's PE Advantages in Action?
            </h3>
            <p className="text-gray-700 mb-6">
              Take our 5-minute assessment to identify which HubSpot features will deliver the highest 
              impact for your portfolio operations.
            </p>
            <a 
              href="/data-operations-assessment"
              className="bg-dataops-600 hover:bg-dataops-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block"
            >
              Start PE Operations Assessment
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHubSpotFeatures;
