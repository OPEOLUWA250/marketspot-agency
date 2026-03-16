import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-[#075056] relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, #E26128, transparent)",
          }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#FFFFDE] text-balance mb-6 animate-fade-up"
            style={{ letterSpacing: "-0.02em" }}
          >
            Ready to get your business seen by your{" "}
            <span className="text-[#E26128]">target audience</span>?
          </h2>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.18s" }}
          >
            <Button
              size="lg"
              className="h-12 w-full sm:w-auto px-8 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 active:bg-primary/80 transition-all duration-300 group hover:shadow-lg active:shadow-md hover:scale-105 active:scale-95"
            >
              Request a custom digital presence audit
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 active:translate-x-2 transition-transform" />
            </Button>
          </div>

          {/* Contact info */}
          <div
            className="mt-12 pt-8 border-t border-[#FFFFDE]/30 animate-fade-up"
            style={{ animationDelay: "0.26s" }}
          >
            <p className="text-sm text-[#FFFFDE] mb-4">Or reach out directly</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <a
                href="mailto:folaafolabi@marketspot.agency"
                className="text-[#FFFFDE] hover:text-[#E26128] active:text-[#E26128] transition-all duration-300 font-medium hover:scale-110 active:scale-95 inline-block"
              >
                folaafolabi@marketspot.agency
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
