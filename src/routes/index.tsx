import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/hero-central.jpg";
import lifestyleImg from "@/assets/lifestyle.jpg";
import gastronomiaImg from "@/assets/gastronomia.jpg";
import modaImg from "@/assets/moda.jpg";
import texturaImg from "@/assets/texture-arq.jpg";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading, StatusBadge } from "@/components/central/primitives";
import { EventCard, LocationCard, NewsCard, PromotionCard } from "@/components/central/cards";
import { CtaSection } from "@/components/central/CtaSection";
import { locations } from "@/data/locations";
import { articles, categories, events, promotions, stores } from "@/data/catalog";
import { site } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CENTRAL | Centros comerciales de El Salvador" },
      {
        name: "description",
        content:
          "CENTRAL es la red de centros comerciales de Grupo Galo en El Salvador. Descubre tiendas, gastronomía, eventos y promociones en cada destino.",
      },
      { property: "og:title", content: "CENTRAL | Centros comerciales de El Salvador" },
      {
        property: "og:description",
        content: "Compras, gastronomía, experiencias y entretenimiento en los centros comerciales CENTRAL.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const featuredStores = stores.filter((s) => s.featured);
  const upcoming = locations.filter((l) => l.status !== "operativo");

  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[88svh] items-end overflow-hidden bg-ink text-ink-foreground">
        <img
          src={heroImg}
          alt="Plaza principal de un centro comercial CENTRAL al atardecer"
          className="absolute inset-0 -z-10 size-full object-cover opacity-70"
          width={1920}
          height={1080}
          fetchPriority="high"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/60 to-ink/20" aria-hidden />
        <div className="container-central w-full pb-16 pt-32 md:pb-24">
          <div className="fade-up max-w-5xl">
            <p className="eyebrow text-ink-foreground/60">Grupo Galo · El Salvador</p>
            <h1 className="display-xl mt-6">
              Vive tus
              <br />
              momentos
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-foreground/75 md:text-lg">
              CENTRAL es el punto de encuentro donde compras, gastronomía, experiencias y entretenimiento
              conviven en un mismo lugar. Un destino distinto en cada ciudad del país.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="secondary" className="rounded-none px-8 eyebrow">
                <Link to="/ubicaciones">Encuentra tu CENTRAL</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-none border-white/30 bg-transparent px-8 eyebrow text-ink-foreground hover:bg-white/10 hover:text-ink-foreground"
              >
                <Link to="/directorio">Descubre más</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTOR DE CENTROS */}
      <Section>
        <SectionHeading
          eyebrow="Nuestros centros"
          title="Elige tu CENTRAL"
          description="Cada CENTRAL responde a su ciudad. Selecciona un destino para conocer sus tiendas, restaurantes, horarios y actividades."
          action={
            <Button asChild variant="outline" className="rounded-none eyebrow">
              <Link to="/ubicaciones">Ver todos los centros</Link>
            </Button>
          }
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {locations.map((loc) => (
            <LocationCard key={loc.slug} location={loc} size="large" />
          ))}
        </div>
      </Section>

      {/* CONTENIDO DESTACADO */}
      <Section tone="sand">
        <SectionHeading
          eyebrow="Lo que está pasando"
          title="Destacados CENTRAL"
          description="Promociones, eventos y novedades activas en nuestros centros comerciales."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {promotions.slice(0, 3).map((promo) => (
            <PromotionCard key={promo.slug} promotion={promo} />
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild variant="outline" className="rounded-none eyebrow">
            <Link to="/promociones">Ver promociones</Link>
          </Button>
          <Button asChild variant="ghost" className="rounded-none eyebrow">
            <Link to="/eventos">Ver eventos</Link>
          </Button>
        </div>
      </Section>

      {/* DESCUBRE CENTRAL */}
      <Section>
        <SectionHeading eyebrow="La experiencia" title="Descubre CENTRAL" />
        <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-10">
          <article className="lg:col-span-7">
            <div className="hover-zoom aspect-[16/10] overflow-hidden">
              <img src={lifestyleImg} alt="Visitantes recorriendo un centro comercial CENTRAL" className="image-cover" loading="lazy" width={1600} height={1100} />
            </div>
            <h3 className="display-md mt-8 text-3xl">Compras con carácter local</h3>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              Marcas nacionales e internacionales conviven con propuestas salvadoreñas independientes. Una mezcla
              comercial pensada para la vida diaria y también para los planes de fin de semana.
            </p>
            <Link to="/directorio" className="mt-6 inline-flex items-center gap-2 eyebrow underline-offset-8 hover:underline">
              Explorar el directorio <ArrowUpRight className="size-4" />
            </Link>
          </article>

          <div className="flex flex-col gap-12 lg:col-span-5">
            <article>
              <div className="hover-zoom aspect-[4/3] overflow-hidden">
                <img src={gastronomiaImg} alt="Restaurante dentro de CENTRAL" className="image-cover" loading="lazy" width={1600} height={1100} />
              </div>
              <h3 className="display-md mt-6 text-2xl">Gastronomía para quedarse</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Cafés de especialidad, parrillas, cocina regional y repostería artesanal en terrazas abiertas.
              </p>
              <Link to="/gastronomia" className="mt-4 inline-flex items-center gap-2 eyebrow underline-offset-8 hover:underline">
                Ver gastronomía <ArrowUpRight className="size-4" />
              </Link>
            </article>
            <article className="rule-line pt-8">
              <h3 className="display-md text-2xl">Servicios, comunidad y estilo de vida</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                Banca, salud, telefonía y trámites resueltos en un solo lugar, además de plazas públicas abiertas a la
                ciudad, ferias de emprendimiento y programación cultural durante todo el año.
              </p>
            </article>
          </div>
        </div>
      </Section>

      {/* MARCAS Y CATEGORÍAS */}
      <Section tone="ink">
        <SectionHeading
          eyebrow="Marcas y tiendas"
          title="Encuentra lo que buscas"
          description="Más de 100 marcas distribuidas en categorías pensadas para que llegues rápido a lo que necesitas."
          action={
            <Button asChild variant="secondary" className="rounded-none eyebrow">
              <Link to="/directorio">Ver todas las marcas</Link>
            </Button>
          }
        />
        <div className="mt-12 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to="/directorio"
              search={{ categoria: cat.slug }}
              className="border border-white/20 px-5 py-3 eyebrow text-ink-foreground/80 transition-colors hover:border-white hover:text-ink-foreground"
            >
              {cat.name}
            </Link>
          ))}
        </div>
        <div className="mt-14 grid gap-px overflow-hidden border border-white/15 bg-white/15 sm:grid-cols-2 xl:grid-cols-4">
          {featuredStores.map((store) => (
            <Link
              key={store.slug}
              to="/directorio/$slug"
              params={{ slug: store.slug }}
              className="group bg-ink p-8 transition-colors hover:bg-white/5"
            >
              <span className="flex size-11 items-center justify-center border border-white/30 text-xs tracking-widest">
                {store.logoText}
              </span>
              <h3 className="mt-8 font-display text-lg font-semibold uppercase tracking-tight">{store.name}</h3>
              <p className="mt-2 text-sm text-ink-foreground/60">{store.local}</p>
              <ArrowRight className="mt-8 size-5 transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
          ))}
        </div>
      </Section>

      {/* PRÓXIMAS APERTURAS */}
      {upcoming.length > 0 && (
        <Section>
          <SectionHeading
            eyebrow="En desarrollo"
            title="Próximas aperturas"
            description="Nuevos destinos CENTRAL en construcción y planificación en El Salvador."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {upcoming.map((loc) => (
              <article key={loc.slug} className="grid gap-8 border border-border p-6 md:grid-cols-2 md:p-8">
                <div className="hover-zoom aspect-4/3 overflow-hidden">
                  <img src={loc.image} alt={`Proyecto ${loc.name}`} className="image-cover" loading="lazy" width={1600} height={1100} />
                </div>
                <div className="flex flex-col">
                  <StatusBadge status={loc.status} className="self-start" />
                  <h3 className="display-md mt-5 text-2xl">{loc.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{loc.description}</p>
                  <dl className="mt-6 space-y-2 text-sm">
                    <div className="flex justify-between gap-4 border-t border-border pt-2">
                      <dt className="text-muted-foreground">Ubicación</dt>
                      <dd className="text-right">{loc.city}, {loc.department}</dd>
                    </div>
                    <div className="flex justify-between gap-4 border-t border-border pt-2">
                      <dt className="text-muted-foreground">Apertura</dt>
                      <dd className="text-right">{loc.openingInfo}</dd>
                    </div>
                  </dl>
                  <Button asChild variant="outline" className="mt-auto self-start rounded-none eyebrow">
                    <Link to="/ubicaciones/$slug" params={{ slug: loc.slug }}>
                      Conocer el proyecto
                    </Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </Section>
      )}

      {/* ARRENDAMIENTOS */}
      <CtaSection
        eyebrow="Oportunidades comerciales"
        title="Crece con CENTRAL"
        description="Ponemos a disposición de marcas, retailers y operadores gastronómicos espacios comerciales en ubicaciones estratégicas del país, con acompañamiento comercial durante todo el proceso."
        primary={{ label: "Quiero arrendar", to: "/arrendamientos" }}
        secondary={{ label: "Hablar con el equipo", to: "/contacto" }}
        image={texturaImg}
      />

      {/* EVENTOS */}
      <Section tone="sand">
        <SectionHeading
          eyebrow="Agenda"
          title="Próximos eventos"
          action={
            <Button asChild variant="outline" className="rounded-none eyebrow">
              <Link to="/eventos">Ver agenda completa</Link>
            </Button>
          }
        />
        <div className="mt-12 grid gap-6 xl:grid-cols-2">
          {events.slice(0, 2).map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      </Section>

      {/* NOVEDADES */}
      <Section>
        <SectionHeading
          eyebrow="Novedades"
          title="Historias CENTRAL"
          action={
            <Button asChild variant="outline" className="rounded-none eyebrow">
              <Link to="/novedades">Ver todas las noticias</Link>
            </Button>
          }
        />
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {articles.slice(0, 3).map((article) => (
            <NewsCard key={article.slug} article={article} />
          ))}
        </div>
      </Section>

      {/* CONTACTO / VISITA */}
      <Section tone="ink" className="py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-3">
          <div>
            <p className="eyebrow text-ink-foreground/50">Visítanos</p>
            <h2 className="display-md mt-4 text-3xl">Planifica tu visita</h2>
            <p className="mt-4 text-sm leading-relaxed text-ink-foreground/70">
              Consulta horarios, direcciones y cómo llegar a cada uno de nuestros centros comerciales.
            </p>
            <Button asChild variant="secondary" className="mt-6 rounded-none eyebrow">
              <Link to="/ubicaciones">Ver ubicaciones</Link>
            </Button>
          </div>
          <div>
            <p className="eyebrow text-ink-foreground/50">Contacto general</p>
            <ul className="mt-4 space-y-2 text-sm text-ink-foreground/80">
              <li>
                <a href={`mailto:${site.email}`} className="hover:underline">{site.email}</a>
              </li>
              <li>
                <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:underline">{site.phone}</a>
              </li>
              <li className="text-ink-foreground/55">{site.address}</li>
            </ul>
            <Button asChild variant="link" className="mt-4 h-auto p-0 eyebrow text-ink-foreground">
              <Link to="/contacto">Escríbenos</Link>
            </Button>
          </div>
          <div>
            <p className="eyebrow text-ink-foreground/50">Síguenos</p>
            <ul className="mt-4 space-y-2 text-sm text-ink-foreground/80">
              {site.social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="hover:underline">{s.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
