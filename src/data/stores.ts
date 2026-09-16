import type { Store } from "./types";

/**
 * Comercios oficiales de CENTRAL San Miguel Centro (Brief Grupo Galo, sept 2026).
 * No agregar categorías, horarios, teléfonos, sitios web ni redes que no estén
 * proporcionados oficialmente.
 */
export const stores: Store[] = [
  {
    slug: "par2",
    name: "PAR2",
    categorySlug: "tiendas",
    local: "Locales 1 y 2",
    hours: [
      { label: "Lunes a sábado", value: "8:00 a.m. – 5:00 p.m." },
      { label: "Domingo", value: "8:00 a.m. – 4:00 p.m." },
    ],
    whatsapp: "7884-4408",
    logoText: "P2",
    featured: true,
  },
  {
    slug: "farmacia-la-buena",
    name: "Farmacia La Buena",
    categorySlug: "farmacia",
    local: "Local 3",
    hours: [
      { label: "Lunes a viernes", value: "7:00 a.m. – 6:00 p.m." },
      { label: "Sábado", value: "7:00 a.m. – 5:00 p.m." },
      { label: "Domingo", value: "7:00 a.m. – 1:00 p.m." },
    ],
    whatsapp: "7921-5334",
    logoText: "LB",
    featured: true,
  },
  {
    slug: "las-ollitas",
    name: "Las Ollitas",
    categorySlug: "comida",
    local: "Local 4",
    hours: [{ label: "Lunes a domingo", value: "7:00 a.m. – 7:00 p.m." }],
    phone: "2667-6777",
    logoText: "LO",
    featured: true,
  },
  {
    slug: "pizza-la-siciliana",
    name: "Pizza La Siciliana",
    categorySlug: "comida",
    local: "Local 5",
    hours: [{ label: "Lunes a domingo", value: "10:00 a.m. – 7:00 p.m." }],
    orderNote: "Pedidos mediante PedidosYa.",
    logoText: "LS",
    featured: true,
  },
  {
    slug: "cora-store",
    name: "Cora Store",
    categorySlug: "tiendas",
    local: "Local 6",
    hours: [{ label: "Lunes a domingo", value: "8:30 a.m. – 5:15 p.m." }],
    whatsapp: "7109-2809",
    logoText: "CS",
    featured: true,
  },
];

export const allStores: Store[] = stores;

export const getStore = (slug: string) => allStores.find((s) => s.slug === slug);

export const storeContact = (store: Store) => {
  if (store.whatsapp) return { label: "WhatsApp", value: store.whatsapp, href: `https://wa.me/503${store.whatsapp.replace(/\D/g, "")}` };
  if (store.phone) return { label: "Teléfono", value: store.phone, href: `tel:+503${store.phone.replace(/\D/g, "")}` };
  return null;
};
