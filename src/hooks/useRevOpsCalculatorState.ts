
import { useState } from 'react';
import { RevOpsCalculatorInputs, RevOpsCalculatorResults } from '@/components/calculator/revops-types';

const initialInputs: RevOpsCalculatorInputs = {
  annualRevenue: '',
  salesTeamSize: '',
  marketingTeamSize: '',
  avgDealSize: '',
  salesCycleLength: '',
  leadConversionRate: 5,
  salesConversionRate: 20,
  avgSalaryRevOps: '',
  currentRevOpsInvestment: '',
  dataQualityIssueTime: 30,
  manualProcessTime: 40,
  reportingTime: '20'
};

const initialResults: RevOpsCalculatorResults = {
  currentRevOpsROI: 0,
  projectedRevOpsROI: 0,
  revenueGain: 0,
  efficiencyGain: 0,
  costSavings: 0,
  totalROI: 0,
  paybackPeriod: 0,
  breakdown: []
};

export const useRevOpsCalculatorState = () => {
  const [inputs, setInputs] = useState<RevOpsCalculatorInputs>(initialInputs);
  const [results, setResults] = useState<RevOpsCalculatorResults>(initialResults);
  const [showResults, setShowResults] = useState(false);

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const formatPercentage = (value: number): string => {
    return `${value.toFixed(1)}%`;
  };

  const calculateROI = () => {
    const revenue = parseFloat(inputs.annualRevenue) || 0;
    const salesTeam = parseFloat(inputs.salesTeamSize) || 0;
    const marketingTeam = parseFloat(inputs.marketingTeamSize) || 0;
    const dealSize = parseFloat(inputs.avgDealSize) || 0;
    const cycleLength = parseFloat(inputs.salesCycleLength) || 0;
    const leadConversion = inputs.leadConversionRate / 100;
    const salesConversion = inputs.salesConversionRate / 100;
    const revOpsSalary = parseFloat(inputs.avgSalaryRevOps) || 0;
    const currentInvestment = parseFloat(inputs.currentRevOpsInvestment) || 0;
    const dataIssueTime = inputs.dataQualityIssueTime / 100;
    const manualTime = inputs.manualProcessTime / 100;
    const reportingHours = parseFloat(inputs.reportingTime) || 0;

    // Calculate current state inefficiencies
    const totalTeamCost = (salesTeam + marketingTeam) * 75000; // Average salary
    const productivityLoss = totalTeamCost * (dataIssueTime + manualTime * 0.5);
    
    // Calculate revenue impact from improved processes
    const currentDealsPerYear = revenue / dealSize;
    const improvedLeadConversion = Math.min(leadConversion * 1.25, 0.15); // 25% improvement cap at 15%
    const improvedSalesConversion = Math.min(salesConversion * 1.20, 0.35); // 20% improvement cap at 35%
    const reducedCycleLength = cycleLength * 0.85; // 15% reduction in cycle time
    
    // Revenue gains from RevOps optimization
    const conversionImprovementRevenue = revenue * 0.15; // Conservative 15% revenue lift
    const cycleTimeImprovement = revenue * 0.10; // 10% from faster cycles
    const totalRevenueGain = conversionImprovementRevenue + cycleTimeImprovement;
    
    // Cost savings from efficiency
    const automationSavings = productivityLoss * 0.6; // 60% of manual work automated
    const reportingSavings = (reportingHours * 52 * 100) * (salesTeam + marketingTeam); // $100/hour saved
    const totalCostSavings = automationSavings + reportingSavings;
    
    // RevOps investment (typical implementation cost)
    const revOpsImplementationCost = Math.max(currentInvestment, 150000); // Minimum realistic investment
    const annualRevOpsMaintenanceCost = revOpsImplementationCost * 0.2; // 20% annual maintenance
    
    // ROI calculations
    const totalBenefits = totalRevenueGain + totalCostSavings;
    const roiPercentage = ((totalBenefits - annualRevOpsMaintenanceCost) / revOpsImplementationCost) * 100;
    const paybackMonths = revOpsImplementationCost / (totalBenefits / 12);
    
    // Efficiency improvements
    const efficiencyImprovement = ((dataIssueTime + manualTime) * 0.6) * 100; // % efficiency gain
    
    const breakdown = [
      { 
        category: 'Revenue Growth', 
        amount: totalRevenueGain, 
        percentage: (totalRevenueGain / totalBenefits) * 100,
        description: 'From improved conversion rates and faster sales cycles'
      },
      { 
        category: 'Process Automation Savings', 
        amount: automationSavings, 
        percentage: (automationSavings / totalBenefits) * 100,
        description: 'Reduced manual work and data quality issues'
      },
      { 
        category: 'Reporting Efficiency', 
        amount: reportingSavings, 
        percentage: (reportingSavings / totalBenefits) * 100,
        description: 'Automated reporting and dashboard creation'
      }
    ].filter(item => item.amount > 0);

    setResults({
      currentRevOpsROI: roiPercentage < 100 ? 0 : roiPercentage - 100,
      projectedRevOpsROI: roiPercentage,
      revenueGain: totalRevenueGain,
      efficiencyGain: efficiencyImprovement,
      costSavings: totalCostSavings,
      totalROI: totalBenefits,
      paybackPeriod: paybackMonths,
      breakdown
    });

    setShowResults(true);
  };

  const handleInputChange = (field: keyof RevOpsCalculatorInputs, value: string | number) => {
    setInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const resetCalculator = () => {
    setInputs(initialInputs);
    setShowResults(false);
  };

  return {
    inputs,
    results,
    showResults,
    calculateROI,
    handleInputChange,
    resetCalculator,
    formatCurrency,
    formatPercentage
  };
};
