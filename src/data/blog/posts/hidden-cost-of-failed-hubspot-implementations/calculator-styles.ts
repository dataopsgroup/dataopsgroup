
export const calculatorStyles = `
  .hubspot-roi-calculator {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    max-width: 800px;
    margin: 40px auto;
    padding: 30px;
    background: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0 2px 15px rgba(0,0,0,0.1);
  }
  
  .calculator-section {
    margin-bottom: 30px;
    padding: 20px;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 1px 5px rgba(0,0,0,0.05);
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .hubspot-roi-calculator label {
    display: block;
    margin-bottom: 5px;
    font-weight: 500;
    color: #333;
  }
  
  .hubspot-roi-calculator input, .hubspot-roi-calculator select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
  }
  
  .hubspot-roi-calculator small {
    display: block;
    margin-top: 3px;
    color: #666;
    font-size: 12px;
  }
  
  .calculate-button {
    background: #FF7A59;
    color: white;
    border: none;
    padding: 12px 25px;
    font-size: 18px;
    border-radius: 6px;
    cursor: pointer;
    margin: 20px 0;
    transition: background 0.3s;
  }
  
  .calculate-button:hover {
    background: #ff5c37;
  }
  
  .results-container {
    margin-top: 30px;
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  }
  
  .results-source {
    font-style: italic;
    font-size: 13px;
    color: #666;
    margin-bottom: 20px;
  }
  
  .results-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin: 20px 0 30px;
  }
  
  @media (max-width: 700px) {
    .results-grid {
      grid-template-columns: 1fr;
    }
  }
  
  .result-item {
    padding: 15px;
    background: #f5f8ff;
    border-radius: 6px;
    text-align: center;
  }
  
  .result-item h4 {
    margin: 0 0 10px;
    color: #33475b;
  }
  
  .result-item p {
    font-size: 24px;
    font-weight: 700;
    color: #FF7A59;
    margin: 5px 0;
  }
  
  .result-item small {
    font-size: 13px;
    color: #516f90;
  }
  
  .action-container {
    margin-top: 20px;
    padding: 20px;
    text-align: center;
    background: #f0f4f8;
    border-radius: 8px;
  }
  
  .impact-statement {
    font-size: 18px;
    margin-bottom: 10px;
  }
  
  .cta-button {
    display: inline-block;
    margin-top: 15px;
    padding: 12px 25px;
    background: #FF7A59;
    color: white;
    text-decoration: none;
    border-radius: 6px;
    font-weight: 600;
    transition: all 0.3s ease;
  }
  
  .cta-button:hover {
    background: #ff5c37;
    transform: translateY(-2px);
  }
`;
