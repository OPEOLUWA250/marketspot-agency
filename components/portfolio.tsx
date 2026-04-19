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
    title: "The Farmers' Prayer Brand Identity",
    category: "Graphics Design",
    description:
      "Comprehensive brand identity for an agricultural enterprise featuring sophisticated logo design, visual system, and brand elements that communicate trust and agricultural heritage.",
    tags: ["Brand Identity", "Agriculture", "Logo Design"],
    accent: "from-green-500/20 to-emerald-500/10",
    image: "/graphics/Artboard 1.jpg.jpeg",
    link: "https://www.behance.net/gallery/226789125/The-Farmers-Prayer-Brand-Identity",
  },
  {
    title: "Brandoverse Brand Identituy",
    category: "Graphics Design",
    description:
      "Complete brand strategy and visual identity design for Brandoverse, a community platform that educates and helps brand owners evolve their businesses.",
    tags: ["Brand Strategy", "Visual Identity", "Community Branding"],
    accent: "from-blue-500/20 to-purple-500/10",
    image: "/graphics/Cover.png",
    link: "https://www.behance.net/gallery/245870047/Brand-Identity-Design-Brandoverse?platform=direct",
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
                  <article className="group relative flex h-full flex-col rounded-2xl border border-primary/30 overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:border-primary/80 hover:-translate-y-2 cursor-pointer bg-background hover:bg-gradient-to-br hover:from-background hover:to-muted/80">
                    {/* Accent bar at top */}
                    <div
                      className={`h-1.5 w-full bg-gradient-to-r ${project.accent} transition-all duration-500 group-hover:h-2`}
                    ></div>

                    {/* Image section with gradient overlay */}
                    <div className="relative w-full overflow-hidden bg-gradient-to-br from-background/20 to-muted/50 h-40 sm:h-56 flex items-center justify-center">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                      ></div>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                        priority={index === 0}
                      />
                    </div>

                    {/* Content section with enhanced styling */}
                    <div className="flex flex-col flex-1 p-5 md:p-6 gap-2">
                      {/* Category badge - more vibrant */}
                      <div className="mb-1">
                        <span
                          className={`inline-flex items-center rounded-full bg-gradient-to-r ${project.accent} px-3 py-1.5 text-xs font-bold text-foreground shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-105`}
                        >
                          {project.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h4 className="mb-1 text-lg font-bold leading-snug text-foreground transition-colors group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:text-transparent group-hover:from-primary group-hover:to-secondary line-clamp-2">
                        {project.title}
                      </h4>

                      {/* Description */}
                      <p className="flex-1 mb-3 text-sm leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tags - more colorful */}
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-primary/10 group-hover:border-primary/30 transition-colors">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className={`rounded-full bg-gradient-to-r ${project.accent} px-2.5 py-1 text-xs font-semibold text-foreground/70 transition-all duration-300 group-hover:text-foreground group-hover:font-bold`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </a>
              ) : (
                <article className="group relative flex h-full flex-col rounded-2xl border border-primary/30 overflow-hidden shadow-lg transition-all duration-500 hover:shadow-2xl hover:border-primary/80 hover:-translate-y-2 cursor-pointer bg-background hover:bg-gradient-to-br hover:from-background hover:to-muted/80">
                  {/* Accent bar at top */}
                  <div
                    className={`h-1.5 w-full bg-gradient-to-r ${project.accent} transition-all duration-500 group-hover:h-2`}
                  ></div>

                  {/* Image section with gradient overlay */}
                  <div className="relative w-full overflow-hidden bg-gradient-to-br from-background/20 to-muted/50 h-40 sm:h-56 flex items-center justify-center">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                    ></div>
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-110"
                      priority={index === 0}
                    />
                  </div>

                  {/* Content section with enhanced styling */}
                  <div className="flex flex-col flex-1 p-5 md:p-6 gap-2">
                    {/* Category badge - more vibrant */}
                    <div className="mb-1">
                      <span
                        className={`inline-flex items-center rounded-full bg-gradient-to-r ${project.accent} px-3 py-1.5 text-xs font-bold text-foreground shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-105`}
                      >
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h4 className="mb-1 text-lg font-bold leading-snug text-foreground transition-colors group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:text-transparent group-hover:from-primary group-hover:to-secondary line-clamp-2">
                      {project.title}
                    </h4>

                    {/* Description */}
                    <p className="flex-1 mb-3 text-sm leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags - more colorful */}
                    <div className="flex flex-wrap gap-2 pt-2 border-t border-primary/10 group-hover:border-primary/30 transition-colors">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className={`rounded-full bg-gradient-to-r ${project.accent} px-2.5 py-1 text-xs font-semibold text-foreground/70 transition-all duration-300 group-hover:text-foreground group-hover:font-bold`}
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
    <section
      id="portfolio"
      className="relative py-20 md:py-32 bg-[#075056] overflow-hidden"
    >
      {/* Decorative background elements - matching hero */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, #E26128, transparent)",
          }}
        ></div>
        <div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, #E26128, transparent)",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14 animate-fade-up">
          <span className="inline-block px-4 py-2 rounded-full border border-[#FFFFDE]/35 bg-[#FFFFDE]/10 text-[#FFFFDE] text-sm font-medium mb-4">
            Our Work
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#FFFFDE] text-balance"
            style={{ letterSpacing: "-0.02em" }}
          >
            Focused portfolios, faster browsing
          </h2>
          <p className="mt-4 text-lg text-[#FFFFDE]/75 leading-relaxed max-w-2xl">
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
