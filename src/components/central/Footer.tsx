import { Link } from "@tanstack/react-router";
import { legalLinks, mainNav, site } from "@/data/site";
import { locations, statusLabels } from "@/data/locations";
import { categories } from "@/data/catalog";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-central py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <p className="wordmark text-3xl md:text-4xl">CENTRAL</p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-foreground/60">
              {site.description}
            </p>
            <p className="mt-6 eyebrow text-ink-foreground/40">Una marca de {site.operator}</p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <nav aria-label="Explorar">
              <h2 className="eyebrow text-ink-foreground/40">Explorar</h2>
              <ul className="mt-5 space-y-3 text-sm">
                {mainNav.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="text-ink-foreground/75 transition-colors hover:text-ink-foreground">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Centros">
              <h2 className="eyebrow text-ink-foreground/40">Centros</h2>
              <ul className="mt-5 space-y-3 text-sm">
                {locations.map((loc) => (
                  <li key={loc.slug}>
                    <Link
                      to="/ubicaciones/$slug"
                      params={{ slug: loc.slug }}
                      className="text-ink-foreground/75 transition-colors hover:text-ink-foreground"
                    >
                      {loc.shortName}
                      <span className="block text-xs text-ink-foreground/40">{statusLabels[loc.status]}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Categorías">
              <h2 className="eyebrow text-ink-foreground/40">Categorías</h2>
              <ul className="mt-5 space-y-3 text-sm">
                {categories.slice(0, 6).map((cat) => (
                  <li key={cat.slug}>
                    <Link
                      to="/directorio"
                      search={{ categoria: cat.slug }}
                      className="text-ink-foreground/75 transition-colors hover:text-ink-foreground"
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="eyebrow text-ink-foreground/40">Contacto</h2>
              <ul className="mt-5 space-y-3 text-sm text-ink-foreground/75">
                <li>
                  <a href={`mailto:${site.email}`} className="hover:text-ink-foreground">
                    {site.email}
                  </a>
                </li>
                <li>
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-ink-foreground">
                    {site.phone}
                  </a>
                </li>
                <li className="text-ink-foreground/50">{site.address}</li>
              </ul>
              <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-xs uppercase tracking-widest text-ink-foreground/60">
                {site.social.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} className="hover:text-ink-foreground">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-ink-foreground/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} CENTRAL · {site.operator}. Todos los derechos reservados.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legalLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="hover:text-ink-foreground">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
