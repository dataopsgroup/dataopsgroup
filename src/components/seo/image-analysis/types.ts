
export interface ImageIssue {
  url: string;
  page: string;
  issues: string[];
  status: 'error' | 'warning' | 'success';
  fixed?: boolean;
}
