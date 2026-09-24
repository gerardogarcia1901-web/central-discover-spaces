import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/central/primitives";
import { ContentPlaceholder } from "@/components/central/Placeholders";

const TITLE = "Términos y Condiciones | CENTRAL San Miguel Centro";
const DESCRIPTION = "Términos y Condiciones de uso del sitio de Central San Miguel Centro.";

export const Route = createFileRoute("/terminos")({
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
      <PageHero eyebrow="Legal" title="Términos y Condiciones" breadcrumbs={[{ label: "Términos y Condiciones" }]} />
      <Section className="py-12 md:py-16">
        <ContentPlaceholder
          title="Texto en preparación."
          description="Grupo Galo, S.A. de C.V. publicará aquí los Términos y Condiciones oficiales."
        />
      </Section>
    </>
  ),
});
