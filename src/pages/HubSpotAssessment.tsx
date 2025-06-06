import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Card, CardContent } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
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

// The Google Apps Script URL for sending emails
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxvtEP0HZXsIfoKiMGXebjEiIHx_KqWor6_nIxFluCijJCubHEFJl8RxGf4u8zZUPwC/exec';

// HubSpot form submission details
const HUBSPOT_PORTAL_ID = "21794360";
const HUBSPOT_FORM_ID = "534a62b0-3ed1-47ac-aaef-8ca4efa5eec0";

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
  const navigate = useNavigate();

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

  // Format priority areas for submission
  const formatPriorityAreas = () => {
    return priorities.map(p => p.title.replace(' Improvement', ''));
  };

  // Send results via email
  const handleSendResults = async (email: string, name: string, company: string) => {
    try {
      // First submit to HubSpot if portal ID and form ID are valid
      if (HUBSPOT_PORTAL_ID && HUBSPOT_FORM_ID) {
        const hubspotData = {
          fields: [
            { name: "email", value: email },
            { name: "firstname", value: name.split(' ')[0] },
            { name: "lastname", value: name.split(' ').length > 1 ? name.split(' ').slice(1).join(' ') : '' },
            { name: "company", value: company },
            { name: "hubspot_implementation_score", value: overallScore.toString() },
            { name: "hubspot_adoption_score", value: scores.section1.toString() },
            { name: "hubspot_data_quality_score", value: scores.section2.toString() },
            { name: "hubspot_process_integration_score", value: scores.section3.toString() },
            { name: "hubspot_reporting_analytics_score", value: scores.section4.toString() },
            { name: "hubspot_roi_value_score", value: scores.section5.toString() },
            { name: "hubspot_implementation_health", value: scoreLabel },
            { name: "hubspot_priority_areas", value: formatPriorityAreas().join("\n") }
          ],
          context: {
            pageUri: window.location.href,
            pageName: document.title
          }
        };

        await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_ID}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(hubspotData)
        });
      }

      // Now send email using Google Apps Script
      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          name,
          company,
          scores,
          overallScore,
          scoreLabel,
          priorityAreas: formatPriorityAreas()
        })
      });

      const data = await response.json();

      if (!data.success) {
        throw new Error(data.message || 'Error sending email');
      }

      // Close modal
      setIsEmailModalOpen(false);
      
      // Show success toast
      toast.success('Your assessment results have been sent');
      
      // Redirect to thank you page
      navigate('/hubspot-assessment-results');
    } catch (error) {
      console.error('Error sending assessment results:', error);
      throw error; // Let the EmailModal component handle the error
    }
  };

  // Extract section titles for the results page
  const sectionTitles = quizSections.map(section => 
    section.title.replace(" Assessment", "")
  );

  return (
    <div className="min-h-screen flex flex-col">
      <MetaHead
        title="Free DataOps Maturity Assessment - 10-Minute Data Operations Audit"
        description="Take our free 10-minute DataOps assessment to identify gaps in your data operations. Get personalized recommendations to improve data quality and team efficiency."
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
              <span className="gradient-text">HubSpot Implementation</span><br />
              Assessment Quiz
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
