import React from 'react';
import { ArrowRight, CheckCircle, Clock, TrendingUp } from 'lucide-react';
const FinalCTASection = () => {
  return <section className="py-16 px-4 bg-dataops-900 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Transform Your Portfolio<br />Operations in 100 Days</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Benefits */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">What You Get:</h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Complete Portfolio Standardization</h4>
                  <p className="text-gray-300">Unified processes, reporting, and data management across all companies</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">100-Day Implementation Guarantee</h4>
                  <p className="text-gray-300">Full deployment with team training and support included</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <TrendingUp className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Measurable ROI Within 6 Months</h4>
                  <p className="text-gray-300">Track operational improvements and value creation metrics</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Ongoing Portfolio Support</h4>
                  <p className="text-gray-300">Continued optimization and new company onboarding</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - CTA Form */}
          <div className="bg-white text-gray-900 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Start Your PE Operations Assessment
            </h3>
            <p className="text-gray-700 mb-6 text-center">
              Get a personalized analysis of your current operations and a roadmap 
              for HubSpot implementation across your portfolio.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-sm">Hands-on assessment</span>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-blue-600" />
                <span className="text-sm">Personalized recommendations</span>
              </div>
              
              <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-purple-600" />
                <span className="text-sm">ROI projections for your portfolio</span>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <a href="/data-operations-assessment" className="w-full bg-dataops-600 hover:bg-dataops-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
                Take the PE Assessment
                <ArrowRight className="h-5 w-5 ml-2" />
              </a>
              
              <a href="/contact" className="w-full border-2 border-dataops-600 text-dataops-600 hover:bg-dataops-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center">
                Schedule Strategy Call
              </a>
            </div>

            <p className="text-xs text-gray-500 text-center mt-4">
              No sales pressure. Just actionable insights for your portfolio operations.
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default FinalCTASection;