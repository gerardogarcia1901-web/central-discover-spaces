import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageHero, Section, SectionHeading } from "@/components/central/primitives";
import { CtaSection } from "@/components/central/CtaSection";
import { center } from "@/data/center";
import { site } from "@/data/site";

const TITLE = "Visítanos: dirección y cómo llegar | CENTRAL San Miguel Centro";
const DESCRIPTION =
  "Dirección, referencias y contacto de CENTRAL San Miguel Centro: 2da Calle Poniente y 1ra Avenida Norte, frente al nuevo Mercado Central, ex Parque Barrios.";

export const Route = createFileRoute("/visitanos")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ShoppingCenter",
          name: center.name,
          description: center.description,
          email: site.email,
          telephone: `+503 ${site.whatsapp}`,
          address: {
            "@type": "PostalAddress",
            streetAddress: "2da Calle Poniente y 1ra Avenida Norte",
            addressLocality: center.city,
            addressRegion: center.department,
            addressCountry: "SV",
          },
        }),
      },
    ],
    links: [{ rel: "canonical", href: "/visitanos" }],
  }),
  component: VisitanosPage,
});

function VisitanosPage() {
  return (
    <>
      <PageHero
        eyebrow="Cómo llegar"
        title="Visítanos"
        description={`${center.address}. ${center.addressDetail}`}
        breadcrumbs={[{ label: "Visítanos" }]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" variant="secondary" className="rounded-none px-8 eyebrow">
            <a href={center.mapsUrl} target="_blank" rel="noreferrer">
              Cómo llegar
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-none border-white/30 bg-transparent px-8 eyebrow text-ink-foreground hover:bg-white/10 hover:text-ink-foreground"
          >
            <a href={site.whatsappUrl} target="_blank" rel="noreferrer">
              WhatsApp {site.whatsapp}
            </a>
          </Button>
        </div>
      </PageHero>

      {/* DIRECCIÓN Y MAPA */}
      <Section className="py-14 md:py-20">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <p className="eyebrow flex items-center gap-2 text-muted-foreground">
              <MapPin className="size-4" aria-hidden /> Dirección
            </p>
            <p className="display-md mt-6 text-2xl md:text-3xl">{center.name}</p>
            <p className="mt-4 leading-relaxed">{center.address}</p>
            <p className="mt-3 text-muted-foreground">{center.addressDetail}</p>

            <div className="mt-10 border-t border-border pt-6">
              <p className="eyebrow flex items-center gap-2 text-muted-foreground">
                <Clock className="size-4" aria-hidden /> Horarios
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{center.hoursNote}</p>
              <Link to="/comercios" className="mt-4 inline-block eyebrow underline-offset-8 hover:underline">
                Ver horarios por comercio
              </Link>
            </div>

            <ul className="mt-10 space-y-4 border-t border-border pt-6 text-sm">
              <li className="flex gap-3">
                <MessageCircle className="mt-0.5 size-4 shrink-0" aria-hidden />
                <a href={site.whatsappUrl} target="_blank" rel="noreferrer" className="hover:underline">
                  WhatsApp CENTRAL {site.whatsapp}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0" aria-hidden />
                <a href={`mailto:${site.email}`} className="break-all hover:underline">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden border border-border">
              <iframe
                title={`Mapa de ubicación de ${center.name}`}
                src={center.mapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="aspect-[4/3] w-full border-0"
              />
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border bg-card p-4">
                <p className="text-xs text-muted-foreground">{center.addressDetail}</p>
                <Button asChild variant="outline" size="sm" className="rounded-none eyebrow">
                  <a href={center.mapsUrl} target="_blank" rel="noreferrer">
                    Cómo llegar
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* REFERENCIAS */}
      <Section tone="sand" className="py-14 md:py-20">
        <SectionHeading eyebrow="Referencias" title="Cómo ubicarnos" />
        <ul className="mt-10 grid gap-px sm:grid-cols-2 lg:grid-cols-3">
          {center.directions.map((item) => (
            <li key={item.label} className="border-t border-border pt-5">
              <p className="font-display text-base font-semibold uppercase tracking-tight">{item.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* FAQ */}
      <Section className="py-14 md:py-20">
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
        title="¿Tienes una consulta sobre la plaza?"
        description={`Escríbenos al WhatsApp ${site.whatsapp} o al correo ${site.email} y te ayudamos.`}
        primary={{ label: "Ir a contacto", to: "/contacto" }}
        secondary={{ label: "Ver comercios", to: "/comercios" }}
      />
    </>
  );
}
