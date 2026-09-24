import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock, MapPin, MessageCircle, Phone, ShoppingBag, Store as StoreIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { categoryName } from "@/data/taxonomy";
import { storeContact } from "@/data/stores";
import { MediaPlaceholder } from "@/components/central/Placeholders";
import type { Article, Promotion, Store } from "@/data/types";

/** Logotipo oficial; mientras no exista, un marcador neutro reemplazable. */
export function StoreLogo({ store, size = "sm" }: { store: Store; size?: "sm" | "lg" }) {
  const box = size === "lg" ? "size-20" : "size-12";
  if (store.logo) {
    return (
      <span className={cn("flex shrink-0 items-center justify-center border border-border bg-card p-1.5", box)}>
        <img src={store.logo} alt={`Logotipo de ${store.name}`} className="max-h-full max-w-full object-contain" />
      </span>
    );
  }
  return (
    <span
      role="img"
      aria-label={`Logotipo de ${store.name} próximamente`}
      className={cn("flex shrink-0 items-center justify-center border border-dashed border-border bg-sand text-muted-foreground", box)}
    >
      <StoreIcon className={size === "lg" ? "size-7" : "size-5"} aria-hidden />
    </span>
  );
}

export function StoreCard({ store }: { store: Store }) {
  const contact = storeContact(store);

  return (
    <article className="group flex flex-col border border-border bg-card transition-colors hover:border-foreground">
      <Link
        to="/comercios/$slug"
        params={{ slug: store.slug }}
        className="hover-zoom relative block aspect-[5/3] overflow-hidden"
        aria-label={`Ver información de ${store.name}`}
      >
        {store.image ? (
          <img src={store.image} alt={store.name} className="image-cover" loading="lazy" width={1600} height={1100} />
        ) : (
          <MediaPlaceholder />
        )}
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center gap-3">
          <StoreLogo store={store} />
          <div className="min-w-0">
            <h3 className="truncate font-display text-base font-semibold uppercase tracking-tight">{store.name}</h3>
            <p className="text-xs text-muted-foreground">{categoryName(store.categorySlug)}</p>
          </div>
        </div>

        <ul className="space-y-2 text-xs text-muted-foreground">
          <li className="flex items-start gap-2">
            <MapPin className="mt-0.5 size-3.5 shrink-0" aria-hidden />
            {store.local}
          </li>
          {store.hours.map((h) => (
            <li key={h.label} className="flex items-start gap-2">
              <Clock className="mt-0.5 size-3.5 shrink-0" aria-hidden />
              <span>
                {h.label}: {h.value}
              </span>
            </li>
          ))}
          {contact && (
            <li className="flex items-start gap-2">
              {contact.label === "WhatsApp" ? (
                <MessageCircle className="mt-0.5 size-3.5 shrink-0" aria-hidden />
              ) : (
                <Phone className="mt-0.5 size-3.5 shrink-0" aria-hidden />
              )}
              <a href={contact.href} target="_blank" rel="noreferrer" className="hover:text-foreground hover:underline">
                {contact.value}
              </a>
            </li>
          )}
          {store.orderNote && (
            <li className="flex items-start gap-2">
              <ShoppingBag className="mt-0.5 size-3.5 shrink-0" aria-hidden />
              {store.orderNote}
            </li>
          )}
        </ul>

        <Link
          to="/comercios/$slug"
          params={{ slug: store.slug }}
          className="mt-auto inline-flex items-center gap-2 border-t border-border pt-4 eyebrow underline-offset-8 hover:underline"
        >
          Ver más <ArrowUpRight className="size-3.5" aria-hidden />
        </Link>
      </div>
    </article>
  );
}

export function PromotionCard({ promotion, storeName }: { promotion: Promotion; storeName?: string | undefined }) {
  return (
    <article className="group relative isolate flex min-h-[24rem] flex-col justify-end overflow-hidden bg-ink text-ink-foreground">
      {promotion.image ? (
        <img
          src={promotion.image}
          alt={promotion.title}
          className="absolute inset-0 -z-10 size-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
          width={1600}
          height={1100}
        />
      ) : (
        <div className="absolute inset-0 -z-10">
          <MediaPlaceholder tone="ink" label="Imagen próximamente" />
        </div>
      )}
      <div className="absolute inset-0 -z-10 bg-ink/60" aria-hidden />
      <div className="p-7">
        <p className="eyebrow text-ink-foreground/60">CENTRAL San Miguel Centro · {promotion.kind}</p>
        <h3 className="display-md mt-4 text-2xl md:text-3xl">{promotion.title}</h3>
        <p className="mt-3 text-sm text-ink-foreground/75">{promotion.description}</p>
        <p className="mt-4 text-xs uppercase tracking-widest text-ink-foreground/50">{promotion.validity}</p>
        {promotion.storeSlug && (
          <Link
            to="/comercios/$slug"
            params={{ slug: promotion.storeSlug }}
            className="mt-6 inline-flex items-center gap-2 eyebrow underline-offset-8 transition-all hover:gap-3 hover:underline"
          >
            {storeName ?? "Ver comercio"}
            <ArrowUpRight className="size-4" aria-hidden />
          </Link>
        )}
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
        {article.image ? (
          <img
            src={article.image}
            alt={article.title}
            className="image-cover"
            loading="lazy"
            width={1600}
            height={1100}
          />
        ) : (
          <MediaPlaceholder label="Imagen próximamente" />
        )}
      </Link>
      <div className={cn("pt-5", featured && "lg:w-2/5 lg:pt-0")}>
        <p className="eyebrow text-muted-foreground">
          CENTRAL San Miguel Centro · {article.category} · {article.displayDate}
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
