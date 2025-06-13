
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { FAQItem as FAQItemType } from '@/data/faqs/types';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItemProps {
  item: FAQItemType;
  id: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ item, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card key={id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <h4 className="font-medium text-base mb-2">{item.question}</h4>
        
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <div className="mt-3 text-sm text-gray-600">
            {/* Always show first paragraph */}
            {item.answer.split('\n\n').slice(0, 1).map((paragraph, i) => (
              <p key={i} className="mb-2 whitespace-pre-line">
                {paragraph}
              </p>
            ))}
            
            {/* Show expand/collapse link if there are more paragraphs */}
            {item.answer.split('\n\n').length > 1 && (
              <CollapsibleTrigger asChild>
                <button 
                  className="text-dataops-600 hover:underline font-medium text-sm flex items-center gap-1 mt-2"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(!isOpen);
                  }}
                >
                  {isOpen ? (
                    <>Show less <ChevronUp className="h-4 w-4" /></>
                  ) : (
                    <>Read more <ChevronDown className="h-4 w-4" /></>
                  )}
                </button>
              </CollapsibleTrigger>
            )}
            
            <CollapsibleContent>
              {/* Show remaining paragraphs when expanded */}
              {item.answer.split('\n\n').slice(1).map((paragraph, i) => (
                <p key={i} className="mb-2 whitespace-pre-line">
                  {paragraph}
                </p>
              ))}
            </CollapsibleContent>

            {/* Display keywords if they exist */}
            {item.keywords && item.keywords.length > 0 && (
              <div className="mt-3 pt-2 border-t border-gray-100">
                <div className="flex flex-wrap gap-1">
                  {item.keywords.map((keyword, keyIndex) => (
                    <span
                      key={keyIndex}
                      className="px-2 py-1 bg-dataops-50 text-dataops-700 text-xs rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Collapsible>
        
        {item.relatedLink && (
          <p className="mt-3">
            <Link
              to={item.relatedLink.url}
              className="text-dataops-600 hover:underline font-medium text-sm"
              aria-label={item.relatedLink.ariaLabel}
            >
              {item.relatedLink.text}
            </Link>
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default FAQItem;
