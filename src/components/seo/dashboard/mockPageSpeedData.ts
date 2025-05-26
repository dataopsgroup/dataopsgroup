
import { PageSpeedData } from '@/hooks/usePageSpeedData';

export const mockPageSpeedData: PageSpeedData = {
  performance: 87,
  accessibility: 92,
  bestPractices: 95,
  seo: 98,
  lcp: {
    score: 90,
    value: 2.1,
    unit: 's'
  },
  fid: {
    score: 95,
    value: 18,
    unit: 'ms'
  },
  cls: {
    score: 87,
    value: 0.09
  },
  inp: {
    score: 82,
    value: 120,
    unit: 'ms'
  },
  ttfb: {
    score: 93,
    value: 0.35,
    unit: 's'
  }
};
