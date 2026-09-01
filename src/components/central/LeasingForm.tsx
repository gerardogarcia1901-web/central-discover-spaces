import { useState, type FormEvent } from "react";
import { Mail, Phone } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SectionHeading } from "@/components/central/primitives";
import { site } from "@/data/site";
import { center } from "@/data/center";

const tiposEspacio = [
  { value: "local", label: "Local en línea" },
  { value: "ancla", label: "Local ancla / gran formato" },
  { value: "isla", label: "Isla o kiosco" },
  { value: "foodhall", label: "Módulo de food hall" },
  { value: "terraza", label: "Local en terraza" },
  { value: "temporal", label: "Activación temporal" },
];

const giros = [
  { value: "moda", label: "Moda y accesorios" },
  { value: "gastronomia", label: "Gastronomía" },
  { value: "belleza", label: "Belleza y cuidado personal" },
  { value: "tecnologia", label: "Tecnología" },
  { value: "hogar", label: "Hogar y decoración" },
  { value: "servicios", label: "Servicios financieros" },
  { value: "salud", label: "Salud y bienestar" },
  { value: "entretenimiento", label: "Entretenimiento" },
  { value: "otro", label: "Otro giro" },
];

const metrajes = [
  { value: "0-30", label: "Hasta 30 m²" },
  { value: "30-80", label: "30 – 80 m²" },
  { value: "80-200", label: "80 – 200 m²" },
  { value: "200+", label: "Más de 200 m²" },
];

export function LeasingForm() {
  const [tipo, setTipo] = useState("local");
  const [giro, setGiro] = useState("moda");
  const [metraje, setMetraje] = useState("30-80");
  const [acepta, setAcepta] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!acepta) {
      toast.error("Debes aceptar el uso de tus datos para continuar.");
      return;
    }
    // El envío se conectará más adelante con el backend / CRM.
    toast.success("Solicitud enviada. El equipo comercial te contactará pronto.");
    e.currentTarget.reset();
    setAcepta(false);
  };

  return (
    <div className="grid gap-14 lg:grid-cols-[1.25fr_1fr]">
      <div>
        <SectionHeading
          eyebrow="Formulario de arrendamiento"
          title="Solicita tu espacio"
          description={`Cuéntanos sobre tu marca y el espacio que necesitas. El equipo comercial de ${site.fullName} revisará tu solicitud y te contactará con disponibilidad y condiciones.`}
        />

        <form onSubmit={onSubmit} className="mt-10 space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="l-nombre">Nombre completo</Label>
              <Input id="l-nombre" name="nombre" required autoComplete="name" className="h-11 rounded-none" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="l-marca">Nombre de la marca o empresa</Label>
              <Input id="l-marca" name="marca" required autoComplete="organization" className="h-11 rounded-none" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="l-email">Correo electrónico</Label>
              <Input id="l-email" name="email" type="email" required autoComplete="email" className="h-11 rounded-none" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="l-tel">Teléfono / WhatsApp</Label>
              <Input id="l-tel" name="telefono" type="tel" required autoComplete="tel" className="h-11 rounded-none" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="l-tipo">Tipo de espacio</Label>
              <Select value={tipo} onValueChange={setTipo}>
                <SelectTrigger id="l-tipo" className="h-11 rounded-none">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="rounded-none">
                  {tiposEspacio.map((t) => (
                    <SelectItem key={t.value} value={t.value}>
                      {t.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="l-metraje">Metraje aproximado</Label>
              <Select value={metraje} onValueChange={setMetraje}>
                <SelectTrigger id="l-metraje" className="h-11 rounded-none">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="rounded-none">
                  {metrajes.map((m) => (
                    <SelectItem key={m.value} value={m.value}>
                      {m.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="l-giro">Giro comercial</Label>
              <Select value={giro} onValueChange={setGiro}>
                <SelectTrigger id="l-giro" className="h-11 rounded-none">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="rounded-none">
                  {giros.map((g) => (
                    <SelectItem key={g.value} value={g.value}>
                      {g.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="l-mensaje">Cuéntanos sobre tu marca</Label>
            <Textarea
              id="l-mensaje"
              name="mensaje"
              rows={6}
              required
              placeholder="Años de operación, sucursales actuales, productos o servicios y fecha estimada de apertura."
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
              Autorizo a {site.fullName} a utilizar mis datos para dar seguimiento a esta solicitud de arrendamiento.
            </Label>
          </div>

          <Button type="submit" size="lg" className="w-full rounded-none eyebrow sm:w-auto sm:px-12">
            Enviar solicitud
          </Button>
        </form>
      </div>

      <aside className="space-y-10 border-t border-border pt-10 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
        <div>
          <p className="eyebrow text-muted-foreground">Equipo comercial</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex gap-3">
              <Mail className="mt-0.5 size-4 shrink-0" aria-hidden />
              <a href={`mailto:${site.leasingEmail}`} className="break-all hover:underline">
                {site.leasingEmail}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 size-4 shrink-0" aria-hidden />
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:underline">
                {site.phone}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-muted-foreground">Qué sigue</p>
          <ol className="mt-5 space-y-4 text-sm text-muted-foreground">
            <li className="border-t border-border pt-4">Confirmamos la recepción de tu solicitud.</li>
            <li className="border-t border-border pt-4">Evaluamos giro, metraje y disponibilidad por nivel.</li>
            <li className="border-t border-border pt-4">Agendamos una visita al espacio y presentamos condiciones.</li>
          </ol>
        </div>
        <div>
          <p className="eyebrow text-muted-foreground">Espacios por nivel</p>
          <ul className="mt-5 divide-y divide-border border-y border-border text-sm">
            {center.levels.map((l) => (
              <li key={l.slug} className="py-4">
                <p className="font-display font-semibold uppercase tracking-tight">{l.name}</p>
                <p className="mt-1 text-muted-foreground">{l.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-muted-foreground">La plaza en números</p>
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
