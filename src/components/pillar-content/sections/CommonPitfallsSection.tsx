
import React from 'react';
import { KeyInsightCallout, ExpertTip, WarningBox, ActionChecklist } from '../VisualCallouts';

const CommonPitfallsSection: React.FC = () => {
  return (
    <section id="common-pitfalls" className="prose prose-lg max-w-none" tabIndex={-1}>
      <h2 className="text-2xl font-bold mb-6">Common Pitfalls When Hiring HubSpot Experts</h2>
      
      <p className="lead text-xl text-gray-700 mb-6">
        Learning from common mistakes can save you significant time, money, and frustration. These pitfalls represent the most frequent issues businesses encounter when selecting and working with HubSpot experts.
      </p>
      
      <h3>The Safety Illusion</h3>
      
      <p>
        One of the most costly mistakes businesses make is defaulting to choosing large agencies based on perceived safety rather than demonstrated expertise. This often stems from the outdated thinking that "nobody ever got fired for buying IBM," but in today's results-driven environment, this approach frequently backfires.
      </p>
      
      <WarningBox>
        The reality check you need is simple: ask specifically whether the people you're meeting with during the sales process 
        will be directly involved in your implementation. Too often, businesses are impressed by senior consultants during presentations, 
        only to discover their actual work will be handled by junior team members with limited experience.
      </WarningBox>
      
      <p>
        Focus on evaluating the actual implementers rather than the sales team. The person configuring your workflows and building your integrations matters far more than the person who sold you the project.
      </p>
      
      <h3>Hidden Delivery Models</h3>
      
      <p>
        Hidden delivery models create another significant risk that many businesses discover too late. Some agencies present themselves as having comprehensive in-house expertise while actually outsourcing HubSpot work to subcontractors or offshore teams.
      </p>
      
      <KeyInsightCallout title="Due Diligence Questions">
        <p>
          Ask whether all work will be performed by direct employees and where those employees are located. 
          Request to meet all team members who will be directly involved in your implementation before signing any agreement.
        </p>
      </KeyInsightCallout>
      
      <p>
        This isn't necessarily problematic if disclosed upfront, but it becomes an issue when it's hidden. Quality control becomes much more complex when multiple parties are involved in delivery, and communication can suffer when there are layers between you and the people doing the actual work.
      </p>
      
      <h3>Misalignment of Expectations</h3>
      
      <p>
        Misalignment often occurs when businesses and experts haven't clearly defined success criteria and project scope. Assuming the expert understands unstated requirements leads to disappointment when the delivered solution doesn't match your vision.
      </p>
      
      <ActionChecklist 
        title="Expectation Alignment Checklist"
        items={[
          "Document detailed functional requirements and deliverables",
          "Define performance expectations and success metrics",
          "Establish clear timeline assumptions and milestones",
          "Specify communication protocols and reporting frequency",
          "Outline change management processes and approval procedures",
          "Set realistic expectations for internal team involvement"
        ]}
      />
      
      <ExpertTip>
        Document detailed expectations and deliverables before starting work. This includes not just functional requirements, 
        but also performance expectations, timeline assumptions, and success metrics.
      </ExpertTip>
      
      <h3>Choosing Based on Price Alone</h3>
      
      <p>
        Choosing based on price alone represents a classic case of being penny-wise and pound-foolish. The lowest-cost option often becomes the most expensive when you factor in rework, extended timelines, and missed opportunities.
      </p>
      
      <p>
        Balance cost considerations with experience and proven results. A more expensive expert who delivers faster implementation and better long-term results typically provides superior value to a cheaper option that requires extensive rework or delivers suboptimal configuration.
      </p>
      
      <WarningBox>
        Remember that the true cost of a poor implementation includes not just the immediate financial impact, 
        but also the opportunity cost of delayed results and the potential damage to team morale and confidence in the platform.
      </WarningBox>
      
      <h3>Insufficient Internal Commitment</h3>
      
      <p>
        Insufficient internal commitment undermines even the best expert's efforts. Not allocating enough internal resources to support implementation virtually guarantees problems. Your expert needs input, feedback, and collaboration from your team throughout the process.
      </p>
      
      <KeyInsightCallout title="Internal Resource Requirements">
        <p>
          Ensure dedicated internal stakeholders have allocated time for the project rather than trying to fit it around their existing responsibilities. 
          HubSpot implementation is not something that happens to your business—it requires active participation to be successful.
        </p>
      </KeyInsightCallout>
      
      <h3>Skipping Due Diligence</h3>
      
      <p>
        Skipping due diligence might seem like a time-saver, but it frequently leads to expensive mistakes. Failing to thoroughly check references and past work means you're making decisions based on presentations rather than proven performance.
      </p>
      
      <ActionChecklist 
        title="Due Diligence Process"
        items={[
          "Speak with multiple recent client references",
          "Review detailed case studies and project outcomes",
          "Ask specific questions about project timeline and budget performance",
          "Inquire about communication effectiveness and problem-solving ability",
          "Verify certifications and technical competencies",
          "Confirm whether they would hire the expert again"
        ]}
      />
      
      <h3>Scope Creep and Change Management</h3>
      
      <p>
        Poorly managed scope changes can derail even well-planned projects. Without clear processes for evaluating and approving changes, projects can quickly exceed budgets and timelines while delivering unclear value.
      </p>
      
      <ExpertTip>
        Establish clear change management processes upfront, including how scope changes will be evaluated, 
        approved, and priced. This protects both you and your expert from project scope expanding beyond what's manageable.
      </ExpertTip>
      
      <h3>Learning from Others' Mistakes</h3>
      
      <p>
        The key to avoiding these pitfalls is maintaining focus on outcomes rather than process, asking direct questions about delivery models and team composition, and investing adequate time in evaluation rather than rushing to a decision based on initial impressions.
      </p>
      
      <p>
        Remember that the goal is finding an expert who can deliver measurable business results, not just technical functionality. The extra time invested in thorough evaluation pays for itself through better decision-making and more successful implementations.
      </p>
    </section>
  );
};

export default CommonPitfallsSection;
