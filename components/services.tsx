import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    icon: faFire,
    title: "Paid Ads — Performance-Based",
    tagline: "We run your ads. You fund the account. That's it.",
    description:
      "From creative and copy to strategy and optimization — we handle everything. You only pay a management fee once we've shown results, plus a commission on the leads and customers we generate for you.",
    highlights: [
      "Ad creatives",
      "Campaign strategy",
      "Audience targeting",
      "Sales page copy",
      "Full campaign management",
    ],
  },
  {
    icon: faMagnifyingGlass,
    title: "SEO — Monthly Retainer",
    tagline:
      "We get you to the first page of Google when your customers are searching — and we keep you there.",
    description:
      "For a one-time $500 setup fee, we audit your site, build your strategy, and fix the technical gaps. Then for $300/month, we handle everything ongoing — blog content, backlinks, on-page optimization, and website management.",
    highlights: [
      "Keyword research",
      "SEO strategy",
      "Monthly content",
      "Technical fixes",
      "Backlink building",
      "Monthly reports",
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
            What We Do
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground text-balance"
            style={{ letterSpacing: "-0.02em" }}
          >
            Services that drive real results
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="group relative p-6 sm:p-7 md:p-10 rounded-2xl border border-border bg-background hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 active:shadow-lg active:border-accent/60 sm:hover:-translate-y-1 animate-fade-up card-interactive"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {/* Accent line on top */}
                <div className="absolute top-0 left-0 h-1 w-0 bg-accent rounded-full group-hover:w-12 active:w-12 transition-all duration-300"></div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 active:bg-accent/25 transition-all duration-300 group-hover:scale-110 active:scale-95">
                  <FontAwesomeIcon
                    icon={service.icon}
                    className="w-6 h-6 text-accent"
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-2 transition-colors duration-300 group-hover:text-accent active:text-accent">
                  {service.title}
                </h3>

                {/* Tagline */}
                <p className="text-sm font-medium text-accent mb-4 transition-colors duration-300">
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="text-muted-foreground mb-8 leading-relaxed transition-colors duration-300 group-hover:text-foreground/80">
                  {service.description}
                </p>

                {/* What we do label */}
                <p className="text-xs font-semibold text-foreground/60 uppercase tracking-wider mb-4">
                  What we do:
                </p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {service.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="text-sm text-foreground flex items-start gap-3 transition-all duration-300 group-hover:translate-x-1"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 transition-transform group-hover:scale-125 mt-1.5"></span>
                      <span>{highlight}</span>
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
