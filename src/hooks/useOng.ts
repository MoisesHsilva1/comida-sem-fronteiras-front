import {
  useMutation,
  useQuery,
  useQueryClient,
  type UseQueryResult,
} from "@tanstack/react-query";
import { createOng, fetch, fetchByDistance } from "@/service/ong";
import type { ApiParam } from "@/types/interfaces/apiParam";
import type { OngData } from "@/types/interfaces/ongData";
import type { OngResponse } from "@/types/interfaces/ongResponse";
import type { ApiMultipleResponse } from "@/types/interfaces/ApiMultipleResponse";

export function useOngCreate() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: OngData) => createOng(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ongs"] });
    },
  });
}

export function useOngFetch(
  enable = true,
  options: ApiParam = {}
): UseQueryResult<ApiMultipleResponse<OngResponse>> {
  return useQuery({
    queryKey: ["ongs", options],
    queryFn: () => fetch(options),
    enabled: enable,
    retry: 0,
  });
}

export function useOngFetchByDistance(
  lat: number,
  lon: number,
  enable = true
): UseQueryResult<OngResponse[]> {
  return useQuery({
    queryKey: ["ongs-nearby", lat, lon],
    queryFn: () => fetchByDistance(lat, lon),
    enabled: enable,
    retry: 0,
  });
}
