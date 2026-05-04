import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Digital Marketing Services | Marketspot Agency - SEO, Paid Ads & Web Development",
  description:
    "Explore our full range of digital marketing services. From SEO and paid ads to web development and branding - we help SMBs grow online with measurable results.",
  keywords: [
    "digital marketing services",
    "SEO services",
    "paid ads management",
    "web development services",
    "branding services",
    "content marketing",
  ],
  openGraph: {
    title: "Digital Marketing Services | Marketspot Agency",
    description:
      "Full-service digital marketing agency offering SEO, paid ads, web development, and branding for SMBs.",
    type: "website",
    url: "/services",
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
              Our Digital Marketing Services
            </h1>
            <p className="text-lg text-[#FFFFDE]/90 mb-8">
              End-to-end solutions to help your business get found, convert more
              leads, and grow revenue online.
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
                  Search Engine Optimization (SEO)
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Get discovered on Google when your customers are searching for
                  your services. Our SEO strategy combines technical
                  optimization, content marketing, and authority building to
                  improve rankings and drive organic traffic.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  What's Included:
                </h3>
                <ul className="space-y-3">
                  {[
                    "Comprehensive SEO audit and competitive analysis",
                    "Keyword research and strategy development",
                    "Technical SEO fixes and site optimization",
                    "Monthly blog content (2-4 posts)",
                    "Backlink building and authority development",
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

              <div className="bg-accent/10 p-6 rounded-lg">
                <p className="text-sm text-muted-foreground mb-2">
                  Starting at
                </p>
                <p className="text-3xl font-bold text-foreground">$300/month</p>
                <p className="text-sm text-muted-foreground mt-2">
                  + $500 setup fee for audit and strategy
                </p>
              </div>

              <Button className="w-full bg-accent hover:bg-accent/90" asChild>
                <a
                  href="https://calendly.com/folaafolabi/consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get SEO Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>

            {/* Paid Ads Service */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Paid Advertising Management
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Get immediate results with performance-based paid ads. We
                  manage Google Ads, Facebook/Instagram, and LinkedIn campaigns
                  focused on generating leads, sales, and measurable ROI for
                  your business.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  What's Included:
                </h3>
                <ul className="space-y-3">
                  {[
                    "Campaign strategy and audience targeting",
                    "Ad creative design and copywriting",
                    "Landing page optimization",
                    "Daily campaign monitoring and optimization",
                    "A/B testing and performance analysis",
                    "Monthly performance reports",
                    "Lead and sales tracking setup",
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
                  You fund the ad account. We only charge management fee once
                  results are proven.
                </p>
              </div>

              <Button className="w-full bg-accent hover:bg-accent/90" asChild>
                <a
                  href="https://calendly.com/folaafolabi/consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Discuss Paid Ads Strategy
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
                  Web Development & Design
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Conversion-focused websites built to support your SEO and paid
                  traffic. Fast, mobile-optimized, and designed to turn visitors
                  into customers.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  What We Build:
                </h3>
                <ul className="space-y-3">
                  {[
                    "Custom agency/business websites",
                    "High-converting landing pages",
                    "E-commerce sites with Shopify",
                    "Mobile-optimized designs",
                    "CMS integration for easy updates",
                    "SEO-optimized structure",
                    "Fast performance (90+ Lighthouse score)",
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
                  Get Website Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>

            {/* Branding & Strategy */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Branding & Digital Strategy
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Build a cohesive brand identity and digital strategy that
                  resonates with your target audience. From logo design to
                  content strategy, we help you stand out.
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
                    "Digital marketing strategy",
                    "Social media content strategy",
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
                  Discuss Branding Strategy
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
            Frequently Asked Questions About Our Services
          </h2>

          <div className="space-y-8">
            {[
              {
                question: "How long does it take to see SEO results?",
                answer:
                  "SEO is a long-term strategy. Most clients see first improvements within 1-2 months, but significant ranking improvements typically take 3-6 months depending on competition and current site status. We'll provide monthly reports showing progress.",
              },
              {
                question: "Do you guarantee first page Google rankings?",
                answer:
                  "We cannot guarantee rankings as Google's algorithm is complex and constantly changing. However, we use proven SEO best practices and focus on sustainable, white-hat techniques that deliver real results. Our transparent monthly reporting shows exactly what's working.",
              },
              {
                question:
                  "Can you manage ads on other platforms besides Google?",
                answer:
                  "Yes! We manage campaigns on Google Ads, Facebook/Instagram, LinkedIn, and TikTok. We'll recommend which platforms make sense for your business and audience.",
              },
              {
                question: "What happens if I want to pause or stop?",
                answer:
                  "You can pause or cancel anytime without penalty. For SEO, we'll provide a full handoff of all content, reports, and strategy. For paid ads, the account remains yours to manage or transfer.",
              },
              {
                question: "Do you offer custom packages?",
                answer:
                  "Absolutely. Every business is different. We can create custom packages combining SEO, paid ads, web development, and branding. Contact us for a consultation.",
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
            Ready to Grow Your Business?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Schedule a free consultation to discuss which services are right for
            you.
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
                name: "Search Engine Optimization (SEO)",
                description:
                  "Get discovered on Google with our comprehensive SEO strategy including technical optimization, content marketing, and authority building.",
                provider: {
                  "@type": "Organization",
                  name: "Marketspot Agency",
                  url: "https://marketspot.agency",
                },
              },
              {
                "@type": "Service",
                "@context": "https://schema.org",
                name: "Paid Advertising Management",
                description:
                  "Performance-based paid ads on Google, Facebook, Instagram, and LinkedIn to generate leads and sales.",
                provider: {
                  "@type": "Organization",
                  name: "Marketspot Agency",
                  url: "https://marketspot.agency",
                },
              },
              {
                "@type": "Service",
                "@context": "https://schema.org",
                name: "Web Development & Design",
                description:
                  "Custom, conversion-focused websites built to support SEO and paid traffic. Fast, mobile-optimized, and designed to convert.",
                provider: {
                  "@type": "Organization",
                  name: "Marketspot Agency",
                  url: "https://marketspot.agency",
                },
              },
              {
                "@type": "Service",
                "@context": "https://schema.org",
                name: "Branding & Digital Strategy",
                description:
                  "Build a cohesive brand identity and digital strategy from logo design to content strategy.",
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
