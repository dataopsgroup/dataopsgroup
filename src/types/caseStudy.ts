
export interface CaseStudyData {
  title: string;
  industry: string;
  revenue: string;
  timeline: string;
  metrics: {
    primary: { value: string; label: string };
    secondary: { value: string; label: string }[];
  };
  problems: string[];
  solutions: string[];
  resultsTimeline: {
    month: string;
    title: string;
    description: string;
    metric: string;
  }[];
}
