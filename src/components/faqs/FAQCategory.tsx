
import React from 'react';
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
    <Card className="w-full hover:shadow-lg transition-shadow mb-12">
      <CardHeader className="pb-4">
        <div className="flex items-center mb-4">
          <div className="h-12 w-12 rounded-full bg-dataops-100 flex items-center justify-center mr-4">
            {getIconComponent()}
          </div>
          <CardTitle className="text-2xl font-semibold">
            {category.title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {category.items.map((item, index) => (
            <FAQItem 
              key={`${category.id}-item-${index + 1}`}
              id={`${category.id}-item-${index + 1}`} 
              item={item} 
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FAQCategory;
