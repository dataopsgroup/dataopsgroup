
export interface SectionData {
  id: string;
  title: string;
  content: React.ReactNode;
}

export type SectionId = 
  | 'introduction'
  | 'understanding-experts'
  | 'types-expertise'
  | 'beyond-agency-safety'
  | 'when-need-expert'
  | 'evaluating-qualifications'
  | 'pricing-guide'
  | 'step-by-step-process'
  | 'essential-questions'
  | 'maximizing-partnership'
  | 'success-stories'
  | 'common-pitfalls'
  | 'conclusion';
