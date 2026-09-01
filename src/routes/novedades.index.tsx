import { createFileRoute } from "@tanstack/react-router";
import lifestyleImg from "@/assets/smc-lifestyle.jpg";
import { PageHero, Section } from "@/components/central/primitives";
import { NewsCard } from "@/components/central/cards";
import { articles } from "@/data/news";

const TITLE = "Novedades del centro | CENTRAL San Miguel Centro";
const DESCRIPTION =
  "Aperturas, mejoras y notas de la comunidad de CENTRAL San Miguel Centro: lo que ocurre dentro y alrededor de la plaza.";

export const Route = createFileRoute("/novedades/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: NovedadesPage,
});

function NovedadesPage() {
  const [featured, ...rest] = articles;

  return (
    <>
      <PageHero
        eyebrow="Editorial"
        title="Novedades del centro"
        description="Aperturas, mejoras a la plaza, programación cultural y comunidad migueleña."
        image={lifestyleImg}
        breadcrumbs={[{ label: "Novedades" }]}
      />
      <Section>
        {featured && <NewsCard article={featured} featured />}
        {rest.length > 0 && (
          <div className="mt-16 grid gap-12 border-t border-border pt-16 md:grid-cols-3">
            {rest.map((article) => (
              <NewsCard key={article.slug} article={article} />
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
