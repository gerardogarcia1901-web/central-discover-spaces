/** Sitio matriz de la marca CENTRAL (todas las ubicaciones). */
export const BRAND_URL = "https://central.example.sv";

export const site = {
  name: "CENTRAL",
  subtitle: "San Miguel Centro",
  fullName: "CENTRAL San Miguel Centro",
  operator: "Grupo Galo",
  tagline: "El corazón comercial de San Miguel",
  description:
    "Encuentra comercios, gastronomía y servicios en el centro de San Miguel.",
  email: "info@grupogalo.net",
  whatsapp: "7697-9921",
  whatsappUrl: "https://wa.me/50376979921",
  address: "2da Calle Poniente y 1ra Avenida Norte, Centro de San Miguel, El Salvador",
  addressShort: "2da C. Pte. y 1ra Av. Nte., Centro de San Miguel",
  brandUrl: BRAND_URL,
  instagram: "@central.elsalvador",
  instagramUrl: "https://www.instagram.com/central.elsalvador/",
  social: [{ label: "Instagram @central.elsalvador", href: "https://www.instagram.com/central.elsalvador/" }],
} as const;

export const mainNav = [
  { label: "Inicio", to: "/" },
  { label: "Directorio", to: "/comercios" },
  { label: "Gastronomía", to: "/gastronomia" },
  { label: "Promociones", to: "/promociones" },
  { label: "Eventos", to: "/eventos" },
  { label: "Servicios", to: "/servicios" },
  { label: "Cómo llegar", to: "/visitanos" },
  { label: "Arrendamiento", to: "/arrendamientos" },
  { label: "Contacto", to: "/contacto" },
] as const;

export const legalLinks = [
  { label: "Novedades", to: "/novedades" },
  { label: "Política de Privacidad", to: "/privacidad" },
  { label: "Términos y Condiciones", to: "/terminos" },
] as const;
