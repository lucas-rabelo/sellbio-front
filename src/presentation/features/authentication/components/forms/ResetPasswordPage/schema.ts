import z from "zod";

export const resetPasswordFormSchema = z.object({
  password: z
    .string()
    .min(8, 'A senha deve ter pelo menos 8 caracteres')
    .regex(/[A-Z]/, 'Deve conter pelo menos uma letra maiúscula')
    .regex(/[a-z]/, 'Deve conter pelo menos uma letra minúscula')
    .regex(/[0-9]/, 'Deve conter pelo menos um número')
    .regex(
      /[\W_]/,
      'Deve conter pelo menos um caractere especial (ex: @, #, $, %)',
    ),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  path: ['confirmPassword'],
  message: 'As senhas não coincidem'
});