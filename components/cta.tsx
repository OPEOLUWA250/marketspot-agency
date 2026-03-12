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
            className="text-4xl md:text-5xl font-bold text-[#FFFFDE] text-balance mb-6"
            style={{ letterSpacing: "-0.02em" }}
          >
            Ready to elevate your <span className="text-[#E26128]">digital presence</span>?
          </h2>

          <p className="text-lg text-[#FFFFDE] mb-8 text-balance">
            Let&apos;s discuss your project and create something extraordinary
            together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="h-12 px-8 rounded-full bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all group"
            >
              Schedule a Call
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 rounded-full border-[#FFFFDE]/55 bg-transparent text-[#FFFFDE] hover:bg-[#FFFFDE]/10 hover:text-[#FFFFDE]"
            >
              Get a Free Quote
            </Button>
          </div>

          {/* Contact info */}
          <div className="mt-12 pt-8 border-t border-[#FFFFDE]/30">
            <p className="text-sm text-[#FFFFDE] mb-4">
              Or reach out directly
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <a
                href="mailto:opeoluwadejumos@gmail.com"
                className="text-[#FFFFDE] hover:text-[#E26128] transition-colors font-medium"
              >
                opeoluwadejumos@gmail.com
              </a>
              <a
                href="tel:09015883729"
                className="text-[#FFFFDE] hover:text-[#E26128] transition-colors font-medium"
              >
                09015883729
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
