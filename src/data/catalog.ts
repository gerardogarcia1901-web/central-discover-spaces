import gastronomiaImg from "@/assets/gastronomia.jpg";
import eventosImg from "@/assets/eventos.jpg";
import modaImg from "@/assets/moda.jpg";
import lifestyleImg from "@/assets/lifestyle.jpg";
import texturaImg from "@/assets/texture-arq.jpg";
import sanMiguelImg from "@/assets/loc-san-miguel.jpg";
import santaRosaImg from "@/assets/loc-santa-rosa.jpg";
import type { Article, Category, CentralEvent, Promotion, Store } from "./types";

export const categories: Category[] = [
  { slug: "moda", name: "Moda", description: "Ropa, calzado y accesorios para todos los estilos." },
  { slug: "gastronomia", name: "Gastronomía", description: "Restaurantes, cafés y conceptos de comida." },
  { slug: "belleza", name: "Belleza", description: "Cuidado personal, salones y cosmética." },
  { slug: "servicios", name: "Servicios", description: "Banca, salud, telefonía y trámites." },
  { slug: "tecnologia", name: "Tecnología", description: "Electrónica, cómputo y accesorios." },
  { slug: "hogar", name: "Hogar", description: "Muebles, decoración y artículos para el hogar." },
  { slug: "entretenimiento", name: "Entretenimiento", description: "Cine, juegos y experiencias." },
];

export const categoryName = (slug: string) =>
  categories.find((c) => c.slug === slug)?.name ?? slug;

export const stores: Store[] = [
  {
    slug: "atelier-norte",
    name: "Atelier Norte",
    categorySlug: "moda",
    locationSlug: "san-miguel-centro",
    local: "Local 112",
    hours: "9:00 a.m. – 8:00 p.m.",
    phone: "+503 2660 1120",
    website: "https://ejemplo.com",
    instagram: "@ateliernorte",
    description:
      "Concepto de moda contemporánea salvadoreña con colecciones cápsula de diseñadores locales y prendas de temporada.",
    image: modaImg,
    logoText: "AN",
    featured: true,
  },
  {
    slug: "casa-tostada",
    name: "Casa Tostada",
    categorySlug: "gastronomia",
    locationSlug: "san-miguel-centro",
    local: "Local 205",
    hours: "7:00 a.m. – 9:00 p.m.",
    phone: "+503 2660 2050",
    instagram: "@casatostada",
    description:
      "Café de origen salvadoreño, panadería de masa madre y desayunos servidos durante todo el día en la terraza.",
    image: gastronomiaImg,
    logoText: "CT",
    featured: true,
    gastronomy: true,
  },
  {
    slug: "brasa-oriente",
    name: "Brasa Oriente",
    categorySlug: "gastronomia",
    locationSlug: "san-miguel-centro",
    local: "Terraza 3",
    hours: "11:00 a.m. – 10:00 p.m.",
    phone: "+503 2660 3030",
    description:
      "Parrilla contemporánea con cortes a la brasa, mariscos del Golfo de Fonseca y coctelería de autor.",
    image: gastronomiaImg,
    logoText: "BO",
    gastronomy: true,
  },
  {
    slug: "mercado-verde",
    name: "Mercado Verde",
    categorySlug: "gastronomia",
    locationSlug: "santa-rosa-de-lima",
    local: "Local 18",
    hours: "Por confirmar",
    phone: "+503 2600 0001",
    description:
      "Concepto de comida saludable con producto local, bowls, jugos prensados en frío y opciones vegetarianas.",
    image: lifestyleImg,
    logoText: "MV",
    gastronomy: true,
  },
  {
    slug: "punto-tech",
    name: "Punto Tech",
    categorySlug: "tecnologia",
    locationSlug: "san-miguel-centro",
    local: "Local 140",
    hours: "9:00 a.m. – 8:00 p.m.",
    phone: "+503 2660 1400",
    website: "https://ejemplo.com",
    description:
      "Tienda de tecnología con celulares, cómputo, accesorios y servicio técnico certificado.",
    image: texturaImg,
    logoText: "PT",
    featured: true,
  },
  {
    slug: "estudio-piel",
    name: "Estudio Piel",
    categorySlug: "belleza",
    locationSlug: "san-miguel-centro",
    local: "Local 220",
    hours: "9:00 a.m. – 7:00 p.m.",
    phone: "+503 2660 2200",
    instagram: "@estudiopiel",
    description: "Salón y spa urbano: cuidado facial, uñas, barbería y tratamientos capilares.",
    image: lifestyleImg,
    logoText: "EP",
  },
  {
    slug: "banca-central",
    name: "Banca al Día",
    categorySlug: "servicios",
    locationSlug: "san-miguel-centro",
    local: "Local 101",
    hours: "8:00 a.m. – 5:00 p.m.",
    phone: "+503 2660 1010",
    description: "Agencia bancaria con cajeros automáticos disponibles en horario extendido.",
    image: texturaImg,
    logoText: "BD",
  },
  {
    slug: "casa-hogar-sv",
    name: "Casa & Hogar",
    categorySlug: "hogar",
    locationSlug: "san-miguel-centro",
    local: "Local 130",
    hours: "9:00 a.m. – 8:00 p.m.",
    phone: "+503 2660 1300",
    description: "Muebles, textiles y decoración para renovar cada espacio de la casa.",
    image: lifestyleImg,
    logoText: "CH",
  },
  {
    slug: "sala-central",
    name: "Sala CENTRAL",
    categorySlug: "entretenimiento",
    locationSlug: "san-miguel-centro",
    local: "Nivel 3",
    hours: "12:00 m. – 10:00 p.m.",
    phone: "+503 2660 3000",
    description: "Complejo de cine y zona de juegos familiares con salas premium.",
    image: eventosImg,
    logoText: "SC",
    featured: true,
  },
  {
    slug: "urbana-shoes",
    name: "Urbana Shoes",
    categorySlug: "moda",
    locationSlug: "santa-rosa-de-lima",
    local: "Por asignar",
    hours: "Por confirmar",
    phone: "+503 2600 0001",
    description: "Calzado urbano y deportivo para toda la familia con marcas internacionales.",
    image: modaImg,
    logoText: "US",
  },
  {
    slug: "farmacia-vida",
    name: "Farmacia Vida",
    categorySlug: "servicios",
    locationSlug: "san-miguel-centro",
    local: "Local 105",
    hours: "8:00 a.m. – 9:00 p.m.",
    phone: "+503 2660 1050",
    description: "Farmacia con consulta médica básica, laboratorio clínico y entrega a domicilio.",
    image: texturaImg,
    logoText: "FV",
  },
  {
    slug: "dulce-esquina",
    name: "Dulce Esquina",
    categorySlug: "gastronomia",
    locationSlug: "san-miguel-centro",
    local: "Kiosco 2",
    hours: "10:00 a.m. – 9:00 p.m.",
    phone: "+503 2660 4020",
    description: "Repostería artesanal, helados y postres salvadoreños en formato para llevar.",
    image: gastronomiaImg,
    logoText: "DE",
    gastronomy: true,
  },
];

