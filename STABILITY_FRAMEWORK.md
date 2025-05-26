
# DataOps Group Website - Stability Framework Document

## Current Route Structure

### Main Routes (`src/routes/mainRoutes.tsx`)
```typescript
/ → Index (Hero, Services, Approach, BookCTA)
/contact → ContactPage
/about → AboutPage
/approach → ApproachPage
/book → BookLandingPage
/hubspot-assessment-results → HubSpotAssessmentResultsPage
```

### Service Routes (`src/routes/serviceRoutes.tsx`)
```typescript
/services → Services
/services/analytics-bi → AnalyticsBI
/services/dataops-implementation → DataOpsImplementation
/services/team-training → TeamTraining
/services/marketing-operations-revops → MarketingOperationsRevOps
/seo-management → SEOManagement
```

### Insight Routes (`src/routes/insightRoutes.tsx`)
```typescript
/insights → BlogList
/insights/:postId → BlogPost
/case-studies → CaseStudiesPage
/faqs → FAQs
```

### Utility Routes (`src/routes/utilityRoutes.tsx`)
```typescript
/not-found → NotFound
/404 → NotFound
/* → NotFound (catch-all)
/privacy → Privacy
/sitemap → Sitemap
/pillar-content → PillarContentPage
/how-to-hire-a-hubspot-expert-in-2025 → HubSpotExpertGuidePage
/assessment → HubSpotAssessment
```

### API Routes (`src/routes/apiRoutes.tsx`)
```typescript
/api/content.json → ApiContent
/sitemap.xml → XmlContent
```

## Component Hierarchy

### Layout Components
```
SemanticLayout (main wrapper)
├── Navbar (header)
├── main (content area)
└── Footer

App
├── RouterProvider
├── CustomCookieBanner
├── PerformanceMonitor
└── PrivacyModal
```

### Hero Section
```
Hero
├── HeroSection
│   └── HeroTextContent
└── HeroAuthority
```

### Navigation
```
Navbar
├── DesktopNavigation
└── MobileNavigation
```

## Custom CSS Variables and Styles

### CSS Variables (`:root`)
```css
/* From tailwind.config.ts */
--border, --input, --ring, --background, --foreground
--primary, --primary-foreground
--secondary, --secondary-foreground
--destructive, --destructive-foreground
--muted, --muted-foreground
--accent, --accent-foreground
--popover, --popover-foreground
--card, --card-foreground
--sidebar-*, --radius
```

### Custom Color Palette
```typescript
dataops: {
  50: '#F0F7FF', 100: '#E0EFFE', 200: '#BAE0FD',
  300: '#7AC4FB', 400: '#47A8F5', 500: '#1A8AEB',
  600: '#0D6AC7', 700: '#0E55A1', 800: '#0F4786',
  900: '#0F3C70', 950: '#0F172A'
},
saffron: {
  DEFAULT: '#FBB03B', 50: '#FEF8ED', 100: '#FDF0D5',
  200: '#FBDEAA', 300: '#F9C674', 400: '#F6A63C',
  500: '#FBB03B', 600: '#E8951E', 700: '#C17A18',
  800: '#9B621A', 900: '#7F5119', 950: '#44290B'
}
```

### Font Configuration
```typescript
fontFamily: {
  'headline': ['Rubik', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
  'body': ['Roboto', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
  'sans': ['Roboto', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif']
}
```

### Animation Definitions
```typescript
keyframes: {
  'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
  'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
  'fade-in': { '0%': { opacity: '0', transform: 'translateY(10px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
  'fade-out': { '0%': { opacity: '1', transform: 'translateY(0)' }, '100%': { opacity: '0', transform: 'translateY(10px)' } }
},
animation: {
  'accordion-down': 'accordion-down 0.2s ease-out',
  'accordion-up': 'accordion-up 0.2s ease-out',
  'fade-in': 'fade-in 0.5s ease-out',
  'fade-out': 'fade-out 0.5s ease-out'
}
```

### CSS Import Structure
```css
/* src/index.css */
@import './styles/fonts.css';
@import './styles/base.css';
@import './styles/typography.css';
@import './styles/hero.css';
@import './styles/hero-override.css';
@import './styles/components.css';
@import './styles/navigation.css';
@import './styles/pillar-content.css';
@import './styles/hubspot-cookie-banner.css';
@import './styles/trust-section.css';
@import './styles/process-section.css';
@import './styles/sound-familiar-section.css';
@import './styles/footer.css';
@tailwind base;
@tailwind components;
@tailwind utilities;
@import './styles/cmo-playbook-section.css';
```

## Critical Configuration

### Vite Configuration (`vite.config.ts`)
```typescript
{
  server: { host: "::", port: 8080 },
  plugins: [react(), componentTagger()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  build: {
    minify: 'esbuild',
    target: ['es2020', 'chrome80', 'firefox78', 'safari14'],
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    reportCompressedSize: true
  }
}
```

