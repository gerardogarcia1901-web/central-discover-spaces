import { Link } from "@tanstack/react-router";
import { Menu, Search, ExternalLink, X, ArrowUpRight, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { mainNav, site } from "@/data/site";
import { center } from "@/data/center";
import { allStores } from "@/data/stores";
import { cn } from "@/lib/utils";

const DAYS = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

function todayHours() {
  const day = DAYS[new Date().getDay()];
  return center.hours.find((h) => h.label === day)?.value ?? center.hours[0].value;
}

function TopBar() {
  return (
    <div className="w-full bg-ink text-ink-foreground">
      <div className="container-central flex h-9 items-center justify-between gap-4">
        <p className="eyebrow truncate text-ink-foreground/60">
          {center.city}, {center.department} · En operación
        </p>
        <a
          href={site.brandUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center gap-1.5 eyebrow text-ink-foreground/70 transition-colors hover:text-ink-foreground"
        >
          Sitio principal de CENTRAL
          <ArrowUpRight className="size-3.5" aria-hidden />
        </a>
      </div>
    </div>
  );
}

function Wordmark({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <Link
      to="/"
      onClick={onNavigate}
      className="flex flex-col leading-none"
      aria-label={`${site.fullName}, inicio`}
    >
      <span className="wordmark text-xl leading-none md:text-2xl">CENTRAL</span>
      <span className="mt-1 text-[0.6rem] font-medium uppercase tracking-[0.28em] text-muted-foreground md:text-[0.65rem]">
        {site.subtitle}
      </span>
    </Link>
  );
}

function SearchDialog() {
  const [query, setQuery] = useState("");
  const results = query.trim()
    ? allStores.filter((s) => s.name.toLowerCase().includes(query.trim().toLowerCase())).slice(0, 6)
    : [];

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          className="inline-flex size-9 items-center justify-center rounded-full transition-colors hover:bg-foreground/10"
          aria-label="Buscar"
        >
          <Search className="size-4" />
        </button>
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
            placeholder="Busca una tienda, restaurante o marca"
            className="h-12 rounded-none border-0 border-b border-border px-0 text-lg focus-visible:ring-0"
          />
          <ul className="mt-6 space-y-1">
            {results.map((store) => (
              <li key={store.slug}>
                <Link
                  to="/directorio/$slug"
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
          <nav aria-label="Navegación principal" className="hidden items-center gap-5 2xl:flex">
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
          <Link
            to="/visitanos"
            className="hidden items-center gap-2 eyebrow text-foreground/70 transition-colors hover:text-foreground lg:inline-flex"
          >
            <Clock className="size-3.5" aria-hidden />
            Hoy {todayHours()}
          </Link>

          <SearchDialog />


          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="inline-flex size-9 items-center justify-center rounded-full transition-colors hover:bg-foreground/10 2xl:hidden"
                aria-label="Abrir menú"
              >
                <Menu className="size-5" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-full overflow-y-auto border-l-0 bg-ink p-0 text-ink-foreground sm:max-w-md [&>button]:hidden"
            >
              <div className="flex h-16 items-center justify-between px-6">
                <div className="flex flex-col leading-none">
                  <span className="wordmark text-lg">CENTRAL</span>
                  <span className="mt-1 text-[0.6rem] uppercase tracking-[0.28em] text-ink-foreground/50">
                    {site.subtitle}
                  </span>
                </div>
                <button onClick={() => setOpen(false)} aria-label="Cerrar menú" className="p-2">
                  <X className="size-5" />
                </button>
              </div>
              <nav aria-label="Navegación móvil" className="flex flex-col px-6 pt-6">
                {mainNav.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="display-md border-b border-white/10 py-4 text-[1.6rem] text-ink-foreground/90 transition-colors hover:text-ink-foreground"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <div className="px-6 py-8">
                <Button asChild variant="secondary" className="w-full rounded-none">
                  <Link to="/contacto" onClick={() => setOpen(false)}>
                    Contacto
                  </Link>
                </Button>
                <a
                  href={site.brandUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 border border-white/25 px-4 py-3 eyebrow text-ink-foreground/80"
                >
                  Ver todos los CENTRAL
                  <ExternalLink className="size-3.5" aria-hidden />
                </a>
                <p className="mt-8 text-xs leading-relaxed text-ink-foreground/50">
                  {site.address}
                  <br />
                  {site.phone}
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
