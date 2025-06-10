
import React from 'react';
import { KeyInsightCallout, ExpertTip, WarningBox, ActionChecklist } from '../VisualCallouts';

const BeyondAgencySafetySection: React.FC = () => {
  return (
    <section id="beyond-agency-safety" className="prose prose-lg max-w-none" tabIndex={-1}>
      <h2 className="text-2xl font-bold mb-6">Beyond the Agency Safety Net: Choosing Results Over Size</h2>
      
      <p className="lead text-xl text-gray-700 mb-6">
        The traditional business mindset equates larger teams with lower risk—the modern equivalent of "nobody ever got fired for buying IBM." However, today's competitive landscape rewards outcomes over organizational charts, and this is particularly true in the HubSpot ecosystem.
      </p>
      
      <h3>Why Direct Expertise Delivers Better Results</h3>
      
      <p>
        When you work directly with an experienced HubSpot expert, you get continuity of knowledge throughout your project. The same person who analyzes your business requirements implements your solution, eliminating the knowledge transfer gaps that often occur in larger organizations.
      </p>
      
      <KeyInsightCallout title="The Knowledge Transfer Problem">
        <p>
          In typical agency models, senior consultants conduct discovery and planning, then hand off implementation to junior staff. 
          Critical business context gets lost in translation, leading to technical solutions that don't align with business objectives.
        </p>
      </KeyInsightCallout>
      
      <p>
        Independent experts also tend to have deeper integration experience because they work across more diverse business environments. While agency team members might specialize in one industry or type of implementation, independent consultants typically see a wider variety of challenges and develop more creative solutions as a result.
      </p>
      
      <h3>The Business Context Advantage</h3>
      
      <p>
        There's also the matter of business context. Experienced independent experts understand that technical implementation must align with business processes and goals. They're not just configuring software—they're solving business problems using HubSpot as the tool.
      </p>
      
      <ExpertTip>
        Look for experts who ask about your business model, competitive landscape, and growth objectives before discussing technical requirements. 
        The best implementations start with business strategy, not software features.
      </ExpertTip>
      
      <h3>Critical Questions Beyond Company Size</h3>
      
      <p>
        Instead of asking "How big is your team?" focus on questions that reveal actual capability and experience:
      </p>
      
      <ActionChecklist 
        title="Essential Evaluation Questions"
        items={[
          "Who specifically will handle our HubSpot integrations, and what's their experience level?",
          "How many businesses similar to ours have you helped with HubSpot implementations?",
          "What specific integration challenges have you solved that are similar to our requirements?",
          "How do you measure success, and what results should we expect to see?",
          "Are all team members direct employees, or do you use subcontractors for any work?",
          "Where are your team members located, and will any work be performed offshore?"
        ]}
      />
      
      <p>
        These questions reveal whether someone truly understands how to deliver business value, not just technical functionality.
      </p>
      
      <WarningBox>
        Beware of agencies that can't tell you exactly who will work on your account or that use offshore development teams for complex integrations. 
        Time zone differences and communication barriers often create more problems than they solve.
      </WarningBox>
      
      <h3>Real-World Example: The Integration Expertise Advantage</h3>
      
      <p>
        A mid-sized SaaS company needed HubSpot implementation with integrations to Salesforce, Stripe, Intercom, and custom internal tools. They initially chose a well-known agency based on impressive sales presentations, but the work was assigned to junior developers unfamiliar with the business context.
      </p>
      
      <p>
        After six months and $45,000, they had multiple integration failures and minimal ROI. Data wasn't syncing properly between systems, automated workflows were triggering incorrectly, and the sales team had less visibility into the pipeline than before the implementation.
      </p>
      
      <p>
        They then switched to an independent expert with proven SaaS integration experience. This expert directly assessed their business requirements and technical constraints, implemented working integrations in phases, and delivered positive ROI for $18,000 within four months.
      </p>
      
      <KeyInsightCallout title="The Key Difference">
        <p>
          The independent expert understood both the technical requirements and business implications of each integration. 
          Instead of just connecting systems, they optimized data flow to support specific business processes and reporting needs.
        </p>
      </KeyInsightCallout>
      
      <h3>When Agencies Make Sense</h3>
      
      <p>
        Large agencies do have their place, particularly for enterprise implementations requiring:
      </p>
      
      <ul>
        <li><strong>24/7 Support Coverage:</strong> Multiple time zones and guaranteed response times</li>
        <li><strong>Massive Scale Projects:</strong> Implementations requiring 10+ full-time resources</li>
        <li><strong>Compliance Requirements:</strong> Industries requiring specific certifications or audit trails</li>
        <li><strong>Long-term Managed Services:</strong> Ongoing management of complex, multi-hub implementations</li>
      </ul>
      
      <ExpertTip>
        Even when working with agencies, insist on direct access to the senior experts who will actually implement your solution. 
        Don't accept a model where you only interact with account managers while junior staff handle the technical work.
      </ExpertTip>
      
      <h3>The Cost-Benefit Reality</h3>
      
      <p>
        Independent experts typically charge 30-50% less than agencies for equivalent work while often delivering faster implementation timelines. The savings come from reduced overhead, not reduced quality. You're paying for expertise and results, not conference rooms and account management layers.
      </p>
      
      <p>
        More importantly, independent experts have skin in the game. Their reputation depends entirely on client success, creating stronger incentives for delivering results rather than just completing deliverables.
      </p>
    </section>
  );
};

export default BeyondAgencySafetySection;
