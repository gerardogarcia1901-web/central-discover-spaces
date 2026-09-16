import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Clock, MapPin, Store as StoreIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/central/primitives";
import { StoreCard } from "@/components/central/cards";
import { ContentPlaceholder, MediaPlaceholder } from "@/components/central/Placeholders";
import { CtaSection } from "@/components/central/CtaSection";
import { stores } from "@/data/stores";
import { promotions, promotionKinds } from "@/data/promotions";
import { articles, newsKinds } from "@/data/news";
import { PromotionCard, NewsCard } from "@/components/central/cards";
import { center } from "@/data/center";
import { site } from "@/data/site";

const TITLE = "CENTRAL San Miguel Centro | El corazón comercial de San Miguel";
const DESCRIPTION =
  "Plaza comercial urbana y peatonal en el Centro de San Miguel, frente al nuevo Mercado Central. Conoce sus comercios, horarios de atención y cómo llegar.";

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
      {/* HERO */}
      <section className="relative isolate flex min-h-[78svh] items-end overflow-hidden bg-ink text-ink-foreground">
        <div className="absolute inset-0 -z-10 opacity-60">
          <MediaPlaceholder tone="ink" label="Fotografía de la plaza próximamente" />
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/70 to-ink/40" aria-hidden />
        <div className="container-central w-full pb-16 pt-32 md:pb-24">
          <div className="fade-up max-w-4xl">
            <p className="eyebrow text-ink-foreground/60">Centro de San Miguel · El Salvador</p>
            <h1 className="display-xl mt-6">
              El corazón
              <br />
              comercial de
              <br />
              San Miguel
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-foreground/75 md:text-lg">
              {site.description}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="secondary" className="rounded-none px-8 eyebrow">
                <Link to="/comercios">Ver comercios</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-none border-white/30 bg-transparent px-8 eyebrow text-ink-foreground hover:bg-white/10 hover:text-ink-foreground"
              >
                <Link to="/visitanos">Cómo llegar</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* DATOS DE LA PLAZA */}
      <section aria-label="Datos de la plaza" className="border-b border-border bg-background">
        <div className="container-central grid grid-cols-2 gap-px lg:grid-cols-4">
          {center.stats.map((item) => (
            <div
              key={item.label}
              className="flex flex-col gap-3 border-border py-8 lg:border-l lg:pl-8 lg:first:border-l-0 lg:first:pl-0"
            >
              <p className="display-md text-2xl md:text-3xl">{item.value}</p>
              <p className="eyebrow text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMERCIOS */}
      <Section>
        <SectionHeading
          eyebrow="Comercios"
          title="Los comercios de la plaza"
          description="Cinco comercios en operación sobre seis locales comerciales, a pie de calle en el Centro de San Miguel."
          action={
            <Button asChild variant="outline" className="rounded-none eyebrow">
              <Link to="/comercios">Ver directorio completo</Link>
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
          title="Beneficios de los comercios"
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
              eyebrow="CENTRAL San Miguel Centro"
              title="Espacio reservado para promociones"
              description="Aquí se publicarán las promociones de los comercios y las campañas conjuntas de la plaza."
              items={promotionKinds}
            />
          )}
        </div>
      </Section>

      {/* NOVEDADES */}
      <Section>
        <SectionHeading
          eyebrow="Novedades"
          title="Lo que pasa en la plaza"
          action={
            <Button asChild variant="outline" className="rounded-none eyebrow">
              <Link to="/novedades">Ver novedades</Link>
            </Button>
          }
        />
        <div className="mt-12">
          {articles.length ? (
            <div className="grid gap-10 md:grid-cols-3">
              {articles.slice(0, 3).map((article) => (
                <NewsCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <ContentPlaceholder
              eyebrow="CENTRAL San Miguel Centro"
              title="Espacio reservado para novedades"
              description="Aquí se publicarán aperturas, actividades y noticias de la plaza."
              items={newsKinds}
            />
          )}
        </div>
      </Section>

      {/* VISÍTANOS */}
      <Section tone="sand">
        <SectionHeading eyebrow="Visítanos" title={center.tagline} />
        <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-10">
          <article className="lg:col-span-7">
            <div className="aspect-[16/10] overflow-hidden border border-border">
              <MediaPlaceholder label="Fotografía de la fachada próximamente" />
            </div>
            {center.longDescription.map((p) => (
              <p key={p} className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
            <Link
              to="/visitanos"
              className="mt-6 inline-flex items-center gap-2 eyebrow underline-offset-8 hover:underline"
            >
              Dirección, referencias y contacto <ArrowUpRight className="size-4" />
            </Link>
          </article>
          <div className="flex flex-col gap-8 lg:col-span-5">
            <div className="rule-line pt-4">
              <p className="eyebrow flex items-center gap-2 text-muted-foreground">
                <MapPin className="size-4" aria-hidden /> Dirección
              </p>
              <p className="mt-3 leading-relaxed">{center.address}</p>
              <p className="mt-2 text-sm text-muted-foreground">{center.addressDetail}</p>
            </div>
            <div className="rule-line pt-4">
              <p className="eyebrow flex items-center gap-2 text-muted-foreground">
                <Clock className="size-4" aria-hidden /> Horarios
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{center.hoursNote}</p>
            </div>
            <Link
              to="/comercios"
              className="group inline-flex items-center justify-between border border-border p-6 transition-colors hover:border-foreground"
            >
              <span className="inline-flex items-center gap-3 font-display text-lg font-semibold uppercase tracking-tight">
                <StoreIcon className="size-5" aria-hidden />
                Directorio de comercios
              </span>
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
          </div>
        </div>
      </Section>

      <CtaSection
        eyebrow="Arrendamientos"
        title="Trae tu marca al centro de San Miguel"
        description="Consulta por los locales de CENTRAL San Miguel Centro y el equipo de Grupo Galo te contactará con la información disponible."
        primary={{ label: "Solicitar información", to: "/arrendamientos" }}
        secondary={{ label: "Contacto", to: "/contacto" }}
      />
    </>
  );
}
