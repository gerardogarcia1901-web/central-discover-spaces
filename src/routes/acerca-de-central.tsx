import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageHero, Section } from "@/components/central/primitives";
import { site } from "@/data/site";

const TITLE = "Acerca de CENTRAL | Grupo Galo";
const DESCRIPTION = "Conoce CENTRAL, la marca de centros comerciales de Grupo Galo, y sus ubicaciones en San Miguel y Santa Rosa de Lima.";

export const Route = createFileRoute("/acerca-de-central")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://central-discover-spaces.lovable.app/acerca-de-central" }],
  }),
  component: AcercaPage,
});

function AcercaPage() {
  return (
    <>
      <PageHero
        eyebrow="Grupo Galo"
        title="Acerca de CENTRAL"
        description="CENTRAL es la marca de centros comerciales de Grupo Galo. Cada ubicación reúne comercio, gastronomía y servicios con una experiencia cercana, actual y fácil de disfrutar."
        breadcrumbs={[{ label: "Acerca de CENTRAL" }]}
      />
      <Section className="py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <article className="rule-line pt-5">
            <p className="eyebrow text-muted-foreground">San Miguel</p>
            <h2 className="display-md mt-4 text-2xl">CENTRAL San Miguel Centro</h2>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              Una plaza urbana en el centro de San Miguel, pensada para compras, gastronomía, servicios y conveniencia cotidiana.
            </p>
          </article>
          <article className="rule-line pt-5">
            <p className="eyebrow text-muted-foreground">Santa Rosa</p>
            <h2 className="display-md mt-4 text-2xl">CENTRAL Santa Rosa de Lima</h2>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              Un nuevo Central en desarrollo sobre Ruta Militar / RN18E, en Santa Rosa de Lima, La Unión.
            </p>
          </article>
        </div>
        <Button asChild size="lg" className="mt-12 rounded-none px-8 eyebrow">
          <a href={site.brandUrl} target="_blank" rel="noreferrer">Conoce nuestras ubicaciones</a>
        </Button>
      </Section>
    </>
  );
}