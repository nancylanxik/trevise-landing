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
          <a href="#contact" className="border border-ink px-5 py-2 hover:bg-ink hover:text-cream transition">
            Request access
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 md:px-12 pt-16 md:pt-28 pb-28 md:pb-40 max-w-7xl mx-auto">
        <p className="eyebrow text-ink/60">For premium brands</p>
        <h1 className="mt-6 font-serif text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.95] tracking-tight">
          AI is the <span className="italic">new shelf.</span>
        </h1>
        <p className="mt-10 text-lg md:text-2xl max-w-2xl text-ink/75 leading-relaxed font-light">
          Your brand belongs on it. In your own voice, with your current imagery, season after season.
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
          </div>

          <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-6 md:gap-8">
            {/* Without Trevise */}
            <div className="bg-cream/5 border border-cream/10 rounded-sm p-6 md:p-8">
              <p className="eyebrow text-cream/40 mb-6">Today, without Trevise</p>
              <p className="text-xs text-cream/50 italic mb-4">
                User asks ChatGPT: "Tell me about this brand's evening bags."
              </p>

              <div className="flex gap-4 items-start pb-5 border-b border-cream/10">
                <div className="w-16 h-16 mock-img-degraded rounded-sm flex-shrink-0" />
                <div>
                  <p className="font-serif text-lg text-cream/70 leading-tight">Black handbag, leather</p>
                  <p className="text-[10px] eyebrow text-cream/30 mt-1.5">Source · 2022 wholesale feed</p>
                </div>
              </div>

              <div className="mt-5 space-y-2.5 text-sm">
                {[
                  ["Season", "unknown", true],
                  ["Material", "leather", false],
                  ["Imagery", "retired campaign", true],
                  ["Price", "unavailable", true],
                  ["Languages", "English only", true],
                  ["Brand voice", "missing", true],
                ].map(([k, v, faded]) => (
                  <div key={k as string} className="flex justify-between">
                    <span className="text-cream/40">{k}</span>
                    <span className={faded ? "text-cream/30 italic" : "text-cream/60"}>{v}</span>
                  </div>
                ))}
              </div>

              <p className="mt-5 pt-5 border-t border-cream/10 text-xs text-cream/50 leading-relaxed italic">
                "A black bag from the brand's collection. Made of leather. Available at select retailers worldwide."
              </p>
            </div>

            {/* With Trevise */}
            <div className="bg-cream text-ink rounded-sm p-6 md:p-8">
              <p className="eyebrow text-ink/50 mb-6">With Trevise</p>
              <p className="text-xs text-ink/60 italic mb-4">
                User asks ChatGPT: "Tell me about this brand's evening bags."
              </p>

              <div className="flex gap-4 items-start pb-5 border-b border-ink/10">
                <div className="w-16 h-16 mock-img rounded-sm flex-shrink-0" />
                <div>
                  <p className="font-serif text-lg leading-tight">The Marchesa Clutch</p>
                  <p className="text-[10px] eyebrow text-ink/50 mt-1.5">Maison Atelier · Fall 26</p>
                </div>
              </div>

              <div className="mt-5 space-y-2.5 text-sm">
                {[
                  ["Season", "Fall 26"],
                  ["Material", "Florentine silk satin"],
                  ["Imagery", "Current campaign"],
                  ["Price", "$2,840"],
                  ["Languages", "EN · FR · IT · JA · ZH"],
                  ["Brand voice", "aligned"],
                ].map(([k, v]) => (
                  <div key={k as string} className="flex justify-between">
                    <span className="text-ink/50">{k}</span>
                    <span className="text-ink">{v}</span>
                  </div>
                ))}
              </div>

              <p className="mt-5 pt-5 border-t border-ink/10 text-xs text-ink/65 leading-relaxed italic">
                "Hand-finished in Florentine silk satin, with a sculpted brass clasp drawn from the house's archive. An understatement that holds the room."
              </p>
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
              Trevise consolidates fragmented product data into a structured, brand-aware feed built for the Agentic Commerce Protocol and equivalent standards. Brand voice intact. Current imagery. Multilingual. Refreshed continuously, so LLMs describe, recommend, and depict each piece faithfully across every model.
            </p>
          </div>

          {/* Data flow diagram */}
          <div className="mt-20 md:mt-28 bg-stone/40 rounded-sm p-8 md:p-16">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
              <div>
                <p className="eyebrow text-ink/50 mb-6">Your fragmented data</p>
                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  {["SAP", "PIM", "DAM", "Power BI", "Looker", "Spreadsheets"].map((s) => (
                    <div key={s} className="bg-cream border border-ink/10 px-3 py-3 text-xs text-ink/70">
                      {s}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-center justify-center py-6 md:py-0">
                <div className="hidden md:block w-full h-px bg-ink/20 relative">
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 text-ink/40">→</span>
                </div>
                <div className="my-6 bg-ink text-cream px-8 py-6 rounded-sm text-center min-w-[140px]">
                  <p className="font-serif text-2xl italic">Trevise</p>
                  <p className="text-[10px] eyebrow text-cream/60 mt-1">Reconciled</p>
                </div>
                <div className="hidden md:block w-full h-px bg-ink/20 relative">
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 text-ink/40">→</span>
                </div>
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

          {/* Three steps */}
          <div className="mt-24 md:mt-32 grid md:grid-cols-3 gap-12 md:gap-16">
            {[
              {
                num: "01",
                title: "Connect",
                body: "We integrate with your SAP, PIM, DAM, BI tools (Power BI, Looker), and the spreadsheets your team actually uses.",
              },
              {
                num: "02",
                title: "Reconcile",
                body: "We turn fragmented data into a structured, brand-aware catalog. Materials, sizing, current-season imagery, and brand voice are treated as first-class attributes.",
              },
              {
                num: "03",
                title: "Publish",
                body: "Your structured feed publishes to the Agentic Commerce Protocol and equivalent standards. ChatGPT, Gemini, Claude, and Perplexity describe and depict your products correctly, in any language, refreshed continuously.",
              },
            ].map((s) => (
              <div key={s.num} className="border-t border-ink pt-8">
                <p className="font-serif text-7xl text-ink/20 leading-none">{s.num}</p>
                <h3 className="mt-6 font-serif text-3xl">{s.title}</h3>
                <p className="mt-4 text-ink/70 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>

          {/* Data privacy callout */}
          <div className="mt-20 md:mt-28 border border-ink/15 bg-cream p-8 md:p-12">
            <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
              <div className="md:col-span-4">
                <p className="eyebrow text-ink/55">On data privacy</p>
                <p className="mt-5 font-serif text-2xl md:text-3xl leading-tight">
                  Your unreleased work stays{" "}
                  <span className="italic">unreleased.</span>
                </p>
              </div>
              <div className="md:col-span-8">
                <p className="text-ink/75 leading-relaxed">
                  Trevise ingests only current-season and past-season products that are already on the market. Future-season designs, internal lookbook concepts that never went into production, and market-specific exclusives never leave your systems. The boundary is set by what your brand has already chosen to make public; nothing else crosses it.
                </p>
                <ul className="mt-5 space-y-1.5 text-sm text-ink/65">
                  <li>· Current-season and past-season products in market: <span className="text-ink">included</span></li>
                  <li>· Future-season designs not yet released: <span className="text-ink">excluded</span></li>
                  <li>· Lookbook concepts never produced: <span className="text-ink">excluded</span></li>
                  <li>· Market-specific or regional exclusives: <span className="text-ink">excluded</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stat band */}
      <section className="bg-stone px-6 md:px-12 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <p className="eyebrow text-ink/50 mb-12 text-center">By the numbers</p>
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-ink/10">
            <div className="py-12 md:py-0 md:px-12 text-center">
              <p className="font-serif text-7xl md:text-9xl leading-none">
                10<span className="text-ink/40">+</span>
              </p>
              <p className="mt-6 text-ink/70 leading-relaxed max-w-[260px] mx-auto">
                internal systems holding fragments of a single product's data inside a typical fashion brand
              </p>
            </div>
            <div className="py-12 md:py-0 md:px-12 text-center">
              <p className="font-serif text-7xl md:text-9xl leading-none">5</p>
              <p className="mt-6 text-ink/70 leading-relaxed max-w-[260px] mx-auto">
                languages a global brand maintains in parallel, often inconsistently
              </p>
            </div>
            <div className="py-12 md:py-0 md:px-12 text-center">
              <p className="font-serif text-7xl md:text-9xl leading-none">0</p>
              <p className="mt-6 text-ink/70 leading-relaxed max-w-[260px] mx-auto">
                control most brands have today over what AI says or shows about their products
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why now / Thesis */}
      <section className="bg-cream px-6 md:px-12 py-28 md:py-40 border-y border-ink/10">
        <div className="max-w-7xl mx-auto">
          <p className="eyebrow text-ink/50">Why now</p>
          <h2 className="mt-6 font-serif text-5xl md:text-8xl leading-[0.95] max-w-4xl tracking-tight">
            AI is leaving the <span className="italic">chat box.</span>
          </h2>
          <div className="mt-16 grid md:grid-cols-12 gap-12 md:gap-16 items-start">
            <div className="md:col-span-7">
              <p className="text-lg md:text-xl text-ink/75 leading-relaxed font-light">
                Claude, ChatGPT, Gemini and the next generation of LLMs are heading into design tools, creative workflows, regional markets, and enterprise integrations. Every new surface is a new place a brand can show up correctly, or get it wrong.
              </p>
              <p className="mt-6 text-lg md:text-xl text-ink/75 leading-relaxed font-light">
                A client browsing through a personal AI stylist. A creative director generating a season concept inside an AI design tool. A buyer's assistant comparing one brand's line to another. Each of these surfaces is being built right now, and your brand has no presence on most of them.
              </p>
              <p className="mt-6 text-lg md:text-xl text-ink/75 leading-relaxed font-light">
                Trevise is the canonical source layer that feeds every AI surface a premium brand touches. Built for the Agentic Commerce Protocol and the multi-model standards emerging across ChatGPT, Gemini, Claude, and Perplexity. One feed. One brand voice. Every model, every market, every season.
              </p>
              <p className="mt-12 font-serif text-2xl md:text-3xl italic text-ink/85 leading-snug">
                "When someone asks an AI for a recommendation, the brand finally shows up like itself."
              </p>
            </div>
            <div className="md:col-span-5">
              <p className="eyebrow text-ink/50 mb-6">New surfaces emerging</p>
              <ul className="space-y-0">
                {[
                  "Conversational shopping (ChatGPT, Perplexity)",
                  "AI design tools (Claude Design, generative imagery)",
                  "Personal stylist and shopping concierge agents",
                  "AI search overviews (Google, Bing)",
                  "Enterprise commerce copilots",
                  "Visual search and virtual try-on agents",
                ].map((s, i, arr) => (
                  <li
                    key={s}
                    className={`border-t border-ink/15 py-4 text-ink/85${
                      i === arr.length - 1 ? " border-b" : ""
                    }`}
                  >
                    {s}
                  </li>
                ))}
              </ul>
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
                Trevise is founded by an operator with merchandising experience across Dior, Saint Laurent, Alaïa, Thélios, and Prada, alongside builders who have scaled products at high-growth startups. Between us, we know how product data actually moves through a fashion house, where it breaks, and how to fix it.
              </p>

              {/* Maison strip (within team) */}
              <div className="mt-10 py-8 border-t border-b border-ink/15">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <p className="eyebrow text-ink/50">Drawn from</p>
                  <div className="flex items-center gap-5 md:gap-8 flex-wrap">
                    <span className="logo-letter text-xl md:text-2xl">Dior</span>
                    <span className="text-ink/20">·</span>
                    <span className="logo-letter text-xl md:text-2xl">Saint Laurent</span>
                    <span className="text-ink/20">·</span>
                    <span className="logo-letter text-xl md:text-2xl">Alaïa</span>
                    <span className="text-ink/20">·</span>
                    <span className="logo-letter text-xl md:text-2xl">Prada</span>
                    <span className="text-ink/20">·</span>
                    <span className="logo-letter text-xl md:text-2xl text-ink/60 italic">+ high-growth startups</span>
                  </div>
                </div>
              </div>

              <div className="mt-12 grid sm:grid-cols-3 gap-6">
                {[
                  { num: "01", title: "Inside the maisons", body: "Merchandising work at Dior, Saint Laurent, Alaïa, Thélios, and Prada. Five houses, three of the four major luxury groups." },
                  { num: "02", title: "Product & engineering", body: "Built and shipped products at scale at high-growth startups." },
                  { num: "03", title: "Go-to-market", body: "A track record of taking new categories from zero to enterprise revenue." },
                ].map((t) => (
                  <div key={t.num} className="bg-stone/30 p-6 rounded-sm">
                    <p className="eyebrow text-ink/50">{t.num}</p>
                    <p className="mt-3 font-serif text-xl">{t.title}</p>
                    <p className="mt-2 text-sm text-ink/60">{t.body}</p>
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
            If you run digital, brand, or e-commerce at a premium brand, we'd love to talk.
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
