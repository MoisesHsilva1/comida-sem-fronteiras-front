import { z } from "zod";

import { isValidCNPJ } from "@/utils/validation";

export const cnpjSchema = z
  .string()
  .max(18, { message: "CNPJ inválido" })
  .refine((val) => !val || isValidCNPJ(val), {
    message: "CNPJ inválido",
  });

export type CnpjValues = z.infer<typeof cnpjSchema>;
