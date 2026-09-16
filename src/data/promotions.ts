import type { Promotion } from "./types";

/**
 * Promociones oficiales de CENTRAL San Miguel Centro.
 * Vacío a propósito: Grupo Galo aún no ha proporcionado contenidos definitivos.
 * La página muestra placeholders identificados mientras tanto.
 */
export const promotions: Promotion[] = [];

/** Tipos de contenido previstos para este módulo. */
export const promotionKinds = [
  "Promociones de comercios",
  "Campañas conjuntas",
  "Black Sale / Mega Sale",
  "Temporadas comerciales",
] as const;
