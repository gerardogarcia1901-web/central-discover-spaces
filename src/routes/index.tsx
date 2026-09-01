import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Clock, Car, Store as StoreIcon, UtensilsCrossed } from "lucide-react";
import fachadaImg from "@/assets/smc-fachada.jpg";
import pasilloImg from "@/assets/smc-pasillo.jpg";
import foodhallImg from "@/assets/smc-foodhall.jpg";
import eventosImg from "@/assets/smc-eventos.jpg";
import lifestyleImg from "@/assets/smc-lifestyle.jpg";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading } from "@/components/central/primitives";
import { EventCard, NewsCard, PromotionCard, StoreCard } from "@/components/central/cards";
import { CtaSection } from "@/components/central/CtaSection";
import { categories } from "@/data/taxonomy";
import { stores, allStores } from "@/data/stores";
import { dining } from "@/data/dining";
import { events } from "@/data/events";
import { promotions } from "@/data/promotions";
import { articles } from "@/data/news";
import { center } from "@/data/center";
import { site } from "@/data/site";

const TITLE = "CENTRAL San Miguel Centro | Tiendas, gastronomía y eventos";
const DESCRIPTION =
  "CENTRAL San Miguel Centro: más de 30 marcas, food hall con 12 restaurantes, cine, servicios y plaza de eventos en el corazón de San Miguel. Horarios, promociones y cómo llegar.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Home,
});

const datoClave = [
  { icon: StoreIcon, label: "Marcas y tiendas", value: "30+" },
  { icon: UtensilsCrossed, label: "Restaurantes y cafés", value: "12" },
  { icon: Clock, label: "Abierto hoy", value: "9:00 – 20:00" },
  { icon: Car, label: "Parqueos gratuitos", value: "850" },
];

