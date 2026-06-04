import Link from "next/link";
import { papers } from "@/lib/papers";

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-rule">
        <div className="mx-auto max-w-3xl px-6 pt-4 pb-5">
          <div className="text-xs uppercase tracking-[0.18em] text-ink-muted font-sans font-semibold mb-3">
            Quantitative Research
          </div>
          <h1 className="font-serif text-[2.5rem] md:text-[3rem] leading-[1.1] tracking-tight text-navy-deep">
            The mathematics of <span className="italic">Roth Conversions</span>,
            in full.
          </h1>
          <p className="mt-3 text-lg md:text-xl text-ink-soft font-serif leading-relaxed">
            Most Roth-conversion advice collapses to one comparison: <em>your tax
            rate today versus your tax rate later</em>. That comparison hides the
            components that actually drive the answer. The papers here isolate
            each one, derive it formally, and explain it in plain English.
          </p>
        </div>
      </section>

      {/* Start here */}
      <section className="border-b border-rule bg-cream-deep/40">
        <div className="mx-auto max-w-3xl px-6 py-6">
          <div className="text-xs uppercase tracking-[0.18em] text-ink-muted font-sans font-semibold mb-3">
            Start here
          </div>
          <p className="font-serif text-[1.05rem] text-ink-soft leading-relaxed">
            New to this? The <Link href="/practitioner-guide" className="text-navy underline underline-offset-2">Practitioner Guide</Link> walks through the conversion decision from
            first principles, in plain prose. For the math, see the{" "}
            <Link href="/research/synthetic-roth-contribution" className="text-navy underline underline-offset-2">Synthetic Roth Contribution</Link>{" "}
            paper.
          </p>
        </div>
      </section>

      {/* Papers */}
      <section>
        <div className="mx-auto max-w-5xl px-6 pt-4 pb-6">
          <div className="flex items-baseline justify-between mb-3">
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
                <h3 className="font-serif text-[1.2rem] leading-snug text-navy-deep mb-3">
                  {p.title}
                </h3>
                <p className="text-[0.95rem] text-ink-soft font-serif leading-relaxed flex-1">
                  {p.keyIdea}
                </p>
                <div className="mt-5 space-y-1.5">
                  {p.file && (
                    <div>
                      <Link
                        href={`/research/${p.slug}`}
                        className="text-sm text-navy hover:text-navy-deep underline underline-offset-2"
                      >
                        Read paper →
                      </Link>
                    </div>
                  )}
                  {p.external && (
                    <div>
                      <a
                        href={p.external.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-navy hover:text-navy-deep underline underline-offset-2"
                      >
                        {p.external.label} ↗
                      </a>
                    </div>
                  )}
                  {p.submittedTo && (
                    <div className="text-xs italic text-ink-muted font-serif">
                      Submitted to {p.submittedTo}
                    </div>
                  )}
                </div>
                <div className="mt-4 pt-3 border-t border-rule text-xs text-ink-muted font-sans">
                  {p.status} · {p.date}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RothGPT panel */}
      <section className="border-t border-rule bg-navy-deep text-cream">
        <div className="mx-auto max-w-3xl px-6 pt-8 pb-8">
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
