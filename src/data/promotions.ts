import modaImg from "@/assets/smc-moda.jpg";
import bellezaImg from "@/assets/smc-belleza.jpg";
import tecnologiaImg from "@/assets/smc-tecnologia.jpg";
import entretenimientoImg from "@/assets/smc-entretenimiento.jpg";
import foodhallImg from "@/assets/smc-foodhall.jpg";
import lifestyleImg from "@/assets/smc-lifestyle.jpg";
import serviciosImg from "@/assets/smc-servicios.jpg";
import detalleImg from "@/assets/smc-detalle.jpg";
import type { Promotion } from "./types";

export const promotions: Promotion[] = [
  {
    slug: "moda-30-off",
    title: "30% en colección de temporada",
    description: "Prendas de lino y algodón seleccionadas con 30% de descuento presentando tu compra en caja.",
    image: modaImg,
    storeSlug: "casa-lino",
    categorySlug: "moda",
    validity: "Vigente del 1 al 30 de septiembre",
    cta: "Ver tienda",
  },
  {
    slug: "martes-de-cine",
    title: "Martes de cine 2x1",
    description: "Dos boletos al precio de uno en funciones antes de las 6:00 p.m., todos los martes.",
    image: entretenimientoImg,
    storeSlug: "cine-central",
    categorySlug: "entretenimiento",
    validity: "Todos los martes de 2026",
    cta: "Ver cine",
  },
  {
    slug: "desayuno-cafe-gratis",
    title: "Café de cortesía con tu desayuno",
    description: "Pide cualquier desayuno antes de las 10:00 a.m. y el café de la casa va por nuestra cuenta.",
    image: foodhallImg,
    storeSlug: "casa-tostada",
    categorySlug: "gastronomia",
    validity: "Lunes a viernes, hasta el 31 de octubre",
    cta: "Ver restaurante",
  },
  {
    slug: "tech-sin-intereses",
    title: "12 meses sin intereses en laptops",
    description: "Financia tu laptop o tablet a 12 meses sin intereses con tarjetas participantes.",
    image: tecnologiaImg,
    storeSlug: "nodo-tech",
    categorySlug: "tecnologia",
    validity: "Vigente hasta el 15 de octubre",
    cta: "Ver tienda",
  },
  {
    slug: "belleza-segunda-unidad",
    title: "Segunda unidad al 50%",
    description: "En perfumería y cuidado facial seleccionado, llevando dos productos de la misma línea.",
    image: bellezaImg,
    storeSlug: "aura-cosmetica",
    categorySlug: "belleza",
    validity: "Del 5 al 28 de septiembre",
    cta: "Ver tienda",
  },
  {
    slug: "parrilla-familiar",
    title: "Parrillada familiar para cuatro",
    description: "Combo de cortes, guarniciones y bebidas para cuatro personas a precio fijo.",
    image: lifestyleImg,
    storeSlug: "brasa-guzman",
    categorySlug: "gastronomia",
    validity: "Viernes a domingo, todo septiembre",
    cta: "Ver restaurante",
  },
  {
    slug: "apertura-cuenta",
    title: "Abre tu cuenta sin monto mínimo",
    description: "Apertura de cuenta de ahorro sin saldo mínimo y tarjeta de débito sin costo el primer año.",
    image: serviciosImg,
    storeSlug: "banco-oriente",
    categorySlug: "servicios",
    validity: "Vigente hasta el 31 de diciembre",
    cta: "Ver agencia",
  },
  {
    slug: "helado-2x1",
    title: "2x1 en helados de fruta local",
    description: "Dos bolas por el precio de una en sabores de marañón, nance y jocote.",
    image: detalleImg,
    storeSlug: "helados-conacaste",
    categorySlug: "gastronomia",
    validity: "Todos los domingos de septiembre",
    cta: "Ver isla",
  },
];
