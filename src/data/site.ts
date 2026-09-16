/** Sitio matriz de la marca CENTRAL (todas las ubicaciones). */
export const BRAND_URL = "https://central.example.sv";
export const SANTA_ROSA_URL = `${BRAND_URL}/ubicaciones/santa-rosa-de-lima`;

export const site = {
  name: "CENTRAL",
  subtitle: "San Miguel Centro",
  fullName: "CENTRAL San Miguel Centro",
  operator: "Grupo Galo",
  tagline: "El corazón comercial de San Miguel",
  description:
    "Plaza comercial urbana y peatonal en el Centro de San Miguel, frente al nuevo Mercado Central: cerca de todo y conectada con el movimiento de la ciudad.",
  email: "info@grupogalo.net",
  whatsapp: "7697-9921",
  whatsappUrl: "https://wa.me/50376979921",
  address: "2da Calle Poniente y 1ra Avenida Norte, Centro de San Miguel, El Salvador",
  addressShort: "2da C. Pte. y 1ra Av. Nte., Centro de San Miguel",
  brandUrl: BRAND_URL,
  /** Redes oficiales pendientes de confirmación por Grupo Galo. */
  social: [] as { label: string; href: string }[],
} as const;

export const mainNav = [
  { label: "Inicio", to: "/" },
  { label: "Comercios", to: "/comercios" },
  { label: "Promociones", to: "/promociones" },
  { label: "Novedades", to: "/novedades" },
  { label: "Visítanos", to: "/visitanos" },
  { label: "Arrendamientos", to: "/arrendamientos" },
] as const;

export const legalLinks = [
  { label: "Contacto", to: "/contacto" },
] as const;
