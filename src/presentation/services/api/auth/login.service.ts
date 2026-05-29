import { loginFormSchema } from "@/presentation/features/authentication/components/forms/LoginForm/schema";
import { api } from "../client";
import z from "zod";

type LoginDTO = z.infer<typeof loginFormSchema>;

type LoginResponse = {
  access_token: string;
  refresh_token: string;
};

export async function loginService(
  body: LoginDTO,
) {
  return api<LoginResponse>(
    "/v1/auth/login",
    {
      method: "POST",
      body: JSON.stringify(body),
    },
  );
}