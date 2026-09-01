import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMemo } from "react";
import { PageHero, Section } from "@/components/central/primitives";
import { StoreCard } from "@/components/central/cards";
import { CategoryChips, FilterBar } from "@/components/central/Filters";
import { categories, stores } from "@/data/catalog";
import { locations } from "@/data/locations";
import modaImg from "@/assets/moda.jpg";

interface DirectorioSearch {
  categoria?: string | undefined;
  ubicacion?: string | undefined;
  q?: string | undefined;
}

export const Route = createFileRoute("/directorio/")({
  validateSearch: (search: Record<string, unknown>): DirectorioSearch => ({
    categoria: typeof search["categoria"] === "string" ? search["categoria"] : undefined,
    ubicacion: typeof search["ubicacion"] === "string" ? search["ubicacion"] : undefined,
    q: typeof search["q"] === "string" ? search["q"] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Directorio comercial | CENTRAL" },
      {
        name: "description",
        content:
          "Busca tiendas, restaurantes y servicios en los centros comerciales CENTRAL. Filtra por categoría y ubicación.",
      },
      { property: "og:title", content: "Directorio comercial | CENTRAL" },
      { property: "og:description", content: "Todas las marcas y tiendas de los centros comerciales CENTRAL." },
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
  const ubicacion = search.ubicacion ?? "todas";
  const q = search.q ?? "";

  const results = useMemo(
    () =>
      stores.filter((s) => {
        const matchCat = categoria === "todas" || s.categorySlug === categoria;
        const matchLoc = ubicacion === "todas" || s.locationSlug === ubicacion;
        const matchQ = !q || s.name.toLowerCase().includes(q.toLowerCase());
        return matchCat && matchLoc && matchQ;
      }),
    [categoria, ubicacion, q],
  );

  return (
    <>
      <PageHero
        eyebrow="Marcas y tiendas"
        title="Directorio comercial"
        description="Encuentra rápidamente una tienda, restaurante o servicio dentro de los centros comerciales CENTRAL."
        image={modaImg}
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
              label: "Centro",
              value: ubicacion,
              onChange: (value) => setSearch({ ubicacion: value === "todas" ? undefined : value }),
              options: [
                { value: "todas", label: "Todos los centros" },
                ...locations.map((l) => ({ value: l.slug, label: l.shortName })),
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
            No encontramos marcas con esos criterios. Prueba con otra categoría o centro comercial.
          </p>
        )}
      </Section>
    </>
  );
}
