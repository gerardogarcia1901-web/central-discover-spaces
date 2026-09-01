import type React from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays, Clock, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { StatusBadge } from "./primitives";
import { locationName } from "@/data/locations";
import { categoryName } from "@/data/catalog";
import type { Article, CentralEvent, CentralLocation, Promotion, Store } from "@/data/types";

export function LocationCard({ location, size = "default" }: { location: CentralLocation; size?: "default" | "large" }) {
  const external = Boolean(location.siteUrl);
  const linkLabel = external
    ? `Ir al sitio de ${location.shortName}`
    : location.status === "operativo"
      ? `Visitar ${location.shortName}`
      : "Descubrir proyecto";

  const wrap = (className: string, children: React.ReactNode, ariaLabel?: string) =>
    external ? (
      <a
        href={location.siteUrl!}
        target="_blank"
        rel="noreferrer"
        className={className}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    ) : (
      <Link to="/ubicaciones/$slug" params={{ slug: location.slug }} className={className} aria-label={ariaLabel}>
        {children}
      </Link>
    );

  return (
    <article className="group relative flex flex-col overflow-hidden bg-card">
      {wrap(
        "hover-zoom relative block aspect-4/3 overflow-hidden",
        <>
          <img
            src={location.image}
            alt={`Vista de ${location.name}`}
            className="image-cover"
            loading="lazy"
            width={1600}
            height={1100}
          />
          <span className="absolute left-5 top-5 bg-background/90 px-3 py-1 eyebrow">{location.department}</span>
        </>,
        `Ver ${location.name}`,
      )}
      <div className={cn("flex flex-1 flex-col gap-4 border border-t-0 border-border p-6", size === "large" && "p-8")}>
        <StatusBadge status={location.status} className="self-start" />
        <h3 className={cn("display-md", size === "large" ? "text-3xl md:text-4xl" : "text-2xl")}>{location.name}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{location.description}</p>
        {wrap(
          "mt-auto inline-flex items-center gap-2 eyebrow underline-offset-8 transition-all hover:gap-3 hover:underline",
          <>
            {linkLabel}
            <ArrowUpRight className="size-4" />
          </>,
        )}
      </div>
    </article>
  );
}

export function StoreCard({ store }: { store: Store }) {
  return (
    <article className="group flex flex-col border border-border bg-card transition-colors hover:border-foreground">
      <Link
        to="/directorio/$slug"
        params={{ slug: store.slug }}
        className="hover-zoom relative block aspect-[5/3] overflow-hidden"
      >
        <img
          src={store.image}
          alt={`Tienda ${store.name}`}
          className="image-cover"
          loading="lazy"
          width={1600}
          height={1100}
        />
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center gap-3">
          <span className="flex size-9 items-center justify-center bg-ink text-xs font-semibold tracking-widest text-ink-foreground">
            {store.logoText}
          </span>
          <div>
            <h3 className="font-display text-base font-semibold uppercase tracking-tight">{store.name}</h3>
            <p className="text-xs text-muted-foreground">{categoryName(store.categorySlug)}</p>
          </div>
        </div>
        <p className="line-clamp-2 text-sm text-muted-foreground">{store.description}</p>
        <dl className="mt-auto grid grid-cols-2 gap-2 border-t border-border pt-4 text-xs text-muted-foreground">
          <div>
            <dt className="sr-only">Centro</dt>
            <dd className="flex items-center gap-1.5">
              <MapPin className="size-3.5" aria-hidden />
              {locationName(store.locationSlug)}
            </dd>
          </div>
          <div>
            <dt className="sr-only">Local</dt>
            <dd className="text-right">{store.local}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}

export function PromotionCard({ promotion }: { promotion: Promotion }) {
  return (
    <article className="group relative isolate flex min-h-[26rem] flex-col justify-end overflow-hidden bg-ink text-ink-foreground">
      <img
        src={promotion.image}
        alt={promotion.title}
        className="absolute inset-0 -z-10 size-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
        width={1600}
        height={1100}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/60 to-transparent" aria-hidden />
      <div className="p-7">
        <p className="eyebrow text-ink-foreground/60">
          {locationName(promotion.locationSlug)} · {categoryName(promotion.categorySlug)}
        </p>
        <h3 className="display-md mt-4 text-2xl md:text-3xl">{promotion.title}</h3>
        <p className="mt-3 text-sm text-ink-foreground/75">{promotion.description}</p>
        <p className="mt-4 text-xs uppercase tracking-widest text-ink-foreground/50">{promotion.validity}</p>
      </div>
    </article>
  );
}

export function EventCard({ event }: { event: CentralEvent }) {
  return (
    <article className="group flex flex-col border border-border bg-card md:flex-row">
      <div className="hover-zoom relative aspect-[16/10] w-full overflow-hidden md:aspect-auto md:w-2/5">
        <img
          src={event.image}
          alt={event.title}
          className="image-cover"
          loading="lazy"
          width={1600}
          height={1100}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6 md:p-8">
        <p className="eyebrow text-muted-foreground">{locationName(event.locationSlug)}</p>
        <h3 className="display-md text-2xl">{event.title}</h3>
        <p className="text-sm leading-relaxed text-muted-foreground">{event.description}</p>
        <ul className="mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-4 text-xs uppercase tracking-widest text-muted-foreground">
          <li className="flex items-center gap-2">
            <CalendarDays className="size-3.5" aria-hidden /> {event.displayDate}
          </li>
          <li className="flex items-center gap-2">
            <Clock className="size-3.5" aria-hidden /> {event.time}
          </li>
          <li className="flex items-center gap-2">
            <MapPin className="size-3.5" aria-hidden /> {event.place}
          </li>
        </ul>
      </div>
    </article>
  );
}

export function NewsCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  return (
    <article className={cn("group flex flex-col", featured && "lg:flex-row lg:items-center lg:gap-12")}>
      <Link
        to="/novedades/$slug"
        params={{ slug: article.slug }}
        className={cn("hover-zoom relative block aspect-[16/10] overflow-hidden", featured && "lg:w-3/5")}
      >
        <img
          src={article.image}
          alt={article.title}
          className="image-cover"
          loading="lazy"
          width={1600}
          height={1100}
        />
      </Link>
      <div className={cn("pt-5", featured && "lg:w-2/5 lg:pt-0")}>
        <p className="eyebrow text-muted-foreground">
          {article.category} · {article.displayDate}
        </p>
        <h3 className={cn("mt-3 font-display font-semibold uppercase tracking-tight", featured ? "display-md" : "text-xl")}>
          <Link to="/novedades/$slug" params={{ slug: article.slug }} className="hover:underline underline-offset-8">
            {article.title}
          </Link>
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{article.summary}</p>
        <Link
          to="/novedades/$slug"
          params={{ slug: article.slug }}
          className="mt-5 inline-flex items-center gap-2 eyebrow underline-offset-8 transition-all hover:gap-3 hover:underline"
        >
          Leer nota <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </article>
  );
}
