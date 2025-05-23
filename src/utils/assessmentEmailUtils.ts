
import { toast } from 'sonner';

// The Google Apps Script URL for sending emails
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxvtEP0HZXsIfoKiMGXebjEiIHx_KqWor6_nIxFluCijJCubHEFJl8RxGf4u8zZUPwC/exec';

// HubSpot form submission details
const HUBSPOT_PORTAL_ID = "21794360";
const HUBSPOT_FORM_ID = "534a62b0-3ed1-47ac-aaef-8ca4efa5eec0";

interface PriorityArea {
  title: string;
}

interface AssessmentResults {
  overallScore: number;
  scoreLabel: string;
  scores: Record<string, number>;
  priorities: PriorityArea[];
}

// Format priority areas for submission
const formatPriorityAreas = (priorities: PriorityArea[]) => {
  return priorities.map(p => p.title.replace(' Improvement', ''));
};

export const sendAssessmentResults = async (
  email: string, 
  name: string, 
  company: string,
  results: AssessmentResults,
  navigate: (path: string) => void
) => {
  const { overallScore, scoreLabel, scores, priorities } = results;

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
          { name: "hubspot_priority_areas", value: formatPriorityAreas(priorities).join("\n") }
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
        priorityAreas: formatPriorityAreas(priorities)
      })
    });

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.message || 'Error sending email');
    }

    // Show success toast
    toast.success('Your assessment results have been sent');
    
    // Redirect to thank you page
    navigate('/hubspot-assessment-results');
  } catch (error) {
    console.error('Error sending assessment results:', error);
    throw error; // Let the EmailModal component handle the error
  }
};
