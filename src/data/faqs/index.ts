
import { FAQCategory } from "./types";
import hubspotFAQs from "./hubspot-faqs";
import approachFAQs from "./approach-faqs";
import dataQualityFAQs from "./data-quality";
import hubspotModulesFAQs from "./hubspot-modules-faqs";

const faqCategories: FAQCategory[] = [
  {
    id: "hubspot-services",
    title: "HubSpot Services",
    icon: "FolderOpen",
    items: hubspotFAQs
  },
  {
    id: "our-approach",
    title: "Our Approach",
    icon: "Book",
    items: approachFAQs
  },
  {
    id: "data-quality",
    title: "Data Quality",
    icon: "Database",
    items: dataQualityFAQs
  },
  {
    id: "hubspot-modules",
    title: "HubSpot Modules",
    icon: "FileText",
    items: hubspotModulesFAQs
  }
];

export { hubspotFAQs, approachFAQs, dataQualityFAQs, hubspotModulesFAQs };
export default faqCategories;
