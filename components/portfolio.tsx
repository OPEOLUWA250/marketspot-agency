import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Brand Identity & Web Presence",
    category: "Web Development · Branding",
    description:
      "Full brand overhaul and responsive website for a Lagos-based fashion label. Resulted in 3× increase in online enquiries within 60 days.",
    tags: ["Next.js", "Brand Design", "SEO"],
    accent: "from-accent/20 to-secondary/10",
  },
  {
    title: "Social Growth Campaign",
    category: "Digital Marketing",
    description:
      "Organic growth strategy for a fintech startup — content calendar, copy, and paid ads that drove 12k new followers and a 40% lift in sign-ups.",
    tags: ["Social Media", "Paid Ads", "Copywriting"],
    accent: "from-secondary/15 to-accent/5",
  },
  {
    title: "E-commerce Launch",
    category: "Web Development · Marketing",
    description:
      "End-to-end e-commerce build and launch strategy for a Nigerian beauty brand — from storefront design to first-month sales campaign.",
    tags: ["E-commerce", "UI/UX", "Growth Marketing"],
    accent: "from-accent/10 to-muted/30",
  },
  {
    title: "Visual Identity System",
    category: "Graphics Design",
    description:
      "Cohesive visual identity — logo, colour palette, typography, and brand guidelines — for a professional services firm entering a competitive market.",
    tags: ["Logo Design", "Brand Guidelines", "Print"],
    accent: "from-secondary/20 to-accent/10",
  },
  {
    title: "SEO & Content Strategy",
    category: "Digital Marketing · SEO",
    description:
      "Six-month SEO and content programme that pushed a local business from page 5 to position 3 on Google for its primary search terms.",
    tags: ["SEO", "Content Marketing", "Analytics"],
    accent: "from-accent/15 to-secondary/5",
  },
  {
    title: "Product Landing Page",
    category: "Web Development · Design",
    description:
      "High-converting product landing page with micro-animations and optimised copy, achieving a 28% conversion rate on launch week.",
    tags: ["Landing Page", "Conversion", "Animation"],
    accent: "from-muted/40 to-accent/10",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16 animate-fade-up">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Our Work
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground text-balance"
            style={{ letterSpacing: "-0.02em" }}
          >
            Results we&apos;re proud of
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            A selection of projects across web development, design, and digital
            marketing that delivered measurable impact.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative flex flex-col rounded-2xl border border-border bg-background overflow-hidden hover:border-accent/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              {/* Colour band */}
              <div className={`h-2 w-full bg-linear-to-r ${project.accent}`} />

              {/* Body */}
              <div className="flex flex-col flex-1 p-7">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-medium text-accent/80 tracking-wide uppercase">
                    {project.category}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5" />
                </div>

                <h3 className="text-lg font-bold text-foreground mb-3 leading-snug">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
