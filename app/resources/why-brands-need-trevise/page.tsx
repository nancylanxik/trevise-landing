import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Brands Need Trevise | Trevise Resources",
  description:
    "When customers ask AI agents what to buy, brands are being described by data they don't control. Trevise is the canonical layer that lets brands sell to AI agents the way they sell everywhere else — like themselves.",
};

export default function WhyBrandsNeedTrevise() {
  return (
    <main className="bg-cream text-ink min-h-screen">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-6 max-w-7xl mx-auto relative z-10">
        <Link href="/" className="font-serif text-3xl tracking-tight italic">
          Trevise
        </Link>
        <div className="flex items-center gap-8 text-sm">
          <Link href="/#problem" className="hidden md:inline hover:opacity-60 transition">
            The problem
          </Link>
          <Link href="/#solution" className="hidden md:inline hover:opacity-60 transition">
            What we do
          </Link>
          <Link href="/#team" className="hidden md:inline hover:opacity-60 transition">
            Team
          </Link>
          <Link href="/resources" className="hidden md:inline hover:opacity-60 transition">
            Resources
          </Link>
          <Link
            href="/#contact"
            className="border border-ink px-5 py-2 hover:bg-ink hover:text-cream transition"
          >
            Request access
          </Link>
        </div>
      </nav>

      {/* Article header */}
      <article className="px-6 md:px-12 pt-12 md:pt-20 pb-24 md:pb-32 max-w-3xl mx-auto">
        <Link href="/resources" className="text-sm text-ink/55 hover:text-ink transition">
          ← Resources
        </Link>

        <header className="mt-10">
          <p className="eyebrow text-ink/55">Thesis · May 2026</p>
          <h1 className="mt-6 font-serif text-4xl md:text-7xl leading-[0.98] tracking-tight">
            Why Brands Need <span className="italic">Trevise.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-ink/70 leading-relaxed font-light">
            When customers ask AI agents what to buy, brands are being described by data they don't control. Trevise is the canonical layer that lets brands sell to AI agents the way they sell everywhere else — like themselves.
          </p>
        </header>

        {/* Body */}
        <div className="mt-14 md:mt-20 space-y-7 text-base md:text-lg text-ink/85 leading-[1.75] font-light">
          <p>
            The internet used to be a place brands published <em>to</em>. AI is turning it into a place brands get <em>described in</em> — by systems they don't control, in conversations they're not part of.
          </p>
          <p>
            When a customer asks ChatGPT for "a quiet luxury wool coat under $2,000," or asks Gemini to "show me brands that use deadstock fabrics," or asks a personal stylist agent to "find me something like that Khaite blazer but more sustainable" — a model answers. It picks the brands. It describes the materials. It assigns the price tier. It decides what makes the shortlist.
          </p>
          <p>
            Most brands have no idea what's being said about them on those surfaces. Fewer still have the means to fix it.
          </p>
          <p>
            That is the problem Trevise was built for. <strong className="font-medium">We help ecommerce companies sell to AI agents.</strong>
          </p>

          <h2 className="!mt-16 font-serif text-3xl md:text-5xl leading-[1.05] tracking-tight text-ink">
            The shift: AI is the new storefront.
          </h2>
          <p>
            For two years, "AI" meant a text box on a website. That phase is ending. The next generation of language models — Claude, ChatGPT, Gemini, Perplexity — are being embedded into the surfaces where commerce actually happens:
          </p>
          <ul className="space-y-2 pl-6 list-disc marker:text-ink/40">
            <li>Conversational shopping inside ChatGPT and Perplexity.</li>
            <li>AI design tools generating campaign concepts and product imagery.</li>
            <li>Personal stylist and shopping concierge agents.</li>
            <li>AI search overviews on Google and Bing.</li>
            <li>Enterprise commerce copilots inside retailers and marketplaces.</li>
            <li>Visual search and virtual try-on agents.</li>
          </ul>
          <p>
            Each of these is a new shelf. Each sources its answers from somewhere — model training data, retrieval indexes, partner feeds, the open web. None of them are reading your brand book.
          </p>
          <p>
            If your brand isn't represented correctly in the layer those systems consume, you don't get a second chance at the moment of recommendation. The model picks someone else, in language that sounds confident either way.
          </p>

          <h2 className="!mt-16 font-serif text-3xl md:text-5xl leading-[1.05] tracking-tight text-ink">
            The real problem isn't AI. <span className="italic">It's the data behind the brand.</span>
          </h2>
          <p>
            Walk into any large fashion or ecommerce company and ask a simple question — <em>what is the authoritative description of this product?</em> — and you'll get five different answers from five different systems.
          </p>
          <p>
            Materials live in <strong className="font-medium">SAP</strong>. Marketing copy lives in a <strong className="font-medium">PIM</strong>. Imagery and lookbook references live in a <strong className="font-medium">DAM</strong>. Sustainability documentation lives in a shared drive. Regional translations live in spreadsheets. Runway notes live in a creative director's email. Pricing and inventory live somewhere else entirely.
          </p>
          <p>
            This is the actual reason AI gets brands wrong. Models don't hallucinate from nothing — they fill gaps. When the truth about a product is fragmented across ten internal systems with no single, machine-legible source, the model improvises. It pulls from outdated reviews, old press, third-party retailers, and stale snapshots of the brand's own site. The brand's voice gets flattened. Materials get mis-described. Heritage gets reduced to a single keyword.
          </p>
          <p className="border-l-2 border-ink/30 pl-6 font-serif italic text-xl md:text-2xl !leading-snug text-ink/85">
            A brand cannot sell to AI agents on top of fragmented data. There is nothing to send.
          </p>

          <h2 className="!mt-16 font-serif text-3xl md:text-5xl leading-[1.05] tracking-tight text-ink">
            Why existing tools don't close the gap.
          </h2>
          <p>
            The category that has formed around AI commerce so far splits into two halves:
          </p>
          <div className="!my-10 border-y border-ink/15">
            <div className="grid grid-cols-12 py-5 border-b border-ink/15 text-xs md:text-sm">
              <p className="col-span-4 eyebrow text-ink/55">Category</p>
              <p className="col-span-4 eyebrow text-ink/55">What it does</p>
              <p className="col-span-4 eyebrow text-ink/55">What it doesn't do</p>
            </div>
            <div className="grid grid-cols-12 py-6 border-b border-ink/10 text-sm md:text-base">
              <p className="col-span-4 font-serif text-lg md:text-xl">Feed managers</p>
              <p className="col-span-4 text-ink/75 leading-relaxed">
                Send a brand's product feed to ChatGPT, marketplaces, ad platforms.
              </p>
              <p className="col-span-4 text-ink/75 leading-relaxed">
                Don't reconcile fragmented internal data. Garbage in, garbage out.
              </p>
            </div>
            <div className="grid grid-cols-12 py-6 text-sm md:text-base">
              <p className="col-span-4 font-serif text-lg md:text-xl">AI visibility trackers</p>
              <p className="col-span-4 text-ink/75 leading-relaxed">
                Tell brands when and how they're mentioned in AI answers.
              </p>
              <p className="col-span-4 text-ink/75 leading-relaxed">
                Don't fix the underlying data that caused the wrong mention.
              </p>
            </div>
          </div>
          <p>
            Both are useful. Neither solves the underlying problem. A brand can pipe a feed into every model on earth, and the answers will still be wrong if the feed itself is built on fragmented, stale, contradictory data. A brand can track every AI mention in real time, and still have no idea how to repair what the model thinks it knows.
          </p>
          <p>
            Trevise sits a layer beneath both. We reconcile the data first, then make it available to every surface that will describe the brand.
          </p>

          <h2 className="!mt-16 font-serif text-3xl md:text-5xl leading-[1.05] tracking-tight text-ink">
            What "showing up correctly" actually requires.
          </h2>
          <p>
            A brand showing up correctly across AI surfaces is not a matter of writing better copy or buying better SEO. It requires four things at once:
          </p>
          <div className="space-y-5">
            <div>
              <p className="font-serif text-xl md:text-2xl text-ink">One source of truth.</p>
              <p className="mt-2 text-ink/75">
                A single, authoritative description of every product — materials, construction, sourcing, sizing, fit, story, price, availability — rich enough to answer any reasonable question about it.
              </p>
            </div>
            <div>
              <p className="font-serif text-xl md:text-2xl text-ink">Multi-surface readiness.</p>
              <p className="mt-2 text-ink/75">
                That truth must be expressible in the formats different AI surfaces actually consume: OpenAI's ChatGPT Product Feed, retrieval-friendly product feeds, structured schemas, image-grounded references, and the multi-model standards emerging across Gemini, Claude, and Perplexity.
              </p>
            </div>
            <div>
              <p className="font-serif text-xl md:text-2xl text-ink">Voice consistency.</p>
              <p className="mt-2 text-ink/75">
                The brand has to sound like itself in every market and every model. A French heritage brand should not read as a generic descriptor in Korean, and a quiet luxury label should not be flattened into the same vocabulary as a fast-fashion competitor.
              </p>
            </div>
            <div>
              <p className="font-serif text-xl md:text-2xl text-ink">A defensible mention mechanism.</p>
              <p className="mt-2 text-ink/75">
                When the model decides who to recommend, the brand needs a verifiable reason to make the shortlist — accurate attributes, current inventory, distinctive positioning, citation-grade provenance — not a hope that training data was kind.
              </p>
            </div>
          </div>
          <p>
            Most brands today get one of these four. Almost none get all of them.
          </p>

          <h2 className="!mt-16 font-serif text-3xl md:text-5xl leading-[1.05] tracking-tight text-ink">
            What Trevise actually does.
          </h2>
          <p>
            Trevise is the canonical source layer that sits between a brand's internal systems and every AI surface that will ever describe it.
          </p>
          <p>
            It pulls fragments from SAP, PIM, DAM, spreadsheets, and creative archives, reconciles them in real time, and resolves them into a single, authoritative, machine-legible representation of the brand. Then it syncs that representation to ChatGPT, Gemini, Claude, Perplexity, and the next surfaces being built — so when a shopper asks for a recommendation, the brand shows up with current products, accurate details, and on-brand presentation.
          </p>
          <p>
            On top of that, Trevise gives the brand visibility into how its products are being represented across AI conversations and how those mentions translate into traffic and conversion. Reconciliation, distribution, and measurement in the same layer.
          </p>
          <p className="font-serif italic text-xl md:text-2xl !leading-snug text-ink/85">
            One feed. One brand voice. Every model, every market, every channel.
          </p>

          <h2 className="!mt-16 font-serif text-3xl md:text-5xl leading-[1.05] tracking-tight text-ink">
            Built by people who have lived the problem.
          </h2>
          <p>
            Trevise is being built by operators who have stood on both sides of this gap. Our team includes fashion operators who worked inside the major houses — including LVMH and Richemont — and watched LLM-driven shopping arrive without a tool to keep brand consistency across AI channels. It includes data infrastructure engineers who previously built ingestion and reconciliation systems at Nauto and Cambridge Mobile Telematics, and AI agent workflows at a marketing-tech startup.
          </p>
          <p>
            The combination matters. Most teams approaching this problem are either AI engineers without operator context, or fashion technologists without the data infrastructure to back the claim. The work requires both: deep understanding of how a brand actually operates internally, and the engineering muscle to reconcile millions of catalog entries into a real-time, model-ready layer.
          </p>

          <h2 className="!mt-16 font-serif text-3xl md:text-5xl leading-[1.05] tracking-tight text-ink">
            When someone asks an AI for a recommendation.
          </h2>
          <p>
            The brands that will win the next decade of AI commerce are not the ones with the best chatbot on their own site. They are the ones whose product truth is already in the layer that every other AI surface depends on — described faithfully, kept current, and authored by the brand itself rather than improvised by a model.
          </p>
          <p>Trevise is that layer.</p>
          <p className="font-serif italic text-2xl md:text-3xl !leading-snug text-ink">
            When someone asks an AI for a recommendation, the brand finally shows up like itself.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-20 pt-10 border-t border-ink/15">
          <p className="text-base md:text-lg text-ink/75 leading-relaxed font-light max-w-2xl">
            Trevise is the canonical source layer that feeds every AI surface a brand touches. To see how Trevise represents your line across ChatGPT, Gemini, Claude, and Perplexity,{" "}
            <a href="mailto:hello@trevise.ai" className="underline underline-offset-4 hover:opacity-70 transition">
              reach out
            </a>
            .
          </p>
          <div className="mt-10 flex gap-4 flex-wrap">
            <Link
              href="/resources"
              className="border border-ink px-8 py-4 hover:bg-ink hover:text-cream transition text-sm tracking-wide"
            >
              More from Resources
            </Link>
            <a
              href="mailto:hello@trevise.ai"
              className="bg-ink text-cream px-8 py-4 hover:bg-ink/85 transition text-sm tracking-wide"
            >
              hello@trevise.ai
            </a>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-ink text-cream/60 px-6 md:px-12 py-10 text-sm border-t border-cream/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4">
          <p>© 2026 Trevise. Paris / New York.</p>
          <p className="font-serif italic text-base">
            Make AI represent your brand correctly.
          </p>
        </div>
      </footer>
    </main>
  );
}
