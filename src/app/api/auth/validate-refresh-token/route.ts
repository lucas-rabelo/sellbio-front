import { NextRequest, NextResponse } from 'next/server'
import { refreshTokenService } from '@/presentation/services/auth.service'
import { HttpError } from '@/presentation/lib/http-client'

export async function POST(request: NextRequest) {
  try {
    const refreshToken = request.cookies.get('refresh_token')?.value

    if (!refreshToken) {
      return NextResponse.json({ error: 'Refresh token não encontrado.' }, { status: 401 })
    }

    const { accessToken, refreshToken: newRefreshToken } =
      await refreshTokenService(refreshToken);

    const response = NextResponse.json({ success: true }, { status: 200 });

    response.cookies.set('access_token', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 15, // 15 minutos
    })

    // Renova o refresh token se o backend retornar um novo
    response.cookies.set('refresh_token', newRefreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 dias
    })

    return response
  } catch (error) {
    if (error instanceof HttpError) {
      // Se o refresh falhou (ex: expirado), força logout
      if (error.statusCode === 401) {
        const response = NextResponse.json(
          { error: 'Sessão expirada. Faça login novamente.' },
          { status: 401 },
        )
        response.cookies.delete('access_token')
        response.cookies.delete('refresh_token')
        return response
      }
      return NextResponse.json({ error: error.message }, { status: error.statusCode })
    }
    return NextResponse.json({ error: 'Erro interno.' }, { status: 500 })
  }
}