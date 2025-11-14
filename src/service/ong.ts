import { api } from "@/api/api";
import type { ApiMultipleResponse } from "@/types/interfaces/ApiMultipleResponse";
import type { ApiParam } from "@/types/interfaces/apiParam";
import type { OngData } from "@/types/interfaces/ongData";
import type { OngResponse } from "@/types/interfaces/ongResponse";

export async function createOng(data: OngData): Promise<OngData> {
  const response = await api.post("/ongs", data);

  return response.data;
}

export async function fetch(
  param?: ApiParam
): Promise<ApiMultipleResponse<OngResponse>> {
  const response = await api.get(
    `/ongs/?limit=${param?.limit}&offset=${param?.offset}&name=${param?.query}`
  );

  return response.data;
}

export async function fetchByDistance(lat: number, lon: number): Promise<OngResponse[]> {
  const response = await api.get(`/ongs/nearest?lat=${lat}&lon=${lon}`);

  return response.data;
}
