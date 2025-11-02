import { fetchPlaces } from "@/api/maps";
import type { PlacesParam } from "@/types/interfaces/placesParam";
import type { PlacesResponse } from "@/types/interfaces/placesResponse";
import { useQuery, type UseQueryResult } from "@tanstack/react-query";

export function usePlacesMapsFetch(
  params: PlacesParam
): UseQueryResult<PlacesResponse, Error> {
  return useQuery({
    queryKey: ["places", params],
    queryFn: () => fetchPlaces(params),
    enabled: !!params.lat && !!params.lon,
  });
}
