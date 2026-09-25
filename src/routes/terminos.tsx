import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/central/primitives";
import { LegalDocument } from "@/components/central/LegalDocument";
import termsText from "@/data/legal/terminos.md?raw";

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
      <PageHero eyebrow="Términos y Condiciones" title="Uso claro del sitio." breadcrumbs={[{ label: "Términos y Condiciones" }]}>
        <div className="max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>Bienvenido a CENTRAL.</p>
          <p>Estos Términos y Condiciones regulan el acceso y uso del sitio web de CENTRAL, incluyendo sus contenidos, páginas de ubicación, directorio de comercios, promociones, eventos, servicios, formularios y demás funcionalidades disponibles.</p>
          <p>Al utilizar este sitio, aceptas estos Términos y Condiciones.</p>
        </div>
      </PageHero>
      <Section className="py-12 md:py-16">
        <LegalDocument content={termsText} />
      </Section>
    </>
  ),
});
