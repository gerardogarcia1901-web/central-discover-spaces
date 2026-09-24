import type { Store } from "./types";

/**
 * Comercios oficiales de CENTRAL San Miguel Centro (Brief Grupo Galo).
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
      { label: "Lun-Sáb", value: "8:00 a.m. – 5:00 p.m." },
      { label: "Dom", value: "8:00 a.m. – 4:00 p.m." },
    ],
    whatsapp: "7884-4408",
    logoText: "P2",
    featured: true,
  },
  {
    slug: "farmacia-la-buena",
    name: "Farmacia La Buena",
    categorySlug: "servicios",
    local: "Local 3",
    hours: [
      { label: "Lun-Vie", value: "7:00 a.m. – 6:00 p.m." },
      { label: "Sáb", value: "7:00 a.m. – 5:00 p.m." },
      { label: "Dom", value: "7:00 a.m. – 1:00 p.m." },
    ],
    whatsapp: "7921-5334",
    logoText: "LB",
    featured: true,
  },
  {
    slug: "las-ollitas",
    name: "Las Ollitas",
    categorySlug: "gastronomia",
    local: "Local 4",
    hours: [{ label: "Lun-Dom", value: "7:00 a.m. – 7:00 p.m." }],
    phone: "2667-6777",
    logoText: "LO",
    featured: true,
  },
  {
    slug: "pizza-la-siciliana",
    name: "Pizza La Siciliana",
    categorySlug: "gastronomia",
    local: "Local 5",
    hours: [{ label: "Lun-Dom", value: "10:00 a.m. – 7:00 p.m." }],
    orderNote: "Pedidos: PedidosYa",
    logoText: "LS",
    featured: true,
  },
  {
    slug: "cora-store",
    name: "Cora Store",
    categorySlug: "tiendas",
    local: "Local 6",
    hours: [{ label: "Lun-Dom", value: "8:30 a.m. – 5:15 p.m." }],
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
