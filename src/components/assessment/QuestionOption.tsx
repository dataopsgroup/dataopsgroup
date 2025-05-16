
import React from 'react';
import { CheckIcon } from 'lucide-react';

interface QuestionOptionProps {
  value: number;
  text: string;
  description: string;
  isSelected: boolean;
  onSelect: (value: number) => void;
}

const QuestionOption: React.FC<QuestionOptionProps> = ({ 
  value, 
  text, 
  description, 
  isSelected, 
  onSelect 
}) => {
  return (
    <div 
      className={`
        relative border rounded-lg p-4 transition-all cursor-pointer
        ${isSelected 
          ? 'border-dataops-600 bg-dataops-50 shadow-md' 
          : 'border-gray-200 hover:border-dataops-300 hover:bg-gray-50'}
      `}
      onClick={() => onSelect(value)}
    >
      {isSelected && (
        <div className="absolute top-2 right-2 text-dataops-600">
          <CheckIcon size={16} />
        </div>
      )}
      <div className="font-medium mb-1">{text}</div>
      <div className="text-sm text-gray-500">{description}</div>
    </div>
  );
};

export default QuestionOption;
