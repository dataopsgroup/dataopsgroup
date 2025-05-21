
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQCategory as FAQCategoryType, FAQItem } from '@/data/faqs/types';
import { cn } from '@/lib/utils';

interface FAQCategoryProps {
  category: FAQCategoryType;
}

const FAQCategory: React.FC<FAQCategoryProps> = ({ category }) => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  
  const toggleItem = (itemId: string) => {
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId) 
        : [...prev, itemId]
    );
  };
  
  return (
    <section aria-labelledby={`category-${category.id}`}>
      <h2 
        id={`category-${category.id}`}
        className="text-2xl font-bold mb-6 text-gray-900"
      >
        {category.title}
      </h2>
      
      <dl className="space-y-4">
        {category.items.map((faq: FAQItem) => {
          const isExpanded = expandedItems.includes(faq.question);
          
          return (
            <div 
              key={faq.question}
              className="border border-gray-200 rounded-lg"
            >
              <dt>
                <button
                  onClick={() => toggleItem(faq.question)}
                  className="flex w-full justify-between items-center p-4 text-left text-gray-900 font-medium"
                  aria-expanded={isExpanded}
                  aria-controls={`faq-answer-${faq.question}`}
                >
                  {faq.question}
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-dataops-500 transition-transform",
                      isExpanded ? "transform rotate-180" : ""
                    )}
                  />
                </button>
              </dt>
              
              <dd
                id={`faq-answer-${faq.question}`}
                className={cn(
                  "px-4 pb-4 pt-0 text-gray-600",
                  !isExpanded && "hidden"
                )}
              >
                {faq.answer}
              </dd>
            </div>
          );
        })}
      </dl>
    </section>
  );
};

export default FAQCategory;
