import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Clock, Globe, Instagram, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs, Section, SectionHeading } from "@/components/central/primitives";
import { BackButton } from "@/components/central/BackButton";
import { StoreCard } from "@/components/central/cards";
import { categoryName, getStore, stores } from "@/data/catalog";
import { getLocation } from "@/data/locations";

export const Route = createFileRoute("/directorio/$slug")({
  loader: ({ params }) => {
    const store = getStore(params.slug);
    if (!store) throw notFound();
    return { store };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Tienda no encontrada | CENTRAL" }, { name: "robots", content: "noindex" }] };
    }
    const { store } = loaderData;
    return {
      meta: [
        { title: `${store.name} | Directorio CENTRAL` },
        { name: "description", content: store.description },
        { property: "og:title", content: `${store.name} | Directorio CENTRAL` },
        { property: "og:description", content: store.description },
      ],
    };
  },
  notFoundComponent: () => (
    <Section className="min-h-[60svh]">
      <h1 className="display-md">Tienda no encontrada</h1>
      <Button asChild className="mt-8 rounded-none eyebrow">
        <Link to="/directorio">Volver al directorio</Link>
      </Button>
    </Section>
  ),
  component: StorePage,
});

function StorePage() {
  const { store } = Route.useLoaderData();
  const location = getLocation(store.locationSlug);
  const related = stores.filter((s) => s.categorySlug === store.categorySlug && s.slug !== store.slug).slice(0, 4);

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
              <p className="eyebrow text-muted-foreground">{categoryName(store.categorySlug)}</p>
            </div>
            <h1 className="display-lg mt-6">{store.name}</h1>
            <p className="mt-6 leading-relaxed text-muted-foreground">{store.description}</p>

            <dl className="mt-10 divide-y divide-border border-y border-border text-sm">
              <div className="flex items-center justify-between gap-6 py-4">
                <dt className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="size-4" aria-hidden /> Centro comercial
                </dt>
                <dd>
                  {location ? (
                    <Link to="/ubicaciones/$slug" params={{ slug: location.slug }} className="hover:underline">
                      {location.name}
                    </Link>
                  ) : (
                    store.locationSlug
                  )}
                </dd>
              </div>
              <div className="flex items-center justify-between gap-6 py-4">
                <dt className="text-muted-foreground">Local</dt>
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
                  <a href={`tel:${store.phone.replace(/\s/g, "")}`} className="hover:underline">{store.phone}</a>
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
                  <dd>{store.instagram}</dd>
                </div>
              )}
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              {location && (
                <Button asChild className="rounded-none eyebrow">
                  <Link to="/ubicaciones/$slug" params={{ slug: location.slug }}>
                    Ver {location.shortName}
                  </Link>
                </Button>
              )}
              <Button asChild variant="outline" className="rounded-none eyebrow">
                <Link to="/directorio">Volver al directorio</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {related.length > 0 && (
        <Section tone="sand">
          <SectionHeading eyebrow="También te puede interesar" title={`Más en ${categoryName(store.categorySlug)}`} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {related.map((s) => (
              <StoreCard key={s.slug} store={s} />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
