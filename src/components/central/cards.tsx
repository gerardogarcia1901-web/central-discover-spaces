import { Link } from "@tanstack/react-router";
import { ArrowUpRight, CalendarDays, Clock, Layers, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { categoryName, cuisineName, levelName } from "@/data/taxonomy";
import type { Article, CentralEvent, Promotion, Store } from "@/data/types";

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
          <span className="flex size-9 shrink-0 items-center justify-center bg-ink text-xs font-semibold tracking-widest text-ink-foreground">
            {store.logoText}
          </span>
          <div className="min-w-0">
            <h3 className="truncate font-display text-base font-semibold uppercase tracking-tight">{store.name}</h3>
            <p className="text-xs text-muted-foreground">
              {store.gastronomy ? cuisineName(store.cuisineSlug) : categoryName(store.categorySlug)}
            </p>
          </div>
        </div>
        <p className="line-clamp-2 text-sm text-muted-foreground">{store.description}</p>
        <dl className="mt-auto grid grid-cols-2 gap-2 border-t border-border pt-4 text-xs text-muted-foreground">
          <div>
            <dt className="sr-only">Nivel</dt>
            <dd className="flex items-center gap-1.5">
              <Layers className="size-3.5" aria-hidden />
              {levelName(store.level)}
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

export function PromotionCard({ promotion, storeName }: { promotion: Promotion; storeName?: string }) {
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
          {(storeName ?? "San Miguel Centro") + " · " + categoryName(promotion.categorySlug)}
        </p>
        <h3 className="display-md mt-4 text-2xl md:text-3xl">{promotion.title}</h3>
        <p className="mt-3 text-sm text-ink-foreground/75">{promotion.description}</p>
        <p className="mt-4 text-xs uppercase tracking-widest text-ink-foreground/50">{promotion.validity}</p>
        <Link
          to="/directorio/$slug"
          params={{ slug: promotion.storeSlug }}
          className="mt-6 inline-flex items-center gap-2 eyebrow underline-offset-8 transition-all hover:gap-3 hover:underline"
        >
          {promotion.cta}
          <ArrowUpRight className="size-4" aria-hidden />
        </Link>
      </div>
    </article>
  );
}

export function EventCard({ event }: { event: CentralEvent }) {
  return (
    <article className="group flex flex-col border border-border bg-card md:flex-row">
      <Link
        to="/eventos/$slug"
        params={{ slug: event.slug }}
        className="hover-zoom relative aspect-[16/10] w-full overflow-hidden md:aspect-auto md:w-2/5"
      >
        <img
          src={event.image}
          alt={event.title}
          className="image-cover"
          loading="lazy"
          width={1600}
          height={1100}
        />
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-6 md:p-8">
        <p className="eyebrow text-muted-foreground">{event.admission}</p>
        <h3 className="display-md text-2xl">
          <Link to="/eventos/$slug" params={{ slug: event.slug }} className="underline-offset-8 hover:underline">
            {event.title}
          </Link>
        </h3>
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
        <h3
          className={cn(
            "mt-3 font-display font-semibold uppercase tracking-tight",
            featured ? "display-md" : "text-xl",
          )}
        >
          <Link to="/novedades/$slug" params={{ slug: article.slug }} className="underline-offset-8 hover:underline">
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
