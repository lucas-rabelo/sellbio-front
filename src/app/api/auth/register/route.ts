import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { registerService } from "@/presentation/services/api/auth/register.service";

export async function POST(
  request: Request,
) {
  try {
    const body = await request.json();

    const response = await registerService(body);

    const cookieStore =
      await cookies();

    cookieStore.set(
      "accessToken",
      response.access_token,
      {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        path: "/",
      },
    );

    cookieStore.set(
      "refreshToken",
      response.refresh_token,
      {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        path: "/",
      },
    );

    return NextResponse.json({ message: "Cadastro realizado com sucesso!" });
  } catch (error: any) {
    console.log({error});

    return NextResponse.json(
      {
        message:
          error.message ||
          "Internal server error",
      },
      {
        status:
          error.status || 500,
      },
    );
  }
}