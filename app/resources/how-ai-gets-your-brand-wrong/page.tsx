import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How AI Gets Your Brand Wrong | Trevise Resources",
  description:
    "When ChatGPT, Gemini, or Perplexity describes your brand incorrectly, the instinct is to blame the model. The model isn't the problem — the problem is that your product truth lives in five internal systems and almost none of it has been published to the layer the model can read.",
};

export default function HowAIGetsYourBrandWrong() {
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

      <article className="px-6 md:px-12 pt-12 md:pt-20 pb-24 md:pb-32 max-w-3xl mx-auto">
        <Link href="/resources" className="text-sm text-ink/55 hover:text-ink transition">
          ← Resources
        </Link>

        <header className="mt-10">
          <p className="eyebrow text-ink/55">Use case · May 2026</p>
          <h1 className="mt-6 font-serif text-4xl md:text-7xl leading-[0.98] tracking-tight">
            How AI gets your <span className="italic">brand wrong.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-ink/70 leading-relaxed font-light">
            When ChatGPT or Gemini describes your products incorrectly, the instinct is to blame the model. The model isn't the problem. The problem is that your product truth lives in five internal systems — and almost none of it has been published to the layer the model can actually read.
          </p>
        </header>

        <div className="mt-14 md:mt-20 space-y-7 text-base md:text-lg text-ink/85 leading-[1.75] font-light">
          <p>
            When a customer asks ChatGPT "what's a good wool overcoat under $1,500," the model answers with confidence. It names brands. It describes materials. It quotes prices. Some of those answers are right. Many are not.
          </p>
          <p>The instinct is to blame the model. That's the wrong instinct.</p>

          <h2 className="!mt-16 font-serif text-3xl md:text-5xl leading-[1.05] tracking-tight text-ink">
            The model didn't make this up. <span className="italic">It found it.</span>
          </h2>
          <p>
            A modern language model isn't inventing your brand from thin air. It's stitching together fragments — old reviews, archived press releases, cached product pages, third-party retailers, marketplace listings, Reddit threads, runway recaps, a six-year-old <em>Vogue</em> article about your founder. Whatever it can find, ranked by signal strength.
          </p>
          <p>
            The problem is that most of those fragments are stale, contradictory, or written by someone other than your brand. The model doesn't know that. To the model, every source is a vote.
          </p>
          <p className="border-l-2 border-ink/30 pl-6 font-serif italic text-xl md:text-2xl !leading-snug text-ink/85">
            If your authoritative product description lives in five internal systems and nowhere on the open web in machine-legible form, the model has no choice but to vote with what it can find.
          </p>

          <h2 className="!mt-16 font-serif text-3xl md:text-5xl leading-[1.05] tracking-tight text-ink">
            The five places your product actually lives.
          </h2>
          <p>
            Walk a buyer through your own organization and ask where the truth about a single SKU lives. The honest answer is usually:
          </p>
          <ol className="space-y-4 pl-6 list-decimal marker:text-ink/40 marker:font-serif marker:text-lg">
            <li><strong className="font-medium">SAP / ERP.</strong> Material composition, supplier metadata, cost, country of origin. Authoritative. Not designed for narrative.</li>
            <li><strong className="font-medium">PIM.</strong> Product copy, attributes, basic taxonomy. Designed for ecommerce, but written by a team different from the brand voice team.</li>
            <li><strong className="font-medium">DAM.</strong> Campaign imagery, lookbook references, runway photography. Often versioned, often disconnected from product IDs.</li>
            <li><strong className="font-medium">Spreadsheets and shared drives.</strong> Sustainability documentation, regional translations, certifications, materials provenance, photographer notes.</li>
            <li><strong className="font-medium">Email and creative directors' heads.</strong> The <em>story</em>. Why the wool. Why the cut. What the collection is responding to.</li>
          </ol>
          <p>
            A model doesn't get to read any of those. The model reads what's been published outward — your website, marketplaces, third-party retailers, archived content. Whatever leaked, in whatever shape.
          </p>
          <p>
            This is the gap. Internal truth is rich. External signal is thin and fragmented. The model fills the difference with whatever sounds plausible from the rest of the web.
          </p>

          <h2 className="!mt-16 font-serif text-3xl md:text-5xl leading-[1.05] tracking-tight text-ink">
            Three failure modes you can audit today.
          </h2>
          <p>
            You can see this in fifteen minutes without buying anything. Open ChatGPT and ask three questions about your own brand:
          </p>
          <div className="space-y-7">
            <div>
              <p className="font-serif text-xl md:text-2xl text-ink">1. Material accuracy.</p>
              <p className="mt-2 italic text-ink/65">"What is the [your hero product] made of?"</p>
              <p className="mt-3 text-ink/80">
                If the model answers with the wrong fiber, the wrong blend percentage, or a generic "high-quality wool" hedge — that's a sign your material composition lives in SAP and was never published to the open web in a structured form a model could trust.
              </p>
            </div>
            <div>
              <p className="font-serif text-xl md:text-2xl text-ink">2. Voice authenticity.</p>
              <p className="mt-2 italic text-ink/65">"How would [your brand] describe their fall collection?"</p>
              <p className="mt-3 text-ink/80">
                If the answer reads like a generic luxury brand — restrained, timeless, elevated — your brand voice has been flattened by averaging. The model has no distinctive corpus to draw from, so it pattern-matches to category.
              </p>
            </div>
            <div>
              <p className="font-serif text-xl md:text-2xl text-ink">3. Price and tier accuracy.</p>
              <p className="mt-2 italic text-ink/65">"Is [your brand] in the same tier as [a comparable house]?"</p>
              <p className="mt-3 text-ink/80">
                If the model places you next to brands you do not consider peers, that's third-party retailer pricing and resale signals winning the vote against your own positioning.
              </p>
            </div>
          </div>
          <p>
            Most brands fail at least two of three. The pattern across them is the same: there is no canonical, machine-legible description of the brand that the model can ground its answer in.
          </p>

          <h2 className="!mt-16 font-serif text-3xl md:text-5xl leading-[1.05] tracking-tight text-ink">
            Reconciliation, not retraining.
          </h2>
          <p>
            The instinct of "we should fine-tune a model on our brand" misreads the problem. Fine-tuning teaches a single model your brand voice for your own use. It does nothing for the dozen other models a customer might use to ask about you, and it doesn't solve the fragmentation underneath — it just adds another inconsistent layer on top.
          </p>
          <p>
            The actual fix is reconciliation. You need a single, canonical, machine-legible representation of every product — pulled from SAP, PIM, DAM, spreadsheets, and creative archives, resolved into one source of truth, and made available to the surfaces models actually retrieve from.
          </p>
          <p>
            Reconciliation is unglamorous. It involves matching SKU IDs across systems that disagree on identifiers, deduplicating attribute names, resolving translations, picking authoritative imagery, attaching provenance to claims, and keeping all of it current as inventory and seasons turn over.
          </p>
          <p>
            It is also the only thing that fixes the underlying problem. Every other intervention — feed pushes, visibility tracking, prompt engineering, GEO content — is downstream of whether your data is reconciled or not.
          </p>

          <h2 className="!mt-16 font-serif text-3xl md:text-5xl leading-[1.05] tracking-tight text-ink">
            A working definition of canonical.
          </h2>
          <p>A canonical product representation has four properties:</p>
          <div className="space-y-5">
            <div>
              <p className="font-serif text-xl md:text-2xl text-ink">Single source.</p>
              <p className="mt-2 text-ink/75">One record per product, not five.</p>
            </div>
            <div>
              <p className="font-serif text-xl md:text-2xl text-ink">Authored by the brand.</p>
              <p className="mt-2 text-ink/75">The voice and the facts come from inside, not from third-party averaging.</p>
            </div>
            <div>
              <p className="font-serif text-xl md:text-2xl text-ink">Machine-legible.</p>
              <p className="mt-2 text-ink/75">Structured, attribute-rich, and consumable by retrieval systems and protocol-based agents.</p>
            </div>
            <div>
              <p className="font-serif text-xl md:text-2xl text-ink">Current.</p>
              <p className="mt-2 text-ink/75">Updated as the brand updates — same day, not next quarter.</p>
            </div>
          </div>
          <p>
            This is what Trevise builds. We pull the fragments out of SAP, PIM, DAM, spreadsheets, and creative archives, reconcile them in real time, and serve a unified, brand-authored, machine-legible representation to every AI surface that will describe the brand.
          </p>
          <p>
            The model still answers the customer. But now it has a source it can ground itself in, written by you, kept current. The hallucination space collapses.
          </p>

          <h2 className="!mt-16 font-serif text-3xl md:text-5xl leading-[1.05] tracking-tight text-ink">
            When the model has somewhere to look.
          </h2>
          <p>
            The brands AI gets right are not the ones with the loudest marketing. They are the ones that have already done the unglamorous work of resolving their own product truth into a layer the model can find.
          </p>
          <p>That's the whole shift. Not better prompting. Not better SEO. A canonical source the model is allowed to trust.</p>
          <p className="font-serif italic text-2xl md:text-3xl !leading-snug text-ink">
            Trevise is that source.
          </p>
        </div>

        <div className="mt-20 pt-10 border-t border-ink/15">
          <p className="text-base md:text-lg text-ink/75 leading-relaxed font-light max-w-2xl">
            To run the three-question audit on your own brand and see what AI is currently saying about you,{" "}
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