export const getStore = (slug: string) => stores.find((s) => s.slug === slug);

export const promotions: Promotion[] = [
  {
    slug: "temporada-central",
    title: "Temporada CENTRAL",
    description:
      "Hasta 40% de descuento en marcas participantes de moda y calzado durante todo el mes.",
    image: modaImg,
    locationSlug: "san-miguel-centro",
    categorySlug: "moda",
    validity: "Del 1 al 30 de este mes",
    cta: "Ver marcas participantes",
  },
  {
    slug: "martes-de-cafe",
    title: "Martes de café",
    description: "2x1 en bebidas calientes en los cafés de la terraza gastronómica.",
    image: gastronomiaImg,
    locationSlug: "san-miguel-centro",
    categorySlug: "gastronomia",
    validity: "Todos los martes",
    cta: "Conocer restaurantes",
  },
  {
    slug: "noche-de-cine",
    title: "Noche de cine",
    description: "Entradas 2x1 en Sala CENTRAL presentando tu ticket de compra del día.",
    image: eventosImg,
    locationSlug: "san-miguel-centro",
    categorySlug: "entretenimiento",
    validity: "Jueves de 6:00 p.m. a 10:00 p.m.",
    cta: "Ver condiciones",
  },
  {
    slug: "bienvenida-santa-rosa",
    title: "Bienvenida Santa Rosa",
    description:
      "Beneficios de preapertura para las primeras marcas que se sumen al nuevo proyecto.",
    image: santaRosaImg,
    locationSlug: "santa-rosa-de-lima",
    categorySlug: "servicios",
    validity: "Vigente hasta la apertura",
    cta: "Solicitar información",
  },
];

