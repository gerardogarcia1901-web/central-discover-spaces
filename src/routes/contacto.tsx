import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PageHero, Section, SectionHeading } from "@/components/central/primitives";
import { locations } from "@/data/locations";
import { site } from "@/data/site";
import texturaImg from "@/assets/texture-arq.jpg";

const motivos = [
  { value: "general", label: "Consulta general" },
  { value: "arrendamiento", label: "Arrendamiento comercial" },
  { value: "eventos", label: "Eventos y activaciones" },
  { value: "prensa", label: "Prensa y comunicación" },
];

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto | CENTRAL" },
      {
        name: "description",
        content: "Escríbenos para consultas generales, arrendamientos, eventos o prensa en los centros CENTRAL.",
      },
      { property: "og:title", content: "Contacto | CENTRAL" },
      { property: "og:description", content: "Canales de contacto de los centros comerciales CENTRAL." },
    ],
  }),
  component: ContactoPage,
});

function ContactoPage() {
  const [motivo, setMotivo] = useState("general");
  const [ubicacion, setUbicacion] = useState(locations[0]?.slug ?? "");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // El envío se conectará más adelante con el backend / CRM.
    toast.success("Gracias por escribirnos. Nuestro equipo te contactará pronto.");
    e.currentTarget.reset();
  };

  return (
    <>
      <PageHero
        eyebrow="Hablemos"
        title="Contacto"
        description="Resolvemos consultas de visitantes, marcas, medios y socios comerciales. Elige el motivo y te dirigimos con el equipo correcto."
        image={texturaImg}
        breadcrumbs={[{ label: "Contacto" }]}
      />

      <Section>
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeading eyebrow="Formulario" title="Escríbenos" />
            <form onSubmit={onSubmit} className="mt-10 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre completo</Label>
                  <Input id="nombre" name="nombre" required className="h-11 rounded-none" autoComplete="name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="empresa">Empresa o marca (opcional)</Label>
                  <Input id="empresa" name="empresa" className="h-11 rounded-none" autoComplete="organization" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Correo electrónico</Label>
                  <Input id="email" name="email" type="email" required className="h-11 rounded-none" autoComplete="email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefono">Teléfono</Label>
                  <Input id="telefono" name="telefono" type="tel" className="h-11 rounded-none" autoComplete="tel" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="motivo">Motivo de contacto</Label>
                  <Select value={motivo} onValueChange={setMotivo}>
                    <SelectTrigger id="motivo" className="h-11 rounded-none">
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
                <div className="space-y-2">
                  <Label htmlFor="centro">Centro comercial</Label>
                  <Select value={ubicacion} onValueChange={setUbicacion}>
                    <SelectTrigger id="centro" className="h-11 rounded-none">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent className="rounded-none">
                      {locations.map((l) => (
                        <SelectItem key={l.slug} value={l.slug}>
                          {l.shortName}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="mensaje">Mensaje</Label>
                <Textarea id="mensaje" name="mensaje" rows={6} required className="rounded-none" />
              </div>
              <p className="text-xs text-muted-foreground">
                Al enviar este formulario aceptas que utilicemos tus datos para responder tu solicitud.
              </p>
              <Button type="submit" size="lg" className="w-full rounded-none eyebrow sm:w-auto sm:px-10">
                Enviar mensaje
              </Button>
            </form>
          </div>

          <aside className="space-y-10">
            <div>
              <p className="eyebrow text-muted-foreground">Contacto general</p>
              <ul className="mt-5 space-y-3 text-sm">
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0" aria-hidden />
                  <a href={`mailto:${site.email}`} className="hover:underline">{site.email}</a>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0" aria-hidden />
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:underline">{site.phone}</a>
                </li>
                <li className="flex gap-3 text-muted-foreground">
                  <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden /> {site.address}
                </li>
              </ul>
            </div>

            <div>
              <p className="eyebrow text-muted-foreground">Arrendamientos</p>
              <p className="mt-4 text-sm text-muted-foreground">
                Para solicitudes de espacios comerciales escribe directamente a{" "}
                <a href={`mailto:${site.leasingEmail}`} className="text-foreground underline underline-offset-4">
                  {site.leasingEmail}
                </a>
                .
              </p>
            </div>

            <div>
              <p className="eyebrow text-muted-foreground">Nuestros centros</p>
              <ul className="mt-5 divide-y divide-border border-y border-border">
                {locations.map((l) => (
                  <li key={l.slug} className="py-4">
                    <p className="font-display text-sm font-semibold uppercase tracking-tight">{l.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{l.address}</p>
                    <p className="mt-1 text-sm">
                      <a href={`tel:${l.phone.replace(/\s/g, "")}`} className="hover:underline">{l.phone}</a>
                    </p>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="eyebrow text-muted-foreground">Redes sociales</p>
              <ul className="mt-5 flex flex-wrap gap-3">
                {site.social.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} className="border border-border px-4 py-2 eyebrow transition-colors hover:border-foreground">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}
