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
import { locations } from "@/data/locations";
import { site } from "@/data/site";

const tiposEspacio = [
  { value: "local", label: "Local en línea" },
  { value: "ancla", label: "Local ancla / gran formato" },
  { value: "isla", label: "Isla o kiosco" },
  { value: "gastronomia", label: "Espacio gastronómico" },
  { value: "temporal", label: "Activación temporal" },
];

const categorias = [
  { value: "moda", label: "Moda y accesorios" },
  { value: "gastronomia", label: "Gastronomía" },
  { value: "servicios", label: "Servicios" },
  { value: "entretenimiento", label: "Entretenimiento" },
  { value: "salud", label: "Salud y bienestar" },
  { value: "hogar", label: "Hogar y tecnología" },
  { value: "otro", label: "Otra categoría" },
];

const metrajes = [
  { value: "0-30", label: "Hasta 30 m²" },
  { value: "30-80", label: "30 – 80 m²" },
  { value: "80-200", label: "80 – 200 m²" },
  { value: "200+", label: "Más de 200 m²" },
];

export function LeasingForm() {
  const [centro, setCentro] = useState(locations[0]?.slug ?? "");
  const [tipo, setTipo] = useState("local");
  const [categoria, setCategoria] = useState("moda");
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
          description="Cuéntanos sobre tu marca y el espacio que necesitas. El equipo comercial de CENTRAL revisará tu solicitud y te contactará con la información del proyecto."
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
              <Label htmlFor="l-centro">Centro de interés</Label>
              <Select value={centro} onValueChange={setCentro}>
                <SelectTrigger id="l-centro" className="h-11 rounded-none">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="rounded-none">
                  {locations.map((l) => (
                    <SelectItem key={l.slug} value={l.slug}>
                      {l.shortName}
                    </SelectItem>
                  ))}
                  <SelectItem value="varios">Varios centros</SelectItem>
                </SelectContent>
              </Select>
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
              <Label htmlFor="l-categoria">Categoría comercial</Label>
              <Select value={categoria} onValueChange={setCategoria}>
                <SelectTrigger id="l-categoria" className="h-11 rounded-none">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="rounded-none">
                  {categorias.map((c) => (
                    <SelectItem key={c.value} value={c.value}>
                      {c.label}
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
              Autorizo a CENTRAL a utilizar mis datos para dar seguimiento a esta solicitud de arrendamiento.
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
              <a href={`mailto:${site.leasingEmail}`} className="hover:underline">
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
            <li className="border-t border-border pt-4">Evaluamos categoría, metraje y disponibilidad.</li>
            <li className="border-t border-border pt-4">Agendamos una reunión con el equipo comercial.</li>
          </ol>
        </div>
        <div>
          <p className="eyebrow text-muted-foreground">Centros disponibles</p>
          <ul className="mt-5 divide-y divide-border border-y border-border text-sm">
            {locations.map((l) => (
              <li key={l.slug} className="py-4">
                <p className="font-display font-semibold uppercase tracking-tight">{l.name}</p>
                <p className="mt-1 text-muted-foreground">{l.city}, {l.department}</p>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </div>
  );
}
