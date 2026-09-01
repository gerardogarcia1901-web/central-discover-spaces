import { Link } from "@tanstack/react-router";
import { Menu, MapPin, Search, Globe, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { mainNav } from "@/data/site";
import { locations, statusLabels } from "@/data/locations";
import { stores } from "@/data/catalog";
import { cn } from "@/lib/utils";

function Wordmark({ className }: { className?: string }) {
  return (
    <Link to="/" className={cn("wordmark text-xl leading-none md:text-2xl", className)} aria-label="CENTRAL, inicio">
      CENTRAL
    </Link>
  );
}

function SearchDialog() {
  const [query, setQuery] = useState("");
  const results = query.trim()
    ? stores.filter((s) => s.name.toLowerCase().includes(query.trim().toLowerCase())).slice(0, 6)
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
          <DialogTitle className="eyebrow text-muted-foreground">Buscar en CENTRAL</DialogTitle>
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
        scrolled ? "bg-background/95 backdrop-blur border-b border-border" : "bg-background border-b border-transparent",
      )}
    >
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

        <div className="flex items-center gap-1 md:gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="hidden items-center gap-2 rounded-full px-3 py-2 eyebrow transition-colors hover:bg-foreground/10 md:inline-flex">
                <MapPin className="size-4" />
                Ubicaciones
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-72 rounded-none">
              {locations.map((loc) => (
                <DropdownMenuItem key={loc.slug} asChild>
                  <Link to="/ubicaciones/$slug" params={{ slug: loc.slug }} className="flex flex-col items-start gap-0.5 py-3">
                    <span className="font-display text-sm font-semibold uppercase tracking-wide">{loc.shortName}</span>
                    <span className="text-xs text-muted-foreground">{statusLabels[loc.status]}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem asChild>
                <Link to="/ubicaciones" className="py-3 text-xs uppercase tracking-widest">
                  Ver todos los centros
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <SearchDialog />

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="hidden size-9 items-center justify-center rounded-full transition-colors hover:bg-foreground/10 md:inline-flex"
                aria-label="Seleccionar idioma"
              >
                <Globe className="size-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="rounded-none">
              <DropdownMenuItem>Español</DropdownMenuItem>
              <DropdownMenuItem disabled>English (próximamente)</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button asChild size="sm" className="hidden rounded-none px-5 eyebrow lg:inline-flex">
            <Link to="/contacto">Contacto</Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="inline-flex size-9 items-center justify-center rounded-full transition-colors hover:bg-foreground/10 2xl:hidden"
                aria-label="Abrir menú"
              >
                <Menu className="size-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full border-l-0 bg-ink p-0 text-ink-foreground sm:max-w-md [&>button]:hidden">
              <div className="flex h-16 items-center justify-between px-6">
                <span className="wordmark text-lg">CENTRAL</span>
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
              <div className="px-6 pt-8">
                <p className="eyebrow text-ink-foreground/50">Nuestros centros</p>
                <div className="mt-4 space-y-3">
                  {locations.map((loc) => (
                    <Link
                      key={loc.slug}
                      to="/ubicaciones/$slug"
                      params={{ slug: loc.slug }}
                      onClick={() => setOpen(false)}
                      className="block border border-white/15 px-4 py-3"
                    >
                      <span className="block text-sm font-semibold uppercase tracking-wide">{loc.shortName}</span>
                      <span className="text-xs text-ink-foreground/60">{statusLabels[loc.status]}</span>
                    </Link>
                  ))}
                </div>
                <Button asChild variant="secondary" className="mt-6 w-full rounded-none">
                  <Link to="/contacto" onClick={() => setOpen(false)}>
                    Contacto
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
