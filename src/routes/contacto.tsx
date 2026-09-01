import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Clock, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import detalleImg from "@/assets/smc-detalle.jpg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PageHero, Section } from "@/components/central/primitives";
import { center } from "@/data/center";
import { site, BRAND_URL } from "@/data/site";

const TITLE = "Contacto | CENTRAL San Miguel Centro";
const DESCRIPTION =
  "Escríbenos o llámanos: administración, servicio al visitante, objetos perdidos, eventos y arrendamientos de CENTRAL San Miguel Centro.";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/contacto" }],
  }),
  component: ContactoPage,
});

const motivos = [
  { value: "visitante", label: "Servicio al visitante" },
  { value: "objetos", label: "Objetos perdidos" },
  { value: "eventos", label: "Eventos y activaciones" },
  { value: "arrendamiento", label: "Arrendamiento de espacios" },
  { value: "proveedor", label: "Proveedores" },
  { value: "otro", label: "Otro tema" },
];

function ContactoPage() {
  const [motivo, setMotivo] = useState("visitante");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Mensaje enviado. Te responderemos en un máximo de dos días hábiles.");
    e.currentTarget.reset();
  };

  return (
    <>
      <PageHero
        eyebrow="Estamos para ayudarte"
        title="Contacto"
        description="Consultas sobre tu visita, objetos perdidos, eventos, proveedores o arrendamientos de CENTRAL San Miguel Centro."
        image={detalleImg}
        breadcrumbs={[{ label: "Contacto" }]}
      />

      <Section className="py-14 md:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.25fr_1fr]">
          <div>
            <h2 className="display-md">Escríbenos</h2>
            <form onSubmit={onSubmit} className="mt-8 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="c-nombre">Nombre completo</Label>
                  <Input id="c-nombre" name="nombre" required autoComplete="name" className="h-11 rounded-none" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="c-email">Correo electrónico</Label>
                  <Input id="c-email" name="email" type="email" required autoComplete="email" className="h-11 rounded-none" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="c-tel">Teléfono</Label>
                  <Input id="c-tel" name="telefono" type="tel" autoComplete="tel" className="h-11 rounded-none" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="c-motivo">Motivo de contacto</Label>
                  <Select value={motivo} onValueChange={setMotivo}>
                    <SelectTrigger id="c-motivo" className="h-11 rounded-none">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="rounded-none">
                      {motivos.map((m) => (
                        <SelectItem key={m.value} value={m.value}>
                          {m.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="c-mensaje">Mensaje</Label>
                <Textarea id="c-mensaje" name="mensaje" rows={6} required className="rounded-none" />
              </div>
              <Button type="submit" size="lg" className="w-full rounded-none eyebrow sm:w-auto sm:px-12">
                Enviar mensaje
              </Button>
              <p className="text-xs text-muted-foreground">
                Si tu consulta es sobre arrendamiento de un local, usa el{" "}
                <Link to="/arrendamientos" className="underline underline-offset-4">
                  formulario de arrendamientos
                </Link>{" "}
                para agilizar la respuesta.
              </p>
            </form>
          </div>

          <aside className="space-y-10 border-t border-border pt-10 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <div>
              <p className="eyebrow text-muted-foreground">Administración de la plaza</p>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />
                  <span>{center.address}</span>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0" aria-hidden />
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:underline">
                    {site.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0" aria-hidden />
                  <a href={`mailto:${site.email}`} className="break-all hover:underline">
                    {site.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Clock className="mt-0.5 size-4 shrink-0" aria-hidden />
                  <span>Atención administrativa de lunes a viernes, 8:00 a.m. – 5:00 p.m.</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="eyebrow text-muted-foreground">Arrendamientos</p>
              <a href={`mailto:${site.leasingEmail}`} className="mt-4 block break-all text-sm hover:underline">
                {site.leasingEmail}
              </a>
            </div>

            <div>
              <p className="eyebrow text-muted-foreground">Redes sociales</p>
              <ul className="mt-5 grid grid-cols-2 gap-3 text-sm">
                {site.social.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 border border-border px-4 py-3 transition-colors hover:border-foreground"
                    >
                      {s.label}
                      <ExternalLink className="size-3.5" aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="eyebrow text-muted-foreground">Otros CENTRAL</p>
              <a
                href={BRAND_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm hover:underline"
              >
                Ver todos los CENTRAL
                <ExternalLink className="size-3.5" aria-hidden />
              </a>
            </div>

            <div>
              <p className="eyebrow text-muted-foreground">Horarios al público</p>
              <dl className="mt-5 divide-y divide-border border-y border-border text-sm">
                {center.hours.map((h) => (
                  <div key={h.label} className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-muted-foreground">{h.label}</dt>
                    <dd>{h.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
