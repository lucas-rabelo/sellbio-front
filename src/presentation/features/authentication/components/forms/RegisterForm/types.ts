import type z from "zod";
import { registerFormSchema } from "./schema";

export type RegisterFormSchemaProps = z.infer<typeof registerFormSchema>;
