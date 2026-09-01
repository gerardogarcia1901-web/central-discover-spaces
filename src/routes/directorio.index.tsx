import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMemo } from "react";
import { PageHero, Section } from "@/components/central/primitives";
import { StoreCard } from "@/components/central/cards";
import { CategoryChips, FilterBar } from "@/components/central/Filters";
import { categories, levels } from "@/data/taxonomy";
import { allStores } from "@/data/stores";
import pasilloImg from "@/assets/smc-pasillo.jpg";

interface DirectorioSearch {
  categoria?: string | undefined;
  nivel?: string | undefined;
  q?: string | undefined;
}

const TITLE = "Directorio de marcas | CENTRAL San Miguel Centro";
const DESCRIPTION =
  "Busca entre las más de 40 marcas de CENTRAL San Miguel Centro. Filtra por categoría y nivel y encuentra el local, el horario y el teléfono de cada tienda.";

export const Route = createFileRoute("/directorio/")({
  validateSearch: (search: Record<string, unknown>): DirectorioSearch => ({
    categoria: typeof search["categoria"] === "string" ? search["categoria"] : undefined,
    nivel: typeof search["nivel"] === "string" ? search["nivel"] : undefined,
    q: typeof search["q"] === "string" ? search["q"] : undefined,
  }),
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: DirectorioPage,
});

function DirectorioPage() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: "/directorio/" });

  const setSearch = (patch: DirectorioSearch) =>
    navigate({ search: (prev: DirectorioSearch) => ({ ...prev, ...patch }), replace: true });

  const categoria = search.categoria ?? "todas";
  const nivel = search.nivel ?? "todos";
  const q = search.q ?? "";

  const results = useMemo(
    () =>
      allStores.filter((s) => {
        const matchCat = categoria === "todas" || s.categorySlug === categoria;
        const matchLevel = nivel === "todos" || s.level === nivel;
        const matchQ = !q || s.name.toLowerCase().includes(q.toLowerCase());
        return matchCat && matchLevel && matchQ;
      }),
    [categoria, nivel, q],
  );

  return (
    <>
      <PageHero
        eyebrow="Marcas y tiendas"
        title="Directorio de marcas"
        description="Encuentra rápidamente una tienda, restaurante o servicio dentro de CENTRAL San Miguel Centro."
        image={pasilloImg}
        breadcrumbs={[{ label: "Directorio" }]}
      />
      <Section className="py-12 md:py-16">
        <FilterBar
          query={q}
          onQueryChange={(value) => setSearch({ q: value || undefined })}
          searchPlaceholder="Buscar por nombre de tienda o marca"
          selects={[
            {
              label: "Categoría",
              value: categoria,
              onChange: (value) => setSearch({ categoria: value === "todas" ? undefined : value }),
              options: [
                { value: "todas", label: "Todas las categorías" },
                ...categories.map((c) => ({ value: c.slug, label: c.name })),
              ],
            },
            {
              label: "Nivel",
              value: nivel,
              onChange: (value) => setSearch({ nivel: value === "todos" ? undefined : value }),
              options: [
                { value: "todos", label: "Todos los niveles" },
                ...levels.map((l) => ({ value: l.slug, label: l.name })),
              ],
            },
          ]}
        />

        <div className="mt-8 hidden lg:block">
          <CategoryChips
            value={categoria}
            onChange={(value) => setSearch({ categoria: value === "todas" ? undefined : value })}
            options={[
              { value: "todas", label: "Todas" },
              ...categories.map((c) => ({ value: c.slug, label: c.name })),
            ]}
          />
        </div>

        <p className="mt-8 text-sm text-muted-foreground" aria-live="polite">
          {results.length} {results.length === 1 ? "resultado" : "resultados"}
        </p>

        {results.length ? (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {results.map((store) => (
              <StoreCard key={store.slug} store={store} />
            ))}
          </div>
        ) : (
          <p className="mt-6 border border-dashed border-border p-12 text-center text-sm text-muted-foreground">
            No encontramos marcas con esos criterios. Prueba con otra categoría o nivel.
          </p>
        )}
      </Section>
    </>
  );
}
