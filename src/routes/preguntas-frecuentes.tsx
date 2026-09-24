import { createFileRoute, Link } from "@tanstack/react-router";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { PageHero, Section } from "@/components/central/primitives";

const TITLE = "Preguntas frecuentes | CENTRAL San Miguel Centro";
const DESCRIPTION = "Respuestas sobre ubicación, horarios, comercios, gastronomía, contacto y arrendamiento en Central San Miguel Centro.";

const questions = [
  { question: "¿Dónde está Central San Miguel Centro?", answer: "En 2da Calle Poniente y 1ra Avenida Norte, Centro de San Miguel, frente al nuevo Mercado Central, ex Parque Barrios." },
  { question: "¿Central San Miguel Centro tiene parqueo?", answer: "No. Central San Miguel Centro es una plaza peatonal y no cuenta con parqueo propio." },
  { question: "¿Cuál es el horario?", answer: "La plaza no maneja un único horario general. Cada comercio tiene su propio horario; consúltalo en el Directorio." },
  { question: "¿Qué comercios hay?", answer: "Actualmente encuentras PAR2, Farmacia La Buena, Las Ollitas, Pizza La Siciliana y Cora Store." },
  { question: "¿Qué opciones de gastronomía hay?", answer: "Las Ollitas y Pizza La Siciliana forman parte de la oferta gastronómica actual." },
  { question: "¿Dónde puedo ver promociones y eventos?", answer: "Consulta las secciones Promociones y Eventos de Central San Miguel Centro." },
  { question: "¿Cómo llego?", answer: "Puedes abrir la ruta directamente en Google Maps o Waze desde la sección Cómo llegar." },
  { question: "¿Cómo contacto a CENTRAL?", answer: "Escríbenos por WhatsApp al 7697-9921 o al correo info@grupogalo.net." },
  { question: "¿Cómo puedo consultar por arrendamiento?", answer: "Completa el formulario de Arrendamiento de Central San Miguel Centro." },
] as const;

export const Route = createFileRoute("/preguntas-frecuentes")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://central-discover-spaces.lovable.app/preguntas-frecuentes" }],
  }),
  component: PreguntasFrecuentesPage,
});

function PreguntasFrecuentesPage() {
  return (
    <>
      <PageHero eyebrow="Ayuda" title="Preguntas frecuentes" breadcrumbs={[{ label: "Preguntas frecuentes" }]} />
      <Section className="py-14 md:py-20">
        <Accordion type="single" collapsible className="mx-auto max-w-4xl border-t border-border">
          {questions.map((item) => (
            <AccordionItem key={item.question} value={item.question} className="border-b border-border">
              <AccordionTrigger className="py-6 text-left font-display text-base font-semibold hover:no-underline md:text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="max-w-3xl pb-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mx-auto mt-10 flex max-w-4xl flex-wrap gap-3">
          <Button asChild className="rounded-none eyebrow"><Link to="/visitanos">Cómo llegar</Link></Button>
          <Button asChild variant="outline" className="rounded-none eyebrow"><Link to="/contacto">Contacto</Link></Button>
        </div>
      </Section>
    </>
  );
}