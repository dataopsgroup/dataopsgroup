
export interface FAQItem {
  question: string;
  answer: string;
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
