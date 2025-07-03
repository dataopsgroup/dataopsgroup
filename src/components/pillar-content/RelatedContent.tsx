
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const RelatedContent: React.FC = () => {
  const relatedArticles = [
    {
      title: "Hiring and Working with a HubSpot Consultant",
      description: "Complete guide to finding, vetting, and working with HubSpot experts",
      link: "/insights/hiring-and-working-with-a-hubspot-consultant",
      category: "Consulting"
    },
    {
      title: "Stop Buying Contact Lists: Here's Why It Always Fails",
      description: "Why purchased lists damage reputation and sustainable alternatives",
      link: "/insights/stop-buying-contact-lists",
      category: "Lead Generation"
    },
    {
      title: "The Silent Sales and Marketing Divide",
      description: "How misaligned teams cost companies millions in lost revenue",
      link: "/insights/silent-sales-marketing-divide",
      category: "Revenue Operations"
    },
    {
      title: "Why Most Marketing Dashboards Fail",
      description: "Common dashboard mistakes that lead to poor business decisions",
      link: "/insights/marketing-dashboards-fail",
      category: "Analytics"
    },
    {
      title: "Marketing Leaders at Risk: The Data Quality Crisis",
      description: "How poor data quality puts marketing careers at risk",
      link: "/insights/marketing-leaders-data-quality-crisis",
      category: "Data Quality"
    },
    {
      title: "Create a Pro-Level HubSpot Lead Score Model",
      description: "Build sophisticated lead scoring that predicts sales success",
      link: "/insights/create-pro-level-hubspot-lead-score-model",
      category: "Lead Management"
    }
  ];

  const caseStudies = [
    {
      title: "Multi-National Specialty Insurance Provider",
      description: "How we modernized sales and marketing operations across multiple regions",
      link: "/insights/multi-national-specialty-insurance",
      category: "Case Study"
    },
    {
      title: "Audio Visual Equipment Wholesaler Transformation",
      description: "Data-driven transformation achieving 10% pipeline growth in 6 months",
      link: "/insights/audio-visual-equipment-wholesaler",
      category: "Case Study"
    },
    {
      title: "Upscale Home Improvement Manufacturer Success",
      description: "From clogged HubSpot system to streamlined lead management powerhouse",
      link: "/insights/upscale-home-improvement-goods-manufacturer",
      category: "Case Study"
    }
  ];

  const faqCategories = [
    {
      title: "HubSpot Expert FAQs",
      description: "Common questions about hiring HubSpot experts",
      link: "/faqs/experts",
      count: "12 questions"
    },
    {
      title: "HubSpot Services FAQs", 
      description: "Questions about HubSpot implementation services",
      link: "/faqs/services",
      count: "15 questions"
    },
    {
      title: "Data Quality FAQs",
      description: "Everything about data quality in HubSpot",
      link: "/faqs/data-quality", 
      count: "18 questions"
    }
  ];

  return (
    <div className="mt-12 space-y-8 related-content-cards">
      {/* Call to Action - Moved to top */}
      <section className="bg-gradient-to-r from-dataops-50 to-saffron-50 border border-dataops-200 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Find Your HubSpot Expert?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Don't let a failed implementation cost your business. Get expert guidance from certified HubSpot specialists 
          who understand integrations, data quality, and marketing operations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/book"
            className="inline-flex items-center justify-center px-6 py-3 bg-dataops-600 text-white font-semibold rounded-lg hover:bg-dataops-700 transition-colors"
          >
            Book a Strategy Call
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
          <Link
            to="/assessment"
            className="inline-flex items-center justify-center px-6 py-3 border border-dataops-600 text-dataops-600 font-semibold rounded-lg hover:bg-dataops-50 transition-colors"
          >
            Take Our Assessment
          </Link>
        </div>
      </section>

      {/* Featured Insights */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Insights</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedArticles.map((article, index) => (
            <Link
              key={index}
              to={article.link}
              className="group block p-6 bg-white border border-gray-200 rounded-lg hover:border-dataops-300 hover:shadow-md transition-all duration-200"
            >
              <div className="space-y-4">
                <span className="inline-block px-2 py-1 text-xs font-medium text-dataops-700 bg-dataops-100 rounded">
                  {article.category}
                </span>
                <h3 className="text-base font-semibold text-gray-900 group-hover:text-dataops-600 mb-2 transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{article.description}</p>
                <div className="flex items-center text-sm text-dataops-600 group-hover:text-dataops-700">
                  <span>Read more</span>
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Success Stories</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <Link
              key={index}
              to={study.link}
              className="group block p-6 bg-white border border-gray-200 rounded-lg hover:border-dataops-300 hover:shadow-md transition-all duration-200"
            >
              <div className="space-y-4">
                <span className="inline-block px-2 py-1 text-xs font-medium text-saffron-700 bg-saffron-100 rounded">
                  {study.category}
                </span>
                <h3 className="text-base font-semibold text-gray-900 group-hover:text-dataops-600 mb-2 transition-colors">
                  {study.title}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{study.description}</p>
                <div className="flex items-center text-sm text-dataops-600 group-hover:text-dataops-700">
                  <span>Read case study</span>
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ Categories */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {faqCategories.map((category, index) => (
            <Link
              key={index}
              to={category.link}
              className="group block p-4 bg-gray-50 border border-gray-200 rounded-lg hover:bg-white hover:border-dataops-300 hover:shadow-sm transition-all duration-200"
            >
              <h3 className="text-sm font-medium text-gray-900 group-hover:text-dataops-600 mb-2 transition-colors">
                {category.title}
              </h3>
              <p className="text-sm text-gray-600 mb-2">{category.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">{category.count}</span>
                <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-dataops-600 group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Additional Navigation Links */}
      <section className="border-t border-gray-200 pt-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Explore More Resources</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/insights" className="text-dataops-600 hover:text-dataops-800 font-medium">
              All Blog Posts
            </Link>
            <span className="text-gray-300">•</span>
            <Link to="/services" className="text-dataops-600 hover:text-dataops-800 font-medium">
              Our Services
            </Link>
            <span className="text-gray-300">•</span>
            <Link to="/about" className="text-dataops-600 hover:text-dataops-800 font-medium">
              About DataOps Group
            </Link>
            <span className="text-gray-300">•</span>
            <Link to="/contact" className="text-dataops-600 hover:text-dataops-800 font-medium">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RelatedContent;
