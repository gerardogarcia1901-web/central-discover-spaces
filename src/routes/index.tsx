import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/central/primitives";
import { StoreCard, PromotionCard, NewsCard } from "@/components/central/cards";
import { ContentPlaceholder } from "@/components/central/Placeholders";
import { CtaSection } from "@/components/central/CtaSection";
import { stores } from "@/data/stores";
import { promotions } from "@/data/promotions";
import { articles } from "@/data/news";
import { center } from "@/data/center";

const TITLE = "Central San Miguel Centro | CENTRAL";
const DESCRIPTION = "Encuentra comercios, gastronomía, servicios, promociones, eventos y cómo llegar a Central San Miguel Centro.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO — fallback visual de marca mientras no exista fotografía aprobada */}
      <section className="relative isolate overflow-hidden border-b border-border bg-sand">
        <span
          aria-hidden
          className="wordmark pointer-events-none absolute -bottom-6 right-0 -z-10 select-none text-[22vw] leading-none text-foreground/[0.04]"
        >
          CENTRAL
        </span>
        <div className="container-central flex min-h-[72svh] items-center py-20 md:py-28">
          <div className="fade-up max-w-4xl">
            <span className="block h-1 w-16 bg-highlight" aria-hidden />
            <h1 className="display-xl mt-8">
              Central
              <br />
              San Miguel
              <br />
              Centro
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Encuentra comercios, gastronomía y servicios en el centro de San Miguel.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-none px-8 eyebrow">
                <Link to="/comercios">Ver directorio</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-none px-8 eyebrow">
                <Link to="/visitanos">Cómo llegar</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* INFORMACIÓN DEL CENTRO */}
      <section aria-label="Información de la plaza" className="border-b border-border bg-background">
        <div className="container-central py-14 md:py-20">
          <p className="eyebrow text-muted-foreground">Encuentra lo que buscas.</p>
          <h2 className="display-md mt-4">Tiendas, gastronomía, servicios y más.</h2>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {center.stats.map((item) => (
              <li key={item.label} className="rule-line pt-4">
                <p className="eyebrow text-muted-foreground">{item.label}</p>
                <p className="mt-3 leading-relaxed">{item.value}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* DIRECTORIO */}
      <Section>
        <SectionHeading
          eyebrow="Directorio"
          title="Encuentra lo que buscas."
          action={
            <Button asChild variant="outline" className="rounded-none eyebrow">
              <Link to="/comercios">Ver directorio</Link>
            </Button>
          }
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {stores.map((store) => (
            <StoreCard key={store.slug} store={store} />
          ))}
        </div>
        <p className="mt-10 flex items-start gap-3 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
          <Clock className="mt-0.5 size-4 shrink-0" aria-hidden />
          {center.hoursNote}
        </p>
      </Section>

      {/* PROMOCIONES */}
      <Section tone="sand">
        <SectionHeading
          eyebrow="Promociones"
          title="Promociones"
          description="Conoce las promociones disponibles en Central San Miguel Centro."
          action={
            <Button asChild variant="outline" className="rounded-none eyebrow">
              <Link to="/promociones">Ver promociones</Link>
            </Button>
          }
        />
        <div className="mt-12">
          {promotions.length ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {promotions.slice(0, 3).map((promo) => (
                <PromotionCard key={promo.slug} promotion={promo} />
              ))}
            </div>
          ) : (
            <ContentPlaceholder
              title="Por ahora no hay promociones disponibles."
              description="Vuelve pronto para conocer nuevas promociones en Central San Miguel Centro."
            />
          )}
        </div>
      </Section>

      {/* NOVEDADES (editorial) */}
      {articles.length > 0 && (
        <Section>
          <SectionHeading eyebrow="Novedades" title="Novedades" />
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {articles.slice(0, 3).map((article) => (
              <NewsCard key={article.slug} article={article} />
            ))}
          </div>
        </Section>
      )}

      {/* CÓMO LLEGAR */}
      <Section>
        <SectionHeading eyebrow="Cómo llegar" title="En el centro de San Miguel" />
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div className="rule-line pt-4">
            <p className="eyebrow flex items-center gap-2 text-muted-foreground">
              <MapPin className="size-4" aria-hidden /> Dirección
            </p>
            <p className="mt-3 text-lg leading-relaxed">{center.address}</p>
            <p className="mt-2 text-muted-foreground">{center.addressDetail}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:items-end lg:justify-end">
            <Button asChild size="lg" className="rounded-none px-8 eyebrow">
              <a href={center.mapsUrl} target="_blank" rel="noreferrer">Google Maps</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-none px-8 eyebrow">
              <a href={center.wazeUrl} target="_blank" rel="noreferrer">Waze</a>
            </Button>
            <Link to="/visitanos" className="inline-flex items-center gap-2 py-3 eyebrow underline-offset-8 hover:underline sm:px-4">
              Ver mapa <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </Section>

      <CtaSection
        eyebrow="Arrendamiento"
        title="Su marca puede ser parte de CENTRAL."
        description="Conoce las oportunidades de arrendamiento en Central San Miguel Centro."
        primary={{ label: "Solicitar información", to: "/arrendamientos" }}
        secondary={{ label: "Contacto", to: "/contacto" }}
      />
    </>
  );
}
