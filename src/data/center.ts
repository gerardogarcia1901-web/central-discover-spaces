import type { CenterInfo } from "./types";

const MAPS_QUERY = "CENTRAL San Miguel Centro, 2da Calle Poniente y 1ra Avenida Norte, Centro de San Miguel, El Salvador";

export const center: CenterInfo = {
  name: "CENTRAL San Miguel Centro",
  shortName: "San Miguel Centro",
  city: "San Miguel",
  department: "San Miguel",
  tagline: "El corazón comercial de San Miguel",
  description:
    "Plaza comercial urbana ubicada en el Centro de San Miguel.",
  longDescription: [
    "Plaza comercial urbana ubicada en el Centro de San Miguel.",
    "Carácter peatonal. No cuenta con parqueo propio.",
  ],
  address: "2da Calle Poniente y 1ra Avenida Norte, Centro de San Miguel, El Salvador",
  addressDetail: "Frente al nuevo Mercado Central, ex Parque Barrios.",
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`,
  wazeUrl: `https://waze.com/ul?q=${encodeURIComponent(MAPS_QUERY)}&navigate=yes`,
  mapsEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(MAPS_QUERY)}&z=18&output=embed`,
  hoursNote:
    "Los horarios varían según cada comercio. Consulta el Directorio para conocer los horarios de atención.",
  stats: [
    { label: "Ubicación", value: "Plaza comercial urbana ubicada en el Centro de San Miguel." },
    { label: "Acceso", value: "Carácter peatonal." },
    { label: "Parqueo", value: "No cuenta con parqueo propio." },
    { label: "Horarios", value: "Los horarios varían según cada comercio." },
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
      label: "Acceso",
      description: "Plaza peatonal. No cuenta con parqueo propio.",
    },
  ],
  faqs: [
    {
      question: "¿Cuál es el horario de la plaza?",
      answer:
        "Los horarios varían según cada comercio. Consulta el Directorio para conocer los horarios de atención.",
    },
    {
      question: "¿Dónde están ubicados?",
      answer:
        "En la 2da Calle Poniente y 1ra Avenida Norte, Centro de San Miguel, frente al nuevo Mercado Central, ex Parque Barrios.",
    },
    {
      question: "¿La plaza tiene parqueo?",
      answer: "Central San Miguel Centro es una plaza peatonal y no cuenta con parqueo propio.",
    },
    {
      question: "¿Cómo consulto por un local disponible?",
      answer:
        "Envía tu solicitud desde la sección de Arrendamientos y el equipo de Grupo Galo te contactará. También puedes escribir al WhatsApp 7697-9921.",
    },
  ],
};
