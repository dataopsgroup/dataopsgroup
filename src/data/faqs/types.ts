
export interface FAQItem {
  question: string;
  answer: string;
  keywords?: string[]; // New optional field for SEO keywords
  relatedLink?: {
    text: string;
    url: string;
    ariaLabel: string;
  };
}

export interface FAQCategory {
  id: string;
  title: string;
  icon: string;
  items: FAQItem[];
}
