
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
      image: '/lovable-uploads/af49b492-8291-4b98-89f4-6c36890dae72.png',
      relatedLink: {
        text: 'Related articles',
        url: '/insights'
      }
    },
    {
      industry: 'Technology',
      title: 'Enterprise Technology Integration',
      description: 'Implementing advanced data systems for enterprise clients to improve operational efficiency and decision-making processes.',
      image: '/lovable-uploads/bc4206e6-a56f-4df9-b1e7-be944954779a.png',
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
