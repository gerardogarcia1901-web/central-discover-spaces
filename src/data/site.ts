/** Sitio de marca CENTRAL (todas las plazas del país). */
export const BRAND_URL = "https://central.example.sv";

export const site = {
  name: "CENTRAL",
  subtitle: "San Miguel Centro",
  fullName: "CENTRAL San Miguel Centro",
  operator: "Grupo Galo",
  tagline: "El punto de encuentro de San Miguel",
  description:
    "CENTRAL San Miguel Centro reúne más de 30 marcas, un food hall con 12 conceptos, cine, servicios financieros y una plaza de eventos abierta a la ciudad.",
  email: "hola@sanmiguelcentro.central.com.sv",
  leasingEmail: "arrendamientos@sanmiguelcentro.central.com.sv",
  phone: "+503 2660 1000",
  whatsapp: "+503 7660 1000",
  address: "Avenida Roosevelt y 8ª Calle Poniente, Barrio El Calvario, San Miguel",
  addressShort: "Av. Roosevelt y 8ª Calle Pte., San Miguel",
  mapsUrl: "https://maps.google.com/?q=San+Miguel,+El+Salvador",
  brandUrl: BRAND_URL,
  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "TikTok", href: "https://tiktok.com" },
    { label: "WhatsApp", href: "https://wa.me/50376601000" },
  ],
} as const;

export const mainNav = [
  { label: "Inicio", to: "/" },
  { label: "Directorio", to: "/directorio" },
  { label: "Gastronomía", to: "/gastronomia" },
  { label: "Promociones", to: "/promociones" },
  { label: "Eventos", to: "/eventos" },
  { label: "Novedades", to: "/novedades" },
  { label: "Visítanos", to: "/visitanos" },
  { label: "Servicios y amenidades", to: "/servicios" },
  { label: "Arrendamientos", to: "/arrendamientos" },
  { label: "Contacto", to: "/contacto" },
] as const;

export const legalLinks = [
  { label: "Política de privacidad", to: "/contacto" },
  { label: "Términos y condiciones", to: "/contacto" },
  { label: "Reglamento de visitantes", to: "/contacto" },
] as const;
