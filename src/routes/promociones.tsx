import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeading } from "@/components/central/primitives";
import { PromotionCard } from "@/components/central/cards";
import { ContentPlaceholder } from "@/components/central/Placeholders";
import { CtaSection } from "@/components/central/CtaSection";
import { promotions, promotionKinds } from "@/data/promotions";
import { allStores } from "@/data/stores";

const TITLE = "Promociones | CENTRAL San Miguel Centro";
const DESCRIPTION =
  "Promociones de los comercios y campañas conjuntas de CENTRAL San Miguel Centro, la plaza comercial del Centro de San Miguel.";

export const Route = createFileRoute("/promociones")({
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
  component: PromocionesPage,
});

function PromocionesPage() {
  const storeName = (slug?: string) => allStores.find((s) => s.slug === slug)?.name;

  return (
    <>
      <PageHero
        eyebrow="CENTRAL San Miguel Centro"
        title="Promociones"
        description="Promociones de los comercios, campañas conjuntas y temporadas comerciales de la plaza."
        breadcrumbs={[{ label: "Promociones" }]}
      />

      <Section className="py-14 md:py-20">
        {promotions.length ? (
          <>
            <SectionHeading eyebrow="Vigentes" title="Promociones publicadas" />
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {promotions.map((promo) => (
                <PromotionCard key={promo.slug} promotion={promo} storeName={storeName(promo.storeSlug)} />
              ))}
            </div>
          </>
        ) : (
          <ContentPlaceholder
            eyebrow="CENTRAL San Miguel Centro"
            title="Aún no hay promociones publicadas"
            description="Este módulo está listo para publicar promociones de los comercios y campañas de la plaza en cuanto estén disponibles."
            items={promotionKinds}
          />
        )}
      </Section>

      <CtaSection
        eyebrow="Comercios"
        title="Conoce los comercios de la plaza"
        description="Consulta el local, el horario de atención y el contacto de cada comercio de CENTRAL San Miguel Centro."
        primary={{ label: "Ver comercios", to: "/comercios" }}
        secondary={{ label: "Cómo llegar", to: "/visitanos" }}
      />
    </>
  );
}
