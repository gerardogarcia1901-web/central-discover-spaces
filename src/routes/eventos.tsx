import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import eventosImg from "@/assets/eventos.jpg";
import { PageHero, Section } from "@/components/central/primitives";
import { EventCard } from "@/components/central/cards";
import { CategoryChips } from "@/components/central/Filters";
import { CtaSection } from "@/components/central/CtaSection";
import { events } from "@/data/catalog";
import { locations } from "@/data/locations";

export const Route = createFileRoute("/eventos")({
  head: () => ({
    meta: [
      { title: "Eventos | CENTRAL" },
      {
        name: "description",
        content: "Agenda de eventos, conciertos, ferias y activaciones en los centros comerciales CENTRAL.",
      },
      { property: "og:title", content: "Eventos | CENTRAL" },
      { property: "og:description", content: "Conoce la agenda de actividades de los centros CENTRAL." },
    ],
  }),
  component: EventosPage,
});

function EventosPage() {
  const [ubicacion, setUbicacion] = useState("todas");
  const results = events.filter((e) => ubicacion === "todas" || e.locationSlug === ubicacion);

  return (
    <>
      <PageHero
        eyebrow="Agenda"
        title="Eventos en CENTRAL"
        description="Conciertos, ferias, mercados de diseño y activaciones abiertas a la ciudad durante todo el año."
        image={eventosImg}
        breadcrumbs={[{ label: "Eventos" }]}
      />

      <Section className="py-12 md:py-16">
        <CategoryChips
          value={ubicacion}
          onChange={setUbicacion}
          options={[
            { value: "todas", label: "Todos los centros" },
            ...locations.map((l) => ({ value: l.slug, label: l.shortName })),
          ]}
        />
        <p className="mt-8 text-sm text-muted-foreground" aria-live="polite">
          {results.length} {results.length === 1 ? "evento" : "eventos"} programados
        </p>
        {results.length ? (
          <div className="mt-6 grid gap-6 xl:grid-cols-2">
            {results.map((event) => (
              <EventCard key={event.slug} event={event} />
            ))}
          </div>
        ) : (
          <p className="mt-6 border border-dashed border-border p-12 text-center text-sm text-muted-foreground">
            No hay eventos programados para este centro por el momento.
          </p>
        )}
      </Section>

      <CtaSection
        eyebrow="Marcas y patrocinios"
        title="Activa tu marca en nuestros espacios"
        description="Plazas, pasajes y kioscos disponibles para activaciones comerciales, lanzamientos y ferias temporales."
        primary={{ label: "Contactar equipo comercial", to: "/contacto" }}
        secondary={{ label: "Ver arrendamientos", to: "/arrendamientos" }}
        image={eventosImg}
      />
    </>
  );
}
