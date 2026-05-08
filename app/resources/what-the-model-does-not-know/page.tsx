import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What the Model Does Not Know | Trevise Resources",
  description:
    "The case for brand authorship in the AI commerce era. Human-in-the-loop is not a workflow constraint — it is the architectural commitment that lets a brand keep speaking for itself when models are answering for everyone else.",
};

export default function WhatTheModelDoesNotKnow() {
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
          <p className="eyebrow text-ink/55">Manifesto · May 2026</p>
          <h1 className="mt-6 font-serif text-4xl md:text-7xl leading-[0.98] tracking-tight">
            What the model <span className="italic">does not know.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-ink/70 leading-relaxed font-light">
            The case for brand authorship in the AI commerce era. Human-in-the-loop is not a workflow constraint — it is the architectural commitment that lets a brand keep speaking for itself when models are answering for everyone else.
          </p>
        </header>

        <div className="mt-14 md:mt-20 space-y-7 text-base md:text-lg text-ink/85 leading-[1.75] font-light">
          <p>
            In every commerce era before this one, the brand had a say in how it appeared. The runway, the magazine, the storefront, the mailer, the homepage, the marketplace listing — each surface had a hand on it. The brand chose the words. The brand chose the imagery. The brand chose what to leave out.
          </p>
          <p>
            The AI era is the first one in which that authorship is being silently transferred — not by takeover, not by malice, but by signal scarcity. A model&apos;s job is to answer. When a customer asks ChatGPT what to buy and the brand&apos;s authoritative description of itself isn&apos;t anywhere a model can retrieve it, the model improvises. It uses what it can find. Old press releases. Retired campaign images. Resale-site blurbs. A six-year-old paragraph in a magazine archive. The model assembles a description. The customer receives an answer. The transaction proceeds.
          </p>
          <p>Every step of that loop happens without the brand in the room.</p>
          <p>
            This is the quiet violence of AI commerce. Most brands haven&apos;t noticed it yet. By the time they do, the model has already learned a wrong story about them.
          </p>
          <p className="font-serif italic text-2xl md:text-3xl !leading-snug text-ink">
            We refuse the trade.
          </p>

          <h2 className="!mt-16 font-serif text-3xl md:text-5xl leading-[1.05] tracking-tight text-ink">
            The disappearing brand.
          </h2>
          <p>
            A brand is a series of choices the brand has made about itself: this fabric, this last, this fit, this language, this photograph, this colorway, not that one, never that one. The choice is the brand. Strip the choice away and you do not have a smaller brand or a quieter brand — you have a generic one. <em>A luxury house with a formal evening collection. A heritage label with a French sensibility. A premium handbag in the $4,000 range.</em>
          </p>
          <p>
            These descriptions are not wrong. They are also not anyone in particular. The model offers them because that is what it can defend from the public web. It is the linguistic average of the category, and the brand has been averaged into it.
          </p>
          <p>
            What is being lost in the average is the choice. The atelier where every clasp is hand-finished. The reference drawn from a particular archive year. The woman the founder had in mind, decades ago, when the studio was still a single room. None of that survives the model&apos;s averaging — not because the model rejects it, but because the model never saw it. The proprietary truth lives in SAP, in PIM, in the creative director&apos;s email, in spreadsheets the marketing team curates by hand.
          </p>
          <p className="border-l-2 border-ink/30 pl-6 font-serif italic text-xl md:text-2xl !leading-snug text-ink/85">
            The proprietary truth is the brand. The averaged version is what the customer hears.
          </p>
          <p>This is the gap Trevise was built for.</p>

          <h2 className="!mt-16 font-serif text-3xl md:text-5xl leading-[1.05] tracking-tight text-ink">
            The honest truth about what AI is doing.
          </h2>
          <p>
            We do not think models are villains. They are computational instruments, and they do what they can with what they can reach. The fault, such as it is, is architectural. The brand has built its truth in places models cannot retrieve from. The model has built its answers from places the brand never spoke.
          </p>
          <p>
            This is fixable. It does not require slowing AI down. It does not require fighting AI. It requires giving the brand a place to speak that the model can hear.
          </p>
          <p>
            That place is what we call a <em>canonical source</em>. A single, authoritative, machine-legible representation of every product the brand sells — assembled from the brand&apos;s own systems, reconciled into one record per product, expressed in the formats AI surfaces actually consume.
          </p>
          <p>But a canonical source is the easy part. The hard part is what we say next.</p>

          <h2 className="!mt-16 font-serif text-3xl md:text-5xl leading-[1.05] tracking-tight text-ink">
            Authorship is a right, <span className="italic">not a feature.</span>
          </h2>
          <p className="font-serif italic text-2xl md:text-3xl !leading-snug text-ink">
            The brand must be the author.
          </p>
          <p>Not the model. Not Trevise. Not a third party. The brand.</p>
          <p>
            This is the principle that decides what kind of company Trevise becomes. Without it, we are an enrichment vendor — a tool that generates AI-friendly descriptions and pushes them to the open web. With it, we are something different: an infrastructure layer that lets the brand keep authoring itself in an era that would otherwise quietly take that authoring away.
          </p>
          <p>The difference is everything.</p>
          <p>
            We have watched, from inside the houses, how the older infrastructure of commerce treats authorship. A line sheet is not signed by a software vendor. A campaign image is not approved by an ad platform. A product description is not pushed to retailers without review. There is always, somewhere in the operation, a human looking at the work and saying <em>yes, this is us; ship it.</em>
          </p>
          <p>
            The era of agentic commerce is the first era in which someone — the model, the agent, the third-party feed — proposes to write that final sentence on the brand&apos;s behalf, at the speed of inference, on every surface a customer might use to ask about the brand. To accept that proposal is to accept that the brand has agreed to be authored by something else.
          </p>
          <p>We do not accept it. Neither does any brand we have worked with.</p>

          <h2 className="!mt-16 font-serif text-3xl md:text-5xl leading-[1.05] tracking-tight text-ink">
            What human-in-the-loop actually means.
          </h2>
          <p>
            Human-in-the-loop is a phrase the AI industry has used in many shapes. We use it in one specific way.
          </p>
          <p>
            It does not mean <em>humans rubber-stamping AI output for compliance theater.</em> It does not mean <em>adding a review queue that everyone routes around when speed matters.</em> It does not mean <em>having a button that says &quot;approve&quot; so a brand can tell its lawyers there is a button.</em>
          </p>
          <p>It means three contracts the brand can hold against us, in writing, every day:</p>

          <div className="space-y-6">
            <div>
              <p className="font-serif text-xl md:text-2xl text-ink">The data contract.</p>
              <p className="mt-2 text-ink/80">
                What you give us stays where you put it. Future-season designs, unreleased lookbooks, regional exclusives — none of it leaks to a model, an open feed, or another customer. The brand&apos;s internal truth is the brand&apos;s internal truth. Trevise&apos;s job is to make the <em>current and past-season</em> truth legible to AI surfaces — never to expose what has not shipped.
              </p>
            </div>
            <div>
              <p className="font-serif text-xl md:text-2xl text-ink">The claims contract.</p>
              <p className="mt-2 text-ink/80">
                Every AI-generated claim about a brand-sensitive attribute — material composition, sustainability provenance, regional positioning, comparison to a peer brand, best-for or not-best-for tags — is staged for review. The brand&apos;s team approves what goes live. Auto-approval is reserved for purely operational fields where a wrong answer is a small commerce error, not a brand error: price, inventory level, available variants. Anything that touches the brand&apos;s voice or its claims is touched by a human first.
              </p>
            </div>
            <div>
              <p className="font-serif text-xl md:text-2xl text-ink">The evidence contract.</p>
              <p className="mt-2 text-ink/80">
                Every claim Trevise generates carries a provenance trail back to the source data. Where the material composition came from. Which campaign image is the source of the visual reference. Which season the price reflects. The brand can audit every line. The brand can revoke any line. The brand can show its lawyer what it has shipped, in what version, to which surface, on which date.
              </p>
            </div>
          </div>

          <p>
            Three contracts. Together, they are the difference between a brand willingly extending its voice into AI commerce and a brand discovering, six months later, that AI has been speaking for it without permission.
          </p>

          <h2 className="!mt-16 font-serif text-3xl md:text-5xl leading-[1.05] tracking-tight text-ink">
            What this looks like in practice.
          </h2>
          <p>
            A brand connects to Trevise. The connection ingests product master data from SAP and PIM, imagery and lookbook references from the DAM, inventory and pricing from the ERP and commerce platform, customer reviews from the review system, and the spreadsheets where regional translations and certifications live.
          </p>
          <p>
            The data is reconciled into a canonical record per product. Where the systems disagree — and they always do — the brand&apos;s team picks the authoritative source. This is not done by Trevise alone. The reconciliation surface is shared. The brand sees every conflict and every resolution.
          </p>
          <p>
            On top of the canonical record, Trevise generates the enrichments AI shopping agents actually consume: intent matching, scenario tags, comparison anchors, best-for and not-best-for, FAQs, summaries of customer reviews. Each enrichment is <em>generated as a draft.</em> The brand&apos;s team reviews the drafts. Approved drafts go live. Rejected drafts are retired. Every action is logged.
          </p>
          <p>
            The approved record publishes to OpenAI&apos;s ChatGPT Product Feed and the standards emerging across Gemini, Claude, and Perplexity. A daily catalog snapshot keeps the structural truth current; intraday updates flow for price, inventory, and availability where the surfaces support them.
          </p>
          <p>
            The customer asks AI a question. The model retrieves what the brand has authored. The brand appears in the answer — in the brand&apos;s own voice, with its current product, its current price, its current language localizations.
          </p>
          <p>
            A measurement layer feeds the loop back: AI-referred sessions, conversion, revenue, SKU-level performance, feed-version impact. The brand sees what AI is selling, and which version of its authored truth produced the result.
          </p>
          <p className="font-serif italic text-xl md:text-2xl !leading-snug text-ink/85">
            This is brand authorship as an operating system — the answer to what the model does not know.
          </p>

          <h2 className="!mt-16 font-serif text-3xl md:text-5xl leading-[1.05] tracking-tight text-ink">
            The brand that stays.
          </h2>
          <p>
            If we are right about the era — if AI commerce becomes, in five years, the surface where most product discovery actually happens — then the brands that survive it intact will be the ones that authored themselves through it. The brands that did not will not vanish. They will simply become harder to recognize, in their own answers, as themselves. The clasp drawn from the archive will become <em>a metallic closure.</em> The Florentine satin will become <em>a high-quality silk blend.</em> The woman in the founder&apos;s mind will become <em>the modern luxury consumer.</em> Every paraphrase will be defensible. None of them will be the brand.
          </p>
          <p className="border-l-2 border-ink/30 pl-6 font-serif italic text-xl md:text-2xl !leading-snug text-ink/85">
            We are not building Trevise to make AI smarter. We are building Trevise to make the brand louder.
          </p>
          <p>
            In the layer the model can hear, in the brand&apos;s own voice, with the brand&apos;s hand still on the work.
          </p>
          <p className="font-serif italic text-2xl md:text-3xl !leading-snug text-ink">
            When someone asks an AI for a recommendation, the brand finally shows up like itself.
          </p>
          <p>That is the whole work. Everything else is engineering.</p>
        </div>

        <div className="mt-20 pt-10 border-t border-ink/15">
          <p className="text-base md:text-lg text-ink/75 leading-relaxed font-light max-w-2xl">
            To see how Trevise reconciles, distributes, and measures what your brand says about itself — with your team approving every brand-sensitive claim before it ships —{" "}
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
