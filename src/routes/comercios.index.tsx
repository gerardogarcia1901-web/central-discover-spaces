import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMemo } from "react";
import { PageHero, Section } from "@/components/central/primitives";
import { StoreCard } from "@/components/central/cards";
import { CategoryChips, FilterBar } from "@/components/central/Filters";
import { categories } from "@/data/taxonomy";
import { allStores } from "@/data/stores";
import { center } from "@/data/center";

interface ComerciosSearch {
  categoria?: string | undefined;
  q?: string | undefined;
}

const TITLE = "Comercios de la plaza | CENTRAL San Miguel Centro";
const DESCRIPTION =
  "Directorio de los comercios de CENTRAL San Miguel Centro: local, horario de atención y contacto de cada establecimiento en el Centro de San Miguel.";

export const Route = createFileRoute("/comercios/")({
  validateSearch: (search: Record<string, unknown>): ComerciosSearch => ({
    categoria: typeof search["categoria"] === "string" ? search["categoria"] : undefined,
    q: typeof search["q"] === "string" ? search["q"] : undefined,
  }),
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
  component: ComerciosPage,
});

function ComerciosPage() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: "/comercios/" });

  const setSearch = (patch: ComerciosSearch) =>
    navigate({ search: (prev: ComerciosSearch) => ({ ...prev, ...patch }), replace: true });

  const categoria = search.categoria ?? "todas";
  const q = search.q ?? "";

  const results = useMemo(
    () =>
      allStores.filter((s) => {
        const matchCat = categoria === "todas" || s.categorySlug === categoria;
        const matchQ = !q || s.name.toLowerCase().includes(q.toLowerCase());
        return matchCat && matchQ;
      }),
    [categoria, q],
  );

  return (
    <>
      <PageHero
        eyebrow="Comercios"
        title="Directorio de la plaza"
        description="Encuentra cada comercio de CENTRAL San Miguel Centro con su local, su horario de atención y su contacto."
        breadcrumbs={[{ label: "Comercios" }]}
      >
        <p className="max-w-2xl text-sm leading-relaxed text-ink-foreground/70">{center.hoursNote}</p>
      </PageHero>

      <Section className="py-12 md:py-16">
        <FilterBar
          query={q}
          onQueryChange={(value) => setSearch({ q: value || undefined })}
          searchPlaceholder="Buscar por nombre del comercio"
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
          {results.length} {results.length === 1 ? "comercio" : "comercios"}
        </p>

        {results.length ? (
          <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {results.map((store) => (
              <StoreCard key={store.slug} store={store} />
            ))}
          </div>
        ) : (
          <p className="mt-6 border border-dashed border-border p-12 text-center text-sm text-muted-foreground">
            No encontramos comercios con esos criterios. Prueba con otra categoría.
          </p>
        )}
      </Section>
    </>
  );
}
