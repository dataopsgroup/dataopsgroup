
import React from 'react';
import { KeyInsightCallout, ExpertTip, ActionChecklist } from '../VisualCallouts';

const MaximizingPartnershipSection: React.FC = () => {
  return (
    <section id="maximizing-partnership" className="prose prose-lg max-w-none" tabIndex={-1}>
      <h2 className="text-2xl font-bold mb-6">Maximizing Your HubSpot Expert Partnership</h2>
      
      <p className="lead text-xl text-gray-700 mb-6">
        Once you've selected your HubSpot expert, the success of your project depends largely on how well you manage the partnership. The implementation phase is collaborative, and your internal preparation and engagement directly impact the outcomes you'll achieve.
      </p>
      
      <h3>Setting Up for Success</h3>
      
      <p>
        Success starts with internal organization and clear communication frameworks. Designate a single project owner as your primary liaison with the expert. This person should have decision-making authority and enough bandwidth to be responsive throughout the implementation.
      </p>
      
      <KeyInsightCallout title="Project Organization">
        <p>
          Having multiple people trying to manage the relationship creates confusion and slows progress. 
          Your designated project owner should have the authority to make decisions and the availability to be responsive.
        </p>
      </KeyInsightCallout>
      
      <p>
        Ensure your key stakeholders have dedicated time for collaboration rather than trying to squeeze it into already packed schedules. HubSpot implementation isn't something that happens around you—it requires active participation from your team.
      </p>
      
      <ActionChecklist 
        title="Internal Preparation Checklist"
        items={[
          "Designate single project owner with decision-making authority",
          "Ensure key stakeholders have dedicated time for collaboration",
          "Prepare all necessary access credentials and permissions",
          "Create shared documentation for tracking progress and decisions",
          "Set realistic expectations for internal team involvement",
          "Establish communication protocols and meeting schedules"
        ]}
      />
      
      <h3>Knowledge Transfer and Training Strategy</h3>
      
      <p>
        Knowledge transfer should be ongoing rather than saved for the end of the project. Schedule training sessions throughout implementation so your team learns the system as it's being built.
      </p>
      
      <ExpertTip>
        This approach helps identify potential issues early and ensures your team understands the reasoning behind configuration decisions, 
        not just how to use the final system.
      </ExpertTip>
      
      <p>
        Record all training sessions for future reference and for team members who might join later. Create role-specific training materials since different team members will use different aspects of HubSpot.
      </p>
      
      <h3>Ongoing Education and Internal Champions</h3>
      
      <p>
        Develop internal documentation that reflects your specific configuration and processes, not just generic HubSpot documentation. This becomes invaluable for onboarding new team members and troubleshooting issues.
      </p>
      
      <ActionChecklist 
        title="Knowledge Transfer Strategy"
        items={[
          "Schedule training sessions throughout implementation",
          "Record all training sessions for future reference",
          "Create role-specific training materials",
          "Develop internal documentation for your specific setup",
          "Identify internal champions for different HubSpot areas",
          "Plan for ongoing education beyond initial implementation"
        ]}
      />
      
      <p>
        Identify internal champions for different aspects of HubSpot—people who will become your go-to experts for marketing automation, sales processes, reporting, and other key areas.
      </p>
      
      <h3>Long-term Success and Optimization Planning</h3>
      
      <p>
        Long-term success extends beyond the initial implementation to ensure sustained value from your investment. Establish baseline metrics before implementation so you can measure actual improvement.
      </p>
      
      <KeyInsightCallout title="Performance Monitoring">
        <p>
          Set up regular performance reviews and optimization sessions with your expert, even after the main implementation is complete. 
          The first year often reveals new opportunities and challenges that weren't apparent during initial planning.
        </p>
      </KeyInsightCallout>
      
      <p>
        Create automated reporting for key success metrics and plan quarterly strategy reviews to identify improvement opportunities. Monitor user adoption and engagement metrics to ensure your team is actually using the system effectively.
      </p>
      
      <h3>Continuous Improvement Framework</h3>
      
      <p>
        Consider retainer arrangements for ongoing optimization, especially during the first year when you'll likely identify new opportunities and challenges that weren't apparent during initial planning.
      </p>
      
      <ExpertTip>
        Develop relationships with HubSpot support and resources for ongoing assistance with platform updates and new features. 
        Create feedback loops for continuous improvement, and establish processes for making configuration changes without breaking existing functionality.
      </ExpertTip>
      
      <ActionChecklist 
        title="Long-term Success Framework"
        items={[
          "Establish baseline metrics before implementation",
          "Set up automated reporting for key success metrics",
          "Plan quarterly strategy reviews and optimization sessions",
          "Monitor user adoption and engagement metrics",
          "Consider retainer arrangements for ongoing optimization",
          "Develop relationships with HubSpot support resources",
          "Create feedback loops for continuous improvement"
        ]}
      />
      
      <h3>The Strategic Partnership Mindset</h3>
      
      <p>
        The most successful HubSpot implementations are those where the expert partnership extends beyond the initial setup to ongoing optimization and strategic development. Your expert should become a trusted advisor who helps you adapt and grow your HubSpot usage as your business evolves.
      </p>
      
      <p>
        Think of your HubSpot expert as an extension of your team rather than just a vendor. The best partnerships involve regular communication, proactive optimization recommendations, and strategic planning for future growth and expansion.
      </p>
    </section>
  );
};

export default MaximizingPartnershipSection;
