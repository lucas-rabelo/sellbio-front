import z from "zod";

export const forgetPasswordFormSchema = z.object({
  email: z.email('E-mail inválido'),
});