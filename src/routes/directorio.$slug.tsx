import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Clock, Globe, Instagram, Layers, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs, Section, SectionHeading } from "@/components/central/primitives";
import { BackButton } from "@/components/central/BackButton";
import { StoreCard } from "@/components/central/cards";
import { categoryName, cuisineName, levelName } from "@/data/taxonomy";
import { allStores, getStore } from "@/data/stores";
import { promotions } from "@/data/promotions";

export const Route = createFileRoute("/directorio/$slug")({
  loader: ({ params }) => {
    const store = getStore(params.slug);
    if (!store) throw notFound();
    return { store };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Tienda no encontrada | CENTRAL San Miguel Centro" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { store } = loaderData;
    const title = `${store.name} | CENTRAL San Miguel Centro`;
    return {
      meta: [
        { title },
        { name: "description", content: store.description },
        { property: "og:title", content: title },
        { property: "og:description", content: store.description },
      ],
    };
  },
  notFoundComponent: () => (
    <Section className="min-h-[60svh]">
      <h1 className="display-md">Tienda no encontrada</h1>
      <p className="mt-4 text-muted-foreground">Puede que el local haya cambiado de nombre o ya no esté operando.</p>
      <Button asChild className="mt-8 rounded-none eyebrow">
        <Link to="/directorio">Volver al directorio</Link>
      </Button>
    </Section>
  ),
  component: StorePage,
});

function StorePage() {
  const { store } = Route.useLoaderData();
  const related = allStores
    .filter((s) => s.categorySlug === store.categorySlug && s.slug !== store.slug)
    .slice(0, 4);
  const storePromos = promotions.filter((p) => p.storeSlug === store.slug);

  return (
    <>
      <div className="container-central flex flex-wrap items-center justify-between gap-4 pt-8">
        <Breadcrumbs items={[{ label: "Directorio", to: "/directorio" }, { label: store.name }]} />
        <BackButton fallbackTo="/directorio" />
      </div>

      <Section className="pt-10 md:pt-12">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="hover-zoom aspect-4/3 overflow-hidden bg-muted">
            <img
              src={store.image}
              alt={`Interior de ${store.name}`}
              className="image-cover"
              width={1600}
              height={1100}
            />
          </div>
          <div>
            <div className="flex items-center gap-4">
              <span className="flex size-14 items-center justify-center bg-ink text-sm tracking-widest text-ink-foreground">
                {store.logoText}
              </span>
              <p className="eyebrow text-muted-foreground">
                {store.gastronomy
                  ? `${categoryName(store.categorySlug)} · ${cuisineName(store.cuisineSlug)}`
                  : categoryName(store.categorySlug)}
              </p>
            </div>
            <h1 className="display-lg mt-6">{store.name}</h1>
            <p className="mt-6 leading-relaxed text-muted-foreground">{store.description}</p>

            <dl className="mt-10 divide-y divide-border border-y border-border text-sm">
              <div className="flex items-center justify-between gap-6 py-4">
                <dt className="flex items-center gap-3 text-muted-foreground">
                  <Layers className="size-4" aria-hidden /> Nivel
                </dt>
                <dd>{levelName(store.level)}</dd>
              </div>
              <div className="flex items-center justify-between gap-6 py-4">
                <dt className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="size-4" aria-hidden /> Local
                </dt>
                <dd>{store.local}</dd>
              </div>
              <div className="flex items-center justify-between gap-6 py-4">
                <dt className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="size-4" aria-hidden /> Horario
                </dt>
                <dd>{store.hours}</dd>
              </div>
              <div className="flex items-center justify-between gap-6 py-4">
                <dt className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="size-4" aria-hidden /> Teléfono
                </dt>
                <dd>
                  <a href={`tel:${store.phone.replace(/\s/g, "")}`} className="hover:underline">
                    {store.phone}
                  </a>
                </dd>
              </div>
              {store.website && (
                <div className="flex items-center justify-between gap-6 py-4">
                  <dt className="flex items-center gap-3 text-muted-foreground">
                    <Globe className="size-4" aria-hidden /> Sitio web
                  </dt>
                  <dd>
                    <a href={store.website} target="_blank" rel="noreferrer" className="hover:underline">
                      Visitar sitio
                    </a>
                  </dd>
                </div>
              )}
              {store.instagram && (
                <div className="flex items-center justify-between gap-6 py-4">
                  <dt className="flex items-center gap-3 text-muted-foreground">
                    <Instagram className="size-4" aria-hidden /> Instagram
                  </dt>
                  <dd>
                    <a
                      href={`https://instagram.com/${store.instagram.replace("@", "")}`}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline"
                    >
                      {store.instagram}
                    </a>
                  </dd>
                </div>
              )}
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-none eyebrow">
                <Link to="/visitanos">Cómo llegar</Link>
              </Button>
              {store.gastronomy && (
                <Button asChild variant="outline" className="rounded-none eyebrow">
                  <Link to="/gastronomia">Ver gastronomía</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </Section>

      {storePromos.length > 0 && (
        <Section tone="sand" className="py-14 md:py-20">
          <SectionHeading eyebrow="Promociones" title={`Beneficios en ${store.name}`} />
          <ul className="mt-10 divide-y divide-border border-y border-border">
            {storePromos.map((p) => (
              <li key={p.slug} className="flex flex-col gap-2 py-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="font-display text-lg font-semibold uppercase tracking-tight">{p.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
                </div>
                <p className="eyebrow shrink-0 text-muted-foreground">{p.validity}</p>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {related.length > 0 && (
        <Section className="py-14 md:py-20">
          <SectionHeading eyebrow="También te puede interesar" title={`Más en ${categoryName(store.categorySlug)}`} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {related.map((s) => (
              <StoreCard key={s.slug} store={s} />
            ))}
          </div>
          <div className="mt-10">
            <BackButton fallbackTo="/directorio" label="Regresar al directorio" />
          </div>
        </Section>
      )}
    </>
  );
}
