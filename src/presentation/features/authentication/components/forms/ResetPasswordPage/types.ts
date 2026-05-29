import type z from "zod";
import { resetPasswordFormSchema } from "./schema";

export type ResetPasswordFormSchemaProps = z.infer<typeof resetPasswordFormSchema>;
