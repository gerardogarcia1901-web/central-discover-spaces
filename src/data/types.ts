// Modelo de contenido de CENTRAL San Miguel Centro.
// Estos tipos reflejan el esquema futuro del CMS: toda la UI consume estas
// interfaces, así que cambiar los datos mock por un API/CMS no requiere tocar
// los componentes.

/** Niveles físicos de la plaza. */
export type StoreLevel = "nivel-1" | "nivel-2" | "terraza";

export interface Level {
  slug: StoreLevel;
  name: string;
  description: string;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
}

/** Tipo de cocina para el filtro de gastronomía. */
export interface Cuisine {
  slug: string;
  name: string;
}

export interface Store {
  slug: string;
  name: string;
  categorySlug: string;
  /** Nivel dentro de la plaza. */
  level: StoreLevel;
  /** Número de local, p. ej. "Local 112". */
  local: string;
  hours: string;
  phone: string;
  website?: string;
  instagram?: string;
  facebook?: string;
  description: string;
  image: string;
  logoText: string;
  featured?: boolean;
  /** True para restaurantes, cafés y conceptos del food hall. */
  gastronomy?: boolean;
  /** Tipo de cocina (solo gastronomía). */
  cuisineSlug?: string;
  /** True si opera dentro del food hall. */
  foodHall?: boolean;
}

export interface Promotion {
  slug: string;
  title: string;
  description: string;
  image: string;
  /** Marca asociada (slug de Store). */
  storeSlug: string;
  categorySlug: string;
  validity: string;
  cta: string;
}

export interface CentralEvent {
  slug: string;
  title: string;
  description: string;
  longDescription: string[];
  image: string;
  date: string;
  displayDate: string;
  time: string;
  place: string;
  admission: string;
}

export interface Article {
  slug: string;
  title: string;
  summary: string;
  body: string[];
  image: string;
  category: string;
  date: string;
  displayDate: string;
  author: string;
}

/* ---------- Información de la plaza ---------- */

export interface DayHours {
  /** Día o rango de días, p. ej. "Lunes a jueves". */
  label: string;
  value: string;
}

export interface ServiceItem {
  label: string;
  description: string;
}

export interface ParkingZone {
  label: string;
  description: string;
}

export interface TransportOption {
  label: string;
  description: string;
}

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
  openedIn: string;
  address: string;
  addressDetail: string;
  mapsUrl: string;
  hours: DayHours[];
  specialHours: string;
  stats: Stat[];
  levels: Level[];
  services: ServiceItem[];
  accessibility: ServiceItem[];
  parking: ParkingZone[];
  parkingNote: string;
  transport: TransportOption[];
  directions: DirectionReference[];
  faqs: Faq[];
}
