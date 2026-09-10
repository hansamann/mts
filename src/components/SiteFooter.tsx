import { COMMUNITY_LINKS } from "@/lib/links";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="shell py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <h5 className="text-sm font-bold uppercase tracking-[0.12em]">Data according to § 5 TMG / Angaben gemäß § 5 TMG</h5>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Sven Haiges, Buchenstr. 24, 82178 Puchheim, Germany
            </p>
          </div>
          <div>
            <h5 className="text-sm font-bold uppercase tracking-[0.12em]">Contact / Kontakt</h5>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Phone/Telefon:{" "}
              <a href="tel:+4917655786080" className="text-foreground hover:text-primary">
                +49 (0) 176-55786080
              </a>
              <br />
              E-Mail:{" "}
              <a
                href="mailto:techsauna@nopants.dev"
                className="text-foreground hover:text-primary"
              >
                techsauna@nopants.dev
              </a>
            </p>
          </div>
          <div>
            <h5 className="text-sm font-bold uppercase tracking-[0.12em]">
              Responsible for the content / Redaktionell verantwortlich
            </h5>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Sven Haiges
              <br />
              Source/Quelle: e-recht24.de
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap gap-6">
            {COMMUNITY_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted-foreground">©2026 Munich Tech Sauna</p>
        </div>
      </div>
    </footer>
  );
}
