
import { assessmentRedirects } from './redirects/assessmentRedirects';
import { servicesRedirects } from './redirects/servicesRedirects';
import { contentRedirects } from './redirects/contentRedirects';
import { guidesRedirects } from './redirects/guidesRedirects';
import { miscRedirects } from './redirects/miscRedirects';
import { ampRedirects } from './redirects/ampRedirects';

// 301 Redirects - organized by category
export const redirectRoutes = [
  ...assessmentRedirects,
  ...servicesRedirects,
  ...contentRedirects,
  ...guidesRedirects,
  ...miscRedirects,
  ...ampRedirects
];
