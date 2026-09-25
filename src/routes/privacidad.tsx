import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/central/primitives";
import { LegalDocument } from "@/components/central/LegalDocument";
import privacyText from "@/data/legal/privacidad.md?raw";

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
      <PageHero eyebrow="Política de Privacidad" title="Tus datos, con claridad." breadcrumbs={[{ label: "Política de Privacidad" }]}>
        <div className="max-w-2xl space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
          <p>En CENTRAL respetamos tu privacidad y protegemos la información que nos compartes cuando utilizas nuestro sitio web, formularios y canales digitales.</p>
          <p>Esta política de privacidad explica de forma sencilla qué información podemos recopilar, para qué la utilizamos y qué opciones tienes sobre tus datos personales.</p>
        </div>
      </PageHero>
      <Section className="py-12 md:py-16">
        <LegalDocument content={privacyText} />
      </Section>
    </>
  ),
});
