export function WhyTrustUs() {
  return (
    <section
      id="why-trust-us"
      className="relative overflow-hidden bg-[#075056] py-20 md:py-32"
    >
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-0 right-0 h-96 w-96 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, #E26128, transparent)",
          }}
        ></div>
        <div
          className="absolute bottom-0 left-0 h-96 w-96 rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, #E26128, transparent)",
          }}
        ></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-4xl animate-fade-up">
          <h2
            className="text-balance text-3xl font-bold text-[#FFFFDE] sm:text-4xl md:text-5xl lg:text-6xl"
            style={{ letterSpacing: "-0.03em" }}
          >
            Why Trust Us?
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch animate-fade-up">
          <div className="relative overflow-hidden rounded-[2rem] border border-[#FFFFDE]/15 bg-white/5 p-8 shadow-2xl shadow-black/10 backdrop-blur-sm sm:p-10 md:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,255,222,0.08),transparent_38%)]"></div>
            <div className="relative space-y-8">
              <p className="text-lg leading-relaxed text-[#FFFFDE]/80 md:text-xl">
                Here&apos;s the honest truth: the big agencies have hundreds of
                clients. You&apos;ll get an account manager, a templated
                strategy, and a monthly report.
              </p>
              <p className="text-2xl font-black leading-tight text-[#FFFFDE] sm:text-3xl md:text-4xl">
                To them, you&apos;re a number. To us, you&apos;re everything.
              </p>
              <div className="border-t border-[#FFFFDE]/15 pt-6">
                <p className="max-w-2xl text-lg leading-relaxed text-[#FFFFDE] md:text-xl">
                  We&apos;re a new company, if we don&apos;t make you money, we
                  don&apos;t survive.{" "}
                  <span className="font-semibold text-[#E26128]">
                    That&apos;s not a pitch. That&apos;s reality.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 self-stretch">
            <div className="rounded-[2rem] border border-[#FFFFDE]/15 bg-[#FFFFDE]/5 p-6 shadow-xl shadow-black/10 backdrop-blur-sm sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#E26128]">
                Client-first
              </p>
              <p className="mt-3 text-lg font-semibold text-[#FFFFDE]">
                Your growth has to matter more to us than it does to a big
                agency.
              </p>
            </div>
            <div className="rounded-[2rem] border border-[#FFFFDE]/15 bg-white p-6 shadow-xl shadow-black/10 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#E26128]">
                Incentives
              </p>
              <p className="mt-3 text-lg font-semibold text-foreground">
                We win when your pipeline gets stronger.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
