import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { WhyUsLawFirms } from "@/components/why-us-law-firms";
import { Services } from "@/components/services";
import { WhyTrustUs } from "@/components/why-trust-us";
import { Team } from "@/components/team";
import { CTA } from "@/components/cta";
import { FAQ, faqItems } from "@/components/faq";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Law Firm SEO Agency for U.S. Attorneys | SEO, Local Search & Leads | Marketspot",
  description:
    "Marketspot Agency helps U.S. law firms get found on Google with SEO, local search, and lead generation systems designed to turn searches into consultations.",
  keywords: [
    "law firm seo agency",
    "attorney seo services",
    "legal marketing agency",
    "lawyer seo",
    "local seo for attorneys",
    "google ads for law firms",
    "personal injury marketing",
    "criminal defense marketing",
    "divorce lawyer marketing",
    "law firm lead generation",
    "legal website design",
    "law firm marketing services",
  ],
  openGraph: {
    title: "Marketspot Agency | Law Firm SEO Agency for U.S. Attorneys",
    description:
      "Marketspot Agency helps U.S. law firms get found on Google, convert more consultations, and grow with SEO, local search, paid ads, and conversion-focused websites.",
    type: "website",
    url: "/",
    siteName: "Marketspot Agency",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Marketspot Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketspot Agency | Law Firm SEO for U.S. Attorneys",
    description:
      "Law firm SEO, local search, paid ads, and websites that turn searches into consultations.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Marketspot Agency",
    url: "https://marketspot.agency",
    logo: "https://marketspot.agency/logo.png",
    description:
      "Law firm marketing agency offering SEO, local search, paid ads, and conversion-focused websites for U.S. attorneys.",
    email: "folaafolabi@marketspot.agency",
    phone: "+1-XXX-XXX-XXXX",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Global",
      addressCountry: "US",
    },
    sameAs: [
      "https://www.linkedin.com/company/marketspot",
      "https://twitter.com/marketspot",
    ],
    foundingDate: "2024",
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Marketspot Agency",
    image: "https://marketspot.agency/logo.png",
    description:
      "Law firm marketing agency specializing in SEO, local search, and lead generation for attorneys.",
    url: "https://marketspot.agency",
    telephone: "+1-XXX-XXX-XXXX",
    email: "folaafolabi@marketspot.agency",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Global",
      addressCountry: "US",
    },
    areaServed: "Worldwide",
    priceRange: "$$",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Marketspot Agency",
    image: "https://marketspot.agency/logo.png",
    description:
      "Law firm marketing agency offering SEO, local search, paid ads management, and website conversion services.",
    url: "https://marketspot.agency",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "folaafolabi@marketspot.agency",
      telephone: "+1-XXX-XXX-XXXX",
      availableLanguage: "en",
    },
    priceRange: "$$",
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Worldwide",
    },
    service: [
      {
        "@type": "Service",
        name: "Law Firm SEO Services",
        description:
          "Technical SEO, on-page optimization, content strategy, keyword research, and backlink building to improve rankings for law firm searches and local attorney visibility.",
        url: "https://marketspot.agency/services",
        provider: {
          "@type": "Organization",
          name: "Marketspot Agency",
        },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "USD",
          lowPrice: "399",
          highPrice: "2000",
          offerCount: "2",
          offers: [
            {
              "@type": "Offer",
              name: "Standard Monthly SEO",
              price: "399",
              priceCurrency: "USD",
              description: "$999 setup + $399/month with guarantee",
            },
            {
              "@type": "Offer",
              name: "Upfront Commitment SEO",
              price: "2000",
              priceCurrency: "USD",
              description: "$2000 upfront for 4 months, then $399/month",
            },
          ],
        },
      },
      {
        "@type": "Service",
        name: "Law Firm Paid Ads Management",
        description:
          "Performance-based Google Ads and paid search campaigns focused on qualified legal leads, consultations, and measurable ROI for attorneys.",
        url: "https://marketspot.agency/services",
        provider: {
          "@type": "Organization",
          name: "Marketspot Agency",
        },
      },
      {
        "@type": "Service",
        name: "Law Firm Website Design",
        description:
          "Conversion-focused website design and development built to support SEO, paid traffic, and case-intake conversions for law firms.",
        url: "https://marketspot.agency/services",
        provider: {
          "@type": "Organization",
          name: "Marketspot Agency",
        },
      },
      {
        "@type": "Service",
        name: "Legal Branding & Strategy",
        description:
          "Brand strategy, visual identity design, brand guidelines, and digital marketing strategy tailored to U.S. law firms.",
        url: "https://marketspot.agency/services",
        provider: {
          "@type": "Organization",
          name: "Marketspot Agency",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://marketspot.agency",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const creativeWorkSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Marketspot Agency Digital Marketing Services",
    author: {
      "@type": "Organization",
      name: "Marketspot Agency",
    },
    about: "Law firm marketing services for U.S. attorneys",
    keywords:
      "law firm SEO, attorney marketing, legal lead generation, local SEO, Google Ads for lawyers, website conversions",
  };

  return (
    <main id="top" className="min-h-screen bg-background overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }}
      />
      <Header />
      <Hero />
      <WhyUsLawFirms />
      <Services />
      <WhyTrustUs />
      {/* Portfolio intentionally hidden to simplify homepage and improve focus. */}
      {/* <Portfolio /> */}
      <Team />
      <FAQ />
      <CTA />
      <Footer />
      <BackToTop />
    </main>
  );
}
