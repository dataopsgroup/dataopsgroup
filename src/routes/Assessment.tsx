
import React from 'react';
import { Link } from 'react-router-dom';
import SemanticLayout from '@/components/layout/SemanticLayout';
import AssessmentIntro from '@/components/assessment/AssessmentIntro';
import QuizSection from '@/components/assessment/QuizSection';
import QuizResults from '@/components/assessment/QuizResults';
import { useQuizStore } from '@/stores/useQuizStore';
import MetaHead from '@/components/seo/MetaHead';

const Assessment = () => {
  const { currentSection, showResults } = useQuizStore();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Quiz",
    "name": "DataOps Maturity Assessment",
    "description": "Free 10-minute assessment to evaluate your data operations maturity and identify improvement opportunities",
    "about": "Data Operations Management",
    "provider": {
      "@type": "Organization",
      "name": "DataOps Group",
      "url": "https://dataopsgroup.com"
    }
  };

  return (
    <SemanticLayout>
      <MetaHead
        title="Free DataOps Maturity Assessment - 10-Minute Data Operations Audit | DataOps Group"
        description="Take our free 10-minute DataOps assessment to identify gaps in your data operations. Get personalized recommendations to improve data quality and team efficiency."
        keywords="dataops assessment, data operations audit, data maturity assessment, hubspot assessment, data quality evaluation"
        canonicalPath="/data-operation-assessment"
        ogType="website"
        ogTitle="Free DataOps Maturity Assessment - Audit Your Data Operations"
        ogDescription="10-minute assessment reveals gaps in your data operations. Get personalized recommendations to improve efficiency and data quality."
        twitterTitle="DataOps Maturity Assessment - Free 10-Minute Audit"
        twitterDescription="Evaluate your data operations maturity. Identify improvement opportunities and get expert recommendations in just 10 minutes."
        structuredData={structuredData}
      />
      
      <div className="min-h-screen bg-gray-50">
        {!showResults && currentSection === 0 && (
          <div className="py-16">
            <div className="container mx-auto px-4 max-w-4xl">
              <AssessmentIntro />
              <div className="mt-8 p-6 bg-white rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold mb-4">Why Take This Assessment?</h3>
                <p className="text-gray-600 mb-4">
                  Many companies struggle with data quality issues that cost them millions annually. Our 
                  <Link to="/insights/crm-cleanup-plan" className="text-dataops-600 hover:text-dataops-800 mx-1">
                    CRM cleanup strategies
                  </Link>
                  and 
                  <Link to="/insights/data-enrichment-strategy" className="text-dataops-600 hover:text-dataops-800 mx-1">
                    data enrichment best practices
                  </Link>
                  can help you avoid these costly mistakes.
                </p>
                <p className="text-gray-600 mb-4">
                  This assessment evaluates your current data operations across multiple dimensions, similar to how we approach
                  <Link to="/insights/customer-segmentation-mistake" className="text-dataops-600 hover:text-dataops-800 mx-1">
                    customer segmentation analysis
                  </Link>
                  and
                  <Link to="/insights/customer-churn-blindspot" className="text-dataops-600 hover:text-dataops-800 mx-1">
                    customer retention tracking
                  </Link>
                  for our clients.
                </p>
                <div className="bg-dataops-50 p-4 rounded-lg">
                  <p className="text-sm text-dataops-800">
                    <strong>Based on your results, you'll receive:</strong> Personalized recommendations, priority improvement areas, 
                    and access to our proven 
                    <Link to="/services/hubspot-implementation" className="text-dataops-600 hover:text-dataops-800 underline">
                      HubSpot implementation services
                    </Link>
                    that have helped companies achieve measurable ROI improvements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {!showResults && currentSection > 0 && <QuizSection />}
        
        {showResults && (
          <div className="py-16">
            <QuizResults />
            <div className="container mx-auto px-4 max-w-4xl mt-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="text-lg font-semibold mb-4">Next Steps</h3>
                <p className="text-gray-600 mb-4">
                  Ready to improve your data operations? Explore our 
                  <Link to="/services" className="text-dataops-600 hover:text-dataops-800 font-medium">
                    consulting services
                  </Link>
                  or learn from our 
                  <Link to="/case-studies" className="text-dataops-600 hover:text-dataops-800 font-medium">
                    client success stories
                  </Link>
                  to see how other companies have transformed their data operations.
                </p>
                <div className="flex gap-4">
                  <Link
                    to="/book"
                    className="bg-dataops-600 text-white px-6 py-3 rounded-lg hover:bg-dataops-700 transition-colors"
                  >
                    Schedule a Consultation
                  </Link>
                  <Link
                    to="/insights"
                    className="border border-dataops-600 text-dataops-600 px-6 py-3 rounded-lg hover:bg-dataops-50 transition-colors"
                  >
                    Read Our Insights
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </SemanticLayout>
  );
};

export default Assessment;
