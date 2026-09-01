import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import texturaImg from "@/assets/texture-arq.jpg";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageHero, Section, SectionHeading, StatusBadge } from "@/components/central/primitives";
import { CtaSection } from "@/components/central/CtaSection";
import { LeasingForm } from "@/components/central/LeasingForm";
import { locations } from "@/data/locations";
import { site } from "@/data/site";

const beneficios = [
  {
    title: "Ubicaciones estratégicas",
    text: "Desarrollos en zonas de alto flujo peatonal y vehicular, conectados con el transporte y el comercio existente.",
  },
  {
    title: "Mezcla comercial curada",
    text: "Definimos la mezcla de marcas para que cada categoría tenga demanda real y complementariedad entre operadores.",
  },
  {
    title: "Operación y mantenimiento",
    text: "Administración profesional, seguridad, limpieza y mantenimiento de áreas comunes durante todo el horario.",
  },
  {
    title: "Marketing conjunto",
    text: "Campañas de temporada, eventos y difusión digital que benefician a todas las marcas del centro.",
  },
];

const faqs = [
  {
    q: "¿Qué tipos de espacio están disponibles?",
    a: "Locales en línea, locales ancla de gran formato, islas y kioscos comerciales, además de espacios para activaciones temporales.",
  },
  {
    q: "¿Qué información debo enviar?",
    a: "Datos de la marca, categoría, metraje requerido, experiencia operativa y centro de interés. Con eso el equipo comercial prepara una propuesta.",
  },
  {
    q: "¿Cuánto tarda el proceso?",
    a: "Después del primer contacto agendamos una reunión y compartimos la información del proyecto. El tiempo depende de la disponibilidad y del tipo de espacio.",
  },
  {
    q: "¿Puedo arrendar en un centro en desarrollo?",
    a: "Sí. Los proyectos en desarrollo reciben solicitudes de preapertura con condiciones preferenciales para las primeras marcas.",
  },
];

export const Route = createFileRoute("/arrendamientos")({
  head: () => ({
    meta: [
      { title: "Arrendamientos comerciales | CENTRAL" },
      {
        name: "description",
        content:
          "Espacios comerciales disponibles en los centros CENTRAL de El Salvador. Locales, islas y kioscos para marcas y operadores gastronómicos.",
      },
      { property: "og:title", content: "Arrendamientos comerciales | CENTRAL" },
      { property: "og:description", content: "Lleva tu marca a los centros comerciales CENTRAL." },
    ],
  }),
  component: ArrendamientosPage,
});

function ArrendamientosPage() {
  return (
    <>
      <PageHero
        eyebrow="Oportunidades comerciales"
        title="Crece con CENTRAL"
        description="Ofrecemos espacios comerciales a marcas, retailers, operadores gastronómicos y socios comerciales que buscan crecer en El Salvador con acompañamiento profesional."
        image={texturaImg}
        breadcrumbs={[{ label: "Arrendamientos" }]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" variant="secondary" className="rounded-none px-8 eyebrow">
            <a href="#formulario">Quiero arrendar</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-none border-white/30 bg-transparent eyebrow text-ink-foreground hover:bg-white/10 hover:text-ink-foreground"
          >
            <Link to="/ubicaciones">Ver centros</Link>
          </Button>
        </div>
      </PageHero>

      <Section>
        <SectionHeading
          eyebrow="Por qué CENTRAL"
          title="Una plataforma comercial en crecimiento"
          description="CENTRAL desarrolla y opera centros comerciales de escala urbana y regional bajo un mismo estándar de servicio, imagen y operación."
        />
        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2">
          {beneficios.map((b) => (
            <article key={b.title} className="bg-background p-8 md:p-10">
              <h3 className="display-md text-xl">{b.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="sand">
        <SectionHeading eyebrow="Proyectos" title="Espacios por centro comercial" />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {locations.map((loc) => (
            <article key={loc.slug} className="flex flex-col bg-background">
              <div className="hover-zoom aspect-[16/9] overflow-hidden">
                <img src={loc.image} alt={loc.name} className="image-cover" loading="lazy" width={1600} height={1100} />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-8">
                <StatusBadge status={loc.status} className="self-start" />
                <h3 className="display-md text-2xl">{loc.name}</h3>
                <p className="text-sm text-muted-foreground">{loc.description}</p>
                <dl className="grid grid-cols-2 gap-4 border-t border-border pt-4 text-sm">
                  {loc.stats.slice(0, 2).map((s) => (
                    <div key={s.label}>
                      <dt className="text-xs uppercase tracking-widest text-muted-foreground">{s.label}</dt>
                      <dd className="mt-1 font-display text-lg font-semibold">{s.value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-auto flex flex-wrap gap-3 pt-4">
                  <Button asChild variant="outline" className="rounded-none eyebrow">
                    <Link to="/ubicaciones/$slug" params={{ slug: loc.slug }}>
                      Ver centro
                    </Link>
                  </Button>
                  <Button asChild className="rounded-none eyebrow">
                    <a href="#formulario">Solicitar información</a>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeading eyebrow="Proceso" title="Cómo iniciamos" />
            <ol className="mt-10 space-y-6">
              {[
                "Envías tu solicitud con la información de tu marca.",
                "El equipo comercial evalúa la categoría y disponibilidad.",
                "Agendamos una reunión y compartimos la información del proyecto.",
                "Definimos espacio, condiciones y cronograma de apertura.",
              ].map((step, i) => (
                <li key={step} className="flex gap-5 border-t border-border pt-5">
                  <span className="font-display text-2xl font-bold text-muted-foreground">0{i + 1}</span>
                  <p className="text-sm leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>
            <p className="mt-8 text-sm text-muted-foreground">
              Contacto directo:{" "}
              <a href={`mailto:${site.leasingEmail}`} className="underline underline-offset-4">
                {site.leasingEmail}
              </a>
            </p>
          </div>
          <div>
            <SectionHeading eyebrow="Preguntas frecuentes" title="Antes de escribirnos" />
            <Accordion type="single" collapsible className="mt-10 border-t border-border">
              {faqs.map((f) => (
                <AccordionItem key={f.q} value={f.q} className="border-b border-border">
                  <AccordionTrigger className="py-5 text-left font-display text-base font-semibold uppercase tracking-tight hover:no-underline">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <Link to="/contacto" className="mt-8 inline-flex items-center gap-2 eyebrow underline-offset-8 hover:underline">
              Hablar con el equipo comercial <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </Section>

      <Section id="formulario" tone="sand" className="scroll-mt-24">
        <LeasingForm />
      </Section>

      <CtaSection
        eyebrow="Siguiente paso"
        title="Cuéntanos sobre tu marca"
        description="Completa el formulario de contacto indicando el centro de tu interés y el tipo de espacio que necesitas. Te responderemos con la información del proyecto."
        primary={{ label: "Contactar ahora", to: "/contacto" }}
        secondary={{ label: "Ver centros", to: "/ubicaciones" }}
        image={texturaImg}
      />
    </>
  );
}
