
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category?: string;
  coverImage: string;
  featuredImage?: string;
  tags?: string[];
}
