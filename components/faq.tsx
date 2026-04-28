import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const faqItems = [
  {
    question: "How long does SEO take to show results?",
    answer:
      "Most sites start seeing meaningful movement in 3 to 6 months, depending on competition, technical health, and how much content and authority the site already has.",
  },
  {
    question: "Do you work with businesses outside your local market?",
    answer:
      "Yes. We work remotely with SMBs in different markets and tailor the strategy to the audience, competition, and search intent in each location.",
  },
  {
    question: "What makes Marketspot different from a typical agency?",
    answer:
      "We combine paid ads, SEO, creative, and web development in one team, and our paid ads work is structured around performance and revenue, not vanity metrics.",
  },
  {
    question: "Can you improve our website as part of SEO?",
    answer:
      "Yes. We handle technical SEO, page speed, conversion-focused copy, landing page improvements, and the website fixes that help rankings and conversions.",
  },
  {
    question: "How do we get started?",
    answer:
      "Book a consultation or request a custom audit. We review the site, identify the highest-impact opportunities, and recommend the next steps.",
  },
] as const;

export function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 animate-fade-up">
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Frequently Asked Questions
          </span>
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-balance"
            style={{ letterSpacing: "-0.02em" }}
          >
            Questions people ask before hiring us
          </h2>
        </div>

        <div className="rounded-2xl border border-border bg-card px-4 sm:px-6 md:px-8 shadow-sm animate-fade-up">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger className="text-left text-base sm:text-lg font-semibold text-foreground hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}