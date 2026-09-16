import type { Category } from "./types";

export const categories: Category[] = [
  { slug: "tiendas", name: "Tiendas", description: "Comercio de productos y variedades." },
  { slug: "comida", name: "Comida y bebida", description: "Comida preparada para llevar o consumir en el lugar." },
  { slug: "farmacia", name: "Farmacia", description: "Medicamentos y cuidado de la salud." },
];

export const categoryName = (slug: string) => categories.find((c) => c.slug === slug)?.name ?? slug;
