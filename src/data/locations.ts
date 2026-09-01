import sanMiguelImg from "@/assets/loc-san-miguel.jpg";
import santaRosaImg from "@/assets/loc-santa-rosa.jpg";
import sonsonateImg from "@/assets/loc-sonsonate.jpg";
import type { CentralLocation, LocationStatus } from "./types";

export const statusLabels: Record<LocationStatus, string> = {
  operativo: "En operación",
  proximamente: "Próxima apertura",
  "en-construccion": "En construcción",
};

export const locations: CentralLocation[] = [
  {
    slug: "san-miguel-centro",
    name: "CENTRAL San Miguel Centro",
    shortName: "San Miguel Centro",
    city: "San Miguel",
    department: "San Miguel",
    status: "operativo",
    siteUrl: null,
    tagline: "Centro comercial urbano",
    description:
      "El corazón comercial del oriente salvadoreño: marcas, gastronomía y servicios en pleno centro de San Miguel.",
    longDescription:
      "CENTRAL San Miguel Centro reúne en una sola manzana la energía del comercio urbano y la comodidad de un centro comercial contemporáneo. Diseñado para el peatón, conecta calles históricas con plazas abiertas, terrazas gastronómicas y locales pensados para marcas nacionales e internacionales.",
    image: sanMiguelImg,
    openingInfo: "Abierto al público desde 2024",
    address: "4a Calle Oriente y Av. Gerardo Barrios, San Miguel, El Salvador",
    directions:
      "A cinco minutos de la Alcaldía Municipal de San Miguel. Acceso peatonal por Av. Gerardo Barrios y acceso vehicular por 4a Calle Oriente.",
    phone: "+503 2660 0000",
    email: "sanmiguel@central.com.sv",
    mapsUrl: "https://maps.google.com/?q=San+Miguel+El+Salvador",
    hours: [
      { label: "Lunes a jueves", value: "9:00 a.m. – 8:00 p.m." },
      { label: "Viernes y sábado", value: "9:00 a.m. – 9:00 p.m." },
      { label: "Domingo", value: "10:00 a.m. – 8:00 p.m." },
      { label: "Restaurantes", value: "Horario extendido hasta 10:00 p.m." },
    ],
    amenities: [
      { label: "Plaza central abierta", description: "Espacio para eventos, ferias y activaciones de marca." },
      { label: "Terraza gastronómica", description: "Restaurantes y cafés con vista a la ciudad." },
      { label: "Wi-Fi gratuito", description: "Conectividad en todas las áreas comunes." },
      { label: "Accesibilidad universal", description: "Rampas, ascensores y sanitarios adaptados." },
      { label: "Seguridad 24/7", description: "Monitoreo y personal en sitio todo el día." },
      { label: "Área familiar", description: "Zona infantil y sala de lactancia." },
    ],
    parking: "Estacionamiento techado con 420 espacios. Primera hora sin costo con consumo en tiendas participantes.",
    stats: [
      { label: "Locales comerciales", value: "80+" },
      { label: "Área comercial", value: "18,000 m²" },
      { label: "Estacionamientos", value: "420" },
      { label: "Visitantes mensuales", value: "150 mil" },
    ],
  },
  {
    slug: "santa-rosa-de-lima",
    name: "CENTRAL Santa Rosa de Lima",
    shortName: "Santa Rosa de Lima",
    city: "Santa Rosa de Lima",
    department: "La Unión",
    status: "operativo",
    siteUrl: null,
    tagline: "Destino comercial de La Unión",
    description:
      "Un nuevo destino comercial para el oriente del país, diseñado como punto de encuentro para la región.",
    longDescription:
      "CENTRAL Santa Rosa de Lima es el próximo desarrollo de la marca: un centro comercial de escala regional con arquitectura abierta, plazas sombreadas y una mezcla comercial pensada para las familias de La Unión y sus alrededores. El proyecto se encuentra en desarrollo y ya recibe solicitudes de arrendamiento.",
    image: santaRosaImg,
    openingInfo: "Abierto al público",
    address: "Carretera Panamericana, Santa Rosa de Lima, La Unión, El Salvador",
    directions:
      "Sobre la Carretera Panamericana, con acceso directo desde la ruta hacia La Unión y conexión con el transporte interurbano.",
    phone: "+503 2600 0001",
    email: "santarosa@central.com.sv",
    mapsUrl: "https://maps.google.com/?q=Santa+Rosa+de+Lima+El+Salvador",
    hours: [
      { label: "Lunes a jueves", value: "9:00 a.m. – 8:00 p.m." },
      { label: "Viernes y sábado", value: "9:00 a.m. – 9:00 p.m." },
      { label: "Domingo", value: "10:00 a.m. – 8:00 p.m." },
    ],
    amenities: [
      { label: "Plazas abiertas", description: "Diseño de baja altura con áreas verdes y sombra natural." },
      { label: "Zona gastronómica", description: "Espacio dedicado a restaurantes y cafés regionales." },
      { label: "Anclas comerciales", description: "Locales de gran formato para marcas nacionales." },
      { label: "Estacionamiento amplio", description: "Acceso vehicular directo desde la carretera." },
    ],
    parking: "Estacionamiento a nivel proyectado para 300 vehículos.",
    stats: [
      { label: "Locales comerciales", value: "45" },
      { label: "Área comercial", value: "11,500 m²" },
      { label: "Etapa", value: "En operación" },
      { label: "Región", value: "La Unión" },
    ],
  },
  {
    slug: "sonsonate",
    name: "CENTRAL Sonsonate",
    shortName: "Sonsonate",
    city: "Sonsonate",
    department: "Sonsonate",
    status: "en-construccion",
    siteUrl: null,
    tagline: "Próxima apertura",
    description:
      "El próximo CENTRAL del occidente del país: un destino comercial en construcción para las familias de Sonsonate.",
    longDescription:
      "CENTRAL Sonsonate es el nuevo desarrollo de la marca en el occidente salvadoreño. Un centro comercial de plazas abiertas, anclas nacionales y una zona gastronómica pensada como punto de encuentro regional. El proyecto se encuentra en construcción y ya recibe solicitudes de arrendamiento.",
    image: sonsonateImg,
    openingInfo: "Apertura estimada: por confirmar",
    address: "Sonsonate, El Salvador",
    directions: "Sobre la vía principal de acceso a la ciudad de Sonsonate, con conexión al transporte interurbano.",
    phone: "+503 2600 0002",
    email: "sonsonate@central.com.sv",
    mapsUrl: "https://maps.google.com/?q=Sonsonate+El+Salvador",
    hours: [{ label: "Horarios", value: "Se anunciarán previo a la apertura" }],
    amenities: [
      { label: "Plazas abiertas", description: "Áreas verdes, sombra natural y espacios para eventos." },
      { label: "Zona gastronómica", description: "Restaurantes y cafés con terrazas." },
      { label: "Anclas comerciales", description: "Locales de gran formato para marcas nacionales." },
      { label: "Estacionamiento amplio", description: "Acceso vehicular directo y espacios a nivel." },
    ],
    parking: "Estacionamiento proyectado para 350 vehículos.",
    stats: [
      { label: "Locales proyectados", value: "60" },
      { label: "Área comercial", value: "14,000 m²" },
      { label: "Etapa", value: "En construcción" },
      { label: "Región", value: "Sonsonate" },
    ],
  },
];

export const getLocation = (slug: string) => locations.find((l) => l.slug === slug);

export const locationName = (slug: string) =>
  locations.find((l) => l.slug === slug)?.shortName ?? slug;
