
import React from 'react';
import { FAQCategory } from '@/data/faqs/types';

interface FAQTableOfContentsProps {
  categories: FAQCategory[];
}

const FAQTableOfContents: React.FC<FAQTableOfContentsProps> = ({ categories }) => {
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
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default FAQTableOfContents;
