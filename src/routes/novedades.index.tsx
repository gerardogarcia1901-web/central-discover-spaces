import { createFileRoute } from "@tanstack/react-router";
import lifestyleImg from "@/assets/lifestyle.jpg";
import { PageHero, Section } from "@/components/central/primitives";
import { NewsCard } from "@/components/central/cards";
import { articles } from "@/data/catalog";

export const Route = createFileRoute("/novedades/")({
  head: () => ({
    meta: [
      { title: "Novedades | CENTRAL" },
      {
        name: "description",
        content: "Noticias, aperturas, experiencias y anuncios de los centros comerciales CENTRAL en El Salvador.",
      },
      { property: "og:title", content: "Novedades | CENTRAL" },
      { property: "og:description", content: "Historias y anuncios de la red de centros comerciales CENTRAL." },
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
        title="Novedades CENTRAL"
        description="Aperturas, expansión, experiencias y comunidad: lo que ocurre dentro y alrededor de nuestros centros comerciales."
        image={lifestyleImg}
        breadcrumbs={[{ label: "Novedades" }]}
      />
      <Section>
        {featured && <NewsCard article={featured} featured />}
        <div className="mt-16 grid gap-12 border-t border-border pt-16 md:grid-cols-3">
          {rest.map((article) => (
            <NewsCard key={article.slug} article={article} />
          ))}
        </div>
      </Section>
    </>
  );
}
