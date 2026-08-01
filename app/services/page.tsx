import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Law Firm Marketing Services | SEO, Local Search & Lead Generation | Marketspot",
  description:
    "Explore law firm marketing services from Marketspot Agency. SEO for attorneys, local search, paid ads, and website design built to generate consultations for U.S. law firms.",
  keywords: [
    "law firm marketing services",
    "law firm seo services",
    "attorney seo services",
    "local seo for law firms",
    "google ads for lawyers",
    "legal website design",
    "legal lead generation",
    "personal injury marketing",
    "criminal defense marketing",
    "divorce lawyer marketing",
    "legal branding services",
    "law firm digital strategy",
  ],
  openGraph: {
    title: "Law Firm Marketing Services | SEO, Local Search & Lead Gen",
    description:
      "Professional law firm marketing services including SEO for attorneys, local search, paid ads, high-converting websites, and strategic legal branding.",
    type: "website",
    url: "https://marketspot.agency/services",
    siteName: "Marketspot Agency",
    images: [
      {
        url: "https://marketspot.agency/logo.png",
        width: 1200,
        height: 630,
        alt: "Marketspot Agency Services",
      },
    ],
  },
  alternates: {
    canonical: "https://marketspot.agency/services",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Services() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[60vh] py-20 bg-[#075056] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-[#FFFFDE] mb-6">
              Our Law Firm Marketing Services
            </h1>
            <p className="text-lg text-[#FFFFDE]/90 mb-8">
              End-to-end solutions to help U.S. law firms get found, convert
              more consultations, and grow revenue online.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {/* SEO Service */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Search Engine Optimization for Law Firms
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Get discovered on Google when potential clients are searching
                  for legal help. Our SEO strategy combines technical
                  optimization, legal content marketing, and authority building
                  to improve rankings and drive qualified intake.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  What's Included:
                </h3>
                <ul className="space-y-3">
                  {[
                    "Comprehensive law firm SEO audit and competitive analysis",
                    "Attorney keyword research and strategy development",
                    "Technical SEO fixes and site optimization",
                    "Monthly legal content planning",
                    "Local authority building and link acquisition",
                    "Monthly reporting and optimization",
                    "Ongoing rank tracking and adjustments",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">✓</span>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <div className="bg-accent/10 p-6 rounded-lg">
                  <p className="text-sm font-semibold text-foreground mb-2">
                    Option 1: Standard Monthly
                  </p>
                  <p className="text-3xl font-bold text-foreground">
                    $399/month
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    + $999 setup fee
                  </p>
                  <p className="text-xs text-accent font-semibold mt-3">
                    ✓ Guarantee: If we don&apos;t get you to page one in 4
                    months, you don&apos;t pay until we do
                  </p>
                </div>
                <div className="bg-accent/10 p-6 rounded-lg">
                  <p className="text-sm font-semibold text-foreground mb-2">
                    Option 2: Upfront Commitment
                  </p>
                  <p className="text-3xl font-bold text-foreground">$2,000</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    upfront for first 4 months, then $399/month
                  </p>
                  <p className="text-xs text-muted-foreground mt-3">
                    No setup fee • Best value for committed partners
                  </p>
                </div>
              </div>

              <Button className="w-full bg-accent hover:bg-accent/90" asChild>
                <a
                  href="https://calendly.com/folaafolabi/consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Law Firm SEO Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>

            {/* Paid Ads Service */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Paid Advertising for Attorneys
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Get immediate results with performance-based paid ads. We
                  manage Google Ads and paid search campaigns focused on
                  generating qualified legal leads, consultations, and
                  measurable ROI for your firm.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  What's Included:
                </h3>
                <ul className="space-y-3">
                  {[
                    "Campaign strategy and legal audience targeting",
                    "Ad creative design and attorney copywriting",
                    "Landing page optimization for consultations",
                    "Daily campaign monitoring and optimization",
                    "A/B testing and performance analysis",
                    "Monthly performance reports",
                    "Call and lead tracking setup",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">✓</span>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-accent/10 p-6 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">
                  Pricing Model
                </p>
                <p className="text-2xl font-bold text-foreground">
                  Management Fee + Commission
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  You fund the ad account. We only charge a management fee once
                  results are proven.
                </p>
              </div>

              <Button className="w-full bg-accent hover:bg-accent/90" asChild>
                <a
                  href="https://calendly.com/folaafolabi/consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discuss Attorney Ads Strategy
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>

          {/* Additional Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Web Development */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Law Firm Website Design
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Conversion-focused websites built to support your SEO and paid
                  traffic. Fast, mobile-optimized, and designed to turn visitors
                  into consultation requests.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  What We Build:
                </h3>
                <ul className="space-y-3">
                  {[
                    "Custom law firm websites",
                    "High-converting intake landing pages",
                    "Attorney bio and practice area pages",
                    "Mobile-optimized designs",
                    "CMS integration for easy updates",
                    "SEO-optimized structure",
                    "Fast performance for search and users",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">✓</span>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button className="w-full bg-accent hover:bg-accent/90" asChild>
                <a
                  href="https://calendly.com/folaafolabi/consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Law Firm Website Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>

            {/* Branding & Strategy */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Legal Branding & Strategy
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Build a cohesive legal brand identity and digital strategy
                  that resonates with your target clients. From positioning to
                  content strategy, we help you stand out in competitive legal
                  markets.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Our Offerings:
                </h3>
                <ul className="space-y-3">
                  {[
                    "Brand strategy and positioning",
                    "Logo and visual identity design",
                    "Brand guidelines and style system",
                    "Legal marketing strategy",
                    "Content strategy for attorneys",
                    "Content calendar planning",
                    "Market research and competitor analysis",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">✓</span>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button className="w-full bg-accent hover:bg-accent/90" asChild>
                <a
                  href="https://calendly.com/folaafolabi/consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discuss Legal Branding Strategy
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Frequently Asked Questions About Law Firm Marketing
          </h2>

          <div className="space-y-8">
            {[
              {
                question: "How long does it take to see law firm SEO results?",
                answer:
                  "SEO is a long-term strategy. Most law firms see first improvements within 1-2 months, but significant ranking gains typically take 3-6 months depending on competition, location, and current site status. We'll provide monthly reports showing progress.",
              },
              {
                question:
                  "Do you guarantee first page Google rankings for attorneys?",
                answer:
                  "We cannot guarantee rankings as Google's algorithm is complex and constantly changing. However, we use proven law firm SEO best practices and focus on sustainable, white-hat techniques that deliver real results. Our transparent monthly reporting shows exactly what's working.",
              },
              {
                question:
                  "Can you manage ads on platforms besides Google for law firms?",
                answer:
                  "Yes. We can manage Google Ads and other paid search campaigns where they make sense for your practice area and target market.",
              },
              {
                question: "What happens if I want to pause or stop?",
                answer:
                  "You can pause or cancel anytime without penalty. For SEO, we'll provide a full handoff of all content, reports, and strategy. For paid ads, the account remains yours to manage or transfer.",
              },
              {
                question: "Do you offer custom packages for law firms?",
                answer:
                  "Absolutely. Every law firm is different. We can create custom packages combining SEO, paid ads, website design, and legal branding. Contact us for a consultation.",
              },
            ].map((faq, i) => (
              <div key={i} className="border-b pb-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent text-accent-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Grow Your Law Firm?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Schedule a free consultation to discuss which services are right for
            your practice.
          </p>
          <Button
            size="lg"
            className="bg-accent-foreground text-accent hover:bg-accent-foreground/90"
            asChild
          >
            <a
              href="https://calendly.com/folaafolabi/consultation"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Your Free Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </section>

      <Footer />
      <BackToTop />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            itemListElement: [
              {
                "@type": "Service",
                "@context": "https://schema.org",
                name: "Law Firm Search Engine Optimization (SEO)",
                description:
                  "Get discovered on Google with our law firm SEO strategy including technical optimization, legal content marketing, and authority building.",
                provider: {
                  "@type": "Organization",
                  name: "Marketspot Agency",
                  url: "https://marketspot.agency",
                },
              },
              {
                "@type": "Service",
                "@context": "https://schema.org",
                name: "Law Firm Paid Advertising Management",
                description:
                  "Performance-based paid ads on Google and paid search platforms to generate qualified legal leads and consultations.",
                provider: {
                  "@type": "Organization",
                  name: "Marketspot Agency",
                  url: "https://marketspot.agency",
                },
              },
              {
                "@type": "Service",
                "@context": "https://schema.org",
                name: "Law Firm Website Design",
                description:
                  "Custom, conversion-focused law firm websites built to support SEO and paid traffic. Fast, mobile-optimized, and designed to convert.",
                provider: {
                  "@type": "Organization",
                  name: "Marketspot Agency",
                  url: "https://marketspot.agency",
                },
              },
              {
                "@type": "Service",
                "@context": "https://schema.org",
                name: "Legal Branding & Digital Strategy",
                description:
                  "Build a cohesive legal brand identity and digital strategy from positioning to content strategy.",
                provider: {
                  "@type": "Organization",
                  name: "Marketspot Agency",
                  url: "https://marketspot.agency",
                },
              },
            ],
          }),
        }}
      />
    </main>
  );
}
