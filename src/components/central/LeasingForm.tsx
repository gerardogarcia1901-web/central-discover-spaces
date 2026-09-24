import { useState, type FormEvent } from "react";
import { Mail, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { SectionHeading } from "@/components/central/primitives";
import { site } from "@/data/site";
import { center } from "@/data/center";

export function LeasingForm() {
  const [acepta, setAcepta] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!acepta) {
      toast.error("Debes aceptar el uso de tus datos para continuar.");
      return;
    }
    toast.success("Solicitud enviada. El equipo de Grupo Galo te contactará pronto.");
    e.currentTarget.reset();
    setAcepta(false);
  };

  return (
    <div className="grid gap-14 lg:grid-cols-[1.25fr_1fr]">
      <div>
        <SectionHeading
          eyebrow="Formulario de arrendamiento"
          title="Solicitar información"
          description={`Cuéntanos sobre tu marca y el espacio que necesitas. El equipo de ${site.operator} revisará tu solicitud y te contactará.`}
        />

        <form onSubmit={onSubmit} className="mt-10 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="l-proyecto">Proyecto de interés</Label>
            <Input
              id="l-proyecto"
              name="proyecto"
              value={site.fullName}
              readOnly
              aria-readonly
              className="h-11 rounded-none bg-sand"
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="l-nombre">Nombre</Label>
              <Input id="l-nombre" name="nombre" required autoComplete="name" className="h-11 rounded-none" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="l-marca">Empresa o marca</Label>
              <Input id="l-marca" name="marca" required autoComplete="organization" className="h-11 rounded-none" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="l-giro">Giro comercial</Label>
              <Input id="l-giro" name="giro" required className="h-11 rounded-none" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="l-tel">Teléfono</Label>
              <Input id="l-tel" name="telefono" type="tel" required autoComplete="tel" className="h-11 rounded-none" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="l-email">Correo</Label>
              <Input
                id="l-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="h-11 rounded-none"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="l-espacio">Espacio requerido</Label>
              <Input
                id="l-espacio"
                name="espacio"
                required
                placeholder="Ej. local a pie de calle, m² aproximados"
                className="h-11 rounded-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="l-mensaje">Comentarios</Label>
            <Textarea
              id="l-mensaje"
              name="comentarios"
              rows={6}
              placeholder="Cuéntanos sobre tu marca, tu operación actual y la fecha estimada de apertura."
              className="rounded-none"
            />
          </div>

          <div className="flex items-start gap-3">
            <Checkbox
              id="l-acepta"
              checked={acepta}
              onCheckedChange={(v) => setAcepta(v === true)}
              className="mt-0.5 rounded-none"
            />
            <Label htmlFor="l-acepta" className="text-xs font-normal leading-relaxed text-muted-foreground">
              He leído la Política de Privacidad y autorizo a Grupo Galo, S.A. de C.V. a tratar mis datos para atender esta solicitud.
            </Label>
          </div>

          <Button type="submit" size="lg" className="w-full rounded-none eyebrow sm:w-auto sm:px-12">
            Enviar solicitud
          </Button>
        </form>
      </div>

      <aside className="space-y-10 border-t border-border pt-10 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
        <div>
          <p className="eyebrow text-muted-foreground">Contacto directo</p>
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
          </ul>
        </div>
        <div>
          <p className="eyebrow text-muted-foreground">Qué sigue</p>
          <ol className="mt-5 space-y-4 text-sm text-muted-foreground">
            <li className="border-t border-border pt-4">Confirmamos la recepción de tu solicitud.</li>
            <li className="border-t border-border pt-4">Revisamos tu giro comercial y el espacio requerido.</li>
            <li className="border-t border-border pt-4">
              El equipo de {site.operator} te contacta con la información disponible.
            </li>
          </ol>
        </div>
        <div>
          <p className="eyebrow text-muted-foreground">La plaza</p>
          <dl className="mt-5 grid grid-cols-2 gap-6">
            {center.stats.map((s) => (
              <div key={s.label}>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">{s.label}</dt>
                <dd className="display-md mt-2 text-2xl">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </aside>
    </div>
  );
}
