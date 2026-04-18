import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-svh overflow-hidden bg-[#075056] pt-24 pb-8 md:pt-28 md:pb-10 flex items-center">
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
        <div className="space-y-6 md:space-y-7 text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FFFFDE]/35 bg-[#FFFFDE]/10 backdrop-blur-sm animate-fade-up"
            style={{ animationDelay: "0.05s" }}
          >
            <div className="w-2 h-2 rounded-full bg-[#E26128] animate-pulse"></div>
            <span className="text-sm font-medium text-[#FFFFDE]">
              Digital Excellence • Rapid Delivery
            </span>
          </div>

          {/* Main heading - Ultra thin, bold font weight */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-none text-[#FFFFDE] animate-fade-up"
            style={{ letterSpacing: "-0.05em", animationDelay: "0.12s" }}
          >
            Helping Small to mid-size businesses
            <span className="block text-[#E26128]">
              cross $1m/yr in Revenue
            </span>
          </h1>

          {/* Subheading */}
          <p
            className="max-w-3xl mx-auto text-lg md:text-xl text-[#FFFFDE] leading-relaxed text-balance animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            We help Small to mid-size businesses attract, nurture and convert
            their right audience through Done-for-you Paid ads and SEO.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2 w-full max-w-sm mx-auto sm:max-w-none animate-fade-up"
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
            <Button
              size="lg"
              variant="outline"
              className="h-12 w-full sm:w-auto px-8 rounded-full border-[#FFFFDE]/55 bg-transparent text-[#FFFFDE] hover:bg-[#FFFFDE]/10 hover:text-[#FFFFDE]"
              asChild
            >
              <a href="#portfolio">View Our Work</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
