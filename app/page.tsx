import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Team } from "@/components/team";
import { Portfolio } from "@/components/portfolio";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketspot Agency | Digital Excellence & Speed",
  description:
    "Award-winning digital marketing agency specializing in web development, graphics design, branding, and digital strategy. We help SMBs attract and convert their ideal customers.",
  keywords:
    "digital marketing, web development, graphics design, branding, digital strategy, digital agency Kenya",
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
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Team />
      <CTA />
      <Footer />
      <BackToTop />
    </main>
  );
}
