
import React from 'react';
import QuestionOption from './QuestionOption';

interface QuestionOption {
  value: number;
  text: string;
  description: string;
}

interface QuestionProps {
  id: string;
  text: string;
  options: QuestionOption[];
  selectedValue?: number;
  onAnswer: (questionId: string, value: number) => void;
}

const Question: React.FC<QuestionProps> = ({ id, text, options, selectedValue, onAnswer }) => {
  return (
    <div key={id} className="pb-6 border-b border-gray-200 last:border-0 last:pb-0">
      <h3 className="font-medium text-lg mb-4 text-gray-800">
        {text}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
        {options.map((option) => (
          <QuestionOption
            key={option.value}
            value={option.value}
            text={option.text}
            description={option.description}
            isSelected={selectedValue === option.value}
            onSelect={(value) => onAnswer(id, value)}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
