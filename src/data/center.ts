import type { CenterInfo } from "./types";
import { levels } from "./taxonomy";

export const center: CenterInfo = {
  name: "CENTRAL San Miguel Centro",
  shortName: "San Miguel Centro",
  city: "San Miguel",
  department: "San Miguel",
  tagline: "El punto de encuentro de San Miguel",
  description:
    "Dos niveles y una terraza con más de 30 marcas, food hall, cine y una plaza de eventos en el corazón de San Miguel.",
  longDescription: [
    "CENTRAL San Miguel Centro nació para devolverle al centro de la ciudad un lugar donde encontrarse. Su arquitectura combina piedra arena, acero negro y un atrio de doble altura que se ilumina con luz natural durante todo el día.",
    "En sus dos niveles y su terraza conviven marcas nacionales e internacionales, un food hall con doce conceptos, cine, servicios financieros y una plaza abierta a la ciudad donde cada mes ocurre programación cultural gratuita.",
  ],
  openedIn: "2021",
  address: "Avenida Roosevelt y 8ª Calle Poniente, Barrio El Calvario, San Miguel",
  addressDetail: "Frente al Parque Guzmán, a 300 metros de la Catedral de San Miguel.",
  mapsUrl: "https://maps.google.com/?q=San+Miguel,+El+Salvador",
  hours: [
    { label: "Lunes", value: "9:00 a.m. – 8:00 p.m." },
    { label: "Martes", value: "9:00 a.m. – 8:00 p.m." },
    { label: "Miércoles", value: "9:00 a.m. – 8:00 p.m." },
    { label: "Jueves", value: "9:00 a.m. – 8:00 p.m." },
    { label: "Viernes", value: "9:00 a.m. – 10:00 p.m." },
    { label: "Sábado", value: "9:00 a.m. – 10:00 p.m." },
    { label: "Domingo", value: "10:00 a.m. – 8:00 p.m." },
  ],
  specialHours:
    "El food hall y la terraza cierran una hora después del centro comercial. El cine opera hasta la última función. En días festivos publicamos horarios especiales en nuestras redes.",
  stats: [
    { label: "Marcas y tiendas", value: "30+" },
    { label: "Restaurantes y cafés", value: "12" },
    { label: "Parqueos gratuitos", value: "850" },
    { label: "Niveles comerciales", value: "2 + terraza" },
  ],
  levels,
  services: [
    { label: "Baños familiares", description: "Módulos con cambiador de bebé en ambos niveles, junto al atrio central." },
    { label: "Wifi gratuito", description: "Red abierta CENTRAL-SM en todas las áreas comunes, sin registro." },
    { label: "Cajeros automáticos", description: "Seis cajeros de distintos bancos en el corredor de servicios del Nivel 1." },
    { label: "Sillas de ruedas", description: "Préstamo sin costo en el módulo de información presentando documento." },
    { label: "Carritos para bebé", description: "Coches disponibles en el módulo de información del Nivel 1." },
    { label: "Módulo de información", description: "Atención de 9:00 a.m. a 8:00 p.m. junto al acceso principal." },
    { label: "Lockers", description: "Casilleros de uso diario en el pasillo del food hall." },
    { label: "Zona pet friendly", description: "Mascotas con correa bienvenidas en la terraza y la plaza de eventos." },
  ],
  accessibility: [
    { label: "Accesos a nivel", description: "Ingresos sin gradas desde los cuatro estacionamientos." },
    { label: "Ascensores y rampas", description: "Dos ascensores panorámicos y rampas con pendiente normada entre niveles." },
    { label: "Parqueos inclusivos", description: "24 espacios reservados junto a los accesos norte y sur." },
    { label: "Señalización clara", description: "Wayfinding en alto contraste y planos táctiles en el atrio." },
  ],
  parking: [
    { label: "Estacionamiento Norte", description: "320 espacios. Acceso directo al atrio y al corredor de servicios." },
    { label: "Estacionamiento Sur", description: "260 espacios. El más cercano al food hall y al cine." },
    { label: "Estacionamiento Poniente", description: "180 espacios techados, ideal para visitas largas." },
    { label: "Zona de abordaje", description: "90 espacios de rotación rápida para taxis y aplicaciones de transporte." },
  ],
  parkingNote:
    "El estacionamiento es gratuito durante las primeras tres horas y cuenta con vigilancia y circuito cerrado las 24 horas.",
  transport: [
    { label: "Rutas urbanas", description: "Las rutas 90, 96 y 313 tienen parada frente al acceso poniente." },
    { label: "Taxis y aplicaciones", description: "Zona de abordaje señalizada sobre la 8ª Calle Poniente." },
    { label: "Bicicletas", description: "Biciparqueo con 40 espacios junto al acceso norte." },
    { label: "Terminal de oriente", description: "A 10 minutos en vehículo desde la terminal de buses interdepartamentales." },
  ],
  directions: [
    { label: "Desde el centro histórico", description: "Toma la 8ª Calle Poniente hacia el poniente; estamos a tres cuadras del Parque Guzmán." },
    { label: "Desde la carretera Panamericana", description: "Ingresa por la Avenida Roosevelt y continúa 2 km hasta el acceso norte." },
    { label: "Desde el aeropuerto de San Miguel", description: "25 minutos por la carretera al Delirio y luego Avenida Roosevelt." },
    { label: "Referencia visual", description: "Busca la fachada de piedra arena con celosía negra y las palmeras del acceso principal." },
  ],
  faqs: [
    {
      question: "¿El estacionamiento tiene costo?",
      answer: "Las primeras tres horas son gratuitas. Después se cobra una tarifa de rotación de $0.50 por hora.",
    },
    {
      question: "¿Puedo entrar con mi mascota?",
      answer: "Sí, en la terraza y en la plaza de eventos, siempre con correa. Las tiendas definen su propia política.",
    },
    {
      question: "¿Tienen sillas de ruedas disponibles?",
      answer: "Sí, se prestan sin costo en el módulo de información del Nivel 1 presentando un documento de identidad.",
    },
    {
      question: "¿Cómo reservo la plaza de eventos?",
      answer: "Escríbenos desde la página de contacto y el equipo de mercadeo te comparte disponibilidad y requisitos.",
    },
    {
      question: "¿Hay servicio de paquetería o guardado?",
      answer: "Contamos con lockers de uso diario en el pasillo del food hall, sin costo mientras permanezcas en el centro.",
    },
  ],
};
