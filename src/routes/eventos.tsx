import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/central/primitives";
import { ContentPlaceholder } from "@/components/central/Placeholders";
import { CtaSection } from "@/components/central/CtaSection";

const TITLE = "Eventos | CENTRAL San Miguel Centro";
const DESCRIPTION =
  "Actividades especiales y eventos de CENTRAL San Miguel Centro, la plaza comercial urbana del Centro de San Miguel.";

export const Route = createFileRoute("/eventos")({
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
  component: EventosPage,
});

function EventosPage() {
  return (
    <>
      <PageHero
        eyebrow="CENTRAL San Miguel Centro"
        title="Eventos"
        description="Actividades especiales de la plaza, publicadas en cuanto estén confirmadas."
        breadcrumbs={[{ label: "Eventos" }]}
      />
      <Section className="py-14 md:py-20">
        <ContentPlaceholder
          eyebrow="CENTRAL San Miguel Centro"
          title="Aún no hay eventos publicados"
          description="Este módulo está listo para publicar las actividades especiales de la plaza en cuanto estén disponibles."
          items={["Actividades especiales"]}
        />
      </Section>

      <CtaSection
        eyebrow="Comercios"
        title="Mientras tanto, conoce la plaza"
        description="Revisa los comercios de CENTRAL San Miguel Centro con su local, horario de atención y contacto."
        primary={{ label: "Ver comercios", to: "/comercios" }}
        secondary={{ label: "Cómo llegar", to: "/visitanos" }}
      />
    </>
  );
}
