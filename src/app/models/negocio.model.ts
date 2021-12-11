import { Marker } from "./marker.model";

export interface Negocio {
  id: number,
  nombre: string,
  tipo: string,
  foto: string,
  telefono: string,
  direccion: string,
  location: Marker
}