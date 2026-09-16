import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Clock, Facebook, Globe, Instagram, MapPin, MessageCircle, Phone, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs, Section, SectionHeading } from "@/components/central/primitives";
import { BackButton } from "@/components/central/BackButton";
import { StoreCard } from "@/components/central/cards";
import { MediaPlaceholder } from "@/components/central/Placeholders";
import { categoryName } from "@/data/taxonomy";
import { allStores, getStore, storeContact } from "@/data/stores";
import { center } from "@/data/center";

export const Route = createFileRoute("/comercios/$slug")({
  loader: ({ params }) => {
    const store = getStore(params.slug);
    if (!store) throw notFound();
    return { store };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Comercio no encontrado | CENTRAL San Miguel Centro" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { store } = loaderData;
    const title = `${store.name} | CENTRAL San Miguel Centro`;
    const description = `${store.name} en CENTRAL San Miguel Centro, ${store.local}. Horario de atención y contacto del comercio.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => (
    <Section className="min-h-[60svh]">
      <h1 className="display-md">Comercio no encontrado</h1>
      <p className="mt-4 text-muted-foreground">Revisa el directorio para ver los comercios en operación.</p>
      <Button asChild className="mt-8 rounded-none eyebrow">
        <Link to="/comercios">Ver comercios</Link>
      </Button>
    </Section>
  ),
  component: StorePage,
});

function StorePage() {
  const { store } = Route.useLoaderData();
  const contact = storeContact(store);
  const related = allStores.filter((s) => s.slug !== store.slug).slice(0, 3);

  return (
    <>
      <div className="container-central flex flex-wrap items-center justify-between gap-4 pt-8">
        <Breadcrumbs items={[{ label: "Comercios", to: "/comercios" }, { label: store.name }]} />
        <BackButton fallbackTo="/comercios" />
      </div>

      <Section className="pt-10 md:pt-12">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="aspect-4/3 overflow-hidden border border-border">
            {store.image ? (
              <img src={store.image} alt={store.name} className="image-cover" width={1600} height={1100} />
            ) : (
              <MediaPlaceholder />
            )}
          </div>
          <div>
            <div className="flex items-center gap-4">
              <span className="flex size-14 items-center justify-center bg-ink text-sm tracking-widest text-ink-foreground">
                {store.logoText}
              </span>
              <p className="eyebrow text-muted-foreground">{categoryName(store.categorySlug)}</p>
            </div>
            <h1 className="display-lg mt-6">{store.name}</h1>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              {store.description ?? `Comercio de CENTRAL San Miguel Centro, ubicado en ${store.local}.`}
            </p>

            <dl className="mt-10 divide-y divide-border border-y border-border text-sm">
              <div className="flex items-start justify-between gap-6 py-4">
                <dt className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="size-4" aria-hidden /> Local
                </dt>
                <dd className="text-right">{store.local}</dd>
              </div>
              <div className="flex items-start justify-between gap-6 py-4">
                <dt className="flex items-center gap-3 text-muted-foreground">
                  <Clock className="size-4" aria-hidden /> Horario
                </dt>
                <dd className="space-y-1 text-right">
                  {store.hours.map((h) => (
                    <p key={h.label}>
                      <span className="text-muted-foreground">{h.label}: </span>
                      {h.value}
                    </p>
                  ))}
                </dd>
              </div>
              {contact && (
                <div className="flex items-start justify-between gap-6 py-4">
                  <dt className="flex items-center gap-3 text-muted-foreground">
                    {contact.label === "WhatsApp" ? (
                      <MessageCircle className="size-4" aria-hidden />
                    ) : (
                      <Phone className="size-4" aria-hidden />
                    )}
                    {contact.label}
                  </dt>
                  <dd>
                    <a href={contact.href} target="_blank" rel="noreferrer" className="hover:underline">
                      {contact.value}
                    </a>
                  </dd>
                </div>
              )}
              {store.orderNote && (
                <div className="flex items-start justify-between gap-6 py-4">
                  <dt className="flex items-center gap-3 text-muted-foreground">
                    <ShoppingBag className="size-4" aria-hidden /> Pedidos
                  </dt>
                  <dd className="text-right">{store.orderNote}</dd>
                </div>
              )}
              {store.website && (
                <div className="flex items-start justify-between gap-6 py-4">
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
                <div className="flex items-start justify-between gap-6 py-4">
                  <dt className="flex items-center gap-3 text-muted-foreground">
                    <Instagram className="size-4" aria-hidden /> Instagram
                  </dt>
                  <dd>
                    <a href={store.instagram} target="_blank" rel="noreferrer" className="hover:underline">
                      Ver perfil
                    </a>
                  </dd>
                </div>
              )}
              {store.facebook && (
                <div className="flex items-start justify-between gap-6 py-4">
                  <dt className="flex items-center gap-3 text-muted-foreground">
                    <Facebook className="size-4" aria-hidden /> Facebook
                  </dt>
                  <dd>
                    <a href={store.facebook} target="_blank" rel="noreferrer" className="hover:underline">
                      Ver página
                    </a>
                  </dd>
                </div>
              )}
            </dl>

            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">{center.hoursNote}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-none px-8 eyebrow">
                <Link to="/visitanos">Cómo llegar</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-none px-8 eyebrow">
                <Link to="/comercios">Ver todos los comercios</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {related.length > 0 && (
        <Section tone="sand" className="py-14 md:py-20">
          <SectionHeading eyebrow="También en la plaza" title="Otros comercios" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {related.map((s) => (
              <StoreCard key={s.slug} store={s} />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
