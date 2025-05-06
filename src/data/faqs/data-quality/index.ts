
import { FAQItem } from "../types";
import dataQualityBasicsFAQs from "./data-quality-basics";
import dataQualityImplementationFAQs from "./data-quality-implementation";
import dataQualityHubSpotFAQs from "./data-quality-hubspot";
import dataOperationsFAQs from "./data-operations";

// Combine all data quality FAQs for export
const dataQualityFAQs: FAQItem[] = [
  ...dataQualityBasicsFAQs,
  ...dataQualityImplementationFAQs,
  ...dataQualityHubSpotFAQs,
  ...dataOperationsFAQs
];

export default dataQualityFAQs;
