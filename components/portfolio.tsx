"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const graphicsProjects = [
  {
    title: "Marketspot Brand Launch Kit",
    category: "Graphics Design",
    description:
      "Complete visual identity system with logo suite, social templates, and campaign graphics for a modern service business.",
    tags: ["Brand Identity", "Visual Strategy", "Campaign Assets"],
    accent: "from-primary/25 to-secondary/10",
    image: "/opeHS .jpg",
  },
  {
    title: "Hospitality Rebrand Campaign",
    category: "Graphics Design",
    description:
      "Refreshed an existing hospitality brand with a bold visual direction that improved recall across digital and print touchpoints.",
    tags: ["Brand Refresh", "Print Design", "Social Design"],
    accent: "from-secondary/20 to-primary/10",
    image: "/opeHS .jpg",
  },
  {
    title: "Product Story Visuals",
    category: "Graphics Design",
    description:
      "Built a conversion-ready creative system for product storytelling, from ad creatives to launch visuals.",
    tags: ["Creative Direction", "Ad Creatives", "Content Design"],
    accent: "from-primary/20 to-muted/40",
    image: "/opeHS .jpg",
  },
  {
    title: "Corporate Identity Suite",
    category: "Graphics Design",
    description:
      "Designed a full corporate identity package that helped a professional services firm stand out in a crowded market.",
    tags: ["Identity Suite", "Presentation Design", "Brand Guidelines"],
    accent: "from-secondary/25 to-primary/10",
    image: "/opeHS .jpg",
  },
];

const webProjects = [
  {
    title: "Ecoclimate Foundation",
    category: "Web development",
    description:
      "Sustainable environmental organization website showcasing climate action initiatives and community engagement programs.",
    tags: ["Environmental Focus", "Community Impact", "Web Design"],
    accent: "from-primary/20 to-secondary/10",
    image: "/web-dev/ecoclimate.png",
    link: "https://www.ecoclimatefoundation.org/",
  },
  {
    title: "Seaventures",
    category: "Web development",
    description:
      "Marine adventure tourism platform connecting travelers with unforgettable ocean experiences and sustainable travel opportunities.",
    tags: ["Marine Adventures", "User Experience", "Bookings"],
    accent: "from-secondary/20 to-primary/8",
    image: "/web-dev/seaventures.png",
    link: "https://seaventureskenya.com/",
  },
  {
    title: "Ambani Fish Leather",
    category: "Web development",
    description:
      "Innovative sustainable leather products showcase with e-commerce integration for eco-conscious fashion and design enthusiasts.",
    tags: ["Sustainability", "E-commerce", "Product Showcase"],
    accent: "from-primary/15 to-muted/40",
    image: "/web-dev/afl.png",
    link: "https://afl.co.ke/",
  },
];

type WorkItem = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  accent: string;
  image: string;
  link?: string;
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
  const [api, setApi] = React.useState<CarouselApi>();
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Auto-scroll functionality
  useEffect(() => {
    if (!api) return;

    const autoplay = () => {
      if (api) {
        api.scrollNext();
      }
    };

    const startAutoplay = () => {
      autoplayRef.current = setInterval(autoplay, 4000);
    };

    const stopAutoplay = () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };

    startAutoplay();

    // Stop on hover
    const carouselElement = document.querySelector(
      `[aria-label="${title} carousel"]`,
    );
    if (carouselElement) {
      carouselElement.addEventListener("mouseenter", stopAutoplay);
      carouselElement.addEventListener("mouseleave", startAutoplay);
      carouselElement.addEventListener("touchstart", stopAutoplay);
      carouselElement.addEventListener("touchend", startAutoplay);

      return () => {
        carouselElement.removeEventListener("mouseenter", stopAutoplay);
        carouselElement.removeEventListener("mouseleave", startAutoplay);
        carouselElement.removeEventListener("touchstart", stopAutoplay);
        carouselElement.removeEventListener("touchend", startAutoplay);
        stopAutoplay();
      };
    }

    return () => stopAutoplay();
  }, [api, title]);

  return (
    <div className="animate-fade-up">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">
            {title}
          </h3>
          <p className="mt-2 text-sm md:text-base text-muted-foreground">
            {subtitle}
          </p>
        </div>
      </div>

      <Carousel
        opts={{ align: "start", loop: true }}
        setApi={setApi}
        className="relative group"
        aria-label={`${title} carousel`}
      >
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem
              key={`${project.title}-${index}`}
              className="md:basis-1/2 lg:basis-1/3"
            >
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <article className="group flex h-full flex-col rounded-2xl border border-primary/20 bg-linear-to-br from-background to-muted/50 overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:border-primary/60 hover:-translate-y-2 cursor-pointer hover:bg-background">
                    {/* Image section - premium focal point */}
                    <div className="relative w-full overflow-hidden bg-transparent h-40 sm:h-56 border-b border-primary/10 flex items-center justify-center">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-contain object-center transition-transform duration-500 group-hover:scale-105"
                        priority={index === 0}
                      />
                    </div>

                    {/* Content section - clean and separate */}
                    <div className="flex flex-col flex-1 p-5 md:p-6 gap-1">
                      {/* Category badge */}
                      <div className="mb-2">
                        <span className="inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary">
                          {project.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="mb-1 text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary line-clamp-2">
                        {project.title}
                      </h4>

                      {/* Description */}
                      <p className="flex-1 mb-4 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-accent/15 px-2.5 py-1 text-xs font-medium text-accent transition-colors group-hover:bg-accent/25"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </a>
              ) : (
                <article className="group flex h-full flex-col rounded-2xl border border-primary/20 bg-linear-to-br from-background to-muted/50 overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:border-primary/60 hover:-translate-y-2 hover:bg-background">
                  {/* Image section - premium focal point */}
                  <div className="relative w-full overflow-hidden bg-transparent h-40 sm:h-56 border-b border-primary/10 flex items-center justify-center">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-contain object-center transition-transform duration-500 group-hover:scale-105"
                      priority={index === 0}
                    />
                  </div>

                  {/* Content section - clean and separate */}
                  <div className="flex flex-col flex-1 p-5 md:p-6 gap-1">
                    {/* Category badge */}
                    <div className="mb-2">
                      <span className="inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-xs font-semibold text-primary">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="mb-1 text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary line-clamp-2">
                      {project.title}
                    </h4>

                    {/* Description */}
                    <p className="flex-1 mb-4 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-accent/15 px-2.5 py-1 text-xs font-medium text-accent transition-colors group-hover:bg-accent/25"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              )}
            </CarouselItem>
          ))}
        </CarouselContent>
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
          <div className="hidden">
            <WorkCarousel
              title="Graphics Design"
              subtitle="Brand design projects that help businesses stand out in the market."
              projects={graphicsProjects}
            />
          </div>

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
