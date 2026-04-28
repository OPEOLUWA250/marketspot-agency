import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { WhyTrustUs } from "@/components/why-trust-us";
import { Team } from "@/components/team";
import { Portfolio } from "@/components/portfolio";
import { CTA } from "@/components/cta";
import { FAQ, faqItems } from "@/components/faq";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Agency | SEO, Paid Ads & Web Development",
  description:
    "Marketspot Agency helps SMBs get found on Google, convert more leads, and grow revenue through SEO, paid ads, branding, and web development.",
  keywords: [
    "digital marketing agency",
    "seo services",
    "paid ads agency",
    "web development",
    "branding services",
  ],
  openGraph: {
    title: "Digital Marketing Agency | SEO, Paid Ads & Web Development",
    description:
      "Marketspot Agency helps SMBs get found on Google, convert more leads, and grow revenue through SEO, paid ads, branding, and web development.",
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
    title: "Digital Marketing Agency | SEO, Paid Ads & Web Development",
    description:
      "Marketspot Agency helps SMBs get found on Google, convert more leads, and grow revenue through SEO, paid ads, branding, and web development.",
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
      "Digital marketing agency specializing in web development, graphics design, and digital strategy for SMBs.",
    email: "folaafolabi@marketspot.agency",
    address: {
      "@type": "PostalAddress",
      addressCountry: "NG",
    },
    sameAs: [
      "https://www.linkedin.com/company/marketspot",
      "https://twitter.com/marketspot",
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Marketspot Agency",
    image: "https://marketspot.agency/logo.png",
    description:
      "Digital marketing and web development services for small to mid-size businesses.",
    url: "https://marketspot.agency",
    telephone: "contact us via email",
    priceRange: "$$",
    areaServed: "KE",
    service: [
      {
        "@type": "Service",
        name: "Web Development",
        description:
          "Custom website design and development for businesses looking to establish strong online presence.",
      },
      {
        "@type": "Service",
        name: "Graphics Design",
        description:
          "Professional branding, logo design, and visual identity solutions.",
      },
      {
        "@type": "Service",
        name: "Digital Marketing Strategy",
        description:
          "Comprehensive digital marketing and content strategy to attract your target audience.",
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
      {/* Portfolio section - Hidden for now */}
      {/* <Portfolio /> */}
      <Team />
      <FAQ />
      <CTA />
      <Footer />
      <BackToTop />
    </main>
  );
}
