import type { CenterInfo } from "./types";

const MAPS_QUERY = "2da Calle Poniente y 1ra Avenida Norte, Centro de San Miguel, El Salvador";

export const center: CenterInfo = {
  name: "CENTRAL San Miguel Centro",
  shortName: "San Miguel Centro",
  city: "San Miguel",
  department: "San Miguel",
  tagline: "El corazón comercial de San Miguel",
  description:
    "Plaza comercial urbana y peatonal en el Centro de San Miguel, frente al nuevo Mercado Central: cerca, práctica y conectada con el movimiento de la ciudad.",
  longDescription: [
    "CENTRAL San Miguel Centro es una plaza comercial urbana y compacta ubicada en el Centro de San Miguel, sobre la 2da Calle Poniente y 1ra Avenida Norte, frente al nuevo Mercado Central, ex Parque Barrios.",
    "Su ventaja es la ubicación: aproximadamente 1,300 m² de área arrendable con 6 locales comerciales, a pie de calle y dentro del flujo diario del centro de la ciudad.",
  ],
  address: "2da Calle Poniente y 1ra Avenida Norte, Centro de San Miguel, El Salvador",
  addressDetail: "Frente al nuevo Mercado Central, ex Parque Barrios.",
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`,
  mapsEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&output=embed`,
  hoursNote:
    "Los horarios pueden variar según cada comercio. Consulta nuestro directorio para conocer los horarios de atención de cada establecimiento.",
  stats: [
    { label: "Área arrendable", value: "1,300 m²" },
    { label: "Locales comerciales", value: "6" },
    { label: "Comercios en operación", value: "5" },
    { label: "Carácter de la plaza", value: "Peatonal" },
  ],
  directions: [
    {
      label: "Dirección",
      description: "2da Calle Poniente y 1ra Avenida Norte, Centro de San Miguel, El Salvador.",
    },
    {
      label: "Referencia",
      description: "Frente al nuevo Mercado Central, ex Parque Barrios.",
    },
    {
      label: "Acceso peatonal",
      description: "Los locales dan a la calle, con ingreso directo a pie desde el Centro de San Miguel.",
    },
  ],
  faqs: [
    {
      question: "¿Cuál es el horario de la plaza?",
      answer:
        "Los horarios pueden variar según cada comercio. Consulta nuestro directorio para conocer los horarios de atención de cada establecimiento.",
    },
    {
      question: "¿Dónde están ubicados?",
      answer:
        "En la 2da Calle Poniente y 1ra Avenida Norte, Centro de San Miguel, frente al nuevo Mercado Central, ex Parque Barrios.",
    },
    {
      question: "¿Cuántos comercios hay?",
      answer:
        "La plaza cuenta con 6 locales comerciales. Actualmente operan 5 comercios, ya que PAR2 ocupa los locales 1 y 2.",
    },
    {
      question: "¿Cómo consulto por un local disponible?",
      answer:
        "Envía tu solicitud desde la sección de Arrendamientos y el equipo de Grupo Galo te contactará. También puedes escribir al WhatsApp 7697-9921.",
    },
  ],
};
