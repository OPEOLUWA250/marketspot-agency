import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
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
    "Digital Marketing Agency for SMBs | SEO, Paid Ads & Web Development - Real Results | Marketspot",
  description:
    "Marketspot Agency helps small and mid-size businesses get found on Google with SEO, convert more leads with paid ads, and grow revenue online. Professional digital marketing services with proven results. Free consultation available.",
  keywords: [
    "digital marketing agency",
    "seo agency",
    "paid ads agency",
    "web development agency",
    "branding services",
    "digital strategy",
    "google ads management",
    "seo services for smb",
    "ppc management",
    "digital marketing services",
    "content marketing services",
    "brand development agency",
  ],
  openGraph: {
    title:
      "Marketspot Agency | Digital Marketing Agency for SEO, Paid Ads & Web Development",
    description:
      "Marketspot Agency helps SMBs get found on Google, convert more leads, and grow revenue with SEO, paid ads, conversion-focused content, branding, and web development.",
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
    title:
      "Marketspot Agency | Digital Marketing Agency for SEO, Paid Ads & Web Development",
    description:
      "Marketspot Agency helps SMBs get found on Google, convert more leads, and grow revenue with SEO, paid ads, conversion-focused content, branding, and web development.",
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
      "Professional digital marketing agency offering SEO, paid ads, web development, and branding services for small to mid-size businesses.",
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
      "Digital marketing agency specializing in SEO, paid ads, and web development.",
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
      "Digital marketing agency offering SEO, paid ads management, web development, and branding services.",
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
        name: "SEO Services",
        description:
          "Technical SEO, on-page optimization, content strategy, keyword research, and backlink building to improve Google rankings and organic traffic.",
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
        name: "Paid Ads Management",
        description:
          "Performance-based Google Ads, Facebook, Instagram, and LinkedIn ad management focused on leads, customers, and measurable ROI.",
        url: "https://marketspot.agency/services",
        provider: {
          "@type": "Organization",
          name: "Marketspot Agency",
        },
      },
      {
        "@type": "Service",
        name: "Web Development & Design",
        description:
          "Conversion-focused website design and development built to support SEO and paid traffic with fast performance.",
        url: "https://marketspot.agency/services",
        provider: {
          "@type": "Organization",
          name: "Marketspot Agency",
        },
      },
      {
        "@type": "Service",
        name: "Branding & Digital Strategy",
        description:
          "Brand strategy, visual identity design, brand guidelines, and digital marketing strategy for SMBs.",
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
    about: "Digital marketing services for small and mid-size businesses",
    keywords:
      "SEO, paid ads, web development, digital marketing, branding, digital strategy",
  };

  return (
    <main id="top" className="min-h-screen bg-background overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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