export const events: CentralEvent[] = [
  {
    slug: "festival-gastronomico",
    title: "Festival gastronómico de oriente",
    description:
      "Tres días de cocina en vivo con los restaurantes de CENTRAL y cocineros invitados de la región.",
    image: gastronomiaImg,
    date: "2026-09-12",
    displayDate: "12 – 14 de septiembre",
    time: "11:00 a.m. – 9:00 p.m.",
    locationSlug: "san-miguel-centro",
    place: "Plaza central",
  },
  {
    slug: "noches-de-musica",
    title: "Noches de música en la plaza",
    description: "Conciertos al aire libre con bandas salvadoreñas cada último viernes de mes.",
    image: eventosImg,
    date: "2026-09-26",
    displayDate: "26 de septiembre",
    time: "7:00 p.m. – 10:00 p.m.",
    locationSlug: "san-miguel-centro",
    place: "Plaza central",
  },
  {
    slug: "mercado-de-diseno",
    title: "Mercado de diseño local",
    description: "Emprendedores y diseñadores salvadoreños presentan sus colecciones y productos.",
    image: lifestyleImg,
    date: "2026-10-04",
    displayDate: "4 de octubre",
    time: "10:00 a.m. – 7:00 p.m.",
    locationSlug: "san-miguel-centro",
    place: "Pasaje comercial",
  },
  {
    slug: "presentacion-proyecto",
    title: "Presentación del proyecto Santa Rosa",
    description:
      "Sesión informativa para marcas y operadores interesados en el nuevo desarrollo CENTRAL.",
    image: santaRosaImg,
    date: "2026-10-18",
    displayDate: "18 de octubre",
    time: "9:00 a.m. – 12:00 m.",
    locationSlug: "santa-rosa-de-lima",
    place: "Sala de proyecto",
  },
];

export const articles: Article[] = [
  {
    slug: "central-crece-en-oriente",
    title: "CENTRAL crece en el oriente del país",
    summary:
      "La marca de Grupo Galo confirma su segundo desarrollo comercial y proyecta nuevas ubicaciones en El Salvador.",
    body: [
      "CENTRAL continúa consolidando su presencia en el oriente salvadoreño con el desarrollo de su segundo centro comercial en Santa Rosa de Lima, un proyecto pensado para atender a las familias de La Unión y municipios vecinos.",
      "El modelo de la marca combina plazas abiertas, mezcla comercial equilibrada y espacios diseñados para el encuentro. Cada desarrollo se adapta a la escala de su ciudad, manteniendo los mismos estándares de servicio, seguridad y experiencia.",
      "Con esta expansión, CENTRAL busca convertirse en la red de destinos comerciales de referencia del país, con una plataforma preparada para incorporar nuevas ubicaciones en los próximos años.",
    ],
    image: santaRosaImg,
    category: "Expansión",
    date: "2026-08-20",
    displayDate: "20 de agosto, 2026",
    author: "Equipo CENTRAL",
  },
  {
    slug: "nuevas-marcas-san-miguel",
    title: "Nuevas marcas llegan a CENTRAL San Miguel Centro",
    summary:
      "Moda, tecnología y gastronomía amplían la oferta comercial del centro con seis aperturas recientes.",
    body: [
      "Durante el último trimestre, seis nuevas marcas abrieron sus puertas en CENTRAL San Miguel Centro, ampliando la oferta en moda, tecnología y gastronomía.",
      "Las aperturas responden a la demanda de los visitantes por una mezcla comercial más completa, con opciones para compras diarias y experiencias de fin de semana.",
      "El equipo comercial continúa trabajando en la incorporación de nuevos operadores para los espacios disponibles del nivel dos.",
    ],
    image: modaImg,
    category: "Aperturas",
    date: "2026-08-05",
    displayDate: "5 de agosto, 2026",
    author: "Equipo CENTRAL",
  },
  {
    slug: "terraza-gastronomica",
    title: "La terraza gastronómica: un nuevo punto de encuentro",
    summary:
      "Cafés, parrillas y postres conviven en un espacio abierto pensado para quedarse más tiempo.",
    body: [
      "La terraza gastronómica de CENTRAL San Miguel Centro se ha convertido en uno de los espacios más visitados, con una mezcla de cafés de especialidad, parrillas y repostería artesanal.",
      "El diseño privilegia la sombra natural, el mobiliario cómodo y la vista hacia la ciudad, con horario extendido los fines de semana.",
      "Cada mes, la terraza recibe activaciones, música en vivo y menús de temporada preparados por los operadores del centro.",
    ],
    image: gastronomiaImg,
    category: "Experiencias",
    date: "2026-07-18",
    displayDate: "18 de julio, 2026",
    author: "Equipo CENTRAL",
  },
  {
    slug: "compromiso-comunidad",
    title: "Un compromiso con la comunidad local",
    summary:
      "Programas de empleo, ferias de emprendimiento y espacios públicos abiertos a la ciudad.",
    body: [
      "CENTRAL trabaja con organizaciones locales para impulsar el empleo formal y el emprendimiento en las ciudades donde opera.",
      "Las ferias de diseño y los mercados temporales permiten que pequeños productores accedan a un espacio comercial de alto tráfico sin la inversión de un local permanente.",
      "El objetivo es que cada CENTRAL funcione como infraestructura urbana útil para su ciudad, más allá del comercio.",
    ],
    image: lifestyleImg,
    category: "Comunidad",
    date: "2026-06-30",
    displayDate: "30 de junio, 2026",
    author: "Equipo CENTRAL",
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
