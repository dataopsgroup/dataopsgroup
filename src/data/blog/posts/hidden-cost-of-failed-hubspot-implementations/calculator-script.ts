
export const calculatorScript = `
  document.addEventListener('DOMContentLoaded', function() {
    // Update data quality display
    const dataQualitySlider = document.getElementById('data-quality');
    const dataQualityDisplay = document.getElementById('data-quality-display');
    
    if (dataQualitySlider && dataQualityDisplay) {
      dataQualitySlider.addEventListener('input', function() {
        dataQualityDisplay.textContent = this.value;
      });
    }
    
    // Calculate button click handler
    const calculateBtn = document.getElementById('calculate-btn');
    if (calculateBtn) {
      calculateBtn.addEventListener('click', function() {
        // Get all inputs
        const annualRevenue = parseFloat(document.getElementById('annual-revenue').value);
        const teamSize = parseInt(document.getElementById('team-size').value);
        const averageSalary = parseFloat(document.getElementById('average-salary').value);
        const hubspotCost = parseFloat(document.getElementById('hubspot-plan').value);
        const adoptionRate = parseInt(document.getElementById('adoption-rate').value) / 100;
        const dataQuality = parseInt(document.getElementById('data-quality').value);
        const manualTime = parseInt(document.getElementById('manual-time').value);
        const integrationFactor = parseFloat(document.getElementById('integration-level').value);
        
        // Calculate productivity loss - based on Salesforce Research
        const hourlyRate = averageSalary / 2080; // 40 hours * 52 weeks
        const productivityLoss = Math.round(teamSize * manualTime * hourlyRate * 52);
        
        // Calculate unrealized revenue - based on Forrester TEI study
        const potentialGrowthFactor = 0.13; // 13% growth potential per Forrester
        const currentEffectiveness = adoptionRate * (dataQuality/10) * (1-integrationFactor);
        const revenueLoss = Math.round(annualRevenue * potentialGrowthFactor * (1-currentEffectiveness));
        
        // Calculate data quality costs - Based on IBM Data Quality studies
        const contactCount = Math.min(annualRevenue / 1000, 100000); // Estimate contact database size
        const dataQualityCost = Math.round(contactCount * (10 - dataQuality) * 5); // $5 per problematic record per Experian
        
        // Total hidden costs
        const totalHiddenCost = productivityLoss + revenueLoss + dataQualityCost;
        
        // Potential improvements - based on Nucleus Research efficiency studies
        const productivityGain = Math.round(productivityLoss * 0.75); // 75% of productivity loss can be recovered
        const revenueGain = Math.round(revenueLoss * 0.75); // 75% of revenue loss can be recovered
        const dataSavings = Math.round(dataQualityCost * 0.75); // 75% of data quality costs can be saved
        
        const totalBenefit = productivityGain + revenueGain + dataSavings;
        
        // ROI calculation - based on Gartner implementation rescue costs
        const rescueInvestment = 12000 + (teamSize * 500); // Base cost plus per-user cost
        const implementationRoi = Math.round((totalBenefit / rescueInvestment) * 100);
        const roiMultiple = Math.round(totalBenefit / rescueInvestment);
        
        // Update the results
        document.getElementById('productivity-loss').textContent = '$' + numberWithCommas(productivityLoss);
        document.getElementById('revenue-potential').textContent = '$' + numberWithCommas(revenueLoss);
        document.getElementById('data-quality-cost').textContent = '$' + numberWithCommas(dataQualityCost);
        document.getElementById('total-hidden-cost').textContent = '$' + numberWithCommas(totalHiddenCost);
        
        document.getElementById('productivity-gain').textContent = '$' + numberWithCommas(productivityGain);
        document.getElementById('revenue-gain').textContent = '$' + numberWithCommas(revenueGain);
        document.getElementById('data-savings').textContent = '$' + numberWithCommas(dataSavings);
        document.getElementById('implementation-roi').textContent = implementationRoi + '%';
        
        document.getElementById('total-benefit').textContent = '$' + numberWithCommas(totalBenefit);
        document.getElementById('roi-multiple').textContent = roiMultiple + 'x';
        
        // Show the results
        document.getElementById('results').style.display = 'block';
        
        // Scroll to results
        document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
      });
    }
    
    // Helper function for formatting numbers with commas
    function numberWithCommas(x) {
      return x.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ",");
    }
  });
`;
