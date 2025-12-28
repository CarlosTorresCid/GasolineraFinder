// src/app/models/location.ts

export interface Ubicacion {
  latitud: number;
  longitud: number;
  ciudad: string;
}

// Alias por compatibilidad si alguien importaba Location
export type Location = Ubicacion;
