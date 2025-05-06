
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  coverImage: string;
  content: string;
  tags?: string[]; // Adding tags as an optional property
}
