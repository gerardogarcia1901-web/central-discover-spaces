import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/central/primitives";
import { LeasingForm } from "@/components/central/LeasingForm";

const TITLE = "Arrendamiento | CENTRAL San Miguel Centro";
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
        eyebrow="Arrendamiento"
        title="Su marca puede ser parte de CENTRAL."
        description="Conoce las oportunidades de arrendamiento en Central San Miguel Centro."
        breadcrumbs={[{ label: "Arrendamiento" }]}
      >
        <dl className="grid max-w-xl grid-cols-2 gap-6 border-t border-foreground/15 pt-6">
          <div>
            <dt className="eyebrow text-muted-foreground">Área arrendable aproximada</dt>
            <dd className="display-md mt-2 text-2xl">≈ 1,300 m²</dd>
          </div>
          <div>
            <dt className="eyebrow text-muted-foreground">Locales comerciales</dt>
            <dd className="display-md mt-2 text-2xl">6</dd>
          </div>
        </dl>
      </PageHero>

      <Section className="py-14 md:py-20">
        <LeasingForm />
      </Section>
    </>
  );
}
