import fs from "node:fs";
import path from "node:path";

export type Paper = {
  slug: string;
  title: string;
  subtitle?: string;
  date: string; // ISO-ish display string
  status: "Working draft" | "Published" | "Foundational paper";
  keyIdea: string; // one-line plain-English hook
  authorsNote?: string;
  external?: { label: string; href: string };
  /** Filename inside content/papers/, or null if this paper has no on-site body (external only). */
  file?: string;
};

export const papers: Paper[] = [
  {
    slug: "synthetic-roth-contribution",
    title:
      "The Synthetic Roth Contribution",
    subtitle:
      "Empirical and Algebraic Proofs of a Hidden Component in Outside-Funded Roth Conversions",
    date: "May 2026",
    status: "Working draft",
    keyIdea:
      "When you pay Roth conversion tax from outside the retirement account, you've quietly made a Roth contribution equal to the tax — bypassing the IRS contribution limit. This paper proves it four ways.",
    file: "synthetic-roth-contribution.md",
  },
  {
    slug: "tax-drag-shelter",
    title: "Tax-Drag Shelter",
    subtitle:
      "Quantifying the Raison d'Être of Tax-Advantaged Retirement Accounts — PV and IRR Analysis of the Two Manifestations in the Roth Conversion Setting",
    date: "May 2026",
    status: "Working draft",
    keyIdea:
      "The defining value of a retirement account isn't the tax-rate trade — it's the elimination of annual tax drag on savings. A Roth conversion accesses this benefit through two distinct channels, separately quantified here in PV and IRR.",
    file: "tax-drag-shelter.md",
  },
  {
    slug: "roth-conversion-valuation-mechanics",
    title: "Roth Conversion Valuation & Mechanics",
    subtitle: "Foundational paper introducing the Synthetic Roth Contribution framework",
    date: "April 2025 · Published on SSRN June 2025",
    status: "Foundational paper",
    keyIdea:
      "The paper that introduced the Synthetic Roth Contribution concept and decomposed conversion-tax payback into its components. The framework has been substantially extended in the two working drafts above.",
    external: {
      label: "Read on SSRN",
      href: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5205840",
    },
  },
];

export function getPaper(slug: string): Paper | undefined {
  return papers.find((p) => p.slug === slug);
}

const CONTENT_ROOT = path.join(process.cwd(), "content");

export function readPaperBody(file: string): string {
  const fullPath = path.join(CONTENT_ROOT, "papers", file);
  const raw = fs.readFileSync(fullPath, "utf8");
  // Strip the title block: leading H1 + author/date lines through the first
  // horizontal rule. The styled page header renders the title separately.
  const ruleIdx = raw.search(/^---\s*$/m);
  if (ruleIdx !== -1) {
    const beforeRule = raw.slice(0, ruleIdx);
    if (/^#\s/m.test(beforeRule)) {
      // Drop everything up to and including the first --- and surrounding blank lines.
      return raw.slice(ruleIdx).replace(/^---\s*\n+/, "");
    }
  }
  return raw;
}

export function readContentFile(relativePath: string): string {
  const fullPath = path.join(CONTENT_ROOT, relativePath);
  return fs.readFileSync(fullPath, "utf8");
}
