export interface PlacesResponse {
  type: string;
  features: PlaceResponse[];
}

export interface PlaceResponse {
  type: "Feature";
  properties: PlaceProperties;
  geometry: Geometry;
}

export interface PlaceProperties {
  name?: string;
  country: string;
  country_code: string;
  region: string;
  state: string;
  county: string;
  state_district: string;
  city: string;
  municipality: string;
  postcode: string;
  district?: string;
  suburb?: string;
  street: string;
  housenumber?: string | number;
  iso3166_2: string;
  lon: number;
  lat: number;
  state_code: string;
  formatted: string;
  address_line1: string;
  address_line2: string;
  categories: string[];
  details: string[];
  datasource: Datasource;
  brand?: string;
  brand_details?: BrandDetails;
  commercial: Commercial;
  distance: number;
  place_id: string;
  operator?: string;
  website?: string;
  opening_hours?: string;
  contact?: Contact;
  building?: Building;
  facilities?: Facilities;
  payment_options?: PaymentOptions;
}

export interface Datasource {
  sourcename: string;
  attribution: string;
  license: string;
  url: string;
  raw: Record<string, any>;
}

export interface BrandDetails {
  wikidata?: string;
  wikipedia?: string;
}

export interface Commercial {
  type: string;
}

export interface Geometry {
  type: "Point";
  coordinates: [number, number];
}

export interface Contact {
  phone?: string;
}

export interface Building {
  height?: number;
}

export interface Facilities {
  wheelchair?: boolean;
  air_conditioning?: boolean;
}

export interface PaymentOptions {
  cash?: boolean;
  credit_cards?: boolean;
}
