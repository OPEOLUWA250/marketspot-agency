import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ReadyToStart() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-accent/5 via-background to-secondary/5 border-y border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Heading */}
          <div className="max-w-3xl mx-auto animate-fade-up">
            <h2
              className="text-3xl md:text-4xl font-bold text-foreground text-balance mb-4"
              style={{ letterSpacing: "-0.02em" }}
            >
              Ready to transform your revenue?
            </h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss how Marketspot can help your business scale. Whether you're ready to start immediately or just exploring options, we're here to help.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.08s" }}>
            <a href="#contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto h-12 px-8 rounded-full bg-accent text-accent-foreground font-semibold hover:bg-accent/90 active:bg-accent/80 transition-all duration-300 group hover:shadow-lg active:shadow-md hover:scale-105 active:scale-95"
              >
                Book a discovery call
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 active:translate-x-2 transition-transform" />
              </Button>
            </a>
            <a href="#portfolio" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto h-12 px-8 rounded-full border-2 border-accent/30 hover:border-accent/60 text-foreground hover:text-accent transition-all duration-300 group"
              >
                See our work
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
