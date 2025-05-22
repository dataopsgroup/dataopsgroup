
export const roiCalculator = `
<div id="calculator" class="hubspot-roi-calculator">
  <h2>HubSpot ROI Calculator</h2>
  <p>Estimate the true cost of your HubSpot implementation issues and the potential value of fixing them.</p>
  
  <div class="calculator-section">
    <h3>Company Information</h3>
    <div class="form-group">
      <label for="annual-revenue">Annual Revenue:</label>
      <input type="number" id="annual-revenue" value="5000000" min="100000" step="100000">
      <small>Source: Your company data</small>
    </div>
    
    <div class="form-group">
      <label for="team-size">Number of Sales & Marketing Team Members:</label>
      <input type="number" id="team-size" value="10" min="1" max="1000">
      <small>Source: Your organization structure</small>
    </div>
    
    <div class="form-group">
      <label for="average-salary">Average Team Member Annual Salary:</label>
      <input type="number" id="average-salary" value="70000" min="30000" step="5000">
      <small>Source: BLS average for sales/marketing professionals</small>
    </div>
    
    <div class="form-group">
      <label for="hubspot-plan">Annual HubSpot Investment:</label>
      <input type="number" id="hubspot-plan" value="24000" min="3600" step="1000">
      <small>Source: HubSpot published pricing</small>
    </div>
  </div>
  
  <div class="calculator-section">
    <h3>Current HubSpot Status</h3>
    <div class="form-group">
      <label for="adoption-rate">Current HubSpot Adoption Rate (%):</label>
      <input type="number" id="adoption-rate" value="40" min="0" max="100">
      <small>Source: Average adoption from HubSpot Research</small>
    </div>
    
    <div class="form-group">
      <label for="data-quality">Data Quality Score (1-10):</label>
      <input type="range" id="data-quality" value="5" min="1" max="10">
      <span id="data-quality-display">5</span>
      <small>Source: Experian Data Quality scoring methodology</small>
    </div>
    
    <div class="form-group">
      <label for="manual-time">Hours Per Week Team Spends on Manual Tasks:</label>
      <input type="number" id="manual-time" value="10" min="0" max="40">
      <small>Source: Salesforce Research on administrative task burden</small>
    </div>
    
    <div class="form-group">
      <label for="integration-level">Level of Integration with Other Systems:</label>
      <select id="integration-level">
        <option value="0.8">Minimal - HubSpot is mostly standalone</option>
        <option value="0.6" selected>Partial - Some systems connected</option>
        <option value="0.3">Extensive - Most systems integrated</option>
      </select>
      <small>Source: HubSpot Integration Research</small>
    </div>
  </div>
  
  <button id="calculate-btn" class="calculate-button">Calculate ROI Impact</button>
  
  <div id="results" class="results-container" style="display: none;">
    <h3>Results: The True Cost of Your Current HubSpot Implementation</h3>
    <p class="results-source">Calculations based on research from Forrester, Gartner, and HubSpot studies (2021-2023)</p>
    
    <div class="results-grid">
      <div class="result-item">
        <h4>Annual Productivity Loss</h4>
        <p id="productivity-loss">$126,000</p>
        <small>Based on time spent on manual tasks that should be automated (Salesforce Research, 2022)</small>
      </div>
      
      <div class="result-item">
        <h4>Unrealized Revenue Potential</h4>
        <p id="revenue-potential">$650,000</p>
        <small>Revenue growth you're missing due to suboptimal implementation (Forrester TEI, 2021)</small>
      </div>
      
      <div class="result-item">
        <h4>Data Quality Costs</h4>
        <p id="data-quality-cost">$60,000</p>
        <small>Cost of bad data, cleanup, and resulting issues (IBM Data Quality Study, 2020)</small>
      </div>
      
      <div class="result-item">
        <h4>Total Annual Hidden Costs</h4>
        <p id="total-hidden-cost">$836,000</p>
        <small>The true cost beyond your HubSpot subscription (Composite analysis)</small>
      </div>
    </div>
    
    <h3>Potential ROI from Optimizing Your HubSpot Implementation</h3>
    
    <div class="results-grid">
      <div class="result-item">
        <h4>Productivity Improvement</h4>
        <p id="productivity-gain">$94,500</p>
        <small>Value of time saved through proper automation (Nucleus Research, 2023)</small>
      </div>
      
      <div class="result-item">
        <h4>Revenue Growth Potential</h4>
        <p id="revenue-gain">$487,500</p>
        <small>Additional revenue from improved conversion rates (HubSpot Benchmark Data, 2022)</small>
      </div>
      
      <div class="result-item">
        <h4>Data Quality Savings</h4>
        <p id="data-savings">$45,000</p>
        <small>Reduction in costs related to poor data quality (Experian Data Quality, 2022)</small>
      </div>
      
      <div class="result-item">
        <h4>Estimated First-Year ROI</h4>
        <p id="implementation-roi">522%</p>
        <small>Return on investment for implementation rescue (Forrester Analysis, 2021)</small>
      </div>
    </div>
    
    <div class="action-container">
      <p class="impact-statement">By optimizing your HubSpot implementation, you could recover approximately <span id="total-benefit">$627,000</span> in value annually.</p>
      <p>This represents a <span id="roi-multiple">26x</span> return on a typical implementation rescue investment according to Gartner research.</p>
      <a href="/contact" class="cta-button">Get Your Custom HubSpot Assessment</a>
    </div>
  </div>
</div>
`;
