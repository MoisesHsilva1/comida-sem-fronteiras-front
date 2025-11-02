import Environment from "@/config/env";
import type { PlacesResponse } from "@/types/interfaces/placesResponse";
import type { PlacesParam } from "@/types/interfaces/placesParam";
import axios from "axios";

export const fetchPlaces = async (
  params: PlacesParam
): Promise<PlacesResponse> => {
  const response = await axios.get(
    `${Environment.VITE_API_GEOAPIFY}/places?categories=${params.categories}&filter=circle:${params.lon},${params.lat},${params.distance}&bias=proximity:${params.lon},${params.lat}&limit=${params.limit}&apiKey=${Environment.VITE_API_GEOAPIFY_KEY}`
  );

  return response.data;
};
