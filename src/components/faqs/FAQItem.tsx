
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { FAQItem as FAQItemType } from '@/data/faqs/types';

interface FAQItemProps {
  item: FAQItemType;
  id: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ item, id }) => {
  return (
    <Card key={id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
      <CardContent className="p-4">
        <h4 className="font-medium text-base mb-2">{item.question}</h4>
        
        <div className="mt-3 text-sm text-gray-600 max-h-[180px] overflow-y-auto">
          {item.answer.split('\n\n').map((paragraph, i) => (
            <p key={i} className="mb-2 whitespace-pre-line">
              {paragraph}
            </p>
          )).slice(0, 1)} {/* Only show first paragraph in grid view */}
          
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
        </div>
      </CardContent>
    </Card>
  );
};

export default FAQItem;
