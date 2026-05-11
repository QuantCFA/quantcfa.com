import Link from "next/link";

const navItems = [
  { href: "/research", label: "Research" },
  { href: "/practitioner-guide", label: "Practitioner Guide" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="border-b border-rule bg-cream/80 backdrop-blur supports-[backdrop-filter]:bg-cream/70 sticky top-0 z-30">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-xl tracking-tight text-navy-deep hover:text-navy transition-colors"
        >
          <span className="font-semibold">Quant</span>
          <span className="font-normal italic">CFA</span>
        </Link>

        <nav className="flex items-center gap-7 text-[0.95rem]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-ink-soft hover:text-navy transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://www.rothgpt.com"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1 inline-flex items-center gap-1 rounded-full border border-navy/30 px-3 py-1 text-[0.85rem] text-navy hover:bg-navy hover:text-cream transition-colors"
          >
            RothGPT
            <span aria-hidden className="text-[0.75rem]">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
