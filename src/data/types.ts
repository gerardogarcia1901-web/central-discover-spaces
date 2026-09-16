// Modelo de contenido de CENTRAL San Miguel Centro.
// Refleja únicamente la información oficial del Brief de Contenido Web
// (Grupo Galo, septiembre 2026). Toda la UI consume estas interfaces.

export interface Category {
  slug: string;
  name: string;
  description: string;
}

/** Día o rango de días y su horario, p. ej. "Lunes a sábado" / "8:00 a.m. – 5:00 p.m." */
export interface DayHours {
  label: string;
  value: string;
}

export interface Store {
  slug: string;
  name: string;
  categorySlug: string;
  /** Número de local dentro de la plaza, p. ej. "Local 3". */
  local: string;
  /** Horario propio del comercio. */
  hours: DayHours[];
  phone?: string;
  whatsapp?: string;
  /** Nota de pedidos o canal de venta, p. ej. "Pedidos mediante PedidosYa". */
  orderNote?: string;
  website?: string;
  instagram?: string;
  facebook?: string;
  /** Solo cuando Grupo Galo proporcione texto oficial. */
  description?: string;
  /** Fotografía oficial; si falta, la UI usa un placeholder. */
  image?: string;
  /** Logotipo oficial; si falta, la UI usa las iniciales. */
  logo?: string;
  logoText: string;
  featured?: boolean;
}

export interface Promotion {
  slug: string;
  title: string;
  description: string;
  /** Tipo de contenido: promoción de comercio, campaña conjunta, temporada. */
  kind: string;
  validity: string;
  /** Comercio asociado, cuando aplique. */
  storeSlug?: string;
  image?: string;
}

export interface Article {
  slug: string;
  title: string;
  summary: string;
  body: string[];
  category: string;
  date: string;
  displayDate: string;
  image?: string;
  author?: string;
}

/* ---------- Información de la plaza ---------- */

export interface DirectionReference {
  label: string;
  description: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Stat {
  label: string;
  value: string;
}

export interface CenterInfo {
  name: string;
  shortName: string;
  city: string;
  department: string;
  tagline: string;
  description: string;
  longDescription: string[];
  address: string;
  addressDetail: string;
  mapsUrl: string;
  mapsEmbedUrl: string;
  /** Aviso oficial: los horarios varían según cada comercio. */
  hoursNote: string;
  stats: Stat[];
  directions: DirectionReference[];
  faqs: Faq[];
}
