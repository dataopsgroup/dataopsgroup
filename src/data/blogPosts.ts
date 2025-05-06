
import { BlogPost } from '../types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: "3-tips-for-smart-workflows",
    title: "3 Tips for Smart Workflows",
    excerpt: "Three helpful HubSpot workflows that keep your data cleaned and your contacts organized.",
    date: "2022-09-05", // Converted from "September 5, 2022" to YYYY-MM-DD format
    author: "Geoff Tucker",
    category: "Tips & Tricks",
    coverImage: "/lovable-uploads/1e7d023c-3afe-475d-9c49-0d57ecb025d9.png", // Using an existing image from your uploads
    content: `
      <h2>3 Tips for Smart Workflows</h2>
      
      <p>When using workflows, there are three common ones I always set up in the HubSpot instance I'm using. These three simple but powerful workflows make managing the instance much easier over time. Give them a try in your instance.</p>
      
      <ul>
        <li><strong>Organized by State.</strong> For every US state where your business targets new customers, create a list that gathers all people in each state in a list. In your criteria, use all the variations on how a state can be listed. For example, the full state name or two letter abbreviation. It's also a good idea to run an export on all your state/region field values, and sort them alphabetically. This gives you a chance to fix misspellings and blank entries. Name the list by the state's name. Use the list as a trigger for a workflow that then standardizes each state/region name in HubSpot according to how you want this field value recorded. You can use a simple if/then branch to create the 'set property' step for each state you have. Now your state names are consistent!</li>
        <li><strong>Organized by ZIP or Postal Code.</strong> Like the example above, use this field as your organizing element for your database. Your sales team may be organized by ZIP or postal codes instead, so simply replace the state/region setting from the first example with ZIP or postal code in this version. You can then add a 'set property value' to designate the contact owner according to the contact's ZIP code. It's a good idea to run an export on your postal code field values and scan the list for any oddball entries or blanks. Make it a priority to fix them for each error.</li>
        <li><strong>Fill Those Blanks.</strong> What are the top 10 fields that matter most for your database? Make a list. Now create a workflow that says if "field X is unknown" then add to "Maintenance List". This automates your ability to continually audit your database and fix missing or erroneous data as it occurs. Remember that B2B databases erode at a very high rate annually so preserving every lead you've earned is very important.</li>
      </ul>
      
      <p>Those are three of my favorites that have helped me repeatedly over the years.</p>
      
      <p>What are you three favorite go-to workflows? Add a comment below. I'd love to see what you've built.</p>
    `
  },
  {
    id: "marketing-data-management",
    title: "Marketing Data Management and Analytics: From Chaos to Clarity",
    excerpt: "Most marketing organizations collect vast amounts of data but struggle to transform it into meaningful insights. Learn how to transform chaotic marketing data into structured, actionable insights.",
    date: "2025-04-28",
    author: "Geoff Tucker",
    category: "Data Management",
    coverImage: "/lovable-uploads/85dd8ce3-48e5-43c2-ae26-e36e0f8413fc.png",
    content: `
      <h2>It's All About the Data</h2>
      
      <h3>Is Poor Data Quality Undermining Your Marketing Decisions?</h3>
      <p>For many marketing teams, the reality of data management is far from ideal—messy data scattered across multiple systems, inconsistent naming conventions, and an inability to clearly demonstrate marketing's impact on revenue.</p>
      <p>According to Forrester Research, poor data quality costs businesses an average of 10-25% of their revenue.</p>
      
      <h4>Your marketing team may be struggling with:</h4>
      <ul>
        <li>Inconsistent or unreliable marketing data across platforms</li>
        <li>Inability to clearly attribute revenue to marketing efforts</li>
        <li>Confusing or limited marketing dashboards and reports</li>
        <li>Data silos preventing unified customer visibility</li>
        <li>Lack of trusted metrics to guide marketing decisions</li>
        <li>Difficulty proving marketing's contribution to the bottom line</li>
        <li>Time-consuming manual data compilation and reporting processes</li>
        <li>Incomplete customer journey visibility</li>
        <li>Incompatible data formats across marketing platforms</li>
        <li>Uncertainty about which metrics really matter for your business</li>
      </ul>
      
      <h2>The Problem: The Marketing Data Mess</h2>
      <p>Most marketing organizations collect vast amounts of data but struggle to transform it into meaningful insights.</p>
      <p>According to HubSpot, 67% of marketers say improving data quality is their biggest analytics challenge, while Gartner reports that 60% of CMOs will slash their marketing analytics efforts due to failed promised value.</p>
      <p>The gap between data collection and meaningful insights isn't just frustrating—it's costing your business real money through missed opportunities, wasted marketing spend, and inability to demonstrate marketing's true value.</p>
      
      <h2>The Solution: Structured Marketing Data Management and Analytics</h2>
      <h3>Framework and Structure</h3>
      <p>We transform chaotic marketing data into structured, actionable insights that drive better decision making and prove marketing's impact on revenue.</p>
      <p>Our approach combines data cleansing, dashboard development, and attribution modeling to create clarity from confusion.</p>
      <p>Our clients typically reduce reporting time by 75% while gaining unprecedented clarity into which marketing activities truly drive results.</p>
      
      <h3>Ready to Transform Your Marketing Automation System?</h3>
      <p>Let's start with a free, no-obligation 30-minute HubSpot consultation. We'll listen to your marketing automation challenges, share initial insights, and help determine if we're a good fit to work together.</p>
    `
  },
  // Add more blog posts here as needed
];

