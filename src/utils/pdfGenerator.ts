
import { jsPDF } from 'jspdf';

interface AssessmentResults {
  overallScore: number;
  scoreLabel: string;
  scores: Record<string, number>;
  priorities: Array<{
    title: string;
    text: string;
  }>;
}

interface RescuePlan {
  phase1: string[];
  phase2: string[];
  phase3: string[];
}

const addLogo = async (pdf: jsPDF, yPosition: number): Promise<number> => {
  try {
    const logoResponse = await fetch('/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png');
    if (logoResponse.ok) {
      const logoBlob = await logoResponse.blob();
      const logoDataUrl = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.readAsDataURL(logoBlob);
      });
      pdf.addImage(logoDataUrl, 'PNG', 20, yPosition, 50, 15);
    }
  } catch (error) {
    console.warn('Could not load logo for PDF:', error);
  }
  return yPosition + 30;
};

const addHeader = (pdf: jsPDF, yPosition: number, userName: string): number => {
  pdf.setFontSize(24);
  pdf.setFont('helvetica', 'bold');
  pdf.text('HubSpot Implementation Assessment Results', 20, yPosition);
  yPosition += 20;

  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'normal');
  pdf.text(`Assessment for: ${userName}`, 20, yPosition);
  yPosition += 10;
  pdf.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, yPosition);
  return yPosition + 20;
};

const addOverallScore = (pdf: jsPDF, yPosition: number, results: AssessmentResults): number => {
  pdf.setFontSize(18);
  pdf.setFont('helvetica', 'bold');
  pdf.text('Overall Assessment Score', 20, yPosition);
  yPosition += 15;

  pdf.setFontSize(14);
  pdf.setFont('helvetica', 'normal');
  pdf.text(`Your Score: ${results.overallScore}/125 (${results.scoreLabel})`, 20, yPosition);
  return yPosition + 20;
};

const addSectionBreakdown = (pdf: jsPDF, yPosition: number, results: AssessmentResults): number => {
  pdf.setFontSize(16);
  pdf.setFont('helvetica', 'bold');
  pdf.text('Section Breakdown', 20, yPosition);
  yPosition += 15;

  const sectionNames = [
    'Platform Adoption & Usage',
    'Data Quality & Integrity', 
    'Process Integration & Workflows',
    'Reporting & Analytics',
    'ROI & Value Realization'
  ];

  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'normal');
  Object.entries(results.scores).forEach(([key, score], index) => {
    pdf.text(`${sectionNames[index]}: ${score}/25`, 20, yPosition);
    yPosition += 10;
  });

  return yPosition + 15;
};

const addPriorityImprovements = (pdf: jsPDF, yPosition: number, results: AssessmentResults): number => {
  const pageHeight = pdf.internal.pageSize.getHeight();
  const pageWidth = pdf.internal.pageSize.getWidth();

  if (yPosition > pageHeight - 50) {
    pdf.addPage();
    yPosition = 20;
  }

  pdf.setFontSize(16);
  pdf.setFont('helvetica', 'bold');
  pdf.text('Priority Improvement Areas', 20, yPosition);
  yPosition += 15;

  results.priorities.forEach((priority, index) => {
    if (yPosition > pageHeight - 40) {
      pdf.addPage();
      yPosition = 20;
    }

    pdf.setFontSize(14);
    pdf.setFont('helvetica', 'bold');
    pdf.text(`${index + 1}. ${priority.title}`, 20, yPosition);
    yPosition += 10;

    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'normal');
    const lines = pdf.splitTextToSize(priority.text, pageWidth - 40);
    pdf.text(lines, 20, yPosition);
    yPosition += lines.length * 5 + 10;
  });

  return yPosition;
};

