import { Link } from "@tanstack/react-router";
import { ExternalLink, Mail, MapPin, MessageCircle } from "lucide-react";
import { legalLinks, mainNav, site } from "@/data/site";
import { center } from "@/data/center";
import { stores } from "@/data/stores";
import { LocationSwitcher } from "@/components/central/Header";

export function Footer() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="container-central py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <p className="wordmark text-3xl md:text-4xl">CENTRAL</p>
            <p className="mt-2 eyebrow text-ink-foreground/60">{site.subtitle}</p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-foreground/60">
              Plaza urbana y peatonal en el corazón de San Miguel.
            </p>
            <div className="mt-4 w-fit">
              <LocationSwitcher inverse />
            </div>
            <p className="mt-6 eyebrow text-ink-foreground/40">Una plaza de {site.operator}</p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
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
                <li>
                  <a
                    href={site.brandUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-ink-foreground/75 transition-colors hover:text-ink-foreground"
                  >
                    Cambiar ubicación
                    <ExternalLink className="size-3.5" aria-hidden />
                  </a>
                </li>
              </ul>
            </nav>

            <nav aria-label="Comercios">
              <h2 className="eyebrow text-ink-foreground/40">Comercios</h2>
              <ul className="mt-5 space-y-3 text-sm">
                {stores.map((store) => (
                  <li key={store.slug}>
                    <Link
                      to="/comercios/$slug"
                      params={{ slug: store.slug }}
                      className="text-ink-foreground/75 transition-colors hover:text-ink-foreground"
                    >
                      {store.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="eyebrow text-ink-foreground/40">Contacto</h2>
              <ul className="mt-5 space-y-3 text-sm text-ink-foreground/75">
                <li className="flex gap-3">
                  <MessageCircle className="mt-0.5 size-4 shrink-0" aria-hidden />
                  <a href={site.whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-ink-foreground">
                    WhatsApp {site.whatsapp}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0" aria-hidden />
                  <a href={`mailto:${site.email}`} className="break-all hover:text-ink-foreground">
                    {site.email}
                  </a>
                </li>
                <li className="flex gap-3 text-ink-foreground/55">
                  <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />
                  {center.address}
                </li>
              </ul>
              <p className="mt-6 text-xs leading-relaxed text-ink-foreground/45">{center.hoursNote}</p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-ink-foreground/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.fullName} · {site.operator}. Todos los derechos reservados.
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
