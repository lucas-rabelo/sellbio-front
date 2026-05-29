import type z from "zod";
import { forgetPasswordFormSchema } from "./schema";

export type ForgetPasswordFormSchemaProps = z.infer<typeof forgetPasswordFormSchema>;
