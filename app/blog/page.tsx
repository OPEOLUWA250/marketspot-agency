import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Digital Marketing Blog | SEO Tips, Strategies & Resources | Marketspot Agency",
  description:
    "Learn digital marketing best practices, SEO strategies, paid ads tips, and web design insights. Expert guides to help your SMB grow online.",
  keywords: [
    "digital marketing blog",
    "SEO tips",
    "paid ads strategy",
    "web development",
    "marketing strategies",
  ],
  openGraph: {
    title: "Digital Marketing Blog | Marketspot Agency",
    description:
      "Expert insights and strategies for digital marketing, SEO, and paid ads.",
    type: "website",
    url: "/blog",
  },
};

const articles = [
  {
    id: 1,
    title:
      "How to Get Your Website Ranked on Google's First Page: Complete SEO Guide",
    description:
      "Learn the exact steps to improve your Google rankings. From technical SEO to content strategy, this guide covers everything you need to know.",
    category: "SEO",
    readTime: "8 min read",
    date: "Coming Soon",
    slug: "seo-guide-first-page",
  },
  {
    id: 2,
    title: "Google Ads Strategy for Small Businesses: Maximize ROI on Ad Spend",
    description:
      "Discover how to run profitable Google Ads campaigns without wasting money. Real strategies that work for SMBs with limited budgets.",
    category: "Paid Ads",
    readTime: "6 min read",
    date: "Coming Soon",
    slug: "google-ads-strategy",
  },
  {
    id: 3,
    title: "Why Your Website Isn't Converting: 10 Critical Elements to Fix",
    description:
      "Your website might be getting traffic but not converting. Here are the top 10 things that kill conversions and how to fix them.",
    category: "Web Design",
    readTime: "7 min read",
    date: "Coming Soon",
    slug: "website-conversion-optimization",
  },
  {
    id: 4,
    title: "Local SEO for Small Businesses: Dominate Google Local Search",
    description:
      "Get found locally on Google Maps and local search results. This guide covers everything from Google Business Profile optimization to local citations.",
    category: "SEO",
    readTime: "7 min read",
    date: "Coming Soon",
    slug: "local-seo-guide",
  },
  {
    id: 5,
    title:
      "Content Marketing Strategy: How to Drive Traffic and Leads with Blogs",
    description:
      "Blog content is one of the most effective marketing tools. Learn how to create content that ranks, attracts, and converts your audience.",
    category: "Content",
    readTime: "9 min read",
    date: "Coming Soon",
    slug: "content-marketing-strategy",
  },
  {
    id: 6,
    title: "Branding Guide for Digital Agencies: Build a Memorable Brand",
    description:
      "A strong brand sets you apart from competition. Learn how to build a brand identity that resonates with your ideal clients.",
    category: "Branding",
    readTime: "8 min read",
    date: "Coming Soon",
    slug: "agency-branding-guide",
  },
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] py-20 bg-[#075056] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-[#FFFFDE] mb-6">
              Digital Marketing Resources & Tips
            </h1>
            <p className="text-lg text-[#FFFFDE]/90 mb-8">
              Expert insights, strategies, and actionable advice to help your
              business grow online. Learn from our experience in SEO, paid ads,
              web development, and digital strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                className="group flex flex-col h-full border border-border rounded-lg overflow-hidden hover:shadow-lg hover:border-accent/50 transition-all duration-300 bg-card"
              >
                <div className="flex-1 p-6 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors line-clamp-3">
                    {article.title}
                  </h2>

                  <p className="text-muted-foreground text-sm flex-1 mb-4 line-clamp-3">
                    {article.description}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-xs text-muted-foreground">
                      {article.date}
                    </span>
                    <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Get Digital Marketing Tips in Your Inbox
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter for weekly SEO tips, paid ads
            strategies, and marketing insights tailored for SMBs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background"
            />
            <Button className="bg-accent hover:bg-accent/90">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* Services Link */}
      <section className="py-16 bg-accent text-accent-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-lg mb-8 opacity-90">
            Explore our full range of services or schedule a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-accent-foreground text-accent hover:bg-accent-foreground/90"
              asChild
            >
              <a href="/services">View Our Services</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground/10"
              asChild
            >
              <a
                href="https://calendly.com/folaafolabi/consultation"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Consultation
              </a>
            </Button>
          </div>
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
            "@type": "CollectionPage",
            name: "Digital Marketing Blog",
            description:
              "Expert digital marketing blog covering SEO, paid ads, web development, and marketing strategies for small businesses.",
            url: "https://marketspot.agency/blog",
            publisher: {
              "@type": "Organization",
              name: "Marketspot Agency",
              logo: "https://marketspot.agency/logo.png",
            },
          }),
        }}
      />
    </main>
  );
}
