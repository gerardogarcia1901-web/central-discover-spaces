import { Link } from "@tanstack/react-router";
import { Menu, Search, ExternalLink, X, ArrowUpRight, Globe2 } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { mainNav, site } from "@/data/site";
import { center } from "@/data/center";
import { allStores } from "@/data/stores";
import { cn } from "@/lib/utils";

const menuGroups = [
  {
    label: "La plaza",
    links: [
      { label: "Inicio", to: "/" },
      { label: "Comercios", to: "/comercios" },
      { label: "Visítanos", to: "/visitanos" },
    ],
  },
  {
    label: "Contenido",
    links: [
      { label: "Promociones", to: "/promociones" },
      { label: "Novedades", to: "/novedades" },
    ],
  },
  {
    label: "Conecta",
    links: [
      { label: "Arrendamientos", to: "/arrendamientos" },
      { label: "Contacto", to: "/contacto" },
    ],
  },
] as const;

function TopBar() {
  return (
    <div className="w-full bg-ink text-ink-foreground">
      <div className="container-central flex h-9 items-center justify-between gap-4">
        <p className="eyebrow truncate text-ink-foreground/60">
          {center.city}, {center.department} · Plaza peatonal en el centro
        </p>
        <a
          href={site.brandUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center gap-1.5 eyebrow text-ink-foreground/70 transition-colors hover:text-ink-foreground"
        >
          <Globe2 className="size-3.5" aria-hidden />
          Cambiar ubicación
          <ArrowUpRight className="size-3.5" aria-hidden />
        </a>
      </div>
    </div>
  );
}

function Wordmark({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <Link to="/" onClick={onNavigate} className="flex flex-col leading-none" aria-label={`${site.fullName}, inicio`}>
      <span className="wordmark text-xl leading-none md:text-2xl">CENTRAL</span>
      <span className="mt-1 text-[0.6rem] font-medium uppercase tracking-[0.28em] text-muted-foreground md:text-[0.65rem]">
        {site.subtitle}
      </span>
    </Link>
  );
}

function SearchDialog({ expanded = false }: { expanded?: boolean }) {
  const [query, setQuery] = useState("");
  const results = query.trim()
    ? allStores.filter((s) => s.name.toLowerCase().includes(query.trim().toLowerCase()))
    : [];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size={expanded ? "default" : "icon"}
          className={cn(
            "rounded-full",
            expanded &&
              "h-auto justify-start gap-4 px-0 py-2 text-ink-foreground/60 hover:bg-transparent hover:text-ink-foreground",
          )}
          aria-label="Buscar comercio"
        >
          <Search className="size-4" />
          {expanded && <span className="text-sm font-normal">Buscar un comercio</span>}
        </Button>
      </DialogTrigger>
      <DialogContent className="top-24 max-w-2xl translate-y-0 rounded-none border-border p-0">
        <DialogHeader className="border-b px-6 py-4">
          <DialogTitle className="eyebrow text-muted-foreground">Buscar en San Miguel Centro</DialogTitle>
        </DialogHeader>
        <div className="p-6">
          <Input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Busca un comercio de la plaza"
            className="h-12 rounded-none border-0 border-b border-border px-0 text-lg focus-visible:ring-0"
          />
          <ul className="mt-6 space-y-1">
            {results.map((store) => (
              <li key={store.slug}>
                <Link
                  to="/comercios/$slug"
                  params={{ slug: store.slug }}
                  className="flex items-center justify-between px-2 py-3 text-sm transition-colors hover:bg-muted"
                >
                  <span className="font-medium">{store.name}</span>
                  <span className="text-muted-foreground">{store.local}</span>
                </Link>
              </li>
            ))}
            {query && results.length === 0 && (
              <li className="py-3 text-sm text-muted-foreground">Sin resultados para “{query}”.</li>
            )}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "bg-background/95 backdrop-blur border-b border-border"
          : "bg-background border-b border-transparent",
      )}
    >
      <TopBar />
      <div className="container-central flex h-16 items-center justify-between gap-6 md:h-20">
        <div className="flex items-center gap-8">
          <Wordmark />
          <nav aria-label="Navegación principal" className="hidden items-center gap-6 lg:flex">
            {mainNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="eyebrow whitespace-nowrap text-foreground/70 transition-colors hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-1 md:gap-3">
          <a
            href={site.brandUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 border border-border px-4 py-2 eyebrow text-foreground/70 transition-colors hover:border-foreground hover:text-foreground lg:inline-flex"
          >
            <Globe2 className="size-3.5" aria-hidden />
            Cambiar ubicación
          </a>

          <SearchDialog />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full lg:hidden" aria-label="Abrir menú">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full overflow-y-auto border-0 bg-ink p-0 text-ink-foreground shadow-none sm:max-w-none [&>button]:hidden"
            >
              <div className="grid min-h-full grid-rows-[auto_1fr_auto]">
                <div className="grid min-h-20 grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center border-b border-ink-foreground/15 px-5 md:min-h-24 md:px-12">
                  <Button
                    variant="ghost"
                    onClick={() => setOpen(false)}
                    className="w-fit justify-start gap-2 px-0 text-ink-foreground hover:bg-transparent hover:text-ink-foreground/70"
                    aria-label="Cerrar menú"
                  >
                    <X className="size-5" />
                    <span className="hidden sm:inline">Cerrar</span>
                  </Button>
                  <Link
                    to="/"
                    onClick={() => setOpen(false)}
                    className="wordmark text-lg md:text-2xl"
                    aria-label={`${site.fullName}, inicio`}
                  >
                    CENTRAL
                  </Link>
                  <a
                    href={site.brandUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-auto inline-flex items-center gap-2 text-sm font-medium text-ink-foreground transition-opacity hover:opacity-70"
                  >
                    <Globe2 className="size-5" aria-hidden />
                    <span className="hidden sm:inline">Cambiar ubicación</span>
                  </a>
                </div>

                <nav
                  aria-label="Menú principal"
                  className="container-central grid content-start grid-cols-1 gap-x-10 gap-y-10 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:py-24"
                >
                  {menuGroups.map((group) => (
                    <section key={group.label} aria-labelledby={`menu-${group.label}`}>
                      <h2
                        id={`menu-${group.label}`}
                        className="eyebrow border-b border-ink-foreground/15 pb-5 text-ink-foreground/45"
                      >
                        {group.label}
                      </h2>
                      <ul className="space-y-4 pt-7">
                        {group.links.map((item) => (
                          <li key={`${group.label}-${item.label}`}>
                            <Link
                              to={item.to}
                              onClick={() => setOpen(false)}
                              className="text-xl font-medium text-ink-foreground/90 transition-colors hover:text-highlight md:text-2xl"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </nav>

                <div className="container-central flex flex-col gap-4 border-t border-ink-foreground/15 py-8">
                  <SearchDialog expanded />
                  <p className="text-xs leading-relaxed text-ink-foreground/50">{center.hoursNote}</p>
                  <a
                    href={site.brandUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 eyebrow text-ink-foreground/70 hover:text-ink-foreground"
                  >
                    Ver todas las ubicaciones de CENTRAL
                    <ExternalLink className="size-3.5" aria-hidden />
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
