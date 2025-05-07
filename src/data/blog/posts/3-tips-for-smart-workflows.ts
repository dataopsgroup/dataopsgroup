
import { BlogPost } from '@/types/blog';

export const tipsForSmartWorkflows: BlogPost = {
  id: "3-tips-for-smart-workflows",
  title: "3 Tips for Smart Workflows",
  excerpt: "Three helpful HubSpot workflows that keep your data cleaned and your contacts organized.",
  date: "2022-09-05",
  author: "Geoff Tucker",
  category: "Tips & Tricks",
  coverImage: "/lovable-uploads/66cb018a-41fa-4046-a81f-5c632b199583.png",
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
  `,
  tags: ["workflows", "hubspot", "database management", "automation"]
};
