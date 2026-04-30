import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen md:h-svh overflow-hidden bg-[#075056] pt-16 pb-6 md:pt-24 md:pb-8 flex items-center">
      {/* Ultra-thin decorative lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 right-10 w-64 h-64 rounded-full opacity-5 blur-3xl"
          style={{
            background: "radial-gradient(circle, var(--accent), transparent)",
          }}
        ></div>
        <div
          className="absolute bottom-20 left-10 w-96 h-96 rounded-full opacity-5 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, var(--secondary), transparent)",
          }}
        ></div>
      </div>

      <div className="relative w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="space-y-7 sm:space-y-8 md:space-y-10 text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FFFFDE]/35 bg-[#FFFFDE]/10 backdrop-blur-sm animate-fade-up"
            style={{ animationDelay: "0.05s" }}
          >
            <div className="w-2 h-2 rounded-full bg-[#E26128] animate-pulse"></div>
            <span className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-[#FFFFDE]">
              Real digital growth | Real business results
            </span>
          </div>

          {/* Main heading - Ultra thin, bold font weight */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-none text-[#FFFFDE] animate-fade-up"
            style={{ letterSpacing: "-0.05em", animationDelay: "0.12s" }}
          >
            Marketspot Agency is a digital marketing agency helping SMBs
            <span className="block text-[#E26128]">
              grow with SEO and paid ads
            </span>
          </h1>

          {/* Subheading */}
          <p
            className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl text-[#FFFFDE] leading-relaxed text-balance animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            We build search-first websites, conversion-focused content, and
            performance campaigns that turn traffic into revenue.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6 w-full max-w-sm mx-auto sm:max-w-none animate-fade-up"
            style={{ animationDelay: "0.28s" }}
          >
            <Button
              size="lg"
              className="h-12 w-full sm:w-auto px-8 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all"
              asChild
            >
              <a
                href="https://calendly.com/folaafolabi/consultation"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
