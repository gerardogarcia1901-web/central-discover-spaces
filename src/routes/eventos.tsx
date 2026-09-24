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
        description="Conoce nuestros eventos."
        breadcrumbs={[{ label: "Eventos" }]}
      />
      <Section className="py-14 md:py-20">
        <ContentPlaceholder
          eyebrow="CENTRAL San Miguel Centro"
          title="Por ahora no hay eventos publicados."
          description="Vuelve pronto para conocer lo que viene."
        />
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
