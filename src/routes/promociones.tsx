import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import modaImg from "@/assets/smc-moda.jpg";
import { PageHero, Section } from "@/components/central/primitives";
import { PromotionCard } from "@/components/central/cards";
import { FilterBar } from "@/components/central/Filters";
import { CtaSection } from "@/components/central/CtaSection";
import { categories } from "@/data/taxonomy";
import { promotions } from "@/data/promotions";
import { allStores } from "@/data/stores";

const TITLE = "Promociones vigentes | CENTRAL San Miguel Centro";
const DESCRIPTION =
  "Descuentos y beneficios vigentes en las marcas de CENTRAL San Miguel Centro, con su vigencia y la tienda participante.";

export const Route = createFileRoute("/promociones")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: PromocionesPage,
});

function PromocionesPage() {
  const [categoria, setCategoria] = useState("todas");
  const [query, setQuery] = useState("");
  const storeName = (slug: string) => allStores.find((s) => s.slug === slug)?.name;

  const results = promotions.filter((p) => {
    const matchCat = categoria === "todas" || p.categorySlug === categoria;
    const matchQ =
      !query ||
      (p.title + p.description + (storeName(p.storeSlug) ?? "")).toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQ;
  });

  return (
    <>
      <PageHero
        eyebrow="Beneficios"
        title="Promociones vigentes"
        description="Beneficios de temporada en las marcas de la plaza. Cada promoción indica su vigencia y la tienda participante."
        image={modaImg}
        breadcrumbs={[{ label: "Promociones" }]}
      />

      <Section className="py-12 md:py-16">
        <FilterBar
          query={query}
          onQueryChange={setQuery}
          searchPlaceholder="Buscar promoción o marca"
          selects={[
            {
              label: "Categoría",
              value: categoria,
              onChange: setCategoria,
              options: [
                { value: "todas", label: "Todas las categorías" },
                ...categories.map((c) => ({ value: c.slug, label: c.name })),
              ],
            },
          ]}
        />
        <p className="mt-8 text-sm text-muted-foreground" aria-live="polite">
          {results.length} {results.length === 1 ? "promoción vigente" : "promociones vigentes"}
        </p>
        {results.length ? (
          <div className="mt-6 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {results.map((promo) => (
              <PromotionCard key={promo.slug} promotion={promo} storeName={storeName(promo.storeSlug)} />
            ))}
          </div>
        ) : (
          <p className="mt-6 border border-dashed border-border p-12 text-center text-sm text-muted-foreground">
            No hay promociones con esos filtros en este momento.
          </p>
        )}
        <p className="mt-10 max-w-3xl text-xs leading-relaxed text-muted-foreground">
          Las promociones aplican únicamente en las marcas participantes de CENTRAL San Miguel Centro y durante las
          fechas indicadas. Consulta términos y condiciones en el punto de venta de cada tienda.
        </p>
      </Section>

      <CtaSection
        eyebrow="Marcas participantes"
        title="Suma tu marca a las campañas de la plaza"
        description="Las marcas que operan en San Miguel Centro participan en campañas conjuntas de temporada con difusión en todos nuestros canales."
        primary={{ label: "Solicitar espacio", to: "/arrendamientos" }}
        secondary={{ label: "Contactar", to: "/contacto" }}
        image={modaImg}
      />
    </>
  );
}
