import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/central/primitives";
import { LeasingForm } from "@/components/central/LeasingForm";
import { center } from "@/data/center";
import { site } from "@/data/site";

const TITLE = "Arrendamientos | CENTRAL San Miguel Centro";
const DESCRIPTION =
  "Solicita información para arrendar un local en CENTRAL San Miguel Centro, plaza comercial urbana y peatonal en el Centro de San Miguel.";

export const Route = createFileRoute("/arrendamientos")({
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
  component: ArrendamientosPage,
});

function ArrendamientosPage() {
  return (
    <>
      <PageHero
        eyebrow="Arrendamientos"
        title="Tu marca en el centro de San Miguel"
        description={`${center.name} es una plaza urbana y peatonal a pie de calle, frente al nuevo Mercado Central. Solicita información y el equipo de ${site.operator} te contactará.`}
        breadcrumbs={[{ label: "Arrendamientos" }]}
      />

      <Section className="py-14 md:py-20">
        <LeasingForm />
      </Section>
    </>
  );
}
