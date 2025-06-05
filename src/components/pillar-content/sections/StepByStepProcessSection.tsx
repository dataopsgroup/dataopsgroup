import React from 'react';
import { KeyInsightCallout, ExpertTip, ActionChecklist } from '../VisualCallouts';

const StepByStepProcessSection: React.FC = () => {
  return (
    <section id="step-by-step-process" className="prose prose-lg max-w-none" tabIndex={-1}>
      <h2 className="text-2xl font-bold mb-6">Step-by-Step Process to Find and Hire the Perfect HubSpot Expert</h2>
      
      <p className="lead text-xl text-gray-700 mb-6">
        Following a systematic approach to find, evaluate, and select your HubSpot expert will save you time and increase your likelihood of a successful outcome. This process might seem thorough, but it's worth investing the effort upfront rather than dealing with problems later.
      </p>
      
      <h3>Phase 1: Requirements Definition and Planning</h3>
      
      <p>
        Start with getting clear on what you actually need. Document your specific HubSpot goals and how you'll measure success. Identify which Hubs you're implementing or optimizing, and list all existing systems that need integration with HubSpot.
      </p>
      
      <ActionChecklist 
        title="Requirements Definition Checklist"
        items={[
          "Document specific HubSpot goals and success metrics",
          "Identify which Hubs you're implementing",
          "List all existing systems requiring integration",
          "Define timeline and budget constraints",
          "Determine internal resources available for project",
          "Map current technology stack and integration points"
        ]}
      />
      
      <p>
        Don't skip the technical requirements documentation. If you're migrating data, understand the complexity and volume involved. Consider any security, compliance, or performance requirements that might affect the implementation approach.
      </p>
      
      <h3>Phase 2: Expert Research and Discovery</h3>
      
      <p>
        Cast a wide net initially, then narrow based on relevant experience. Start with the HubSpot Solutions Partner Directory, filtering by specialization and location if that matters to you.
      </p>
      
      <KeyInsightCallout title="Research Sources">
        <p>
          <strong>HubSpot Partner Directory:</strong> Official certified partners<br/>
          <strong>Profound.ly:</strong> Specialized HubSpot talent marketplace<br/>
          <strong>LinkedIn:</strong> Search for certified professionals<br/>
          <strong>Industry Referrals:</strong> Recommendations from similar businesses
        </p>
      </KeyInsightCallout>
      
      <p>
        <a href="https://www.profound.ly" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Profound.ly</a> has emerged as a specialized marketplace specifically for HubSpot talent, offering a curated selection of verified experts with detailed profiles showing their specific HubSpot experience, integration capabilities, and client results.
      </p>
      
      <h3>Phase 3: Initial Screening and Shortlisting</h3>
      
      <p>
        Help you identify the most promising candidates without investing too much time in detailed evaluation. Review their websites and case studies, paying attention to businesses similar to yours and projects with comparable complexity.
      </p>
      
      <ExpertTip>
        Check client testimonials, but focus on ones that mention specific business outcomes rather than general satisfaction. 
        Look for evidence of long-term client relationships and ongoing optimization work.
      </ExpertTip>
      
      <p>
        Create a shortlist of 3-5 candidates who seem well-matched to your needs. Ensure some variety in their approaches and backgrounds, and confirm they have availability for your timeline before moving to detailed evaluation.
      </p>
      
      <h3>Phase 4: Detailed Evaluation and Interviews</h3>
      
      <p>
        This is where you really assess fit and capability. Structure your interviews around technical competency, business acumen, and project management approach. Ask specific questions about your integration challenges and how they would approach your unique requirements.
      </p>
      
      <ActionChecklist 
        title="Interview Evaluation Areas"
        items={[
          "Technical competency for your specific requirements",
          "Business acumen and strategic thinking",
          "Project management approach and methodology",
          "Communication style and responsiveness",
          "Change management and training capabilities",
          "Problem-solving approach for unexpected challenges"
        ]}
      />
      
      <p>
        Pay attention to the questions they ask you. Good consultants should be curious about your business model, current processes, and strategic objectives. They should ask about your team's technical capabilities and change management considerations.
      </p>
      
      <h3>Phase 5: Proposal Evaluation and Reference Checks</h3>
      
      <p>
        Get detailed proposals from your finalists and speak with their recent clients. A good proposal should include detailed scope of work, clear timelines with milestones, transparent cost breakdown, and specific deliverables.
      </p>
      
      <KeyInsightCallout title="Reference Check Questions">
        <p>
          Ask about project outcomes and ROI, not just satisfaction. Find out about communication effectiveness, 
          problem-solving ability, and whether the project was completed on time and within budget. 
          Most importantly, ask if they would hire this expert again.
        </p>
      </KeyInsightCallout>
      
      <h3>Phase 6: Contract Negotiation and Project Launch</h3>
      
      <p>
        Finalize the relationship and set expectations for success. Address intellectual property ownership, confidentiality requirements, performance metrics, and payment schedules tied to milestone completion.
      </p>
      
      <p>
        Prepare for project launch by assigning internal team members, providing necessary access and credentials, and establishing communication protocols. The foundation you lay here determines how smoothly the implementation proceeds.
      </p>
      
      <ExpertTip>
        Consider starting with a smaller pilot project or consultation phase to test the working relationship 
        before committing to a full implementation. This reduces risk and builds confidence on both sides.
      </ExpertTip>
    </section>
  );
};

export default StepByStepProcessSection;
