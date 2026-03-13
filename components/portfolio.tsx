import { ArrowUpRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const graphicsProjects = [
  {
    title: "Marketspot Brand Launch Kit",
    category: "Graphics Design",
    description:
      "Complete visual identity system with logo suite, social templates, and campaign graphics for a modern service business.",
    tags: ["Brand Identity", "Visual Strategy", "Campaign Assets"],
    accent: "from-primary/25 to-secondary/10",
  },
  {
    title: "Hospitality Rebrand Campaign",
    category: "Graphics Design",
    description:
      "Refreshed an existing hospitality brand with a bold visual direction that improved recall across digital and print touchpoints.",
    tags: ["Brand Refresh", "Print Design", "Social Design"],
    accent: "from-secondary/20 to-primary/10",
  },
  {
    title: "Product Story Visuals",
    category: "Graphics Design",
    description:
      "Built a conversion-ready creative system for product storytelling, from ad creatives to launch visuals.",
    tags: ["Creative Direction", "Ad Creatives", "Content Design"],
    accent: "from-primary/20 to-muted/40",
  },
  {
    title: "Corporate Identity Suite",
    category: "Graphics Design",
    description:
      "Designed a full corporate identity package that helped a professional services firm stand out in a crowded market.",
    tags: ["Identity Suite", "Presentation Design", "Brand Guidelines"],
    accent: "from-secondary/25 to-primary/10",
  },
];

const webProjects = [
  {
    title: "High-Converting Service Website",
    category: "Web development",
    description:
      "Custom marketing website with clear conversion paths and strong technical performance for search visibility.",
    tags: ["Performance-first Websites", "SEO Setup", "Conversion"],
    accent: "from-primary/20 to-secondary/10",
  },
  {
    title: "Business Operations Portal",
    category: "Web development",
    description:
      "Full-stack dashboard for internal operations, streamlining team workflows and reporting in one platform.",
    tags: ["Full-stack Development", "Dashboard", "Automation"],
    accent: "from-secondary/20 to-primary/8",
  },
  {
    title: "E-commerce Growth Storefront",
    category: "Web development",
    description:
      "Built an e-commerce storefront with optimized product pages and checkout flow designed to improve sales completion.",
    tags: ["E-commerce Solutions", "UX Optimization", "Scalability"],
    accent: "from-primary/15 to-muted/40",
  },
  {
    title: "Lead Capture Landing System",
    category: "Web development",
    description:
      "Multi-page lead generation experience with analytics hooks and fast load times for better campaign outcomes.",
    tags: ["Landing Pages", "Analytics", "Technical SEO"],
    accent: "from-secondary/20 to-primary/12",
  },
];

type WorkItem = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  accent: string;
};

function WorkCarousel({
  title,
  subtitle,
  projects,
}: {
  title: string;
  subtitle: string;
  projects: WorkItem[];
}) {
  return (
    <div className="animate-fade-up">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">{title}</h3>
          <p className="mt-2 text-sm md:text-base text-muted-foreground">{subtitle}</p>
        </div>
      </div>

      <Carousel
        opts={{ align: "start", loop: true }}
        className="relative"
        aria-label={`${title} carousel`}
      >
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem
              key={`${project.title}-${index}`}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <article className="group h-full rounded-2xl border border-border bg-background overflow-hidden transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 hover:shadow-lg">
                <div className={`h-2 w-full bg-linear-to-r ${project.accent}`} />

                <div className="flex h-full flex-col p-6">
                  <div className="mb-3 flex items-start justify-between">
                    <span className="text-xs font-medium uppercase tracking-wide text-primary/85">
                      {project.category}
                    </span>
                    <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>

                  <h4 className="mb-3 text-lg font-bold leading-snug text-foreground">
                    {project.title}
                  </h4>
                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="hidden md:flex -left-4 border-border bg-background text-foreground hover:bg-muted" />
        <CarouselNext className="hidden md:flex -right-4 border-border bg-background text-foreground hover:bg-muted" />
      </Carousel>
    </div>
  );
}

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14 animate-fade-up">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Our Work
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground text-balance"
            style={{ letterSpacing: "-0.02em" }}
          >
            Focused portfolios, faster browsing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Explore selected projects by category without scrolling through a
            long page.
          </p>
        </div>

        <div className="space-y-14">
          <WorkCarousel
            title="Graphics Design"
            subtitle="Brand design projects that help businesses stand out in the market."
            projects={graphicsProjects}
          />

          <WorkCarousel
            title="Web development"
            subtitle="Modern websites and products built to make businesses easier to find online."
            projects={webProjects}
          />
        </div>
      </div>
    </section>
  );
}
