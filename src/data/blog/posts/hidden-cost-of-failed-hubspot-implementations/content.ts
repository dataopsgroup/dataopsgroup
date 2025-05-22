
import { intro } from './sections/intro';
import { trueCosts } from './sections/true-costs';
import { warningSigns } from './sections/warning-signs';
import { rescuePlan } from './sections/rescue-plan';
import { caseStudy } from './sections/case-study';
import { conclusion } from './sections/conclusion';
import { calculatorStyles } from './calculator-styles';
import { calculatorScript } from './calculator-script';
import { roiCalculator } from './roi-calculator';

export const content = `
    ${intro}
    ${trueCosts}
    ${warningSigns}
    ${rescuePlan}
    ${caseStudy}
    ${conclusion}
    
    ${roiCalculator}

    <style>
      ${calculatorStyles}
    </style>

    <script>
      ${calculatorScript}
    </script>
  `;
