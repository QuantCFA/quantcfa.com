import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-rule bg-cream-deep/40">
      <div className="mx-auto max-w-6xl px-6 pt-4 pb-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div>
          <div className="font-serif text-lg text-navy-deep">
            <span className="font-semibold">Quant</span>
            <span className="italic">CFA</span>
          </div>
          <p className="mt-2 text-ink-muted leading-relaxed">
            Quantitative research on the mathematics of Roth Conversions.
          </p>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-ink-muted font-sans font-semibold mb-3">
            Site
          </div>
          <ul className="space-y-2">
            <li>
              <Link href="/research" className="text-ink-soft hover:text-navy">
                Research
              </Link>
            </li>
            <li>
              <Link href="/practitioner-guide" className="text-ink-soft hover:text-navy">
                Practitioner Guide
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-ink-soft hover:text-navy">
                About
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-xs uppercase tracking-wider text-ink-muted font-sans font-semibold mb-3">
            See the research applied
          </div>
          <a
            href="https://www.rothgpt.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy hover:text-navy-deep underline underline-offset-2"
          >
            RothGPT.com ↗
          </a>
          <p className="mt-2 text-ink-muted leading-relaxed text-[0.85rem]">
            The Roth-conversion calculator that implements the frameworks
            developed here.
          </p>
        </div>
      </div>
      <div className="border-t border-rule/60">
        <div className="mx-auto max-w-6xl px-6 pt-4 pb-2 flex flex-col md:flex-row justify-between gap-2 text-xs text-ink-muted">
          <div>© {new Date().getFullYear()} Steven M. Cheshire, CFA</div>
          <div>
            <a
              href="mailto:cheshireSteven@gmail.com"
              className="hover:text-navy"
            >
              cheshireSteven@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
