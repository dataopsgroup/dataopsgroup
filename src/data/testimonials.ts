
export interface Testimonial {
  id: string;
  quote: string;
  author: {
    name: string;
    title: string;
    company: string;
    industry: string;
  };
  rating?: number;
  date: string;
  featured?: boolean;
  category: 'hubspot-implementation' | 'data-operations' | 'analytics' | 'training' | 'general';
}

export const testimonials: Testimonial[] = [
  {
    id: "jeremy-s-hubspot-partner",
    quote: "I met Geoff in May of 2022, and we immediately hit it off. He has been more than a HubSpot expert; I consider him a valuable and trusted partner. He's reliable, honest, passionate, committed, and reasonable. He's gone the extra mile to learn about our business and possesses the ability to plan, implement, manage, and report on projects. I highly recommend working with Geoff and enjoy having him as my colleague.",
    author: {
      name: "Jeremy S.",
      title: "Director of Marketing",
      company: "HubSpot Partner",
      industry: "Home Goods Manufacturer"
    },
    rating: 5,
    date: "2022-05-15",
    featured: true,
    category: "hubspot-implementation"
  },
  {
    id: "dan-g-best-partner",
    quote: "I contacted Geoff after inheriting a HubSpot account and struggling to wrap my arms around it. He audited the account and asked questions about our goals. This led to a checklist of things to delete, records to enrich, and dashboards to build. We realigned on priorities, then Geoff and his team helped us get to work. The best part is that Geoff is a great teacher. Not only do we have much better clarity into our HubSpot data, but we're learning how to continue improving in the future. We've learned how to use our CRM to look more cohesively at our paid ads, inbound marketing, website, and sales pipeline. I recommend Geoff and DataOps Group to any HubSpot user.",
    author: {
      name: "Dan G.",
      title: "Director of Marketing",
      company: "Technology Company",
      industry: "App Development Company"
    },
    rating: 5,
    date: "2023-03-20",
    featured: true,
    category: "hubspot-implementation"
  },
  {
    id: "john-l-dashboard-blues",
    quote: "Engaging Geoff as a HubSpot consultant has been a pivotal decision for our team's ability to track and analyze our Key Performance Indicators (KPIs) across various departments. His profound knowledge and expertise in navigating HubSpot's functionalities have been nothing short of transformative for our operations. Geoff's approach to consultation is both flexible and collaborative, offering a dual-pathway method that caters to our specific needs. On one hand, he adeptly takes on assignments, returning with comprehensive options and solutions that demonstrate not only his understanding of HubSpot but also his deep commitment to tailoring his service to our unique challenges. On the other hand, Geoff's willingness to conduct working sessions has been invaluable. These sessions have not only helped us refine our objectives but also empowered us with the knowledge and confidence to utilize HubSpot to its full potential. What sets Geoff apart is not just his professional acumen but his personal qualities. He is kind, easy to work with, and remarkably adaptable, always ready to assist on short notice. His ability to guide, educate, and support us, always pointing us in the right direction, has fostered not only an improved operational framework for our team but also a positive and productive working relationship.",
    author: {
      name: "John L.",
      title: "COO",
      company: "Professional Services",
      industry: "Professional Services"
    },
    rating: 5,
    date: "2023-08-10",
    featured: true,
    category: "analytics"
  }
];

export const getFeaturedTestimonials = () => testimonials.filter(t => t.featured);
export const getTestimonialsByCategory = (category: Testimonial['category']) => testimonials.filter(t => t.category === category);

// Calculate aggregate rating for schema
export const getAggregateRating = () => {
  const ratings = testimonials.filter(t => t.rating).map(t => t.rating!);
  const average = ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length;
  return {
    ratingValue: average,
    reviewCount: ratings.length,
    bestRating: 5,
    worstRating: 1
  };
};