function Home() {
  const featuredStores = stores.filter((s) => s.featured).slice(0, 4);
  const featuredDining = dining.slice(0, 3);
  const storeName = (slug: string) => allStores.find((s) => s.slug === slug)?.name;

  return (
    <>
      {/* HERO */}
      <section className="relative isolate flex min-h-[88svh] items-end overflow-hidden bg-ink text-ink-foreground">
        <img
          src={fachadaImg}
          alt="Fachada de CENTRAL San Miguel Centro al atardecer"
          className="absolute inset-0 -z-10 size-full object-cover opacity-70"
          width={1920}
          height={1200}
          fetchPriority="high"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/60 to-ink/20" aria-hidden />
        <div className="container-central w-full pb-16 pt-32 md:pb-24">
          <div className="fade-up max-w-5xl">
            <p className="eyebrow text-ink-foreground/60">San Miguel · El Salvador</p>
            <h1 className="display-xl mt-6">
              El centro
              <br />
              de San Miguel
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-foreground/75 md:text-lg">
              {site.description}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="secondary" className="rounded-none px-8 eyebrow">
                <Link to="/directorio">Ver el directorio</Link>
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

      {/* DATO CLAVE */}
      <section aria-label="Datos de la plaza" className="border-b border-border bg-background">
        <div className="container-central grid grid-cols-2 gap-px lg:grid-cols-4">
          {datoClave.map((item) => (
            <div key={item.label} className="flex flex-col gap-3 border-border py-8 lg:border-l lg:pl-8 lg:first:border-l-0 lg:first:pl-0">
              <item.icon className="size-5 text-muted-foreground" aria-hidden />
              <p className="display-md text-2xl md:text-3xl">{item.value}</p>
              <p className="eyebrow text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MARCAS DESTACADAS */}
      <Section>
        <SectionHeading
          eyebrow="Marcas destacadas"
          title="Lo que encuentras aquí"
          description="Moda, tecnología, belleza, hogar, servicios financieros y entretenimiento distribuidos en dos niveles y una terraza."
          action={
            <Button asChild variant="outline" className="rounded-none eyebrow">
              <Link to="/directorio">Ver todas las marcas</Link>
            </Button>
          }
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {featuredStores.map((store) => (
            <StoreCard key={store.slug} store={store} />
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              to="/directorio"
              search={{ categoria: cat.slug }}
              className="border border-border px-5 py-3 eyebrow text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </Section>

      {/* GASTRONOMÍA */}
      <Section tone="sand">
        <SectionHeading
          eyebrow="Gastronomía"
          title="Food hall y terraza"
          description="Doce conceptos entre cocina salvadoreña, parrilla, cocina asiática, repostería artesanal y coctelería con música en vivo."
          action={
            <Button asChild variant="outline" className="rounded-none eyebrow">
              <Link to="/gastronomia">Ver gastronomía</Link>
            </Button>
          }
        />
        <div className="mt-12 grid gap-14 lg:grid-cols-12 lg:gap-10">
          <article className="lg:col-span-7">
            <div className="hover-zoom aspect-[16/10] overflow-hidden">
              <img
                src={foodhallImg}
                alt="Food hall de CENTRAL San Miguel Centro"
                className="image-cover"
                loading="lazy"
                width={1600}
                height={1100}
              />
            </div>
            <h3 className="display-md mt-8 text-3xl">Mesas comunales para 260 personas</h3>
            <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              El food hall del Nivel 2 abre al atrio de doble altura y cierra una hora después del centro comercial,
              para que puedas cenar al salir del cine.
            </p>
            <Link
              to="/gastronomia"
              className="mt-6 inline-flex items-center gap-2 eyebrow underline-offset-8 hover:underline"
            >
              Explorar restaurantes <ArrowUpRight className="size-4" />
            </Link>
          </article>
          <div className="grid gap-6 lg:col-span-5">
            {featuredDining.map((venue) => (
              <StoreCard key={venue.slug} store={venue} />
            ))}
          </div>
        </div>
      </Section>

      {/* EVENTOS */}
      <Section>
        <SectionHeading
          eyebrow="Próximos eventos"
          title="Agenda del centro"
          description="Música en vivo, ferias de emprendedores, festivales gastronómicos y cine al aire libre en la plaza de eventos."
          action={
            <Button asChild variant="outline" className="rounded-none eyebrow">
              <Link to="/eventos">Ver agenda completa</Link>
            </Button>
          }
        />
        <div className="mt-12 grid gap-6">
          {events.slice(0, 3).map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      </Section>

      {/* PROMOCIONES */}
      <Section tone="ink">
        <SectionHeading
          eyebrow="Promociones vigentes"
          title="Beneficios de esta temporada"
          description="Descuentos y beneficios activos en las marcas de la plaza, con su vigencia y marca asociada."
          action={
            <Button asChild variant="secondary" className="rounded-none eyebrow">
              <Link to="/promociones">Ver promociones</Link>
            </Button>
          }
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {promotions.slice(0, 3).map((promo) => (
            <PromotionCard key={promo.slug} promotion={promo} storeName={storeName(promo.storeSlug)} />
          ))}
        </div>
      </Section>

      {/* LA PLAZA */}
      <Section>
        <SectionHeading eyebrow="La plaza" title={center.tagline} />
        <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-10">
          <article className="lg:col-span-7">
            <div className="hover-zoom aspect-[16/10] overflow-hidden">
              <img
                src={pasilloImg}
                alt="Atrio de doble altura de CENTRAL San Miguel Centro"
                className="image-cover"
                loading="lazy"
                width={1600}
                height={1100}
              />
            </div>
            {center.longDescription.map((p) => (
              <p key={p} className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
                {p}
              </p>
            ))}
            <Link to="/visitanos" className="mt-6 inline-flex items-center gap-2 eyebrow underline-offset-8 hover:underline">
              Horarios, parqueo y servicios <ArrowUpRight className="size-4" />
            </Link>
          </article>
          <div className="flex flex-col gap-8 lg:col-span-5">
            <div className="hover-zoom aspect-[4/3] overflow-hidden">
              <img
                src={eventosImg}
                alt="Plaza de eventos al atardecer"
                className="image-cover"
                loading="lazy"
                width={1600}
                height={1100}
              />
            </div>
            <dl className="grid grid-cols-2 gap-6">
              {center.stats.map((s) => (
                <div key={s.label} className="rule-line pt-4">
                  <dt className="eyebrow text-muted-foreground">{s.label}</dt>
                  <dd className="display-md mt-2 text-2xl">{s.value}</dd>
                </div>
              ))}
            </dl>
            <Link
              to="/directorio"
              className="group inline-flex items-center justify-between border border-border p-6 transition-colors hover:border-foreground"
            >
              <span className="font-display text-lg font-semibold uppercase tracking-tight">Directorio completo</span>
              <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" aria-hidden />
            </Link>
          </div>
        </div>
      </Section>

      {/* NOVEDADES */}
      <Section tone="sand">
        <SectionHeading
          eyebrow="Novedades"
          title="Notas del centro"
          action={
            <Button asChild variant="outline" className="rounded-none eyebrow">
              <Link to="/novedades">Ver todas</Link>
            </Button>
          }
        />
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {articles.slice(0, 3).map((article) => (
            <NewsCard key={article.slug} article={article} />
          ))}
        </div>
      </Section>

      <CtaSection
        eyebrow="Arrendamientos"
        title="Trae tu marca a San Miguel Centro"
        description="Locales en línea, módulos de food hall, islas y espacios en terraza con acompañamiento comercial desde el diseño hasta la apertura."
        primary={{ label: "Solicitar espacio", to: "/arrendamientos" }}
        secondary={{ label: "Hablar con el equipo", to: "/contacto" }}
        image={lifestyleImg}
      />
    </>
  );
}
