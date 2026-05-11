import Link from "next/link";
import { papers } from "@/lib/papers";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-3xl px-6 pt-20 pb-14">
          <div className="text-xs uppercase tracking-[0.18em] text-ink-muted font-sans font-semibold mb-5">
            Quantitative Research
          </div>
          <h1 className="font-serif text-[2.75rem] md:text-[3.25rem] leading-[1.1] tracking-tight text-navy-deep">
            The mathematics of <span className="italic">Roth Conversions</span>,
            written down carefully.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-ink-soft font-serif leading-relaxed">
            Most Roth-conversion advice rests on a shortcut: <em>compare your tax
            rate today to your tax rate later</em>. The shortcut hides components
            that materially change the answer. This site collects working research
            papers that decompose conversion value into the pieces that actually
            drive household wealth — and shows, in plain English, what each one is
            and why it matters.
          </p>
        </div>
      </section>

      {/* Start here */}
      <section className="border-b border-rule bg-cream-deep/40">
        <div className="mx-auto max-w-3xl px-6 py-10">
          <div className="text-xs uppercase tracking-[0.18em] text-ink-muted font-sans font-semibold mb-3">
            Start here
          </div>
          <p className="font-serif text-[1.05rem] text-ink-soft leading-relaxed">
            New to this? The <Link href="/practitioner-guide" className="text-navy underline underline-offset-2">Practitioner Guide</Link> walks through the conversion decision from
            first principles, in plain prose. If you want the math, start with the{" "}
            <Link href="/research/synthetic-roth-contribution" className="text-navy underline underline-offset-2">Synthetic Roth Contribution</Link>{" "}
            paper.
          </p>
        </div>
      </section>

      {/* Papers */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="font-serif text-2xl text-navy-deep">Research</h2>
            <Link
              href="/research"
              className="text-sm text-navy hover:text-navy-deep underline underline-offset-2"
            >
              All papers →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {papers.map((p) => (
              <article
                key={p.slug}
                className="bg-paper border border-rule rounded-md p-6 flex flex-col"
              >
                <div className="text-xs uppercase tracking-wider text-ink-muted font-sans font-semibold mb-2">
                  {p.status} · {p.date}
                </div>
                <h3 className="font-serif text-[1.2rem] leading-snug text-navy-deep mb-3">
                  {p.title}
                </h3>
                <p className="text-[0.95rem] text-ink-soft font-serif leading-relaxed flex-1">
                  {p.keyIdea}
                </p>
                <div className="mt-5">
                  {p.external ? (
                    <a
                      href={p.external.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-navy hover:text-navy-deep underline underline-offset-2"
                    >
                      {p.external.label} ↗
                    </a>
                  ) : (
                    <Link
                      href={`/research/${p.slug}`}
                      className="text-sm text-navy hover:text-navy-deep underline underline-offset-2"
                    >
                      Read paper →
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RothGPT panel */}
      <section className="border-t border-rule bg-navy-deep text-cream">
        <div className="mx-auto max-w-3xl px-6 py-14">
          <div className="text-xs uppercase tracking-[0.18em] text-cream/60 font-sans font-semibold mb-3">
            See the research applied
          </div>
          <h2 className="font-serif text-3xl mb-4">RothGPT</h2>
          <p className="font-serif text-[1.05rem] leading-relaxed text-cream/85">
            The frameworks developed here are implemented in a working
            calculator: <strong>RothGPT.com</strong>. Enter your own numbers and
            see the Synthetic Roth Contribution, Tax-Drag Shelter alpha,
            time-weighted distribution rate, and break-even tax rate computed for
            your actual situation.
          </p>
          <div className="mt-6">
            <a
              href="https://www.rothgpt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-cream text-navy-deep px-5 py-2.5 text-sm font-medium hover:bg-cream-deep transition-colors"
            >
              Visit RothGPT.com
              <span aria-hidden>↗</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
