// src/app/models/filter.ts

export type BrandMode = 'all' | 'whitelist' | 'blacklist';

export type FuelType =
  | 'Gasolina 95 E5'
  | 'Gasolina 98 E5'
  | 'Gasóleo A'
  | 'Gasóleo Premium'
  | 'GLP';

/**
 * Valores “cortos” que usa la UI / filtros internos
 */
export type TipoCombustible =
  | 'todos'
  | 'gasolina95'
  | 'gasolina98'
  | 'diesel'
  | 'dieselPremium'
  | 'glp';

export type OrdenarPor = 'precio' | 'distancia' | 'nombre';

/**
 * MODELO UNIFICADO (castellano) -> lo usa Home + GasolineraService
 */
export interface Filtros {
  tipoCombustible: TipoCombustible;
  empresas: string[];
  precioMaximo: number;
  distanciaMaxima: number;
  soloAbiertas: boolean;
  ordenarPor: OrdenarPor;
}

/**
 * Si en algún archivo quedó importado Filter, lo mantenemos para no romper nada.
 */
export type Filter = Filtros;

/**
 * Mapa para convertir tipoCombustible -> clave real dentro de precios/precios[]
 * (porque la API devuelve nombres largos)
 */
export const TIPO_TO_FUEL_LABEL: Record<TipoCombustible, FuelType | null> = {
  todos: null,
  gasolina95: 'Gasolina 95 E5',
  gasolina98: 'Gasolina 98 E5',
  diesel: 'Gasóleo A',
  dieselPremium: 'Gasóleo Premium',
  glp: 'GLP',
};
