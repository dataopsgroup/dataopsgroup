
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CaseStudiesGrid = () => {
  // Case study content
  const caseStudies = [
    {
      industry: 'Financial Services',
      title: 'Financial Services Data Transformation',
      description: 'How we helped a Fortune 500 financial services company modernize their data infrastructure and analytics capabilities.',
      relatedLink: {
        text: 'Related services',
        url: '/services'
      }
    },
    {
      industry: 'Healthcare',
      title: 'Healthcare Provider Data Integration',
      description: 'Streamlining data operations across multiple healthcare facilities to improve patient outcomes and operational efficiency.',
      relatedLink: {
        text: 'Implementation guide',
        url: '/documentation'
      }
    },
    {
      industry: 'Retail',
      title: 'Retail Analytics Platform Implementation',
      description: 'Building a comprehensive analytics platform for a major retail chain to drive data-informed decision making.',
      relatedLink: {
        text: 'Related articles',
        url: '/blog'
      }
    },
    {
      industry: 'Manufacturing',
      title: 'Manufacturing DataOps Transformation',
      description: 'Implementing DataOps practices to improve production efficiency and reduce downtime for a global manufacturer.',
      relatedLink: {
        text: 'Implementation FAQs',
        url: '/faqs'
      }
    }
  ];

  return (
    <section className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {caseStudies.map((caseStudy, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-gray-200 h-48" aria-label={`${caseStudy.title} illustration`}></div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 rounded-full bg-dataops-50 text-dataops-600 text-sm font-medium mb-3">
                {caseStudy.industry}
              </span>
              <h2 className="text-xl font-semibold mb-2">{caseStudy.title}</h2>
              <p className="text-gray-600 mb-4">
                {caseStudy.description}
              </p>
              <div className="flex justify-between items-center">
                <Button>Read Case Study</Button>
                <Link to={caseStudy.relatedLink.url} className="text-dataops-600 hover:underline flex items-center text-sm">
                  {caseStudy.relatedLink.text} <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudiesGrid;
