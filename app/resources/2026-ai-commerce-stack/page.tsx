import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The 2026 AI Commerce Stack | Trevise Resources",
  description:
    "Three categories of vendor are pitching brands the same problem in 2026. They sound similar. They are not. A buying frame for digital and brand leads evaluating feed managers, AI visibility trackers, and canonical source layers.",
};

export default function AICommerceStack() {
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
          <p className="eyebrow text-ink/55">Comparison · May 2026</p>
          <h1 className="mt-6 font-serif text-4xl md:text-7xl leading-[0.98] tracking-tight">
            The 2026 AI <span className="italic">commerce stack.</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-ink/70 leading-relaxed font-light">
            Feed managers, AI visibility trackers, and canonical source layers are pitching brands the same problem. They sound similar. They are not. A buying frame for the leads being asked to choose.
          </p>
        </header>

        <div className="mt-14 md:mt-20 space-y-7 text-base md:text-lg text-ink/85 leading-[1.75] font-light">
          <p>
            If you run digital, brand, or ecommerce at a consumer brand, you have probably watched three categories of vendor pitch you in the last six months. They sound similar. They are not.
          </p>
          <p>
            The fastest way to make a bad buying decision in 2026 is to assume one of them solves the others' problems. The fastest way to make a good one is to understand which problem each category actually solves — and which problem none of them solves alone.
          </p>

          <h2 className="!mt-16 font-serif text-3xl md:text-5xl leading-[1.05] tracking-tight text-ink">
            The category map.
          </h2>
          <p>
            The AI commerce stack today splits cleanly into three categories. Each is necessary. None is sufficient.
          </p>

          <div className="!my-10 border-y border-ink/15">
            <div className="grid grid-cols-12 py-5 border-b border-ink/15 text-xs md:text-sm">
              <p className="col-span-4 eyebrow text-ink/55">Category</p>
              <p className="col-span-4 eyebrow text-ink/55">What it solves</p>
              <p className="col-span-4 eyebrow text-ink/55">What it doesn't</p>
            </div>
            <div className="grid grid-cols-12 py-6 border-b border-ink/10 text-sm md:text-base">
              <p className="col-span-4 font-serif text-lg md:text-xl">Feed managers</p>
              <p className="col-span-4 text-ink/75 leading-relaxed">
                Distributing product feeds to ChatGPT, marketplaces, ad platforms, and protocol-based agents.
              </p>
              <p className="col-span-4 text-ink/75 leading-relaxed">
                Reconciling fragmented internal data. Fixing the source.
              </p>
            </div>
            <div className="grid grid-cols-12 py-6 border-b border-ink/10 text-sm md:text-base">
              <p className="col-span-4 font-serif text-lg md:text-xl">AI visibility trackers</p>
              <p className="col-span-4 text-ink/75 leading-relaxed">
                Telling you when, where, and how your brand is being mentioned in AI answers.
              </p>
              <p className="col-span-4 text-ink/75 leading-relaxed">
                Fixing what caused the wrong mention.
              </p>
            </div>
            <div className="grid grid-cols-12 py-6 text-sm md:text-base">
              <p className="col-span-4 font-serif text-lg md:text-xl">Canonical source layers</p>
              <p className="col-span-4 text-ink/75 leading-relaxed">
                Reconciling product data across SAP, PIM, DAM, and spreadsheets into a single, brand-authored, machine-legible record.
              </p>
              <p className="col-span-4 text-ink/75 leading-relaxed">
                Distribution and visibility tracking, in isolation.
              </p>
            </div>
          </div>

          <p>
            Most brands in 2026 will end up with one of each. The question is which to start with — and that depends entirely on which problem you actually have.
          </p>

          <h2 className="!mt-16 font-serif text-3xl md:text-5xl leading-[1.05] tracking-tight text-ink">
            What feed managers actually solve.
          </h2>
          <p>
            Feed managers are infrastructure for moving structured product data outward. They are how brands push catalogs to Google Shopping, Amazon, Meta, and increasingly ChatGPT and other AI surfaces with shopping integrations.
          </p>
          <p className="font-serif text-lg italic text-ink/70 !mt-8">What they do well:</p>
          <ul className="space-y-2 pl-6 list-disc marker:text-ink/40">
            <li>Format translation between feed standards.</li>
            <li>Schedule and reliability for high-volume catalog syncs.</li>
            <li>Compliance with each surface's evolving schema.</li>
          </ul>
          <p className="font-serif text-lg italic text-ink/70 !mt-6">What they do not do:</p>
          <ul className="space-y-2 pl-6 list-disc marker:text-ink/40">
            <li>They do not reconcile contradictions inside your data. If SAP says wool, the PIM says wool blend, and the DAM has imagery of a cashmere sample, the feed manager picks one and ships it. The contradiction goes downstream.</li>
            <li>They do not author. The brand voice in your feed is whatever your PIM team typed last quarter.</li>
            <li>They do not fix the gap between your internal truth and your public signal.</li>
          </ul>
          <p>
            A feed manager is a pipe. If what you are sending through the pipe is fragmented, the receiving side just sees fragmentation faster.
          </p>

          <h2 className="!mt-16 font-serif text-3xl md:text-5xl leading-[1.05] tracking-tight text-ink">
            What AI visibility trackers actually solve.
          </h2>
          <p>
            AI visibility trackers are observability for AI answers. They monitor what ChatGPT, Gemini, Claude, and Perplexity say about your brand and surface drift, mis-attribution, and competitive positioning.
          </p>
          <p className="font-serif text-lg italic text-ink/70 !mt-8">What they do well:</p>
          <ul className="space-y-2 pl-6 list-disc marker:text-ink/40">
            <li>Real-time monitoring of brand mentions across major AI surfaces.</li>
            <li>Comparison against competitors in shared answer space.</li>
            <li>Pattern detection — <em>the model has started recommending us for something we don't make</em>.</li>
          </ul>
          <p className="font-serif text-lg italic text-ink/70 !mt-6">What they do not do:</p>
          <ul className="space-y-2 pl-6 list-disc marker:text-ink/40">
            <li>They diagnose, they do not repair. A tracker can tell you the model thinks your hero coat is cashmere when it is wool. It cannot fix the underlying signal that taught the model that.</li>
            <li>They do not author the canonical record the model is supposed to be reading from.</li>
            <li>They do not change distribution. Knowing about a problem and being equipped to solve it are different categories of tool.</li>
          </ul>
          <p className="border-l-2 border-ink/30 pl-6 font-serif italic text-xl md:text-2xl !leading-snug text-ink/85">
            A tracker is a dashboard. The dashboard is necessary. It is not sufficient.
          </p>

          <h2 className="!mt-16 font-serif text-3xl md:text-5xl leading-[1.05] tracking-tight text-ink">
            The layer underneath: <span className="italic">canonical source.</span>
          </h2>
          <p>
            Both categories above assume your data is right, structured, and brand-authored. In practice, almost no consumer brand's data meets that bar — not because anyone failed, but because the data was built for internal operations, not for AI surfaces.
          </p>
          <p>
            The canonical source layer sits underneath both. It does the unglamorous work that nothing else does:
          </p>
          <ul className="space-y-2 pl-6 list-disc marker:text-ink/40">
            <li>Pulls fragments from SAP, PIM, DAM, spreadsheets, and creative archives.</li>
            <li>Reconciles contradictions and resolves them with brand-authored authority.</li>
            <li>Resolves translations, attaches provenance, keeps imagery current.</li>
            <li>Outputs a single, machine-legible representation of every product.</li>
          </ul>
          <p>
            That representation is then what the feed manager pipes outward and what the visibility tracker checks against. With it, both upstream tools work on real signal. Without it, they accelerate fragmentation.
          </p>
          <p>
            This is the category Trevise occupies — and the reason we do not compete with feed managers or visibility trackers. We are a layer underneath them.
          </p>

          <h2 className="!mt-16 font-serif text-3xl md:text-5xl leading-[1.05] tracking-tight text-ink">
            A simple stack diagnostic.
          </h2>
          <p>
            If you are trying to decide where to invest first, three questions will tell you which category you actually need.
          </p>

          <div className="space-y-7">
            <div>
              <p className="font-serif text-xl md:text-2xl text-ink">
                1. If a customer asked ChatGPT about your hero product right now, do you know what it would say?
              </p>
              <p className="mt-3 text-ink/80"><em>No</em> → start with a visibility tracker. You cannot fix what you cannot measure.</p>
            </div>
            <div>
              <p className="font-serif text-xl md:text-2xl text-ink">
                2. If you do know — is it wrong, and if so, do you know why?
              </p>
              <p className="mt-3 text-ink/80"><em>Wrong, and the source data inside our systems is correct</em> → start with a feed manager. Your problem is distribution.</p>
              <p className="mt-2 text-ink/80"><em>Wrong, and the source data inside our systems disagrees with itself</em> → start with a canonical source layer. Distribution will not fix this.</p>
            </div>
            <div>
              <p className="font-serif text-xl md:text-2xl text-ink">
                3. Are you confident your internal product data, today, would produce a correct answer if shipped to a model?
              </p>
              <p className="mt-3 text-ink/80"><em>No, and that's the actual constraint</em> → canonical source first, then layer feed and visibility on top.</p>
            </div>
          </div>
          <p>
            Most brands answer no to question three. That is the signal that the right starting point is reconciliation, not distribution or observability.
          </p>

          <h2 className="!mt-16 font-serif text-3xl md:text-5xl leading-[1.05] tracking-tight text-ink">
            A buying frame.
          </h2>
          <p>
            The temptation in any new category is to buy the most visible tool first — usually a dashboard, because it is the easiest to demo. In AI commerce, that produces a predictable failure pattern: a beautiful visibility dashboard reporting consistent failures the brand has no infrastructure to fix.
          </p>
          <p>The order that produces working AI representation is the inverse:</p>
          <ol className="space-y-3 pl-6 list-decimal marker:text-ink/40 marker:font-serif marker:text-lg">
            <li><strong className="font-medium">Reconcile</strong> the source.</li>
            <li><strong className="font-medium">Distribute</strong> the reconciled source through the feed layer.</li>
            <li><strong className="font-medium">Monitor</strong> the result with the visibility layer.</li>
          </ol>
          <p>Most brands today are skipping step one and wondering why two and three are not producing results.</p>

          <h2 className="!mt-16 font-serif text-3xl md:text-5xl leading-[1.05] tracking-tight text-ink">
            What's underneath the answer.
          </h2>
          <p>
            When a customer asks an AI for a recommendation, the model is doing one of two things. It is grounding itself in a canonical source the brand authored, or it is improvising from whatever it can find.
          </p>
          <p>
            The 2026 stack works backward from that distinction. Reconciliation is what gives the model somewhere to look. Distribution is what gets the source to the surfaces that need it. Visibility is what tells you when the system is working.
          </p>
          <p className="font-serif italic text-2xl md:text-3xl !leading-snug text-ink">
            Trevise is the reconciliation layer. The other two categories matter — and we work alongside both. None of it works without the canonical source underneath.
          </p>
        </div>

        <div className="mt-20 pt-10 border-t border-ink/15">
          <p className="text-base md:text-lg text-ink/75 leading-relaxed font-light max-w-2xl">
            If you are evaluating the AI commerce stack and want a frank read on which layer to start with,{" "}
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
