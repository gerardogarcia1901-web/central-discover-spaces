import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/central/primitives";
import { StoreCard } from "@/components/central/cards";
import { CtaSection } from "@/components/central/CtaSection";
import { allStores } from "@/data/stores";
import { center } from "@/data/center";

const TITLE = "Gastronomía | CENTRAL San Miguel Centro";
const DESCRIPTION =
  "Opciones de comida y bebida en CENTRAL San Miguel Centro: horarios de atención y contacto de cada establecimiento en el Centro de San Miguel.";

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
  const results = allStores.filter((s) => s.categorySlug === "comida");

  return (
    <>
      <PageHero
        eyebrow="Gastronomía"
        title="Comida y bebida en la plaza"
        description="Los comercios de comida y bebida de CENTRAL San Miguel Centro, con su local, su horario de atención y su contacto."
        breadcrumbs={[{ label: "Gastronomía" }]}
      >
        <p className="max-w-2xl text-sm leading-relaxed text-ink-foreground/70">{center.hoursNote}</p>
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
        eyebrow="Comercios"
        title="Conoce todo el directorio"
        description="Revisa los comercios de CENTRAL San Miguel Centro con su local, horario de atención y contacto."
        primary={{ label: "Ver comercios", to: "/comercios" }}
        secondary={{ label: "Cómo llegar", to: "/visitanos" }}
      />
    </>
  );
}
