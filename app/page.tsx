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

          {/* Comparison table — clean, AI quote leads */}
          <div className="mt-12 md:mt-16 max-w-5xl bg-cream/5 border border-cream/15 rounded-sm overflow-hidden">

            {/* Question header */}
            <div className="px-5 md:px-8 py-4 border-b border-cream/15">
              <p className="eyebrow text-[10px] text-cream/45">Same query, two answers</p>
              <p className="mt-1.5 italic text-cream/85 text-sm md:text-base">
                "Tell me about this brand's evening bags."
              </p>
            </div>

            {/* Column headers (desktop only) */}
            <div className="hidden md:grid md:grid-cols-12 px-5 md:px-8 py-2.5 border-b border-cream/15">
              <div className="col-span-3" />
              <div className="col-span-4 eyebrow text-[10px] text-cream/45">Today</div>
              <div className="col-span-5 eyebrow text-[10px] text-cream/85">With Trevise</div>
            </div>

            {/* AI response — the punchline, up top */}
            <div className="px-5 md:px-8 py-6 border-b border-cream/15 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-0 md:items-start">
              <div className="md:col-span-3 text-[11px] eyebrow text-cream/45 md:pt-1">ChatGPT says</div>
              <div className="md:col-span-4 md:pr-6 text-cream/55 italic text-sm leading-relaxed">
                <span className="md:hidden text-[10px] eyebrow text-cream/35 mr-2 not-italic">Today:</span>
                "A black bag from the brand's collection. Made of leather. Available at select retailers worldwide."
              </div>
              <div className="md:col-span-5 text-cream font-serif italic text-base md:text-lg leading-snug">
                <span className="md:hidden text-[10px] eyebrow text-cream/55 mr-2 not-italic">Trevise:</span>
                "Hand-finished in Florentine silk satin, with a sculpted brass clasp drawn from the house's archive."
              </div>
            </div>

            {/* Supporting attributes — compact, 4 rows */}
            <div className="px-5 md:px-8 py-2 divide-y divide-cream/10">
              {[
                {
                  label: "Product",
                  today: "Black handbag, leather",
                  trevise: "The Marchesa Clutch · Fall 26",
                },
                {
                  label: "Imagery",
                  today: "Retired campaign",
                  trevise: "Current-season campaign",
                },
                {
                  label: "Languages",
                  today: "English only",
                  trevise: "EN · FR · IT · JA · ZH",
                },
                {
                  label: "Brand voice",
                  today: "Missing",
                  trevise: "Aligned",
                },
              ].map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-1 md:grid-cols-12 py-2.5 gap-1 md:gap-0 md:items-baseline"
                >
                  <div className="md:col-span-3 text-[11px] eyebrow text-cream/45">{row.label}</div>
                  <div className="md:col-span-4 text-cream/45 italic text-sm">
                    <span className="md:hidden text-[10px] eyebrow text-cream/35 mr-2 not-italic">Today:</span>
                    {row.today}
                  </div>
                  <div className="md:col-span-5 text-cream text-sm">
                    <span className="md:hidden text-[10px] eyebrow text-cream/55 mr-2">Trevise:</span>
                    {row.trevise}
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
              Trevise consolidates fragmented product data into a structured, brand-aware feed built for the Agentic Commerce Protocol and equivalent standards. Brand voice intact. Current imagery. Multilingual. Refreshed continuously, so LLMs describe, recommend, and depict each piece faithfully across every model.
            </p>
          </div>

          {/* Data flow diagram */}
          <div className="mt-20 md:mt-28 bg-stone/40 rounded-sm p-8 md:p-16">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-center">
              <div>
                <p className="eyebrow text-ink/50 mb-6">Your fragmented data</p>
                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  {["SAP", "Anaplan", "PIM", "DAM", "DIM", "Power BI", "Looker", "Spreadsheets"].map((s) => (
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

          {/* Three steps — Step 01 has privacy boundary embedded */}
          <div className="mt-24 md:mt-32 grid md:grid-cols-3 gap-12 md:gap-16">
            <div className="border-t border-ink pt-8">
              <p className="font-serif text-7xl text-ink/20 leading-none">01</p>
              <h3 className="mt-6 font-serif text-3xl">Connect</h3>
              <p className="mt-4 text-ink/70 leading-relaxed">
                We integrate with your SAP, Anaplan, PIM, DAM, DIM, BI tools (Power BI, Looker), and the spreadsheets your team actually uses.
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
                We turn fragmented data into a structured, brand-aware catalog. Materials, sizing, current-season imagery, and brand voice are treated as first-class attributes.
              </p>
            </div>
            <div className="border-t border-ink pt-8">
              <p className="font-serif text-7xl text-ink/20 leading-none">03</p>
              <h3 className="mt-6 font-serif text-3xl">Publish</h3>
              <p className="mt-4 text-ink/70 leading-relaxed">
                Your structured feed publishes to the Agentic Commerce Protocol and equivalent standards. ChatGPT, Gemini, Claude, and Perplexity describe and depict your products correctly, in any language, refreshed continuously.
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

          {/* 4 stats embedded — supporting evidence for the urgency thesis */}
          <div className="mt-14 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x divide-ink/15 border-y border-ink/15 py-10">
            {[
              { num: "100", plus: true, body: "attributes per product, from fit and materials to sourcing" },
              { num: "10", plus: true, body: "internal systems holding fragments of a single product's data" },
              { num: "5", plus: false, body: "languages a global brand maintains, often inconsistently" },
              { num: "0", plus: false, body: "control most brands have over what AI says about them" },
            ].map((s, i) => (
              <div key={i} className="md:px-8 text-center">
                <p className="font-serif text-5xl md:text-6xl leading-none">
                  {s.num}
                  {s.plus && <span className="text-ink/40">+</span>}
                </p>
                <p className="mt-3 text-xs md:text-sm text-ink/65 leading-relaxed max-w-[200px] mx-auto">
                  {s.body}
                </p>
              </div>
            ))}
          </div>

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
                Trevise is founded by an operator with hands-on experience across LVMH, Kering, Richemont, and Prada — every major European luxury group — alongside builders who have scaled products at high-growth startups. Between us, we know how product data actually moves through a fashion house, where it breaks, and how to fix it.
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
                <p className="mt-8 text-xs text-ink/55 italic leading-relaxed">
                  + alongside builders who have scaled products at high-growth startups
                </p>
              </div>

              <div className="mt-12 grid sm:grid-cols-3 gap-6">
                {[
                  { num: "01", title: "Inside the maisons", body: "Hands-on experience across LVMH, Kering, Richemont, and Prada — every major European luxury group." },
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
