import { createFileRoute } from "@tanstack/react-router";
import detalleImg from "@/assets/smc-detalle.jpg";
import pasilloImg from "@/assets/smc-pasillo.jpg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { PageHero, Section, SectionHeading } from "@/components/central/primitives";
import { LeasingForm } from "@/components/central/LeasingForm";
import { CtaSection } from "@/components/central/CtaSection";
import { center } from "@/data/center";

const TITLE = "Arrendamientos | CENTRAL San Miguel Centro";
const DESCRIPTION =
  "Arrienda un local, isla o módulo de food hall en CENTRAL San Miguel Centro. Espacios en dos niveles y terraza con acompañamiento comercial.";

export const Route = createFileRoute("/arrendamientos")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: ArrendamientosPage,
});

const beneficios = [
  {
    title: "Ubicación en el centro de la ciudad",
    text: "Frente al Parque Guzmán, a tres cuadras del centro histórico y sobre una de las avenidas de mayor flujo de San Miguel.",
  },
  {
    title: "Mezcla comercial curada",
    text: "Definimos la mezcla de marcas por nivel para que cada categoría tenga demanda real y complementariedad entre operadores.",
  },
  {
    title: "Operación y mantenimiento",
    text: "Administración profesional, seguridad, limpieza y mantenimiento de áreas comunes durante todo el horario.",
  },
  {
    title: "Marketing conjunto",
    text: "Campañas de temporada, programación cultural mensual y difusión de tu marca en los canales de la plaza.",
  },
];

const faqs = [
  {
    question: "¿Cuál es el plazo mínimo de arrendamiento?",
    answer:
      "Los contratos estándar son de 36 meses para locales en línea y de 12 meses para islas y activaciones temporales.",
  },
  {
    question: "¿Los locales se entregan terminados?",
    answer:
      "Se entregan en obra gris con acometidas de agua, energía y aire acondicionado. El diseño interior corre por cuenta de la marca, bajo el manual de imagen del centro.",
  },
  {
    question: "¿Qué incluye la cuota de mantenimiento?",
    answer:
      "Seguridad, limpieza de áreas comunes, energía de áreas comunes, mantenimiento del sistema de climatización y el fondo de mercadeo.",
  },
  {
    question: "¿Cuánto tarda el proceso?",
    answer:
      "Desde la solicitud hasta la firma del contrato el proceso toma entre tres y seis semanas, según el giro y el metraje solicitado.",
  },
];

function ArrendamientosPage() {
  return (
    <>
      <PageHero
        eyebrow="Oportunidades comerciales"
        title="Arrienda en San Miguel Centro"
        description="Locales en línea, grandes formatos, islas, módulos de food hall y espacios en terraza dentro de la plaza más céntrica de San Miguel."
        image={detalleImg}
        breadcrumbs={[{ label: "Arrendamientos" }]}
      />

      <Section className="py-14 md:py-20">
        <SectionHeading
          eyebrow="Por qué aquí"
          title="Lo que ofrece la plaza"
          description={center.description}
        />
        <div className="mt-12 grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          {beneficios.map((b) => (
            <article key={b.title} className="border-t border-border pt-6">
              <h3 className="display-md text-xl">{b.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
            </article>
          ))}
        </div>
        <dl className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-10 lg:grid-cols-4">
          {center.stats.map((s) => (
            <div key={s.label}>
              <dt className="eyebrow text-muted-foreground">{s.label}</dt>
              <dd className="display-md mt-3 text-2xl md:text-3xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section tone="sand" className="py-14 md:py-20">
        <LeasingForm />
      </Section>

      <Section className="py-14 md:py-20">
        <SectionHeading eyebrow="Preguntas frecuentes" title="Sobre el proceso" />
        <Accordion type="single" collapsible className="mt-10 border-t border-border">
          {faqs.map((faq) => (
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
        eyebrow="Conoce el espacio"
        title="Agenda una visita al centro"
        description="Coordinamos un recorrido por los niveles disponibles para que veas el flujo de visitantes y los locales vacantes."
        primary={{ label: "Contactar al equipo", to: "/contacto" }}
        secondary={{ label: "Ver directorio actual", to: "/directorio" }}
        image={pasilloImg}
      />
    </>
  );
}
