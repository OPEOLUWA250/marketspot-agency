import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section
      id="contact"
      className="py-20 md:py-32 bg-background relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, var(--accent), transparent)",
          }}
        ></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground text-balance mb-6"
            style={{ letterSpacing: "-0.02em" }}
          >
            Ready to elevate your digital presence?
          </h2>

          <p className="text-lg text-muted-foreground mb-8 text-balance">
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
              className="h-12 px-8 rounded-full border-border hover:bg-muted/50"
            >
              Get a Free Quote
            </Button>
          </div>

          {/* Contact info */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              Or reach out directly
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <a
                href="mailto:opeoluwadejumos@gmail.com"
                className="text-foreground hover:text-accent transition-colors font-medium"
              >
                opeoluwadejumos@gmail.com
              </a>
              <a
                href="tel:09015883729"
                className="text-foreground hover:text-accent transition-colors font-medium"
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
