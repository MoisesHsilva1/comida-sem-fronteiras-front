import { api } from "@/api/api";
import type { OngData } from "@/types/interfaces/ongData";

async function createOng(data: OngData): Promise<OngData> {
  const response = await api.post("/ongs", data);

  return response.data;
}

export default createOng;
