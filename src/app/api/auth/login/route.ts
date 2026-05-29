import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { login } from "@/presentation/services/api/auth/login.service";

export async function POST(
  request: Request,
) {
  try {
    const body = await request.json();

    const response = await login(body);

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

    return NextResponse.json({ message: "Login successful" });
  } catch (error: any) {
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