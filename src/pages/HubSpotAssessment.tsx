
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MetaHead from '@/components/seo/MetaHead';
import CTABanner from '@/components/CTABanner';
import AssessmentSchema from '@/components/seo/AssessmentSchema';
import AssessmentIntro from '@/components/assessment/AssessmentIntro';
import AssessmentProgress from '@/components/assessment/AssessmentProgress';
import QuizSection from '@/components/assessment/QuizSection';
import QuizNavigation from '@/components/assessment/QuizNavigation';
import QuizResults from '@/components/assessment/QuizResults';
import EmailModal from '@/components/assessment/EmailModal';
import { quizSections } from '@/data/assessment/quizData';
import { useAssessmentResults } from '@/hooks/useAssessmentResults';

const HubSpotAssessment = () => {
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

  // Use custom hook to calculate results data
  const { overallScore, scoreLabel, priorities, rescuePlan } = useAssessmentResults(scores);

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

  // Send results via email
  const handleSendResults = () => {
    const email = document.getElementById('email') as HTMLInputElement;
    const name = document.getElementById('name') as HTMLInputElement;
    const company = document.getElementById('company') as HTMLInputElement;
    const consent = document.getElementById('consent') as HTMLInputElement;
    
    if (email && name && company && consent && email.value && name.value && company.value && consent.checked) {
      // Here you would typically send the data to your backend
      alert('Thank you! Your results have been sent to your email.');
      setIsEmailModalOpen(false);
    } else {
      alert('Please fill out all fields and accept the terms.');
    }
  };

  // Extract section titles for the results page
  const sectionTitles = quizSections.map(section => 
    section.title.replace(" Assessment", "")
  );

  return (
    <div className="min-h-screen flex flex-col">
      <MetaHead
        title="HubSpot Implementation Assessment Quiz | DataOps Group"
        description="Evaluate your current HubSpot implementation and identify key improvement opportunities with our interactive assessment quiz."
        keywords="HubSpot implementation, HubSpot assessment, CRM assessment, HubSpot ROI, HubSpot optimization"
        ogType="website"
        ogTitle="Free HubSpot Implementation Assessment Quiz"
        ogDescription="Get your HubSpot implementation health score and identify priority improvement areas in just 5 minutes."
      />
      
      <AssessmentSchema url={window.location.href} />
      
      <Navbar />
      
      <main className="flex-1 bg-gradient-to-br from-white to-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto mb-10 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">HubSpot Implementation</span> Assessment Quiz
            </h1>
            <p className="text-lg text-gray-700">
              Evaluate your current HubSpot implementation and identify key improvement opportunities
            </p>
          </div>
          
          <Card className="border border-gray-200 rounded-xl overflow-hidden shadow-lg">
            <CardContent className="p-0">
              {/* Quiz Intro */}
              {currentSection === 0 && (
                <AssessmentIntro startQuiz={startQuiz} />
              )}
              
              {/* Quiz Progress */}
              {currentSection >= 1 && currentSection <= 5 && (
                <AssessmentProgress progress={progress} currentSection={currentSection} />
              )}
              
              {/* Quiz Questions */}
              {currentSection >= 1 && currentSection <= 5 && (
                <QuizSection 
                  title={quizSections[currentSection - 1]?.title}
                  questions={quizSections[currentSection - 1]?.questions}
                  answers={answers}
                  onAnswer={handleAnswer}
                />
              )}
              
              {/* Quiz Results */}
              {currentSection === 6 && (
                <QuizResults
                  overallScore={overallScore}
                  scores={scores}
                  sectionTitles={sectionTitles}
                  priorities={priorities}
                  rescuePlan={rescuePlan}
                  onEmailResults={handleEmailResults}
                />
              )}
              
              {/* Quiz Navigation */}
              {currentSection >= 1 && currentSection <= 5 && (
                <QuizNavigation 
                  currentSection={currentSection}
                  prevSection={prevSection}
                  nextSection={nextSection}
                />
              )}
              
              {/* Email Modal */}
              <EmailModal 
                isOpen={isEmailModalOpen}
                onClose={() => setIsEmailModalOpen(false)}
                onSend={handleSendResults}
              />
            </CardContent>
          </Card>
        </div>
        
        <CTABanner />
      </main>
      
      <Footer />
    </div>
  );
};

export default HubSpotAssessment;
