
import { useState } from 'react';
import { CalculatorInputs, CalculatorResults } from '@/components/calculator/types';

export const useCalculatorState = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    annualRevenue: '',
    employeeCount: '',
    avgSalary: '',
    dataQualityIssueTime: '25',
    customerChurnRate: '5',
    marketingBudget: '',
    duplicateDataRate: '15',
    complianceViolations: '0'
  });

  const [results, setResults] = useState<CalculatorResults>({
    totalAnnualCost: 0,
    productivityLoss: 0,
    lostRevenue: 0,
    marketingWaste: 0,
    complianceCosts: 0,
    breakdown: []
  });

  const [showResults, setShowResults] = useState(false);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const calculateCosts = () => {
    const revenue = parseFloat(inputs.annualRevenue) || 0;
    const employees = parseFloat(inputs.employeeCount) || 0;
    const salary = parseFloat(inputs.avgSalary) || 0;
    const timeWasted = parseFloat(inputs.dataQualityIssueTime) / 100;
    const churnRate = parseFloat(inputs.customerChurnRate) / 100;
    const marketing = parseFloat(inputs.marketingBudget) || 0;
    const duplicateRate = parseFloat(inputs.duplicateDataRate) / 100;
    const violations = parseFloat(inputs.complianceViolations) || 0;

    // Productivity loss calculation
    const totalSalaryCost = employees * salary;
    const productivityLoss = totalSalaryCost * timeWasted;

    // Lost revenue from customer churn due to bad data
    const lostRevenue = revenue * (churnRate * 0.3); // 30% of churn attributed to data issues

    // Marketing waste from duplicate/bad data
    const marketingWaste = marketing * duplicateRate;

    // Compliance costs ($50k per violation average)
    const complianceCosts = violations * 50000;

    const totalCost = productivityLoss + lostRevenue + marketingWaste + complianceCosts;

    const breakdown = [
      { category: 'Employee Productivity Loss', amount: productivityLoss, percentage: (productivityLoss / totalCost) * 100 },
      { category: 'Lost Revenue (Churn)', amount: lostRevenue, percentage: (lostRevenue / totalCost) * 100 },
      { category: 'Marketing Waste', amount: marketingWaste, percentage: (marketingWaste / totalCost) * 100 },
      { category: 'Compliance Violations', amount: complianceCosts, percentage: (complianceCosts / totalCost) * 100 }
    ].filter(item => item.amount > 0);

    setResults({
      totalAnnualCost: totalCost,
      productivityLoss,
      lostRevenue,
      marketingWaste,
      complianceCosts,
      breakdown
    });

    setShowResults(true);
  };

  const handleInputChange = (field: string, value: string) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const resetCalculator = () => {
    setInputs({
      annualRevenue: '',
      employeeCount: '',
      avgSalary: '',
      dataQualityIssueTime: '25',
      customerChurnRate: '5',
      marketingBudget: '',
      duplicateDataRate: '15',
      complianceViolations: '0'
    });
    setShowResults(false);
  };

  return {
    inputs,
    results,
    showResults,
    formatCurrency,
    calculateCosts,
    handleInputChange,
    resetCalculator
  };
};
