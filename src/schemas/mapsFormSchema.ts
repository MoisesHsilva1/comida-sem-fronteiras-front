import { z } from "zod";

const schema = z.object({
  search: z
    .string()
    .min(3, "Por favor, insira ao menos 3 caracteres para a busca."),
});

export const mapsSearchSchema = schema;

export type MapsFormSchema = z.infer<typeof schema>;
export type MapsSearchInterface = z.infer<typeof schema>