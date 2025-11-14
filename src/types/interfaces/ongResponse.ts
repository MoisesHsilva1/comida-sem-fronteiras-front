export interface Coordinates {
  lat: number;
  lon: number;
}

export interface OngResponse {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  coordinates: Coordinates;
  description: string;
  cnpj: string;
}