### Key Dependencies
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.26.2",
  "react-helmet-async": "^1.3.0",
  "@tanstack/react-query": "^5.56.2",
  "tailwindcss-animate": "^1.0.7",
  "class-variance-authority": "^0.7.1",
  "lucide-react": "^0.462.0",
  "@radix-ui/react-*": "^1.x.x"
}
```

## Core Component Interfaces

### Layout Components
```typescript
interface SemanticLayoutProps {
  children: React.ReactNode;
  mainClassName?: string;
  skipNav?: boolean;
  skipFooter?: boolean;
}
```

### Navigation Types
```typescript
interface SubNavItem {
  name: string;
  href?: string;
  icon?: string;
  isDropdown?: boolean;
  items?: Array<SubNavItem>;
}

interface NavItem {
  name: string;
  href?: string;
  isDropdown?: boolean;
  items?: Array<SubNavItem>;
}
```

### Hero Components
```typescript
interface HeroSectionProps {
  onCTAClick: () => void;
}

interface HeroTextContentProps {
  onCTAClick: () => void;
}
```

### Blog Data Structures
```typescript
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  category?: string;
  coverImage: string;
  featuredImage?: string;
  tags?: string[];
  wordCount?: number;
  readingTime?: number;
  modifiedDate?: string;
}
```

### Pillar Content Types
```typescript
interface SectionData {
  id: string;
  title: string;
  content: React.ReactNode;
}

type SectionId = 
  | 'introduction' | 'understanding-experts' | 'types-expertise'
  | 'beyond-agency-safety' | 'when-need-expert' | 'evaluating-qualifications'
  | 'pricing-guide' | 'step-by-step-process' | 'essential-questions'
  | 'maximizing-partnership' | 'success-stories' | 'common-pitfalls'
  | 'conclusion';
```

## Utility Functions

### Analytics (`src/utils/analytics.ts`)
```typescript
export const trackPageView: (params: PageViewParams) => void
export const trackEvent: (eventName: string, params: Record<string, any>) => void
export const setupRouteChangeTracking: () => void
```

### Performance Monitoring (`src/utils/performance-monitoring.ts`)
```typescript
export const initializePerformanceMonitoring: () => void
export const trackWebVitals: () => void
export const reportMetrics: (metrics: PerformanceMetrics) => void
```

### Image Optimization (`src/utils/image-utils.ts`)
```typescript
export const generateSrcSet: (src: string, sizes: number[]) => string
export const optimizeImageForDevice: (src: string, device: string) => string
```

## Environment Variables

### Required Environment Variables
```
VITE_APP_VERSION=1.7.2
VITE_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
VITE_HUBSPOT_PORTAL_ID=HUBSPOT_PORTAL_ID
```

### Optional Environment Variables
```
VITE_PERFORMANCE_MONITORING=true
VITE_DEBUG_MODE=false
VITE_ENABLE_ANALYTICS=true
```

## CSS Architecture Guidelines

### Specificity Hierarchy
1. Tailwind utilities (lowest)
2. Component-specific CSS
3. Override CSS files (highest with !important)

### Naming Conventions
- Components: PascalCase (`HeroSection`)
- CSS classes: kebab-case (`hero-section`)
- CSS files: kebab-case (`hero-override.css`)
- Tailwind classes: kebab-case (`bg-dataops-500`)

### Responsive Breakpoints
```css
/* Mobile-first approach */
@media (max-width: 768px) { /* Mobile */ }
@media (min-width: 769px) { /* Desktop */ }
@media (min-width: 769px) and (max-width: 1024px) { /* Tablet */ }
@media (min-width: 1200px) { /* Large screens */ }
```

## Critical Performance Optimizations

### Code Splitting Strategy
- Route-based splitting via React.lazy
- Component-based splitting for heavy components
- Library splitting for vendor chunks

### Image Optimization
- WebP format with fallbacks
- Responsive image sets
- Lazy loading implementation
- Preloading for critical images

### CSS Optimization
- Critical CSS extraction
- CSS code splitting
- Purged unused styles
- Minification in production

## Deployment Configuration

### Build Optimization
```typescript
// Chunk strategy in vite.config.ts
chunkFileNames: 'assets/vendor-[name].[hash].js'
entryFileNames: 'assets/entry-[name].[hash].js'
assetFileNames: 'assets/[type]/[name].[hash][extname]'
```

### Performance Budget
- JavaScript bundles: <500KB
- CSS files: <100KB
- Images: WebP optimized
- Core Web Vitals: LCP <2.5s, FID <100ms, CLS <0.1

This framework ensures consistent development practices and maintains application stability across all updates and modifications.
