import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/central/primitives";
import { NewsCard } from "@/components/central/cards";
import { ContentPlaceholder } from "@/components/central/Placeholders";
import { CtaSection } from "@/components/central/CtaSection";
import { articles, newsKinds } from "@/data/news";

const TITLE = "Novedades | CENTRAL San Miguel Centro";
const DESCRIPTION =
  "Aperturas, actividades y noticias de CENTRAL San Miguel Centro, la plaza comercial urbana del Centro de San Miguel.";

export const Route = createFileRoute("/novedades/")({
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
  component: NovedadesPage,
});

function NovedadesPage() {
  const [featured, ...rest] = articles;

  return (
    <>
      <PageHero
        eyebrow="CENTRAL San Miguel Centro"
        title="Novedades"
        description="Nuevas aperturas, actividades especiales, noticias de la plaza y avances de la renovación del inmueble."
        breadcrumbs={[{ label: "Novedades" }]}
      />
      <Section className="py-14 md:py-20">
        {articles.length ? (
          <>
            {featured && <NewsCard article={featured} featured />}
            {rest.length > 0 && (
              <div className="mt-16 grid gap-12 border-t border-border pt-16 md:grid-cols-3">
                {rest.map((article) => (
                  <NewsCard key={article.slug} article={article} />
                ))}
              </div>
            )}
          </>
        ) : (
          <ContentPlaceholder
            eyebrow="CENTRAL San Miguel Centro"
            title="Aún no hay novedades publicadas"
            description="Este módulo está listo para publicar las noticias y actividades de la plaza en cuanto estén disponibles."
            items={newsKinds}
          />
        )}
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
