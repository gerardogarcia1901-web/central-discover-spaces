import { createFileRoute } from "@tanstack/react-router";
import { Accessibility, Baby, Car, Clock, Info, ShieldCheck, Sparkles, Wifi } from "lucide-react";
import pasilloImg from "@/assets/smc-pasillo.jpg";
import fachadaImg from "@/assets/smc-fachada.jpg";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageHero, Section, SectionHeading } from "@/components/central/primitives";
import { CtaSection } from "@/components/central/CtaSection";
import { center } from "@/data/center";
import { site } from "@/data/site";

const TITLE = "Servicios y amenidades | CENTRAL San Miguel Centro";
const DESCRIPTION =
  "Servicios, amenidades, estacionamiento, accesibilidad, seguridad y facilidades para familias en CENTRAL San Miguel Centro.";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/servicios" }],
  }),
  component: ServiciosPage,
});

const practical = [
  { label: "Horario general", description: "Lunes a jueves y domingo cierre temprano; viernes y sábado hasta las 10:00 p.m." },
  { label: "Módulo de información", description: "Junto al acceso principal del Nivel 1, de 9:00 a.m. a 8:00 p.m." },
  { label: "Objetos perdidos", description: "Se resguardan 30 días en el módulo de información; se entregan con documento." },
  { label: "Formas de pago", description: "Las tiendas aceptan efectivo, tarjeta y pagos con billetera digital." },
];

const families = [
  { label: "Salas de lactancia", description: "Espacio privado y climatizado en el Nivel 2, junto a los baños familiares." },
  { label: "Cambiadores de bebé", description: "En todos los módulos de baños de ambos niveles." },
  { label: "Coches y sillas de ruedas", description: "Préstamo gratuito en el módulo de información presentando documento." },
  { label: "Zona de juegos", description: "Área infantil supervisada en la terraza, junto al food hall." },
];

const safety = [
  { label: "Vigilancia 24/7", description: "Personal de seguridad en accesos, pasillos y estacionamientos." },
  { label: "Circuito cerrado", description: "Cámaras en áreas comunes y en los cuatro estacionamientos." },
  { label: "Primeros auxilios", description: "Punto de atención básica y personal capacitado en el corredor de servicios." },
  { label: "Rutas de evacuación", description: "Señalización visible y simulacros periódicos coordinados con Protección Civil." },
];

function ItemList({ items }: { items: { label: string; description: string }[] }) {
  return (
    <ul className="mt-10 grid gap-px sm:grid-cols-2 lg:grid-cols-4">
      {items.map((item) => (
        <li key={item.label} className="border-t border-border pt-5">
          <p className="font-display text-base font-semibold uppercase tracking-tight">{item.label}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
        </li>
      ))}
    </ul>
  );
}

function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Servicios y amenidades"
        title="Todo lo práctico de la sede"
        description="Información útil para tu visita: servicios del centro, estacionamiento, accesibilidad, facilidades para familias y seguridad."
        image={pasilloImg}
        breadcrumbs={[{ label: "Servicios y amenidades" }]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" variant="secondary" className="rounded-none px-8 eyebrow">
            <a href={center.mapsUrl} target="_blank" rel="noreferrer">
              Abrir en Google Maps
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-none border-white/30 bg-transparent px-8 eyebrow text-ink-foreground hover:bg-white/10 hover:text-ink-foreground"
          >
            <a href={`tel:${site.phone.replace(/\s/g, "")}`}>Llamar {site.phone}</a>
          </Button>
        </div>
      </PageHero>

      <Section className="py-14 md:py-20">
        <SectionHeading
          eyebrow="Información práctica"
          title="Lo esencial de la sede"
          description={`${center.address}. ${center.addressDetail}`}
          action={<Info className="hidden size-10 text-muted-foreground lg:block" aria-hidden />}
        />
        <ItemList items={practical} />
        <div className="mt-12 grid gap-px border-t border-border pt-6 sm:grid-cols-2 lg:grid-cols-4">
          {center.stats.map((stat) => (
            <div key={stat.label}>
              <p className="display-md text-3xl">{stat.value}</p>
              <p className="eyebrow mt-2 text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="sand" className="py-14 md:py-20">
        <SectionHeading
          eyebrow="Amenidades"
          title="Servicios dentro del centro"
          action={<Sparkles className="hidden size-10 text-muted-foreground lg:block" aria-hidden />}
        />
        <ItemList items={center.services} />
        <p className="mt-8 flex items-center gap-2 text-xs text-muted-foreground">
          <Wifi className="size-4" aria-hidden /> Red abierta CENTRAL-SM disponible en todas las áreas comunes.
        </p>
      </Section>

      <Section className="py-14 md:py-20">
        <SectionHeading
          eyebrow="Estacionamiento"
          title="850 espacios en cuatro estacionamientos"
          description={center.parkingNote}
          action={<Car className="hidden size-10 text-muted-foreground lg:block" aria-hidden />}
        />
        <ItemList items={center.parking} />
      </Section>

      <Section tone="ink" className="py-14 md:py-20">
        <SectionHeading
          eyebrow="Accesibilidad"
          title="Una plaza para todas las personas"
          action={<Accessibility className="hidden size-10 text-ink-foreground/50 lg:block" aria-hidden />}
        />
        <ul className="mt-10 grid gap-px sm:grid-cols-2 lg:grid-cols-4">
          {center.accessibility.map((item) => (
            <li key={item.label} className="border-t border-white/20 pt-5">
              <p className="font-display text-base font-semibold uppercase tracking-tight">{item.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-foreground/70">{item.description}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section className="py-14 md:py-20">
        <SectionHeading
          eyebrow="Familias"
          title="Facilidades para venir con niños"
          action={<Baby className="hidden size-10 text-muted-foreground lg:block" aria-hidden />}
        />
        <ItemList items={families} />
      </Section>

      <Section tone="sand" className="py-14 md:py-20">
        <SectionHeading
          eyebrow="Seguridad"
          title="Vigilancia y atención"
          action={<ShieldCheck className="hidden size-10 text-muted-foreground lg:block" aria-hidden />}
        />
        <ItemList items={safety} />
      </Section>

      <Section className="py-14 md:py-20">
        <SectionHeading eyebrow="Preguntas frecuentes" title="Dudas sobre servicios" />
        <Accordion type="single" collapsible className="mt-10 border-t border-border">
          {center.faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question} className="border-b border-border">
              <AccordionTrigger className="py-6 text-left font-display text-base font-semibold uppercase tracking-tight hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <p className="mt-8 flex items-center gap-2 text-xs text-muted-foreground">
          <Clock className="size-4" aria-hidden /> {center.specialHours}
        </p>
      </Section>

      <CtaSection
        eyebrow="Contacto"
        title="¿Necesitas un servicio en particular?"
        description="Nuestro equipo de servicio al visitante te orienta sobre préstamos de coches y sillas de ruedas, objetos perdidos, accesibilidad y uso de la plaza de eventos."
        primary={{ label: "Ir a contacto", to: "/contacto" }}
        secondary={{ label: "Planificar mi visita", to: "/visitanos" }}
        image={fachadaImg}
      />
    </>
  );
}
