
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import faqCategories from '@/data/faqs';

interface CategoryNavigationProps {
  currentCategoryId: string;
}

const CategoryNavigation: React.FC<CategoryNavigationProps> = ({ currentCategoryId }) => {
  const categoryRoutes = {
    'hubspot-services': '/faqs/hubspot-services',
    'hubspot-experts': '/faqs/hubspot-experts',
    'our-approach': '/faqs/our-approach',
    'data-quality': '/faqs/data-quality',
    'hubspot-modules': '/faqs/hubspot-modules'
  };

  return (
    <div className="mb-8">
      <Link 
        to="/faqs" 
        className="inline-flex items-center text-dataops-600 hover:text-dataops-700 mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to All FAQs
      </Link>
      
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Browse Other FAQ Categories</h2>
        <nav aria-label="FAQ Category Navigation">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {faqCategories.map((category) => (
              <li key={category.id}>
                {category.id === currentCategoryId ? (
                  <div className="p-3 rounded-md bg-dataops-100 border border-dataops-200">
                    <span className="font-medium text-dataops-700">{category.title}</span>
                    <span className="block text-sm text-dataops-600 mt-1">
                      Current section
                    </span>
                  </div>
                ) : (
                  <Link
                    to={categoryRoutes[category.id as keyof typeof categoryRoutes] || '/faqs'}
                    className="block p-3 rounded-md bg-gray-50 hover:bg-gray-100 transition-colors duration-200 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">{category.title}</span>
                      <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-gray-600" />
                    </div>
                    <span className="block text-sm text-gray-600 mt-1">
                      {category.items.length} questions
                    </span>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default CategoryNavigation;
