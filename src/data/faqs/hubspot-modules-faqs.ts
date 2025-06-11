
import { FAQItem } from "./types";

const hubspotModulesFAQs: FAQItem[] = [
  {
    question: "How do I create an effective FAQ page in HubSpot?",
    answer: "Creating an effective FAQ page in HubSpot can be accomplished in several ways depending on your plan and needs.\n\nThe simplest option is to use a pre-built module like SR FAQ 01, which is available on PRO and Core plans. This module is specifically designed for displaying questions and answers in an organized format with headers, subheaders, and cards.\n\nAlternatively, you can utilize the Accessible FAQ Module from the HubSpot code gallery, which focuses on creating collapsible sections that improve user experience.",
    relatedLink: {
      text: "View SR FAQ 01 Module",
      url: "https://docs.sprocketrocket.co/modules?module=sr-faq-01",
      ariaLabel: "Link to SR FAQ 01 module documentation"
    }
  },
  {
    question: "How do I implement a searchable FAQ system with keywords in HubSpot?",
    answer: "Implementing a searchable FAQ system with keywords in HubSpot requires a combination of HubSpot's native functionality and some customization.\n\nFirst, organize your FAQ content using either the Knowledge Base tool (if available in your plan) or by creating a structured page with custom modules. For the search functionality, you can leverage HubSpot's search API or implement a JavaScript-based filtering system on your FAQ page.",
    relatedLink: {
      text: "Explore HubSpot Knowledge Base Tool",
      url: "/knowledge-base-resources",
      ariaLabel: "Learn more about HubSpot's Knowledge Base functionality"
    }
  },
  {
    question: "How do I transfer modules or content between HubSpot portals?",
    answer: "Transferring modules or content between HubSpot portals can be accomplished through several methods:\n\n1. Using the 'Copy JSON' functionality: HubSpot allows you to copy the JSON configuration of a module and paste it into another portal.\n\n2. HubSpot's Design Manager: For theme-related modules, you can export and import themes between portals, which will include all associated modules.\n\n3. For custom modules: You can export the module files and import them into the target portal, maintaining the correct folder structure and dependencies.",
    relatedLink: {
      text: "Learn about CMS Migrations",
      url: "https://github.com/HubSpot/CMS-Migrations",
      ariaLabel: "GitHub repository for HubSpot CMS migration resources"
    }
  },
  {
    question: "What are the best practices for organizing module folders and files in HubSpot?",
    answer: "HubSpot recommends the following best practices for organizing module folders and files:\n\n1. Use camel case for folder names (e.g., faqModule, testimonialSlider) that clearly describe the module's purpose.\n\n2. Include all relevant files for the module within its folder, such as HTML/HubL templates, CSS, JavaScript, and any other necessary resources.\n\n3. Create a readme.md file within each module folder that explains how to use the module, its configuration options, and any dependencies.",
    relatedLink: {
      text: "HubSpot CMS Development Guidelines",
      url: "https://github.com/HubSpot/CMS-Migrations",
      ariaLabel: "HubSpot CMS development best practices and guidelines"
    }
  },
  {
    question: "How do I report bugs or suggest improvements to HubSpot modules?",
    answer: "If you encounter issues with HubSpot modules or have suggestions for improvements, there are several channels for reporting them:\n\n1. For official HubSpot modules: Use the HubSpot support system by clicking the help icon in your HubSpot portal and submitting a support ticket.\n\n2. For community-created modules on GitHub: You can report issues directly through the repository's issue tracker.\n\n3. For third-party modules: Contact the module developer directly through their support channels, which are usually listed in their documentation.",
    relatedLink: {
      text: "Submit issues on GitHub",
      url: "https://github.com/HubSpot/CMS-Migrations/issues",
      ariaLabel: "Link to submit issues to the HubSpot CMS-Migrations GitHub repository"
    }
  },
  {
    question: "How do I customize HubSpot module styling and layout?",
    answer: "Customizing HubSpot module styling and layout involves several approaches:\n\n1. Use the built-in module editor to modify colors, fonts, and spacing through the user interface.\n\n2. Add custom CSS through the module's CSS section or your theme's stylesheet.\n\n3. For advanced customization, modify the module's HubL template to change the HTML structure and add custom fields.",
    relatedLink: {
      text: "HubSpot Module Customization Guide",
      url: "/hubspot-customization-guide",
      ariaLabel: "Learn more about customizing HubSpot modules"
    }
  }
];

export default hubspotModulesFAQs;
