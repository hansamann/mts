import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { COMMUNITY_LINKS } from "@/lib/links";
import { Logo } from "./Logo";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 text-ink transition-all duration-300 ${
        scrolled ? "bg-white shadow-[0_1px_12px_rgba(0,0,0,0.08)]" : "bg-transparent shadow-none"
      }`}
    >
      <div className="shell flex h-16 items-center justify-between gap-5 md:h-20">
        <a href="#top" className="text-ink">
          <Logo className="h-5 w-auto sm:h-5.5" />
        </a>

        <nav aria-label="Community links" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {COMMUNITY_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold uppercase tracking-[0.05em] text-ink transition-colors hover:text-ink/70"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 text-ink md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>



      {open && (
        <div className="md:hidden">
          <div
            className="fixed inset-0 top-16 bg-ink/30"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <nav
            aria-label="Community links"
            className="absolute inset-x-0 top-16 bg-white px-6 py-8 text-ink shadow-[0_1px_12px_rgba(0,0,0,0.08)]"
          >


            <ul className="flex flex-col gap-6">
              {COMMUNITY_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="font-display text-2xl font-extrabold uppercase tracking-[-0.02em]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
