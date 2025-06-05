
import React from 'react';

const UnderstandingExpertsSection: React.FC = () => {
  return (
    <section id="understanding-experts" className="prose prose-lg max-w-none" tabIndex={-1}>
      <h2 className="text-2xl font-bold mb-6">Understanding HubSpot Experts vs. Agencies: What You Really Need</h2>
      
      <p className="lead text-xl text-gray-700 mb-6">
        The HubSpot partner directory lists thousands of agencies, but most businesses need expertise, not overhead. 
        Understanding the difference could save you 50% on implementation costs while delivering better results.
      </p>
      
      <h3>The Agency Model: When Size Becomes a Liability</h3>
      
      <p>
        Most HubSpot agencies follow a standard model: junior staff handle implementation while senior partners 
        manage client relationships. This creates several challenges:
      </p>
      
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 my-6">
        <h4 className="text-lg font-semibold text-red-800 mb-3">❌ Common Agency Problems</h4>
        <ul className="text-red-700 space-y-2">
          <li><strong>Knowledge Transfer Issues:</strong> Junior implementers lack the experience to handle complex integrations</li>
          <li><strong>Template Approaches:</strong> One-size-fits-all implementations that don't match your business model</li>
          <li><strong>High Overhead Costs:</strong> You pay for office space, management layers, and business development</li>
          <li><strong>Account Churn:</strong> Your project manager changes every 6-12 months</li>
          <li><strong>Limited Availability:</strong> Senior expertise is spread thin across many clients</li>
        </ul>
      </div>
      
      <h3>The Expert Model: Direct Access to Experience</h3>
      
      <p>
        Independent HubSpot experts and small specialized teams offer a different value proposition:
      </p>
      
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 my-6">
        <h4 className="text-lg font-semibold text-green-800 mb-3">✅ Expert Advantages</h4>
        <ul className="text-green-700 space-y-2">
          <li><strong>Direct Senior-Level Work:</strong> The person planning your strategy also implements it</li>
          <li><strong>Specialized Deep Knowledge:</strong> Experts often focus on specific industries or use cases</li>
          <li><strong>Cost Efficiency:</strong> 30-50% lower costs due to reduced overhead</li>
          <li><strong>Relationship Continuity:</strong> Work directly with the same expert throughout your engagement</li>
          <li><strong>Flexibility:</strong> Easier to scale engagement up or down based on needs</li>
        </ul>
      </div>
      
      <h3>The Hybrid Approach: Boutique Specialized Teams</h3>
      
      <p>
        The sweet spot for many businesses is a small, specialized team (2-5 experts) that combines 
        the benefits of both models:
      </p>
      
      <ul>
        <li><strong>Complementary Skills:</strong> Technical implementation, strategic consulting, and creative expertise</li>
        <li><strong>Backup Coverage:</strong> Multiple experts familiar with your account</li>
        <li><strong>Diverse Perspectives:</strong> Different approaches to problem-solving</li>
        <li><strong>Scalable Resources:</strong> Can handle larger projects without junior staff</li>
      </ul>
      
      <h3>When to Choose Each Option</h3>
      
      <div className="grid md:grid-cols-3 gap-6 my-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-3">🏢 Large Agency</h4>
          <p className="text-sm mb-3"><strong>Choose when:</strong></p>
          <ul className="text-sm space-y-1">
            <li>• Enterprise-level complexity</li>
            <li>• Need ongoing managed services</li>
            <li>• Require 24/7 support coverage</li>
            <li>• Internal procurement requires agency relationships</li>
          </ul>
          <p className="text-sm mt-3 text-gray-600"><strong>Investment:</strong> $15,000-$50,000+ setup</p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-3">👤 Independent Expert</h4>
          <p className="text-sm mb-3"><strong>Choose when:</strong></p>
          <ul className="text-sm space-y-1">
            <li>• Clear, defined project scope</li>
            <li>• Budget constraints are important</li>
            <li>• Need specialized expertise</li>
            <li>• Prefer direct relationships</li>
          </ul>
          <p className="text-sm mt-3 text-gray-600"><strong>Investment:</strong> $5,000-$20,000 setup</p>
        </div>
        
        <div className="bg-gray-50 p-6 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-3">🎯 Boutique Team</h4>
          <p className="text-sm mb-3"><strong>Choose when:</strong></p>
          <ul className="text-sm space-y-1">
            <li>• Complex multi-hub implementations</li>
            <li>• Need ongoing strategic support</li>
            <li>• Want expert-level work with backup</li>
            <li>• Value long-term partnerships</li>
          </ul>
          <p className="text-sm mt-3 text-gray-600"><strong>Investment:</strong> $8,000-$30,000 setup</p>
        </div>
      </div>
      
      <h3>Key Questions to Ask Yourself</h3>
      
      <p>Before evaluating specific experts or agencies, clarify your own needs:</p>
      
      <ol>
        <li><strong>Complexity Level:</strong> Is this a straightforward implementation or do you have unique requirements?</li>
        <li><strong>Timeline Urgency:</strong> Do you need results in 30 days or can you invest in a 6-month strategic build?</li>
        <li><strong>Internal Capabilities:</strong> What can your team handle vs. what needs external expertise?</li>
        <li><strong>Budget Reality:</strong> What's your total budget for both implementation and ongoing optimization?</li>
        <li><strong>Success Metrics:</strong> How will you measure whether the engagement was successful?</li>
      </ol>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-8">
        <h4 className="text-lg font-semibold text-blue-800 mb-3">💡 Pro Tip</h4>
        <p className="text-blue-700">
          The best HubSpot experts often come from agency backgrounds but went independent to focus on 
          client results rather than business development. Look for experts with 5+ years of HubSpot 
          experience who can show you specific results they've delivered.
        </p>
      </div>
    </section>
  );
};

export default UnderstandingExpertsSection;
