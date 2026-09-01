export const site = {
  name: "CENTRAL",
  operator: "Grupo Galo",
  tagline: "Vive tus momentos",
  description:
    "CENTRAL es la marca de centros comerciales de Grupo Galo en El Salvador: compras, gastronomía, experiencias y entretenimiento en un mismo destino.",
  email: "info@central.com.sv",
  leasingEmail: "arrendamientos@central.com.sv",
  phone: "+503 2600 0000",
  whatsapp: "+503 7000 0000",
  address: "Oficinas corporativas Grupo Galo, San Salvador, El Salvador",
  social: [
    { label: "Instagram", href: "#" },
    { label: "Facebook", href: "#" },
    { label: "TikTok", href: "#" },
    { label: "LinkedIn", href: "#" },
  ],
} as const;

export const mainNav = [
  { label: "Centros", to: "/ubicaciones" },
  { label: "Marcas y tiendas", to: "/directorio" },
  { label: "Gastronomía", to: "/gastronomia" },
  { label: "Promociones", to: "/promociones" },
  { label: "Eventos", to: "/eventos" },
  { label: "Novedades", to: "/novedades" },
  { label: "Arrendamientos", to: "/arrendamientos" },
] as const;

export const legalLinks = [
  { label: "Política de privacidad", to: "/contacto" },
  { label: "Términos y condiciones", to: "/contacto" },
  { label: "Reglamento de visitantes", to: "/contacto" },
] as const;
