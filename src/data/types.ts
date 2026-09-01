// Content model for CENTRAL.
// These types mirror the future CMS schema: every UI component consumes these
// interfaces, so swapping mock data for real API/CMS data requires no UI change.

export type LocationStatus = "operativo" | "proximamente" | "en-construccion";

export interface Amenity {
  label: string;
  description?: string;
}

export interface LocationHours {
  label: string;
  value: string;
}

export interface CentralLocation {
  slug: string;
  name: string;
  shortName: string;
  city: string;
  department: string;
  status: LocationStatus;
  /** Sitio web propio de la sucursal. Si existe, las tarjetas enlazan aquí en vez de la ficha interna. */
  siteUrl: string | null;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  openingInfo: string;
  address: string;
  directions: string;
  phone: string;
  email: string;
  mapsUrl: string;
  hours: LocationHours[];
  amenities: Amenity[];
  parking: string | null;
  stats: { label: string; value: string }[];
}

export interface Category {
  slug: string;
  name: string;
  description: string;
}

export interface Store {
  slug: string;
  name: string;
  categorySlug: string;
  locationSlug: string;
  local: string;
  hours: string;
  phone: string;
  website?: string;
  instagram?: string;
  description: string;
  image: string;
  logoText: string;
  featured?: boolean;
  gastronomy?: boolean;
}

export interface Promotion {
  slug: string;
  title: string;
  description: string;
  image: string;
  locationSlug: string;
  categorySlug: string;
  validity: string;
  cta: string;
}

export interface CentralEvent {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  displayDate: string;
  time: string;
  locationSlug: string;
  place: string;
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
