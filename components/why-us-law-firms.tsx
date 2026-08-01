export function WhyUsLawFirms() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-foreground/5 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
              Why U.S Law Firms?
            </span>
            <h2
              className="mt-5 text-balance text-3xl font-bold text-foreground sm:text-4xl md:text-5xl"
              style={{ letterSpacing: "-0.03em" }}
            >
              Google is where most legal demand starts.
            </h2>
            <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              <p>
                According to Google, 87% of Law firm clients in the US start on
                google.
              </p>
              <p>
                This means about 9 in 10 potential clients of law firms leads go
                on google to search for things related to their case and they
                eventually contact the firm that has helped them the most.
              </p>
              <p>
                And 99% of the time, it&apos;s firms in the first page that get
                the lionshare.
              </p>
              <p className="text-2xl font-semibold text-foreground">
                This is why we built MarketSpot.
              </p>
            </div>
          </div>

          <div className="relative animate-fade-up">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-accent/10 via-transparent to-accent/5 blur-xl"></div>
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 sm:p-10 shadow-[0_24px_80px_-36px_rgba(0,0,0,0.35)]">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-border bg-background p-5">
                  <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                    Search first
                  </p>
                  <p className="mt-2 text-lg font-semibold text-foreground">
                    Clients start with Google before they call anyone.
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-background p-5">
                  <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                    First page wins
                  </p>
                  <p className="mt-2 text-lg font-semibold text-foreground">
                    Visibility at the top captures the lion&apos;s share.
                  </p>
                </div>
                <div className="sm:col-span-2 rounded-2xl border border-accent/20 bg-accent/5 p-6">
                  <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                    Our focus
                  </p>
                  <p className="mt-2 text-xl font-semibold text-foreground">
                    Get law firms found where case-driven demand already exists.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
