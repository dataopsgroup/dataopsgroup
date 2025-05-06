
import { FAQItem } from "./types";

const hubspotModulesFAQs: FAQItem[] = [
  {
    question: "How do I create an effective FAQ page in HubSpot?",
    answer: "Creating an effective FAQ page in HubSpot can be accomplished in several ways depending on your plan and needs.\n\nThe simplest option is to use a pre-built module like SR FAQ 01, which is available on PRO and Core plans. This module is specifically designed for displaying questions and answers in an organized format with headers, subheaders, and cards.\n\nAlternatively, you can utilize the Accessible FAQ Module from the HubSpot code gallery, which focuses on creating collapsible sections that improve user experience. This module can be implemented on any HubSpot website page.\n\nFor more customization, you can create your own module by following HubSpot's module development best practices. When creating custom modules, use camel case for folder names (e.g., faqModule) and include a readme.md file that describes how to use the module.",
    relatedLink: {
      text: "View SR FAQ 01 Module",
      url: "https://docs.sprocketrocket.co/modules?module=sr-faq-01",
      ariaLabel: "Link to SR FAQ 01 module documentation"
    }
  },
  {
    question: "How do I implement a searchable FAQ system with keywords in HubSpot?",
    answer: "Implementing a searchable FAQ system with keywords in HubSpot requires a combination of HubSpot's native functionality and some customization.\n\nFirst, organize your FAQ content using either the Knowledge Base tool (if available in your plan) or by creating a structured page with custom modules. For the search functionality, you can leverage HubSpot's search API or implement a JavaScript-based filtering system on your FAQ page.\n\nTo enhance searchability with keywords, make sure to tag your FAQ content appropriately and include relevant keywords in both questions and answers. This will improve both the internal search functionality and SEO performance.\n\nFor more advanced implementations, you might want to consider creating a custom module that uses JavaScript to filter FAQs based on user input, displaying only the questions that contain the search terms.",
    relatedLink: {
      text: "Explore HubSpot Knowledge Base Tool",
      url: "/knowledge-base-resources",
      ariaLabel: "Learn more about HubSpot's Knowledge Base functionality"
    }
  },
  {
    question: "How do I transfer modules or content between HubSpot portals?",
    answer: "Transferring modules or content between HubSpot portals can be accomplished through several methods:\n\n1. Using the 'Copy JSON' functionality: HubSpot allows you to copy the JSON configuration of a module and paste it into another portal. Navigate to the module you want to copy, find the 'Copy JSON' option, and then paste it into the target portal when creating a new module.\n\n2. HubSpot's Design Manager: For theme-related modules, you can export and import themes between portals, which will include all associated modules.\n\n3. For custom modules: You can export the module files and import them into the target portal, making sure to maintain the correct folder structure and dependencies.\n\n4. Using the HubSpot API: For programmatic transfers of larger amounts of content, you can utilize HubSpot's API to extract content from one portal and import it into another.\n\nWhen transferring modules, be sure to check for any dependencies such as custom CSS, JavaScript, or HubL functions that might need to be transferred as well to ensure proper functionality.",
    relatedLink: {
      text: "Learn about CMS Migrations",
      url: "https://github.com/HubSpot/CMS-Migrations",
      ariaLabel: "GitHub repository for HubSpot CMS migration resources"
    }
  },
  {
    question: "What are the best practices for organizing module folders and files in HubSpot?",
    answer: "HubSpot recommends the following best practices for organizing module folders and files:\n\n1. Use camel case for folder names (e.g., faqModule, testimonialSlider) that clearly describe the module's purpose.\n\n2. Include all relevant files for the module within its folder, such as HTML/HubL templates, CSS, JavaScript, and any other necessary resources.\n\n3. Create a readme.md file within each module folder that explains how to use the module, its configuration options, and any dependencies.\n\n4. Organize related modules into logical groupings based on functionality or page sections.\n\n5. Maintain consistent naming conventions across all modules to make them easier to locate and manage.\n\n6. Document any special implementation requirements or known limitations.\n\n7. For shared components used across multiple modules, consider creating a separate 'shared' or 'common' folder to avoid duplication.\n\nFollowing these organizational practices will make your modules more maintainable, easier to troubleshoot, and simpler to share with other team members or portals.",
    relatedLink: {
      text: "HubSpot CMS Development Guidelines",
      url: "https://github.com/HubSpot/CMS-Migrations",
      ariaLabel: "HubSpot CMS development best practices and guidelines"
    }
  },
  {
    question: "How do I report bugs or suggest improvements to HubSpot modules?",
    answer: "If you encounter issues with HubSpot modules or have suggestions for improvements, there are several channels for reporting them:\n\n1. For official HubSpot modules: Use the HubSpot support system by clicking the help icon in your HubSpot portal and submitting a support ticket that clearly describes the issue or improvement suggestion.\n\n2. For community-created modules on GitHub (like those in the CMS-Migrations repository): You can report issues directly through the repository's issue tracker. This is the recommended approach for reporting bugs or suggesting improvements to open-source modules.\n\n3. For third-party modules (like SR FAQ 01): Contact the module developer directly through their support channels, which are usually listed in their documentation.\n\nWhen reporting issues, be sure to include detailed steps to reproduce the problem, screenshots if applicable, your browser and operating system information, and any error messages you've encountered. For improvement suggestions, clearly articulate the current limitation and how your proposed change would enhance the module's functionality.",
    relatedLink: {
      text: "Submit issues on GitHub",
      url: "https://github.com/HubSpot/CMS-Migrations/issues",
      ariaLabel: "Link to submit issues to the HubSpot CMS-Migrations GitHub repository"
    }
  }
];

export default hubspotModulesFAQs;
