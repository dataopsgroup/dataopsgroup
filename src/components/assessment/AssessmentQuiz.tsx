
import React, { useState, useCallback, useMemo } from 'react';
import AssessmentIntro from './AssessmentIntro';
import QuizResults from './QuizResults';
import QuizSection from './QuizSection';
import QuizNavigation from './QuizNavigation';
import AssessmentProgress from './AssessmentProgress';
import { useAssessmentResults } from '@/hooks/useAssessmentResults';
import { quizSections } from '@/data/assessment/quizData';

const AssessmentQuiz = () => {
  const [currentStep, setCurrentStep] = useState('intro');
  const [currentSection, setCurrentSection] = useState(1);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [scores, setScores] = useState<Record<string, number>>({});
  const [showValidationError, setShowValidationError] = useState(false);
  
  const { overallScore, scoreLabel, priorities, rescuePlan } = useAssessmentResults(scores);

  const startQuiz = useCallback(() => {
    setCurrentStep('quiz');
    setCurrentSection(1);
  }, []);

  const handleAnswer = useCallback((questionId: string, value: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
    // Clear validation error when user answers a question
    if (showValidationError) {
      setShowValidationError(false);
    }
  }, [showValidationError]);

  // Check if all questions in current section are answered
  const isCurrentSectionComplete = useCallback(() => {
    const section = quizSections.find(s => s.id === currentSection);
    if (!section) return false;
    
    return section.questions.every(question => answers[question.id] !== undefined);
  }, [currentSection, answers]);

  // Memoize section score calculation
  const calculateSectionScore = useCallback((sectionId: number) => {
    const section = quizSections.find(s => s.id === sectionId);
    if (!section) return 0;
    
    let totalScore = 0;
    let questionCount = 0;
    
    for (const question of section.questions) {
      const answer = answers[question.id];
      if (answer !== undefined) {
        totalScore += answer;
        questionCount++;
      }
    }
    
    return questionCount > 0 ? totalScore : 0;
  }, [answers]);

  const scrollToTop = useCallback(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  }, []);

  const nextSection = useCallback(() => {
    // Check if current section is complete before proceeding
    if (!isCurrentSectionComplete()) {
      setShowValidationError(true);
      return;
    }

    setShowValidationError(false);

    if (currentSection < quizSections.length) {
      setCurrentSection(prev => prev + 1);
      scrollToTop();
    } else {
      // Calculate final scores for all sections efficiently
      const finalScores: Record<string, number> = {};
      
      for (const section of quizSections) {
        const sectionKey = `section${section.id}`;
        finalScores[sectionKey] = calculateSectionScore(section.id);
      }
      
      setScores(finalScores);
      setCurrentStep('results');
      scrollToTop();
    }
  }, [currentSection, calculateSectionScore, scrollToTop, isCurrentSectionComplete]);

  const prevSection = useCallback(() => {
    if (currentSection > 1) {
      setCurrentSection(prev => prev - 1);
      setShowValidationError(false);
      scrollToTop();
    }
  }, [currentSection, scrollToTop]);

  const handleEmailResults = useCallback(() => {
    console.log('Email results requested');
  }, []);

  // Memoize section titles to prevent recreation
  const sectionTitles = useMemo(() => 
    quizSections.map(section => section.title), 
    []
  );

  if (currentStep === 'intro') {
    return <AssessmentIntro startQuiz={startQuiz} />;
  }

  if (currentStep === 'quiz') {
    const currentQuizSection = quizSections.find(s => s.id === currentSection);
    
    if (!currentQuizSection) {
      return <div>Section not found</div>;
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto py-8">
          <AssessmentProgress currentSection={currentSection} totalSections={quizSections.length} />
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <QuizSection
              title={currentQuizSection.title}
              questions={currentQuizSection.questions}
              answers={answers}
              onAnswer={handleAnswer}
            />
            
            <QuizNavigation
              currentSection={currentSection}
              prevSection={prevSection}
              nextSection={nextSection}
              showValidationError={showValidationError}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <QuizResults
      overallScore={overallScore}
      scores={scores}
      sectionTitles={sectionTitles}
      priorities={priorities}
      rescuePlan={rescuePlan}
      onEmailResults={handleEmailResults}
    />
  );
};

export default AssessmentQuiz;
