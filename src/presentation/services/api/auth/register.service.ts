import { registerFormSchema } from "@/presentation/features/authentication/components/forms/RegisterForm/schema";
import { api } from "../client";
import z from "zod";

type RegisterDTO = z.infer<typeof registerFormSchema>;

type RegisterResponse = {
  access_token: string;
  refresh_token: string;
};

export async function registerService(
  body: RegisterDTO,
) {
  return api<RegisterResponse>(
    "/v1/auth/register",
    {
      method: "POST",
      body: JSON.stringify(body),
    },
  );
}