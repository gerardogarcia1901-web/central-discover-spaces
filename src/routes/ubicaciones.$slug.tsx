import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Car, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageHero, Section, SectionHeading, StatusBadge } from "@/components/central/primitives";
import { EventCard, NewsCard, PromotionCard, StoreCard } from "@/components/central/cards";
import { CtaSection } from "@/components/central/CtaSection";
import { BackButton } from "@/components/central/BackButton";
import { getLocation, locations, statusLabels } from "@/data/locations";
import { articles, events, promotions, stores } from "@/data/catalog";

export const Route = createFileRoute("/ubicaciones/$slug")({
  loader: ({ params }) => {
    const location = getLocation(params.slug);
    if (!location) throw notFound();
    return { location };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Centro no encontrado | CENTRAL" }, { name: "robots", content: "noindex" }] };
    }
    const { location } = loaderData;
    return {
      meta: [
        { title: `${location.name} | CENTRAL` },
        { name: "description", content: location.description },
        { property: "og:title", content: `${location.name} | CENTRAL` },
        { property: "og:description", content: location.description },
      ],
    };
  },
  notFoundComponent: LocationNotFound,
  component: LocationPage,
});

function LocationNotFound() {
  return (
    <Section className="min-h-[60svh]">
      <h1 className="display-md">Centro no encontrado</h1>
      <p className="mt-4 text-muted-foreground">La ubicación que buscas no existe o cambió de dirección.</p>
      <Button asChild className="mt-8 rounded-none eyebrow">
        <Link to="/ubicaciones">Ver todos los centros</Link>
      </Button>
    </Section>
  );
}

