import { Code2, Palette, TrendingUp } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Marketing and content strategy",
    description:
      "Marketing strategies that help your audience find you easily.",
    highlights: [
      "SEO Optimization",
      "Social Media Strategy",
      "Growth Marketing",
    ],
  },
  {
    icon: Palette,
    title: "Graphics Design",
    description:
      "Brand designs that help your business stand out in the market.",
    highlights: ["Brand Identity", "UI/UX Design", "Visual Strategy"],
  },
  {
    icon: Code2,
    title: "Web development",
    description:
      "Custom websites built with modern tech designed to help your business be seen easily on the internet.",
    highlights: [
      "Performance-first Websites",
      "Full-stack Development",
      "E-commerce Solutions",
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-16 animate-fade-up">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Our Expertise
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground text-balance"
            style={{ letterSpacing: "-0.02em" }}
          >
            Services designed for your growth
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl border border-border bg-background hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 animate-fade-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {/* Accent line on top */}
                <div className="absolute top-0 left-0 h-1 w-0 bg-accent rounded-full group-hover:w-12 transition-all duration-300"></div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-6 h-6 text-accent" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {service.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="text-sm text-foreground flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
