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
    "Marketspot Agency | Digital Marketing Agency for SEO, Paid Ads & Web Development - Get Real Results",
  description:
    "Marketspot Agency helps SMBs get found on Google, convert more leads, and grow revenue with SEO, paid ads, conversion-focused content, branding, and web development. Real digital growth. Real business results.",
  keywords: [
    "digital marketing agency",
    "seo agency",
    "paid ads agency",
    "web development agency",
    "branding services",
    "digital strategy",
    "content marketing",
    "marketspot agency",
    "digital marketing services Global",
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
      "Marketspot Agency helps SMBs grow with SEO, paid ads, branding, and web development.",
    email: "folaafolabi@marketspot.agency",
    sameAs: [
      "https://www.linkedin.com/company/marketspot",
      "https://twitter.com/marketspot",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Marketspot Agency",
    image: "https://marketspot.agency/logo.png",
    description:
      "SEO, paid ads, branding, and web development services for small to mid-size businesses.",
    url: "https://marketspot.agency",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "folaafolabi@marketspot.agency",
    },
    priceRange: "$$",
    areaServed: "Worldwide",
    service: [
      {
        "@type": "Service",
        name: "SEO",
        description:
          "Technical SEO, on-page optimization, content strategy, and authority building to improve Google rankings.",
      },
      {
        "@type": "Service",
        name: "Paid Ads",
        description:
          "Performance-based ad management focused on leads, customers, and measurable return on spend.",
      },
      {
        "@type": "Service",
        name: "Web Development",
        description:
          "Conversion-focused websites and landing pages built to support SEO and paid traffic.",
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

  return (
    <main id="top" className="min-h-screen bg-background overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
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