function LocationPage() {
  const { location } = Route.useLoaderData();
  const locStores = stores.filter((s) => s.locationSlug === location.slug);
  const locGastro = locStores.filter((s) => s.gastronomy);
  const locPromos = promotions.filter((p) => p.locationSlug === location.slug);
  const locEvents = events.filter((e) => e.locationSlug === location.slug);

  return (
    <>
      <PageHero
        eyebrow={`${location.city}, ${location.department}`}
        title={location.name}
        description={location.longDescription}
        image={location.image}
        breadcrumbs={[{ label: "Centros", to: "/ubicaciones" }, { label: location.shortName }]}
      >
        <div className="flex flex-wrap items-center gap-4">
          <BackButton fallbackTo="/ubicaciones" className="text-ink-foreground" />
          <StatusBadge status={location.status} className="bg-white/10" />
          <span className="text-sm text-ink-foreground/70">{location.openingInfo}</span>
          {location.siteUrl && (
            <Button asChild variant="secondary" className="rounded-none eyebrow">
              <a href={location.siteUrl} target="_blank" rel="noreferrer">
                Ir al sitio de {location.shortName}
              </a>
            </Button>
          )}
        </div>
      </PageHero>

      {/* Datos clave */}
      <section className="border-b border-border bg-background">
        <div className="container-central grid grid-cols-2 gap-px bg-border md:grid-cols-4">
          {location.stats.map((stat) => (
            <div key={stat.label} className="bg-background px-2 py-8 md:px-6">
              <p className="display-md text-3xl md:text-4xl">{stat.value}</p>
              <p className="mt-2 eyebrow text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Información práctica */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="Información práctica" title="Horarios y cómo llegar" />
            <dl className="mt-10 divide-y divide-border border-y border-border">
              {location.hours.map((h) => (
                <div key={h.label} className="flex items-center justify-between gap-6 py-4">
                  <dt className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Clock className="size-4" aria-hidden /> {h.label}
                  </dt>
                  <dd className="text-right text-sm font-medium">{h.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 space-y-4 text-sm">
              <p className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden /> {location.address}
              </p>
              <p className="flex gap-3">
                <Car className="mt-0.5 size-4 shrink-0" aria-hidden /> {location.directions}
              </p>
              <p className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0" aria-hidden />
                <a href={`tel:${location.phone.replace(/\s/g, "")}`} className="hover:underline">{location.phone}</a>
              </p>
              <p className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0" aria-hidden />
                <a href={`mailto:${location.email}`} className="hover:underline">{location.email}</a>
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-none eyebrow">
                <a href={location.mapsUrl} target="_blank" rel="noreferrer">Cómo llegar</a>
              </Button>
              <Button asChild variant="outline" className="rounded-none eyebrow">
                <Link to="/contacto">Contactar este centro</Link>
              </Button>
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="Servicios y amenidades" title="Todo lo que encuentras aquí" />
            <Accordion type="single" collapsible className="mt-10 border-t border-border">
              {location.amenities.map((a) => (
                <AccordionItem key={a.label} value={a.label} className="border-b border-border">
                  <AccordionTrigger className="py-5 text-left font-display text-base font-semibold uppercase tracking-tight hover:no-underline">
                    {a.label}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm text-muted-foreground">{a.description}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            {location.parking && (
              <div className="mt-8 border border-border bg-sand p-6">
                <p className="eyebrow text-muted-foreground">Estacionamiento</p>
                <p className="mt-3 text-sm leading-relaxed">{location.parking}</p>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Oferta comercial */}
      <Section tone="sand">
        <SectionHeading
          eyebrow="Oferta comercial"
          title={`Qué hay en ${location.shortName}`}
          description="Tiendas, restaurantes, promociones y agenda de este centro comercial."
        />
        <Tabs defaultValue="tiendas" className="mt-10">
          <TabsList className="h-auto w-full flex-wrap justify-start gap-2 rounded-none bg-transparent p-0">
            {["tiendas", "gastronomia", "promociones", "eventos"].map((tab) => (
              <TabsTrigger
                key={tab}
                value={tab}
                className="rounded-none border border-border px-5 py-2.5 eyebrow data-[state=active]:bg-foreground data-[state=active]:text-background"
              >
                {tab === "gastronomia" ? "Gastronomía" : tab}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="tiendas" className="mt-10">
            {locStores.length ? (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {locStores.map((s) => (
                  <StoreCard key={s.slug} store={s} />
                ))}
              </div>
            ) : (
              <EmptyState text="La mezcla comercial de este centro se anunciará próximamente." />
            )}
          </TabsContent>

          <TabsContent value="gastronomia" className="mt-10">
            {locGastro.length ? (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
                {locGastro.map((s) => (
                  <StoreCard key={s.slug} store={s} />
                ))}
              </div>
            ) : (
              <EmptyState text="Los conceptos gastronómicos se anunciarán próximamente." />
            )}
          </TabsContent>

          <TabsContent value="promociones" className="mt-10">
            {locPromos.length ? (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {locPromos.map((p) => (
                  <PromotionCard key={p.slug} promotion={p} />
                ))}
              </div>
            ) : (
              <EmptyState text="No hay promociones activas en este centro." />
            )}
          </TabsContent>

          <TabsContent value="eventos" className="mt-10">
            {locEvents.length ? (
              <div className="grid gap-6 xl:grid-cols-2">
                {locEvents.map((e) => (
                  <EventCard key={e.slug} event={e} />
                ))}
              </div>
            ) : (
              <EmptyState text="Aún no hay eventos programados." />
            )}
          </TabsContent>
        </Tabs>
      </Section>

      {/* Novedades */}
      <Section>
        <SectionHeading eyebrow="Novedades" title="Historias relacionadas" />
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {articles.slice(0, 3).map((a) => (
            <NewsCard key={a.slug} article={a} />
          ))}
        </div>
      </Section>

      <CtaSection
        eyebrow={`Arrendamientos · ${location.shortName}`}
        title="Lleva tu marca a este centro"
        description={`Conoce los espacios comerciales disponibles en ${location.name} y las condiciones para operar con nosotros. Estado del proyecto: ${statusLabels[location.status].toLowerCase()}.`}
        primary={{ label: "Quiero arrendar", to: "/arrendamientos" }}
        secondary={{ label: "Contactar", to: "/contacto" }}
        image={location.image}
      />

      <Section className="py-14">
        <p className="eyebrow text-muted-foreground">Otros centros</p>
        <div className="mt-6 flex flex-wrap gap-4">
          {locations
            .filter((l) => l.slug !== location.slug)
            .map((l) => (
              <Link
                key={l.slug}
                to="/ubicaciones/$slug"
                params={{ slug: l.slug }}
                className="border border-border px-5 py-3 eyebrow transition-colors hover:border-foreground"
              >
                {l.shortName}
              </Link>
            ))}
        </div>
      </Section>
    </>
  );
}

function EmptyState({ text }: { text: string }) {
  return <p className="border border-dashed border-border p-10 text-center text-sm text-muted-foreground">{text}</p>;
}
