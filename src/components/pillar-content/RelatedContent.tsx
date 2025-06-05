
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, BarChart3 } from 'lucide-react';

const RelatedContent: React.FC = () => {
  const relatedArticles = [
    {
      title: "What Does a HubSpot Consultant Cost?",
      description: "Detailed breakdown of HubSpot consultant pricing and ROI calculations",
      link: "/insights/what-does-a-hubspot-consultant-cost",
      icon: BarChart3,
      category: "Pricing"
    },
    {
      title: "Marketing Operations RevOps Service",
      description: "Our comprehensive marketing operations and revenue operations service",
      link: "/services/marketing-operations-revops",
      icon: Users,
      category: "Service"
    },
    {
      title: "HubSpot Implementation Case Studies",
      description: "Real-world examples of successful HubSpot implementations",
      link: "/case-studies",
      icon: BookOpen,
      category: "Case Study"
    }
  ];

  const faqCategories = [
    {
      title: "HubSpot Expert FAQs",
      description: "Common questions about hiring HubSpot experts",
      link: "/faqs/hubspot-experts",
      count: "12 questions"
    },
    {
      title: "HubSpot Services FAQs", 
      description: "Questions about HubSpot implementation services",
      link: "/faqs/hubspot-services",
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
    <div className="mt-12 space-y-8">
      {/* Related Articles */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Reading</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedArticles.map((article, index) => {
            const IconComponent = article.icon;
            return (
              <Link
                key={index}
                to={article.link}
                className="group block p-6 bg-white border border-gray-200 rounded-lg hover:border-dataops-300 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <IconComponent className="h-6 w-6 text-dataops-600" />
                  </div>
                  <div className="flex-1">
                    <span className="inline-block px-2 py-1 text-xs font-medium text-dataops-700 bg-dataops-100 rounded mb-2">
                      {article.category}
                    </span>
                    <h3 className="font-semibold text-gray-900 group-hover:text-dataops-600 mb-2 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{article.description}</p>
                    <div className="flex items-center text-sm text-dataops-600 group-hover:text-dataops-700">
                      <span>Read more</span>
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
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
              <h3 className="font-medium text-gray-900 group-hover:text-dataops-600 mb-2 transition-colors">
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

      {/* Call to Action */}
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
    </div>
  );
};

export default RelatedContent;
