
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { TrendingUp, Target, BarChart3, Users } from 'lucide-react';

const CaseStudiesGrid = () => {
  const caseStudies = [
    {
      id: "audio-visual-equipment-wholesaler",
      resultMetric: "47% Pipeline Growth",
      title: "B2B Electronics Distribution",
      industry: "Manufacturing • $100M Revenue",
      challenge: "Fragmented sales data across multiple locations prevented accurate pipeline forecasting and territory management.",
      solution: "Unified HubSpot implementation with automated territory assignment and real-time reporting dashboards.",
      result: "47% pipeline growth, 15% increase in average order size, and 1-week reduction in sales cycles.",
      icon: <TrendingUp className="h-8 w-8" />,
      hasPost: true
    },
    {
      id: "multi-national-specialty-insurance",
      resultMetric: "100% User Adoption",
      title: "Specialty Insurance Provider",
      industry: "Financial Services • Multi-National",
      challenge: "Sales team relied on spreadsheets for deal management, creating visibility gaps and inefficient processes.",
      solution: "Complete HubSpot Sales Hub implementation with automated workflows and custom reporting.",
      result: "100% user adoption, eliminated manual spreadsheet processes, and improved deal velocity tracking.",
      icon: <Target className="h-8 w-8" />,
      hasPost: true
    },
    {
      id: "saas-healthcare-achieves-remarkable-insights",
      resultMetric: "20+ KPI Dashboards",
      title: "Healthcare SaaS Platform",
      industry: "Technology • Specialized Medical",
      challenge: "Unclear lead progression and inability to track customer journey from prospect to advocate.",
      solution: "Comprehensive reporting suite with 20+ dashboards tracking lead quality and progression metrics.",
      result: "Enhanced lead quality focus, improved customer journey visibility, and data-driven investment decisions.",
      icon: <BarChart3 className="h-8 w-8" />,
      hasPost: true
    },
    {
      id: "upscale-home-improvement-goods-manufacturer",
      resultMetric: "Complete Digital Transformation",
      title: "Home Improvement Manufacturing",
      industry: "Manufacturing • Premium Products",
      challenge: "Offline processes and disconnected systems hindered growth and dealer relationship management.",
      solution: "End-to-end HubSpot transformation with territory mapping, automated workflows, and dealer portals.",
      result: "Complete digital transformation, streamlined dealer communications, and enhanced territory management.",
      icon: <Users className="h-8 w-8" />,
      hasPost: true
    }
  ];

  return (
    <section className="space-y-12">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-dataops-950 mb-4">
          Proven Results Across Industries
        </h2>
        <p className="text-lg text-gray-700">
          Each transformation demonstrates scalable methodologies that can be replicated across your portfolio companies.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch auto-rows-fr">
        {caseStudies.map((caseStudy, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white flex flex-col h-full">
            {/* Professional Header Section */}
            <div className="bg-gradient-to-r from-dataops-950 to-dataops-800 text-white p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-10 transform translate-x-4 -translate-y-2">
                {caseStudy.icon}
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white text-orange-500 text-sm font-semibold mb-3">
                  {caseStudy.resultMetric}
                </div>
                <h3 className="text-xl font-bold mb-2">{caseStudy.title}</h3>
                <p className="text-blue-200 text-sm font-medium">{caseStudy.industry}</p>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="p-6 space-y-4 flex-grow flex flex-col">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Challenge
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">{caseStudy.challenge}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Solution
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed">{caseStudy.solution}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Result
                </h4>
                <p className="text-gray-700 text-sm leading-relaxed font-medium">{caseStudy.result}</p>
              </div>
              
              <div className="pt-4 border-t border-gray-100 mt-auto">
                {caseStudy.hasPost ? (
                  <Link to={`/case-studies/${caseStudy.id}`}>
                    <Button className="w-full bg-brand-navy hover:bg-brand-navy/90 text-white">
                      Read Full Case Study
                    </Button>
                  </Link>
                ) : (
                  <Button disabled className="w-full">
                    Coming Soon
                  </Button>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CaseStudiesGrid;
