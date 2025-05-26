
import { mockSearchData } from './mockData';

export const useGSCMetrics = () => {
  // Calculate total metrics
  const totalImpressions = mockSearchData.reduce((sum, day) => sum + day.impressions, 0);
  const totalClicks = mockSearchData.reduce((sum, day) => sum + day.clicks, 0);
  const averageCTR = (totalClicks / totalImpressions * 100).toFixed(1);
  const averagePosition = (mockSearchData.reduce((sum, day) => sum + day.position, 0) / mockSearchData.length).toFixed(1);

  // Calculate change percentages (comparing first half to second half of data)
  const midPoint = Math.floor(mockSearchData.length / 2);
  const firstHalfImpressions = mockSearchData.slice(0, midPoint).reduce((sum, day) => sum + day.impressions, 0);
  const secondHalfImpressions = mockSearchData.slice(midPoint).reduce((sum, day) => sum + day.impressions, 0);
  const impressionsChange = ((secondHalfImpressions - firstHalfImpressions) / firstHalfImpressions * 100).toFixed(1);
  
  const firstHalfClicks = mockSearchData.slice(0, midPoint).reduce((sum, day) => sum + day.clicks, 0);
  const secondHalfClicks = mockSearchData.slice(midPoint).reduce((sum, day) => sum + day.clicks, 0);
  const clicksChange = ((secondHalfClicks - firstHalfClicks) / firstHalfClicks * 100).toFixed(1);

  const firstHalfAvgPos = mockSearchData.slice(0, midPoint).reduce((sum, day) => sum + day.position, 0) / midPoint;
  const secondHalfAvgPos = mockSearchData.slice(midPoint).reduce((sum, day) => sum + day.position, 0) / (mockSearchData.length - midPoint);
  // For position, lower is better so we invert the change calculation
  const positionChange = ((firstHalfAvgPos - secondHalfAvgPos) / firstHalfAvgPos * 100).toFixed(1);

  return {
    totalImpressions,
    totalClicks,
    averageCTR,
    averagePosition,
    impressionsChange,
    clicksChange,
    positionChange,
  };
};

// Custom formatter for the chart tooltip
export const formatTooltip = (value: number, name: string) => {
  if (name === 'position') {
    return [`${value.toFixed(1)}`, 'Avg. Position'];
  }
  if (name === 'ctr') {
    return [`${(value).toFixed(1)}%`, 'CTR'];
  }
  return [value, name.charAt(0).toUpperCase() + name.slice(1)];
};
