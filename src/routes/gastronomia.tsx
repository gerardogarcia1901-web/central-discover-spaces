import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import gastronomiaImg from "@/assets/gastronomia.jpg";
import { PageHero, Section, SectionHeading } from "@/components/central/primitives";
import { StoreCard } from "@/components/central/cards";
import { FilterBar } from "@/components/central/Filters";
import { CtaSection } from "@/components/central/CtaSection";
import { stores } from "@/data/catalog";
import { locations } from "@/data/locations";

const conceptos = [
  { value: "todos", label: "Todos los conceptos" },
  { value: "cafe", label: "Cafés y panadería" },
  { value: "restaurante", label: "Restaurantes" },
  { value: "postres", label: "Postres y snacks" },
];

export const Route = createFileRoute("/gastronomia")({
  head: () => ({
    meta: [
      { title: "Gastronomía | CENTRAL" },
      {
        name: "description",
        content:
          "Restaurantes, cafés y conceptos gastronómicos en los centros comerciales CENTRAL de El Salvador.",
      },
      { property: "og:title", content: "Gastronomía | CENTRAL" },
      { property: "og:description", content: "Descubre la oferta gastronómica de los centros CENTRAL." },
    ],
  }),
  component: GastronomiaPage,
});

function GastronomiaPage() {
  const [ubicacion, setUbicacion] = useState("todas");
  const [concepto, setConcepto] = useState("todos");
  const [query, setQuery] = useState("");

  const base = stores.filter((s) => s.gastronomy);
  const results = base.filter((s) => {
    const matchLoc = ubicacion === "todas" || s.locationSlug === ubicacion;
    const matchQ = !query || s.name.toLowerCase().includes(query.toLowerCase());
    const matchConcepto =
      concepto === "todos" ||
      (concepto === "cafe" && /caf|tostada|pan/i.test(s.name + s.description)) ||
      (concepto === "restaurante" && /brasa|mercado|cocina|parrilla/i.test(s.name + s.description)) ||
      (concepto === "postres" && /dulce|poster|helado|reposter/i.test(s.name + s.description));
    return matchLoc && matchQ && matchConcepto;
  });

  return (
    <>
      <PageHero
        eyebrow="Mesa y sabor"
        title="Gastronomía CENTRAL"
        description="Cafés de especialidad, parrillas, cocina regional y postres artesanales. Espacios abiertos pensados para compartir, trabajar o quedarse un rato más."
        image={gastronomiaImg}
        breadcrumbs={[{ label: "Gastronomía" }]}
      />

      <Section className="py-12 md:py-16">
        <FilterBar
          query={query}
          onQueryChange={setQuery}
          searchPlaceholder="Buscar restaurante o café"
          selects={[
            {
              label: "Concepto",
              value: concepto,
              onChange: setConcepto,
              options: conceptos,
            },
            {
              label: "Centro",
              value: ubicacion,
              onChange: setUbicacion,
              options: [
                { value: "todas", label: "Todos los centros" },
                ...locations.map((l) => ({ value: l.slug, label: l.shortName })),
              ],
            },
          ]}
        />
        <p className="mt-8 text-sm text-muted-foreground" aria-live="polite">
          {results.length} {results.length === 1 ? "propuesta" : "propuestas"}
        </p>
        {results.length ? (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {results.map((store) => (
              <StoreCard key={store.slug} store={store} />
            ))}
          </div>
        ) : (
          <p className="mt-6 border border-dashed border-border p-12 text-center text-sm text-muted-foreground">
            No hay propuestas gastronómicas con esos filtros.
          </p>
        )}
      </Section>

      <Section tone="sand">
        <SectionHeading
          eyebrow="Experiencias"
          title="Comer en CENTRAL"
          description="Terrazas abiertas, horarios extendidos los fines de semana y programación gastronómica durante todo el año."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            { title: "Terrazas al aire libre", text: "Áreas con sombra natural y vista a la ciudad para desayunos largos y cenas tranquilas." },
            { title: "Cocina de la región", text: "Ingredientes y recetas del oriente salvadoreño en manos de operadores locales." },
            { title: "Festivales y menús", text: "Ferias gastronómicas, menús de temporada y activaciones con cocineros invitados." },
          ].map((item) => (
            <article key={item.title} className="border-t border-foreground/20 pt-6">
              <h3 className="display-md text-xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <CtaSection
        eyebrow="Operadores gastronómicos"
        title="Abre tu restaurante en CENTRAL"
        description="Contamos con espacios diseñados para operación gastronómica: instalaciones preparadas, alto tráfico y acompañamiento comercial."
        primary={{ label: "Quiero arrendar", to: "/arrendamientos" }}
        secondary={{ label: "Contactar", to: "/contacto" }}
        image={gastronomiaImg}
      />
    </>
  );
}
