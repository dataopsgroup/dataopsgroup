
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category: string;
  coverImage?: string;
  featuredImage?: string;
  tags?: string[];
  modifiedDate?: string;
  wordCount?: number;
  readingTime?: number;
  seo?: {
    metaDescription?: string;
    keywords?: string;
    ogTitle?: string;
    ogDescription?: string;
    twitterTitle?: string;
    twitterDescription?: string;
  };
}
