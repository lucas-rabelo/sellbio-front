import type z from "zod";
import { loginFormSchema } from "./schema";

export type LoginFormSchemaProps = z.infer<typeof loginFormSchema>;
