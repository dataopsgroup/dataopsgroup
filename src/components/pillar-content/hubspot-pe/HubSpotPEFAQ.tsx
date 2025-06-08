import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
const HubSpotPEFAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const faqs = [{
    question: "How long does a HubSpot implementation take for a PE portfolio?",
    answer: "Our proven methodology delivers full portfolio standardization within 100 days. This includes initial setup, data migration, team training, and go-live across all portfolio companies. Traditional enterprise CRMs typically take 6-18 months per company."
  }, {
    question: "Can HubSpot handle multiple portfolio companies under one license?",
    answer: "Yes, HubSpot's architecture natively supports multi-entity management. You can maintain separate data for each portfolio company while having consolidated reporting and standardized processes. This eliminates the need for separate licenses and complex data consolidation."
  }, {
    question: "What's the typical ROI timeline for PE HubSpot implementations?",
    answer: "Most clients see positive ROI within 4-6 months, with full investment recovery by month 8-10. The combination of operational efficiency gains, improved reporting accuracy, and faster deal velocity typically delivers 18-22x return in year one."
  }, {
    question: "How does HubSpot compare to Salesforce for PE operations?",
    answer: "While Salesforce is powerful, it requires extensive customization and longer implementation times (6-12 months vs. 100 days). HubSpot provides 95% of required PE functionality out-of-the-box, with native multi-entity support and investor-grade reporting templates."
  }, {
    question: "What happens to existing CRM data during the transition?",
    answer: "We provide complete data migration services with zero data loss guarantee. Our process includes data cleansing, deduplication, and validation to ensure your historical data is preserved and enhanced in the new system."
  }, {
    question: "Do you provide training for portfolio company teams?",
    answer: "Yes, we include comprehensive training as part of our implementation. This covers executives, operations teams, and end users across all portfolio companies. We also provide ongoing support and additional training as your portfolio grows."
  }, {
    question: "How do you ensure consistent reporting across portfolio companies?",
    answer: "We deploy standardized templates, KPI definitions, and reporting structures across all companies. This ensures investors receive consistent, comparable data regardless of which portfolio company generates the report."
  }, {
    question: "What if we acquire new companies after implementation?",
    answer: "Our template-based approach allows rapid onboarding of new acquisitions. New companies can be fully integrated into your standardized HubSpot environment within 30 days, maintaining consistency across your growing portfolio."
  }];
  return <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-dataops-900">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Get answers to the most common questions about implementing HubSpot 
            for private equity portfolio operations.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <button onClick={() => setOpenFAQ(openFAQ === index ? null : index)} className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors">
                <h3 className="text-lg font-semibold text-dataops-900 pr-4">
                  {faq.question}
                </h3>
                {openFAQ === index ? <Minus className="h-5 w-5 text-dataops-600 flex-shrink-0" /> : <Plus className="h-5 w-5 text-dataops-600 flex-shrink-0" />}
              </button>
              
              {openFAQ === index && <div className="px-6 pb-4">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>}
            </div>)}
        </div>

        {/* Additional Help */}
        <div className="mt-12 text-center">
          <div className="bg-dataops-50 border border-dataops-100 rounded-lg p-8">
            <h3 className="text-xl font-semibold text-dataops-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-700 mb-6">Schedule a consultation with us to discuss your specific requirements and get personalized answers about your HubSpot implementation.</p>
            <a href="/contact" className="bg-dataops-600 hover:bg-dataops-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block">
              Schedule PE Consultation
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default HubSpotPEFAQ;