import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/central/primitives";
import { LocationCard } from "@/components/central/cards";
import { CtaSection } from "@/components/central/CtaSection";
import { locations } from "@/data/locations";
import texturaImg from "@/assets/texture-arq.jpg";

export const Route = createFileRoute("/ubicaciones/")({
  head: () => ({
    meta: [
      { title: "Centros CENTRAL | Ubicaciones en El Salvador" },
      {
        name: "description",
        content:
          "Conoce los centros comerciales CENTRAL en El Salvador: horarios, direcciones, tiendas y proyectos en desarrollo.",
      },
      { property: "og:title", content: "Centros CENTRAL | Ubicaciones en El Salvador" },
      { property: "og:description", content: "Selecciona tu CENTRAL y descubre su experiencia comercial." },
    ],
  }),
  component: UbicacionesPage,
});

function UbicacionesPage() {
  return (
    <>
      <PageHero
        eyebrow="Nuestros centros"
        title="Encuentra tu CENTRAL"
        description="Una red de destinos comerciales en crecimiento. Cada CENTRAL tiene su propia mezcla de marcas, gastronomía y experiencias."
        breadcrumbs={[{ label: "Centros" }]}
      />
      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          {locations.map((loc) => (
            <LocationCard key={loc.slug} location={loc} size="large" />
          ))}
        </div>
        <p className="mt-12 max-w-2xl text-sm text-muted-foreground">
          Cada centro comercial CENTRAL cuenta con su propio sitio web, donde encontrarás su directorio de marcas,
          horarios, promociones y agenda. CENTRAL continúa expandiéndose en El Salvador y nuevas ubicaciones se
          incorporarán a esta página conforme avancen los proyectos.
        </p>
      </Section>
      <CtaSection
        eyebrow="Oportunidades comerciales"
        title="Crece con CENTRAL"
        description="¿Te interesa operar en alguno de nuestros centros? Conoce los espacios disponibles y la información de cada proyecto."
        primary={{ label: "Quiero arrendar", to: "/arrendamientos" }}
        secondary={{ label: "Contactar", to: "/contacto" }}
        image={texturaImg}
      />
    </>
  );
}
