
/**
 * SEO META HEAD COMPONENT - KNOWLEDGE ARTICLE REMINDERS:
 * 
 * 🎯 CANONICAL URLs MUST POINT TO FINAL DESTINATION (not redirect sources)
 * 🎯 PREVENT REDIRECT CHAINS - canonical = actual route destination
 * 🎯 OpenGraph URL MUST MATCH CANONICAL URL EXACTLY
 * 📏 TITLES: 50-60 characters max, include target keyword at beginning
 * 📏 DESCRIPTIONS: 150-160 characters max, include value proposition + CTA
 * 🔗 INTERNAL LINKING: Every page needs 3-5 outgoing internal links
 * 
 * See Knowledge Article: "SEO Requirements (MANDATORY FOR ALL PAGES)"
 */

import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { BlogPost } from '@/types/blog';
import { useCanonicalUrl } from '@/hooks/useCanonicalUrl';
import { buildAbsoluteUrl, buildCanonicalUrl, buildOGUrl, validateUrlConsistency } from '@/utils/url-builder';

interface MetaHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogType?: string;
  ogImage?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterCard?: string;
  author?: string;
  publishDate?: string;
  blogPost?: BlogPost;
  isArticle?: boolean;
  siteName?: string;
  gscVerification?: string;
  structuredData?: Record<string, any>;
  noindex?: boolean;
  locale?: string;
  alternateUrls?: { lang: string; url: string }[];
}

const MetaHead = ({
  title,
  description,
  keywords,
  canonicalPath: explicitCanonicalPath,
  ogType = 'website',
  ogImage = '/lovable-uploads/9b9f1c84-13af-4551-96d5-b7a930f008cf.png',
  ogTitle,
  ogDescription,
  twitterCard = 'summary_large_image',
  author = 'Geoff Tucker',
  publishDate,
  blogPost,
  isArticle = false,
  siteName = 'DataOps Group',
  gscVerification,
  structuredData,
  noindex = false,
  locale = 'en_US',
  alternateUrls = []
}: MetaHeadProps) => {
  // Use the canonical URL hook for automatic canonical detection
  const { canonicalPath: autoCanonicalPath } = useCanonicalUrl();
  
  // Use explicit canonical if provided, otherwise use auto-detected
  const finalCanonicalPath = explicitCanonicalPath || autoCanonicalPath;
  
  // CRITICAL FIX: Use centralized URL builder for ALL URLs
  const fullCanonicalUrl = buildCanonicalUrl(finalCanonicalPath);
  const fullOGUrl = buildOGUrl(finalCanonicalPath); // Must match canonical exactly
  
  // Development validation to catch mismatches and duplicate titles
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      // CRITICAL: Validate URLs match exactly
      if (!validateUrlConsistency(fullCanonicalUrl, fullOGUrl)) {
        console.error('🚨 CANONICAL/OG URL MISMATCH:', {
          canonical: fullCanonicalUrl,
          og: fullOGUrl,
          providedCanonicalPath: explicitCanonicalPath,
          finalPath: finalCanonicalPath
        });
      }
      
      // Check for duplicate title tags
      const existingTitles = document.querySelectorAll('title');
      if (existingTitles.length > 1) {
        console.error('🚨 DUPLICATE TITLE TAGS DETECTED:', {
          count: existingTitles.length,
          titles: Array.from(existingTitles).map(t => t.textContent),
          currentTitle: title,
          page: finalCanonicalPath
        });
      }
      
      // Validate domain consistency
      if (!fullCanonicalUrl.includes('dataopsgroup.com')) {
        console.error('🚨 INCORRECT CANONICAL DOMAIN:', fullCanonicalUrl);
      }
      
      if (!fullOGUrl.includes('dataopsgroup.com')) {
        console.error('🚨 INCORRECT OG DOMAIN:', fullOGUrl);
      }
    }
  }, [title, fullOGUrl, fullCanonicalUrl, explicitCanonicalPath, finalCanonicalPath]);
  
  // Format title - ensure it's under 60 characters and includes brand
  const formattedTitle = title.includes('DataOps Group') ? title : `${title} | DataOps Group`;
  const truncatedTitle = formattedTitle.length > 60 ? formattedTitle.substring(0, 57) + '...' : formattedTitle;
  
  // Ensure description is under 160 characters
  const truncatedDescription = description.length > 160 ? description.substring(0, 157) + '...' : description;
  
  // Ensure image URLs are absolute using centralized builder
  const fullOgImage = ogImage.startsWith('http') ? ogImage : buildAbsoluteUrl(ogImage);
  
  // Get Twitter metadata from blogPost if available
  const twitterTitle = blogPost?.seo?.twitterTitle || ogTitle || truncatedTitle;
  const twitterDescription = blogPost?.seo?.twitterDescription || ogDescription || truncatedDescription;
  
  // If this is a blog post, use blog post data for meta tags
  if (blogPost && isArticle) {
    ogType = 'article';
    ogTitle = ogTitle || blogPost.title;
    ogDescription = ogDescription || blogPost.excerpt;
    ogImage = blogPost.featuredImage || blogPost.coverImage;
    author = blogPost.author;
    publishDate = blogPost.date;
  }

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{truncatedTitle}</title>
      <meta name="description" content={truncatedDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Google Search Console verification */}
      {gscVerification && <meta name="google-site-verification" content={gscVerification} />}
      
      {/* Language and Locale */}
      <meta property="og:locale" content={locale} />
      <html lang="en" />
      
      {/* Alternate language versions */}
      {alternateUrls.map(({ lang, url }) => (
        <link key={lang} rel="alternate" hrefLang={lang} href={url.startsWith('http') ? url : buildAbsoluteUrl(url)} />
      ))}
      
      {/* Robots directives */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      )}
      
      {/* Favicons */}
      <link rel="icon" type="image/png" href="/lovable-uploads/5f3a8bdf-410e-4727-8fa0-eb20abe91242.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/lovable-uploads/5f3a8bdf-410e-4727-8fa0-eb20abe91242.png" />
      <link rel="shortcut icon" href="/lovable-uploads/5f3a8bdf-410e-4727-8fa0-eb20abe91242.png" />
      
      {/* Open Graph / Facebook - CRITICAL: Must match canonical URL exactly */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={ogTitle || truncatedTitle} />
      <meta property="og:description" content={ogDescription || truncatedDescription} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={fullOGUrl} />
      <meta property="og:site_name" content={siteName} />
      
      {/* Additional Open Graph tags for articles */}
      {isArticle && (
        <>
          <meta property="article:published_time" content={new Date(publishDate || '').toISOString()} />
          <meta property="article:author" content={author} />
          {blogPost?.tags?.map((tag, index) => (
            <meta property="article:tag" content={tag} key={`tag-${index}`} />
          ))}
          <meta property="article:section" content={blogPost?.category || 'Blog'} />
        </>
      )}
      
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={twitterTitle} />
      <meta name="twitter:description" content={twitterDescription} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:site" content="@dataops_group" />
      {author && <meta name="twitter:creator" content={`@${author.toLowerCase().replace(/\s+/g, '')}`} />}
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default MetaHead;
