
import { FAQCategory } from "./types";
import hubspotFAQs from "./hubspot-faqs";
import hubspotConsultingFAQs from "./hubspot-consulting-faqs";
import approachFAQs from "./approach-faqs";
import dataQualityFAQs from "./data-quality";
import dataopsImplementationFAQs from "./dataops-implementation-faqs";
import hubspotModulesFAQs from "./hubspot-modules-faqs";
import hubspotExpertFAQs from "./hubspot-expert-faqs";
import businessServicesFAQs from "./business-services-faqs";

const faqCategories: FAQCategory[] = [
  {
    id: "hubspot-services",
    title: "HubSpot Services",
    icon: "FolderOpen",
    items: hubspotFAQs
  },
  {
    id: "hubspot-consulting",
    title: "HubSpot Consulting",
    icon: "Users",
    items: hubspotConsultingFAQs
  },
  {
    id: "hubspot-experts",
    title: "HubSpot Experts",
    icon: "Award",
    items: hubspotExpertFAQs
  },
  {
    id: "dataops-implementation",
    title: "DataOps Implementation",
    icon: "Settings",
    items: dataopsImplementationFAQs
  },
  {
    id: "business-services",
    title: "Business Services",
    icon: "Briefcase",
    items: businessServicesFAQs
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

export { 
  hubspotFAQs, 
  hubspotConsultingFAQs,
  approachFAQs, 
  dataQualityFAQs, 
  dataopsImplementationFAQs,
  hubspotModulesFAQs, 
  hubspotExpertFAQs,
  businessServicesFAQs
};
export default faqCategories;
