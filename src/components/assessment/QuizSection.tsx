
import React from 'react';
import Question from './Question';

interface QuestionOption {
  value: number;
  text: string;
  description: string;
}

interface QuestionItem {
  id: string;
  text: string;
  options: QuestionOption[];
}

interface QuizSectionProps {
  title: string;
  questions: QuestionItem[];
  answers: Record<string, number>;
  onAnswer: (questionId: string, value: number) => void;
}

const QuizSection: React.FC<QuizSectionProps> = ({ title, questions, answers, onAnswer }) => {
  return (
    <div className="p-6 md:p-8">
      <h2 className="text-2xl font-semibold mb-6 text-dataops-800">
        {title}
      </h2>
      
      <div className="space-y-10">
        {questions.map((question) => (
          <Question
            key={question.id}
            id={question.id}
            text={question.text}
            options={question.options}
            selectedValue={answers[question.id]}
            onAnswer={onAnswer}
          />
        ))}
      </div>
    </div>
  );
};

export default QuizSection;
