
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Loader } from "lucide-react";

// Eagerly load the Index page for faster initial load
import Index from "./pages/Index";

// Lazy load all other pages
const NotFound = lazy(() => import("./pages/NotFound"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const BlogList = lazy(() => import("./pages/BlogList"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const ServicesPage = lazy(() => import("./pages/Services"));
const ApproachPage = lazy(() => import("./pages/ApproachPage"));
const LeadershipPage = lazy(() => import("./pages/Leadership"));
const CaseStudiesPage = lazy(() => import("./pages/CaseStudies"));
const WhitepapersPage = lazy(() => import("./pages/Whitepapers"));
const DocumentationPage = lazy(() => import("./pages/Documentation"));
const FAQsPage = lazy(() => import("./pages/FAQs"));
const PrivacyPage = lazy(() => import("./pages/Privacy"));
const TermsPage = lazy(() => import("./pages/Terms"));
const SitemapPage = lazy(() => import("./pages/Sitemap"));
const GetStartedPage = lazy(() => import("./pages/GetStartedPage"));
const ThankYouPage = lazy(() => import("./pages/ThankYouPage"));
const PerplexityPage = lazy(() => import("./pages/PerplexityPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const BookPage = lazy(() => import("./pages/BookPage"));
const MarketingOperationsRevOps = lazy(() => import("./pages/MarketingOperationsRevOps"));
const DataOpsImplementation = lazy(() => import("./pages/DataOpsImplementation"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <Loader size={48} className="text-dataops-600 animate-spin" />
      <p className="text-lg text-dataops-600 font-medium">Loading...</p>
    </div>
  </div>
);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/services/marketing-operations-revops" element={<MarketingOperationsRevOps />} />
            <Route path="/services/dataops-implementation" element={<DataOpsImplementation />} />
            <Route path="/approach" element={<ApproachPage />} />
            <Route path="/insights" element={<BlogList />} />
            <Route path="/insights/:postId" element={<BlogPost />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/leadership" element={<LeadershipPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/whitepapers" element={<WhitepapersPage />} />
            <Route path="/documentation" element={<DocumentationPage />} />
            <Route path="/faqs" element={<FAQsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/sitemap" element={<SitemapPage />} />
            <Route path="/get-started" element={<GetStartedPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="/perplexity" element={<PerplexityPage />} />
            <Route path="/book" element={<BookPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
