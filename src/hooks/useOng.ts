import createOng from "@/service/ong";
import type { OngData } from "@/types/interfaces/ongData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useOngCreate() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: OngData) => createOng(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ongs"] });
    },
  });
}
