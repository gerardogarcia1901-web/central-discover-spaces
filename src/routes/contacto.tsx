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
    setEstado("error");
    toast.error("No pudimos enviar tu mensaje. Intenta nuevamente.");
  };

  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Contacto"
        description="Estamos para ayudarte. Escríbenos para consultas, comentarios, sugerencias u oportunidades comerciales."
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
                  <select
                    id="c-ubicacion"
                    name="ubicacion"
                    defaultValue="San Miguel Centro"
                    className="h-11 w-full rounded-none border border-input bg-background px-3 text-sm"
                  >
                    <option value="CENTRAL general">CENTRAL general</option>
                    <option value="San Miguel Centro">San Miguel Centro</option>
                    <option value="Santa Rosa de Lima">Santa Rosa de Lima</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="c-asunto">Asunto</Label>
                  <select
                    id="c-asunto"
                    name="asunto"
                    required
                    defaultValue="Información general"
                    className="h-11 w-full rounded-none border border-input bg-background px-3 text-sm"
                  >
                    <option value="Información general">Información general</option>
                    <option value="Comentario o sugerencia">Comentario o sugerencia</option>
                    <option value="Promociones y eventos">Promociones y eventos</option>
                    <option value="Arrendamiento">Arrendamiento</option>
                    <option value="Privacidad y datos personales">Privacidad y datos personales</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="c-mensaje">Mensaje</Label>
                <Textarea id="c-mensaje" name="mensaje" rows={6} required className="rounded-none" />
              </div>
              <div className="flex items-start gap-3">
                <Checkbox id="c-acepta" checked={acepta} onCheckedChange={(v) => setAcepta(v === true)} className="mt-0.5 rounded-none" />
                <div className="text-sm leading-relaxed text-muted-foreground">
                  <Label htmlFor="c-acepta" className="inline cursor-pointer text-sm font-normal leading-relaxed text-muted-foreground">He leído la </Label>
                  <Link to="/privacidad" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-primary">Política de Privacidad</Link>
                  <Label htmlFor="c-acepta" className="inline cursor-pointer text-sm font-normal leading-relaxed text-muted-foreground"> y autorizo el tratamiento de mis datos para atender esta consulta.</Label>
                  <p className="mt-1">Consulta también los <Link to="/terminos" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-primary">Términos y Condiciones</Link>.</p>
                </div>
              </div>
              {estado === "ok" && (
                <p role="status" className="border border-border bg-sand p-4 text-sm">
                  Mensaje enviado. Gracias por escribirnos. Hemos recibido tu consulta.
                </p>
              )}
              {estado === "error" && (
                <p role="alert" className="border border-destructive p-4 text-sm text-destructive">
                  No pudimos enviar tu mensaje. Intenta nuevamente.
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
                    {site.whatsapp}
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
                    {site.instagram}
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
              <div className="mt-6 flex flex-wrap gap-3">
                <Button asChild size="sm" className="rounded-none eyebrow">
                  <a href={site.whatsappUrl} target="_blank" rel="noreferrer">Escribir por WhatsApp</a>
                </Button>
                <Button asChild size="sm" variant="outline" className="rounded-none eyebrow">
                  <a href={`mailto:${site.email}`}>Enviar correo</a>
                </Button>
                <Button asChild size="sm" variant="outline" className="rounded-none eyebrow">
                  <a href={site.instagramUrl} target="_blank" rel="noreferrer">Ver Instagram</a>
                </Button>
              </div>
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
