import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Breadcrumbs, Section, SectionHeading } from "@/components/central/primitives";
import { BackButton } from "@/components/central/BackButton";
import { NewsCard } from "@/components/central/cards";
import { articles, getArticle } from "@/data/catalog";

export const Route = createFileRoute("/novedades/$slug")({
  loader: ({ params }) => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Nota no encontrada | CENTRAL" }, { name: "robots", content: "noindex" }] };
    }
    const { article } = loaderData;
    return {
      meta: [
        { title: `${article.title} | CENTRAL` },
        { name: "description", content: article.summary },
        { property: "og:title", content: article.title },
        { property: "og:description", content: article.summary },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: () => (
    <Section className="min-h-[60svh]">
      <h1 className="display-md">Nota no encontrada</h1>
      <Button asChild className="mt-8 rounded-none eyebrow">
        <Link to="/novedades">Ver novedades</Link>
      </Button>
    </Section>
  ),
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData();
  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      <div className="container-central flex flex-wrap items-center justify-between gap-4 pt-8">
        <Breadcrumbs items={[{ label: "Novedades", to: "/novedades" }, { label: article.title }]} />
        <BackButton fallbackTo="/novedades" />
      </div>

      <article>
        <header className="container-central max-w-4xl pt-12 md:pt-16">
          <p className="eyebrow text-muted-foreground">
            {article.category} · {article.displayDate}
          </p>
          <h1 className="display-lg mt-6">{article.title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{article.summary}</p>
          <p className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">Por {article.author}</p>
        </header>

        <div className="container-central mt-12">
          <img
            src={article.image}
            alt={article.title}
            className="aspect-[16/9] w-full object-cover"
            width={1600}
            height={1100}
          />
        </div>

        <div className="container-central max-w-3xl py-14 md:py-20">
          {article.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="mb-6 text-base leading-8 md:text-lg">
              {paragraph}
            </p>
          ))}
          <div className="mt-10 flex flex-wrap gap-3 border-t border-border pt-10">
            <Button asChild className="rounded-none eyebrow">
              <Link to="/novedades">Ver más novedades</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-none eyebrow">
              <Link to="/ubicaciones">Conocer nuestros centros</Link>
            </Button>
          </div>
        </div>
      </article>

      <Section tone="sand">
        <SectionHeading eyebrow="Seguir leyendo" title="Otras historias" />
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {related.map((a) => (
            <NewsCard key={a.slug} article={a} />
          ))}
        </div>
      </Section>
    </>
  );
}
