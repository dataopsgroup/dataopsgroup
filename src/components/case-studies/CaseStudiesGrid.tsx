
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CaseStudiesGrid = () => {
  // Case study content with updated images
  const caseStudies = [
    {
      industry: 'Financial Services',
      title: 'Financial Services Data Transformation',
      description: 'How we helped a Fortune 500 financial services company modernize their data infrastructure and analytics capabilities.',
      image: '/lovable-uploads/833959d1-f76e-4da5-b0d5-0fec4b891379.png',
      relatedLink: {
        text: 'Related services',
        url: '/services'
      }
    },
    {
      industry: 'Healthcare',
      title: 'Healthcare Provider Data Integration',
      description: 'Streamlining data operations across multiple healthcare facilities to improve patient outcomes and operational efficiency.',
      image: '/lovable-uploads/1d08f817-dd96-4157-8b40-be4a84d2ee91.png',
      relatedLink: {
        text: 'Implementation guide',
        url: '/documentation'
      }
    },
    {
      industry: 'Marketing Operations',
      title: 'Marketing Operations & IT Integration',
      description: 'Bridging the gap between marketing and IT departments for seamless data flow and improved cross-functional collaboration.',
      image: '/lovable-uploads/4fc5a5d8-17d4-482b-9c6c-5bac9aa55fc0.png', // Updated image
      relatedLink: {
        text: 'Related articles',
        url: '/insights'
      }
    },
    {
      industry: 'Data Enrichment',
      title: 'Enterprise Data Enrichment Strategy',
      description: 'Implementing advanced data enrichment processes to improve data quality and decision-making for enterprise clients.',
      image: '/lovable-uploads/5ae47a2e-6c0e-4d39-a7a9-46ed03c4eef3.png', // Updated image
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
            <div className="h-48 relative">
              <img 
                src={caseStudy.image} 
                alt={`${caseStudy.title} illustration`}
                className="w-full h-full object-cover"
              />
            </div>
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
