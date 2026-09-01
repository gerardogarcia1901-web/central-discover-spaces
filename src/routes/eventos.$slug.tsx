import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CalendarDays, Clock, MapPin, Ticket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumbs, Section, SectionHeading } from "@/components/central/primitives";
import { BackButton } from "@/components/central/BackButton";
import { EventCard } from "@/components/central/cards";
import { events, getEvent } from "@/data/events";

export const Route = createFileRoute("/eventos/$slug")({
  loader: ({ params }) => {
    const event = getEvent(params.slug);
    if (!event) throw notFound();
    return { event };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Evento no encontrado | CENTRAL San Miguel Centro" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { event } = loaderData;
    const title = `${event.title} | CENTRAL San Miguel Centro`;
    return {
      meta: [
        { title },
        { name: "description", content: event.description },
        { property: "og:title", content: title },
        { property: "og:description", content: event.description },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: () => (
    <Section className="min-h-[60svh]">
      <h1 className="display-md">Evento no encontrado</h1>
      <p className="mt-4 text-muted-foreground">Puede que el evento ya haya finalizado.</p>
      <Button asChild className="mt-8 rounded-none eyebrow">
        <Link to="/eventos">Ver la agenda</Link>
      </Button>
    </Section>
  ),
  component: EventPage,
});

function EventPage() {
  const { event } = Route.useLoaderData();
  const related = events.filter((e) => e.slug !== event.slug).slice(0, 2);

  const detalles = [
    { icon: CalendarDays, label: "Fecha", value: event.displayDate },
    { icon: Clock, label: "Horario", value: event.time },
    { icon: MapPin, label: "Lugar", value: event.place },
    { icon: Ticket, label: "Ingreso", value: event.admission },
  ];

  return (
    <>
      <div className="container-central flex flex-wrap items-center justify-between gap-4 pt-8">
        <Breadcrumbs items={[{ label: "Eventos", to: "/eventos" }, { label: event.title }]} />
        <BackButton fallbackTo="/eventos" />
      </div>

      <Section className="pt-10 md:pt-12">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="hover-zoom aspect-4/3 overflow-hidden bg-muted">
            <img src={event.image} alt={event.title} className="image-cover" width={1600} height={1100} />
          </div>
          <div>
            <p className="eyebrow text-muted-foreground">{event.admission}</p>
            <h1 className="display-lg mt-5">{event.title}</h1>
            <p className="mt-6 leading-relaxed text-muted-foreground">{event.description}</p>
            <dl className="mt-10 divide-y divide-border border-y border-border text-sm">
              {detalles.map((d) => (
                <div key={d.label} className="flex items-center justify-between gap-6 py-4">
                  <dt className="flex items-center gap-3 text-muted-foreground">
                    <d.icon className="size-4" aria-hidden /> {d.label}
                  </dt>
                  <dd className="text-right">{d.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-none eyebrow">
                <Link to="/visitanos">Cómo llegar</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-none eyebrow">
                <Link to="/gastronomia">Dónde comer</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-3xl border-t border-border pt-12">
          {event.longDescription.map((p) => (
            <p key={p.slice(0, 24)} className="mb-6 text-base leading-8 md:text-lg">
              {p}
            </p>
          ))}
          <BackButton fallbackTo="/eventos" label="Regresar a la agenda" className="mt-4" />
        </div>
      </Section>

      {related.length > 0 && (
        <Section tone="sand" className="py-14 md:py-20">
          <SectionHeading eyebrow="También en la agenda" title="Otros eventos" />
          <div className="mt-12 grid gap-6">
            {related.map((e) => (
              <EventCard key={e.slug} event={e} />
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
