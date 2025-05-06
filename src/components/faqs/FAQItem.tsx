
import React from 'react';
import { Link } from 'react-router-dom';
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQItem as FAQItemType } from '@/data/faqs/types';

interface FAQItemProps {
  item: FAQItemType;
  id: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ item, id }) => {
  return (
    <AccordionItem
      key={id}
      value={id}
      className="bg-white rounded-lg shadow-sm border"
    >
      <AccordionTrigger className="px-4 py-3 text-base text-left justify-start">
        {item.question}
      </AccordionTrigger>
      <AccordionContent className="px-4 pb-3">
        {item.answer.split('\n\n').map((paragraph, i) => (
          <p key={i} className="mb-2 whitespace-pre-line text-sm">
            {paragraph}
          </p>
        ))}
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
      </AccordionContent>
    </AccordionItem>
  );
};

export default FAQItem;
