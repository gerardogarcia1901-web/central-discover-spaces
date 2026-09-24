import type { CenterInfo } from "./types";

const OFFICIAL_MAPS_URL = "https://maps.app.goo.gl/DDknT8fWG61nBKt27";
const MAP_LATITUDE = 13.4822358;
const MAP_LONGITUDE = -88.1776408;
const MAPS_PLACE = "central plaza | San Miguel Centro";

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
  mapsUrl: OFFICIAL_MAPS_URL,
  wazeUrl: OFFICIAL_MAPS_URL,
  mapsEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(`${MAPS_PLACE} ${MAP_LATITUDE},${MAP_LONGITUDE}`)}&z=20&output=embed`,
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
