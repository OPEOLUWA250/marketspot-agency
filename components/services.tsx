import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    icon: faMagnifyingGlass,
    title: "SEO — Monthly Retainer",
    tagline:
      "We get you to the first page of Google when your customers are searching — and we keep you there.",
    description:
      "Choose your pricing model. Option 1: $999 setup + $399/month with a guarantee — if we don't get you to page one after 4 months, you don't pay us until we do. Option 2: Pay $2,000 upfront for the first 4 months (no setup fee), then $399/month ongoing.",
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
    <section
      id="services"
      className="relative overflow-hidden bg-background py-20 md:py-32"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-foreground/5 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="max-w-2xl animate-fade-up">
            <span className="mb-5 inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
              What We Do
            </span>
            <h2
              className="text-balance text-3xl font-bold text-foreground sm:text-4xl md:text-5xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              SEO that puts you in front of ready-to-buy clients.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              We stripped this section down to the work that compounds: getting
              your firm found when people are actively searching for help.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card/60 p-5 shadow-sm backdrop-blur-sm">
                <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Focus
                </p>
                <p className="mt-2 text-base text-foreground">
                  Ranking for the searches that turn into consultations.
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card/60 p-5 shadow-sm backdrop-blur-sm">
                <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Outcome
                </p>
                <p className="mt-2 text-base text-foreground">
                  More visibility, more qualified leads, more revenue.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-background via-background to-accent/5 p-7 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_70px_-28px_rgba(226,97,40,0.18)] animate-fade-up card-interactive sm:p-8 md:p-10"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent via-accent/60 to-transparent"></div>
                <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-accent/10 blur-3xl opacity-60 transition-opacity duration-300 group-hover:opacity-100"></div>

                <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent ring-1 ring-accent/15 transition-transform duration-300 group-hover:scale-110">
                    <FontAwesomeIcon icon={service.icon} className="h-6 w-6" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-accent">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-base font-medium text-accent/90">
                      {service.tagline}
                    </p>
                    <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
                      {service.description}
                    </p>

                    <div className="mt-8 grid grid-cols-3 gap-2 sm:gap-3">
                      {service.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="min-h-10 rounded-full border border-border bg-background/80 px-2 py-2 text-center text-[11px] font-medium leading-tight text-foreground shadow-sm transition-colors duration-300 group-hover:border-accent/30 group-hover:bg-accent/5 sm:px-4 sm:text-sm"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
