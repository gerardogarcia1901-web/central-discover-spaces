import type { Category } from "./types";

export const categories: Category[] = [
  { slug: "tiendas", name: "Tiendas", description: "" },
  { slug: "gastronomia", name: "Gastronomía", description: "" },
  { slug: "servicios", name: "Servicios", description: "" },
];

export const categoryName = (slug: string) => categories.find((c) => c.slug === slug)?.name ?? slug;
