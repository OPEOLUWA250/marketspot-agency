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
    description: "No vanity metrics. Just revenue.",
  },
];

export function WhyTrustUs() {
  return (
    <section
      id="why-trust-us"
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
        {/* Header */}
        <div className="max-w-4xl mb-16 animate-fade-up">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FFFFDE] mb-6 text-balance"
            style={{ letterSpacing: "-0.02em" }}
          >
            Why Trust Us?
          </h2>
          <p className="text-2xl md:text-3xl font-semibold text-[#E26128] mb-8">
            Because we don't get paid until you do.
          </p>
        </div>

        {/* Main content - Two column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-16 animate-fade-up">
          {/* Left column - Philosophy */}
          <div className="space-y-6">
            <p className="text-lg text-[#FFFFDE]/75 leading-relaxed">
              Our paid ads model is performance-based — no results, no
              management fee. Our SEO retainer is priced low on purpose, because
              we'd rather earn your trust over 90 days than lock you into a long
              contract.
            </p>
            <p className="text-lg text-[#FFFFDE]/75 leading-relaxed mb-4">
              Here's the honest truth: the big agencies have hundreds of
              clients. You'll get an account manager, a templated strategy, and
              a monthly report.
            </p>
            <p className="text-xl sm:text-2xl font-black text-[#E26128] leading-relaxed">
              To them, you're a number. To us, you're everything.
            </p>
            <div className="pt-4 border-t border-[#FFFFDE]/20">
              <p className="text-lg text-[#FFFFDE] leading-relaxed italic">
                We're a new company, if we don't make you money, we don't
                survive.{" "}
                <span className="font-semibold">
                  That's not a pitch. That's reality.
                </span>
              </p>
            </div>
          </div>

          {/* Right column - Visual emphasis */}
          <div className="flex flex-col justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#E26128]/15 to-[#E26128]/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white border border-white/30 hover:border-[#E26128]/30 rounded-2xl p-8 md:p-10 shadow-md hover:shadow-lg hover:shadow-[#E26128]/10 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-[#E26128]/5">
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#E26128]/15 flex items-center justify-center shrink-0 mt-1 group-hover:bg-[#E26128]/25 transition-colors duration-300">
                      <div className="w-2 h-2 rounded-full bg-[#E26128]"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-[#E26128] transition-colors duration-300">
                        Performance-based pricing
                      </p>
                      <p className="text-sm text-foreground/60 mt-1 group-hover:text-foreground/80 transition-colors duration-300">
                        No results, no fees
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#E26128]/15 flex items-center justify-center shrink-0 mt-1 group-hover:bg-[#E26128]/25 transition-colors duration-300">
                      <div className="w-2 h-2 rounded-full bg-[#E26128]"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-[#E26128] transition-colors duration-300">
                        Low retainer pricing
                      </p>
                      <p className="text-sm text-foreground/60 mt-1 group-hover:text-foreground/80 transition-colors duration-300">
                        Earn trust over 90 days
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-[#E26128]/15 flex items-center justify-center shrink-0 mt-1 group-hover:bg-[#E26128]/25 transition-colors duration-300">
                      <div className="w-2 h-2 rounded-full bg-[#E26128]"></div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-[#E26128] transition-colors duration-300">
                        Your success = Our success
                      </p>
                      <p className="text-sm text-foreground/60 mt-1 group-hover:text-foreground/80 transition-colors duration-300">
                        Perfectly aligned incentives
                      </p>
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
            className="text-2xl md:text-3xl font-bold text-[#FFFFDE] mb-12"
            style={{ letterSpacing: "-0.01em" }}
          >
            What makes us different:
          </h3>

          {/* Grid of reasons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group relative p-8 md:p-10 rounded-2xl border border-white/20 bg-white hover:border-[#E26128]/40 hover:shadow-xl hover:shadow-[#E26128]/15 transition-all duration-300 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white hover:to-[#E26128]/5 animate-fade-up"
                style={{ animationDelay: `${index * 0.06}s` }}
              >
                {/* Accent line - enhanced */}
                <div className="absolute top-0 left-0 h-1.5 w-0 bg-gradient-to-r from-[#E26128] to-[#E26128]/60 rounded-full group-hover:w-12 transition-all duration-300"></div>

                {/* Icon - with glow on hover */}
                <div className="mb-4 relative">
                  <div className="absolute inset-0 bg-[#E26128]/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8"></div>
                  <FontAwesomeIcon
                    icon={reason.icon}
                    className="relative w-6 h-6 text-[#E26128] opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                  />
                </div>

                {/* Content */}
                <h4 className="text-lg font-bold text-foreground mb-3 group-hover:text-[#E26128] transition-colors duration-300">
                  {reason.title}
                </h4>
                <p className="text-foreground/70 text-sm leading-relaxed group-hover:text-foreground transition-colors duration-300">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom emphasis */}
        <div className="mt-16 pt-12 border-t border-[#FFFFDE]/20 text-center animate-fade-up">
          <p className="text-xl md:text-2xl font-bold text-[#FFFFDE] italic">
            <span className="text-[#E26128]">No vanity metrics.</span> Just
            revenue.
          </p>
        </div>
      </div>
    </section>
  );
}
