import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Steven M. Cheshire, CFA — quantitative equity background and the motivation behind this research.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="text-xs uppercase tracking-[0.18em] text-ink-muted font-sans font-semibold mb-3">
        About
      </div>
      <h1 className="font-serif text-4xl text-navy-deep mb-2 leading-tight">
        Steven M. Cheshire, CFA
      </h1>
      <p className="font-sans text-ink-muted mb-10">
        <a
          href="mailto:cheshireSteven@gmail.com"
          className="hover:text-navy"
        >
          cheshireSteven@gmail.com
        </a>
        <span className="mx-2">·</span>
        Miami Beach, FL
      </p>

      <section className="mb-12">
        <h2 className="font-serif text-xl text-navy-deep mb-3 border-b border-rule pb-2">
          Professional Background
        </h2>
        <p className="font-serif text-[1.05rem] leading-relaxed text-ink-soft">
          Held Quantitative Equity Analyst and Equity Portfolio Manager
          positions at Wellington Management Company, Putnam Investments, State
          Street Global Advisors, and United Alpha. Consulted at Gartmore
          Investments, Affinity Wealth Advisors, and Hoover Financial Advisors.
          B.S. in Finance, Virginia Tech. MBA, Boston University. CFA
          charterholder.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-xl text-navy-deep mb-3 border-b border-rule pb-2">
          Why this research exists
        </h2>
        <div className="font-serif text-[1.05rem] leading-relaxed text-ink-soft space-y-4">
          <p>
            This research began a few years into my own Roth conversions. I
            intuited I was converting correctly, but wanted to{" "}
            <em>quantify</em> exactly what I was getting in return for the
            annual tax payments. The published literature didn&apos;t answer
            that question cleanly. Commercial calculators answered it
            <em> wrongly</em> — often by collapsing path-dependent quantities
            into a single average.
          </p>
          <p>
            Several years of testing scenarios in a working calculator (now{" "}
            <a
              href="https://www.rothgpt.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy hover:text-navy-deep underline underline-offset-2"
            >
              RothGPT.com
            </a>
            ) surfaced phenomena that didn&apos;t fit the standard framing —
            most notably that <em>how</em> you pay the conversion tax (from
            inside the Traditional account vs. from outside funds) produces a
            separable economic effect that the literature had either folded
            into a black-box term or missed. The papers on this site are the
            attempt to write down those findings rigorously.
          </p>
          <p>
            I encourage readers to try and disprove anything I present. My goal
            is for the truth to prevail and for Roth-conversion knowledge to
            improve, disseminate, and be widely understood.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-xl text-navy-deep mb-3 border-b border-rule pb-2">
          Published work
        </h2>
        <div className="bg-paper border border-rule rounded-md p-5">
          <div className="text-xs uppercase tracking-wider text-ink-muted font-sans font-semibold mb-1">
            Foundational paper · April 2025 · Published on SSRN June 2025
          </div>
          <h3 className="font-serif text-lg text-navy-deep mb-2">
            Roth Conversion Valuation &amp; Mechanics
          </h3>
          <p className="font-serif text-ink-soft text-[0.95rem] leading-relaxed mb-3">
            Introduces the Synthetic Roth Contribution concept and the
            conversion-tax-payback decomposition. The framework has been
            substantially extended in subsequent working drafts — see the
            current{" "}
            <a
              href="/research/synthetic-roth-contribution"
              className="text-navy hover:text-navy-deep underline underline-offset-2"
            >
              Synthetic Roth Contribution
            </a>{" "}
            and{" "}
            <a
              href="/research/tax-drag-shelter"
              className="text-navy hover:text-navy-deep underline underline-offset-2"
            >
              Tax-Drag Shelter
            </a>{" "}
            papers for the formal treatment as it stands today.
          </p>
          <a
            href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5205840"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-navy hover:text-navy-deep underline underline-offset-2"
          >
            Read on SSRN ↗
          </a>
        </div>
      </section>

      <section>
        <h2 className="font-serif text-xl text-navy-deep mb-3 border-b border-rule pb-2">
          The calculator
        </h2>
        <p className="font-serif text-[1.05rem] leading-relaxed text-ink-soft">
          The frameworks developed on this site are implemented end-to-end in a
          working tool at{" "}
          <a
            href="https://www.rothgpt.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy hover:text-navy-deep underline underline-offset-2"
          >
            RothGPT.com
          </a>
          . Enter your own numbers and see the components in your case.
        </p>
      </section>
    </div>
  );
}
