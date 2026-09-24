import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Clock, Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageHero, Section, SectionHeading } from "@/components/central/primitives";
import { center } from "@/data/center";
import { site } from "@/data/site";

const TITLE = "Contacto | CENTRAL San Miguel Centro";
const DESCRIPTION =
  "Escríbenos: WhatsApp 7697-9921 o info@grupogalo.net. Contacto de CENTRAL San Miguel Centro, plaza comercial en el Centro de San Miguel.";

export const Route = createFileRoute("/contacto")({
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
  component: ContactoPage,
});

function ContactoPage() {
  const [acepta, setAcepta] = useState(false);
  const [estado, setEstado] = useState<"idle" | "ok" | "error">("idle");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity() || !acepta) {
      setEstado("error");
      toast.error(!acepta ? "Debes aceptar la política de privacidad para enviar tu mensaje." : "Revisa los campos obligatorios.");
      return;
    }
    setEstado("ok");
    toast.success("Mensaje enviado. Te responderemos pronto.");
    form.reset();
    setAcepta(false);
  };

  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Hablemos"
        description={`Escríbenos al WhatsApp ${site.whatsapp} o al correo ${site.email} y te ayudamos con tu consulta sobre la plaza.`}
        breadcrumbs={[{ label: "Contacto" }]}
      />

      <Section className="py-14 md:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <SectionHeading eyebrow="Formulario" title="Envíanos un mensaje" />
            <form onSubmit={onSubmit} noValidate className="mt-10 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="c-nombre">Nombre completo</Label>
                  <Input id="c-nombre" name="nombre" required autoComplete="name" className="h-11 rounded-none" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="c-email">Correo electrónico</Label>
                  <Input id="c-email" name="email" type="email" required autoComplete="email" className="h-11 rounded-none" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="c-tel">Teléfono</Label>
                  <Input id="c-tel" name="telefono" type="tel" required autoComplete="tel" className="h-11 rounded-none" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="c-ubicacion">Ubicación de interés</Label>
                  <Input id="c-ubicacion" name="ubicacion" value={site.fullName} readOnly aria-readonly className="h-11 rounded-none bg-sand" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="c-asunto">Asunto</Label>
                  <Input id="c-asunto" name="asunto" required className="h-11 rounded-none" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="c-mensaje">Mensaje</Label>
                <Textarea id="c-mensaje" name="mensaje" rows={6} required className="rounded-none" />
              </div>
              <div className="flex items-start gap-3">
                <Checkbox id="c-acepta" checked={acepta} onCheckedChange={(v) => setAcepta(v === true)} className="mt-0.5 rounded-none" />
                <Label htmlFor="c-acepta" className="text-sm font-normal leading-relaxed text-muted-foreground">
                  Acepto que {site.operator} utilice mis datos para responder a mi mensaje, de acuerdo con su política de privacidad.
                </Label>
              </div>
              {estado === "ok" && (
                <p role="status" className="border border-border bg-sand p-4 text-sm">
                  Gracias. Recibimos tu mensaje y te responderemos pronto.
                </p>
              )}
              {estado === "error" && (
                <p role="alert" className="border border-destructive p-4 text-sm text-destructive">
                  No pudimos enviar tu mensaje. Completa todos los campos y acepta la política de privacidad.
                </p>
              )}
              <Button type="submit" size="lg" className="w-full rounded-none eyebrow sm:w-auto sm:px-12">
                Enviar mensaje
              </Button>
            </form>
          </div>

          <aside className="space-y-10 border-t border-border pt-10 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <div>
              <p className="eyebrow text-muted-foreground">Contacto</p>
              <ul className="mt-5 space-y-3 text-sm">
                <li className="flex gap-3">
                  <MessageCircle className="mt-0.5 size-4 shrink-0" aria-hidden />
                  <a href={site.whatsappUrl} target="_blank" rel="noreferrer" className="hover:underline">
                    WhatsApp {site.whatsapp}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0" aria-hidden />
                  <a href={`mailto:${site.email}`} className="break-all hover:underline">
                    {site.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Instagram className="mt-0.5 size-4 shrink-0" aria-hidden />
                  <a href={site.instagramUrl} target="_blank" rel="noreferrer" className="hover:underline">
                    Instagram {site.instagram}
                  </a>
                </li>
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />
                  <span>{center.address}</span>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 size-4 shrink-0" aria-hidden />
                  <span className="text-muted-foreground">{center.hoursNote}</span>
                </li>
              </ul>
            </div>
            <div>
              <p className="eyebrow text-muted-foreground">Enlaces útiles</p>
              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <Link to="/comercios" className="underline-offset-8 hover:underline">
                    Directorio
                  </Link>
                </li>
                <li>
                  <Link to="/visitanos" className="underline-offset-8 hover:underline">
                    Cómo llegar
                  </Link>
                </li>
                <li>
                  <Link to="/arrendamientos" className="underline-offset-8 hover:underline">
                    Arrendamiento
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
