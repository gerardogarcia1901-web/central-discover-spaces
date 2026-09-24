import { createFileRoute, Link } from "@tanstack/react-router";
import { Clock, Footprints, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero, Section } from "@/components/central/primitives";
import { CtaSection } from "@/components/central/CtaSection";
import { site } from "@/data/site";

const TITLE = "Servicios | CENTRAL San Miguel Centro";
const DESCRIPTION =
  "Horarios por comercio, acceso peatonal y contacto de Central San Miguel Centro, plaza comercial en el Centro de San Miguel.";

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
  }),
  component: ServiciosPage,
});

function ServiciosPage() {
  return (
    <>
      <PageHero
        eyebrow="Central San Miguel Centro"
        title="Servicios"
        description="Cada comercio maneja su propio horario. Consulta el Directorio para conocer los horarios de atención."
        breadcrumbs={[{ label: "Servicios" }]}
      >
        <Button asChild size="lg" className="rounded-none px-8 eyebrow">
          <Link to="/comercios">Ver directorio</Link>
        </Button>
      </PageHero>

      <Section className="py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="rule-line pt-5">
            <p className="eyebrow flex items-center gap-2 text-muted-foreground">
              <Clock className="size-4" aria-hidden /> Horarios
            </p>
            <p className="mt-4 leading-relaxed">
              Cada comercio maneja su propio horario. Consulta el Directorio para conocer los horarios de atención.
            </p>
          </div>
          <div className="rule-line pt-5">
            <p className="eyebrow flex items-center gap-2 text-muted-foreground">
              <Footprints className="size-4" aria-hidden /> Acceso
            </p>
            <p className="mt-4 leading-relaxed">
              Central San Miguel Centro es una plaza peatonal y no cuenta con parqueo propio.
            </p>
          </div>
          <div className="rule-line pt-5">
            <p className="eyebrow text-muted-foreground">Contacto</p>
            <ul className="mt-4 space-y-3">
              <li className="flex gap-3">
                <MessageCircle className="mt-1 size-4 shrink-0" aria-hidden />
                <a href={site.whatsappUrl} target="_blank" rel="noreferrer" className="hover:underline">
                  WhatsApp {site.whatsapp}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-1 size-4 shrink-0" aria-hidden />
                <a href={`mailto:${site.email}`} className="break-all hover:underline">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <CtaSection
        eyebrow="Cómo llegar"
        title="2da Calle Poniente y 1ra Avenida Norte"
        description="Frente al nuevo Mercado Central, ex Parque Barrios."
        primary={{ label: "Cómo llegar", to: "/visitanos" }}
        secondary={{ label: "Ver directorio", to: "/comercios" }}
      />
    </>
  );
}
