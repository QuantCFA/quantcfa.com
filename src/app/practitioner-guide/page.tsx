import type { Metadata } from "next";
import { Markdown } from "@/components/Markdown";
import { readContentFile } from "@/lib/papers";

export const metadata: Metadata = {
  title: "Practitioner Guide",
  description:
    "A practitioner's guide for advisors and sophisticated DIY investors: how RothGPT solves the Roth Conversion decision.",
};

export default function PractitionerGuide() {
  const body = readContentFile("practitioner-guide.md");

  return (
    <article className="mx-auto max-w-3xl px-6 py-12">
      <header className="border-b border-rule pb-8 mb-10">
        <div className="text-xs uppercase tracking-[0.18em] text-ink-muted font-sans font-semibold mb-3">
          Practitioner Guide
        </div>
        <h1 className="font-serif text-[2.5rem] leading-[1.15] tracking-tight text-navy-deep mb-3">
          How RothGPT solves the Roth Conversion decision
        </h1>
        <p className="font-serif text-xl italic text-ink-soft leading-snug">
          A guide for advisors and sophisticated DIY investors.
        </p>
        <p className="mt-5 font-serif text-ink-soft leading-relaxed">
          The frameworks in the formal research papers, restated in plain prose
          and walked through end-to-end. Less proof, more decision-making
          context. Pairs with the calculator at{" "}
          <a
            href="https://www.rothgpt.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy hover:text-navy-deep underline underline-offset-2"
          >
            RothGPT.com
          </a>
          .
        </p>
      </header>

      <Markdown source={body} />
    </article>
  );
}
