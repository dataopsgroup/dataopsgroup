
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
      className="bg-white rounded-lg shadow-md border"
    >
      <AccordionTrigger className="px-6 py-4 text-lg text-left justify-start">
        {item.question}
      </AccordionTrigger>
      <AccordionContent className="px-6 pb-4">
        {item.answer.split('\n\n').map((paragraph, i) => (
          <p key={i} className="mb-3 whitespace-pre-line text-base">
            {paragraph}
          </p>
        ))}
        {item.relatedLink && (
          <p className="mt-4">
            <Link
              to={item.relatedLink.url}
              className="text-dataops-600 hover:underline font-medium"
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
