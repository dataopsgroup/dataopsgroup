
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

export const useAssessmentState = () => {
  const [currentSection, setCurrentSection] = useState(0); // 0 = intro, 1-5 = sections, 6 = results
  const [progress, setProgress] = useState(20);
  const [scores, setScores] = useState<Record<string, number>>({
    section1: 0,
    section2: 0,
    section3: 0,
    section4: 0,
    section5: 0
  });
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [isEmailModalOpen, setIsEmailModalOpen] = useState(false);
  const navigate = useNavigate();

  // Start the quiz
  const startQuiz = () => {
    setCurrentSection(1);
    setProgress(20);
  };

  // Go to next section
  const nextSection = () => {
    if (currentSection < 5) {
      setCurrentSection(currentSection + 1);
      setProgress((currentSection + 1) * 20);
    } else {
      // Calculate section scores
      calculateSectionScores();
      setCurrentSection(6); // Show results
    }
  };

  // Go to previous section
  const prevSection = () => {
    if (currentSection > 1) {
      setCurrentSection(currentSection - 1);
      setProgress((currentSection - 1) * 20);
    }
  };

  // Update answers when a question is answered
  const handleAnswer = (questionId: string, value: number) => {
    setAnswers({
      ...answers,
      [questionId]: value
    });
  };

  // Calculate section scores
  const calculateSectionScores = () => {
    const newScores = { ...scores };
    
    // Calculate section scores based on answers
    for (const [questionId, value] of Object.entries(answers)) {
      const sectionId = questionId.split('.')[0];
      newScores[`section${sectionId}`] = (newScores[`section${sectionId}`] || 0) + value;
    }
    
    setScores(newScores);
  };

  // Open email modal
  const handleEmailResults = () => {
    setIsEmailModalOpen(true);
  };

  return {
    currentSection,
    progress,
    scores,
    answers,
    isEmailModalOpen,
    navigate,
    startQuiz,
    nextSection,
    prevSection,
    handleAnswer,
    handleEmailResults,
    setIsEmailModalOpen
  };
};
