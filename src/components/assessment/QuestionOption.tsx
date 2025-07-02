
import React from 'react';

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
          ? 'border-dataops-600 bg-dataops-950 text-white shadow-md' 
          : 'border-gray-200 hover:border-dataops-300 hover:bg-gray-50 text-gray-900'}
      `}
      onClick={() => onSelect(value)}
    >
      <div className="font-medium mb-1">{text}</div>
      <div className={`text-sm ${isSelected ? 'text-gray-300' : 'text-gray-500'}`}>
        {description}
      </div>
    </div>
  );
};

export default QuestionOption;
