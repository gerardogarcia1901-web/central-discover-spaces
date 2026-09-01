import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import foodhallImg from "@/assets/smc-foodhall.jpg";
import { PageHero, Section, SectionHeading } from "@/components/central/primitives";
import { StoreCard } from "@/components/central/cards";
import { CategoryChips, FilterBar } from "@/components/central/Filters";
import { CtaSection } from "@/components/central/CtaSection";
import { cuisines, levels } from "@/data/taxonomy";
import { dining } from "@/data/dining";

const TITLE = "Gastronomía y food hall | CENTRAL San Miguel Centro";
const DESCRIPTION =
  "Doce restaurantes, cafés y conceptos de food hall en CENTRAL San Miguel Centro. Filtra por tipo de cocina y encuentra horarios y locales.";

export const Route = createFileRoute("/gastronomia")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: GastronomiaPage,
});

function GastronomiaPage() {
  const [cocina, setCocina] = useState("todas");
  const [nivel, setNivel] = useState("todos");
  const [query, setQuery] = useState("");

  const results = dining.filter((s) => {
    const matchCocina = cocina === "todas" || s.cuisineSlug === cocina;
    const matchNivel = nivel === "todos" || s.level === nivel;
    const matchQ = !query || s.name.toLowerCase().includes(query.toLowerCase());
    return matchCocina && matchNivel && matchQ;
  });

  return (
    <>
      <PageHero
        eyebrow="Mesa y sabor"
        title="Gastronomía y food hall"
        description="Doce conceptos entre cocina salvadoreña, parrilla, cocina asiática, repostería artesanal y coctelería, distribuidos entre el Nivel 1, el food hall del Nivel 2 y la terraza."
        image={foodhallImg}
        breadcrumbs={[{ label: "Gastronomía" }]}
      />

      <Section className="py-12 md:py-16">
        <FilterBar
          query={query}
          onQueryChange={setQuery}
          searchPlaceholder="Buscar restaurante o café"
          selects={[
            {
              label: "Tipo de cocina",
              value: cocina,
              onChange: setCocina,
              options: [
                { value: "todas", label: "Todas las cocinas" },
                ...cuisines.map((c) => ({ value: c.slug, label: c.name })),
              ],
            },
            {
              label: "Nivel",
              value: nivel,
              onChange: setNivel,
              options: [
                { value: "todos", label: "Todos los niveles" },
                ...levels.map((l) => ({ value: l.slug, label: l.name })),
              ],
            },
          ]}
        />
        <div className="mt-8 hidden lg:block">
          <CategoryChips
            value={cocina}
            onChange={setCocina}
            options={[{ value: "todas", label: "Todas" }, ...cuisines.map((c) => ({ value: c.slug, label: c.name }))]}
          />
        </div>
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
          eyebrow="Cómo funciona"
          title="Comer en San Miguel Centro"
          description="El food hall del Nivel 2 abre al atrio de doble altura, con mesas comunales para 260 personas y horario extendido una hora después del cierre del centro."
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Food hall del Nivel 2",
              text: "Ocho módulos alrededor de mesas comunales, estaciones de agua gratuita y lockers en el pasillo.",
            },
            {
              title: "Terraza al aire libre",
              text: "Parrilla, coctelería y música en vivo los viernes, con vista a la plaza de eventos.",
            },
            {
              title: "Cafés del Nivel 1",
              text: "Café de origen salvadoreño y panadería de masa madre desde las 7:00 a.m., ideal para trabajar.",
            },
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
        title="Abre tu restaurante en esta plaza"
        description="Módulos de food hall con instalaciones preparadas, locales en terraza y espacios para café en el Nivel 1, con acompañamiento comercial."
        primary={{ label: "Solicitar espacio", to: "/arrendamientos" }}
        secondary={{ label: "Contactar", to: "/contacto" }}
        image={foodhallImg}
      />
    </>
  );
}
