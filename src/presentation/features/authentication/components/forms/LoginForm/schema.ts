import z from "zod";

export const loginFormSchema = z.object({
  email: z.email({ error: "E-mail inválido" }),
  password: z
    .string()
    .min(8, { error: "A senha deve conter no mínimo 8 caracteres" }),
});