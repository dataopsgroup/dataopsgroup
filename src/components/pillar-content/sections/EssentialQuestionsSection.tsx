
import React from 'react';
import { KeyInsightCallout, ExpertTip, ActionChecklist } from '../VisualCallouts';

const EssentialQuestionsSection: React.FC = () => {
  return (
    <section id="essential-questions" className="prose prose-lg max-w-none" tabIndex={-1}>
      <h2 className="text-2xl font-bold mb-6">Essential Questions for Evaluating HubSpot Experts</h2>
      
      <p className="lead text-xl text-gray-700 mb-6">
        The right questions during your evaluation process will reveal whether a candidate truly understands both the technical and business aspects of HubSpot implementation. These questions are designed to go beyond surface-level qualifications and uncover genuine expertise.
      </p>
      
      <h3>Integration and Technical Expertise Questions</h3>
      
      <p>
        Focus on specific experience rather than general capabilities. Start with questions that reveal whether they've actually done the work you need or are just confident they can figure it out.
      </p>
      
      <ActionChecklist 
        title="Technical Expertise Questions"
        items={[
          "What's your experience with [specific integration] that we need, and can you show examples?",
          "How do you approach complex data migration and ensure data integrity?",
          "What's the most complex Zapier workflow you've built?",
          "How do you handle API rate limits and integration performance optimization?",
          "Can you walk me through a challenging integration problem you solved?"
        ]}
      />
      
      <p>
        For automation work, their answer should include systematic approaches, testing procedures, and risk mitigation strategies. Vague responses about "being careful" or "following best practices" aren't sufficient.
      </p>
      
      <KeyInsightCallout title="What to Listen For">
        <p>
          Pay attention to whether they can explain business logic, error handling, and ongoing maintenance considerations, 
          not just the technical setup. This separates experts who've dealt with real-world scaling challenges 
          from those who've only worked on small implementations.
        </p>
      </KeyInsightCallout>
      
      <h3>Business Acumen and Strategic Thinking Questions</h3>
      
      <p>
        These questions reveal whether they understand that technology serves business objectives, not the other way around.
      </p>
      
      <ActionChecklist 
        title="Business Strategy Questions"
        items={[
          "How do you align HubSpot implementation with broader business objectives?",
          "What questions do you ask to understand a client's business before recommending technical approaches?",
          "How do you measure the success of your implementations?",
          "What results have your clients typically seen?",
          "How do you ensure ROI from HubSpot investments?"
        ]}
      />
      
      <ExpertTip>
        Good answers should include specific examples of measuring business impact, not just technical functionality. 
        Look for realistic expectations rather than vague promises about "improved efficiency."
      </ExpertTip>
      
      <h3>Project Management and Process Questions</h3>
      
      <p>
        These help you understand how they'll actually manage your project and handle challenges that inevitably arise.
      </p>
      
      <p>
        "Walk me through your typical implementation process from start to finish" should yield a structured approach with clear milestones, not just "we figure it out as we go."
      </p>
      
      <ActionChecklist 
        title="Process Management Questions"
        items={[
          "What's your typical implementation process from start to finish?",
          "How do you handle scope changes and unexpected challenges?",
          "What's your approach to knowledge transfer and training?",
          "How do you ensure our team can maintain the system after implementation?",
          "What's your communication style and reporting frequency?"
        ]}
      />
      
      <h3>Experience and Qualification Verification</h3>
      
      <p>
        These questions help you understand who's actually doing the work and avoid surprises about delivery models.
      </p>
      
      <KeyInsightCallout title="Team Structure Questions">
        <p>
          "Are all team members who will work on our project direct employees, or do you use subcontractors?" 
          gets to the heart of potential delivery model issues that could affect communication and quality.
        </p>
      </KeyInsightCallout>
      
      <ActionChecklist 
        title="Verification Questions"
        items={[
          "Who specifically will be doing the hands-on integration work?",
          "Will any work be performed offshore or by third parties?",
          "Can I meet all team members involved in our project?",
          "What's the experience level of each person who will touch our project?",
          "How do you handle team member changes during projects?"
        ]}
      />
      
      <h3>Pricing and Value Questions</h3>
      
      <p>
        These help you understand their approach to pricing and value delivery, revealing whether they think beyond the initial project to your long-term success.
      </p>
      
      <ExpertTip>
        "How do you price integration work, and what factors influence your rates?" should reveal transparent methodology 
        rather than arbitrary pricing. Look for experts who can clearly explain their value proposition.
      </ExpertTip>
      
      <ActionChecklist 
        title="Value Assessment Questions"
        items={[
          "How do you price integration work and what factors influence rates?",
          "What ongoing support do you provide after implementation?",
          "How quickly should we expect to see results?",
          "What guarantees or warranties do you provide?",
          "How do you handle cost overruns or scope changes?"
        ]}
      />
      
      <h3>The Follow-Up Strategy</h3>
      
      <p>
        The goal isn't to stump candidates with difficult questions, but to understand their depth of experience, thought process, and approach to solving business problems with HubSpot technology.
      </p>
      
      <p>
        Take detailed notes during interviews and follow up with specific clarifying questions. The best experts will appreciate thorough evaluation and provide detailed, thoughtful responses that demonstrate their expertise and professionalism.
      </p>
    </section>
  );
};

export default EssentialQuestionsSection;
