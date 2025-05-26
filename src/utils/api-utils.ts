
import { blogPosts } from '@/data/blog';
import { services } from '@/components/Services';

/**
 * Generates structured content for the public API endpoint
 * @returns JSON structured content of the website
 */
export const generateContentJson = () => {
  // Business information
  const business = {
    name: "DataOps Group",
    description: "HubSpot consultancy specializing in data operations solutions",
    contact: {
      email: "contact@dataopsgroup.com",
      phone: "+1-479-844-2052",
      address: "Bentonville, AR"
    }
  };

  // Format services data
  const formattedServices = services.map(service => ({
    name: service.title,
    description: service.description,
    url: `/services/${service.id}`
  }));

  // Format blog post data (limit to the 10 most recent)
  const formattedPosts = blogPosts
    .slice(0, 10)
    .map(post => ({
      title: post.title,
      summary: post.excerpt,
      date: post.date,
      url: `/insights/${post.id}`
    }));

  // Return the structured content
  return {
    business,
    services: formattedServices,
    blog: formattedPosts
  };
};
