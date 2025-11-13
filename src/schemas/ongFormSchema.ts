import { z } from "zod";
import { cnpjSchema } from "./shared/cnpjSchema";

export const ongSchema = z.object({
  name: z
    .string()
    .min(2, "O nome deve ter pelo menos 2 caracteres.")
    .max(100, "O nome pode ter no máximo 100 caracteres."),
  email: z
    .string()
    .email("Por favor, insira um e-mail válido.")
    .max(100, "O e-mail pode ter no máximo 100 caracteres."),
  phone: z
    .string()
    .regex(
      /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/,
      "Por favor, insira um número de telefone válido."
    ),
  cnpj: cnpjSchema,
  description: z
    .string()
    .min(10, "A descrição deve ter pelo menos 10 caracteres.")
    .max(500, "A descrição pode ter no máximo 500 caracteres."),
  address: z.string().min(5, "O endereço deve ter pelo menos 5 caracteres."),
});

export type OngFormValues = z.infer<typeof ongSchema>;
