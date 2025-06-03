
import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { FAQCategory } from '@/data/faqs/types';

interface FAQTableOfContentsProps {
  categories: FAQCategory[];
}

const FAQTableOfContents: React.FC<FAQTableOfContentsProps> = ({ categories }) => {
  const categoryRoutes = {
    'hubspot-services': '/faqs/hubspot-services',
    'hubspot-experts': '/faqs/hubspot-experts',
    'our-approach': '/faqs/our-approach',
    'data-quality': '/faqs/data-quality',
    'hubspot-modules': '/faqs/hubspot-modules'
  };

  const handleJumpToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 mb-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Navigation</h2>
      <nav aria-label="FAQ Categories Navigation">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {categories.map((category) => (
            <li key={category.id}>
              <div className="space-y-2">
                <button
                  onClick={() => handleJumpToSection(category.id)}
                  className="w-full text-left p-3 rounded-md bg-gray-50 hover:bg-dataops-100 hover:text-dataops-700 transition-colors duration-200 border border-transparent hover:border-dataops-200"
                  aria-label={`Jump to ${category.title} section`}
                >
                  <span className="font-medium text-gray-900">{category.title}</span>
                  <span className="block text-sm text-gray-600 mt-1">
                    {category.items.length} questions
                  </span>
                </button>
                
                {categoryRoutes[category.id as keyof typeof categoryRoutes] && (
                  <Link
                    to={categoryRoutes[category.id as keyof typeof categoryRoutes]}
                    className="flex items-center justify-center w-full p-2 text-sm text-dataops-600 hover:text-dataops-700 hover:bg-dataops-50 rounded-md transition-colors duration-200"
                  >
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Dedicated page
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default FAQTableOfContents;
