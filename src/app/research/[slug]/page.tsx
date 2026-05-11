import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Markdown } from "@/components/Markdown";
import { papers, getPaper, readPaperBody } from "@/lib/papers";

export function generateStaticParams() {
  return papers.filter((p) => p.file).map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const paper = getPaper(slug);
  if (!paper) return {};
  return {
    title: paper.title,
    description: paper.keyIdea,
  };
}

export default async function PaperPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const paper = getPaper(slug);
  if (!paper || !paper.file) notFound();

  const body = readPaperBody(paper.file);

  return (
    <article className="mx-auto max-w-3xl px-6 py-12">
      <Link
        href="/research"
        className="inline-block text-sm text-navy hover:text-navy-deep mb-8"
      >
        ← All research
      </Link>

      <header className="border-b border-rule pb-8 mb-10">
        <div className="text-xs uppercase tracking-[0.18em] text-ink-muted font-sans font-semibold mb-3">
          {paper.status} · {paper.date}
        </div>
        <h1 className="font-serif text-[2.5rem] leading-[1.15] tracking-tight text-navy-deep mb-3">
          {paper.title}
        </h1>
        {paper.subtitle && (
          <p className="font-serif text-xl italic text-ink-soft leading-snug">
            {paper.subtitle}
          </p>
        )}
        <div className="mt-5 text-sm text-ink-muted font-sans">
          Steven M. Cheshire, CFA
        </div>
      </header>

      <Markdown source={body} />

      <footer className="mt-16 pt-8 border-t border-rule text-sm text-ink-muted">
        <p>
          See the math applied in a working calculator at{" "}
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
      </footer>
    </article>
  );
}
