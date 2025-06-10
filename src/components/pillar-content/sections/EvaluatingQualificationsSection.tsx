
import React from 'react';
import { KeyInsightCallout, ExpertTip, WarningBox, ActionChecklist } from '../VisualCallouts';

const EvaluatingQualificationsSection: React.FC = () => {
  return (
    <section id="evaluating-qualifications" className="prose prose-lg max-w-none" tabIndex={-1}>
      <h2 className="text-2xl font-bold mb-6">Evaluating HubSpot Expert Qualifications and Integration Experience</h2>
      
      <p className="lead text-xl text-gray-700 mb-6">
        Not all HubSpot professionals offer the same level of expertise, and distinguishing between genuine specialists and generalists can make the difference between a successful implementation and a frustrating experience.
      </p>
      
      <h3>Essential Certification Requirements</h3>
      
      <p>
        Provide a baseline for evaluating candidates, but they're just the starting point. At minimum, qualified HubSpot experts should hold HubSpot Solutions Partner Certification, which demonstrates their commitment to the platform and ongoing education.
      </p>
      
      <KeyInsightCallout title="Certification Hierarchy">
        <p>
          Look for experts with multiple hub certifications and recent completion dates. HubSpot's platform evolves rapidly, 
          and certifications older than 18 months may not reflect current best practices.
        </p>
      </KeyInsightCallout>
      
      <p>
        They should also have certifications specific to the Hubs you're implementing—Marketing Hub, Sales Hub, Service Hub, or CMS Hub certifications show they understand the nuances of each area.
      </p>
      
      <h3>Integration Experience Assessment</h3>
      
      <p>
        Integration experience requires asking specific questions about their hands-on work. Ask to see examples of Zapier automation workflows they've built, and pay attention to their complexity and business logic.
      </p>
      
      <ExpertTip>
        A simple data transfer between two systems is very different from a sophisticated workflow that includes conditional logic, data transformation, and error handling.
      </ExpertTip>
      
      <p>
        For API integration work, ask for case studies that show specific business outcomes, not just technical achievements. Anyone can connect two systems, but did the integration actually solve business problems and improve efficiency?
      </p>
      
      <h3>Experience Benchmarks That Matter</h3>
      
      <p>
        Experience benchmarks go beyond just years in the field. You want someone with at least 3+ years of consistent HubSpot work. But more importantly, look for 15+ complete implementations across different business types.
      </p>
      
      <ActionChecklist 
        title="Qualification Evaluation Checklist"
        items={[
          "HubSpot Solutions Partner Certification (current)",
          "Hub-specific certifications for your implementation",
          "API integration certification for complex connections",
          "15+ complete implementations documented",
          "3+ years consistent HubSpot experience",
          "Industry experience relevant to your business model",
          "Recent certification updates (within 18 months)"
        ]}
      />
      
      <h3>Red Flags to Avoid</h3>
      
      <p>
        Red flags are often easier to spot than positive indicators. Be cautious of experts who can't provide specific examples of integration work, or who speak only in technical terms without connecting their work to business outcomes.
      </p>
      
      <WarningBox>
        If they make unrealistic promises about timeline or results, that's another warning sign. 
        Poor responsiveness during the evaluation process often predicts poor communication during the project.
      </WarningBox>
      
      <p>
        If they seem unfamiliar with recent HubSpot updates or new features, that suggests they're not staying current with the platform's evolution.
      </p>
      
      <h3>Technical Competency Verification</h3>
      
      <p>
        Ask specific technical questions about your integration challenges. How would they handle data synchronization between your CRM and accounting software? What's their approach to handling API rate limits?
      </p>
      
      <p>
        Request to see actual examples of their work—screenshots of complex workflows, documentation of integration architectures, or case studies with specific technical details.
      </p>
      
      <KeyInsightCallout title="The Business Context Test">
        <p>
          The best technical experts understand that technology serves business objectives. They should ask probing questions about your business model, 
          processes, and goals before recommending technical solutions.
        </p>
      </KeyInsightCallout>
      
      <p>
        The goal is finding someone who combines technical competence with business understanding, and who can communicate complex concepts in terms that make sense for your decision-making process.
      </p>
    </section>
  );
};

export default EvaluatingQualificationsSection;
