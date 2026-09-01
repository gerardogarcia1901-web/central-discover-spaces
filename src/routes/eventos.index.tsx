import { createFileRoute } from "@tanstack/react-router";
import eventosImg from "@/assets/smc-eventos.jpg";
import { PageHero, Section, SectionHeading } from "@/components/central/primitives";
import { EventCard } from "@/components/central/cards";
import { CtaSection } from "@/components/central/CtaSection";
import { events } from "@/data/events";

const TITLE = "Agenda de eventos | CENTRAL San Miguel Centro";
const DESCRIPTION =
  "Música en vivo, ferias de emprendedores, festivales gastronómicos y cine al aire libre en la plaza de eventos de CENTRAL San Miguel Centro.";

export const Route = createFileRoute("/eventos/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: EventosPage,
});

function EventosPage() {
  return (
    <>
      <PageHero
        eyebrow="Agenda"
        title="Eventos del centro"
        description="Programación cultural gratuita cada mes en la plaza de eventos, el atrio central y la terraza."
        image={eventosImg}
        breadcrumbs={[{ label: "Eventos" }]}
      />

      <Section className="py-12 md:py-16">
        <SectionHeading eyebrow={`${events.length} eventos próximos`} title="Lo que viene" />
        <div className="mt-12 grid gap-6">
          {events.map((event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      </Section>

      <CtaSection
        eyebrow="Plaza de eventos"
        title="Realiza tu evento en San Miguel Centro"
        description="La plaza de eventos y el atrio central están disponibles para activaciones de marca, ferias y presentaciones, con capacidad para 400 personas."
        primary={{ label: "Escribir al equipo", to: "/contacto" }}
        secondary={{ label: "Ver arrendamientos", to: "/arrendamientos" }}
        image={eventosImg}
      />
    </>
  );
}
