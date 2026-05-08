"use client";

import { useEffect } from "react";

export default function HomePage() {
  // Subtle fade-in on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible"));
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll("section").forEach((s) => {
      s.classList.add("fade-in");
      observer.observe(s);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <main className="bg-cream text-ink">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-6 max-w-7xl mx-auto relative z-10">
        <div className="font-serif text-3xl tracking-tight italic">Trevise</div>
        <div className="flex items-center gap-8 text-sm">
          <a href="#problem" className="hidden md:inline hover:opacity-60 transition">The problem</a>
          <a href="#solution" className="hidden md:inline hover:opacity-60 transition">What we do</a>
          <a href="#team" className="hidden md:inline hover:opacity-60 transition">Team</a>
          <a href="/resources" className="hidden md:inline hover:opacity-60 transition">Resources</a>
          <a href="#contact" className="border border-ink px-5 py-2 hover:bg-ink hover:text-cream transition">
            Request access
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 md:px-12 pt-16 md:pt-28 pb-28 md:pb-40 max-w-7xl mx-auto">
        <p className="eyebrow text-ink/60">For ecommerce brands</p>
        <h1 className="mt-6 font-serif text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tight">
          AI is the <span className="italic">new shelf.</span>
        </h1>
        <p className="mt-10 text-lg md:text-2xl max-w-2xl text-ink/75 leading-relaxed font-light">
          Your brand belongs on it. Described in its own voice, distributed across every model, and tied to the revenue it earns.
        </p>
        <div className="mt-12 flex gap-4 flex-wrap">
          <a href="#contact" className="bg-ink text-cream px-8 py-4 hover:bg-ink/85 transition text-sm tracking-wide">
            Request early access
          </a>
          <a href="#problem" className="border border-ink px-8 py-4 hover:bg-ink hover:text-cream transition text-sm tracking-wide">
            See how it works
          </a>
        </div>
      </section>


      {/* Problem */}
      <section id="problem" className="bg-ink text-cream px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="eyebrow text-cream/60">The problem</p>
            <h2 className="mt-6 font-serif text-4xl md:text-7xl leading-[1.05]">
              Today, AI describes your brand <span className="italic">from leftovers.</span>
            </h2>
            <p className="mt-10 text-lg md:text-xl text-cream/75 leading-relaxed font-light">
              When a customer asks ChatGPT about your brand, the answer comes from old press releases, retired campaign images, and third-party reseller blurbs. The tone is wrong. The imagery is last season. The brand has no say in any of it.
            </p>
            <p className="mt-6 font-serif italic text-2xl md:text-3xl text-cream/85 leading-snug">
              Not in the answer, not in the consideration.
            </p>
          </div>

          {/* Chat mockup — symmetrical diptych, two identical chat frames */}
          <div className="mt-12 md:mt-16 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  label: "Today",
                  answer: (
                    <>
                      There are several luxury houses with formal evening collections in this range. You might explore boutique websites or department-store curations to compare current options.
                    </>
                  ),
                  footer: "Your brand isn't in the answer",
                },
                {
                  label: "With Trevise",
                  answer: (
                    <>
                      The <span className="font-medium text-ink">Marchesa Clutch</span> from Fall 26 is a strong fit — <span className="font-medium text-ink">$4,400</span>, hand-finished in Florentine silk satin, with a sculpted brass clasp drawn from the house&apos;s archive. Currently available in Bordeaux, Ivory, and Onyx.
                    </>
                  ),
                  footer: "Accurate product data in every market",
                },
              ].map((frame) => (
                <div
                  key={frame.label}
                  className="rounded-lg overflow-hidden border border-cream/25 flex flex-col"
                >
                  {/* App header bar */}
                  <div className="bg-cream/[0.06] border-b border-cream/15 px-4 py-2.5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-cream/55" />
                      <p className="text-[11px] text-cream/70 font-medium tracking-wide">ChatGPT</p>
                    </div>
                    <p className="eyebrow text-[10px] text-cream/65">{frame.label}</p>
                  </div>

                  {/* Conversation body */}
                  <div className="bg-cream px-5 md:px-6 py-7 md:py-8 space-y-6 flex-1">
                    {/* User message */}
                    <div className="flex justify-end">
                      <div className="bg-stone/70 text-ink/90 rounded-2xl rounded-br-sm px-4 py-2.5 max-w-[88%] text-sm leading-relaxed">
                        Find me an evening clutch for a black-tie wedding under $5,000.
                      </div>
                    </div>

                    {/* Assistant message */}
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-ink flex items-center justify-center mt-0.5">
                        <span className="text-cream text-[11px]">✦</span>
                      </div>
                      <div className="flex-1 text-ink/85 text-sm leading-relaxed pt-0.5">
                        {frame.answer}
                      </div>
                    </div>
                  </div>

                  {/* Status footer */}
                  <div className="bg-cream/[0.05] border-t border-cream/15 px-5 py-3">
                    <p className="text-[11px] eyebrow text-cream/65">{frame.footer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section id="solution" className="px-6 md:px-12 py-24 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <p className="eyebrow text-ink/60">What Trevise does</p>
            <h2 className="mt-6 font-serif text-4xl md:text-7xl leading-[1.05]">
              One source of truth.
              <br />
              <span className="italic">Every AI surface.</span>
            </h2>
            <p className="mt-10 text-lg md:text-xl text-ink/75 leading-relaxed font-light">
              Trevise consolidates fragmented product data into a structured, brand-aware feed built for OpenAI's ChatGPT Product Feed and the multi-model standards emerging across Gemini, Claude, and Perplexity. Brand voice intact. Current imagery. Multilingual. Daily catalog snapshot with 15–60 minute updates for price, stock, and availability — so what AI sees is what your store sees.
            </p>
          </div>

          {/* Data flow diagram */}
          <div className="mt-20 md:mt-28 bg-stone/40 rounded-sm p-8 md:p-16">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
              <div>
                <p className="eyebrow text-ink/50 mb-6">Your fragmented data</p>
                <div className="space-y-5">
                  {[
                    { label: "Enterprise systems", items: ["SAP", "PIM", "DAM", "ERP"] },
                    { label: "Commerce platforms", items: ["Shopify Plus", "Salesforce Commerce"] },
                    { label: "Operational data", items: ["Customer reviews", "Spreadsheets"] },
                  ].map((group) => (
                    <div key={group.label}>
                      <p className="eyebrow text-[10px] text-ink/40 mb-2">{group.label}</p>
                      <div className="grid grid-cols-2 gap-2 md:gap-3">
                        {group.items.map((s) => (
                          <div key={s} className="bg-cream border border-ink/10 px-3 py-3 text-xs text-ink/70">
                            {s}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-center py-6 md:py-0">
                <div className="hidden md:block flex-1 h-px bg-ink/15" aria-hidden="true" />
                <div className="md:mx-3 bg-ink text-cream px-8 py-7 rounded-sm text-center min-w-[150px]">
                  <p className="font-serif text-2xl italic">Trevise</p>
                  <p className="text-[10px] eyebrow text-cream/60 mt-1.5">Reconciled</p>
                </div>
                <div className="hidden md:block flex-1 h-px bg-ink/15" aria-hidden="true" />
              </div>

              <div>
                <p className="eyebrow text-ink/50 mb-6">Faithful AI representation</p>
                <div className="space-y-2 md:space-y-3">
                  {["ChatGPT", "Perplexity", "Gemini", "Claude"].map((s) => (
                    <div
                      key={s}
                      className="bg-cream border border-ink/10 px-4 py-3 text-sm text-ink/80 flex items-center justify-between"
                    >
                      <span>{s}</span>
                      <span className="text-ink/30 text-xs">on-brand</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Four steps — Step 01 has privacy boundary embedded */}
          <div className="mt-24 md:mt-32 grid md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10 lg:gap-12">
            <div className="border-t border-ink pt-8">
              <p className="font-serif text-7xl text-ink/20 leading-none">01</p>
              <h3 className="mt-6 font-serif text-3xl">Connect</h3>
              <p className="mt-4 text-ink/70 leading-relaxed">
                We integrate with your SAP, PIM, DAM, ERP, commerce platform (Shopify Plus, Salesforce Commerce), reviews data, and the spreadsheets your team actually uses.
              </p>
              <div className="mt-6 pt-5 border-t border-ink/15">
                <p className="font-serif italic text-base text-ink/85">
                  Your unreleased work stays unreleased.
                </p>
                <p className="mt-2 text-sm text-ink/60 leading-relaxed">
                  Only current and past-season products already in market. Future designs, unreleased lookbooks, and regional exclusives stay where you keep them.
                </p>
              </div>
            </div>
            <div className="border-t border-ink pt-8">
              <p className="font-serif text-7xl text-ink/20 leading-none">02</p>
              <h3 className="mt-6 font-serif text-3xl">Reconcile</h3>
              <p className="mt-4 text-ink/70 leading-relaxed">
                Catalog data alone is not enough. We layer in what AI agents actually need to recommend a product faithfully: use-case context, comparison anchors, and scope, alongside specifications, materials, brand voice, and current imagery, all as first-class attributes.
              </p>
              <div className="mt-6 pt-5 border-t border-ink/15">
                <p className="font-serif italic text-base text-ink/85">
                  Nothing brand-sensitive ships without you.
                </p>
                <p className="mt-2 text-sm text-ink/60 leading-relaxed">
                  Every AI-generated claim, comparison, and enrichment is staged for review. Your team approves what goes live, with a full evidence trail back to the source data.
                </p>
              </div>
            </div>
            <div className="border-t border-ink pt-8">
              <p className="font-serif text-7xl text-ink/20 leading-none">03</p>
              <h3 className="mt-6 font-serif text-3xl">Publish</h3>
              <p className="mt-4 text-ink/70 leading-relaxed">
                Your structured feed publishes to OpenAI's ChatGPT Product Feed and the standards emerging across Gemini, Claude, and Perplexity. Daily catalog snapshot, with 15–60 minute updates for price, stock, and availability — refreshed in any language, on every model.
              </p>
            </div>
            <div className="border-t border-ink pt-8">
              <p className="font-serif text-7xl text-ink/20 leading-none">04</p>
              <h3 className="mt-6 font-serif text-3xl">Measure</h3>
              <p className="mt-4 text-ink/70 leading-relaxed">
                Every product link is tagged. AI-referred sessions, SKU-level conversion, revenue per visit, and feed-version impact tie back to the surface that drove them — exported into GA4, Segment, or your warehouse.
              </p>
              <div className="mt-6 pt-5 border-t border-ink/15">
                <p className="font-serif italic text-base text-ink/85">
                  The first time the brand sees what AI is actually selling.
                </p>
                <p className="mt-2 text-sm text-ink/60 leading-relaxed">
                  Closes the loop between catalog, distribution, and revenue — so you know which feed version, which surface, and which SKUs are converting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Team */}
      <section id="team" className="bg-cream px-6 md:px-12 py-24 md:py-32 border-t border-ink/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <p className="eyebrow text-ink/60">Team</p>
              <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05]">
                We built this from <span className="italic">inside the room.</span>
              </h2>
            </div>
            <div className="md:col-span-7">
              <p className="text-lg md:text-xl text-ink/75 leading-relaxed font-light">
                Three founders, three disciplines: luxury fashion operations, large-scale data infrastructure, and enterprise go-to-market. Between us, we have worked across every major European luxury group — and we know how product data actually moves through a brand, where it breaks, and how to fix it.
              </p>

              {/* Group strip — four luxury conglomerates */}
              <div className="mt-10 py-8 border-t border-b border-ink/15">
                <p className="eyebrow text-ink/50 mb-6">Drawn from</p>
                <div className="flex flex-wrap items-center gap-x-6 md:gap-x-10 gap-y-3">
                  <span className="logo-letter text-2xl md:text-3xl">LVMH</span>
                  <span className="text-ink/25">·</span>
                  <span className="logo-letter text-2xl md:text-3xl">Kering</span>
                  <span className="text-ink/25">·</span>
                  <span className="logo-letter text-2xl md:text-3xl">Richemont</span>
                  <span className="text-ink/25">·</span>
                  <span className="logo-letter text-2xl md:text-3xl">Prada</span>
                </div>
              </div>

              <div className="mt-12 grid sm:grid-cols-3 gap-6">
                {[
                  {
                    num: "01",
                    title: "Inside the maisons",
                    body: "What we kept running into from the inside: product data scattered across SAP, PIM, DAM, and shared drives, with no realistic way to wire any of it into the AI tools the houses were starting to bring in.",
                  },
                  {
                    num: "02",
                    title: "Data infrastructure",
                    body: "Built ingestion, reconciliation, and AI agent workflows for catalogs at scale. We have made messy enterprise data legible to models before.",
                  },
                  {
                    num: "03",
                    title: "Go-to-market",
                    body: "Scaled operating businesses and taken new categories from zero to enterprise revenue.",
                  },
                ].map((t) => (
                  <div key={t.num} className="bg-stone/30 p-6 rounded-sm">
                    <p className="eyebrow text-ink/50">{t.num}</p>
                    <p className="mt-3 font-serif text-xl">{t.title}</p>
                    <p className="mt-2 text-sm text-ink/60 leading-relaxed">{t.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="bg-ink text-cream px-6 md:px-12 py-32 md:py-40 relative overflow-hidden"
      >
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 20%, #FAF8F4 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />
        <div className="max-w-5xl mx-auto relative">
          <p className="eyebrow text-cream/60">Get in touch</p>
          <h2 className="mt-6 font-serif text-5xl md:text-8xl leading-[0.95]">
            We're working with <span className="italic">select brands now.</span>
          </h2>
          <p className="mt-10 text-lg md:text-xl text-cream/75 max-w-3xl leading-relaxed font-light">
            If you run digital, brand, or e-commerce at a consumer brand, we'd love to talk.
          </p>
          <a
            href="mailto:hello@trevise.ai"
            className="mt-12 inline-block bg-cream text-ink px-10 py-5 hover:bg-cream/90 transition text-sm tracking-wide"
          >
            hello@trevise.ai
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink text-cream/60 px-6 md:px-12 py-10 text-sm border-t border-cream/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4">
          <p>© 2026 Trevise. Paris / New York.</p>
          <p className="font-serif italic text-base">Make AI represent your brand correctly.</p>
        </div>
      </footer>
    </main>
  );
}
