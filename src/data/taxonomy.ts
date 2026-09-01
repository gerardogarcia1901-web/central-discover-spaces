import type { Category, Cuisine, Level } from "./types";

export const categories: Category[] = [
  { slug: "moda", name: "Moda", description: "Ropa, calzado y accesorios para todos los estilos." },
  { slug: "gastronomia", name: "Gastronomía", description: "Restaurantes, cafés y conceptos del food hall." },
  { slug: "belleza", name: "Belleza", description: "Cuidado personal, salones y cosmética." },
  { slug: "tecnologia", name: "Tecnología", description: "Electrónica, cómputo, telefonía y accesorios." },
  { slug: "hogar", name: "Hogar", description: "Muebles, decoración y artículos para el hogar." },
  { slug: "servicios", name: "Servicios financieros", description: "Banca, remesas, seguros y trámites." },
  { slug: "entretenimiento", name: "Entretenimiento", description: "Cine, juegos y experiencias." },
  { slug: "salud", name: "Salud y bienestar", description: "Farmacias, óptica y clínicas." },
];

export const categoryName = (slug: string) => categories.find((c) => c.slug === slug)?.name ?? slug;

export const levels: Level[] = [
  {
    slug: "nivel-1",
    name: "Nivel 1",
    description: "Moda de gran formato, tecnología, servicios financieros y accesos principales.",
  },
  {
    slug: "nivel-2",
    name: "Nivel 2",
    description: "Belleza, hogar, salud, cine y el food hall con vista al atrio.",
  },
  {
    slug: "terraza",
    name: "Terraza",
    description: "Restaurantes al aire libre y la plaza de eventos.",
  },
];

export const levelName = (slug: string) => levels.find((l) => l.slug === slug)?.name ?? slug;

export const cuisines: Cuisine[] = [
  { slug: "salvadorena", name: "Salvadoreña" },
  { slug: "cafe", name: "Café y repostería" },
  { slug: "parrilla", name: "Parrilla" },
  { slug: "asiatica", name: "Asiática" },
  { slug: "mexicana", name: "Mexicana" },
  { slug: "italiana", name: "Italiana" },
  { slug: "saludable", name: "Saludable" },
  { slug: "rapida", name: "Comida rápida" },
];

export const cuisineName = (slug?: string) =>
  (slug && cuisines.find((c) => c.slug === slug)?.name) ?? "Cocina de autor";
