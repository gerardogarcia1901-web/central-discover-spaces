import eventosImg from "@/assets/smc-eventos.jpg";
import foodhallImg from "@/assets/smc-foodhall.jpg";
import lifestyleImg from "@/assets/smc-lifestyle.jpg";
import pasilloImg from "@/assets/smc-pasillo.jpg";
import detalleImg from "@/assets/smc-detalle.jpg";
import type { CentralEvent } from "./types";

export const events: CentralEvent[] = [
  {
    slug: "noches-de-terraza",
    title: "Noches de Terraza",
    description: "Música en vivo con artistas migueleños cada viernes en la plaza de eventos.",
    longDescription: [
      "Cada viernes la plaza de eventos se convierte en un escenario al aire libre. Tres artistas de la zona oriental se presentan en formato acústico, con luces festoneadas y capacidad para 400 personas sentadas.",
      "La terraza extiende su horario hasta las 11:00 p.m. y los restaurantes participantes ofrecen menú de noche. La entrada es libre y no requiere registro previo.",
    ],
    image: eventosImg,
    date: "2026-09-04",
    displayDate: "Viernes 4 de septiembre",
    time: "7:00 p.m. – 10:00 p.m.",
    place: "Plaza de eventos, terraza",
    admission: "Entrada libre",
  },
  {
    slug: "feria-de-emprendedores",
    title: "Feria de Emprendedores de Oriente",
    description: "Cuarenta marcas locales de artesanía, café y diseño ocupan el atrio central.",
    longDescription: [
      "Durante tres días el atrio de doble altura recibe a cuarenta emprendedores de San Miguel, Usulután, Morazán y La Unión con productos de artesanía, café, cacao, textiles y diseño gráfico.",
      "Habrá charlas cortas de formalización de negocios impartidas por la cooperativa aliada del centro y demostraciones de tostado de café por la tarde.",
    ],
    image: pasilloImg,
    date: "2026-09-12",
    displayDate: "12 al 14 de septiembre",
    time: "10:00 a.m. – 8:00 p.m.",
    place: "Atrio central, Nivel 1",
    admission: "Entrada libre",
  },
  {
    slug: "festival-del-comal",
    title: "Festival del Comal",
    description: "Los doce conceptos del food hall presentan platos de edición limitada.",
    longDescription: [
      "Una semana dedicada a la cocina salvadoreña: los doce conceptos del food hall y la terraza crean un plato de edición limitada inspirado en recetas de oriente.",
      "Quien complete cinco sellos en su pasaporte gastronómico recibe un postre de cortesía en Dulce Usulután.",
    ],
    image: foodhallImg,
    date: "2026-09-20",
    displayDate: "20 al 27 de septiembre",
    time: "Horario del centro",
    place: "Food Hall, Nivel 2 y terraza",
    admission: "Consumo según carta",
  },
  {
    slug: "domingo-familiar",
    title: "Domingo Familiar",
    description: "Talleres gratuitos para niños, pintacaritas y cuentacuentos en el atrio.",
    longDescription: [
      "El último domingo de cada mes el atrio se transforma en zona de juego: talleres de arte con materiales reciclados, pintacaritas y una sesión de cuentacuentos a cargo de Librería Guzmán.",
      "La actividad es gratuita y no requiere inscripción. Recomendamos llegar 15 minutos antes de cada taller para tomar lugar.",
    ],
    image: lifestyleImg,
    date: "2026-09-27",
    displayDate: "Domingo 27 de septiembre",
    time: "11:00 a.m. – 4:00 p.m.",
    place: "Atrio central, Nivel 1",
    admission: "Entrada libre",
  },
  {
    slug: "semana-de-la-moda-oriente",
    title: "Semana de la Moda Oriente",
    description: "Pasarelas de diseñadores locales y descuentos en las tiendas de moda.",
    longDescription: [
      "Cuatro días de pasarelas cortas en el atrio con las colecciones de temporada de Atelier Oriente, Casa Lino y Urbano 27, más una mesa de conversación sobre moda sostenible.",
      "Las tiendas participantes aplican descuentos exclusivos durante la semana, señalizados en vitrina.",
    ],
    image: detalleImg,
    date: "2026-10-08",
    displayDate: "8 al 11 de octubre",
    time: "5:00 p.m. – 9:00 p.m.",
    place: "Atrio central y Nivel 1",
    admission: "Entrada libre",
  },
  {
    slug: "cine-bajo-las-estrellas",
    title: "Cine bajo las estrellas",
    description: "Proyección gratuita al aire libre en la plaza de eventos, con food trucks.",
    longDescription: [
      "Cine Central instala una pantalla inflable en la plaza de eventos para una proyección familiar al aire libre. Se reparten 300 sillas por orden de llegada; también puedes traer tu manta.",
      "Los conceptos del food hall instalan puntos de venta rápida de palomitas, helados y bebidas.",
    ],
    image: eventosImg,
    date: "2026-10-17",
    displayDate: "Sábado 17 de octubre",
    time: "7:30 p.m.",
    place: "Plaza de eventos, terraza",
    admission: "Entrada libre",
  },
];

export const getEvent = (slug: string) => events.find((e) => e.slug === slug);
