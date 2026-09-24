import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/central/primitives";
import { StoreCard } from "@/components/central/cards";
import { CtaSection } from "@/components/central/CtaSection";
import { allStores } from "@/data/stores";
import { center } from "@/data/center";

const TITLE = "Gastronomía | CENTRAL San Miguel Centro";
const DESCRIPTION =
  "Conoce las opciones para comer disponibles en Central San Miguel Centro.";

export const Route = createFileRoute("/gastronomia")({
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
  component: GastronomiaPage,
});

function GastronomiaPage() {
  const results = allStores.filter((s) => s.categorySlug === "gastronomia");

  return (
    <>
      <PageHero
        eyebrow="Central San Miguel Centro"
        title="Gastronomía"
        description="Encuentra opciones para comer en Central San Miguel Centro."
        breadcrumbs={[{ label: "Gastronomía" }]}
      >
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">{center.hoursNote}</p>
      </PageHero>

      <Section className="py-12 md:py-16">
        <p className="text-sm text-muted-foreground" aria-live="polite">
          {results.length} {results.length === 1 ? "comercio" : "comercios"}
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {results.map((store) => (
            <StoreCard key={store.slug} store={store} />
          ))}
        </div>
      </Section>

      <CtaSection
        eyebrow="Directorio"
        title="Encuentra lo que buscas."
        description="Tiendas, gastronomía, servicios y más."
        primary={{ label: "Ver directorio", to: "/comercios" }}
        secondary={{ label: "Cómo llegar", to: "/visitanos" }}
      />
    </>
  );
}
