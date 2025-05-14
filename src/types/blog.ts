
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
  modifiedDate?: string; // Date when the post was last modified
  wordCount?: number; // Number of words in the article
  readingTime?: number; // Estimated reading time in minutes
  url?: string; // Full URL to the blog post
  relatedPosts?: string[]; // IDs of related posts
  isSponsored?: boolean; // Whether the post is sponsored content
  isAccessible?: boolean; // Whether the post includes accessibility features
}
