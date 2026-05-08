import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources | Trevise",
  description:
    "Essays and field notes from Trevise on brand representation across AI surfaces, product data reconciliation, and the agentic commerce shift.",
};

const posts = [
  {
    slug: "what-the-model-does-not-know",
    title: "What the Model Does Not Know",
    excerpt:
      "The case for brand authorship in the AI commerce era. Human-in-the-loop is not a workflow constraint — it is the architectural commitment that lets a brand keep speaking for itself when models are answering for everyone else.",
    eyebrow: "Manifesto",
    date: "May 2026",
  },
  {
    slug: "2026-ai-commerce-stack",
    title: "The 2026 AI Commerce Stack",
    excerpt:
      "Feed managers, AI visibility trackers, and canonical source layers are pitching brands the same problem. They sound similar. They are not. A buying frame for the leads being asked to choose.",
    eyebrow: "Comparison",
    date: "May 2026",
  },
  {
    slug: "how-ai-gets-your-brand-wrong",
    title: "How AI Gets Your Brand Wrong",
    excerpt:
      "When ChatGPT or Gemini describes your products incorrectly, the instinct is to blame the model. The model isn't the problem. The problem is that your product truth lives in five internal systems and almost none of it has been published to the layer the model can read.",
    eyebrow: "Use case",
    date: "May 2026",
  },
  {
    slug: "why-brands-need-trevise",
    title: "Why Brands Need Trevise",
    excerpt:
      "When customers ask AI agents what to buy, brands are being described by data they don't control. Trevise is the canonical layer that lets brands sell to AI agents the way they sell everywhere else — like themselves.",
    eyebrow: "Thesis",
    date: "May 2026",
  },
];

export default function ResourcesIndex() {
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

      {/* Header */}
      <section className="px-6 md:px-12 pt-16 md:pt-28 pb-16 md:pb-24 max-w-7xl mx-auto">
        <p className="eyebrow text-ink/60">Resources</p>
        <h1 className="mt-6 font-serif text-5xl sm:text-6xl md:text-8xl leading-[0.95] tracking-tight">
          AI describes your brand. <span className="italic">You author the source.</span>
        </h1>
        <p className="mt-10 text-lg md:text-xl max-w-2xl text-ink/75 leading-relaxed font-light">
          Essays on the data, the stack, and the work brands have to do to show up correctly in ChatGPT, Gemini, Claude, and Perplexity.
        </p>
      </section>

      {/* Post list */}
      <section className="px-6 md:px-12 pb-32 max-w-7xl mx-auto">
        <ul className="border-t border-ink/15">
          {posts.map((post) => (
            <li key={post.slug} className="border-b border-ink/15">
              <Link
                href={`/resources/${post.slug}`}
                className="group block py-10 md:py-14 grid md:grid-cols-12 gap-6 md:gap-12 items-baseline"
              >
                <div className="md:col-span-3">
                  <p className="eyebrow text-ink/50">{post.eyebrow}</p>
                  <p className="mt-2 text-sm text-ink/55">{post.date}</p>
                </div>
                <div className="md:col-span-9">
                  <h2 className="font-serif text-3xl md:text-5xl leading-[1.05] tracking-tight font-normal text-ink origin-left transform-gpu transition-[transform,font-weight,letter-spacing] duration-300 ease-out group-hover:scale-[1.04] group-hover:font-medium group-hover:tracking-[-0.01em]">
                    {post.title}
                  </h2>
                  <p className="mt-5 text-base md:text-lg text-ink/70 leading-relaxed font-light max-w-3xl">
                    {post.excerpt}
                  </p>
                  <span className="mt-6 inline-block text-sm tracking-wide border-b border-ink/40 pb-1 group-hover:border-ink transition">
                    Read essay
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

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
