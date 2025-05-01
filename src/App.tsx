
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServiceDetail from "./pages/ServiceDetail";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/Services";
import ApproachPage from "./pages/ApproachPage";
import LeadershipPage from "./pages/Leadership";
import CaseStudiesPage from "./pages/CaseStudies";
import WhitepapersPage from "./pages/Whitepapers";
import DocumentationPage from "./pages/Documentation";
import FAQsPage from "./pages/FAQs";
import PrivacyPage from "./pages/Privacy";
import TermsPage from "./pages/Terms";
import SitemapPage from "./pages/Sitemap";
import GetStartedPage from "./pages/GetStartedPage";
import ThankYouPage from "./pages/ThankYouPage";
import PerplexityPage from "./pages/PerplexityPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/approach" element={<ApproachPage />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
          <Route path="/contact" element={<ContactPage />} />
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
