
export interface RevOpsCalculatorInputs {
  annualRevenue: string;
  salesTeamSize: string;
  marketingTeamSize: string;
  avgDealSize: string;
  salesCycleLength: string;
  leadConversionRate: number;
  salesConversionRate: number;
  avgSalaryRevOps: string;
  currentRevOpsInvestment: string;
  dataQualityIssueTime: number;
  manualProcessTime: number;
  reportingTime: string;
}

export interface RevOpsBreakdownItem {
  category: string;
  amount: number;
  percentage: number;
  description: string;
}

export interface RevOpsCalculatorResults {
  currentRevOpsROI: number;
  projectedRevOpsROI: number;
  revenueGain: number;
  efficiencyGain: number;
  costSavings: number;
  totalROI: number;
  paybackPeriod: number;
  breakdown: RevOpsBreakdownItem[];
}
