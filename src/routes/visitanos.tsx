import { createFileRoute } from "@tanstack/react-router";
import { Car, Clock, MapPin, Bus, Accessibility, Sparkles } from "lucide-react";
import planoImg from "@/assets/smc-plano.jpg";
import fachadaImg from "@/assets/smc-fachada.jpg";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageHero, Section, SectionHeading } from "@/components/central/primitives";
import { CtaSection } from "@/components/central/CtaSection";
import { center } from "@/data/center";
import { site } from "@/data/site";

const TITLE = "Visítanos: horarios, dirección y parqueo | CENTRAL San Miguel Centro";
const DESCRIPTION =
  "Horarios por día, dirección completa, cómo llegar, parqueo gratuito, servicios y accesibilidad de CENTRAL San Miguel Centro.";

export const Route = createFileRoute("/visitanos")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ShoppingCenter",
          name: center.name,
          description: center.description,
          telephone: site.phone,
          address: {
            "@type": "PostalAddress",
            streetAddress: center.address,
            addressLocality: center.city,
            addressCountry: "SV",
          },
        }),
      },
    ],
    links: [{ rel: "canonical", href: "/visitanos" }],
  }),
  component: VisitanosPage,
});

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

function VisitanosPage() {
  return (
    <>
      <PageHero
        eyebrow="Planifica tu visita"
        title="Visítanos"
        description={`${center.address}. ${center.addressDetail}`}
        image={fachadaImg}
        breadcrumbs={[{ label: "Visítanos" }]}
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

      {/* HORARIOS Y DIRECCIÓN */}
      <Section className="py-14 md:py-20">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <p className="eyebrow flex items-center gap-2 text-muted-foreground">
              <Clock className="size-4" aria-hidden /> Horarios
            </p>
            <dl className="mt-6 divide-y divide-border border-y border-border text-sm">
              {center.hours.map((h) => (
                <div key={h.label} className="flex items-center justify-between gap-6 py-4">
                  <dt className="text-muted-foreground">{h.label}</dt>
                  <dd className="font-medium">{h.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-5 text-xs leading-relaxed text-muted-foreground">{center.specialHours}</p>
          </div>
          <div className="lg:col-span-7">
            <p className="eyebrow flex items-center gap-2 text-muted-foreground">
              <MapPin className="size-4" aria-hidden /> Dirección
            </p>
            <p className="display-md mt-6 text-2xl md:text-3xl">{center.address}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{center.addressDetail}</p>
            <div className="mt-8 overflow-hidden border border-border">
              <img
                src={planoImg}
                alt={`Plano de ubicación de ${center.name} con accesos, estacionamientos y niveles`}
                className="w-full object-cover"
                loading="lazy"
                width={1600}
                height={1100}
              />
              <p className="border-t border-border bg-card p-4 text-xs text-muted-foreground">
                Plano de referencia con accesos, estacionamientos y distribución de niveles.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CÓMO LLEGAR */}
      <Section tone="sand" className="py-14 md:py-20">
        <SectionHeading eyebrow="Cómo llegar" title="Referencias para ubicarnos" />
        <ItemList items={center.directions} />
      </Section>

      {/* PARQUEO */}
      <Section className="py-14 md:py-20">
        <SectionHeading
          eyebrow="Parqueo"
          title="850 espacios en cuatro estacionamientos"
          description={center.parkingNote}
          action={<Car className="hidden size-10 text-muted-foreground lg:block" aria-hidden />}
        />
        <ItemList items={center.parking} />
      </Section>

      {/* TRANSPORTE */}
      <Section tone="ink" className="py-14 md:py-20">
        <SectionHeading eyebrow="Transporte" title="Llegar sin vehículo" />
        <ul className="mt-10 grid gap-px sm:grid-cols-2 lg:grid-cols-4">
          {center.transport.map((item) => (
            <li key={item.label} className="border-t border-white/20 pt-5">
              <Bus className="size-4 text-ink-foreground/50" aria-hidden />
              <p className="mt-3 font-display text-base font-semibold uppercase tracking-tight">{item.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-foreground/70">{item.description}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* SERVICIOS */}
      <Section className="py-14 md:py-20">
        <SectionHeading
          eyebrow="Servicios"
          title="Servicios para tu visita"
          action={<Sparkles className="hidden size-10 text-muted-foreground lg:block" aria-hidden />}
        />
        <ItemList items={center.services} />
      </Section>

      {/* ACCESIBILIDAD */}
      <Section tone="sand" className="py-14 md:py-20">
        <SectionHeading
          eyebrow="Accesibilidad"
          title="Una plaza para todas las personas"
          action={<Accessibility className="hidden size-10 text-muted-foreground lg:block" aria-hidden />}
        />
        <ItemList items={center.accessibility} />
      </Section>

      {/* NIVELES */}
      <Section className="py-14 md:py-20">
        <SectionHeading eyebrow="Niveles" title="Cómo se distribuye la plaza" />
        <ul className="mt-10 divide-y divide-border border-y border-border">
          {center.levels.map((l) => (
            <li key={l.slug} className="flex flex-col gap-2 py-6 md:flex-row md:items-baseline md:gap-10">
              <p className="display-md w-40 shrink-0 text-xl">{l.name}</p>
              <p className="leading-relaxed text-muted-foreground">{l.description}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* FAQ */}
      <Section tone="sand" className="py-14 md:py-20">
        <SectionHeading eyebrow="Preguntas frecuentes" title="Antes de venir" />
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
      </Section>

      <CtaSection
        eyebrow="Contacto"
        title="¿Necesitas ayuda con tu visita?"
        description="Escríbenos o llámanos y el equipo de servicio al visitante te orienta sobre horarios, objetos perdidos, eventos y servicios de la plaza."
        primary={{ label: "Ir a contacto", to: "/contacto" }}
        secondary={{ label: "Ver directorio", to: "/directorio" }}
        image={fachadaImg}
      />
    </>
  );
}
