import Link from "next/link";
import type { Metadata } from "next";
import { papers } from "@/lib/papers";

export const metadata: Metadata = {
  title: "Research",
  description: "Working papers and published research on the mathematics of Roth Conversions.",
};

export default function ResearchIndex() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <div className="text-xs uppercase tracking-[0.18em] text-ink-muted font-sans font-semibold mb-3">
        Research
      </div>
      <h1 className="font-serif text-4xl text-navy-deep mb-6 leading-tight">
        Working papers
      </h1>
      <p className="font-serif text-lg text-ink-soft leading-relaxed mb-12">
        Each paper isolates one component of Roth-conversion value, derives it
        formally, and shows where the published literature has either folded it
        into a black-box term or missed it entirely. Working papers are revised
        as new findings emerge.
      </p>

      <ul className="divide-y divide-rule">
        {papers.map((p) => (
          <li key={p.slug} className="py-8">
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-xs uppercase tracking-wider text-ink-muted font-sans font-semibold">
                {p.status}
              </span>
              <span className="text-xs text-ink-muted">·</span>
              <span className="text-xs text-ink-muted font-sans">{p.date}</span>
            </div>
            <h2 className="font-serif text-2xl text-navy-deep mb-1 leading-snug">
              {p.external ? (
                <a
                  href={p.external.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-navy"
                >
                  {p.title}
                </a>
              ) : (
                <Link
                  href={`/research/${p.slug}`}
                  className="hover:text-navy"
                >
                  {p.title}
                </Link>
              )}
            </h2>
            {p.subtitle && (
              <p className="font-serif italic text-ink-soft mb-3 leading-snug">
                {p.subtitle}
              </p>
            )}
            <p className="font-serif text-ink-soft leading-relaxed">
              {p.keyIdea}
            </p>
            <div className="mt-4 space-y-1.5">
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
          </li>
        ))}
      </ul>
    </div>
  );
}
