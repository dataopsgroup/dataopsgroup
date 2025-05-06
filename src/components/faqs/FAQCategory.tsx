
import React from 'react';
import { Accordion } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import FAQItem from './FAQItem';
import { FAQCategory as FAQCategoryType } from '@/data/faqs/types';
import { FolderOpen, Book, Database, FileText } from 'lucide-react';

interface FAQCategoryProps {
  category: FAQCategoryType;
}

const FAQCategory: React.FC<FAQCategoryProps> = ({ category }) => {
  // Map icon string to actual icon component
  const getIconComponent = () => {
    switch (category.icon) {
      case 'FolderOpen':
        return <FolderOpen className="h-6 w-6 text-dataops-600" />;
      case 'Book':
        return <Book className="h-6 w-6 text-dataops-600" />;
      case 'Database':
        return <Database className="h-6 w-6 text-dataops-600" />;
      case 'FileText':
        return <FileText className="h-6 w-6 text-dataops-600" />;
      default:
        return <FolderOpen className="h-6 w-6 text-dataops-600" />;
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="pb-4">
        <div className="mb-4 h-12 w-12 rounded-full bg-dataops-100 flex items-center justify-center mx-auto">
          {getIconComponent()}
        </div>
        <CardTitle className="text-xl font-semibold text-center">
          {category.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="space-y-4">
          {category.items.map((item, index) => (
            <FAQItem 
              key={`${category.id}-item-${index + 1}`}
              id={`${category.id}-item-${index + 1}`} 
              item={item} 
            />
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};

export default FAQCategory;
