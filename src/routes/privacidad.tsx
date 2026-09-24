import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/central/primitives";
import { ContentPlaceholder } from "@/components/central/Placeholders";

const TITLE = "Política de Privacidad | CENTRAL San Miguel Centro";
const DESCRIPTION = "Política de Privacidad de Central San Miguel Centro, plaza operada por Grupo Galo, S.A. de C.V.";

export const Route = createFileRoute("/privacidad")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <>
      <PageHero eyebrow="Legal" title="Política de Privacidad" breadcrumbs={[{ label: "Política de Privacidad" }]} />
      <Section className="py-12 md:py-16">
        <ContentPlaceholder
          title="Texto en preparación."
          description="Grupo Galo, S.A. de C.V. publicará aquí su Política de Privacidad oficial."
        />
      </Section>
    </>
  ),
});
