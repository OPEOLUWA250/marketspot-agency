import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBullseye,
  faPeopleGroup,
  faRocket,
  faGear,
  faHandshake,
  faCoins,
} from "@fortawesome/free-solid-svg-icons";

const reasons = [
  {
    icon: faBullseye,
    title: "We eat what we kill",
    description:
      "Commission-based pricing means our incentives are perfectly aligned with yours. Your growth is our income.",
  },
  {
    icon: faPeopleGroup,
    title: "You get the founders",
    description:
      "Not a junior account manager six months out of university. The people who built this company are the people working on your business.",
  },
  {
    icon: faRocket,
    title: "We move fast",
    description:
      "No approval chains, no internal bureaucracy. Decisions get made and work gets done in days, not weeks.",
  },
  {
    icon: faGear,
    title: "We do everything",
    description:
      "Strategy, copy, creative, web, SEO — under one roof. No coordinating between three different vendors.",
  },
  {
    icon: faHandshake,
    title: "We have skin in the game",
    description:
      "A big agency losing your account is a rounding error. For us, it's personal.",
  },
  {
    icon: faCoins,
    title: "No bloated retainers",
    description:
      "No vanity metrics. Just revenue.",
  },
];

export function WhyTrustUs() {
  return (
    <section id="why-trust-us" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mb-16 animate-fade-up">
          <h2
            className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance"
            style={{ letterSpacing: "-0.02em" }}
          >
            Why Trust Us?
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-accent mb-8">
            Because we don't get paid until you do.
          </p>
        </div>

        {/* Main content - Two column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-16 animate-fade-up">
          {/* Left column - Philosophy */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our paid ads model is performance-based — no results, no management
              fee. Our SEO retainer is priced low on purpose, because we'd rather
              earn your trust over 90 days than lock you into a long contract.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Here's the honest truth: the big agencies have hundreds of clients.
              You'll get an account manager, a templated strategy, and a monthly
              report. To them, you're a number.{" "}
              <span className="text-foreground font-semibold">To us, you're everything.</span>
            </p>
            <div className="pt-4 border-t border-border">
              <p className="text-lg text-foreground leading-relaxed italic">
                We're a new company — if we don't make you money, we don't
                survive.{" "}
                <span className="font-semibold">That's not a pitch. That's reality.</span>
              </p>
            </div>
          </div>

          {/* Right column - Visual emphasis */}
          <div className="flex flex-col justify-center">
            <div className="relative">
              <div
                className="absolute inset-0 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl blur-xl"
              ></div>
              <div className="relative bg-gradient-to-br from-accent/5 to-transparent border border-accent/20 rounded-2xl p-8 md:p-10">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Performance-based pricing</p>
                      <p className="text-sm text-muted-foreground mt-1">No results, no fees</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Low retainer pricing</p>
                      <p className="text-sm text-muted-foreground mt-1">Earn trust over 90 days</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 rounded-full bg-accent"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Your success = Our success</p>
                      <p className="text-sm text-muted-foreground mt-1">Perfectly aligned incentives</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What makes us different */}
        <div className="mb-8 animate-fade-up">
          <h3
            className="text-2xl md:text-3xl font-bold text-foreground mb-12"
            style={{ letterSpacing: "-0.01em" }}
          >
            What makes us different:
          </h3>

          {/* Grid of reasons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group relative p-8 md:p-10 rounded-2xl border border-border bg-background/50 hover:border-accent/50 hover:bg-background transition-all duration-300 hover:shadow-lg hover:shadow-accent/5 sm:hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${index * 0.06}s` }}
              >
                {/* Accent line */}
                <div className="absolute top-0 left-0 h-1 w-0 bg-accent rounded-full group-hover:w-8 transition-all duration-300"></div>

                {/* Icon */}
                <div className="mb-4">
                  <FontAwesomeIcon icon={reason.icon} className="w-6 h-6 text-accent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <h4 className="text-lg font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                  {reason.title}
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom emphasis */}
        <div className="mt-16 pt-12 border-t border-border/50 text-center animate-fade-up">
          <p className="text-xl md:text-2xl font-bold text-foreground italic">
            <span className="text-accent">No vanity metrics.</span> Just revenue.
          </p>
        </div>
      </div>
    </section>
  );
}
