import { Link } from "@tanstack/react-router";
import { Menu, Search, ExternalLink, X, Globe2, ChevronDown, Check, Clock } from "lucide-react";
import { useState } from "react";
import { useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { site, SANTA_ROSA_URL } from "@/data/site";
import { center } from "@/data/center";
import { allStores } from "@/data/stores";
import { cn } from "@/lib/utils";
import logoAsset from "@/assets/central-san-miguel-centro.png.asset.json";
import logoInverseAsset from "@/assets/central-san-miguel-centro-inverse.png.asset.json";

const menuGroups = [
  {
    label: "Explorar",
    links: [
      { label: "Inicio", to: "/" },
      { label: "Directorio", to: "/comercios" },
    ],
  },
  {
    label: "Descubre",
    links: [
      { label: "Gastronomía", to: "/gastronomia" },
      { label: "Promociones", to: "/promociones" },
      { label: "Eventos", to: "/eventos" },
    ],
  },
  {
    label: "Tu visita",
    links: [
      { label: "Servicios", to: "/servicios" },
      { label: "Cómo llegar", to: "/visitanos" },
    ],
  },
  {
    label: "Conecta",
    links: [{ label: "Arrendamiento", to: "/arrendamientos" }],
  },
] as const;

export function LocationSwitcher({ inverse = false, compact = false }: { inverse?: boolean; compact?: boolean }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            "h-auto gap-2 rounded-none px-0 py-2 eyebrow",
            inverse
              ? "text-ink-foreground hover:bg-transparent hover:text-ink-foreground/70"
              : "text-foreground/70 hover:bg-transparent hover:text-foreground",
          )}
          aria-label="Cambiar ubicación"
        >
          <Globe2 className="size-3.5" aria-hidden />
          {!compact && <span>Cambiar ubicación</span>}
          <ChevronDown className="size-3.5" aria-hidden />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={12}
        className="w-72 rounded-none border-border p-0 shadow-elevated"
      >
        <DropdownMenuLabel className="px-5 py-4 eyebrow text-muted-foreground">
          Elige tu CENTRAL
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="m-0" />
        <DropdownMenuItem asChild className="rounded-none p-0 focus:bg-muted">
          <a href={site.brandUrl} target="_blank" rel="noreferrer" className="flex w-full items-center px-5 py-4">
            <span className="font-display text-base font-semibold uppercase">Volver a CENTRAL</span>
            <ExternalLink className="ml-auto size-4 text-muted-foreground" aria-hidden />
          </a>
        </DropdownMenuItem>

        <DropdownMenuItem asChild className="rounded-none p-0 focus:bg-muted">
          <a href={SANTA_ROSA_URL} target="_blank" rel="noreferrer" className="flex w-full items-center px-5 py-4">
            <span className="font-display text-base font-semibold uppercase">Central Santa Rosa de Lima</span>
            <ExternalLink className="ml-auto size-4 text-muted-foreground" aria-hidden />
          </a>
        </DropdownMenuItem>

        <DropdownMenuSeparator className="m-0" />
        <div className="flex items-center gap-3 px-5 py-3 text-xs text-muted-foreground">
          <Check className="size-3.5" aria-hidden />
          Estás en San Miguel Centro
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function Wordmark({ onNavigate, inverse = false }: { onNavigate?: () => void; inverse?: boolean }) {
  return (
    <Link to="/" onClick={onNavigate} className="block" aria-label={`${site.fullName}, inicio`}>
      <img
        src={inverse ? logoInverseAsset.url : logoAsset.url}
        alt="CENTRAL San Miguel Centro"
        width={1512}
        height={447}
        className="h-10 w-auto max-w-[14rem] object-contain object-left md:h-12 md:max-w-[17rem]"
      />
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
      <div className="container-central flex h-16 items-center justify-between gap-6 md:h-20">
        <div className="flex items-center gap-3 md:gap-6">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full" aria-label="Abrir menú">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="top"
              className="h-dvh w-full overflow-y-auto border-0 bg-ink p-0 text-ink-foreground shadow-none [&>button]:hidden"
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
                  <Wordmark onNavigate={() => setOpen(false)} inverse />
                  <Link
                    to="/visitanos"
                    onClick={() => setOpen(false)}
                    className="ml-auto inline-flex items-center gap-2 text-sm font-medium text-ink-foreground transition-opacity hover:opacity-70"
                  >
                    <Clock className="size-5" aria-hidden />
                    <span className="hidden sm:inline">Horarios</span>
                  </Link>
                </div>

                <nav
                  aria-label="Menú principal"
                  className="container-central grid content-start grid-cols-1 gap-x-10 gap-y-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:py-24"
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
                              className="text-xl font-medium text-ink-foreground/90 transition-colors hover:text-primary md:text-2xl"
                            >
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </nav>

                <div className="container-central flex flex-col gap-4 border-t border-ink-foreground/15 py-8 md:flex-row md:items-center md:justify-between md:gap-8">
                  <SearchDialog expanded />
                  <p className="max-w-md text-xs leading-relaxed text-ink-foreground/50">{center.hoursNote}</p>
                  <div className="w-fit md:shrink-0">
                    <LocationSwitcher inverse />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          <Wordmark />
        </div>

        <div className="flex items-center gap-1 md:gap-3">
          <div className="hidden sm:block">
            <LocationSwitcher />
          </div>

          <SearchDialog />
          <div className="sm:hidden">
            <LocationSwitcher compact />
          </div>
        </div>
      </div>
    </header>
  );
}
