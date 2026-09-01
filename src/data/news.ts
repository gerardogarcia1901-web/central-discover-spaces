import pasilloImg from "@/assets/smc-pasillo.jpg";
import foodhallImg from "@/assets/smc-foodhall.jpg";
import eventosImg from "@/assets/smc-eventos.jpg";
import detalleImg from "@/assets/smc-detalle.jpg";
import lifestyleImg from "@/assets/smc-lifestyle.jpg";
import type { Article } from "./types";

export const articles: Article[] = [
  {
    slug: "nuevo-food-hall-doce-conceptos",
    title: "El food hall completa sus doce conceptos",
    summary:
      "Con la apertura de Barra Humo y Verde Vivo, el food hall del Nivel 2 alcanza su ocupación total.",
    body: [
      "El food hall de CENTRAL San Miguel Centro cerró su plan de ocupación con la llegada de Barra Humo y Verde Vivo, que suman coctelería de autor y cocina saludable a la oferta existente.",
      "Con doce conceptos operando, el área de mesas comunales amplió su capacidad a 260 personas y sumó dos módulos de lavado de manos y estaciones de agua gratuita.",
      "El horario del food hall se extiende una hora después del cierre del centro comercial, de manera que los visitantes del cine puedan cenar al terminar la función.",
    ],
    image: foodhallImg,
    category: "Aperturas",
    date: "2026-08-26",
    displayDate: "26 de agosto de 2026",
    author: "Equipo CENTRAL San Miguel Centro",
  },
  {
    slug: "plaza-de-eventos-nueva-programacion",
    title: "La plaza de eventos estrena programación cultural",
    summary:
      "Seis actividades mensuales gratuitas, desde música en vivo hasta cine al aire libre en la terraza.",
    body: [
      "A partir de septiembre la plaza de eventos de la terraza tendrá una programación fija: música en vivo los viernes, talleres familiares el último domingo del mes y proyecciones de cine al aire libre.",
      "La programación se construyó junto a colectivos culturales de San Miguel y toda la agenda es de entrada libre.",
      "El escenario recibió una cubierta metálica nueva que permite realizar actividades incluso en temporada lluviosa.",
    ],
    image: eventosImg,
    category: "Comunidad",
    date: "2026-08-18",
    displayDate: "18 de agosto de 2026",
    author: "Equipo CENTRAL San Miguel Centro",
  },
  {
    slug: "iluminacion-eficiente-atrio",
    title: "El atrio cambia a iluminación de bajo consumo",
    summary:
      "La sustitución de luminarias reduce en 38% el consumo eléctrico de las áreas comunes.",
    body: [
      "Durante julio y agosto se reemplazaron 940 luminarias de las áreas comunes por tecnología LED con control por sensores de luz natural.",
      "La medida reduce en 38% el consumo eléctrico del atrio y los pasillos, y mejora el nivel de iluminación en los accesos durante la noche.",
      "Es la segunda fase de un plan de eficiencia que ya incluyó la recuperación de aguas de condensado para el riego de las jardineras.",
    ],
    image: pasilloImg,
    category: "Operación",
    date: "2026-08-05",
    displayDate: "5 de agosto de 2026",
    author: "Gerencia de operaciones",
  },
  {
    slug: "marcas-locales-nivel-uno",
    title: "Cuatro marcas migueleñas llegan al Nivel 1",
    summary:
      "Diseño, calzado y accesorios producidos en la zona oriental ocupan nuevos locales e islas.",
    body: [
      "Atelier Oriente, Accesorios Mar, Taller Madera y Dulce Usulután consolidan la presencia de producción local dentro del centro comercial.",
      "El programa de marcas locales ofrece condiciones preferenciales de arrendamiento durante el primer año y acompañamiento en visual merchandising.",
      "Las marcas interesadas pueden postularse desde la página de arrendamientos.",
    ],
    image: detalleImg,
    category: "Marcas",
    date: "2026-07-22",
    displayDate: "22 de julio de 2026",
    author: "Equipo comercial",
  },
  {
    slug: "estacionamiento-tres-horas-gratis",
    title: "Tres horas de estacionamiento gratuito",
    summary:
      "La nueva política de rotación amplía la cortesía y suma 24 espacios inclusivos.",
    body: [
      "Los cuatro estacionamientos del centro pasaron a un esquema de tres horas gratuitas, con tarifa de rotación posterior de $0.50 por hora.",
      "Se habilitaron 24 espacios inclusivos junto a los accesos norte y sur, además de un biciparqueo con 40 lugares.",
      "El sistema de lectura de placas agiliza la salida y elimina la necesidad de sellar tickets en tienda.",
    ],
    image: lifestyleImg,
    category: "Visitantes",
    date: "2026-07-08",
    displayDate: "8 de julio de 2026",
    author: "Equipo CENTRAL San Miguel Centro",
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
