
export interface CalculatorInputs {
  annualRevenue: string;
  employeeCount: string;
  avgSalary: string;
  dataQualityIssueTime: string;
  customerChurnRate: string;
  marketingBudget: string;
  duplicateDataRate: string;
  complianceViolations: string;
}

export interface BreakdownItem {
  category: string;
  amount: number;
  percentage: number;
}

export interface CalculatorResults {
  totalAnnualCost: number;
  productivityLoss: number;
  lostRevenue: number;
  marketingWaste: number;
  complianceCosts: number;
  breakdown: BreakdownItem[];
}
