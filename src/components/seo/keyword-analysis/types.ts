
export interface KeywordData {
  keyword: string;
  volume: number;
  difficulty: number;
  position: number;
  change: number;
  url: string;
  status: 'ranking' | 'improving' | 'declining' | 'opportunity';
}