const addRescuePlanPhase = (pdf: jsPDF, yPosition: number, title: string, actions: string[]): number => {
  const pageHeight = pdf.internal.pageSize.getHeight();

  if (yPosition > pageHeight - 50) {
    pdf.addPage();
    yPosition = 20;
  }

  pdf.setFontSize(14);
  pdf.setFont('helvetica', 'bold');
  pdf.text(title, 20, yPosition);
  yPosition += 10;

  pdf.setFontSize(11);
  pdf.setFont('helvetica', 'normal');
  actions.forEach(action => {
    if (yPosition > pageHeight - 20) {
      pdf.addPage();
      yPosition = 20;
    }
    pdf.text(`• ${action}`, 25, yPosition);
    yPosition += 8;
  });

  return yPosition + 10;
};

const addRescuePlan = (pdf: jsPDF, yPosition: number, rescuePlan: RescuePlan): number => {
  const pageHeight = pdf.internal.pageSize.getHeight();

  if (yPosition > pageHeight - 50) {
    pdf.addPage();
    yPosition = 20;
  }

  pdf.setFontSize(16);
  pdf.setFont('helvetica', 'bold');
  pdf.text('90-Day Implementation Rescue Plan', 20, yPosition);
  yPosition += 15;

  yPosition = addRescuePlanPhase(pdf, yPosition, 'Days 1-30: Foundation', rescuePlan.phase1);
  yPosition = addRescuePlanPhase(pdf, yPosition, 'Days 31-60: Transformation', rescuePlan.phase2);
  yPosition = addRescuePlanPhase(pdf, yPosition, 'Days 61-90: Optimization', rescuePlan.phase3);

  return yPosition;
};

const addCallToAction = (pdf: jsPDF): void => {
  const pageHeight = pdf.internal.pageSize.getHeight();
  pdf.addPage();
  let yPosition = 20;

  pdf.setFontSize(20);
  pdf.setFont('helvetica', 'bold');
  pdf.text('Ready to Transform Your HubSpot Implementation?', 20, yPosition);
  yPosition += 20;

  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'normal');
  const ctaText = [
    'Your assessment results reveal specific opportunities to unlock the full potential of your',
    'HubSpot investment. Our team of HubSpot experts has helped 150+ companies rescue their',
    'implementations and achieve measurable ROI improvements.',
    '',
    'Next Steps:',
    '• Schedule a free 30-minute consultation to discuss your specific challenges',
    '• Get a customized implementation rescue plan tailored to your business',
    '• Learn how we can help you achieve the ROI you expected from HubSpot',
    '',
    "Don't let another month pass with an underperforming HubSpot implementation.",
    'Contact us today to start your transformation journey.'
  ];

  ctaText.forEach(line => {
    if (line === '') {
      yPosition += 10;
    } else {
      pdf.text(line, 20, yPosition);
      yPosition += 8;
    }
  });

  yPosition += 20;

  // Contact Information
  pdf.setFontSize(14);
  pdf.setFont('helvetica', 'bold');
  pdf.text('Contact DataOps Group', 20, yPosition);
  yPosition += 15;

  pdf.setFontSize(12);
  pdf.setFont('helvetica', 'normal');
  pdf.text('Website: https://dataopsgroup.com', 20, yPosition);
  yPosition += 10;
  pdf.text('Schedule a consultation: https://dataopsgroup.com/contact', 20, yPosition);
  yPosition += 10;
  pdf.text('Email: info@dataopsgroup.com', 20, yPosition);

  // Footer
  pdf.setFontSize(10);
  pdf.setFont('helvetica', 'italic');
  pdf.text('© 2025 DataOps Group. All rights reserved.', 20, pageHeight - 15);
};

export const generateAssessmentPDF = async (
  results: AssessmentResults,
  rescuePlan: RescuePlan,
  userName: string = 'Assessment Participant'
) => {
  const pdf = new jsPDF();
  let yPosition = 20;

  // Add each section sequentially
  yPosition = await addLogo(pdf, yPosition);
  yPosition = addHeader(pdf, yPosition, userName);
  yPosition = addOverallScore(pdf, yPosition, results);
  yPosition = addSectionBreakdown(pdf, yPosition, results);
  yPosition = addPriorityImprovements(pdf, yPosition, results);
  yPosition = addRescuePlan(pdf, yPosition, rescuePlan);
  addCallToAction(pdf);

  return pdf;
};
