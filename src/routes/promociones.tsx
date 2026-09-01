import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import modaImg from "@/assets/moda.jpg";
import { PageHero, Section } from "@/components/central/primitives";
import { PromotionCard } from "@/components/central/cards";
import { FilterBar } from "@/components/central/Filters";
import { CtaSection } from "@/components/central/CtaSection";
import { categories, promotions } from "@/data/catalog";
import { locations } from "@/data/locations";

export const Route = createFileRoute("/promociones")({
  head: () => ({
    meta: [
      { title: "Promociones y campañas | CENTRAL" },
      {
        name: "description",
        content: "Descuentos, campañas y beneficios vigentes en los centros comerciales CENTRAL de El Salvador.",
      },
      { property: "og:title", content: "Promociones y campañas | CENTRAL" },
      { property: "og:description", content: "Aprovecha las promociones activas en los centros CENTRAL." },
    ],
  }),
  component: PromocionesPage,
});

function PromocionesPage() {
  const [ubicacion, setUbicacion] = useState("todas");
  const [categoria, setCategoria] = useState("todas");

  const results = promotions.filter(
    (p) =>
      (ubicacion === "todas" || p.locationSlug === ubicacion) &&
      (categoria === "todas" || p.categorySlug === categoria),
  );

  return (
    <>
      <PageHero
        eyebrow="Beneficios"
        title="Promociones CENTRAL"
        description="Campañas de temporada, beneficios por consumo y descuentos en marcas participantes de nuestros centros."
        image={modaImg}
        breadcrumbs={[{ label: "Promociones" }]}
      />

      <Section className="py-12 md:py-16">
        <FilterBar
          selects={[
            {
              label: "Centro",
              value: ubicacion,
              onChange: setUbicacion,
              options: [
                { value: "todas", label: "Todos los centros" },
                ...locations.map((l) => ({ value: l.slug, label: l.shortName })),
              ],
            },
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
              <PromotionCard key={promo.slug} promotion={promo} />
            ))}
          </div>
        ) : (
          <p className="mt-6 border border-dashed border-border p-12 text-center text-sm text-muted-foreground">
            No hay promociones con esos filtros en este momento.
          </p>
        )}
        <p className="mt-10 max-w-3xl text-xs leading-relaxed text-muted-foreground">
          Las promociones aplican únicamente en marcas participantes y durante las fechas indicadas. Consulta términos
          y condiciones en el punto de venta de cada tienda.
        </p>
      </Section>

      <CtaSection
        eyebrow="Marcas participantes"
        title="Suma tu marca a las campañas CENTRAL"
        description="Las marcas que operan en nuestros centros participan en campañas conjuntas de temporada con difusión en todos nuestros canales."
        primary={{ label: "Quiero arrendar", to: "/arrendamientos" }}
        secondary={{ label: "Contactar", to: "/contacto" }}
        image={modaImg}
      />
    </>
  );
}
